"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, Send, Star } from "lucide-react";
import Link from "next/link";

// Replace with your Formspree form ID
const FORMSPREE_QUOTE_FORM_ID = "YOUR_QUOTE_FORM_ID";

const whatToExpect = [
  "A personalized response within 1–2 business days",
  "A clear breakdown of recommended services for your goals",
  "Transparent pricing with no hidden fees",
  "Bundle discount options if multiple services apply",
];

export default function RequestFreeQuotePage() {
  const [state, handleSubmit] = useForm("myknrpog");

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-chrome-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(192,192,192,1) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="eyebrow mb-4">No Commitment. No Cost.</p>
              <h1 className="section-title mb-6">
                Request a <span className="chrome-text">Free Quote</span>
              </h1>
              <p className="text-chrome-silver/70 leading-relaxed mb-8">
                Not sure what you need or what it&apos;ll cost? That&apos;s
                exactly what a free quote is for. Fill out the form and
                we&apos;ll put together a personalized recommendation based on
                your goals, timeline, and budget, completely free, with zero
                pressure.
              </p>

              <div className="space-y-3 mb-8">
                <p className="eyebrow text-[10px] mb-4">What to Expect</p>
                {whatToExpect.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Star
                      size={14}
                      className="text-chrome-silver flex-shrink-0 mt-0.5"
                      fill="currentColor"
                    />
                    <span className="text-chrome-silver/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6">
                <p className="text-chrome-silver/60 text-sm leading-relaxed italic">
                  &ldquo;We want things to be affordable for those who are
                  up-and-coming. You may also combine services for a
                  discount.&rdquo;
                </p>
                <p className="text-chrome-silver text-xs mt-3 font-semibold tracking-wider">
                  — Sleeping on the Job Media
                </p>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" delay={0.2}>
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-12 text-center"
                >
                  <CheckCircle size={48} className="text-chrome-silver mx-auto mb-4" />
                  <h3 className="font-display text-3xl tracking-wider chrome-text mb-2">
                    Quote Requested!
                  </h3>
                  <p className="text-chrome-silver/70 mb-6">
                    We&apos;ll review your info and get back to you within 1–2
                    business days with a personalized quote.
                  </p>
                  <Link href="/" className="btn-secondary">
                    Back to Home
                  </Link>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card p-8 lg:p-10 space-y-6"
                >
                  <h2 className="font-display text-2xl tracking-wider chrome-text">
                    Tell Us About Your Project
                  </h2>

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

                  {/* Services Interested In */}
                  <div>
                    <label className="eyebrow text-[10px] block mb-2">
                      Services Interested In <span className="text-chrome-silver">*</span>
                    </label>
                    <select
                      name="services"
                      required
                      className="w-full bg-chrome-black/50 border border-chrome-silver/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-chrome-silver/60 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected>Select service(s)...</option>
                      <option value="Web Design">Web Design</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Photography">Photography</option>
                      <option value="Web Design + Social Media (Bundle)">Web Design + Social Media (Bundle)</option>
                      <option value="Web Design + Photography (Bundle)">Web Design + Photography (Bundle)</option>
                      <option value="Social Media + Photography (Bundle)">Social Media + Photography (Bundle)</option>
                      <option value="All Three Services (Bundle)">All Three Services (Bundle)</option>
                      <option value="Not Sure - Need Guidance">Not Sure — Need Guidance</option>
                    </select>
                    <ValidationError prefix="Services" field="services" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="eyebrow text-[10px] block mb-2">
                      Approximate Budget
                    </label>
                    <select
                      name="budget"
                      className="w-full bg-chrome-black/50 border border-chrome-silver/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-chrome-silver/60 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected>Select a range...</option>
                      <option value="Under $500">Under $500</option>
                      <option value="$500 - $1,000">$500 – $1,000</option>
                      <option value="$1,000 - $2,500">$1,000 – $2,500</option>
                      <option value="$2,500+">$2,500+</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="eyebrow text-[10px] block mb-2">
                      Desired Timeline
                    </label>
                    <select
                      name="timeline"
                      className="w-full bg-chrome-black/50 border border-chrome-silver/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-chrome-silver/60 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected>Select a timeline...</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="1-3 months">1–3 months</option>
                      <option value="3+ months">3+ months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="eyebrow text-[10px] block mb-2">
                      Tell Us About Your Project <span className="text-chrome-silver">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="What are you working on? What do you need? What are your goals?"
                      className="w-full bg-chrome-black/50 border border-chrome-silver/20 text-white placeholder-chrome-silver/30 px-4 py-3 text-sm focus:outline-none focus:border-chrome-silver/60 transition-colors resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full justify-center disabled:opacity-50"
                  >
                    {state.submitting ? "Submitting..." : "Request My Free Quote"}
                    <Send size={16} />
                  </motion.button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}