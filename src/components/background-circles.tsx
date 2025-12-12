"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function BackgroundCircles() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 user-select-none">
            {/* Large Gradient Blobs (Existing) */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -30, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 40, 0],
                    y: [0, -40, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-zinc-300/10 dark:bg-white/5 rounded-full blur-[150px] -z-10"
            />

            {/* New Floating Particles */}
            {/* New Floating Particles */}
            {mounted && [...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-zinc-500/10 dark:bg-white/5"
                    initial={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        scale: Math.random() * 0.5 + 0.5,
                        opacity: 0
                    }}
                    animate={{
                        y: [0, Math.random() * -100 - 50, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [0, 0.5, 0],
                        scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: Math.random() * 20 + 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10
                    }}
                    style={{
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                    }}
                />
            ))}
        </div>
    )
}
