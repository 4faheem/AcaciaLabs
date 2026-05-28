"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { company } from "@/lib/site";
import { SectionWrapper } from "@/components/site/section-wrapper";
import { PageIntro } from "@/components/site/page-intro";

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  accent: "electric" | "cyan" | "gold";
  isUserCreated?: boolean;
};

const defaultPosts: BlogPost[] = [
  {
    id: "1",
    slug: "sovereign-intelligence-east-africa",
    title: "Sovereign Intelligence: Designing AI for East African Operations",
    category: "AI Infrastructure",
    date: "May 28, 2026",
    excerpt: "An architectural exploration of why traditional cloud-hosted AI models fail in low-bandwidth, high-concurrency environments, and how local ledgers change the math.",
    content: `For too long, enterprise technology in Sub-Saharan Africa has been treated as a downstream consumer of Western cloud paradigms. But the structural realities of operating here—intermittent carrier networks, volatile latency, and transaction pipelines integrated directly into mobile money APIs like M-Pesa—require a complete inversion of standard architectural layouts.

Generative AI models running on servers in North Virginia or Western Europe are inherently fragile for real-time logistics and execution in East Africa. If an agent-based dispatch system takes 8 seconds to round-trip through an API, the system fails to coordinate dynamic routes at scale.

At Acacia Labs, we design sovereign intelligence grids. This means embedding localized decision-support nodes directly onto on-premise infrastructure and caching operational states. Our syncAI platform relies on micro-inference engines that operate deterministically, keeping transactions aligned without relying on a persistent, high-speed connection to the global internet. The future of African enterprise isn't on a remote cloud; it is running at the edge of the local carrier node.`,
    author: company.ceo,
    readTime: "6 min read",
    accent: "electric"
  },
  {
    id: "2",
    slug: "reconciliations-engine-mobile-money",
    title: "The Reconciliations Engine: Solving Mobile Money Fragmentation",
    category: "Fintech Ledger",
    date: "May 15, 2026",
    excerpt: "A technical deep-dive into resolving double-spend risks and synchronization latencies across M-Pesa, Airtel Money, and Tigopesa API grids.",
    content: `Reconciliation is the silent killer of growth for mid-market African companies. When your business processes thousands of mobile money payments a day from different carriers, the lack of a synchronized ledger API turns reporting into a manual nightmare. 

Carriers frequently delay confirmation webhooks, leading to double-allocation risks. If a customer sends a payment, but the carrier API fails to notify your database within the checkout window, you run the risk of canceling the order or double-charging.

Our E-Manager ledger solves this through a high-authority transactional pipeline. We use a deterministic queue architecture that pools pending transactions and validates ledger hashes. Every transaction is indexed against carrier metadata, ensuring that no ledger entry is written without verification. By treating carrier latency as a structural rule rather than an exception, our reconciliation engines achieve 99.99% automated ledger accuracy.`,
    author: company.coo,
    readTime: "8 min read",
    accent: "cyan"
  },
  {
    id: "3",
    slug: "deterministic-workflows-vs-stochastic-ai",
    title: "Deterministic Workflows vs. Stochastic AI Models",
    category: "Business Automation",
    date: "April 22, 2026",
    excerpt: "Why generative AI is a liability for ledger entries, and how Acacia Labs builds a deterministic state-machine hybrid to protect business integrity.",
    content: `Stochastic models (like modern LLMs) are inherently probabilistic. They guess the next token based on statistical weights. This makes them brilliant at synthesizing text, translating languages, or parsing unstructured voice messages. 

However, in financial auditing or operational workflows, probability is a liability. You cannot have a business system that 'guesses' if a payment should be approved or if inventory is in stock.

The Acacia Labs architectural paradigm dictates a strict separation of concerns. We employ LLMs purely as parser-agents at the ingest layer—converting natural Swahili/English text or unstructured emails into structured JSON. Once parsed, the payload is immediately handed off to a strict, deterministic state-machine execution layer. The AI cannot make decisions; it can only format inputs. This hybrid model protects system integrity while delivering the interface accessibility of modern AI.`,
    author: company.ceo,
    readTime: "5 min read",
    accent: "gold"
  }
];

const categories = ["All", "AI Infrastructure", "Fintech Ledger", "Business Automation", "General"];

export function BlogClient() {
  const [posts, setPosts] = useState<BlogPost[]>(defaultPosts);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  
  // Writing form state
  const [isWriteOpen, setIsWriteOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newExcerpt, setNewExcerpt] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newCategory, setNewCategory] = useState("AI Infrastructure");
  const [newAuthor, setNewAuthor] = useState("");
  const [newAccent, setNewAccent] = useState<"electric" | "cyan" | "gold">("electric");
  const [formError, setFormError] = useState("");

  // Load posts on mount
  useEffect(() => {
    const stored = localStorage.getItem("acacia_blog_posts");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as BlogPost[];
        setPosts([...defaultPosts, ...parsed]);
      } catch (e) {
        setPosts(defaultPosts);
      }
    } else {
      setPosts(defaultPosts);
    }
  }, []);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newExcerpt.trim() || !newContent.trim() || !newAuthor.trim()) {
      setFormError("All fields are required to compile post.");
      return;
    }

    const slug = newTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const newPost: BlogPost = {
      id: Date.now().toString(),
      slug,
      title: newTitle,
      category: newCategory,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      excerpt: newExcerpt,
      content: newContent,
      author: newAuthor,
      readTime: `${Math.max(1, Math.ceil(newContent.split(/\s+/).length / 200))} min read`,
      accent: newAccent,
      isUserCreated: true,
    };

    const updatedUserPosts = [
      ...posts.filter(p => p.isUserCreated).map(p => ({ ...p })),
      newPost
    ];

    localStorage.setItem("acacia_blog_posts", JSON.stringify(updatedUserPosts));
    setPosts([...defaultPosts, ...updatedUserPosts]);
    
    // Clear form
    setNewTitle("");
    setNewExcerpt("");
    setNewContent("");
    setNewCategory("AI Infrastructure");
    setNewAuthor("");
    setNewAccent("electric");
    setFormError("");
    setIsWriteOpen(false);
  };

  const handleDeletePost = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filteredUserPosts = posts
      .filter(p => p.isUserCreated && p.id !== id)
      .map(p => ({ ...p }));
    
    localStorage.setItem("acacia_blog_posts", JSON.stringify(filteredUserPosts));
    setPosts([...defaultPosts, ...filteredUserPosts]);
    if (activePost && activePost.id === id) {
      setActivePost(null);
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(search.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(search.toLowerCase()) || 
      post.content.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getAccentColorClass = (accent: "electric" | "cyan" | "gold") => {
    switch (accent) {
      case "cyan": return "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20";
      case "gold": return "text-accent-gold bg-accent-gold/10 border-accent-gold/20";
      default: return "text-accent-blue bg-accent-blue/10 border-accent-blue/20";
    }
  };

  const getAccentTextClass = (accent: "electric" | "cyan" | "gold") => {
    switch (accent) {
      case "cyan": return "group-hover:text-accent-cyan";
      case "gold": return "group-hover:text-accent-gold";
      default: return "group-hover:text-accent-blue";
    }
  };

  return (
    <div className="bg-primary-bg min-h-screen pt-32 pb-24 overflow-hidden text-text-primary">
      <PageIntro 
        eyebrow="ENGINEERING JOURNAL" 
        title="Operational Intelligence Briefs." 
        description="Technical analysis, system architecture breakdowns, and direct updates from our engineering teams."
      />

      <SectionWrapper tone="dark">
        <AnimatePresence mode="wait">
          {!activePost ? (
            /* Post Feed View */
            <motion.div
              key="feed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Filter and Command Console */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-glass-border/40 pb-8">
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 rounded-sm cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-text-primary text-primary-bg border-text-primary"
                          : "border-glass-border bg-white/[0.01] text-text-secondary hover:border-glass-border-hover hover:text-text-primary"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Search & Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="SEARCH BRIEFINGS..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full sm:w-64 bg-glass-bg border border-glass-border px-4 py-2 rounded-sm text-[10px] font-mono tracking-widest text-text-primary focus:outline-none focus:border-accent-cyan placeholder:text-text-muted"
                    />
                  </div>
                  
                  <button
                    onClick={() => setIsWriteOpen(true)}
                    className="btn-accent text-[10px] py-2 px-6 rounded-sm whitespace-nowrap cursor-pointer"
                  >
                    + COMPOSE JOURNAL ENTRY
                  </button>
                </div>
              </div>

              {/* Articles Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((article, i) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setActivePost(article)}
                      className="border border-glass-border bg-glass-bg/30 p-8 rounded-sm hover:border-glass-border-hover transition-all duration-300 flex flex-col justify-between min-h-[340px] group cursor-pointer relative overflow-hidden"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className={`text-[8px] font-mono tracking-widest uppercase border px-2 py-0.5 rounded-sm ${getAccentColorClass(article.accent)}`}>
                            {article.category}
                          </span>
                          <span className="text-[9px] font-mono text-text-muted">{article.date}</span>
                        </div>
                        
                        <h3 className={`text-xl font-bold uppercase tracking-tight text-text-primary mb-4 transition-colors duration-300 ${getAccentTextClass(article.accent)}`}>
                          {article.title}
                        </h3>
                        
                        <p className="text-[12px] text-text-secondary leading-relaxed mb-6 line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-glass-border/40 pt-4 mt-auto">
                        <div className="text-[9px] font-mono text-text-muted uppercase">
                          BY {article.author} • {article.readTime}
                        </div>
                        
                        <div className="flex items-center gap-3">
                          {article.isUserCreated && (
                            <button
                              onClick={(e) => handleDeletePost(article.id, e)}
                              className="text-[9px] font-mono text-red-500 hover:text-red-400 transition-colors uppercase border border-red-500/20 bg-red-500/5 px-2 py-0.5 rounded-sm cursor-pointer"
                              title="Delete Post"
                            >
                              PURGE
                            </button>
                          )}
                          <span className="text-[10px] font-bold tracking-[0.2em] text-text-primary uppercase group-hover:translate-x-1 transition-transform duration-300">
                            READ &rarr;
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 border border-dashed border-glass-border/60 bg-white/[0.01]">
                  <p className="font-mono text-xs text-text-muted tracking-widest uppercase">
                    NO LOG ENTRY MATCHES FILTER CRITERIA.
                  </p>
                </div>
              )}
            </motion.div>
          ) : (
            /* Post Detail View */
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              {/* Back Button / Navigation */}
              <button 
                onClick={() => setActivePost(null)}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent-cyan border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-2 mb-12 hover:bg-accent-cyan/15 transition-all duration-300 rounded-sm cursor-pointer"
              >
                &larr; BACK TO INDEX
              </button>

              <article className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-mono tracking-widest uppercase border px-3 py-1 rounded-sm ${getAccentColorClass(activePost.accent)}`}>
                      {activePost.category}
                    </span>
                    <span className="text-[10px] font-mono text-text-muted tracking-widest uppercase">{activePost.date}</span>
                    <span className="text-[10px] font-mono text-text-muted tracking-widest uppercase">• {activePost.readTime}</span>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-text-primary leading-tight">
                    {activePost.title}
                  </h1>
                  
                  <div className="text-xs font-mono text-text-secondary uppercase border-b border-glass-border/40 pb-6">
                    AUTHOR NODE: <span className="text-text-primary">{activePost.author}</span>
                  </div>
                </div>

                {/* Subtitle / Excerpt */}
                <p className="text-base text-text-primary font-medium leading-relaxed border-l-2 border-accent-cyan pl-6 italic">
                  {activePost.excerpt}
                </p>

                {/* Longform Content */}
                <div className="text-sm text-text-secondary leading-relaxed space-y-6 pt-4">
                  {activePost.content.split("\n\n").map((para, i) => (
                    <p key={i} className="whitespace-pre-line">{para}</p>
                  ))}
                </div>
              </article>
            </motion.div>
          )}
        </AnimatePresence>
      </SectionWrapper>

      {/* Composition Modal (Write Post) */}
      <AnimatePresence>
        {isWriteOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWriteOpen(false)}
              className="absolute inset-0 bg-[#050505]/85 backdrop-blur-md"
            />

            {/* Form Drawer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 20 }}
              className="relative w-full max-w-2xl bg-secondary-bg border border-glass-border p-8 rounded-sm shadow-2xl z-10 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-glass-border pb-4">
                <div>
                  <h2 className="text-lg font-bold uppercase tracking-wider text-text-primary">JOURNAL COMPOSE PORT</h2>
                  <p className="text-[9px] font-mono text-text-muted">NODE ENTRY // STATUS: WRITING</p>
                </div>
                <button
                  onClick={() => setIsWriteOpen(false)}
                  className="text-text-secondary hover:text-text-primary font-mono text-[10px] uppercase tracking-widest border border-glass-border px-2 py-1 rounded-sm cursor-pointer"
                >
                  ABORT
                </button>
              </div>

              {formError && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-sm text-xs font-mono uppercase tracking-wider">
                  ERROR: {formError}
                </div>
              )}

              <form onSubmit={handleCreatePost} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Author */}
                  <div className="space-y-2">
                    <label className="block text-[9px] font-mono tracking-widest text-text-muted uppercase">Author Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fahim Kiama"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full bg-primary-bg border border-glass-border px-4 py-3 rounded-sm text-xs text-text-primary focus:outline-none focus:border-accent-cyan"
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <label className="block text-[9px] font-mono tracking-widest text-text-muted uppercase">Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full bg-primary-bg border border-glass-border px-4 py-3 rounded-sm text-xs text-text-primary focus:outline-none focus:border-accent-cyan"
                    >
                      <option value="AI Infrastructure">AI Infrastructure</option>
                      <option value="Fintech Ledger">Fintech Ledger</option>
                      <option value="Business Automation">Business Automation</option>
                      <option value="General">General</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Title Accent */}
                  <div className="space-y-2">
                    <label className="block text-[9px] font-mono tracking-widest text-text-muted uppercase">Telemetry Accent</label>
                    <div className="flex gap-4">
                      {["electric", "cyan", "gold"].map((color) => (
                        <label key={color} className="flex items-center gap-2 text-[10px] font-mono uppercase cursor-pointer text-text-secondary hover:text-text-primary">
                          <input
                            type="radio"
                            name="accent"
                            value={color}
                            checked={newAccent === color}
                            onChange={() => setNewAccent(color as any)}
                            className="text-accent-blue focus:ring-accent-blue"
                          />
                          {color}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <label className="block text-[9px] font-mono tracking-widest text-text-muted uppercase">Journal Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Scaling Ledger Consensus on Edge Terminals"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full bg-primary-bg border border-glass-border px-4 py-3 rounded-sm text-xs text-text-primary focus:outline-none focus:border-accent-cyan"
                  />
                </div>

                {/* Excerpt */}
                <div className="space-y-2">
                  <label className="block text-[9px] font-mono tracking-widest text-text-muted uppercase">Executive Excerpt (Summary)</label>
                  <input
                    type="text"
                    required
                    placeholder="A brief high-level overview of the entry."
                    value={newExcerpt}
                    onChange={(e) => setNewExcerpt(e.target.value)}
                    className="w-full bg-primary-bg border border-glass-border px-4 py-3 rounded-sm text-xs text-text-primary focus:outline-none focus:border-accent-cyan"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <label className="block text-[9px] font-mono tracking-widest text-text-muted uppercase">Entry Content (Markdown / Text)</label>
                  <textarea
                    required
                    rows={8}
                    placeholder="Write detailed entry content here. Separate paragraphs with a blank line for optimal rendering."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full bg-primary-bg border border-glass-border p-4 rounded-sm text-xs text-text-primary focus:outline-none focus:border-accent-cyan font-sans leading-relaxed"
                  />
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-glass-border">
                  <button
                    type="button"
                    onClick={() => setIsWriteOpen(false)}
                    className="btn-secondary text-[10px] py-2 px-6 rounded-sm cursor-pointer"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="btn-accent text-[10px] py-2 px-6 rounded-sm cursor-pointer"
                  >
                    COMMIT ENTRY
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
