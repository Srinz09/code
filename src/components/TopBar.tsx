"use client";

import { useEffect, useState } from "react";
import { topBarMessages } from "@/lib/data/content";

export default function TopBar() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % topBarMessages.length), 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="bg-[var(--topbar-bg)] text-[var(--topbar-text)]"
      style={{ background: "var(--topbar-bg)", color: "var(--topbar-text)" }}
    >
      {/* Desktop: all three messages, static */}
      <div className="hidden min-[800px]:flex flex-wrap justify-center gap-7 px-5 py-[9px] text-[12.5px] font-medium">
        {topBarMessages.map((msg, i) => (
          <span key={msg} className="flex items-center gap-2">
            <span>{msg}</span>
            {i < topBarMessages.length - 1 && <span className="opacity-50">&middot;</span>}
          </span>
        ))}
      </div>

      {/* Mobile: rotates one message at a time */}
      <div className="max-[799px]:block hidden overflow-hidden whitespace-nowrap px-4 py-2 text-center text-[11.5px] font-medium text-ellipsis">
        <span key={idx} className="inline-block animate-text-pop">
          {topBarMessages[idx]}
        </span>
      </div>
    </div>
  );
}
