"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

function bmiInfo(bmiRaw: number) {
  if (bmiRaw > 0 && bmiRaw < 18.5) {
    return {
      category: "Underweight range",
      message:
        "Building healthy weight and strength is a different goal from losing it — let’s talk about the right approach for you.",
    };
  }
  if (bmiRaw >= 18.5 && bmiRaw < 25) {
    return {
      category: "Within typical range",
      message:
        "Your BMI falls in a typical range — many people here still want more energy, consistency, or better habits. Let’s talk about what you’re aiming for.",
    };
  }
  if (bmiRaw >= 25 && bmiRaw < 30) {
    return { category: "Above typical range", message: "A structured, sustainable plan starts with a single conversation." };
  }
  if (bmiRaw >= 30) {
    return {
      category: "Well above typical range",
      message: "You deserve real support, not another crash diet. Let’s start with a conversation.",
    };
  }
  return { category: "", message: "Enter your height and weight to see where you stand." };
}

export default function WeighingScale() {
  const [weight, setWeight] = useState(78);
  const [height, setHeight] = useState(165);
  const [bounceKey, setBounceKey] = useState(0);

  const heightM = height / 100;
  const bmiRaw = heightM > 0 && weight > 0 ? weight / (heightM * heightM) : 0;
  const bmiValue = bmiRaw ? bmiRaw.toFixed(1) : "--";
  const { category, message } = bmiInfo(bmiRaw);
  const markerLeft = `${((weight - 40) / (150 - 40)) * 100}%`;

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-[920px]">
        <div className="flex flex-wrap items-center gap-11">
          <div className="min-w-[280px]" style={{ flex: "1.2 1 0%" }}>
            <h2
              className="font-display mb-3.5 font-semibold text-ink"
              style={{ fontSize: "clamp(26px,3.4vw,36px)" }}
            >
              Every Transformation Starts With A Number.
            </h2>
            <p className="mb-8 text-[15.5px] leading-[1.6] text-[var(--ink-soft)]">
              Mine was 99&nbsp;kg &mdash; alongside diabetes, a fatty liver, and a fibroid large enough to need
              surgery. Whatever your starting number is today, it&rsquo;s just where you begin.
            </p>

            <div className="mb-2.5 text-[12.5px] font-semibold tracking-[0.08em] text-[var(--ink-faint)] uppercase">
              Drag to where you are today
            </div>
            <div className="relative h-14">
              <div
                className="absolute top-[26px] right-0 left-0 h-3 overflow-hidden rounded-[6px]"
                style={{
                  background:
                    "repeating-linear-gradient(90deg,oklch(75% 0.015 85) 0,oklch(75% 0.015 85) 1px,transparent 1px,transparent 10px)",
                }}
              >
                <div
                  className="absolute top-0 bottom-0 left-0 transition-[width] duration-150 ease-out"
                  style={{ width: markerLeft, background: "oklch(28% 0.05 145 / 0.18)" }}
                />
              </div>
              <div
                key={bounceKey}
                className="font-display animate-scale-bounce absolute -top-1 font-bold whitespace-nowrap text-forest"
                style={{ left: markerLeft, transform: "translateX(-50%)", fontSize: "20px" }}
              >
                {weight} kg
              </div>
              <input
                type="range"
                min={40}
                max={150}
                value={weight}
                onChange={(e) => {
                  setWeight(Number(e.target.value));
                  setBounceKey((k) => k + 1);
                }}
                className="absolute top-[10px] right-0 left-0 h-11 w-full cursor-grab"
                style={{ margin: 0 }}
                aria-label="Your current weight in kg"
              />
            </div>
          </div>

          <div className="min-w-[240px] flex-1 rounded-[4px] border border-line-soft bg-cream-alt px-[22px] py-6">
            <div className="mb-2 text-[12px] font-semibold text-[var(--ink-faint)]">Your height (cm)</div>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="mb-[18px] box-border min-h-11 w-full rounded-[2px] border border-line-strong px-3 py-[11px] text-[16px]"
            />
            <div className="border-t border-line-soft pt-4 text-center">
              <div className="mb-1 text-[12px] font-semibold text-[var(--ink-faint)]">Your BMI at {weight} kg</div>
              <div className="font-display text-[32px] font-bold text-forest [font-variant-numeric:tabular-nums]">
                {bmiValue}
              </div>
              <div className="mb-2.5 min-h-[15px] text-[12px] font-semibold text-forest-light">{category}</div>
              <div className="min-h-[57px] text-[13px] leading-[1.5] text-[var(--ink-soft-2)]">{message}</div>
            </div>
            <div className="mt-3 text-center text-[10.5px] text-[var(--ink-faintest)]">
              A general indicator, not a medical diagnosis.
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up mt-10 rounded-[4px] bg-forest-soft px-[26px] py-7 text-left">
          <h3 className="font-display mb-2.5 text-[19px] font-semibold text-ink">Picture Six Months From Now.</h3>
          <p className="mb-1.5 text-[14.5px] leading-[1.6]" style={{ color: "var(--forest-soft-text)" }}>
            Not a promise of a number on this scale &mdash; a routine you don&rsquo;t dread, energy that doesn&rsquo;t
            run out by 3pm, clothes that fit the way you want, and someone in your corner the whole way there.
          </p>
          <p className="mb-[18px] text-[12px]" style={{ color: "var(--forest-soft-text-3)" }}>
            Individual results vary. This describes a possible experience, not a guaranteed outcome.
          </p>
          <div className="text-center">
            <a
              href="#consultation"
              onClick={() => track("scale_cta_click", { weight })}
              className="animate-cta-pulse inline-block rounded-[2px] bg-forest px-[30px] py-[15px] text-[15px] font-bold text-cream-light"
            >
              Start My Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
