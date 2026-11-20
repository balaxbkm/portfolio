"use client"
import { motion } from "framer-motion"
import { 
    GraduationCap, 
    Award, 
    MapPin, 
    CheckCircle2, 
    Sparkles
} from "lucide-react"

const fullTimeExperiences = [
    {
        company: "Vanilla Networks Pvt Ltd",
        location: "Technopark, Trivandrum, Kerala, India",
        type: "Full-time",
        totalDuration: "7 yrs 8 mos",
        logoText: "VN",
        logoGradient: "from-blue-600 to-indigo-700",
        roles: [
            {
                title: "Senior Software Engineer",
                type: "Full-time",
                period: "Jun 2022 - Present",
                duration: "4 yrs 5 mos",
                location: "Technopark, Trivandrum · On-site",
                points: [
                    "Architected and scaled full-stack web applications and high-throughput RESTful APIs using Laravel, React.js, Next.js, and Node.js, reducing average API response latency.",
                    "Integrated LLM APIs (Gemini, Claude, OpenAI) and Agentic AI workflows to automate document processing and structured data extraction.",
                    "Engineered end-to-end automated regression and cross-browser test suites using Playwright, increasing pre-deployment defect detection and streamlining continuous delivery pipelines."
                ],
                skills: ["Laravel", "React.js", "Next.js", "Node.js", "Playwright", "Agentic AI", "LLM APIs", "Docker", "RESTful APIs"]
            },
            {
                title: "Software Engineer",
                type: "Full-time",
                period: "Mar 2019 - May 2022",
                duration: "3 yrs 3 mos",
                location: "Technopark, Trivandrum · On-site",
                points: [
                    "Developed and maintained core backend architectures, modular PHP applications, and third-party webhook integrations using CodeIgniter and Laravel.",
                    "Powered Summit CPR with secure PayPal payment gateways, automated enrollments, and dynamic TCPDF automated certificates.",
                    "Built When Would Work, an event scheduling platform featuring real-time consensus voting algorithms and dynamic calendar polling engineered with CodeIgniter, JavaScript, and AJAX."
                ],
                skills: ["PHP", "CodeIgniter", "Laravel", "MySQL", "PayPal Integration", "TCPDF", "JavaScript", "AJAX", "Webhooks"]
            }
        ]
    },
    {
        company: "WebGlobal Technology Solutions Pvt Ltd",
        location: "Trivandrum, Kerala, India",
        type: "Full-time",
        totalDuration: "2 yrs 5 mos",
        logoText: "WG",
        logoGradient: "from-emerald-600 to-teal-700",
        roles: [
            {
                title: "Full Stack Engineer",
                type: "Full-time",
                period: "Oct 2017 - Mar 2019",
                duration: "1 yr 6 mos",
                location: "Trivandrum, India · On-site",
                points: [
                    "Developed EPIC, an automated construction cost estimation engine integrating OCR tools and TCPDF libraries to scan architectural PDF blueprints, extract material counts, and generate instant cost estimates.",
                    "Engineered core PHP, MySQL, and AJAX backend workflows alongside automated reporting modules exporting dynamic Excel spreadsheets, PDF invoices, and bi-directional JSON/XML third-party API integrations."
                ],
                skills: ["PHP", "MySQL", "OCR", "TCPDF", "REST APIs", "JSON/XML", "Excel Export", "AJAX"]
            },
            {
                title: "Web Developer",
                type: "Full-time",
                period: "Nov 2016 - Sep 2017",
                duration: "11 mos",
                location: "Trivandrum, India · On-site",
                points: [
                    "Deployed and customized Kerala Special, an e-commerce platform built on WordPress and WooCommerce, configuring secure payment gateways, inventory tracking, and checkout workflows.",
                    "Built responsive, cross-browser user interfaces using HTML5, CSS3, JavaScript, jQuery, and Bootstrap to improve usability across desktop and mobile devices."
                ],
                skills: ["WordPress", "WooCommerce", "Payment Gateways", "Bootstrap", "jQuery", "HTML5/CSS3"]
            }
        ]
    }
]

const internshipExperience = {
    company: "Srishti Innovative",
    location: "Trivandrum, Kerala, India",
    type: "Internship",
    totalDuration: "6 mos",
    logoText: "SI",
    logoGradient: "from-purple-600 to-violet-700",
    roles: [
        {
            title: "Web Development Intern",
            type: "Internship",
            period: "May 2016 - Oct 2016",
            duration: "6 mos",
            location: "Trivandrum, India · On-site",
            points: [
                "Built responsive UI layouts (HTML5, CSS3, JavaScript, Bootstrap, jQuery, Ajax) and dynamic server-side CRUD modules (PHP, CodeIgniter, Laravel, MySQL, WordPress, CMS) during a 6-month intensive internship."
            ],
            skills: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "CRUD Modules", "WordPress"]
        }
    ]
}

const education = [
    {
        degree: "Bachelor of Science - B.Sc., Information Technology",
        institution: "JP College of Arts & Science, Tenkasi",
        university: "Manonmaniam Sundaranar University",
        period: "2013 - 2016",
        grade: "Graduated with 73.5% First Class",
        logoText: "JP",
        skills: ["Data Structures", "Software Engineering", "Database Management", "Web Technologies"]
    }
]

const certifications = [
    {
        title: "Next.js App Router & Server Components",
        issuer: "Zero to Mastery Academy",
        issuerLogo: "ZTM",
        issuerColor: "from-amber-500 to-orange-600",
        issued: "Issued 2024",
        credentialId: "ZTM-NXTR-2024",
        skills: ["Next.js (App Router)", "React Server Components", "Server Actions", "Full-Stack Architecture"],
        credentialUrl: "https://zerotomastery.io"
    },
    {
        title: "Playwright Automation Testing & TypeScript for Enterprise Web Applications",
        issuer: "Udemy",
        issuerLogo: "U",
        issuerColor: "from-purple-600 to-indigo-600",
        issued: "Issued 2024",
        credentialId: "UC-PLWRT-2024",
        skills: ["Playwright", "TypeScript", "E2E Automation", "Regression Testing", "CI/CD Test Pipelines"],
        credentialUrl: "https://www.udemy.com"
    }
]

export function Experience() {
    return (
        <section id="experience" className="py-16 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-6">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
                    <div>
                        <span className="text-xs font-mono font-semibold tracking-wider text-primary uppercase bg-primary/10 dark:bg-white/10 px-3 py-1 rounded-full border border-primary/20 dark:border-white/15">
                            {"// 02 · CAREER & WORK EXPERIENCE"}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mt-4">
                            Work Experience & Track Record
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground max-w-md">
                        8+ years of architecting scalable web applications, enterprise backends, automated test suites, and agentic AI systems.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Left Column (8 cols): Full-Time Engineering Companies */}
                    <div className="lg:col-span-8 space-y-8">
                        {fullTimeExperiences.map((exp, expIdx) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: expIdx * 0.1 }}
                                className="glass-card p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/60 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.04] transition-all"
                            >
                                {/* Company Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    {/* Company Avatar / Logo Badge */}
                                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${exp.logoGradient} text-white font-black text-lg md:text-xl flex items-center justify-center flex-shrink-0 shadow-md border border-white/20`}>
                                        {exp.logoText}
                                    </div>

                                    {/* Company Title & Meta */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight truncate">
                                                {exp.company}
                                            </h3>
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 w-fit">
                                                {exp.totalDuration}
                                            </span>
                                        </div>

                                        <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                                            {exp.type} · <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3 inline" /> {exp.location}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Continuous Vertical Rail for Roles */}
                                <div className="relative pl-6 md:pl-8 ml-6 md:ml-7 border-l-2 border-zinc-200 dark:border-white/10 space-y-8 pt-2">
                                    {exp.roles.map((role) => (
                                        <div key={role.title} className="relative">
                                            {/* Rail Node Dot */}
                                            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-zinc-950 border-2 border-indigo-500 shadow-sm" />

                                            {/* Role Info */}
                                            <div className="space-y-1 mb-3">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                                    <h4 className="text-lg md:text-xl font-bold text-foreground">
                                                        {role.title}
                                                    </h4>
                                                    <span className="text-xs font-medium text-muted-foreground">
                                                        {role.duration}
                                                    </span>
                                                </div>

                                                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                                                    {role.period}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {role.location}
                                                </p>
                                            </div>

                                            {/* Bullet Points */}
                                            <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed mb-4">
                                                {role.points.map((pt, pIdx) => (
                                                    <li key={pIdx} className="flex items-start gap-2.5">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/70 mt-2 flex-shrink-0" />
                                                        <span>{pt}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* LinkedIn Style Skills Row */}
                                            <div className="pt-2">
                                                <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground mb-2">
                                                    <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                                                    <span>Skills:</span>
                                                </div>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {role.skills.map((s) => (
                                                        <span
                                                            key={s}
                                                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/5"
                                                        >
                                                            {s}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column (4 cols): Certifications, Internship Record & Education */}
                    <div className="lg:col-span-4 space-y-8">
                        
                        {/* Licenses & Certifications (Courses & Training) */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/60 dark:bg-white/[0.02]"
                        >
                            {/* Section Header */}
                            <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200 dark:border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                        <Award className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">
                                            Licenses & Certifications
                                        </h3>
                                        <p className="text-xs text-muted-foreground">
                                            Courses & Training
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Certifications List */}
                            <div className="space-y-6">
                                {certifications.map((cert) => (
                                    <div 
                                        key={cert.title} 
                                        className="p-4 rounded-2xl bg-zinc-50/80 dark:bg-white/[0.02] border border-zinc-200/80 dark:border-white/5 space-y-3 hover:border-zinc-300 dark:hover:border-white/10 transition-colors"
                                    >
                                        <div className="flex items-start gap-3">
                                            {/* Organization Avatar */}
                                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.issuerColor} text-white font-black text-xs flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                                {cert.issuerLogo}
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-bold text-foreground leading-snug">
                                                    {cert.title}
                                                </h4>
                                                <p className="text-xs font-semibold text-muted-foreground mt-0.5">
                                                    {cert.issuer}
                                                </p>
                                                <p className="text-[11px] text-muted-foreground mt-0.5">
                                                    {cert.issued} · No Expiration Date
                                                </p>
                                            </div>
                                        </div>

                                        {/* Verified Badge & ID */}
                                        <div className="flex items-center justify-between text-[11px] pt-1 border-t border-zinc-200/60 dark:border-white/5">
                                            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                                                <CheckCircle2 className="w-3.5 h-3.5" />
                                                <span>Verified Credential</span>
                                            </div>
                                            <span className="text-muted-foreground font-mono text-[10px]">
                                                {cert.credentialId}
                                            </span>
                                        </div>

                                        {/* Skills Tags */}
                                        <div className="flex flex-wrap gap-1 pt-1">
                                            {cert.skills.map((s) => (
                                                <span 
                                                    key={s}
                                                    className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/5"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Srishti Innovative Internship Record (Moved to Right Column) */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/60 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.04] transition-all"
                        >
                            {/* Company Header */}
                            <div className="flex items-start gap-4 mb-5">
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${internshipExperience.logoGradient} text-white font-black text-lg flex items-center justify-center flex-shrink-0 shadow-md border border-white/20`}>
                                    {internshipExperience.logoText}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                        <h3 className="text-lg md:text-xl font-bold text-foreground tracking-tight">
                                            {internshipExperience.company}
                                        </h3>
                                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 w-fit">
                                            {internshipExperience.type} · {internshipExperience.totalDuration}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {internshipExperience.location}
                                    </p>
                                </div>
                            </div>

                            {/* Internship Role Content */}
                            {internshipExperience.roles.map((role) => (
                                <div key={role.title} className="space-y-3 pt-1 border-t border-zinc-200/60 dark:border-white/5">
                                    <div className="pt-2">
                                        <h4 className="text-base font-bold text-foreground">
                                            {role.title}
                                        </h4>
                                        <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                                            {role.period} · {role.duration}
                                        </p>
                                    </div>

                                    <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                                        {role.points.map((pt, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-1 pt-1">
                                        {role.skills.map((s) => (
                                            <span
                                                key={s}
                                                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/5"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Education Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="glass-card p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/60 dark:bg-white/[0.02]"
                        >
                            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-zinc-200 dark:border-white/5">
                                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">
                                        Education
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        Academic Background
                                    </p>
                                </div>
                            </div>

                            {education.map((edu) => (
                                <div key={edu.degree} className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        {/* University Avatar */}
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-700 to-purple-800 text-white font-black text-xs flex items-center justify-center flex-shrink-0 shadow-sm">
                                            {edu.logoText}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-foreground leading-snug">
                                                {edu.institution}
                                            </h4>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                {edu.degree}
                                            </p>
                                            <p className="text-[11px] text-muted-foreground mt-0.5">
                                                {edu.university}
                                            </p>
                                            <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                                                {edu.period} · <span className="text-emerald-600 dark:text-emerald-400">{edu.grade}</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Education Skills */}
                                    <div className="pt-2 border-t border-zinc-200/60 dark:border-white/5">
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground mb-2">
                                            <Sparkles className="w-3 h-3 text-indigo-500" />
                                            <span>Key Subjects & Skills:</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {edu.skills.map((s) => (
                                                <span 
                                                    key={s}
                                                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/5"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}
