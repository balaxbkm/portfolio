"use client"
import React from "react"
import { motion } from "framer-motion"
import { Layout, Server, Database, Sparkles, MapPin, Calendar, Clock, Globe2 } from "lucide-react"

const techStack = [
    {
        title: "Frontend & Web",
        badge: "Client-Side",
        icon: <Layout className="w-5 h-5 text-blue-500" />,
        accent: "from-blue-500/20 to-transparent",
        items: [
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "Bootstrap",
            "HTML5 / CSS3",
            "jQuery"
        ]
    },
    {
        title: "Backend & Systems",
        badge: "Server-Side",
        icon: <Server className="w-5 h-5 text-emerald-500" />,
        accent: "from-emerald-500/20 to-transparent",
        items: [
            "PHP",
            "Laravel",
            "CodeIgniter",
            "Node.js",
            "Python",
            "RESTful API Architecture",
            "Webhooks",
            "JSON / XML Parsing"
        ]
    },
    {
        title: "AI & Test Automation",
        badge: "Intelligence & QA",
        icon: <Sparkles className="w-5 h-5 text-purple-500" />,
        accent: "from-purple-500/20 to-transparent",
        items: [
            "Agentic AI (Antigravity, Claude Code)",
            "Claude Skills",
            "LLM APIs (Gemini, Claude, OpenAI)",
            "Prompt Engineering",
            "Playwright (E2E Automation)",
            "Postman API Testing",
            "Regression Testing"
        ]
    },
    {
        title: "Databases, DevOps & Cloud",
        badge: "Infrastructure",
        icon: <Database className="w-5 h-5 text-amber-500" />,
        accent: "from-amber-500/20 to-transparent",
        items: [
            "Docker",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Firebase",
            "Git / GitHub",
            "Payment Gateways (Stripe, PayPal, GPay)",
            "WordPress / WooCommerce",
            "Vercel"
        ]
    }
]

export function Skills() {
    return (
        <section id="about" className="py-20 md:py-28 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                
                {/* Section Header */}
                <div className="mb-12 md:mb-16">
                    <span className="text-xs font-mono font-semibold tracking-wider text-primary uppercase bg-primary/10 dark:bg-white/10 px-3 py-1 rounded-full border border-primary/20 dark:border-white/15">
                        {"// 01 · ABOUT & CORE EXPERTISE"}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mt-4">
                        Engineering Scalable Systems With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">Precision & AI</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Biography & Bento Stats */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-6 md:p-8 rounded-3xl glass-card border border-zinc-200/80 dark:border-white/10 space-y-4">
                            <p className="text-foreground text-lg leading-relaxed font-medium">
                                Hello! I&apos;m <span className="font-bold underline decoration-blue-500 decoration-2 underline-offset-4">Balakrishnan M</span>, a Senior Full-Stack Software Engineer with <span className="font-semibold text-primary dark:text-white">8+ years of experience</span> designing, architecting, and deploying high-performance web platforms and resilient API ecosystems.
                            </p>
                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                Specializing in <strong className="text-foreground font-semibold">PHP (Laravel, CodeIgniter)</strong>, <strong className="text-foreground font-semibold">modern TypeScript (React, Next.js, Node.js)</strong>, <strong className="text-foreground font-semibold">Docker</strong>, and relational databases. I actively leverage <strong className="text-foreground font-semibold">Agentic AI tools</strong> and build automated end-to-end testing suites with <strong className="text-foreground font-semibold">Playwright</strong> to deliver rock-solid, production-ready software.
                            </p>
                        </div>

                        {/* Bento Quick Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10">
                                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-mono uppercase mb-2">
                                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                                    <span>Experience</span>
                                </div>
                                <div className="text-2xl md:text-3xl font-black text-foreground">8+ Years</div>
                                <p className="text-[11px] text-muted-foreground mt-1">Full-Stack & Systems</p>
                            </div>

                            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10">
                                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-mono uppercase mb-2">
                                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                                    <span>Availability</span>
                                </div>
                                <div className="flex items-center gap-2 text-foreground font-bold text-base md:text-lg">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Open to Work</span>
                                </div>
                                <p className="text-[11px] text-muted-foreground mt-1">Senior / Lead Roles</p>
                            </div>

                            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10">
                                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-mono uppercase mb-2">
                                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                                    <span>Location</span>
                                </div>
                                <div className="text-sm font-semibold text-foreground">Sengottai, TN</div>
                                <p className="text-[11px] text-muted-foreground mt-1">India · IST (UTC+5:30)</p>
                            </div>

                            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10">
                                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-mono uppercase mb-2">
                                    <Globe2 className="w-3.5 h-3.5 text-purple-500" />
                                    <span>Languages</span>
                                </div>
                                <div className="text-xs font-semibold text-foreground">English, Tamil</div>
                                <p className="text-[11px] text-muted-foreground mt-1">Malayalam (Conversational)</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Technical Capability Cards */}
                    <div className="lg:col-span-7">
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            {techStack.map((stack, idx) => (
                                <motion.div
                                    key={stack.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08 }}
                                    className="relative p-6 rounded-3xl glass-card border border-zinc-200/80 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/25 transition-all duration-300 group flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Card Header */}
                                        <div className="flex items-center justify-between mb-5 pb-3 border-b border-zinc-200/80 dark:border-white/10">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200/60 dark:border-white/10 group-hover:scale-110 transition-transform">
                                                    {stack.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-foreground">{stack.title}</h3>
                                                    <span className="text-[10px] font-mono text-muted-foreground uppercase">{stack.badge}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Chip Items */}
                                        <div className="flex flex-wrap gap-2">
                                            {stack.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100/80 dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/30 hover:bg-white dark:hover:bg-white/10 transition-all cursor-default"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
