"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, MessageCircle, ArrowRight, Code, Globe, Cpu, Zap, Database, Palette, Layers } from "lucide-react"

export function Hero() {
    return (
        <section id="home" className="block md:min-h-screen md:flex md:flex-col md:justify-center relative overflow-hidden pt-24 md:pt-20">

            {/* Creative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Moving Gradient Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-[100px] dark:from-indigo-900/20 dark:to-purple-900/20"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -60, 0],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[40%] -left-[20%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-[120px] dark:from-blue-900/20 dark:to-cyan-900/20"
                />


            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-start md:items-center h-auto md:h-full">

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
                    <div className="lg:col-span-10 relative flex flex-col justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-2xl aspect-[3/3.5] md:aspect-[4/3]"
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

                            {/* Floating Icons Around Profile */}




                            <motion.div
                                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="absolute top-[20%] -right-[8%] p-3 rounded-xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg z-20"
                            >
                                <Cpu className="text-emerald-600 dark:text-emerald-400 w-5 h-5" />
                            </motion.div>



                            <motion.div
                                animate={{ y: [0, -10, 0], x: [0, -5, 0], rotate: [0, 10, 0] }}
                                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="absolute -top-[5%] left-[10%] p-3 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg z-20"
                            >
                                <Database className="text-pink-600 dark:text-pink-400 w-6 h-6" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                                className="absolute bottom-[25%] -left-[8%] p-4 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg z-20"
                            >
                                <Palette className="text-violet-600 dark:text-violet-400 w-6 h-6" />
                            </motion.div>



                            {/* Name Overlay */}
                            {/* Name Overlay */}
                            <div className="hidden md:flex absolute top-[82%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full justify-center z-20 pointer-events-none">
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
                                        Software Engineer
                                    </motion.p>
                                </motion.div>
                            </div>
                            {/* Glass Card Overlay */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[95%] md:w-auto glass-strong rounded-full p-2 items-center justify-between gap-4 z-30 shadow-2xl border-2 border-black dark:border-white/10 backdrop-blur-3xl bg-white/5 dark:bg-black/10"
                            >
                                {/* Avatars */}
                                <div className="flex -space-x-4 ml-[2px]">
                                    {["EP", "SC", "KS", "W3", "+"].map((text, i) => (
                                        <div
                                            key={i}
                                            className={`w-10 h-10 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center text-[10px] font-bold text-white shadow-lg transform hover:-translate-y-1 transition-transform cursor-default
                                            ${i === 0 ? "bg-gradient-to-br from-zinc-400 to-zinc-500" : ""}
                                            ${i === 1 ? "bg-gradient-to-br from-zinc-500 to-zinc-600" : ""}
                                            ${i === 2 ? "bg-gradient-to-br from-zinc-600 to-zinc-700" : ""}
                                            ${i === 3 ? "bg-gradient-to-br from-zinc-700 to-zinc-800" : ""}
                                            ${i === 4 ? "bg-gradient-to-br from-zinc-800 to-zinc-900 !text-white/50" : ""}
                                            `}
                                        >
                                            {text}
                                        </div>
                                    ))}
                                </div>

                                {/* Text Info */}
                                <div className="hidden md:block">
                                    <div className="flex items-center gap-2 text-sm leading-tight">
                                        <span className="font-bold text-zinc-900 dark:text-white text-xs">15+</span>
                                        <span className="font-bold text-zinc-900 dark:text-white text-xs">Projects</span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-px h-8 bg-white/10 hidden md:block" />

                                {/* Button */}
                                <div>
                                    <a
                                        href="#projects"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-bold hover:opacity-90 transition-all shadow-lg mr-[3px]"
                                    >
                                        <ArrowRight size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Mobile Content Below Profile */}
                        <div className="flex md:hidden flex-col items-center gap-6 mt-6 w-full px-4 mb-16">
                            {/* Mobile Name */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-center"
                            >
                                <h1 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-white/40 uppercase drop-shadow-sm">
                                    BALAKRISHNAN
                                </h1>
                                <p className="text-[10px] font-bold tracking-[0.6em] text-zinc-600 dark:text-white/60 mt-3 uppercase text-center mx-auto w-fit border border-zinc-200 dark:border-white/10 rounded-full px-4 py-1.5">
                                    Software Engineer
                                </p>
                            </motion.div>

                            {/* Mobile Stats/Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="w-full max-w-sm glass-strong rounded-full p-2 flex items-center justify-between gap-4 shadow-xl border-2 border-black dark:border-white/10 bg-white/5 dark:bg-black/10 backdrop-blur-3xl"
                            >
                                <div className="flex -space-x-4 ml-[2px]">
                                    {["EP", "SC", "KS", "W3", "+"].map((text, i) => (
                                        <div
                                            key={i}
                                            className={`w-10 h-10 rounded-full border-2 border-white dark:border-[#1a1a1a] flex items-center justify-center text-[10px] font-bold text-white shadow-sm
                                            ${i === 0 ? "bg-gradient-to-br from-zinc-400 to-zinc-500" : ""}
                                            ${i === 1 ? "bg-gradient-to-br from-zinc-500 to-zinc-600" : ""}
                                            ${i === 2 ? "bg-gradient-to-br from-zinc-600 to-zinc-700" : ""}
                                            ${i === 3 ? "bg-gradient-to-br from-zinc-700 to-zinc-800" : ""}
                                            ${i === 4 ? "bg-gradient-to-br from-zinc-800 to-zinc-900 !text-white/50" : ""}
                                            `}
                                        >
                                            {text}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 text-sm leading-tight">
                                    <span className="font-bold text-zinc-900 dark:text-white text-xs">15+</span>
                                    <span className="font-bold text-zinc-900 dark:text-white text-xs">Projects</span>
                                </div>
                                <div>
                                    <a
                                        href="#projects"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-bold hover:opacity-90 transition-all shadow-lg mr-[3px]"
                                    >
                                        <ArrowRight size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Social Icons */}
                    <div className="hidden lg:flex lg:col-span-1 flex-col justify-center items-center gap-8">
                        <a href="https://github.com/balaxbkm" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/bala-krishnan-m-534149116" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={20} /></a>
                        <a href="https://wa.me/918015528885" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-white/5 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white transition-all"><MessageCircle size={20} /></a>
                    </div>

                </div>
            </div>
            {/* Scroll Down Indicator */}
            {/* Scroll Down Indicator */}

        </section>
    )
}
