"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, ArrowRight, Check, Copy, Clock, Send } from "lucide-react"
import { track } from "@vercel/analytics"

export function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false)

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        navigator.clipboard.writeText("bala13.bkm@gmail.com")
        setCopiedEmail(true)
        track("contact_copy_email", { location: "contact" })
        setTimeout(() => setCopiedEmail(false), 2500)
    }

    return (
        <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
                    <div>
                        <span className="text-xs font-mono font-semibold tracking-wider text-primary uppercase bg-primary/10 dark:bg-white/10 px-3 py-1 rounded-full border border-primary/20 dark:border-white/15">
                            {"// 04 · GET IN TOUCH"}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mt-4">
                            Let&apos;s Connect & Collaborate
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground max-w-md">
                        Available for Senior Full-Stack Engineering, Lead Developer positions, and high-impact technical consulting.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left Column: Direct Communication Channels */}
                    <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">

                        {/* Direct Email Card */}
                        <div className="p-6 rounded-3xl glass-card border border-zinc-200/80 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/25 transition-all duration-300">
                            <div className="flex items-start justify-between gap-4">
                                <a
                                    href="mailto:bala13.bkm@gmail.com"
                                    onClick={() => track("contact_click", { channel: "email", location: "contact" })}
                                    className="flex items-center gap-4 group flex-1"
                                >
                                    <div className="p-3.5 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">Direct Email</p>
                                        <p className="text-base md:text-lg font-bold text-foreground group-hover:text-blue-500 transition-colors break-all">
                                            bala13.bkm@gmail.com
                                        </p>
                                    </div>
                                </a>

                                <button
                                    onClick={handleCopyEmail}
                                    title="Copy email to clipboard"
                                    aria-label="Copy email"
                                    className="p-2.5 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200/60 dark:border-white/10 text-muted-foreground hover:text-foreground hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
                                >
                                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <a
                            href="tel:+918015528885"
                            onClick={() => track("contact_click", { channel: "phone", location: "contact" })}
                            className="p-6 rounded-3xl glass-card border border-zinc-200/80 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/25 transition-all duration-300 flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3.5 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">Phone / Direct Call</p>
                                    <p className="text-base md:text-lg font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                                        +91 80155 28885
                                    </p>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                        </a>

                        {/* WhatsApp Instant Message Card */}
                        <a
                            href="https://wa.me/918015528885"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => track("contact_click", { channel: "whatsapp", location: "contact" })}
                            className="p-6 rounded-3xl glass-card border border-zinc-200/80 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/25 transition-all duration-300 flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3.5 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 group-hover:scale-110 transition-transform">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-[11px] font-mono font-semibold text-muted-foreground uppercase tracking-wider">WhatsApp</p>
                                        <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            Active
                                        </span>
                                    </div>
                                    <p className="text-base font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                                        Chat Directly on WhatsApp
                                    </p>
                                </div>
                            </div>
                            <Send className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>

                        {/* Social Buttons */}
                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <a
                                href="https://www.linkedin.com/in/balakrishnan-m-534149116"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => track("social_click", { platform: "linkedin", location: "contact" })}
                                className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-500/5 transition-all group"
                            >
                                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-bold text-foreground">LinkedIn Profile</span>
                            </a>

                            <a
                                href="https://github.com/balaxbkm"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => track("social_click", { platform: "github", location: "contact" })}
                                className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 hover:border-foreground/40 hover:bg-zinc-200/50 dark:hover:bg-white/10 transition-all group"
                            >
                                <Github className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-bold text-foreground">GitHub Profile</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Interactive Location Map & Timezone */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-white/10 glass-card relative h-80 lg:h-full min-h-[340px] flex flex-col justify-between shadow-xs"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3941.626889665807!2d77.24762697501758!3d8.970323099165288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTgnMTMuMiJOIDc3wrAxNC'NTkuMyJF!5e0!3m2!1sen!2sin!4v1716380000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Balakrishnan M Location Map"
                                className="w-full h-full absolute inset-0 dark:invert-[.92] dark:hue-rotate-180 contrast-95 opacity-90 hover:opacity-100 transition-opacity"
                            />

                            {/* Map Floating Location Pill */}
                            <div className="relative z-10 m-4 p-4 rounded-2xl glass-strong border border-zinc-200/80 dark:border-white/15 max-w-xs shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-rose-500/10 text-rose-500 rounded-xl">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-mono uppercase text-muted-foreground font-semibold">Location</p>
                                        <p className="text-xs font-bold text-foreground">Sengottai, Tamil Nadu, India</p>
                                    </div>
                                </div>
                                <div className="mt-2 pt-2 border-t border-zinc-200/60 dark:border-white/10 flex items-center justify-between text-[11px] text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3 text-emerald-500" />
                                        IST (UTC +5:30)
                                    </span>
                                    <span className="font-mono font-medium text-emerald-600 dark:text-emerald-400">Available</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
