"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isPointer, setIsPointer] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })

            const target = e.target as HTMLElement
            const computedStyle = window.getComputedStyle(target)
            // Check if element is clickable or text
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button") ||
                computedStyle.cursor === "pointer"
            ) {
                setIsPointer(true)
            } else {
                setIsPointer(false)
            }
        }

        window.addEventListener("mousemove", updateMousePosition)
        return () => window.removeEventListener("mousemove", updateMousePosition)
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white dark:bg-white pointer-events-none z-[9999] mix-blend-difference hidden md:block" // mix-blend-difference inverts colors
            animate={{
                x: mousePosition.x - 12,
                y: mousePosition.y - 12,
                scale: isPointer ? 2.5 : 1,
                opacity: 1
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
        />
    )
}
