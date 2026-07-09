import { processSteps } from "@/data/site";
import { Reveal } from "@/components/Motion";

export function RecoveryTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-gold via-sage to-transparent md:block" />
      <div className="grid gap-5">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08}>
            <div className="relative rounded-lg border border-white/10 bg-white/10 p-6 shadow-card backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20 md:ml-14">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-sm font-bold text-ink shadow-glow md:absolute md:-left-[4.65rem] md:top-6">
                {index + 1}
              </div>
              <h3 className="font-serif text-3xl font-semibold text-pearl">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-pearl/70">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
