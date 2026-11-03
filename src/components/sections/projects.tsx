"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Layers, Code, Database, Globe, ClipboardList, BarChart3 } from "lucide-react"

const projects = [
    {
        id: "01",
        title: "EPIC",
        category: "Construction Tech",
        description: "An intelligent construction cost estimation platform for residential and commercial builds. Automates blueprint takeoff by parsing complex multi-page architectural PDFs, running computational quantity estimation algorithms, and generating precise cost breakdown reports in CSV format.",
        tech: ["Architectural PDF Parsing", "Cost Estimation Engine", "Automated Takeoffs", "Data Pipeline"],
        icon: <Layers className="w-6 h-6 text-orange-500" />
    },
    {
        id: "02",
        title: "SummitCPR",
        category: "EdTech Platform",
        description: "A specialized learning management and certification portal for accredited CPR and first-aid training. Features end-to-end student lifecycles including course registration, secure Stripe checkout, timed online examinations, and dynamic automated certificate issuance.",
        tech: ["LMS Architecture", "Stripe Checkout", "Automated Certification", "MySQL"],
        icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
        id: "03",
        title: "Keralaspecial",
        category: "E-commerce",
        description: "A direct-to-consumer regional marketplace delivering authentic Kerala delicacies and artisanal goods nationwide. Built with real-time multi-vendor inventory synchronization, end-to-end order tracking, automated shipping logistics, and integrated payment gateways.",
        tech: ["Full-Stack E-Commerce", "Inventory Synchronization", "Payment Gateway", "Logistics Automation"],
        icon: <Database className="w-6 h-6 text-green-500" />
    },
    {
        id: "04",
        title: "WhenWouldWork",
        category: "Productivity Tool",
        description: "A collaborative group availability and meeting coordination tool designed to eliminate scheduling friction. Utilizes timezone-aware consensus algorithms and an intuitive visual heatmap to pinpoint optimal mutual meeting windows across teams and clients in seconds.",
        tech: ["Scheduling Engine", "Timezone Calculation", "Interactive Heatmaps", "React"],
        icon: <Code className="w-6 h-6 text-purple-500" />
    },
    {
        id: "05",
        title: "TaskTrax",
        category: "Project Management",
        description: "A full-featured task management and ticketing platform with customizable ticket types, dynamic form builders, and workflow automation. Includes real-time team chat, an integrated file manager, and granular role-based access controls for streamlined collaboration.",
        tech: ["Custom Workflows", "Real-time Chat", "File Manager", "RBAC"],
        icon: <ClipboardList className="w-6 h-6 text-teal-500" />
    },
    {
        id: "06",
        title: "Encompass NPS",
        category: "Enterprise CMS",
        description: "A content management system built for a pipeline company to centralize operations. Manages support tickets, lead tracking, user administration, and automated generation of weekly and monthly performance digests for stakeholder reporting.",
        tech: ["Ticket Management", "Lead Tracking", "Automated Digests", "Admin Dashboard"],
        icon: <BarChart3 className="w-6 h-6 text-rose-500" />
    }
]

export function Projects() {
    return (
        <section id="projects" className="py-6 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-foreground">Selected <span className="text-zinc-400 dark:text-white/40">Works</span></h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-muted-foreground max-w-xs text-center md:text-right">
                            A showcase of projects that define my journey as a developer.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative cursor-default"
                        >
                            {/* Card Container */}
                            <div className="glass-card p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-500 hover:bg-white/80 dark:hover:bg-white/[0.02] bg-white/50 dark:bg-transparent">

                                {/* Header */}
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-zinc-100 dark:bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                        {project.icon}
                                    </div>
                                    <span className="text-4xl font-bold text-zinc-200 dark:text-white/5 group-hover:text-zinc-300 dark:group-hover:text-white/10 transition-colors duration-500 font-mono">
                                        {project.id}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-foreground/90 transition-colors">{project.title}</h3>
                                        <p className="text-sm font-medium text-zinc-500 dark:text-white/40 uppercase tracking-widest">{project.category}</p>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {project.tech.map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-white/60 border border-zinc-200 dark:border-white/5 group-hover:border-zinc-300 dark:group-hover:border-white/10 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Decoration */}
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                                    <ArrowUpRight className="text-foreground" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
