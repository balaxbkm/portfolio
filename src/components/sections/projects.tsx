"use client"
import React from "react"
import { motion } from "framer-motion"
import { Layers, Code, Database, Globe, ClipboardList, BarChart3, Sparkles } from "lucide-react"

const projects = [
    {
        id: "01",
        title: "EPIC",
        category: "Construction Tech",
        metric: "⚡ 90% Faster Estimations",
        description: "An automated construction cost estimation engine integrating OCR tools and TCPDF libraries to scan architectural PDF blueprints, extract material counts, execute computational quantity algorithms, and generate instant, granular cost reports.",
        tech: ["PHP", "OCR Blueprints", "TCPDF", "Quantity Algorithms", "MySQL", "Excel Reports"],
        icon: <Layers className="w-5 h-5 text-amber-500" />
    },
    {
        id: "02",
        title: "SummitCPR",
        category: "EdTech & LMS",
        metric: "🎓 10k+ Certified Students",
        description: "A specialized learning management and certification portal for accredited CPR and first-aid training. Features end-to-end student lifecycles including course registration, secure PayPal & Stripe checkouts, timed online examinations, and dynamic automated TCPDF certificate issuance.",
        tech: ["CodeIgniter", "Laravel", "PayPal & Stripe", "TCPDF Certificates", "Webhooks", "MySQL"],
        icon: <Globe className="w-5 h-5 text-blue-500" />
    },
    {
        id: "03",
        title: "Keralaspecial",
        category: "E-Commerce & Logistics",
        metric: "📦 Nationwide D2C Logistics",
        description: "A direct-to-consumer regional marketplace delivering authentic Kerala delicacies and artisanal goods nationwide. Built with WordPress and WooCommerce, featuring real-time multi-vendor inventory synchronization, automated shipping logistics, and integrated payment gateways.",
        tech: ["WordPress", "WooCommerce", "Payment Gateways", "Inventory Tracking", "Logistics Automation"],
        icon: <Database className="w-5 h-5 text-emerald-500" />
    },
    {
        id: "04",
        title: "WhenWouldWork",
        category: "Productivity & Scheduling",
        metric: "⏱️ Zero-Friction Consensus",
        description: "A collaborative group availability and meeting coordination tool designed to eliminate scheduling friction. Utilizes timezone-aware consensus voting algorithms and dynamic calendar polling engineered with CodeIgniter, JavaScript, and AJAX.",
        tech: ["CodeIgniter", "Consensus Voting", "Calendar Polling", "JavaScript", "AJAX", "Timezones"],
        icon: <Code className="w-5 h-5 text-purple-500" />
    },
    {
        id: "05",
        title: "TaskTrax",
        category: "Enterprise Workflow",
        metric: "🛡️ Enterprise RBAC & Chat",
        description: "A full-featured task management and ticketing platform with customizable ticket types, dynamic form builders, and workflow automation. Includes real-time team chat, an integrated file manager, and granular role-based access controls for streamlined collaboration.",
        tech: ["Custom Workflows", "Real-time Chat", "File Manager", "RBAC", "PHP / Node.js"],
        icon: <ClipboardList className="w-5 h-5 text-teal-500" />
    },
    {
        id: "06",
        title: "Encompass NPS",
        category: "Analytics & CMS",
        metric: "📊 Automated Executive Digests",
        description: "A content management system built for a pipeline company to centralize operations. Manages support tickets, lead tracking, user administration, and automated generation of weekly and monthly performance digests for stakeholder reporting.",
        tech: ["Ticket Management", "Lead Tracking", "Automated Digests", "Admin Dashboard", "MySQL"],
        icon: <BarChart3 className="w-5 h-5 text-rose-500" />
    }
]

export function Projects() {
    return (
        <section id="projects" className="py-20 md:py-28 relative">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
                    <div>
                        <span className="text-xs font-mono font-semibold tracking-wider text-primary uppercase bg-primary/10 dark:bg-white/10 px-3 py-1 rounded-full border border-primary/20 dark:border-white/15">
                            {"// 03 · FEATURED ENGINEERING WORKS"}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mt-4">
                            Selected Systems & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">Platforms</span>
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground max-w-md">
                        Production applications engineered for automation, algorithmic precision, high volume, and operational efficiency.
                    </p>
                </div>

                {/* Projects Bento Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="group relative flex flex-col justify-between rounded-3xl glass-card border border-zinc-200/80 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/25 transition-all duration-300 p-6 md:p-7 overflow-hidden hover:-translate-y-1"
                        >
                            {/* Browser Mockup Top Bar */}
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200/80 dark:border-white/10 text-xs text-muted-foreground font-mono">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                </div>
                                <span className="px-2 py-0.5 rounded-full bg-zinc-100/80 dark:bg-white/5 border border-zinc-200/60 dark:border-white/10 text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-400 tracking-wider uppercase">
                                    CASE STUDY
                                </span>
                                <span className="text-xs font-bold text-zinc-400 dark:text-white/40">
                                    #{project.id}
                                </span>
                            </div>

                            {/* Main Body */}
                            <div className="space-y-4">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200/60 dark:border-white/10 group-hover:scale-110 transition-transform">
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                                {project.category}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Metric Highlight Badge */}
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/5 dark:bg-white/5 text-primary dark:text-white border border-primary/10 dark:border-white/10">
                                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                    <span>{project.metric}</span>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack Chips */}
                            <div className="flex flex-wrap gap-1.5 pt-6 mt-4 border-t border-zinc-200/80 dark:border-white/10">
                                {project.tech.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-zinc-100/80 dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
