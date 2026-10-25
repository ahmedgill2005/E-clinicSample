import { ArrowUpRight, Award, BookOpen, Globe2, GraduationCap, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { doctor } from '../data/doctor';
import { ExternalLink, Reveal, fadeUp, stagger } from './ui';
import Portrait from './Portrait';

const icons = [GraduationCap, Stethoscope, BookOpen, Award, Globe2];

export default function AboutDoctor() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden="true" className="orb -right-40 top-10 -z-10 h-96 w-96 bg-sage/30" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-mint to-sage/50" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-lift">
            <Portrait />
          </div>
          <div aria-hidden="true" className="sphere-gold float-slow absolute -right-3 -top-3 h-10 w-10" />
          <div aria-hidden="true" className="ring-gold float-slower absolute -bottom-6 -left-6 h-16 w-16" />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              Meet {doctor.name}
            </p>
            <h2 id="about-title" className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
              Care That Begins With Understanding
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted">
              <p>
                {doctor.name} is a psychiatrist whose listed qualifications and professional credentials include MBBS,
                Consultant Psychiatrist MD, CPD in Child &amp; Adolescent Mental Health, and certification in geriatric
                psychiatry through APPNA.
              </p>
              <p>
                Her professional profile also lists membership in the European Psychiatric Association. Patients can
                explore her profile and consultation options to learn more about her practice.
              </p>
            </div>
          </Reveal>

          <motion.ul
            className="mt-10 grid gap-3 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            aria-label="Qualifications and credentials"
          >
            {doctor.qualifications.map((q, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.li
                  key={q.title + (q.detail ?? '')}
                  variants={fadeUp}
                  className={`group flex items-center gap-4 rounded-2xl border border-teal/10 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                    i === doctor.qualifications.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="leading-snug">
                    <span className="block font-semibold text-charcoal">{q.title}</span>
                    {q.detail && <span className="block text-sm text-muted">{q.detail}</span>}
                  </span>
                </motion.li>
              );
            })}
          </motion.ul>

          <Reveal className="mt-10">
            <ExternalLink href={doctor.links.profile} className="btn-primary group">
              View Doctor Profile
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </ExternalLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
