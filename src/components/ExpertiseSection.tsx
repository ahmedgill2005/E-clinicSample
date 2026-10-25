import { motion } from 'framer-motion';
import { Baby, Sprout, UserRound } from 'lucide-react';
import { doctor } from '../data/doctor';
import { SectionHeading, fadeUp, stagger } from './ui';

const areas = [
  {
    icon: UserRound,
    title: 'Adult Mental Health',
    description:
      'Explore professional psychiatric consultation options for adults and discuss your concerns with a qualified psychiatrist.',
    shape: 'sphere',
  },
  {
    icon: Baby,
    title: 'Child & Adolescent Mental Health',
    description: `${doctor.name}'s listed credentials include CPD in Child & Adolescent Mental Health.`,
    shape: 'sphere-gold',
  },
  {
    icon: Sprout,
    title: 'Geriatric Psychiatry',
    description: 'Her listed credentials include certification as a geriatric psychiatrist through APPNA.',
    shape: 'sphere-teal',
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="relative bg-mint/60 py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          id="expertise-title"
          eyebrow="Areas of Professional Interest"
          title="Psychiatric Care for Different Stages of Life"
          intro="Consultation topics aligned with the credentials listed on her professional profile."
        />

        <motion.ul
          className="mt-16 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {areas.map(({ icon: Icon, title, description, shape }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-4xl bg-white p-8 shadow-soft transition-all duration-500 [transform-style:preserve-3d] hover:-translate-y-2 hover:shadow-lift lg:p-10"
            >
              <div
                aria-hidden="true"
                className={`${shape} absolute -right-10 -top-10 h-36 w-36 opacity-60 transition-transform duration-700 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:scale-110`}
              />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-ivory">
                <Icon className="h-6 w-6 text-teal" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="relative mt-8 text-2xl font-semibold">{title}</h3>
              <p className="relative mt-4 text-muted">{description}</p>
              <span
                aria-hidden="true"
                className="relative mt-8 block h-px w-12 bg-gold transition-all duration-500 group-hover:w-24"
              />
            </motion.li>
          ))}
        </motion.ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
          These areas reflect listed credentials and consultation topics. They are not a guarantee of specific
          services or outcomes. Please confirm suitability when booking.
        </p>
      </div>
    </section>
  );
}
