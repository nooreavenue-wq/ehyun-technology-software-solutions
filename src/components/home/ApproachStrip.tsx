import Reveal from "@/components/shared/Reveal";

export default function ApproachStrip() {
  return (
    <section className="border-y border-ink-line bg-ink-surface">
      <div className="container py-14">
        <Reveal>
          <p className="font-display text-xl sm:text-2xl lg:text-3xl text-paper/85 leading-relaxed max-w-4xl">
            <span className="text-signal-light">Understand</span> the business.{" "}
            <span className="text-signal-light">Design</span> the right solution.{" "}
            <span className="text-signal-light">Build</span> it properly.{" "}
            <span className="text-signal-light">Deliver</span> it reliably.{" "}
            <span className="text-signal-light">Grow</span> together.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
