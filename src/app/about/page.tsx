import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import Image from "next/image";
import { missionPrinciples, leadershipTeam, brandStory, teamByFunction } from "@/data/content";
import { Target, Compass, Quote, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Ehyun is a technology-focused software development company providing end-to-end digital solutions for businesses and organizations.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About Ehyun"
          title="A technology partner, not a short-term vendor"
          description="We believe successful software development starts with understanding the business problem — not simply writing code."
          crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        />

        <section className="section-pad bg-ink pt-0">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
              <Reveal>
                <p className="eyebrow mb-4">{brandStory.eyebrow}</p>
                <h2 className="font-display font-semibold leading-[1.1] text-3xl sm:text-4xl text-paper max-w-md">
                  {brandStory.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="space-y-5">
                  {brandStory.paragraphs.map((p, i) => (
                    <p key={i} className="text-paper/65 leading-relaxed text-lg">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-pad bg-ink-surface border-y border-ink-line">
          <div className="container max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-4">Who We Are</p>
              <p className="text-paper/70 leading-relaxed text-lg">
                Ehyun is a technology-focused software development company providing end-to-end
                digital solutions for businesses and organizations. A successful technology
                project starts with understanding the business problem, identifying the actual
                requirements, planning the right solution, managing resources effectively, and
                delivering a product that creates real value.
              </p>
              <p className="text-paper/70 leading-relaxed text-lg mt-6">
                Our team combines technical expertise, project management, UI/UX design,
                software development, quality assurance, and deployment capabilities to manage
                projects throughout their complete lifecycle — from an initial business idea to
                a fully deployed digital product.
              </p>
              <p className="text-paper/70 leading-relaxed text-lg mt-6">
                We work with both individual businesses and long-term partners, adapting our
                team structure and development approach according to project requirements. Our
                goal is not to become another short-term software vendor — we aim to become a{" "}
                <span className="text-signal-light">reliable technology partner</span> that
                businesses can depend on for continuous development, technical support, and
                digital transformation.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-ink">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Reveal>
              <div className="card p-8 h-full">
                <span className="w-11 h-11 rounded-md bg-signal/10 flex items-center justify-center text-signal-light mb-6">
                  <Compass size={20} strokeWidth={1.6} />
                </span>
                <p className="eyebrow mb-3">Our Vision</p>
                <h3 className="font-display text-2xl font-semibold text-paper">
                  Technology partnerships for long-term growth
                </h3>
                <p className="text-paper/55 text-sm mt-4 leading-relaxed">
                  We want to build Ehyun into a trusted technology partner for businesses around
                  the world — an organization where technology, business understanding, and
                  professional execution come together to solve meaningful problems. As we grow,
                  our vision is to expand beyond project-based development into long-term
                  technology partnerships, recurring services, and proprietary software products.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card p-8 h-full">
                <span className="w-11 h-11 rounded-md bg-teal/10 flex items-center justify-center text-teal mb-6">
                  <Target size={20} strokeWidth={1.6} />
                </span>
                <p className="eyebrow mb-3">Our Mission</p>
                <h3 className="font-display text-2xl font-semibold text-paper">
                  Turning requirements into reliable technology
                </h3>
                <p className="text-paper/55 text-sm mt-4 leading-relaxed">
                  Our mission is to help businesses use technology more effectively by providing
                  practical, scalable, and well-engineered software solutions — built on
                  transparent communication and a long-term view of the client relationship.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-ink">
          <div className="container">
            <Reveal>
              <SectionHeading eyebrow="Mission Principles" title="Five principles that guide our work" />
            </Reveal>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {missionPrinciples.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="border-t border-signal/30 pt-5 h-full">
                    <h3 className="font-display text-base font-semibold text-paper">{p.title}</h3>
                    <p className="text-paper/50 text-sm mt-2.5 leading-relaxed">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-ink-surface border-t border-ink-line">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Company Structure"
                title="The people leading Ehyun"
                description="A small, hands-on leadership team that stays close to every engagement — from the first discovery call to final delivery."
              />
            </Reveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {leadershipTeam.map((leader, i) => (
                <Reveal key={leader.name} delay={i * 0.08}>
                  <div className="card overflow-hidden h-full flex flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-display text-lg font-semibold text-paper">{leader.name}</h3>
                      <p className="eyebrow mt-1 mb-4">{leader.role}</p>
                      <Quote size={16} className="text-signal-light/50 mb-2" />
                      <p className="text-paper/55 text-sm leading-relaxed italic flex-1">&ldquo;{leader.quote}&rdquo;</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-ink border-t border-ink-line">
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Our Team"
                title="Team structure, by function"
                description="A flexible team of software and IT engineers, designers, and delivery specialists — organized by function and scaled according to each project's requirements."
              />
            </Reveal>
            <div className="mt-14 space-y-12">
              {teamByFunction.map((group, gi) => (
                <div key={group.function}>
                  <Reveal delay={gi * 0.05}>
                    <div className="flex items-center gap-2.5 mb-6">
                      <Users size={16} className="text-signal-light" />
                      <h3 className="font-display text-base font-semibold text-paper">{group.function}</h3>
                    </div>
                  </Reveal>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {group.members.map((member, i) => (
                      <Reveal key={member.name} delay={gi * 0.05 + i * 0.05}>
                        <div className="card p-5 h-full flex items-center gap-4">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-ink-line">
                            <Image src={member.image} alt={member.name} fill sizes="56px" className="object-cover" />
                          </div>
                          <div>
                            <h4 className="font-display text-sm font-semibold text-paper">{member.name}</h4>
                            <p className="text-paper/50 text-xs mt-1 leading-relaxed">{member.role}</p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
