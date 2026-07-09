type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light"
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className={`eyebrow ${isDark ? "text-sand" : ""}`}>{eyebrow}</p>}
      <h2 className={`section-title mt-3 text-balance ${isDark ? "text-pearl" : ""}`}>
        {title}
      </h2>
      {copy && (
        <p className={`mt-6 text-base leading-8 sm:text-lg ${isDark ? "text-pearl/70" : "text-ink/70"}`}>
          {copy}
        </p>
      )}
    </div>
  );
}
