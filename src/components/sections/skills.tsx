"use client"
import { motion } from "framer-motion"
import { Layout, Server, Database, Wrench } from "lucide-react"

const techStack = [
    {
        title: "Frontend",
        icon: <Layout className="w-5 h-5 text-blue-500" />,
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "HTML5", "CSS3", "Flutter"]
    },
    {
        title: "Backend",
        icon: <Server className="w-5 h-5 text-green-500" />,
        items: ["Python", "FastAPI", "PHP", "Laravel", "CodeIgniter", "Node.js", "REST APIs"]
    },
    {
        title: "Database & Cloud",
        icon: <Database className="w-5 h-5 text-orange-500" />,
        items: ["MySQL", "MongoDB", "Vercel", "Git", "Google Cloud", "Firebase"]
    },
    {
        title: "Tools & Integrations",
        icon: <Wrench className="w-5 h-5 text-pink-500" />,
        items: ["Stripe", "PayPal", "Google Maps", "Chart.js", "OpenAI API", "Postman"]
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

                        <p className="text-muted-foreground leading-loose text-lg">
                            Hello! I'm <span className="text-foreground font-medium">Balakrishnan M</span>, a Senior Full Stack Developer driven by a passion for building scalable, high-performance web applications.
                            With over <span className="text-foreground font-medium">7 years of experience</span>, I bridge the gap between elegant design and robust engineering, specializing in the modern JavaScript ecosystem, Python, and PHP.
                        </p>

                        <div className="grid grid-cols-2 gap-y-6 text-sm">
                            <div>
                                <p className="text-muted-foreground mb-1">Location</p>
                                <p className="font-medium text-foreground">Tenkasi, India</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground mb-1">Experience</p>
                                <p className="font-medium text-foreground">7+ Years</p>
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
