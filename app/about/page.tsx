import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32 bg-chrome-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(192,192,192,1) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection className="mb-16">
            <p className="eyebrow mb-4">Who We Are</p>
            <h1 className="section-title chrome-text mb-8">About Us</h1>
            <div className="space-y-6 text-chrome-silver/70 leading-relaxed">
              <p className="text-lg">
                Sleeping on the Job Media is a Detroit-based media company built
                for the up-and-coming. We work with local businesses and
                performers who are integral to the fabric of the community —
                people who have a story worth telling and a vision worth
                building.
              </p>
              <p>
                We believe great media shouldn&apos;t be out of reach. That&apos;s
                why we keep our pricing transparent and our process simple.
                Whether you need a website, social media management, or someone
                to capture your performance on camera, we bring the same level
                of care and craft to every project.
              </p>
              <p>
                Our clientele is primarily made up of comedians, musicians,
                performers, and small business owners in and around Detroit —
                people who are working hard to grow their presence and need a
                media partner who&apos;s just as invested in their success as
                they are.
              </p>
              <p>
                We&apos;re not just a vendor. We&apos;re in your corner.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: "$500", label: "Websites start at" },
              { stat: "$300", label: "Social media /month" },
              { stat: "$75", label: "Photography /show" },
            ].map((item) => (
              <div key={item.label} className="glass-card p-6 text-center">
                <div className="font-display text-4xl chrome-text mb-2">{item.stat}</div>
                <p className="text-chrome-silver/60 text-sm">{item.label}</p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <Link href="/request-free-quote" className="btn-primary">
              Work With Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}