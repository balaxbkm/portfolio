"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, ArrowRight } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-12 md:py-24 relative overflow-hidden">
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
                        <a href="mailto:bala13.bkm@gmail.com" className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-zinc-900 dark:hover:border-white/50 transition-all group">
                            <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white dark:bg-white/10 group-hover:scale-110 transition-transform shadow-sm">
                                <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                            </div>
                            <div className="flex-grow">
                                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Email</p>
                                <p className="text-base md:text-lg font-bold text-foreground break-all">bala13.bkm@gmail.com</p>
                            </div>
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                        </a>

                        {/* Phone Card */}
                        <a href="tel:+918015528885" className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-zinc-900 dark:hover:border-white/50 transition-all group">
                            <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white dark:bg-white/10 group-hover:scale-110 transition-transform shadow-sm">
                                <Phone className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                            </div>
                            <div className="flex-grow">
                                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">Phone</p>
                                <p className="text-base md:text-lg font-bold text-foreground">+91 80155 28885</p>
                            </div>
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                        </a>

                        {/* Social Links Row */}
                        <div className="grid grid-cols-3 gap-2 md:flex md:gap-4">
                            <a href="https://www.linkedin.com/in/bala-krishnan-m-534149116" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 md:gap-2 p-3 md:p-5 rounded-2xl md:rounded-3xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-medium text-[10px] md:text-sm border border-zinc-200 dark:border-white/5 hover:border-black dark:hover:border-white/50 md:flex-1">
                                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400 group-hover:text-white dark:group-hover:text-inherit" /> LinkedIn
                            </a>
                            <a href="https://github.com/balaxbkm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 md:gap-2 p-3 md:p-5 rounded-2xl md:rounded-3xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-medium text-[10px] md:text-sm border border-zinc-200 dark:border-white/5 hover:border-black dark:hover:border-white/50 md:flex-1">
                                <Github className="w-4 h-4 md:w-5 md:h-5 text-black dark:text-white group-hover:text-white dark:group-hover:text-black" /> Github
                            </a>
                            <a href="https://wa.me/918015528885" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 md:gap-2 p-3 md:p-5 rounded-2xl md:rounded-3xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-medium text-[10px] md:text-sm border border-zinc-200 dark:border-white/5 hover:border-black dark:hover:border-white/50 md:flex-1">
                                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 group-hover:text-white dark:group-hover:text-inherit" /> WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Right: Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 aspect-[3/4] lg:aspect-auto h-auto lg:h-full lg:min-h-full rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-white/10 relative grayscale hover:grayscale-0 transition-all duration-700 dark:invert-[.9] dark:hue-rotate-180 bg-zinc-100 dark:bg-white/5"
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
