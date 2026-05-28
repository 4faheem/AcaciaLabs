"use client";

import dynamic from "next/dynamic";

export const TelemetryCanvasLoader = dynamic(
  () => import("./telemetry-canvas").then((m) => m.TelemetryCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="h-[450px] w-full bg-glass-bg/10 animate-pulse border border-glass-border rounded-sm flex items-center justify-center font-mono text-[9px] text-text-muted tracking-widest uppercase">
        Loading Systems Telemetry...
      </div>
    )
  }
);
