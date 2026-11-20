"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, MessageCircle, ArrowRight, Sparkles, Terminal, ShieldCheck, ArrowDown, Code2, Cpu, CheckCircle2 } from "lucide-react"
import { track } from "@vercel/analytics"

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-28 md:pt-36 lg:pt-44 xl:pt-48 pb-16 md:pb-24">

            {/* Ambient Background Glows & Subtitle Grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.18, 0.3, 0.18],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-indigo-500/25 via-purple-500/20 to-blue-500/15 rounded-full blur-[140px]"
                />
                <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/15 via-emerald-500/10 to-transparent rounded-full blur-[130px]" />

                {/* Subtle Geometric Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Two-Column Grid: Developer Showcase (Left) + Executive Profile (Right) */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center max-w-6xl mx-auto lg:pt-6 xl:pt-8">

                    {/* Column 1 (Left): Creative Bento Developer Station with Interactive HUD */}
                    <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.93 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="relative w-full max-w-sm sm:max-w-md"
                        >
                            {/* Ambient Aura */}
                            <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-emerald-500/20 rounded-[2.5rem] blur-xl opacity-75 dark:opacity-60" />

                            {/* Main Bento Console Card */}
                            <div className="relative rounded-[2.2rem] glass-strong border border-zinc-200/90 dark:border-white/15 p-4 sm:p-5 shadow-2xl backdrop-blur-2xl overflow-hidden">

                                {/* Window Control Header */}
                                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-zinc-200/70 dark:border-white/10 text-[11px] font-mono text-muted-foreground">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                    </div>
                                    <span className="font-semibold text-zinc-600 dark:text-zinc-300 flex items-center gap-1.5">
                                        <Terminal className="w-3 h-3 text-indigo-500" />
                                        bala.profile // v2.6
                                    </span>
                                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        LIVE
                                    </span>
                                </div>

                                {/* Portrait Frame with Ambient Gradient */}
                                <div className="relative aspect-square w-full rounded-[1.7rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/10 group">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Balakrishnan M"
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                                    {/* Embedded Card Bottom Info */}
                                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-bold leading-tight">Balakrishnan M</p>
                                            <p className="text-[10px] text-zinc-300 font-mono">Senior SDE & Architect</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white/20">
                                            <Cpu className="w-3 h-3 text-emerald-400" />
                                            <span>AI Ready</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Micro Status Strip */}
                                <div className="mt-3.5 pt-3 border-t border-zinc-200/70 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                                    <span className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                        Full-Stack Systems
                                    </span>
                                    <span className="text-zinc-400 dark:text-zinc-500">
                                        IST (UTC+5:30)
                                    </span>
                                </div>
                            </div>

                            {/* Floating Micro-Badge 1: Experience (Top Left) */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-3 left-1 sm:-left-6 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200/90 dark:border-white/15 shadow-xl flex items-center gap-2.5 z-20"
                            >
                                <div className="p-1.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                    <Terminal className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] text-muted-foreground leading-none font-medium">Experience</p>
                                    <p className="text-xs font-bold text-foreground">8+ Years</p>
                                </div>
                            </motion.div>

                            {/* Floating Micro-Badge 2: Automated Testing (Bottom Right) */}
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-3 right-1 sm:-right-5 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200/90 dark:border-white/15 shadow-xl flex items-center gap-2.5 z-20"
                            >
                                <div className="p-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] text-muted-foreground leading-none font-medium">Automated QA</p>
                                    <p className="text-xs font-bold text-foreground">Playwright E2E</p>
                                </div>
                            </motion.div>

                            {/* Floating Micro-Badge 3: Stack (Middle Right) */}
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-1 lg:-right-8 px-3 py-1.5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/90 dark:border-white/15 shadow-lg items-center gap-2 z-20"
                            >
                                <div className="p-1 rounded-lg bg-blue-500/10 text-blue-500">
                                    <Code2 className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-[11px] font-mono font-bold text-foreground">Next.js &amp; Laravel</span>
                            </motion.div>

                        </motion.div>
                    </div>

                    {/* Column 2 (Right): Executive Profile, Headlines & Call to Actions */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-2">

                        {/* Eyebrow & Status Row */}
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
                        >
                            <span className="text-[11px] font-mono font-semibold tracking-wider text-primary uppercase bg-primary/10 dark:bg-white/10 px-3 py-1 rounded-full border border-primary/20 dark:border-white/15">
                                {"// SENIOR FULL-STACK SOFTWARE ENGINEER"}
                            </span>

                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 backdrop-blur-md text-xs shadow-xs">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                <span className="font-semibold text-foreground">Open to Work</span>
                                <span className="text-zinc-300 dark:text-white/20">·</span>
                                <span className="text-muted-foreground font-medium">India (IST)</span>
                            </div>
                        </motion.div>

                        {/* High-Impact Name & Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-3"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
                                Balakrishnan M
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl font-semibold text-muted-foreground leading-snug">
                                Architecting high-throughput <span className="text-foreground">Laravel & Node.js</span> APIs, modern <span className="text-foreground">React & Next.js</span> frontends, and <span className="text-foreground">Agentic AI</span> workflows.
                            </p>
                        </motion.div>

                        {/* Professional Narrative */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Over 8+ years delivering resilient enterprise software, scalable database architectures, and automated end-to-end testing with Playwright to guarantee production stability and rapid continuous delivery.
                        </motion.p>

                        {/* Interactive Metrics Ribbon */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="grid grid-cols-3 gap-3 py-2 max-w-md mx-auto lg:mx-0 text-left"
                        >
                            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10">
                                <div className="text-xl md:text-2xl font-black text-foreground">8+ Yrs</div>
                                <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Full-Stack SDE</p>
                            </div>
                            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10">
                                <div className="text-xl md:text-2xl font-black text-foreground">20+</div>
                                <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Production Apps</p>
                            </div>
                            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10">
                                <div className="text-xl md:text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
                                <p className="text-[11px] text-muted-foreground font-medium mt-0.5">E2E Automated</p>
                            </div>
                        </motion.div>

                        {/* Call to Actions & Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
                        >
                            <a
                                href="#projects"
                                className="px-6 py-3.5 rounded-full bg-foreground text-background font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-xl group"
                            >
                                <span>Explore Selected Works</span>
                                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="#contact"
                                className="px-6 py-3.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-foreground font-bold text-sm hover:bg-zinc-200 dark:hover:bg-white/10 transition-all shadow-xs"
                            >
                                Get in Touch
                            </a>

                            {/* Social Connect Buttons */}
                            <div className="flex items-center gap-2 pl-2 border-l border-zinc-200 dark:border-white/10">
                                <a
                                    href="https://github.com/balaxbkm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => track("social_click", { platform: "github", location: "hero" })}
                                    className="p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-foreground hover:bg-foreground hover:text-background transition-all border border-zinc-200/50 dark:border-white/5 shadow-xs"
                                    aria-label="GitHub Profile"
                                >
                                    <Github size={17} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/balakrishnan-m-534149116"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => track("social_click", { platform: "linkedin", location: "hero" })}
                                    className="p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-foreground hover:bg-foreground hover:text-background transition-all border border-zinc-200/50 dark:border-white/5 shadow-xs"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin size={17} />
                                </a>
                                <a
                                    href="https://wa.me/918015528885"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => track("contact_click", { channel: "whatsapp", location: "hero" })}
                                    className="p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-foreground hover:bg-foreground hover:text-background transition-all border border-zinc-200/50 dark:border-white/5 shadow-xs"
                                    aria-label="WhatsApp Chat"
                                >
                                    <MessageCircle size={17} />
                                </a>
                            </div>
                        </motion.div>

                        {/* Tech Tagline Strip */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/10 backdrop-blur-md text-xs text-muted-foreground shadow-xs"
                        >
                            <Sparkles className="w-4 h-4 text-indigo-500" />
                            <span>Specialized in <strong className="text-foreground font-semibold">Laravel, React, Next.js, Docker & Agentic AI</strong></span>
                        </motion.div>

                    </div>

                </div>

            </div>

            {/* Scroll Down Indicator */}
            <div className="flex justify-center mt-12 md:mt-16">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-1.5 text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors group"
                >
                    <span>Scroll to explore</span>
                    <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform animate-bounce" />
                </a>
            </div>

        </section>
    )
}
