"use client";

import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Monitor,
  Share2,
  Camera,
  Check,
  ChevronRight,
  Zap,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const PhotographyCoverage = lazy(() => import("@/components/PhotographyCoverage"));

const webDesignSteps = [
  {
    num: "01",
    title: "Discovery & Goal Setting",
    desc: "We start by understanding what you want your website to accomplish. That means your goals, your audience, and what success actually looks like for you.",
  },
  {
    num: "02",
    title: "Scope Definition",
    desc: "We define exactly what pages and features your site needs, set a clear timeline, and cut out scope creep before it has a chance to start.",
  },
  {
    num: "03",
    title: "Sitemap & Wireframes",
    desc: "We map out the architecture of your site and create wireframes so you can see the layout and flow before any design work begins.",
  },
  {
    num: "04",
    title: "Content & Visual Design",
    desc: "With the structure in place, we bring your brand to life. Typography, imagery, color, and copy all working together the way they should.",
  },
  {
    num: "05",
    title: "Development & Build",
    desc: "We build your site using modern, fast, and accessible code. Mobile-first and optimized for search engines from the ground up.",
  },
  {
    num: "06",
    title: "Revisions & QA",
    desc: "You review, we refine. We test across devices and browsers to make sure everything works beautifully before launch.",
  },
  {
    num: "07",
    title: "Launch & Handoff",
    desc: "We launch your site and walk you through everything you need to know. You leave with a website you're proud of.",
  },
];

export default function ServicesPage() {
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <p className="eyebrow mb-4">What We Offer</p>
            <h1 className="section-title chrome-text mb-6">Our Services</h1>
            <p className="text-chrome-silver/70 text-lg max-w-2xl mx-auto">
              Transparent pricing. Real results. Bundle services and save even more.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-10">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-4">
              <Zap size={18} className="text-chrome-silver" />
              <p className="text-chrome-silver text-sm font-semibold tracking-wide">
                Receive a custom discount if you bundle services. Ask us how.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WEB DESIGN ─── */}
      <section id="web-design" className="py-24 lg:py-32 bg-chrome-darkgray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="text-chrome-silver mb-6">
                <Monitor size={40} />
              </div>
              <p className="eyebrow mb-3">Service 01</p>
              <h2 className="section-title text-white mb-6">
                Web <span className="chrome-text">Design</span>
              </h2>
              <p className="text-chrome-silver/70 leading-relaxed mb-6">
                A great website isn&apos;t just beautiful... it&apos;s strategic.
                We take every client through a clear, 7-step process that
                eliminates confusion, reduces revisions, and delivers a site
                you&apos;re proud to share. No guesswork. No surprises.
              </p>
              <p className="text-chrome-silver/70 leading-relaxed mb-8">
                Whether you need a simple portfolio, a performer&apos;s hub, or
                a full business site, we build it fast, mobile-first, and
                optimized for search engines.
              </p>

              <div className="glass-card p-6 mb-8">
                <p className="eyebrow text-[10px] mb-3">Pricing</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="font-display text-5xl chrome-text">$500</span>
                  <span className="text-chrome-silver/60 mb-2">starting price</span>
                </div>
                <p className="text-chrome-silver/60 text-sm">
                  Most sites fall in this range. More complex builds are quoted
                  before any work begins. <span className="font-bold chrome-text">No hidden fees, ever.</span>
                </p>
              </div>

              <div className="flex gap-4">
                <Link href="/contact" className="btn-secondary">Contact Us</Link>
                <Link href="/request-free-quote" className="btn-primary">Get a Free Quote</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <p className="eyebrow mb-6">Our 7-Step Process</p>
              <div className="space-y-4">
                {webDesignSteps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-4 glass-card p-4 group hover:border-chrome-silver/30 transition-colors"
                  >
                    <span className="font-display text-2xl chrome-text flex-shrink-0 w-10">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{step.title}</h4>
                      <p className="text-chrome-silver/60 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL MEDIA MANAGEMENT ─── */}
      <section id="social-media" className="py-24 lg:py-32 bg-chrome-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <p className="eyebrow mb-3">What&apos;s Included</p>
              <div className="space-y-3">
                {[
                  "1 to 2 custom posts per week (starter package)",
                  "On-brand content creation & copywriting",
                  "Hashtag strategy & audience research",
                  "Content scheduling & calendar management",
                  "Community engagement & monitoring",
                  "Monthly performance check-ins",
                  "Additional posts available at extra cost",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-chrome-silver flex-shrink-0 mt-0.5" />
                    <span className="text-chrome-silver/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 mt-8 mb-8">
                <p className="eyebrow text-[10px] mb-3">Pricing</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="font-display text-5xl chrome-text">$300</span>
                  <span className="text-chrome-silver/60 mb-2">/month starting</span>
                </div>
                <p className="text-chrome-silver/60 text-sm">
                  More posts and deeper management available. Let&apos;s talk
                  about what works for your budget and goals.
                </p>
              </div>

              <div className="flex gap-4">
                <Link href="/contact" className="btn-secondary">Contact Us</Link>
                <Link href="/request-free-quote" className="btn-primary">Get a Free Quote</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15} className="order-1 lg:order-2">
              <div className="text-chrome-silver mb-6">
                <Share2 size={40} />
              </div>
              <p className="eyebrow mb-3">Service 02</p>
              <h2 className="section-title text-white mb-6">
                Social Media <span className="chrome-text">Management</span>
              </h2>
              <p className="text-chrome-silver/70 leading-relaxed mb-4">
                Your social media presence is often the first impression
                someone has of you. We make sure it's a great one. Effective social
                media management goes beyond just posting. It's about building a
                community that genuinely cares about what you do.
              </p>
              <p className="text-chrome-silver/70 leading-relaxed">
                We handle content creation, scheduling, community management, and
                strategy so your pages stay active, consistent, and growing while you
                focus on your work. Whether you're a performer building a fanbase or a
                business growing a customer base, we tailor every strategy to your
                unique voice and goals.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── PHOTOGRAPHY ─── */}
      <section id="photography" className="py-24 lg:py-32 bg-chrome-darkgray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="text-chrome-silver mb-6">
                <Camera size={40} />
              </div>
              <p className="eyebrow mb-3">Service 03</p>
              <h2 className="section-title text-white mb-6">
                Event & Personal <span className="chrome-text">Photography</span>
              </h2>
              <p className="text-chrome-silver/70 leading-relaxed mb-4">
                Live moments deserve to be captured. Whether you&apos;re
                performing stand-up comedy, playing a live set, or hosting
                a pop-up event, we&apos;re there to document every moment.
              </p>
              <p className="text-chrome-silver/70 leading-relaxed mb-8">
                We also offer professional headshots for performers, creatives,
                and professionals who need images that make the right impression.
                And if you perform at any show we sponsor, your photos are half
                price to use without watermarks.
              </p>

              <div className="glass-card p-6 mb-8">
                <p className="eyebrow text-[10px] mb-4">Pricing</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-chrome-silver/10 pb-3">
                    <div>
                      <p className="text-white text-sm font-semibold">Live Event Coverage</p>
                      <p className="text-chrome-silver/50 text-xs">Full set, unlimited shots</p>
                    </div>
                    <span className="font-display text-2xl chrome-text">$75+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white text-sm font-semibold">Professional Headshots</p>
                      <p className="text-chrome-silver/50 text-xs">Performers & professionals</p>
                    </div>
                    <span className="font-display text-2xl chrome-text">$50+</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/contact" className="btn-secondary">Contact Us</Link>
                <Link href="/request-free-quote" className="btn-primary">Get a Free Quote</Link>
              </div>
            </AnimatedSection>

            {/* Lazy loaded — furthest below the fold, 6 animated cards */}
            <Suspense fallback={
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="glass-card p-5 animate-pulse">
                    <div className="h-4 w-2/3 bg-chrome-silver/10 rounded mb-2" />
                    <div className="h-3 w-full bg-chrome-silver/10 rounded" />
                  </div>
                ))}
              </div>
            }>
              <PhotographyCoverage />
            </Suspense>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-chrome-black border-t border-chrome-silver/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="section-title chrome-text mb-4">Ready to Start?</h2>
            <p className="text-chrome-silver/60 mb-8">
              Let&apos;s figure out what you need and make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">Contact Us</Link>
              <Link href="/request-free-quote" className="btn-primary">
                Request Free Quote
                <ChevronRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}