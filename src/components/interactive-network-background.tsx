"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  baseVx: number
  baseVy: number
  radius: number
  phase: number
  pulseSpeed: number
  dispX: number
  dispY: number
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

    // Responsive node list
    const nodes: Node[] = []

    // Pointer state
    const pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isActive: false,
      intensity: 0, // smoothly eases 0 -> 1 -> 0
    }

    // Observe theme changes (dark/light toggle)
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark")
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    // Observe motion preference changes
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches
    }
    motionMediaQuery.addEventListener("change", handleMotionChange)

    // Calculate node count based on screen area
    const getTargetNodeCount = (w: number, h: number) => {
      const area = w * h
      const isMobile = w < 768
      const isTablet = w >= 768 && w < 1024

      if (prefersReducedMotion) {
        return isMobile ? 18 : 30
      }

      const areaPerNode = isMobile ? 24000 : isTablet ? 19000 : 15000
      const minNodes = isMobile ? 20 : isTablet ? 35 : 48
      const maxNodes = isMobile ? 32 : isTablet ? 55 : 80
      return Math.min(Math.max(Math.floor(area / areaPerNode), minNodes), maxNodes)
    }

    // Initialize or resize nodes
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

      const targetCount = getTargetNodeCount(width, height)
      const isMobile = width < 768
      const speedScale = prefersReducedMotion ? 0.05 : isMobile ? 0.25 : 0.35

      // Adjust node count while preserving existing nodes
      if (nodes.length < targetCount) {
        const toAdd = targetCount - nodes.length
        for (let i = 0; i < toAdd; i++) {
          const vx = (Math.random() - 0.5) * speedScale
          const vy = (Math.random() - 0.5) * speedScale
          nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx,
            vy,
            baseVx: vx,
            baseVy: vy,
            radius: (Math.random() * 1.1 + 1.2) * (isMobile ? 0.85 : 1),
            phase: Math.random() * Math.PI * 2,
            pulseSpeed: 0.012 + Math.random() * 0.018,
            dispX: 0,
            dispY: 0,
          })
        }
      } else if (nodes.length > targetCount) {
        nodes.length = targetCount
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas, { passive: true })

    // Pointer events (desktop + mobile touch)
    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      pointer.targetX = e.clientX
      pointer.targetY = e.clientY
      pointer.isActive = true
    }

    const handlePointerLeave = () => {
      pointer.isActive = false
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        pointer.targetX = e.touches[0].clientX
        pointer.targetY = e.touches[0].clientY
        pointer.isActive = true
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        pointer.targetX = e.touches[0].clientX
        pointer.targetY = e.touches[0].clientY
        pointer.isActive = true
      }
    }

    const handleTouchEnd = () => {
      pointer.isActive = false
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    document.addEventListener("mouseleave", handlePointerLeave, { passive: true })
    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("touchend", handleTouchEnd, { passive: true })
    window.addEventListener("touchcancel", handleTouchEnd, { passive: true })

    // Pause rendering when tab is hidden to save 100% CPU/GPU
    let isPageVisible = !document.hidden
    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden
      if (isPageVisible) {
        lastTime = performance.now()
        animationFrameId = requestAnimationFrame(render)
      } else {
        cancelAnimationFrame(animationFrameId)
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)

    let lastTime = performance.now()

    // Animation render loop
    const render = (now: number) => {
      if (!isPageVisible) return

      const dt = Math.min((now - lastTime) / 1000, 0.1) // clamp delta
      lastTime = now

      ctx.clearRect(0, 0, width, height)

      // Smooth pointer interpolation and intensity fading
      if (pointer.isActive) {
        pointer.intensity += (1 - pointer.intensity) * Math.min(1, dt * 8)
        pointer.x += (pointer.targetX - pointer.x) * Math.min(1, dt * 15)
        pointer.y += (pointer.targetY - pointer.y) * Math.min(1, dt * 15)
      } else {
        pointer.intensity += (0 - pointer.intensity) * Math.min(1, dt * 4)
      }

      const isMobile = width < 768
      const interactionRadius = isMobile ? 130 : 180
      const interactionRadiusSq = interactionRadius * interactionRadius
      const connectionDist = isMobile ? 110 : 135
      const connectionDistSq = connectionDist * connectionDist
      const cursorConnectDist = isMobile ? 120 : 160
      const cursorConnectDistSq = cursorConnectDist * cursorConnectDist

      // 1. Draw subtle interactive glow around the cursor
      if (pointer.intensity > 0.01) {
        const glowRadius = isMobile ? 140 : 190
        const glowGradient = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          glowRadius
        )

        if (isDark) {
          glowGradient.addColorStop(0, `rgba(99, 102, 241, ${0.14 * pointer.intensity})`)
          glowGradient.addColorStop(0.4, `rgba(56, 189, 248, ${0.05 * pointer.intensity})`)
          glowGradient.addColorStop(1, "rgba(99, 102, 241, 0)")
        } else {
          glowGradient.addColorStop(0, `rgba(99, 102, 241, ${0.1 * pointer.intensity})`)
          glowGradient.addColorStop(0.5, `rgba(79, 70, 229, ${0.03 * pointer.intensity})`)
          glowGradient.addColorStop(1, "rgba(99, 102, 241, 0)")
        }

        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(pointer.x, pointer.y, glowRadius, 0, Math.PI * 2)
        ctx.fill()
      }

      // 2. Update node positions & gentle cursor repulsion physics
      const nodeCount = nodes.length
      const margin = 25

      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i]

        // Organic base drift
        node.x += node.vx
        node.y += node.vy

        // Wrap around viewport edges smoothly
        if (node.x < -margin) node.x = width + margin
        else if (node.x > width + margin) node.x = -margin

        if (node.y < -margin) node.y = height + margin
        else if (node.y > height + margin) node.y = -margin

        // Cursor interaction force
        let targetDispX = 0
        let targetDispY = 0

        if (pointer.intensity > 0.01 && !prefersReducedMotion) {
          const effectiveX = node.x + node.dispX
          const effectiveY = node.y + node.dispY
          const dx = effectiveX - pointer.x
          const dy = effectiveY - pointer.y
          const distSq = dx * dx + dy * dy

          if (distSq < interactionRadiusSq && distSq > 1) {
            const dist = Math.sqrt(distSq)
            const force =
              Math.pow(1 - dist / interactionRadius, 1.6) *
              (isMobile ? 24 : 36) *
              pointer.intensity

            targetDispX = (dx / dist) * force
            targetDispY = (dy / dist) * force
          }
        }

        // Smooth spring easing for displacement
        node.dispX += (targetDispX - node.dispX) * Math.min(1, dt * 7)
        node.dispY += (targetDispY - node.dispY) * Math.min(1, dt * 7)

        // Subtle pulsing
        node.phase += node.pulseSpeed
      }

      // 3. Render connection lines between interconnected nodes
      for (let i = 0; i < nodeCount; i++) {
        const nodeA = nodes[i]
        const p1x = nodeA.x + nodeA.dispX
        const p1y = nodeA.y + nodeA.dispY

        for (let j = i + 1; j < nodeCount; j++) {
          const nodeB = nodes[j]
          const p2x = nodeB.x + nodeB.dispX
          const p2y = nodeB.y + nodeB.dispY

          const dx = p2x - p1x
          const dy = p2y - p1y
          const distSq = dx * dx + dy * dy

          if (distSq < connectionDistSq) {
            const dist = Math.sqrt(distSq)
            const normDist = 1 - dist / connectionDist

            // Proximity of this line's midpoint to pointer
            let cursorBoost = 0
            if (pointer.intensity > 0.01) {
              const midX = (p1x + p2x) * 0.5
              const midY = (p1y + p2y) * 0.5
              const mdx = midX - pointer.x
              const mdy = midY - pointer.y
              const mDistSq = mdx * mdx + mdy * mdy
              if (mDistSq < interactionRadiusSq) {
                const mDist = Math.sqrt(mDistSq)
                cursorBoost = (1 - mDist / interactionRadius) * 0.5 * pointer.intensity
              }
            }

            const totalAlpha = Math.min(1, normDist * (isDark ? 0.22 : 0.16) + cursorBoost * 0.3)
            ctx.beginPath()
            ctx.moveTo(p1x, p1y)
            ctx.lineTo(p2x, p2y)

            if (isDark) {
              if (cursorBoost > 0.1) {
                // Activated line near cursor: subtle luminous violet-cyan
                ctx.strokeStyle = `rgba(147, 197, 253, ${totalAlpha})`
                ctx.lineWidth = 0.8
              } else {
                ctx.strokeStyle = `rgba(165, 180, 252, ${totalAlpha})`
                ctx.lineWidth = 0.6
              }
            } else {
              if (cursorBoost > 0.1) {
                ctx.strokeStyle = `rgba(99, 102, 241, ${totalAlpha})`
                ctx.lineWidth = 0.8
              } else {
                ctx.strokeStyle = `rgba(100, 116, 139, ${totalAlpha})`
                ctx.lineWidth = 0.6
              }
            }

            ctx.stroke()
          }
        }
      }

      // 4. Render dynamic connection lines from cursor to nearby nodes (neural web nexus)
      if (pointer.intensity > 0.02 && !prefersReducedMotion) {
        for (let i = 0; i < nodeCount; i++) {
          const node = nodes[i]
          const nx = node.x + node.dispX
          const ny = node.y + node.dispY
          const dx = nx - pointer.x
          const dy = ny - pointer.y
          const distSq = dx * dx + dy * dy

          if (distSq < cursorConnectDistSq) {
            const dist = Math.sqrt(distSq)
            const strandAlpha =
              (1 - dist / cursorConnectDist) * (isDark ? 0.38 : 0.28) * pointer.intensity

            ctx.beginPath()
            ctx.moveTo(pointer.x, pointer.y)
            ctx.lineTo(nx, ny)

            if (isDark) {
              ctx.strokeStyle = `rgba(165, 180, 252, ${strandAlpha})`
            } else {
              ctx.strokeStyle = `rgba(99, 102, 241, ${strandAlpha})`
            }
            ctx.lineWidth = 0.75
            ctx.stroke()
          }
        }
      }

      // 5. Render nodes (dots with subtle pulse and cursor glow highlight)
      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i]
        const nx = node.x + node.dispX
        const ny = node.y + node.dispY

        // Breathing factor
        const pulse = Math.sin(node.phase) * 0.2 + 0.8

        // Proximity to cursor highlight
        let proximityHighlight = 0
        if (pointer.intensity > 0.01) {
          const dx = nx - pointer.x
          const dy = ny - pointer.y
          const distSq = dx * dx + dy * dy
          if (distSq < interactionRadiusSq) {
            const dist = Math.sqrt(distSq)
            proximityHighlight = (1 - dist / interactionRadius) * pointer.intensity
          }
        }

        const currentRadius = node.radius * pulse * (1 + proximityHighlight * 0.4)

        // Draw soft outer halo for nodes close to cursor
        if (proximityHighlight > 0.15) {
          ctx.beginPath()
          ctx.arc(nx, ny, currentRadius * 2.8, 0, Math.PI * 2)
          if (isDark) {
            ctx.fillStyle = `rgba(99, 102, 241, ${0.25 * proximityHighlight})`
          } else {
            ctx.fillStyle = `rgba(99, 102, 241, ${0.2 * proximityHighlight})`
          }
          ctx.fill()
        }

        // Draw main node dot
        ctx.beginPath()
        ctx.arc(nx, ny, currentRadius, 0, Math.PI * 2)

        if (isDark) {
          if (proximityHighlight > 0.2) {
            ctx.fillStyle = `rgba(255, 255, 255, ${0.9 + proximityHighlight * 0.1})`
          } else {
            ctx.fillStyle = `rgba(226, 232, 240, ${0.45 * pulse})`
          }
        } else {
          if (proximityHighlight > 0.2) {
            ctx.fillStyle = `rgba(79, 70, 229, ${0.85 + proximityHighlight * 0.15})`
          } else {
            ctx.fillStyle = `rgba(71, 85, 105, ${0.4 * pulse})`
          }
        }

        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
      themeObserver.disconnect()
      motionMediaQuery.removeEventListener("change", handleMotionChange)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("pointermove", handlePointerMove)
      document.removeEventListener("mouseleave", handlePointerLeave)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("touchcancel", handleTouchEnd)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 user-select-none"
      aria-hidden="true"
    />
  )
}
