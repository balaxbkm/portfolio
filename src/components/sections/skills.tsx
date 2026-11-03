"use client"
import { motion } from "framer-motion"
import { Layout, Server, Database, Sparkles } from "lucide-react"

const techStack = [
    {
        title: "Frontend & Mobile",
        icon: <Layout className="w-5 h-5 text-blue-500" />,
        items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3", "Flutter", "Angular", "jQuery"]
    },
    {
        title: "Backend & Systems",
        icon: <Server className="w-5 h-5 text-green-500" />,
        items: ["PHP", "Laravel", "CodeIgniter", "Node.js", "Python", "RESTful API Architecture", "Webhooks", "JSON/XML"]
    },
    {
        title: "AI & Test Automation",
        icon: <Sparkles className="w-5 h-5 text-purple-500" />,
        items: ["LLM API Integration (Gemini, Claude, OpenAI)", "Prompt Engineering", "Playwright (E2E Automation)", "Regression Testing", "OCR Pipelines", "Postman API Testing"]
    },
    {
        title: "Databases & Cloud",
        icon: <Database className="w-5 h-5 text-orange-500" />,
        items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase (Firestore / Realtime)", "Git / GitHub", "Stripe & PayPal", "WooCommerce", "Vercel"]
    }
]

export function Skills() {
    return (
        <section id="about" className="pt-16 md:pt-32 pb-10 md:pb-20 relative">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-12 gap-16">

                    {/* Left Side: About Info */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="relative">
                            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-foreground">About <span className="text-zinc-400 dark:text-white/40">Me</span></h2>
                            <div className="w-20 h-1 bg-zinc-200 dark:bg-white/20 rounded-full" />
                        </div>

                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                            Hello! I'm <span className="text-foreground font-semibold">Balakrishnan M</span>, a Senior Full-Stack Software Engineer with <span className="text-foreground font-semibold">8+ years of experience</span> architecting, developing, and deploying robust web applications, RESTful APIs, and scalable backend systems.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-base">
                            Specializing in <span className="text-foreground font-medium">PHP (Laravel, CodeIgniter)</span>, <span className="text-foreground font-medium">modern JavaScript/TypeScript (React, Next.js, Node.js)</span>, and database optimization. Experienced in integrating intelligent AI workflows (LLM APIs, prompt engineering) and implementing end-to-end automation testing with Playwright to ensure high code quality, system resilience, and continuous delivery across enterprise platforms.
                        </p>

                        <div className="grid grid-cols-2 gap-y-6 text-sm">
                            <div>
                                <p className="text-muted-foreground mb-1">Location</p>
                                <p className="font-medium text-foreground">Sengottai, Tamil Nadu, India</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground mb-1">Experience</p>
                                <p className="font-medium text-foreground">8+ Years</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground mb-1">Availability</p>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <p className="font-medium text-foreground">Open for work</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-muted-foreground mb-1">Languages</p>
                                <p className="font-medium text-foreground">English, Tamil, Malayalam</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Tech Stack Grid */}
                    <div className="lg:col-span-7">
                        <div className="grid md:grid-cols-2 gap-6">
                            {techStack.map((stack, idx) => (
                                <motion.div
                                    key={stack.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="glass-card p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.04] transition-colors group"
                                >
                                    <div className="flex items-center gap-3 mb-6 border-b border-zinc-200 dark:border-white/5 pb-4">
                                        <div className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 group-hover:bg-zinc-200 dark:group-hover:bg-white/10 transition-colors">
                                            {stack.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground">{stack.title}</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {stack.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-white/5 text-muted-foreground hover:text-foreground hover:bg-zinc-200 dark:hover:bg-white/10 transition-all cursor-default border border-zinc-200 dark:border-white/5"
                                            >
                                                {item}
                                            </span>
                                        ))}
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
