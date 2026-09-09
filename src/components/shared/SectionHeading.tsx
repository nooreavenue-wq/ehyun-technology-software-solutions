type Props = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  description?: string;
};

export default function SectionHeading({ eyebrow, title, align = "left", description }: Props) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-display font-semibold leading-[1.1] text-3xl sm:text-4xl lg:text-5xl text-paper">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-relaxed text-paper/55">{description}</p>}
    </div>
  );
}
