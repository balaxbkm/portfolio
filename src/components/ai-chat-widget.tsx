"use client"

import React, { useState, useRef, useEffect } from "react"
import { X, Send, Sparkles, MessageCircle, ArrowUpRight, RotateCcw, Bot, User, Download } from "lucide-react"
import { track } from "@vercel/analytics"

interface Message {
  id: string
  sender: "bot" | "user"
  text: string
  actionUrl?: string
  actionText?: string
  actionType?: "whatsapp" | "resume"
  timestamp: string
}

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi there! 👋 I'm Bala's AI assistant. Ask me anything about Bala's 8+ years of engineering experience across Vanilla Networks, WebGlobal, and Srishti Innovative, or chat with him directly on WhatsApp!",
      timestamp: "Just now"
    }
  ])

  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const nextId = useRef(2)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [isOpen, messages, isTyping])

  // Contextual dynamic question generator: returns only 1 or 2 relevant questions
  const getDynamicSuggestions = (msgList: Message[]): string[] => {
    const userMessages = msgList.filter((m) => m.sender === "user")
    
    // Initially before user chats: simple conversational starters
    if (userMessages.length === 0) {
      return ["Hi", "What's up?"]
    }

    const lastUserText = userMessages[userMessages.length - 1].text.toLowerCase()

    // 1. After greeting
    if (lastUserText.startsWith("hi") || lastUserText.startsWith("hello") || lastUserText.startsWith("hey") || lastUserText.includes("what's up") || lastUserText.includes("whats up")) {
      return ["What is your tech stack?", "Are you open to work?"]
    }

    // 2. After tech stack query
    if (lastUserText.includes("stack") || lastUserText.includes("skill") || lastUserText.includes("framework") || lastUserText.includes("docker") || lastUserText.includes("laravel") || lastUserText.includes("react")) {
      return ["What projects have you built?", "Tell me about your experience"]
    }

    // 3. After experience / company query
    if (lastUserText.includes("experience") || lastUserText.includes("company") || lastUserText.includes("career") || lastUserText.includes("vanilla") || lastUserText.includes("webglobal")) {
      return ["What is your role at Vanilla Networks?", "Download Resume"]
    }

    // 4. After projects query
    if (lastUserText.includes("project") || lastUserText.includes("portfolio") || lastUserText.includes("epic") || lastUserText.includes("summit") || lastUserText.includes("kerala")) {
      return ["Tell me about EPIC", "Connect on WhatsApp"]
    }

    // 5. After availability / hiring query
    if (lastUserText.includes("available") || lastUserText.includes("open to work") || lastUserText.includes("hire") || lastUserText.includes("remote") || lastUserText.includes("consult")) {
      return ["Chat on WhatsApp with Bala", "Download Resume"]
    }

    // 6. After resume query
    if (lastUserText.includes("resume") || lastUserText.includes("cv") || lastUserText.includes("download")) {
      return ["Connect on WhatsApp", "What is your tech stack?"]
    }

    // 7. After testing / QA query
    if (lastUserText.includes("playwright") || lastUserText.includes("test") || lastUserText.includes("automation")) {
      return ["What is your tech stack?", "Connect on WhatsApp"]
    }

    // Fallback default
    return ["What is your tech stack?", "Connect on WhatsApp"]
  }

  const generateResponse = (query: string): Omit<Message, "id" | "timestamp"> => {
    const q = query.toLowerCase()

    // 1. Friendly Greetings
    if (q === "hi" || q === "hello" || q === "hey" || q.includes("what's up") || q.includes("whats up") || q.startsWith("hi ") || q.startsWith("hello ")) {
      return {
        sender: "bot",
        text: "Hey! Great to connect with you. I can tell you about Bala's 8+ years of full-stack engineering experience, his core tech stack (Laravel, React, Next.js, Docker, Playwright), his key production projects, or connect you directly with him on WhatsApp!"
      }
    }

    // 2. WhatsApp / Contact Direct Handoff
    if (q.includes("whatsapp") || q.includes("phone") || q.includes("contact") || q.includes("call") || q.includes("hire") || q.includes("interview") || q.includes("number")) {
      const whatsappText = `Hi Bala, I visited your portfolio and would like to connect regarding: "${query}"`
      return {
        sender: "bot",
        text: "You can reach Bala directly on WhatsApp at +91 80155 28885! Tap the button below to message him:",
        actionType: "whatsapp",
        actionText: "Chat with Bala on WhatsApp",
        actionUrl: `https://wa.me/918015528885?text=${encodeURIComponent(whatsappText)}`
      }
    }

    // 3. Experience, Companies, & Career History (Accurate)
    if (q.includes("experience") || q.includes("company") || q.includes("companies") || q.includes("background") || q.includes("years") || q.includes("career") || q.includes("vanilla") || q.includes("webglobal") || q.includes("srishti") || q.includes("history")) {
      return {
        sender: "bot",
        text: "Bala has 8+ years of professional software engineering experience across 3 technology companies:\n\n1. 🏢 Vanilla Networks Pvt Ltd (Technopark, Trivandrum)\n• Senior Software Engineer (Jun 2022 – Oct 2026)\n• Software Engineer (Mar 2019 – May 2022)\nArchitecting full-stack web applications with Laravel, Next.js, React, Node.js, Docker, Playwright automated testing, and Agentic AI workflows.\n\n2. 🏢 WebGlobal Technology Solutions Pvt Ltd (Trivandrum)\n• Full Stack Engineer (Oct 2017 – Mar 2019)\n• Web Developer (Nov 2016 – Sep 2017)\nDeveloped the EPIC construction cost estimation engine with OCR blueprint scanning and the Kerala Special e-commerce platform.\n\n3. 🏢 Srishti Innovative (Trivandrum)\n• Web Development Intern (May 2016 – Oct 2016)\nBuilt responsive UI layouts and server-side CRUD modules."
      }
    }

    // 4. Tech Stack & Skills
    if (q.includes("stack") || q.includes("skill") || q.includes("technolog") || q.includes("language") || q.includes("framework") || q.includes("docker") || q.includes("laravel") || q.includes("react") || q.includes("next")) {
      return {
        sender: "bot",
        text: "Bala's technical stack spans modern full-stack development:\n• Backend: PHP (Laravel, CodeIgniter), Node.js, Python, RESTful API Architecture, Webhooks.\n• Frontend: TypeScript, JavaScript (ES6+), React.js, Next.js, Tailwind CSS, Bootstrap, HTML5/CSS3.\n• AI & QA: Agentic AI (Antigravity, Claude Code), LLM APIs (Gemini, Claude, OpenAI), Playwright automated E2E testing, Postman.\n• DevOps & DB: Docker, MySQL, PostgreSQL, MongoDB, Git/GitHub, Vercel."
      }
    }

    // 5. Projects & Portfolio Work
    if (q.includes("project") || q.includes("portfolio") || q.includes("work") || q.includes("epic") || q.includes("cpr") || q.includes("kerala") || q.includes("whenwouldwork") || q.includes("summit")) {
      return {
        sender: "bot",
        text: "Bala's key production platforms:\n\n• EPIC: Automated construction cost estimation engine with OCR blueprint extraction and TCPDF quantity algorithms (WebGlobal).\n• SummitCPR: Learning management & CPR certification portal with automated exams and dynamic certificates (Vanilla Networks).\n• Keralaspecial: Regional D2C marketplace with multi-vendor inventory and logistics integration (WebGlobal).\n• WhenWouldWork: Collaborative meeting coordination with real-time consensus voting algorithms (Vanilla Networks).\n• TaskTrax & Encompass NPS: Enterprise ticketing, CMS, and stakeholder analytics dashboards."
      }
    }

    // 6. Availability & Job Status
    if (q.includes("available") || q.includes("open to work") || q.includes("status") || q.includes("freelance") || q.includes("remote") || q.includes("full time") || q.includes("hire")) {
      return {
        sender: "bot",
        text: "Yes! Bala is actively Open to Work for Senior Full-Stack Software Engineer, Lead Developer roles, and technical consulting.\n\n• Location: India (IST, UTC+5:30)\n• Work Mode: Remote or On-site\n• Contact: bala13.bkm@gmail.com / +91 80155 28885",
        actionType: "whatsapp",
        actionText: "Connect on WhatsApp",
        actionUrl: `https://wa.me/918015528885?text=${encodeURIComponent("Hi Bala, I'm reaching out regarding a job opportunity for Senior Software Engineer.")}`
      }
    }

    // 7. Resume & CV Download
    if (q.includes("resume") || q.includes("cv") || q.includes("download") || q.includes("pdf")) {
      return {
        sender: "bot",
        text: "You can download Bala's complete Senior Software Engineer Resume right here:",
        actionType: "resume",
        actionText: "Download Resume (PDF)",
        actionUrl: "/Resume_Balakrishnan_M.pdf"
      }
    }

    // 8. Testing & Quality Automation
    if (q.includes("playwright") || q.includes("test") || q.includes("automation") || q.includes("qa") || q.includes("e2e")) {
      return {
        sender: "bot",
        text: "At Vanilla Networks, Bala engineers end-to-end automated regression and cross-browser test suites using Playwright, increasing pre-deployment defect detection and automating continuous delivery pipelines."
      }
    }

    // 9. Education & Certifications
    if (q.includes("education") || q.includes("degree") || q.includes("college") || q.includes("certif")) {
      return {
        sender: "bot",
        text: "Academic & Certifications:\n• Education: B.Sc. Information Technology from JP College of Arts & Science, Manonmaniam Sundaranar University (Graduated First Class, 73.5%).\n• Certifications: Next.js App Router & Server Components (Zero To Mastery) and Playwright Automation Testing & TypeScript for Enterprise Web Applications (Udemy)."
      }
    }

    // Default Fallback with WhatsApp handoff option
    const fallbackWhatsapp = `Hi Bala, I have a question about your experience: "${query}"`
    return {
      sender: "bot",
      text: "Bala has 8+ years of experience across Vanilla Networks, WebGlobal, and Srishti Innovative, specializing in Laravel, React, Next.js, Docker, Playwright, and AI integration. Would you like to ask Bala directly on WhatsApp?",
      actionType: "whatsapp",
      actionText: "Ask Bala on WhatsApp",
      actionUrl: `https://wa.me/918015528885?text=${encodeURIComponent(fallbackWhatsapp)}`
    }
  }

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).trim()
    if (!query) return

    const userMessage: Message = {
      id: String(nextId.current++),
      sender: "user",
      text: query,
      timestamp: "Just now"
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    track("ai_chat_query", { query: query.slice(0, 50) })

    // Simulate smart thinking delay
    setTimeout(() => {
      const botResponse = generateResponse(query)
      const botMessage: Message = {
        ...botResponse,
        id: String(nextId.current++),
        timestamp: "Just now"
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 450)
  }

  const handleReset = () => {
    setMessages([
      {
        id: String(nextId.current++),
        sender: "bot",
        text: "Conversation reset! How can I assist you with Bala's profile, companies, or projects?",
        timestamp: "Just now"
      }
    ])
  }

  const dynamicSuggestions = getDynamicSuggestions(messages)

  return (
    <div className="hidden md:block">
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => {
              setIsOpen(true)
              track("ai_chat_open")
            }}
            aria-label="Open AI Live Chat"
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-foreground text-background shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-zinc-200/50 dark:border-white/20"
          >
            <div className="relative">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-bold text-xs tracking-tight">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Chat with AI</span>
            </div>
          </button>
        ) : null}
      </div>

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[420px] h-[590px] max-h-[85vh] flex flex-col rounded-3xl glass-strong border border-zinc-200/90 dark:border-white/15 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-zinc-100/80 dark:bg-zinc-900/80 border-b border-zinc-200/80 dark:border-white/10 flex items-center justify-between backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md border border-white/20 flex-shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-foreground">AI Assistant</h4>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="text-[10px] font-mono text-muted-foreground">Always Online · Connected to WhatsApp</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-zinc-200/60 dark:hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-zinc-200/60 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Handoff Top Strip */}
          <div className="px-4 py-2 bg-emerald-500/10 dark:bg-emerald-500/15 border-b border-emerald-500/20 flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
              <MessageCircle className="w-3.5 h-3.5" />
              Need to chat with Bala personally?
            </span>
            <a
              href="https://wa.me/918015528885"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("ai_chat_whatsapp_handoff", { source: "top_banner" })}
              className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 hover:underline flex items-center gap-0.5"
            >
              WhatsApp <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-3.5 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "bot" && (
                  <div className="w-7 h-7 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-indigo-500/20">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3 shadow-xs space-y-2 break-words ${
                    m.sender === "user"
                      ? "bg-foreground text-background font-medium rounded-tr-xs"
                      : "bg-white/80 dark:bg-zinc-800/80 text-foreground border border-zinc-200/80 dark:border-white/10 rounded-tl-xs"
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed">{m.text}</p>

                  {/* Action Link (e.g. WhatsApp escalation or Resume download) */}
                  {m.actionUrl && (
                    <a
                      href={m.actionUrl}
                      target={m.actionType === "whatsapp" ? "_blank" : "_self"}
                      rel={m.actionType === "whatsapp" ? "noopener noreferrer" : undefined}
                      download={m.actionType === "resume" ? "Resume_Balakrishnan_M.pdf" : undefined}
                      onClick={() => track("ai_chat_action_click", { type: m.actionType })}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-[11px] transition-all shadow-xs mt-1 ${
                        m.actionType === "whatsapp"
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                          : "bg-indigo-600 hover:bg-indigo-700 text-white"
                      }`}
                    >
                      {m.actionType === "whatsapp" ? (
                        <MessageCircle className="w-3.5 h-3.5" />
                      ) : (
                        <Download className="w-3.5 h-3.5" />
                      )}
                      <span>{m.actionText}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {m.sender === "user" && (
                  <div className="w-7 h-7 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-muted-foreground text-[11px] font-mono">
                <div className="w-7 h-7 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="px-3 py-2 rounded-2xl bg-white/80 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-white/10 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Dynamic Prompts - Only 1 or 2 simple contextual suggestions */}
          <div className="px-3 py-2 border-t border-zinc-200/60 dark:border-white/10 bg-zinc-50/50 dark:bg-white/[0.02] flex items-center gap-1.5 overflow-hidden">
            <span className="text-[10px] text-muted-foreground font-mono self-center mr-0.5">Suggested:</span>
            {dynamicSuggestions.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSendMessage(prompt)}
                className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-muted-foreground hover:text-foreground hover:border-zinc-400 dark:hover:border-white/30 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="p-3 bg-white/90 dark:bg-zinc-900/90 border-t border-zinc-200/80 dark:border-white/10 flex items-center gap-2 backdrop-blur-xl"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about companies, skills, or projects..."
              className="flex-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 rounded-full px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="p-2.5 rounded-full bg-foreground text-background disabled:opacity-30 hover:opacity-90 transition-opacity"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  )
}
