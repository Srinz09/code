"use client";

import { useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { buildFormWhatsAppMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { goalOptions, challengeOptions, readinessOptions } from "@/lib/data/content";

/** Set a real endpoint (Sheets/CRM/webhook) to enable live lead storage. */
const LEAD_WEBHOOK_URL = "";

type StepKey = "goal" | "challenge" | "tried" | "readiness" | "contact";
const STEPS: StepKey[] = ["goal", "challenge", "tried", "readiness", "contact"];

type FormState = {
  goal: string;
  challenge: string;
  tried: string;
  readiness: string;
  name: string;
  city: string;
  phone: string;
  consent: boolean;
};

const initialState: FormState = { goal: "", challenge: "", tried: "", readiness: "", name: "", city: "", phone: "", consent: false };

type Variant = "home" | "start";

const copy = {
  home: {
    cardPadding: "px-7 py-8",
    dotsMb: "mb-7",
    stepHeading: "mb-4 text-[17px] font-semibold text-ink",
    optionPadding: "px-4 py-3.5 text-[14.5px]",
    triedSub: null as string | null,
    textareaPlaceholder: "e.g. diets, gym memberships, apps...",
    textareaClass: "min-h-[110px] p-3.5 text-[14.5px]",
    contactHeading: "Almost done — how can I reach you?",
    inputClass: "px-3.5 py-[13px] text-[16px] min-h-11",
    consentText:
      "This is wellness and lifestyle guidance, not medical advice. If I have a medical condition (e.g. diabetes, thyroid, BP, cholesterol), I'll consult my healthcare professional.",
    consentClass: "mt-1.5 gap-2.5 text-[13px]",
    navMt: "mt-7",
    backClass: "px-5 py-3 text-[14px]",
    btnClass: "px-[26px] py-3 text-[14.5px]",
    successBg: "bg-forest-soft",
    successPadding: "px-7 py-12",
    successHeading: "text-[26px]",
    successText: "text-[15px] mb-6",
    successTextColor: "var(--forest-soft-text-2)",
    successBtnClass: "px-7 py-[15px] text-[15px]",
    errorPadding: "px-7 py-12",
    errorHeading: "text-[22px]",
    errorText: "text-[15px] mb-6",
    errorBtnGap: "gap-3",
    errorBtnClass: "px-6 py-[14px] text-[14.5px]",
  },
  start: {
    cardPadding: "px-6 py-7",
    dotsMb: "mb-6",
    stepHeading: "mb-3.5 text-[16px] font-semibold text-ink",
    optionPadding: "px-[15px] py-[13px] text-[14px]",
    triedSub: "Optional.",
    textareaPlaceholder: "e.g. diets, gym, apps...",
    textareaClass: "min-h-[90px] px-3.5 py-3 text-[14px]",
    contactHeading: "How can I reach you?",
    inputClass: "px-3.5 py-3 text-[14.5px]",
    consentText:
      "This is wellness and lifestyle guidance, not medical advice. If I have a medical condition, I'll consult my healthcare professional.",
    consentClass: "mt-1 gap-2.5 text-[12.5px]",
    navMt: "mt-6",
    backClass: "px-[18px] py-3 text-[13.5px]",
    btnClass: "px-6 py-3 text-[14px]",
    successBg: "bg-cream",
    successPadding: "px-6 py-10",
    successHeading: "text-[22px]",
    successText: "text-[14.5px] mb-5",
    successTextColor: "var(--ink-soft)",
    successBtnClass: "px-[26px] py-[14px] text-[14.5px]",
    errorPadding: "px-6 py-10",
    errorHeading: "text-[20px]",
    errorText: "text-[14.5px] mb-5",
    errorBtnGap: "gap-2.5",
    errorBtnClass: "px-[22px] py-[13px] text-[14px]",
  },
} satisfies Record<Variant, Record<string, unknown>>;

function OptionList({
  options,
  value,
  onSelect,
  padding,
}: {
  options: string[];
  value: string;
  onSelect: (v: string) => void;
  padding: string;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <div
            key={opt}
            onClick={() => onSelect(opt)}
            className={`cursor-pointer rounded-[2px] border font-medium ${padding}`}
            style={{
              borderColor: selected ? "var(--forest)" : "var(--line-soft)",
              background: selected ? "var(--forest-soft)" : "var(--cream)",
            }}
          >
            {opt}
          </div>
        );
      })}
    </div>
  );
}

export default function LeadForm({ variant, page }: { variant: Variant; page: string }) {
  const c = copy[variant];
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);
  const startedRef = useRef(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function nextStep() {
    if (!startedRef.current) {
      startedRef.current = true;
      track("form_started");
    }
    track("form_step_completed", { step });
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  }
  function prevStep() {
    setStep((s) => Math.max(0, s - 1));
  }

  const formWhatsappUrl = buildWhatsAppLink(buildFormWhatsAppMessage(form));

  async function submitForm() {
    if (!form.consent) return;
    const lead = { ...form, page, timestamp: new Date().toISOString() };
    track("form_submitted", lead);
    if (LEAD_WEBHOOK_URL) {
      setSubmitting(true);
      setSubmitError(false);
      try {
        const res = await fetch(LEAD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
        if (!res.ok) throw new Error("bad response");
        track("lead_stored", lead);
        setSubmitting(false);
        setSubmitted(true);
      } catch {
        setSubmitting(false);
        setSubmitError(true);
      }
    } else {
      track("lead_stored", lead);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className={`${c.successBg} rounded-[2px] text-center ${c.successPadding}`}>
        <h3 className={`font-display mb-3.5 font-semibold text-ink ${c.successHeading}`}>
          You&rsquo;re One Step Closer To Starting.
        </h3>
        <p className={c.successText} style={{ color: c.successTextColor }}>
          Your details are ready. Tap below to send them on WhatsApp and start the conversation.
        </p>
        <a
          href={formWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { source: "form_success" })}
          className={`inline-block rounded-[2px] bg-forest font-semibold text-cream-light ${c.successBtnClass}`}
        >
          Continue On WhatsApp
        </a>
      </div>
    );
  }

  if (submitError) {
    return (
      <div className={`rounded-[2px] text-center ${c.errorPadding}`} style={{ background: "var(--error-bg)" }}>
        <h3 className={`font-display mb-3 font-semibold text-ink ${c.errorHeading}`}>Something Went Wrong.</h3>
        <p className={c.errorText} style={{ color: "var(--error-text)" }}>
          Please try again, or continue directly on WhatsApp.
        </p>
        <div className={`flex flex-wrap justify-center ${c.errorBtnGap}`}>
          <div
            onClick={() => setSubmitError(false)}
            className={`cursor-pointer rounded-[2px] border font-semibold ${c.errorBtnClass}`}
            style={{ borderColor: "var(--error-border)" }}
          >
            Try Again
          </div>
          <a
            href={formWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { source: "form_success" })}
            className={`rounded-[2px] bg-forest font-semibold text-cream-light ${c.errorBtnClass}`}
          >
            Continue On WhatsApp
          </a>
        </div>
      </div>
    );
  }

  const key = STEPS[step];
  const showBack = step > 0;
  const showNext = step < 4;
  const showSubmit = step === 4;

  return (
    <div className={`rounded-[2px] border border-line-soft bg-cream ${c.cardPadding}`}>
      <div className={`flex gap-1.5 ${c.dotsMb}`}>
        {STEPS.map((s, i) => (
          <div key={s} className="h-1 flex-1 rounded-full" style={{ background: i <= step ? "var(--forest)" : "var(--line-soft)" }} />
        ))}
      </div>

      {key === "goal" && (
        <div>
          <div className={c.stepHeading}>What would you like to work on?</div>
          <OptionList options={goalOptions} value={form.goal} onSelect={(v) => update("goal", v)} padding={c.optionPadding} />
        </div>
      )}

      {key === "challenge" && (
        <div>
          <div className={c.stepHeading}>What usually makes it difficult to stay consistent?</div>
          <OptionList options={challengeOptions} value={form.challenge} onSelect={(v) => update("challenge", v)} padding={c.optionPadding} />
        </div>
      )}

      {key === "tried" && (
        <div>
          <div className={c.triedSub ? "mb-1.5 text-[16px] font-semibold text-ink" : c.stepHeading}>What have you tried before?</div>
          {c.triedSub && <div className="mb-2.5 text-[12.5px] text-[var(--ink-faint)]">{c.triedSub}</div>}
          <textarea
            value={form.tried}
            onChange={(e) => update("tried", e.target.value)}
            placeholder={c.textareaPlaceholder}
            className={`box-border w-full resize-y rounded-[2px] border border-line-strong ${c.textareaClass}`}
          />
        </div>
      )}

      {key === "readiness" && (
        <div>
          <div className={c.stepHeading}>How ready do you feel to make a change right now?</div>
          <OptionList options={readinessOptions} value={form.readiness} onSelect={(v) => update("readiness", v)} padding={c.optionPadding} />
        </div>
      )}

      {key === "contact" && (
        <div>
          <div className={c.stepHeading}>{c.contactHeading}</div>
          <div className="flex flex-col gap-3">
            <input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Name"
              type="text"
              autoComplete="name"
              className={`box-border rounded-[2px] border border-line-strong ${c.inputClass}`}
            />
            <input
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              placeholder="City"
              type="text"
              autoComplete="address-level2"
              className={`box-border rounded-[2px] border border-line-strong ${c.inputClass}`}
            />
            <input
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="Phone / WhatsApp number"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              className={`box-border rounded-[2px] border border-line-strong ${c.inputClass}`}
            />
            <label className={`flex items-start leading-[1.5] text-[var(--ink-soft)] ${c.consentClass}`}>
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="mt-0.5"
              />
              {c.consentText}
            </label>
          </div>
        </div>
      )}

      <div className={`flex justify-between ${c.navMt}`}>
        {showBack ? (
          <div onClick={prevStep} className={`cursor-pointer font-semibold text-[var(--ink-faint-2)] ${c.backClass}`}>
            Back
          </div>
        ) : (
          <div />
        )}
        {showNext && (
          <div onClick={nextStep} className={`cursor-pointer rounded-[2px] bg-forest font-semibold text-cream-light ${c.btnClass}`}>
            Continue
          </div>
        )}
        {showSubmit && (
          <div
            onClick={submitForm}
            className={`cursor-pointer rounded-[2px] bg-forest font-semibold text-cream-light ${c.btnClass}`}
            style={{ opacity: form.consent ? 1 : 0.5 }}
          >
            {submitting ? "Sending..." : "Book My Consultation"}
          </div>
        )}
      </div>
    </div>
  );
}
