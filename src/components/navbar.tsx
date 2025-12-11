"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)

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
        { name: "Home", href: "/#home" }, // Updated href to include hash for accurate tracking if page.tsx has id="home" on hero implies we might need to update hero id
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 dark:bg-black/50 backdrop-blur-md border-b border-black/5 dark:border-white/5 py-4" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-11 h-11 mt-1">
                        <Image
                            src="/logo-icon.png"
                            alt="Logo"
                            fill
                            className="object-contain dark:invert"
                            priority
                        />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">BALA</span>
                        <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase group-hover:text-foreground transition-colors">Developer</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors ${activeSection === link.href.replace("/#", "").replace("#", "") || (link.href === "/#home" && activeSection === "hero") // Assuming Hero section might be id="hero" or "home"
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <ThemeToggle />
                    {/* <a
                        href="/resume.pdf"
                        download="Balakrishnan_Resume.pdf"
                        className="px-6 py-2 rounded-full border border-zinc-200 dark:border-white/20 text-foreground hover:bg-foreground hover:text-background transition-all text-sm font-medium flex items-center gap-2 group"
                    >
                        <span>Resume</span>
                        <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                    </a> */}
                </div>

                {/* Mobile Nav Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} className="text-foreground" aria-label="Menu">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8">
                    <button onClick={() => setIsOpen(false)} className="absolute top-6 right-4 p-2">
                        <X size={32} />
                    </button>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-3xl font-bold hover:text-muted-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}
