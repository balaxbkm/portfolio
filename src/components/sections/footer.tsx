"use client"
import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export function Footer() {
    const [time, setTime] = useState<string>("")

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const dateStr = now.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            }).toUpperCase()

            const timeStr = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }).toUpperCase()

            setTime(`${dateStr} | ${timeStr} IST`)
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="pt-20 pb-8 bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
                    <div className="space-y-4">
                        <p className="text-zinc-500 dark:text-white/40 text-xs uppercase tracking-[0.2em]">Designed & Built by</p>
                        <h3 className="text-xl font-bold text-foreground tracking-tight">Balakrishnan M</h3>
                    </div>

                    <div className="flex gap-8">
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-3 text-xs font-bold text-zinc-500 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest"
                        >
                            Back to Top
                            <div className="p-3 rounded-full border border-zinc-200 dark:border-white/10 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                                <ArrowUp size={16} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Big Text */}
                <div className="w-full border-t border-zinc-200 dark:border-white/10 pt-12">
                    <h1 className="text-[13.5vw] leading-[0.8] font-black text-zinc-900/5 dark:text-white/5 text-center select-none pointer-events-none tracking-tighter mix-blend-difference">
                        BALAKRISHNAN
                    </h1>
                    <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-[10px] text-zinc-400 dark:text-white/20 uppercase tracking-[0.2em] font-medium gap-4">
                        <p>&copy; {new Date().getFullYear()} EDITION. ALL RIGHTS RESERVED.</p>
                        <p suppressHydrationWarning>LOCAL TIME: {time || "Loading..."}</p>
                    </div>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />
        </footer>
    )
}
