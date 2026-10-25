import { ArrowUpRight, HeartHandshake, MessageSquareText } from 'lucide-react';
import { doctor } from '../data/doctor';
import { ExternalLink, Reveal, SectionHeading } from './ui';

export default function PatientReviews() {
  const { stats } = doctor;
  const summary = [
    { icon: MessageSquareText, value: stats.reviews.toLocaleString('en-US'), label: 'Patient reviews' },
    { icon: HeartHandshake, value: `${stats.satisfactionPercent}%`, label: 'Patient satisfaction' },
  ];

  return (
    <section aria-labelledby="reviews-title" className="relative overflow-hidden bg-sage/35 py-24 lg:py-32">
      <div aria-hidden="true" className="sphere float-slower absolute -left-16 top-16 h-48 w-48 opacity-70" />
      <div aria-hidden="true" className="ring-gold float-slow absolute bottom-16 right-[8%] h-24 w-24" />
      <div aria-hidden="true" className="sphere-gold absolute right-[14%] top-20 h-6 w-6" />

      <div className="container-x relative">
        <SectionHeading
          id="reviews-title"
          eyebrow="Reviews"
          title="Patient Feedback"
          intro={`A summary of feedback shared by patients on ${doctor.name}'s Marham profile.`}
        />

        <div className="mx-auto mt-14 grid max-w-2xl gap-5 sm:grid-cols-2">
          {summary.map(({ icon: Icon, value, label }, i) => (
            <Reveal key={label} delay={i * 0.1} className="glass rounded-4xl p-8 text-center">
              <Icon className="mx-auto h-7 w-7 text-gold-dark" strokeWidth={1.5} aria-hidden="true" />
              <p className="mt-4 font-serif text-5xl font-semibold text-teal">{value}</p>
              <p className="mt-2 text-muted">{label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <ExternalLink href={doctor.links.reviews} className="btn-primary group">
            Read Patient Reviews
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </ExternalLink>
          <p className="mx-auto mt-5 max-w-lg text-sm text-charcoal/75">
            Figures as shown on the {stats.source}. Reviews are hosted on Marham and are not independently verified by
            this website.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
