import { BadgeCheck, HeartHandshake, Hourglass, MessageSquareText } from 'lucide-react';
import { doctor } from '../data/doctor';
import { Reveal } from './ui';

export default function TrustStrip() {
  const { stats } = doctor;
  const items = [
    { icon: BadgeCheck, value: 'PMDC', label: 'Verified' },
    { icon: Hourglass, value: `${stats.experienceYears} Years`, label: 'of Experience' },
    { icon: MessageSquareText, value: stats.reviews.toLocaleString('en-US'), label: 'Patient Reviews' },
    { icon: HeartHandshake, value: `${stats.satisfactionPercent}%`, label: 'Patient Satisfaction' },
  ];

  return (
    <section aria-label="Credentials at a glance" className="relative z-10 -mt-6">
      <div className="container-x">
        <Reveal className="card px-4 py-8 sm:px-8">
          <ul className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-teal/10">
            {items.map(({ icon: Icon, value, label }) => (
              <li key={label} className="flex flex-col items-center gap-3 px-2 text-center sm:flex-row sm:text-left lg:justify-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-ivory">
                  <Icon className="h-5 w-5 text-gold-dark" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-serif text-2xl font-semibold text-teal">{value}</span>
                  <span className="block text-sm text-muted">{label}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-teal/10 pt-4 text-center text-xs text-muted">
            Verification, experience, review and satisfaction figures as shown on the {stats.source}; not
            independently audited.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
