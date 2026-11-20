"use client"

import { useEffect, useRef } from "react"

interface StardustParticle {
  x: number
  y: number
  originX: number
  originY: number
  vx: number
  vy: number
  size: number
  depth: number // 0.3 (deep background) to 1.0 (foreground)
  alpha: number
  baseAlpha: number
  pulseSpeed: number
  pulseOffset: number
  color: string
}

export function InteractiveNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0
    let dpr = 1
    let isDark = document.documentElement.classList.contains("dark")
    let prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const particles: StardustParticle[] = []

    // Smooth cursor & fluid velocity tracker
    const mouse = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      prevX: -2000,
      prevY: -2000,
      vx: 0,
      vy: 0,
      speed: 0,
      isActive: false,
      intensity: 0, // 0 to 1 smooth fade
    }

    // Palette definition
    const getPalette = (dark: boolean) => {
      if (dark) {
        return {
          primary: "129, 140, 248", // Indigo-400
          secondary: "168, 85, 247", // Purple-500
          accent: "56, 189, 248", // Sky-400
          glowCore: "rgba(99, 102, 241, 0.16)",
          glowMid: "rgba(168, 85, 247, 0.08)",
          glowOuter: "rgba(56, 189, 248, 0.02)",
        }
      }
      return {
        primary: "99, 102, 241", // Indigo-500
        secondary: "147, 51, 234", // Purple-600
        accent: "14, 165, 233", // Sky-500
        glowCore: "rgba(99, 102, 241, 0.10)",
        glowMid: "rgba(147, 51, 234, 0.05)",
        glowOuter: "rgba(14, 165, 233, 0.015)",
      }
    }

    let palette = getPalette(isDark)

    // Theme mutation observer
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark")
      palette = getPalette(isDark)
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    // Motion preference observer
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches
    }
    motionQuery.addEventListener("change", handleMotionChange)

    // Calculate count based on viewport area
    const getTargetCount = (w: number, h: number) => {
      const area = w * h
      const isMobile = w < 768
      if (prefersReducedMotion) return isMobile ? 35 : 65
      const density = isMobile ? 22000 : 16000
      return Math.min(Math.max(Math.floor(area / density), isMobile ? 40 : 75), isMobile ? 65 : 120)
    }

    // Initialize or resize canvas & particles
    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      const targetCount = getTargetCount(width, height)
      const colors = [palette.primary, palette.secondary, palette.accent]

      if (particles.length < targetCount) {
        const toAdd = targetCount - particles.length
        for (let i = 0; i < toAdd; i++) {
          const depth = Math.random() * 0.7 + 0.3 // 0.3 to 1.0
          const x = Math.random() * width
          const y = Math.random() * height
          const color = colors[Math.floor(Math.random() * colors.length)]

          particles.push({
            x,
            y,
            originX: x,
            originY: y,
            vx: (Math.random() - 0.5) * 0.3 * depth,
            vy: (Math.random() - 0.5) * 0.3 * depth,
            size: (Math.random() * 1.5 + 0.8) * depth,
            depth,
            alpha: Math.random() * 0.5 + 0.2,
            baseAlpha: Math.random() * 0.4 + 0.25,
            pulseSpeed: 0.015 + Math.random() * 0.02,
            pulseOffset: Math.random() * Math.PI * 2,
            color,
          })
        }
      } else if (particles.length > targetCount) {
        particles.length = targetCount
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas, { passive: true })

    // Cursor tracking
    const onPointerMove = (e: MouseEvent | PointerEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.isActive = true
    }

    const onPointerLeave = () => {
      mouse.isActive = false
    }

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX
        mouse.targetY = e.touches[0].clientY
        mouse.isActive = true
      }
    }

    const onTouchEnd = () => {
      mouse.isActive = false
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    document.addEventListener("mouseleave", onPointerLeave, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchend", onTouchEnd, { passive: true })

    // Page visibility to pause animation when inactive
    let isVisible = !document.hidden
    const onVisibilityChange = () => {
      isVisible = !document.hidden
      if (isVisible) {
        lastTime = performance.now()
        animationFrameId = requestAnimationFrame(render)
      } else {
        cancelAnimationFrame(animationFrameId)
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange)

    let lastTime = performance.now()

    // Main render loop
    const render = (now: number) => {
      if (!isVisible) return

      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now

      ctx.clearRect(0, 0, width, height)

      // Smooth pointer & velocity calculation
      if (mouse.isActive) {
        mouse.intensity += (1 - mouse.intensity) * Math.min(1, dt * 7)
        
        // Calculate instantaneous velocity
        const dx = mouse.targetX - mouse.x
        const dy = mouse.targetY - mouse.y
        mouse.vx = dx * Math.min(1, dt * 18)
        mouse.vy = dy * Math.min(1, dt * 18)
        mouse.speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy)

        mouse.x += mouse.vx
        mouse.y += mouse.vy
      } else {
        mouse.intensity += (0 - mouse.intensity) * Math.min(1, dt * 3)
        mouse.speed *= 0.9
      }

      const isMobile = width < 768
      const mouseRadius = isMobile ? 140 : 200
      const mouseRadiusSq = mouseRadius * mouseRadius

      // 1. Draw luminous ambient light wake around the cursor
      if (mouse.intensity > 0.01) {
        const glowRadius = mouseRadius * (1 + Math.min(mouse.speed * 0.04, 0.35))
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          glowRadius
        )

        glow.addColorStop(0, palette.glowCore.replace(")", `, ${0.8 * mouse.intensity})`).replace("rgba", "rgba"))
        glow.addColorStop(0.4, palette.glowMid.replace(")", `, ${0.6 * mouse.intensity})`).replace("rgba", "rgba"))
        glow.addColorStop(1, "transparent")

        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2)
        ctx.fill()
      }

      const particleCount = particles.length

      // 2. Update and draw particles with magnetic physics
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i]

        // Ambient Brownian drift
        p.x += p.vx
        p.y += p.vy

        // Wrap around boundaries smoothly
        const padding = 20
        if (p.x < -padding) p.x = width + padding
        else if (p.x > width + padding) p.x = -padding
        if (p.y < -padding) p.y = height + padding
        else if (p.y > height + padding) p.y = -padding

        // Cursor magnetic wave interaction
        let proximityFactor = 0

        if (mouse.intensity > 0.01 && !prefersReducedMotion) {
          const mdx = p.x - mouse.x
          const mdy = p.y - mouse.y
          const distSq = mdx * mdx + mdy * mdy

          if (distSq < mouseRadiusSq && distSq > 1) {
            const dist = Math.sqrt(distSq)
            proximityFactor = (1 - dist / mouseRadius) * mouse.intensity

            // Gentle fluid displacement force
            const force = proximityFactor * (isMobile ? 12 : 20) * p.depth
            
            // Add subtle tangential swirl to make motion feel like fluid
            const angle = Math.atan2(mdy, mdx)
            const swirlAngle = angle + 0.3 // slight swirl angle
            p.x += Math.cos(swirlAngle) * force * dt * 8
            p.y += Math.sin(swirlAngle) * force * dt * 8
          }
        }

        // Natural breathing pulse
        p.pulseOffset += p.pulseSpeed
        const pulse = Math.sin(p.pulseOffset) * 0.25 + 0.75
        const finalAlpha = Math.min(
          1,
          p.baseAlpha * pulse * p.depth + proximityFactor * (isDark ? 0.6 : 0.45)
        )
        const finalSize = p.size * (1 + proximityFactor * 0.6)

        // Draw particle dot with soft glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, finalSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${finalAlpha})`
        ctx.fill()

        // Highlight nearby particles with soft halo
        if (proximityFactor > 0.25) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, finalSize * 2.8, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${p.color}, ${proximityFactor * 0.18})`
          ctx.fill()
        }
      }

      // 3. Transient synaptic pulse lines near cursor wake (minimal and refined, not a cluttered web)
      if (mouse.intensity > 0.05 && !prefersReducedMotion) {
        const connectDist = isMobile ? 85 : 110
        const connectDistSq = connectDist * connectDist

        for (let i = 0; i < particleCount; i++) {
          const p1 = particles[i]
          const mdx1 = p1.x - mouse.x
          const mdy1 = p1.y - mouse.y
          const mDistSq1 = mdx1 * mdx1 + mdy1 * mdy1

          // Only connect particles that are within the cursor's aura
          if (mDistSq1 < mouseRadiusSq) {
            for (let j = i + 1; j < particleCount; j++) {
              const p2 = particles[j]
              const dx = p2.x - p1.x
              const dy = p2.y - p1.y
              const distSq = dx * dx + dy * dy

              if (distSq < connectDistSq) {
                const dist = Math.sqrt(distSq)
                const lineAlpha =
                  (1 - dist / connectDist) *
                  (1 - Math.sqrt(mDistSq1) / mouseRadius) *
                  mouse.intensity *
                  (isDark ? 0.35 : 0.25)

                if (lineAlpha > 0.02) {
                  ctx.beginPath()
                  ctx.moveTo(p1.x, p1.y)
                  ctx.lineTo(p2.x, p2.y)
                  ctx.strokeStyle = `rgba(${palette.primary}, ${lineAlpha})`
                  ctx.lineWidth = 0.65
                  ctx.stroke()
                }
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      themeObserver.disconnect()
      motionQuery.removeEventListener("change", handleMotionChange)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("pointermove", onPointerMove)
      document.removeEventListener("mouseleave", onPointerLeave)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onTouchEnd)
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 select-none"
      aria-hidden="true"
    />
  )
}
