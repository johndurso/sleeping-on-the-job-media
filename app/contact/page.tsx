import { lazy, Suspense } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const ContactSection = lazy(() => import("@/components/ContactSection"));

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-chrome-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="eyebrow mb-4">Reach Out</p>
            <h1 className="section-title chrome-text mb-4">Contact</h1>
            <p className="text-chrome-silver/70 max-w-xl mx-auto mb-6">
              Have a question, a project idea, or just want to say hello?
              We&apos;re here for it. Fill out the form below or reach us
              directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sleepingonthejobmedia@gmail.com"
                className="btn-secondary text-xs"
              >
                sleepingonthejobmedia@gmail.com
              </a>
              <a
                href="https://www.instagram.com/sleepingonthejobmedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs"
              >
                @sleepingonthejobmedia
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </div>
  );
}