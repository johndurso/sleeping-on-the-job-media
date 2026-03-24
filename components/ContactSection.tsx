"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Send, CheckCircle } from "lucide-react";

// Replace "YOUR_FORM_ID" with your actual Formspree form ID
const FORMSPREE_FORM_ID = "YOUR_FORM_ID";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xqeyynwg");

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-chrome-darkgray relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(192,192,192,1) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-12">
          <p className="eyebrow mb-4">Get in Touch</p>
          <h2 className="section-title text-white">
            Let&apos;s <span className="chrome-text">Talk</span>
          </h2>
          <p className="text-chrome-silver/60 mt-4">
            Tell us what services you want and we&apos;ll do whatever we can to
            make your vision a reality.
          </p>
        </AnimatedSection>

        {state.succeeded ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 text-center"
          >
            <CheckCircle size={48} className="text-chrome-silver mx-auto mb-4" />
            <h3 className="font-display text-3xl tracking-wider chrome-text mb-2">
              Message Sent!
            </h3>
            <p className="text-chrome-silver/70">
              We&apos;ll be in touch soon. Thanks for reaching out!
            </p>
          </motion.div>
        ) : (
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-10 space-y-6">
              {/* Name */}
              <div>
                <label className="eyebrow text-[10px] block mb-2">
                  Name <span className="text-chrome-silver">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full bg-chrome-black/50 border border-chrome-silver/20 text-white placeholder-chrome-silver/30 px-4 py-3 text-sm focus:outline-none focus:border-chrome-silver/60 transition-colors"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>

              {/* Email */}
              <div>
                <label className="eyebrow text-[10px] block mb-2">
                  Email <span className="text-chrome-silver">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-chrome-black/50 border border-chrome-silver/20 text-white placeholder-chrome-silver/30 px-4 py-3 text-sm focus:outline-none focus:border-chrome-silver/60 transition-colors"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>

              {/* Reason */}
              <div>
                <label className="eyebrow text-[10px] block mb-2">
                  Reason for Inquiry <span className="text-chrome-silver">*</span>
                </label>
                <select
                  name="reason"
                  required
                  className="w-full bg-chrome-black/50 border border-chrome-silver/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-chrome-silver/60 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled selected>Select a reason...</option>
                  <option value="Services - Web Design">Services — Web Design</option>
                  <option value="Services - Social Media Management">Services — Social Media Management</option>
                  <option value="Services - Photography">Services — Photography</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                <ValidationError prefix="Reason" field="reason" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>

              {/* Message */}
              <div>
                <label className="eyebrow text-[10px] block mb-2">
                  Message <span className="text-chrome-silver">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-chrome-black/50 border border-chrome-silver/20 text-white placeholder-chrome-silver/30 px-4 py-3 text-sm focus:outline-none focus:border-chrome-silver/60 transition-colors resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </motion.button>
            </form>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}