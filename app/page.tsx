"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, lazy, Suspense } from "react";
import Link from "next/link";
import {
  ArrowDown,
  Monitor,
  Share2,
  Camera,
  ChevronRight,
  Star,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// Lazy load below-the-fold components
const ClientCard = lazy(() => import("@/components/ClientCard"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

import { getFeaturedClients } from "@/data/clients";

const featuredClients = getFeaturedClients();

const services = [
  {
    icon: <Monitor size={28} />,
    title: "Web Design",
    badge: "Most Popular",
    description:
      "Custom websites built to convert visitors into clients. From discovery to launch, every site we build is fast, mobile-first, and designed with your goals in mind. Starting at $500.",
    href: "/services#web-design",
  },
  {
    icon: <Share2 size={28} />,
    title: "Social Media Management",
    badge: null,
    description:
      "Consistent, on-brand content that grows your audience and keeps your community engaged. We handle the strategy, creation, and scheduling — so you can focus on your craft. Starting at $300/month.",
    href: "/services#social-media",
  },
  {
    icon: <Camera size={28} />,
    title: "Event & Personal Photography",
    badge: null,
    description:
      "Professional photography for live events — stand-up comedy, live music, pop-up events — and headshots for performers and professionals. Starting at $75/show.",
    href: "/services#photography",
  },
];

// Fallback card skeleton to prevent layout shift while ClientCards load
function ClientCardSkeleton() {
  return (
    <div className="glass-card flex flex-col overflow-hidden animate-pulse">
      <div className="h-52 bg-chrome-gray/40" />
      <div className="p-6 flex flex-col gap-3">
        <div className="h-3 w-1/3 bg-chrome-silver/10 rounded" />
        <div className="h-6 w-2/3 bg-chrome-silver/10 rounded" />
        <div className="h-4 w-full bg-chrome-silver/10 rounded" />
        <div className="h-4 w-5/6 bg-chrome-silver/10 rounded" />
      </div>
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-chrome-black"
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(192,192,192,1) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Radial glow */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-hero-gradient pointer-events-none"
        />

        {/* Animated chrome orb */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(192,192,192,0.3) 0%, transparent 70%)",
          }}
        />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eyebrow mb-6"
          >
            Detroit-Based Media Company
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] leading-none tracking-wider mb-6"
          >
            <span className="chrome-text block">SLEEPING</span>
            <span className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] text-white block">ON THE JOB</span>
            <span className="chrome-text block">MEDIA</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-chrome-silver/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            The media company with the most bang for your buck.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#services" className="btn-primary">
              What We Offer
              <ArrowDown size={16} />
            </Link>
            <Link href="/request-free-quote" className="btn-secondary">
              Request Free Quote
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <section
        id="services"
        className="py-24 lg:py-32 bg-chrome-darkgray relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(192,192,192,1) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="section-title chrome-text">Services</h2>
            <p className="text-chrome-silver/60 mt-4 max-w-2xl mx-auto">
              Tailored media solutions for businesses and performers who want to
              stand out.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8, borderColor: "rgba(192,192,192,0.4)" }}
                  className="glass-card p-8 h-full flex flex-col transition-all duration-300 group"
                >
                  {service.badge && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase px-2 py-1 bg-chrome-silver text-chrome-black mb-4 w-fit">
                      <Star size={10} fill="currentColor" />
                      {service.badge}
                    </span>
                  )}
                  <div className="text-chrome-silver mb-5 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-2xl tracking-wider text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-chrome-silver/60 text-sm leading-relaxed flex-1 mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-chrome-silver hover:text-white transition-colors group/link"
                  >
                    Learn More
                    <ChevronRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <Link href="/services" className="btn-secondary">
              Learn More About Our Services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FEATURED CLIENTS ─── */}
      <section id="clients" className="py-24 lg:py-32 bg-chrome-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow mb-4">Who We Work With</p>
            <h2 className="section-title text-white">
              Featured <span className="chrome-text">Clients</span>
            </h2>
            <p className="text-chrome-silver/60 mt-4 max-w-2xl mx-auto">
              Past clients who play pivotal roles in our community.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Suspense fallback={
              <>
                <ClientCardSkeleton />
                <ClientCardSkeleton />
                <ClientCardSkeleton />
              </>
            }>
              {featuredClients.map((client, i) => (
                <ClientCard key={client.id} client={client} index={i} />
              ))}
            </Suspense>
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <Link href="/clients" className="btn-secondary">
              View All Clients
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </>
  );
}