"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { getAllClients } from "@/data/clients";
import { ExternalLink, Monitor, Share2, Camera, Star } from "lucide-react";

const allClients = getAllClients();
const categories = ["All", ...Array.from(new Set(allClients.map((c) => c.category)))];

const serviceIcons: Record<string, React.ReactNode> = {
  "Web Design": <Monitor size={14} />,
  "Social Media Management": <Share2 size={14} />,
  "Event Photography": <Camera size={14} />,
};

export default function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allClients
      : allClients.filter((c) => c.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-chrome-black relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(192,192,192,1) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <p className="eyebrow mb-4">Who We Serve</p>
            <h1 className="section-title mb-6">
              Our <span className="chrome-text">Clients</span>
            </h1>
            <p className="text-chrome-silver/70 text-lg max-w-2xl mx-auto">
              Local businesses, professionals, and performers all seeking to enhance their visibility through
              tailored digital solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-chrome-darkgray border-b border-chrome-silver/10 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-chrome-silver text-chrome-black"
                    : "text-chrome-silver/60 hover:text-chrome-silver border border-chrome-silver/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Sections */}
      <section className="py-16 lg:py-24 bg-chrome-darkgray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col divide-y divide-chrome-silver/10"
            >
              {filtered.map((client, i) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="py-16 lg:py-20 first:pt-0 last:pb-0"
                >
                  {/* Top meta row */}
                  <div className="flex items-center gap-4 mb-6">
                    {client.featured && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 bg-chrome-silver text-chrome-black">
                        <Star size={10} fill="currentColor" />
                        Featured
                      </span>
                    )}
                    <span className="eyebrow text-[10px]">{client.category}</span>
                  </div>

                  {/* Client name */}
                  <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider chrome-text mb-10">
                    {client.name}
                  </h2>

                  {/* Two-column layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left — Image */}
                    <div className="relative overflow-hidden aspect-[4/3] bg-chrome-gray">
                      {client.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={client.image}
                          alt={client.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-chrome-gray">
                          <span className="font-display text-8xl chrome-text tracking-widest">
                            {client.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-chrome-black/40 to-transparent pointer-events-none" />
                    </div>

                    {/* Right — Details */}
                    <div className="flex flex-col gap-8">
                      {/* Description */}
                      <div>
                        <p className="eyebrow text-[10px] mb-3">About</p>
                        <p className="text-chrome-silver/70 leading-relaxed">
                          {client.description}
                        </p>
                      </div>

                      {/* Services */}
                      <div>
                        <p className="eyebrow text-[10px] mb-3">Services Provided</p>
                        <div className="flex flex-wrap gap-2">
                          {client.services.map((s) => (
                            <span
                              key={s}
                              className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1.5 border border-chrome-silver/20 text-chrome-silver/70"
                            >
                              {serviceIcons[s]}
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <p className="eyebrow text-[10px] mb-3">Technologies Used</p>
                        <div className="flex flex-wrap gap-2">
                          {client.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1.5 bg-chrome-black/60 text-chrome-silver/50 border border-chrome-silver/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Link */}
                      {client.website && (
                        <div>
                          <a
                            href={client.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex text-xs"
                          >
                            Visit Site
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-chrome-silver/40">No clients in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}