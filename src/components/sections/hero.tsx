"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, MessageCircle } from "lucide-react"

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-center h-full">

                    {/* Left Vertical Text */}
                    <div className="hidden lg:flex lg:col-span-1 flex-col justify-center items-center h-[500px] border-l border-zinc-200 dark:border-white/10 ml-4 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="-rotate-90 flex items-center gap-6 whitespace-nowrap origin-center">
                                <span className="text-5xl font-bold tracking-widest text-zinc-200 dark:text-white/10 uppercase">
                                    Full Stack
                                </span>
                                <span className="text-5xl font-bold tracking-widest text-zinc-900 dark:text-white uppercase">
                                    Developer
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Center Image & Content */}
                    <div className="lg:col-span-10 relative flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-2xl aspect-[4/3]"
                        >
                            {/* Main Image */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden grayscale-0 contrast-100 brightness-110">
                                <Image
                                    src="/profile-new-2.jpg"
                                    alt="Balakrishnan M"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80" />
                            </div>

                            {/* Name Overlay */}
                            {/* Name Overlay */}
                            <div className="absolute top-[72%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center z-20 pointer-events-none">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 uppercase drop-shadow-2xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                                        BALAKRISHNAN
                                    </h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 15px rgba(255,255,255,0.15)", "0 0 0px rgba(255,255,255,0)"],
                                            borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.1)"]
                                        }}
                                        transition={{
                                            opacity: { duration: 0.8, delay: 0.3 },
                                            y: { duration: 0.8, delay: 0.3 },
                                            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                            borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                        className="text-[10px] md:text-xs font-bold tracking-[0.6em] text-white/80 mt-3 uppercase text-center mx-auto w-fit bg-black/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-3xl"
                                    >
                                        Web Developer
                                    </motion.p>
                                </motion.div>
                            </div>
                            {/* Glass Card Overlay */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[95%] md:w-auto glass-strong rounded-full p-2 flex items-center justify-between gap-4 z-30 shadow-2xl border border-white/10 backdrop-blur-3xl bg-white/80 dark:bg-black/40"
                            >
                                {/* Avatars */}
                                <div className="flex -space-x-4 ml-1">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-[10px] font-bold text-white/50 shadow-lg transform hover:-translate-y-1 transition-transform cursor-default"
                                        >
                                            U{i}
                                        </div>
                                    ))}
                                </div>

                                {/* Text Info */}
                                <div className="hidden md:block">
                                    <div className="flex items-center gap-2 text-sm leading-tight">
                                        <span className="font-bold text-foreground text-base">25+</span>
                                        <span className="font-bold text-foreground text-base">Projects</span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-px h-8 bg-white/10 hidden md:block" />

                                {/* Button */}
                                <div>
                                    <a
                                        href="#projects"
                                        className="px-5 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-gray-200 transition-all shadow-lg hover:shadow-white/20 block mr-[5px]"
                                    >
                                        Portfolio
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Social Icons */}
                    <div className="hidden lg:flex lg:col-span-1 flex-col justify-center items-center gap-8">
                        <a href="https://github.com/balakrishnan" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"><Github size={20} /></a>
                        <a href="https://linkedin.com/in/balakrishnan" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"><Linkedin size={20} /></a>
                        <a href="https://wa.me/918015528885" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"><MessageCircle size={20} /></a>
                    </div>

                </div>
            </div>
            {/* Scroll Down Indicator */}
            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
            >
                <a href="#about" className="flex flex-col items-center gap-2 pointer-events-auto cursor-pointer group p-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        Scroll
                    </span>
                    <div className="w-[26px] h-[42px] border-2 border-zinc-300 dark:border-white/20 rounded-full flex justify-center p-1.5 transition-colors group-hover:border-zinc-900 dark:group-hover:border-white/60">
                        <motion.div
                            animate={{
                                y: [0, 8, 0],
                                opacity: [1, 0.5, 1]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-1 h-2 bg-foreground rounded-full"
                        />
                    </div>
                </a>
            </motion.div>
        </section>
    )
}
