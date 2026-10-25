import { useState } from 'react';
import { ArrowUpRight, Building2, Check, Copy, MapPin, Navigation, Phone } from 'lucide-react';
import { directionsUrl, doctor } from '../data/doctor';
import { ExternalLink, Reveal, SectionHeading } from './ui';

export default function ClinicLocation() {
  const [copied, setCopied] = useState(false);
  const { clinic, helpline } = doctor;

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(`${clinic.name}, ${clinic.fullAddress}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard can be unavailable (e.g. insecure context); the address text stays selectable.
    }
  };

  return (
    <section id="contact" aria-labelledby="clinic-title" className="relative py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading id="clinic-title" eyebrow="Location" title="Visit the Clinic in Lahore" />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="card flex flex-col p-8 lg:p-10">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mint text-teal">
                <Building2 className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="text-2xl font-semibold">{clinic.name}</h3>
            </div>

            <div className="mt-8 flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-medium text-muted">Address</p>
                <address className="mt-1 select-all not-italic text-charcoal">
                  {clinic.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <button
                  type="button"
                  onClick={copyAddress}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-teal/15 px-3 py-1.5 text-xs font-medium text-teal transition-colors hover:bg-mint"
                >
                  {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                  {copied ? 'Address copied' : 'Copy address'}
                </button>
                <span className="sr-only" aria-live="polite">
                  {copied ? 'Address copied to clipboard' : ''}
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-muted">{helpline.label}</p>
                <a href={`tel:${helpline.tel}`} className="link-underline mt-1 inline-block font-semibold text-teal">
                  {helpline.display}
                </a>
                <p className="mt-2 text-sm text-muted">
                  This is the Marham helpline listed for appointment information, not a direct clinic number.
                </p>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row">
              <ExternalLink href={directionsUrl} className="btn-secondary flex-1">
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </ExternalLink>
              <ExternalLink href={doctor.links.clinicBooking} className="btn-primary flex-1">
                Book Appointment
              </ExternalLink>
            </div>
          </Reveal>

          {/* Map placeholder: no embed until the clinic's exact location is verified. */}
          <Reveal delay={0.1} className="relative min-h-[22rem] overflow-hidden rounded-4xl bg-mint shadow-soft">
            <svg aria-hidden="true" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 500">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" fill="none" stroke="#A9C3B0" strokeOpacity="0.45" />
                </pattern>
              </defs>
              <rect width="600" height="500" fill="url(#grid)" />
              <path d="M-20 360 C120 300 220 420 360 330 S560 250 640 300" fill="none" stroke="#FFFFFF" strokeWidth="22" />
              <path d="M180 -20 C210 120 160 260 250 380 S300 520 320 540" fill="none" stroke="#FFFFFF" strokeWidth="16" />
              <path d="M420 -20 C400 140 470 220 440 520" fill="none" stroke="#FFFFFF" strokeWidth="10" />
              <circle cx="520" cy="90" r="60" fill="#A9C3B0" fillOpacity="0.35" />
              <circle cx="90" cy="120" r="40" fill="#C6A875" fillOpacity="0.18" />
            </svg>
            <div className="relative flex h-full min-h-[22rem] flex-col items-center justify-center p-8 text-center">
              <span className="relative flex h-16 w-16 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-teal/20 motion-reduce:hidden" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white shadow-lift">
                  <MapPin className="h-7 w-7" aria-hidden="true" />
                </span>
              </span>
              <div className="glass mt-6 rounded-2xl px-6 py-4">
                <p className="font-serif text-lg font-semibold text-teal">
                  {doctor.area}, {doctor.city}
                </p>
                <p className="mt-1 text-sm text-muted">Block A3, Phase 1</p>
              </div>
              <ExternalLink
                href={directionsUrl}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal link-underline"
              >
                Open in Google Maps
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ExternalLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
