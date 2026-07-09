"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: string;
  label: string;
};

function parseStat(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) {
    return { number: null, suffix: value };
  }

  return { number: Number(match[1]), suffix: match[2] };
}

function AnimatedValue({ value }: { value: string }) {
  const { number, suffix } = parseStat(value);
  const [display, setDisplay] = useState(number ?? 0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (number === null || !inView || reduceMotion) {
      setDisplay(number ?? 0);
      return;
    }

    let frame = 0;
    const totalFrames = 42;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      setDisplay(Math.round(number * (1 - Math.pow(1 - progress, 3))));
      if (progress === 1) {
        window.clearInterval(timer);
      }
    }, 22);

    return () => window.clearInterval(timer);
  }, [inView, number, reduceMotion]);

  if (number === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function AnimatedStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: index * 0.08 }}
          className="rounded-lg border border-white/40 bg-white/20 p-5 text-center shadow-card backdrop-blur-xl"
        >
          <p className="font-serif text-4xl font-semibold text-pearl">
            <AnimatedValue value={item.value} />
          </p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-pearl/70">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
