import type { Metadata } from "next";
import { Mail, MapPin, Linkedin } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's start a conversation about your next technology project.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Let's Start a Conversation"
          title="Let's discuss your next technology project"
          description="Whether it's a web platform, mobile application, SaaS product, or a long-term technology partnership — tell us what you're building."
          crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />

        <section className="section-pad bg-ink pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14">
            <Reveal>
              <div className="card p-8 lg:sticky lg:top-28">
                <h3 className="font-display text-xl font-semibold text-paper mb-6">Ehyun</h3>
                <p className="text-paper/50 text-sm mb-8">Technology &amp; Software Solutions</p>
                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail size={16} className="text-signal-light mt-0.5 shrink-0" />
                    <div>
                      <p className="text-paper/40 text-xs uppercase tracking-wider">Email</p>
                      <a href="mailto:hello@ehyun.io" className="text-paper hover:text-signal-light transition-colors">hello@ehyun.io</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="text-signal-light mt-0.5 shrink-0" />
                    <div>
                      <p className="text-paper/40 text-xs uppercase tracking-wider">Location</p>
                      <p className="text-paper">Bangladesh</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Linkedin size={16} className="text-signal-light mt-0.5 shrink-0" />
                    <div>
                      <p className="text-paper/40 text-xs uppercase tracking-wider">LinkedIn</p>
                      <a href="#" className="text-paper hover:text-signal-light transition-colors">View Profile</a>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
