"use client"
import { motion } from "framer-motion"

export function BackgroundCircles() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 user-select-none">
            {/* Top Right Circle */}
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

            {/* Bottom Left Circle */}
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

            {/* Center-ish Circle */}
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
        </div>
    )
}
