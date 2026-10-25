import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/** Scroll-triggered entrance animation. Framer's MotionConfig disables movement for reduced-motion users. */
export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'article';
}) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

/** Link to an external site; always opens in a new tab with safe rel attributes. */
export function ExternalLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'center' | 'left';
  id?: string;
}) {
  const centered = align === 'center';
  return (
    <Reveal className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      {eyebrow && (
        <p className={`eyebrow ${centered ? 'justify-center' : ''}`}>
          <span aria-hidden="true" className="h-px w-8 bg-gold" />
          {eyebrow}
          {centered && <span aria-hidden="true" className="h-px w-8 bg-gold" />}
        </p>
      )}
      <h2 id={id} className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg text-muted">{intro}</p>}
    </Reveal>
  );
}

export function BrandMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="18" fill="#174C4F" />
      <circle cx="26" cy="32" r="13" fill="none" stroke="#A9C3B0" strokeWidth="2.5" />
      <circle cx="38" cy="32" r="13" fill="none" stroke="#C6A875" strokeWidth="2.5" />
    </svg>
  );
}
