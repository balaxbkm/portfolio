"use client"
import React, { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function Footer() {
    const [time, setTime] = useState<string>("")

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const dateStr = now.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric"
            }).toUpperCase()

            const timeStr = now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            }).toUpperCase()

            setTime(`${dateStr} · ${timeStr} IST`)
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="pt-16 pb-10 bg-zinc-50 dark:bg-black/80 border-t border-zinc-200/80 dark:border-white/10 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Top Row: Info & Scroll-to-Top */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-zinc-200/80 dark:border-white/10">
                    <div className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">
                                Open to Work
                            </span>
                        </div>
                        <h3 className="text-xl font-black text-foreground tracking-tight">
                            Balakrishnan M
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                            Senior Full-Stack Software Engineer
                        </p>
                    </div>

                    {/* Back to top button */}
                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="group flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-zinc-200/80 dark:border-white/10 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all duration-300 hover:border-zinc-400 dark:hover:border-white/30"
                    >
                        <span>Top</span>
                        <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>

                {/* Bottom Row: Copyright and Timer */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
                    <p>
                        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
                    </p>

                    <p className="text-zinc-500 dark:text-zinc-400 text-center md:text-right" suppressHydrationWarning>
                        {time || "Loading IST Clock..."}
                    </p>
                </div>

            </div>
        </footer>
    )
}
