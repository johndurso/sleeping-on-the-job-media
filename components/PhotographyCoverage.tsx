"use client";

import { motion } from "framer-motion";

const items = [
  { title: "Stand-Up Comedy", desc: "Every set, every laugh, every moment." },
  { title: "Live Music", desc: "The energy of the stage, captured." },
  { title: "Pop-Up Events", desc: "Documenting community in action." },
  { title: "Professional Headshots", desc: "For performers and professionals." },
  { title: "Sponsored Shows", desc: "Half-price watermark-free photos." },
  { title: "Custom Projects", desc: "Have something else in mind? Let's talk." },
];

export default function PhotographyCoverage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="glass-card p-5"
        >
          <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
          <p className="text-chrome-silver/60 text-xs">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}