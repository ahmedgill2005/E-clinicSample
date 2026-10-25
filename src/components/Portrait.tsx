import { UserRound } from 'lucide-react';
import { doctor } from '../data/doctor';

/**
 * Doctor portrait. Shows the authorised photo when `doctor.portrait.src` is set,
 * otherwise a clearly labelled placeholder that is easy to replace.
 */
export default function Portrait({ className = '', eager = false }: { className?: string; eager?: boolean }) {
  const { src, alt, width, height } = doctor.portrait;

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label="Portrait placeholder — an authorised photograph of Dr. Arooj Fatima will appear here"
      className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-mint via-sage-light to-sage text-teal ${className}`}
    >
      <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/60 shadow-soft backdrop-blur">
        <UserRound className="h-12 w-12" strokeWidth={1.25} aria-hidden="true" />
      </span>
      <span className="mt-5 font-serif text-2xl font-semibold">{doctor.initials}</span>
      <span className="mt-1 text-xs font-medium tracking-[0.14em] text-teal/70">PORTRAIT PLACEHOLDER</span>
    </div>
  );
}
