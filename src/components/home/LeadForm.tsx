"use client";

import { useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { generateEventId, getMetaBrowserIds, trackMetaPixelEvent } from "@/lib/meta";
import WhatsAppButton from "../WhatsAppButton";
import {
  goalOptions,
  challengeOptions,
  readinessOptions,
  ageRangeOptions,
  medicalOptions,
} from "@/lib/data/content";

type StepKey = "goal" | "challenge" | "tried" | "readiness" | "medical" | "contact";

const FULL_STEPS: StepKey[] = ["goal", "challenge", "tried", "readiness", "medical", "contact"];
const SHORT_STEPS: StepKey[] = ["goal", "readiness", "contact"];

type FormState = {
  goal: string;
  challenge: string;
  tried: string;
  readiness: string;
  medical: string;
  name: string;
  ageRange: string;
  city: string;
  phone: string;
  email: string;
  consent: boolean;
};

const initialState: FormState = {
  goal: "",
  challenge: "",
  tried: "",
  readiness: "",
  medical: "",
  name: "",
  ageRange: "",
  city: "",
  phone: "",
  email: "",
  consent: false,
};

function OptionList({
  options,
  value,
  onSelect,
}: {
  options: string[];
  value: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onSelect(opt)}
            className={`rounded-md border px-4 py-3.5 text-left text-[14.5px] font-medium transition-colors ${
              selected
                ? "border-primary bg-primary-soft text-primary-dark"
                : "border-line bg-surface text-ink hover:border-ink-faint"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default function LeadForm({ variant = "full" }: { variant?: "full" | "short" }) {
  const stepKeys = variant === "short" ? SHORT_STEPS : FULL_STEPS;
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);
  const startedRef = useRef(false);

  function markStarted() {
    if (!startedRef.current) {
      startedRef.current = true;
      track("form_started");
    }
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    markStarted();
    setForm((f) => ({ ...f, [key]: value }));
  }

  function next() {
    track("form_step_completed", { step, key: stepKeys[step] });
    setStep((s) => Math.min(stepKeys.length - 1, s + 1));
  }
  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  function submit() {
    if (!form.consent) return;
    track("form_submitted", { goal: form.goal, readiness: form.readiness });
    track("consultation_request", { goal: form.goal, ageRange: form.ageRange, city: form.city });

    // Same eventId to both calls so Meta dedupes the browser pixel event
    // against the server-side Conversions API event.
    const eventId = generateEventId();
    trackMetaPixelEvent(
      "Lead",
      { content_name: "consultation_form", goal: form.goal, readiness: form.readiness },
      eventId,
    );
    const { fbp, fbc } = getMetaBrowserIds();
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        eventId,
        eventSourceUrl: window.location.href,
        fbp,
        fbc,
        name: form.name,
        email: form.email,
        phone: form.phone,
        goal: form.goal,
        readiness: form.readiness,
        ageRange: form.ageRange,
        city: form.city,
      }),
    }).catch(() => {
      // Best-effort — never block the lead confirmation UI on this.
    });

    setSubmitted(true);
  }

  const summaryMessage = `Hi Debasri, I just filled out the form on your website.

Name: ${form.name || "—"}
Age range: ${form.ageRange || "—"}
City: ${form.city || "—"}
Main goal: ${form.goal || "—"}
Biggest challenge: ${form.challenge || "—"}
How ready I feel: ${form.readiness || "—"}

I'd like to book my free consultation.`;

  if (submitted) {
    return (
      <div className="rounded-md bg-primary-soft p-8 text-center sm:p-12">
        <h3 className="font-display text-[24px] font-semibold text-primary-dark">
          You&rsquo;re one step closer to getting started.
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-[14.5px] leading-relaxed text-ink-soft">
          I&rsquo;ll personally go through what you shared. For the fastest response, continue the
          conversation on WhatsApp now — I&rsquo;ll reply there directly.
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppButton message={summaryMessage} context="form_success" size="lg">
            Continue on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    );
  }

  const currentKey = stepKeys[step];
  const showBack = step > 0;
  const isLast = step === stepKeys.length - 1;

  return (
    <div className="rounded-md border border-line bg-surface p-6 sm:p-8">
      <div className="mb-7 flex gap-1.5">
        {stepKeys.map((key, i) => (
          <div key={key} className={`h-1 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-line"}`} />
        ))}
      </div>

      {currentKey === "goal" && (
        <div>
          <div className="mb-4 text-[17px] font-semibold text-ink">What would you like to work on?</div>
          <OptionList options={goalOptions} value={form.goal} onSelect={(v) => update("goal", v)} />
        </div>
      )}

      {currentKey === "challenge" && (
        <div>
          <div className="mb-4 text-[17px] font-semibold text-ink">
            What&rsquo;s your biggest challenge right now?
          </div>
          <OptionList options={challengeOptions} value={form.challenge} onSelect={(v) => update("challenge", v)} />
        </div>
      )}

      {currentKey === "tried" && (
        <div>
          <div className="mb-4 text-[17px] font-semibold text-ink">What have you tried before?</div>
          <textarea
            id="leadTried"
            value={form.tried}
            onChange={(e) => update("tried", e.target.value)}
            placeholder="e.g. diets, gym memberships, apps..."
            className="min-h-[110px] w-full resize-vertical rounded-md border border-line bg-bg p-3.5 text-[14.5px]"
          />
        </div>
      )}

      {currentKey === "readiness" && (
        <div>
          <div className="mb-4 text-[17px] font-semibold text-ink">
            How ready do you feel to make a change right now?
          </div>
          <OptionList options={readinessOptions} value={form.readiness} onSelect={(v) => update("readiness", v)} />
        </div>
      )}

      {currentKey === "medical" && (
        <div>
          <div className="mb-1.5 text-[17px] font-semibold text-ink">
            Do you have any medical condition or concern you believe is relevant?
          </div>
          <p className="mb-4 text-[12.5px] leading-relaxed text-ink-faint">
            This helps me understand your situation. It does not replace medical advice — please continue
            working with your qualified healthcare professional regarding any condition.
          </p>
          <OptionList options={medicalOptions} value={form.medical} onSelect={(v) => update("medical", v)} />
        </div>
      )}

      {currentKey === "contact" && (
        <div>
          <div className="mb-4 text-[17px] font-semibold text-ink">Almost done — how can I reach you?</div>
          <div className="flex flex-col gap-3">
            <input
              id="leadName"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Name"
              className="rounded-md border border-line bg-bg p-3 text-[14.5px]"
            />
            {variant === "full" && (
              <>
                <OptionList
                  options={ageRangeOptions}
                  value={form.ageRange}
                  onSelect={(v) => update("ageRange", v)}
                />
                <input
                  id="leadCity"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  placeholder="City"
                  className="rounded-md border border-line bg-bg p-3 text-[14.5px]"
                />
              </>
            )}
            <input
              id="leadPhone"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="WhatsApp / phone number"
              className="rounded-md border border-line bg-bg p-3 text-[14.5px]"
            />
            {variant === "full" && (
              <input
                id="leadEmail"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="Email (optional)"
                className="rounded-md border border-line bg-bg p-3 text-[14.5px]"
              />
            )}
            <label className="mt-1.5 flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-soft">
              <input
                id="leadConsent"
                type="checkbox"
                checked={form.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="mt-0.5"
              />
              I understand this consultation provides wellness and lifestyle guidance and does not replace
              medical advice.
            </label>
          </div>
        </div>
      )}

      <div className="mt-7 flex items-center justify-between">
        {showBack ? (
          <button type="button" onClick={back} className="px-3 py-2.5 text-[14px] font-semibold text-ink-soft">
            Back
          </button>
        ) : (
          <span />
        )}
        {!isLast ? (
          <button
            type="button"
            onClick={next}
            className="rounded-md bg-primary px-6 py-3 text-[14.5px] font-semibold text-on-primary hover:bg-primary-dark"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={!form.consent}
            className="rounded-md bg-primary px-6 py-3 text-[14.5px] font-semibold text-on-primary hover:bg-primary-dark disabled:opacity-50"
          >
            Book My Consultation
          </button>
        )}
      </div>
    </div>
  );
}
