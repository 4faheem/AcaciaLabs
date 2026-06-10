"use client";

import * as React from "react";
import { useStickToBottom } from "use-stick-to-bottom";
import { cn } from "@/lib/utils";

export const ConversationContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col w-full h-full relative overflow-hidden", className)}
    {...props}
  />
));
ConversationContainer.displayName = "ConversationContainer";

export const ConversationList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  // useStickToBottom needs exact DOM nodes, we manage them via callbacks
  const { scrollRef, contentRef } = useStickToBottom();

  return (
    <div
      ref={(node) => {
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
        if (node) {
          // @ts-ignore
          scrollRef(node);
        }
      }}
      className={cn("flex-1 overflow-y-auto no-scrollbar", className)}
      style={{ scrollBehavior: "smooth" }}
      {...props}
    >
      <div ref={contentRef as any} className="flex flex-col justify-end min-h-full pb-6 pt-6">
        {children}
      </div>
    </div>
  );
});
ConversationList.displayName = "ConversationList";

export const ConversationMessage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { role?: "user" | "bot" }
>(({ className, role, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full mb-5 px-4 md:px-6",
      role === "user" ? "justify-end" : "justify-start",
      className
    )}
    {...props}
  />
));
ConversationMessage.displayName = "ConversationMessage";

export const ConversationBubble = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { role?: "user" | "bot" }
>(({ className, role, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-5 py-3.5 max-w-[88%] text-[15px] md:text-[16px] leading-relaxed shadow-sm",
      role === "user"
        ? "bg-white text-black rounded-2xl rounded-tr-sm"
        : "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 text-cyan-100 rounded-2xl rounded-tl-sm shadow-[0_0_20px_rgba(0,255,255,0.06)]",
      className
    )}
    {...props}
  />
));
ConversationBubble.displayName = "ConversationBubble";
