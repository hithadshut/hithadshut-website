import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
};

/**
 * Reveal: server-rendered passthrough wrapper.
 *
 * Previously this was a "use client" component that hid its children with
 * `opacity: 0` until an IntersectionObserver fired on scroll. That caused
 * /pinui-binui hub to score Perf 28 on mobile (LCP 7.7s, TBT 1990ms): the
 * LCP element was inside the first Reveal block and PSI waited for JS to
 * make it visible.
 *
 * Used in 50 files across the site as a structural wrapper. Keeping the
 * same API (children, variant, delay, className) but eliminating the
 * client behavior and hide-state CSS makes content visible immediately,
 * preserves callsites unchanged, and removes ~50 client-component
 * boundaries from the hydration cost. The decorative scroll-reveal
 * animation is dropped as the cost-benefit no longer justifies it.
 *
 * The unused `variant` and `delay` props are kept in the type so callsites
 * don't need to change.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Reveal({ children, variant, delay, className = "" }: Props) {
  return <div className={className}>{children}</div>;
}
