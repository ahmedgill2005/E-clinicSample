import { motion } from 'framer-motion';
import { CalendarCheck, ListChecks, MessagesSquare } from 'lucide-react';
import { doctor } from '../data/doctor';
import { ExternalLink, Reveal, SectionHeading, fadeUp, stagger } from './ui';

const steps = [
  {
    icon: ListChecks,
    title: 'Choose Your Consultation',
    text: 'Select video consultation or an in-person appointment.',
  },
  {
    icon: CalendarCheck,
    title: 'Book Your Appointment',
    text: 'Continue to the appointment booking platform to check availability and complete your booking.',
  },
  {
    icon: MessagesSquare,
    title: 'Attend Your Consultation',
    text: 'Follow the appointment instructions provided during booking.',
  },
];

export default function BookingSteps() {
  return (
    <section aria-labelledby="steps-title" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading id="steps-title" eyebrow="How to Book" title="Three Simple Steps" />

        <motion.ol
          className="relative mx-auto mt-16 grid max-w-md gap-10 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {/* Connecting line: vertical on mobile, horizontal on desktop */}
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-7 top-8 w-px bg-gradient-to-b from-gold/70 via-sage to-gold/70 lg:bottom-auto lg:left-[16.6%] lg:right-[16.6%] lg:top-7 lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="relative flex gap-6 lg:flex-col lg:items-center lg:text-center"
            >
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-ivory text-teal shadow-soft">
                <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal text-xs font-semibold text-white">
                  {i + 1}
                </span>
              </span>
              <div>
                <h3 className="text-xl font-semibold lg:mt-4">{title}</h3>
                <p className="mt-2 text-muted lg:mx-auto lg:max-w-xs">{text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        <Reveal className="mt-14 flex flex-col justify-center gap-3 sm:flex-row">
          <ExternalLink href={doctor.links.videoBooking} className="btn-primary">
            Book Video Consultation
          </ExternalLink>
          <ExternalLink href={doctor.links.clinicBooking} className="btn-secondary">
            Book Clinic Appointment
          </ExternalLink>
        </Reveal>
      </div>
    </section>
  );
}
