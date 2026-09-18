import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

const META_GRAPH_VERSION = "v21.0";

type LeadPayload = {
  eventId: string;
  eventSourceUrl: string;
  fbp?: string;
  fbc?: string;
  name?: string;
  email?: string;
  phone?: string;
  goal?: string;
  readiness?: string;
  ageRange?: string;
  city?: string;
};

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

/** Meta requires E.164-ish digits with country code, no symbols. Assumes India (+91) when absent. */
function normalizePhone(rawPhone: string): string | undefined {
  const digits = rawPhone.replace(/\D/g, "");
  if (!digits) return undefined;
  if (digits.length === 10) return `91${digits}`;
  if (digits.length === 11 && digits.startsWith("0")) return `91${digits.slice(1)}`;
  return digits;
}

export async function POST(request: Request) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    // Tracking isn't configured — don't fail the lead submission over it.
    return NextResponse.json({ skipped: true });
  }

  const body = (await request.json()) as LeadPayload;

  const email = body.email?.trim().toLowerCase();
  const phone = body.phone ? normalizePhone(body.phone) : undefined;

  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp = forwardedFor?.split(",")[0]?.trim();

  const userData: Record<string, unknown> = {
    client_user_agent: request.headers.get("user-agent") ?? undefined,
    client_ip_address: clientIp,
    fbp: body.fbp,
    fbc: body.fbc,
  };
  if (email) userData.em = [sha256(email)];
  if (phone) userData.ph = [sha256(phone)];

  const event = {
    event_name: "Lead",
    event_time: Math.floor(Date.now() / 1000),
    event_id: body.eventId,
    event_source_url: body.eventSourceUrl,
    action_source: "website",
    user_data: userData,
    custom_data: {
      content_name: "consultation_form",
      goal: body.goal,
      readiness: body.readiness,
      age_range: body.ageRange,
      city: body.city,
    },
  };

  const testEventCode = process.env.META_CAPI_TEST_EVENT_CODE;
  const graphUrl = `https://graph.facebook.com/${META_GRAPH_VERSION}/${pixelId}/events?access_token=${accessToken}`;

  try {
    const metaResponse = await fetch(graphUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [event],
        ...(testEventCode ? { test_event_code: testEventCode } : {}),
      }),
    });

    if (!metaResponse.ok) {
      const errorBody = await metaResponse.text();
      console.error("Meta CAPI error", metaResponse.status, errorBody);
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Meta CAPI request failed", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
