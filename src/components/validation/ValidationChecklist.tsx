"use client";

import { useState } from "react";
import { validationSteps } from "@/lib/data/validationFramework";

const STORAGE_KEY = "validation-framework-progress";

function readStoredProgress(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function ValidationChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>(readStoredProgress);

  function toggle(itemKey: string) {
    setChecked((prev) => {
      const next = { ...prev, [itemKey]: !prev[itemKey] };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // localStorage unavailable — toggle still works, just won't persist
      }
      return next;
    });
  }

  const totalItems = validationSteps.reduce((sum, step) => sum + step.checklist.length, 0);
  const totalChecked = Object.values(checked).filter(Boolean).length;

  return (
    <div className="flex flex-col gap-10">
      <div className="rounded-lg border border-line bg-sage px-5 py-4">
        <div className="flex items-center justify-between text-[13.5px] font-semibold text-ink">
          <span>Your progress</span>
          <span suppressHydrationWarning>
            {totalChecked} / {totalItems}
          </span>
        </div>
        <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-300"
            style={{ width: `${(totalChecked / totalItems) * 100}%` }}
            suppressHydrationWarning
          />
        </div>
      </div>

      {validationSteps.map((step) => {
        const stepChecked = step.checklist.filter((_, i) => checked[`${step.id}-${i}`]).length;
        return (
          <div key={step.id} className="rounded-xl border border-line bg-surface p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="font-display text-[15px] font-semibold text-accent-dark">{step.number}</span>
              <div className="flex-1">
                <h3 className="font-display text-[20px] font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{step.detail}</p>
              </div>
            </div>

            <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-5">
              {step.checklist.map((item, i) => {
                const itemKey = `${step.id}-${i}`;
                const isChecked = !!checked[itemKey];
                return (
                  <li key={itemKey}>
                    <label className="flex cursor-pointer items-start gap-3 text-[14.5px] leading-relaxed text-ink-soft">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggle(itemKey)}
                        className="mt-1 size-4 shrink-0 accent-primary"
                        suppressHydrationWarning
                      />
                      <span className={isChecked ? "text-ink-faint line-through" : ""} suppressHydrationWarning>
                        {item}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>

            <p className="mt-5 text-[13px] font-medium text-ink-faint" suppressHydrationWarning>
              {stepChecked} / {step.checklist.length} done
            </p>
          </div>
        );
      })}
    </div>
  );
}
