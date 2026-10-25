import { motion } from 'framer-motion';
import { ArrowUpRight, Info, MapPin, Video } from 'lucide-react';
import { directionsUrl, doctor, formatFee } from '../data/doctor';
import { ExternalLink, SectionHeading, fadeUp, stagger } from './ui';

const options = [
  {
    icon: Video,
    title: 'Online Video Consultation',
    fee: doctor.fees.video,
    where: 'Online',
    description: 'Explore a convenient video consultation option without travelling to the clinic.',
    cta: 'Book Video Consultation',
    href: doctor.links.videoBooking,
  },
  {
    icon: MapPin,
    title: 'In-Person Consultation',
    fee: doctor.fees.clinic,
    where: `${doctor.area}, ${doctor.city}`,
    description: `Explore an in-person consultation option at ${doctor.clinic.name} in ${doctor.area}, ${doctor.city}.`,
    cta: 'Book Clinic Appointment',
    href: doctor.links.clinicBooking,
    secondary: { label: 'Get Directions', href: directionsUrl },
  },
];

export default function ConsultationCards() {
  return (
    <section id="consultations" aria-labelledby="consult-title" className="relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden="true" className="orb left-1/2 top-1/3 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 bg-sage/30" />
      <div className="container-x">
        <SectionHeading
          id="consult-title"
          eyebrow="Consultations"
          title="Choose the Consultation That Works for You"
          intro="Appointments are booked through Marham, where you can check current availability."
        />

        <motion.ul
          className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {options.map(({ icon: Icon, title, fee, where, description, cta, href, secondary }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="group relative flex flex-col rounded-4xl border border-white bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift lg:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-white shadow-soft transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="rounded-full bg-mint px-3 py-1 text-xs font-medium text-teal">{where}</span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-semibold text-charcoal">{formatFee(fee)}</span>
                <span className="text-sm text-muted">listed fee</span>
              </p>
              <span aria-hidden="true" className="mt-5 block h-px w-full bg-gradient-to-r from-gold/60 to-transparent" />
              <p className="mt-5 flex-1 text-muted">{description}</p>
              <div className="mt-8 flex flex-col gap-3">
                <ExternalLink href={href} className="btn-primary group/btn w-full">
                  {cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" aria-hidden="true" />
                </ExternalLink>
                {secondary && (
                  <ExternalLink href={secondary.href} className="text-center text-sm font-medium text-teal link-underline self-center">
                    {secondary.label}
                  </ExternalLink>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mx-auto mt-8 flex max-w-xl items-start justify-center gap-2 text-center text-sm text-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
          Fees and appointment availability may change. Please confirm the current details when booking.
        </p>
      </div>
    </section>
  );
}
