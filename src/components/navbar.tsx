"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Download, FileText } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { track } from "@vercel/analytics"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })

        // Intersection Observer for Active Section
        const sections = document.querySelectorAll("section[id]")
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, { rootMargin: "-20% 0px -35% 0px" })

        sections.forEach((section) => observer.observe(section))

        return () => {
            window.removeEventListener("scroll", handleScroll)
            sections.forEach((section) => observer.unobserve(section))
        }
    }, [])

    const navLinks = [
        { name: "Home", href: "/#home", id: "home" },
        { name: "About", href: "#about", id: "about" },
        { name: "Experience", href: "#experience", id: "experience" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Contact", href: "#contact", id: "contact" },
    ]

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-3 transition-all duration-300 pointer-events-none">
            <nav 
                className={`max-w-5xl mx-auto rounded-full transition-all duration-300 pointer-events-auto px-4 md:px-6 py-2.5 flex items-center justify-between
                ${scrolled 
                    ? "bg-white/85 dark:bg-zinc-950/80 backdrop-blur-xl border border-zinc-200/80 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30" 
                    : "bg-white/50 dark:bg-black/30 backdrop-blur-md border border-zinc-200/50 dark:border-white/5"
                }`}
            >
                {/* Brand / Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm border border-black/5 dark:border-white/10 flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Image
                            src="/logo-photo.jpg"
                            alt="Balakrishnan M"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="flex flex-col leading-none">
                        <div className="flex items-center gap-1.5">
                            <span className="text-xl font-black tracking-tighter text-foreground group-hover:text-indigo-500 transition-colors">BALA</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <span className="text-[9px] tracking-[0.25em] text-emerald-600 dark:text-emerald-400 font-bold uppercase transition-colors">Sr. Engineer</span>
                    </div>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-zinc-100/70 dark:bg-white/5 border border-zinc-200/50 dark:border-white/5">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200 relative ${
                                    isActive
                                        ? "text-foreground bg-white dark:bg-white/15 shadow-sm"
                                        : "text-muted-foreground hover:text-foreground hover:bg-zinc-200/50 dark:hover:bg-white/5"
                                }`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href="/Resume_Balakrishnan_M.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="Resume_Balakrishnan_M.pdf"
                        onClick={() => track("resume_download", { location: "navbar" })}
                        className="px-4 py-1.5 rounded-full bg-foreground text-background hover:opacity-90 transition-all text-xs font-bold flex items-center gap-2 group shadow-sm"
                    >
                        <span>Resume</span>
                        <Download size={13} className="group-hover:translate-y-0.5 transition-transform" />
                    </a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="p-2 rounded-xl text-foreground hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors" 
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden mt-2 max-w-5xl mx-auto rounded-3xl p-6 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border border-zinc-200 dark:border-white/10 shadow-2xl pointer-events-auto space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2.5 rounded-2xl text-base font-bold transition-colors ${
                                    activeSection === link.id
                                        ? "bg-zinc-100 dark:bg-white/10 text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="pt-2 border-t border-zinc-200 dark:border-white/10">
                        <a
                            href="/Resume_Balakrishnan_M.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download="Resume_Balakrishnan_M.pdf"
                            className="w-full py-3 rounded-2xl bg-foreground text-background font-bold text-sm flex items-center justify-center gap-2 shadow-md"
                            onClick={() => {
                                setIsOpen(false);
                                track("resume_download", { location: "mobile_menu" });
                            }}
                        >
                            <FileText size={16} />
                            <span>Download Full Resume</span>
                            <Download size={15} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
