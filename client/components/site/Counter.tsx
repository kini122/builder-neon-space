import React from "react";
import { useCountUp } from "@/hooks/use-count-up";

export function Counter({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const { ref, value } = useCountUp({ end });
  const formatted = React.useMemo(() => {
    const n = Number(value.toFixed(decimals));
    return `${prefix}${n.toLocaleString()}${suffix}`;
  }, [value, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className} aria-live="polite">
      {formatted}
    </span>
  );
}
