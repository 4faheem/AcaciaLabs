"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, Receipt, Wallet, BarChart3 } from "lucide-react";
import {
  ConversationContainer,
  ConversationList,
  ConversationMessage,
  ConversationBubble,
} from "./conversation";

const conversationFlow = [
  { from: "user", text: "I'm running my whole business on spreadsheets and paper. It's becoming chaos." },
  { from: "bot", text: "That's the most common problem we see. Scattered records hide what's really happening." },
  { from: "user", text: "I never know my real stock or how much cash I actually have." },
  { from: "bot", text: "Because your sales, stock, and money live in separate places that don't talk to each other." },
  { from: "user", text: "So what would E-Manager actually do for me?" },
  { from: "bot", text: "Put everything in one place — inventory, sales, finance, staff, and customers — updated in real time." },
  { from: "user", text: "Even across my branches?" },
  { from: "bot", text: "Yes. Every branch, every device, one live dashboard." },
  { from: "user", text: "Can I see it before I pay?" },
  { from: "bot", text: "Yes." },
  { from: "bot", text: "Inventory synced.", isStatus: true, card: 0 },
  { from: "bot", text: "Daily sales tracked.", isStatus: true, card: 1 },
  { from: "bot", text: "Cash flow visible.", isStatus: true, card: 2 },
  { from: "user", text: "How fast can I start?" },
  { from: "bot", text: "Set up your business in about 30 minutes. Free for the first 14 days." }
];

const cards = [
  { title: "Inventory", subtitle: "Synced in real time", icon: Package },
  { title: "Sales & Invoicing", subtitle: "Tracked daily", icon: Receipt },
  { title: "Finance", subtitle: "Cash flow visible", icon: Wallet },
  { title: "Reports", subtitle: "One live dashboard", icon: BarChart3 },
];

export function AcaciaConversation() {
  const [messagesCount, setMessagesCount] = React.useState(0);
  const [isFinished, setIsFinished] = React.useState(false);
  const [showFinalScene, setShowFinalScene] = React.useState(false);
  const [finalStep, setFinalStep] = React.useState(0);

  // Auto-play the conversation
  React.useEffect(() => {
    if (messagesCount < conversationFlow.length) {
      const currentMsg = conversationFlow[messagesCount];
      
      // Dynamic delay: longer for longer text, faster for status messages
      let delay = 1400; // Base delay
      if (currentMsg.isStatus) delay = 800;
      else if (currentMsg.text.length > 50) delay = 2000;
      else if (currentMsg.text.length < 20) delay = 1000;

      // Make the very first message appear fast
      if (messagesCount === 0) delay = 400;

      const timer = setTimeout(() => {
        setMessagesCount(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timer);
    } else {
      // Conversation ended, trigger final scene
      const finishTimer = setTimeout(() => {
        setIsFinished(true);
        
        // Sequence the final scene
        setTimeout(() => setFinalStep(1), 500);
        setTimeout(() => setFinalStep(2), 3500);
        setTimeout(() => setFinalStep(3), 6000);
        
      }, 2500);
      return () => clearTimeout(finishTimer);
    }
  }, [messagesCount]);

  const visibleCards = React.useMemo(() => {
    const visible = new Set<number>();
    for (let i = 0; i < messagesCount; i++) {
      if (conversationFlow[i].card !== undefined) {
        visible.add(conversationFlow[i].card as number);
      }
    }
    // Also show card 3 when card 2 is shown to have all 4
    if (visible.has(2)) visible.add(3);
    return Array.from(visible);
  }, [messagesCount]);

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center md:items-stretch">
      {/* Main Conversation Container */}
      <motion.div 
        layout
        className="w-full md:flex-1 relative flex flex-col bg-black/40 backdrop-blur-xl border border-cyan-500/10 rounded-3xl shadow-[0_0_60px_rgba(0,255,255,0.08)] overflow-hidden min-h-[500px] h-[600px] max-h-[85vh]"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/10 bg-black/20 z-10">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-cyan-500">LIVE DEMO</span>
          </div>
          <div className="text-right flex flex-col">
            <span className="text-[12px] font-bold tracking-widest text-white/90">E-MANAGER</span>
            <span className="text-[9px] uppercase tracking-widest text-cyan-500/60">Your business, one screen</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div 
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
              className="flex-1 overflow-hidden"
            >
              <ConversationContainer>
                <ConversationList>
                  <AnimatePresence initial={false}>
                    {conversationFlow.slice(0, messagesCount).map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 30, 
                          mass: 0.8 
                        }}
                      >
                        <ConversationMessage role={msg.from as "user" | "bot"}>
                          <ConversationBubble 
                            role={msg.from as "user" | "bot"}
                            className={msg.isStatus ? "text-[13px] py-2 px-4 opacity-80 border-dashed" : ""}
                          >
                            {msg.text}
                          </ConversationBubble>
                        </ConversationMessage>
                      </motion.div>
                    ))}
                    {messagesCount < conversationFlow.length && (
                      <motion.div
                        key="typing"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex w-full mb-5 px-4 md:px-6 justify-start"
                      >
                        <div className="px-5 py-3.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/10 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </ConversationList>
              </ConversationContainer>
            </motion.div>
          ) : (
            <motion.div 
              key="final"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/60 backdrop-blur-sm z-20"
            >
              <div className="max-w-md w-full space-y-12">
                <AnimatePresence>
                  {finalStep >= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="space-y-2"
                    >
                      <p className="text-xl md:text-2xl text-white/80 font-medium">
                        Stop juggling spreadsheets, paper, and apps that don't talk.
                      </p>
                      <p className="text-xl md:text-2xl text-cyan-300 font-semibold drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                        Run everything from one screen.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {finalStep >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                      <p className="text-2xl md:text-3xl text-white font-bold tracking-tight">
                        E-Manager makes it simple.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {finalStep >= 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="pt-8 border-t border-cyan-500/20"
                    >
                      <p className="text-cyan-400 tracking-widest text-sm font-semibold uppercase mb-3">
                        One business. One screen.
                      </p>
                      <p className="text-white tracking-[0.3em] font-bold text-lg drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        E-MANAGER &nbsp;·&nbsp; ACACIA LABS
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating Intelligence Cards (Desktop Side / Mobile Stacked below) */}
      <div className="w-full md:w-64 flex flex-col gap-3 justify-center shrink-0">
        <AnimatePresence>
          {visibleCards.map((cardIndex) => {
            const card = cards[cardIndex];
            const Icon = card.icon;
            return (
              <motion.div
                key={cardIndex}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-black/60 backdrop-blur-md border border-cyan-500/20 rounded-xl p-4 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shrink-0">
                  <Icon size={18} className="text-cyan-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-white leading-tight mb-0.5">{card.title}</span>
                  <span className="text-[10px] uppercase tracking-wider text-cyan-400/80 font-medium">{card.subtitle}</span>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
