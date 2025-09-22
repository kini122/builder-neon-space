import { useEffect, useRef, useState } from "react";

interface Options {
  start?: number;
  end: number;
  duration?: number; // ms
}

export function useCountUp({ start = 0, end, duration = 1500 }: Options) {
  const [value, setValue] = useState(start);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const startTs = performance.now();
            const step = (ts: number) => {
              const progress = Math.min(1, (ts - startTs) / duration);
              const current = start + (end - start) * progress;
              setValue(current);
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [start, end, duration]);

  return { ref, value } as const;
}
