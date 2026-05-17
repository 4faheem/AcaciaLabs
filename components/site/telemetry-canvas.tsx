"use client";

import { useEffect, useRef, useState } from "react";

type Node = {
  x: number;
  y: number;
  label: string;
  id: string;
  isMain?: boolean;
};

type Packet = {
  fromNode: Node;
  toNode: Node;
  progress: number;
  speed: number;
};

export function TelemetryCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [telemetryLog, setTelemetryLog] = useState<string[]>([
    "SYS_INIT: Network pulse active",
    "NODE_TANZANIA: Latency 8ms (Optimal)",
    "NODE_SYS_1: Sync standard complete",
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height || 450;
      
      // Support high DPI displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Operational nodes
    const nodes: Node[] = [
      { id: "TZ", label: "Tanzania Node [HQ]", x: 0.5, y: 0.5, isMain: true },
      { id: "SYS_1", label: "System Node 1", x: 0.75, y: 0.25 },
      { id: "SYS_2", label: "System Node 2", x: 0.3, y: 0.75 },
      { id: "SYS_3", label: "System Node 3", x: 0.2, y: 0.35 },
      { id: "SYS_4", label: "System Node 4", x: 0.8, y: 0.7 },
    ];

    const packets: Packet[] = [];

    // Helper to spawn packets between connected nodes
    const spawnPacket = () => {
      const fromIdx = Math.floor(Math.random() * nodes.length);
      let toIdx = Math.floor(Math.random() * nodes.length);
      while (toIdx === fromIdx) {
        toIdx = Math.floor(Math.random() * nodes.length);
      }
      
      packets.push({
        fromNode: nodes[fromIdx],
        toNode: nodes[toIdx],
        progress: 0,
        speed: 0.005 + Math.random() * 0.008,
      });

      // Update telemetry log
      const logs = [
        `ROUTE: ${nodes[fromIdx].id} -> ${nodes[toIdx].id} SYNC [OK]`,
        `TRANS: Processing workflow packet #${Math.floor(Math.random() * 9000 + 1000)}`,
        `LATENCY: ${nodes[fromIdx].id} standard sync in ${Math.floor(Math.random() * 20 + 5)}ms`,
      ];
      setTelemetryLog(prev => [logs[Math.floor(Math.random() * logs.length)], ...prev.slice(0, 3)]);
    };

    // Pre-populate packets
    for (let i = 0; i < 4; i++) {
      spawnPacket();
      packets[i].progress = Math.random();
    }

    const intervalId = setInterval(spawnPacket, 2500);

    // Draw Loop
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Draw Grid System
      ctx.strokeStyle = "rgba(245, 245, 245, 0.02)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Connection Paths
      ctx.strokeStyle = "rgba(245, 245, 245, 0.04)";
      ctx.lineWidth = 0.75;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x * width, nodes[i].y * height);
          ctx.lineTo(nodes[j].x * width, nodes[j].y * height);
          ctx.stroke();
        }
      }

      // Draw Packets (Data Pulses)
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          const fromIdx = Math.floor(Math.random() * nodes.length);
          let toIdx = Math.floor(Math.random() * nodes.length);
          while (toIdx === fromIdx) {
            toIdx = Math.floor(Math.random() * nodes.length);
          }
          p.fromNode = nodes[fromIdx];
          p.toNode = nodes[toIdx];
          p.speed = 0.005 + Math.random() * 0.008;
        }

        const startX = p.fromNode.x * width;
        const startY = p.fromNode.y * height;
        const endX = p.toNode.x * width;
        const endY = p.toNode.y * height;

        const currentX = startX + (endX - startX) * p.progress;
        const currentY = startY + (endY - startY) * p.progress;

        // Pulse Gradient Glow
        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#00D1FF";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#00D1FF";
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      });

      // Draw Nodes
      nodes.forEach(node => {
        const nx = node.x * width;
        const ny = node.y * height;

        // Draw node center
        ctx.beginPath();
        ctx.arc(nx, ny, node.isMain ? 6 : 4, 0, Math.PI * 2);
        ctx.fillStyle = node.isMain ? "#2563FF" : "#F5F5F5";
        ctx.fill();

        // Draw node outer ring
        ctx.beginPath();
        ctx.arc(nx, ny, node.isMain ? 12 : 9, 0, Math.PI * 2);
        ctx.strokeStyle = node.isMain ? "rgba(37, 99, 255, 0.2)" : "rgba(245, 245, 245, 0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node Label
        ctx.fillStyle = "rgba(245, 245, 245, 0.4)";
        ctx.font = "bold 9px ui-monospace, SFMono-Regular, monospace";
        ctx.fillText(node.label, nx + 14, ny + 3);
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(intervalId);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[450px] border border-glass-border bg-glass-bg/30 p-2 overflow-hidden flex flex-col justify-between">
      {/* Top telemetry status bar */}
      <div className="flex items-center justify-between border-b border-glass-border/40 pb-2 px-4 py-2 font-mono text-[9px] text-text-secondary tracking-widest bg-white/[0.01]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-ping" />
          <span>ORCHESTRATION telemetry ACTIVE</span>
        </div>
        <div>SYS_LATENCY: 8ms</div>
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Terminal log logs */}
      <div className="relative z-10 w-fit max-w-[280px] bg-primary-bg/85 border border-glass-border p-4 font-mono text-[9px] text-text-secondary/70 leading-relaxed uppercase tracking-wider space-y-1 mt-auto ml-4 mb-4 select-none backdrop-blur-sm">
        <div className="text-[8px] font-bold text-accent-blue tracking-widest border-b border-glass-border pb-1.5 mb-1.5">LIVE LOGSTREAM</div>
        {telemetryLog.map((log, idx) => (
          <div key={idx} className="flex gap-2 items-start">
            <span className="text-accent-cyan font-bold">&gt;</span>
            <span className={idx === 0 ? "text-text-primary" : ""}>{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
