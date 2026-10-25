import { motion } from 'framer-motion';
import { ArrowUpRight, Video } from 'lucide-react';
import { doctor } from '../data/doctor';
import { ExternalLink } from './ui';

export default function ContactCTA() {
  return (
    <section aria-labelledby="cta-title" className="on-dark px-4 pb-24 sm:px-8 lg:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="animated-gradient relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#0F3639_0%,#174C4F_45%,#1F5F63_70%,#174C4F_100%)] px-6 py-20 text-center shadow-lift sm:px-12 lg:py-24"
      >
        <div aria-hidden="true" className="sphere float-slower absolute -left-20 -top-20 h-64 w-64 opacity-40" />
        <div aria-hidden="true" className="sphere-gold float-slow absolute bottom-12 left-[12%] h-8 w-8 opacity-90" />
        <div aria-hidden="true" className="ring-gold spin-slow absolute -bottom-24 -right-16 h-72 w-72 opacity-50" />
        <div aria-hidden="true" className="sphere float-slow absolute right-[10%] top-12 h-14 w-14 opacity-60" />

        <div className="relative mx-auto max-w-2xl">
          <span aria-hidden="true" className="mx-auto block h-px w-16 bg-gold" />
          <h2 id="cta-title" className="mt-8 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Taking the First Step Can Begin With a Conversation.
          </h2>
          <p className="mt-6 text-lg text-white/85">
            Explore the available consultation options and find a convenient way to connect with {doctor.name}.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ExternalLink href={doctor.links.clinicBooking} className="btn-light group">
              Book an Appointment
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </ExternalLink>
            <ExternalLink href={doctor.links.videoBooking} className="btn-ghost-light">
              <Video className="h-4 w-4" aria-hidden="true" />
              Explore Video Consultation
            </ExternalLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
