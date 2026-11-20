"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, MessageCircle, ArrowRight, Sparkles, Terminal, ShieldCheck, ArrowDown } from "lucide-react"
import { track } from "@vercel/analytics"

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-28 md:pt-32 pb-16 md:pb-24">
            
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.15, 0.28, 0.15],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-blue-500/10 rounded-full blur-[140px]"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Top Status Pill */}
                <motion.div 
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-6 md:mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 backdrop-blur-md shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-xs font-semibold text-foreground tracking-wide">
                            Open for Senior Full-Stack & AI Roles
                        </span>
                        <span className="text-zinc-300 dark:text-white/20">·</span>
                        <span className="text-xs font-medium text-muted-foreground">
                            India (IST)
                        </span>
                    </div>
                </motion.div>

                {/* Main Hero Card Container */}
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    
                    {/* Profile Avatar with Floating Tech Badges */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="relative mb-8"
                    >
                        {/* Outer Glow Ring */}
                        <div className="relative p-1.5 rounded-3xl bg-gradient-to-b from-indigo-500/30 via-zinc-200/50 to-transparent dark:from-indigo-500/40 dark:via-white/10 dark:to-transparent shadow-2xl">
                            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-[1.4rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/10">
                                <Image
                                    src="/profile.jpg"
                                    alt="Balakrishnan M"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Floating Micro-Badge: Experience */}
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-3 -left-4 sm:-left-10 px-3 py-1.5 rounded-2xl bg-white/85 dark:bg-zinc-900/85 backdrop-blur-xl border border-zinc-200 dark:border-white/10 shadow-lg flex items-center gap-2"
                        >
                            <div className="p-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                <Terminal className="w-3.5 h-3.5" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] text-muted-foreground leading-none font-medium">Experience</p>
                                <p className="text-xs font-bold text-foreground">8+ Years</p>
                            </div>
                        </motion.div>

                        {/* Floating Micro-Badge: Automated Quality */}
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-2 -right-4 sm:-right-8 px-3 py-1.5 rounded-2xl bg-white/85 dark:bg-zinc-900/85 backdrop-blur-xl border border-zinc-200 dark:border-white/10 shadow-lg flex items-center gap-2"
                        >
                            <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                <ShieldCheck className="w-3.5 h-3.5" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] text-muted-foreground leading-none font-medium">Testing</p>
                                <p className="text-xs font-bold text-foreground">Playwright E2E</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Main Name & Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-3 mb-6"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground">
                            Balakrishnan <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">M</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground max-w-2xl mx-auto leading-snug">
                            Senior Full-Stack Software Engineer specializing in <span className="text-foreground">Laravel, React, Next.js</span>, <span className="text-foreground">Agentic AI</span> & <span className="text-foreground">Playwright</span>.
                        </p>
                    </motion.div>

                    {/* Brief Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8"
                    >
                        Architecting high-throughput RESTful APIs, modern frontend architectures, and autonomous LLM workflows with rigorous enterprise quality.
                    </motion.p>

                    {/* Call to Actions & Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-4 mb-10"
                    >
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-full bg-foreground text-background font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-lg group"
                        >
                            <span>Explore Selected Works</span>
                            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-foreground font-bold text-sm hover:bg-zinc-200 dark:hover:bg-white/10 transition-all"
                        >
                            Get in Touch
                        </a>

                        {/* Social Buttons */}
                        <div className="flex items-center gap-2 pl-2 border-l border-zinc-200 dark:border-white/10">
                            <a 
                                href="https://github.com/balaxbkm" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                onClick={() => track("social_click", { platform: "github", location: "hero" })} 
                                className="p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-foreground hover:bg-foreground hover:text-background transition-all border border-zinc-200/50 dark:border-white/5" 
                                aria-label="GitHub Profile"
                            >
                                <Github size={17} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/balakrishnan-m-534149116" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                onClick={() => track("social_click", { platform: "linkedin", location: "hero" })} 
                                className="p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-foreground hover:bg-foreground hover:text-background transition-all border border-zinc-200/50 dark:border-white/5" 
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin size={17} />
                            </a>
                            <a 
                                href="https://wa.me/918015528885" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                onClick={() => track("contact_click", { channel: "whatsapp", location: "hero" })} 
                                className="p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-foreground hover:bg-foreground hover:text-background transition-all border border-zinc-200/50 dark:border-white/5" 
                                aria-label="WhatsApp Chat"
                            >
                                <MessageCircle size={17} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Projects Quick Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-zinc-200/60 dark:border-white/5 backdrop-blur-md text-xs text-muted-foreground"
                    >
                        <Sparkles className="w-4 h-4 text-indigo-500" />
                        <span>Trusted across <strong className="text-foreground font-semibold">20+ Production Applications</strong> & Enterprise Builds</span>
                    </motion.div>

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
