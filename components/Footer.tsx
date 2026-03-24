import Link from "next/link";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-chrome-darkgray border-t border-chrome-silver/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div>
            <div className="mb-4">
              <span className="font-display text-xl tracking-[0.15em] chrome-text block">
                SLEEPING ON THE JOB MEDIA
              </span>
            </div>
            <p className="text-chrome-silver/70 text-sm leading-relaxed max-w-lg">
               Detroit-based media company serving professionals, local businesses,
               and performers with web design, social media management, and 
               photography services.
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="eyebrow mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Clients", href: "/clients" },
                { label: "About", href: "/about" },
                //{ label: "Resources", href: "/resources" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-chrome-silver/70 hover:text-chrome-silver text-sm transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="eyebrow mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:sleepingonthejobmedia@gmail.com"
                  className="flex items-center gap-3 text-chrome-silver/70 hover:text-chrome-silver text-sm transition-colors duration-300 group"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  <span>sleepingonthejobmedia@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sleepingonthejobmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-chrome-silver/70 hover:text-chrome-silver text-sm transition-colors duration-300 group"
                >
                  <Instagram size={16} className="flex-shrink-0" />
                  <span>@sleepingonthejobmedia</span>
                </a>
              </li>
              <li className="pt-2">
                <Link href="/request-free-quote" className="btn-secondary text-xs">
                  Request Free Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-chrome-silver/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-chrome-silver/40 text-xs tracking-wider">
            © {new Date().getFullYear()} Sleeping on the Job Media. All rights
            reserved.
          </p>
          <p className="text-chrome-silver/40 text-xs tracking-wider">
            Detroit, MI
          </p>
        </div>
      </div>
    </footer>
  );
}