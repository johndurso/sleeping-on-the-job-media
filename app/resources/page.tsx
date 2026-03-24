import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const resources = [
  {
    title: "Why Your Business Needs a Website",
    description:
      "Even in the age of social media, a website remains your most powerful owned asset online. Here's why it matters.",
    tag: "Web Design",
    href: "#",
  },
  {
    title: "How to Build a Social Media Strategy That Works",
    description:
      "Consistency, authenticity, and community — the three pillars of a social presence that actually grows.",
    tag: "Social Media",
    href: "#",
  },
  {
    title: "Getting the Most Out of Your Event Photography",
    description:
      "Tips for performers and event organizers on how to use your photos across platforms to maximize reach.",
    tag: "Photography",
    href: "#",
  },
  {
    title: "Bundling Services: How to Save Money on Media",
    description:
      "Combining web design, social media, and photography can save you money and create a more cohesive brand.",
    tag: "Tips",
    href: "#",
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32 bg-chrome-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="eyebrow mb-4">Knowledge Base</p>
            <h1 className="section-title chrome-text mb-4">Resources</h1>
            <p className="text-chrome-silver/70 max-w-xl mx-auto">
              Tips, guides, and insights to help you grow your brand and make
              the most of your media investment.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {resources.map((resource, i) => (
              <AnimatedSection key={resource.title} delay={i * 0.1}>
                <div className="glass-card p-8 h-full flex flex-col group hover:border-chrome-silver/30 transition-all duration-300">
                  <span className="eyebrow text-[10px] mb-3">{resource.tag}</span>
                  <h2 className="font-display text-2xl tracking-wider text-white mb-3">
                    {resource.title}
                  </h2>
                  <p className="text-chrome-silver/60 text-sm leading-relaxed flex-1 mb-6">
                    {resource.description}
                  </p>
                  <a
                    href={resource.href}
                    className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-chrome-silver hover:text-white transition-colors"
                  >
                    Read More <ExternalLink size={12} />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16" delay={0.4}>
            <p className="text-chrome-silver/50 text-sm mb-6">
              More resources coming soon. Have a topic you&apos;d like us to cover?
            </p>
            <Link href="/contact" className="btn-secondary">
              Suggest a Topic
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}