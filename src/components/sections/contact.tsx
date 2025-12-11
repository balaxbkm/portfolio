"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, ArrowRight } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6">

                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
                            Let's work <span className="text-zinc-400 dark:text-white/40">together.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <p className="text-muted-foreground max-w-xs text-right text-lg">
                            Ready to start your next project? I'm just a message away.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">

                    {/* Left: Contact Info */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Email Card */}
                        <a href="mailto:bala13.bkm@gmail.com" className="flex items-center gap-6 p-6 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-zinc-900 dark:hover:border-white/50 transition-all group">
                            <div className="p-4 rounded-2xl bg-white dark:bg-white/10 text-black dark:text-white group-hover:scale-110 transition-transform shadow-sm">
                                <Mail size={24} />
                            </div>
                            <div className="flex-grow">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Email</p>
                                <p className="text-lg font-bold text-foreground break-all">bala13.bkm@gmail.com</p>
                            </div>
                            <ArrowRight className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                        </a>

                        {/* Phone Card */}
                        <a href="tel:+918015528885" className="flex items-center gap-6 p-6 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-zinc-900 dark:hover:border-white/50 transition-all group">
                            <div className="p-4 rounded-2xl bg-white dark:bg-white/10 text-black dark:text-white group-hover:scale-110 transition-transform shadow-sm">
                                <Phone size={24} />
                            </div>
                            <div className="flex-grow">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Phone</p>
                                <p className="text-lg font-bold text-foreground">+91 80155 28885</p>
                            </div>
                            <ArrowRight className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                        </a>

                        {/* Social Links Row */}
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/bala-krishnan-m-534149116" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 p-5 rounded-3xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-medium text-sm border border-zinc-200 dark:border-white/5 hover:border-black dark:hover:border-white/50">
                                <Linkedin size={20} /> LinkedIn
                            </a>
                            <a href="https://github.com/balaxbkm" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 p-5 rounded-3xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-medium text-sm border border-zinc-200 dark:border-white/5 hover:border-black dark:hover:border-white/50">
                                <Github size={20} /> Github
                            </a>
                            <a href="https://wa.me/918015528885" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 p-5 rounded-3xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-medium text-sm border border-zinc-200 dark:border-white/5 hover:border-black dark:hover:border-white/50">
                                <MessageCircle size={20} /> WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Right: Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 h-full min-h-[400px] lg:min-h-full rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-white/10 relative grayscale hover:grayscale-0 transition-all duration-700 dark:invert-[.9] dark:hue-rotate-180 bg-zinc-100 dark:bg-white/5"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3941.626889665807!2d77.24762697501758!3d8.970323099165288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTgnMTMuMiJOIDc3wrAxNC'NTkuMyJF!5e0!3m2!1sen!2sin!4v1716380000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                        />
                        <div className="absolute inset-0 bg-black/5 pointer-events-none mix-blend-overlay" />
                        <div className="absolute bottom-6 left-6 p-4 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl border border-zinc-200 dark:border-white/10 flex items-center gap-4 shadow-lg">
                            <div className="p-3 bg-zinc-100 dark:bg-white/10 rounded-full">
                                <MapPin size={20} className="text-black dark:text-white" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Location</p>
                                <span className="text-base font-medium text-foreground">Tenkasi, Tamil Nadu, India</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
