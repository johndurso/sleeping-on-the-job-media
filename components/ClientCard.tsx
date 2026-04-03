"use client";

import { motion } from "framer-motion";
import { ExternalLink, Monitor, Camera, Share2 } from "lucide-react";
import { CldImage } from "next-cloudinary";
import type { Client } from "@/data/clients";

const serviceIcons: Record<string, React.ReactNode> = {
  "Web Design": <Monitor size={14} />,
  "Social Media Management": <Share2 size={14} />,
  "Event Photography": <Camera size={14} />,
};

interface ClientCardProps {
  client: Client;
  index?: number;
  showTechnologies?: boolean;
}

export default function ClientCard({
  client,
  index = 0,
  showTechnologies = false,
}: ClientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass-card group relative overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 bg-chrome-gray overflow-hidden">
        {client.image ? (
          <CldImage
            src={client.image}
            alt={client.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            style={{ position: 'absolute' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-chrome-gray">
            <span className="font-display text-4xl chrome-text tracking-widest">
              {client.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-chrome-black/80 to-transparent" />
        {client.featured && (
          <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-[0.2em] uppercase px-2 py-1 bg-chrome-silver text-chrome-black">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-1">
          <span className="eyebrow text-[10px]">{client.category}</span>
        </div>
        <h3 className="font-display text-2xl tracking-wider text-white mb-3">
          {client.name}
        </h3>
        <p className="text-chrome-silver/70 text-sm leading-relaxed mb-4 flex-1">
          {client.description}
        </p>

        {/* Services */}
        <div className="flex flex-wrap gap-2 mb-4">
          {client.services.map((s) => (
            <span
              key={s}
              className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase px-2 py-1 border border-chrome-silver/20 text-chrome-silver/70"
            >
              {serviceIcons[s]}
              {s}
            </span>
          ))}
        </div>

        {/* Technologies — only shown when prop is true */}
        {showTechnologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {client.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-semibold tracking-[0.15em] uppercase px-2 py-1 bg-chrome-black/60 text-chrome-silver/50 border border-chrome-silver/10"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto">
          {client.website && (
            <a
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-chrome-silver hover:text-white transition-colors group/link"
            >
              <ExternalLink size={12} />
              <span className="group-hover/link:underline">Visit Site</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}