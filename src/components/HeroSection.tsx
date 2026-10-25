import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, BadgeCheck, CalendarHeart, HeartHandshake, Hourglass, Sparkles } from 'lucide-react';
import { doctor } from '../data/doctor';
import { fadeUp, stagger } from './ui';
import Portrait from './Portrait';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });
  const backX = useTransform(sx, (v) => v * -18);
  const backY = useTransform(sy, (v) => v * -18);
  const frontX = useTransform(sx, (v) => v * 10);
  const frontY = useTransform(sy, (v) => v * 10);

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const trust = [
    { icon: BadgeCheck, label: doctor.stats.verification },
    { icon: Hourglass, label: `${doctor.stats.experienceYears} Years of Experience` },
    { icon: HeartHandshake, label: `${doctor.stats.satisfactionPercent}% Patient Satisfaction*` },
  ];

  return (
    <section
      id="home"
      ref={ref}
      onPointerMove={onMove}
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="animated-gradient absolute inset-0 -z-10 bg-[linear-gradient(120deg,#FAF8F3_0%,#EAF1EB_45%,#FAF8F3_70%,#F3EEE3_100%)]"
      />
      <div aria-hidden="true" className="orb -left-32 top-20 -z-10 h-80 w-80 bg-sage/40" />
      <div aria-hidden="true" className="orb -right-24 bottom-0 -z-10 h-96 w-96 bg-gold/20" />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="eyebrow">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            PSYCHIATRIC CARE • LAHORE, PAKISTAN
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            className="mt-6 text-[2.5rem] font-semibold sm:text-5xl lg:text-[3.6rem]"
          >
            Your Mental Wellbeing Deserves{' '}
            <em className="font-medium italic text-teal-soft">Compassionate</em> Care.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-muted">
            Meet {doctor.name}, a consultant psychiatrist offering professional psychiatric consultations in{' '}
            {doctor.city} and through video appointments.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#consultations" className="btn-primary group">
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#about" className="btn-secondary">
              Explore the Practice
            </a>
          </motion.div>
          <motion.ul variants={fadeUp} className="mt-10 flex flex-wrap gap-x-6 gap-y-3" aria-label="Highlights">
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-charcoal/85">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-soft">
                  <Icon className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </motion.ul>
          <motion.p variants={fadeUp} className="mt-4 text-xs text-muted">
            *As listed on the {doctor.stats.source}.
          </motion.p>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-[26rem] lg:max-w-[30rem]"
        >
          <motion.div aria-hidden="true" style={{ x: backX, y: backY }} className="absolute inset-0">
            <div className="sphere spin-slow absolute -right-6 -top-6 h-[88%] w-[88%] sm:-right-10" />
            <div className="ring-gold float-slower absolute -left-4 bottom-10 h-20 w-20" />
            <div className="sphere-gold float-slow absolute right-2 top-[42%] h-7 w-7" />
          </motion.div>

          <div className="organic-frame relative aspect-[4/5] overflow-hidden border-[6px] border-white/80 shadow-lift">
            <Portrait eager />
          </div>

          <motion.div
            style={{ x: frontX, y: frontY }}
            className="glass float-slow absolute -left-4 bottom-6 flex max-w-[15rem] items-center gap-3 rounded-2xl p-4 sm:-left-10"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal text-white">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-semibold leading-snug text-teal">Personalized Psychiatric Consultations</p>
          </motion.div>

          <motion.div
            style={{ x: frontX, y: frontY }}
            className="glass float-slower absolute -right-2 top-8 hidden items-center gap-2 rounded-2xl px-4 py-3 sm:flex"
          >
            <CalendarHeart className="h-4 w-4 text-gold-dark" aria-hidden="true" />
            <p className="text-xs font-semibold text-teal">Video &amp; clinic visits</p>
          </motion.div>

          <div aria-hidden="true" className="sphere-teal float-slower absolute -bottom-4 right-10 h-12 w-12" />
        </motion.div>
      </div>
    </section>
  );
}
