import { useRef } from 'react';
import { X } from 'lucide-react';
import { doctor, navLinks } from '../data/doctor';
import { BrandMark, ExternalLink } from './ui';

export default function Footer() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const year = new Date().getFullYear();

  const bookingLinks = [
    { label: 'Doctor profile', href: doctor.links.profile },
    { label: 'Video consultation', href: doctor.links.videoBooking },
    { label: 'Clinic appointment', href: doctor.links.clinicBooking },
    { label: 'Clinic information', href: doctor.links.clinicInfo },
  ];

  return (
    <footer className="on-dark bg-teal-deep text-white/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark className="h-11 w-11" />
            <div>
              <p className="font-serif text-xl font-semibold text-white">{doctor.name}</p>
              <p className="text-sm text-white/70">{doctor.title}</p>
            </div>
          </div>
          <p className="mt-6 text-sm">
            {doctor.clinic.name}
            <br />
            {doctor.area}, {doctor.city}, {doctor.country}
          </p>
          <p className="mt-4 text-sm">
            Appointment helpline (Marham):{' '}
            <a href={`tel:${doctor.helpline.tel}`} className="link-underline font-semibold text-white">
              {doctor.helpline.display}
            </a>
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-sm font-semibold tracking-wide text-gold">Navigate</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wide text-gold">Appointments</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {bookingLinks.map((link) => (
              <li key={link.href}>
                <ExternalLink href={link.href} className="link-underline hover:text-white">
                  {link.label}
                </ExternalLink>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => dialogRef.current?.showModal()}
                className="link-underline hover:text-white"
              >
                Privacy policy
              </button>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <h2 className="font-sans text-sm font-semibold tracking-wide text-gold">Medical disclaimer</h2>
          <p className="mt-4 text-white/70">
            This website provides general information about the doctor and available consultation options. It is not a
            substitute for professional medical advice, diagnosis, or treatment. For personal medical concerns, consult a
            qualified healthcare professional.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {doctor.name}. All rights reserved.
          </p>
          <p className="max-w-xl md:text-right">
            Appointments are booked through Marham, a third-party platform. This website is not operated by Marham.
          </p>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="privacy-title"
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        className="w-[min(40rem,calc(100%-2rem))] rounded-4xl bg-ivory p-0 text-charcoal shadow-lift backdrop:bg-teal-deep/60 backdrop:backdrop-blur-sm"
      >
        <div className="max-h-[80vh] overflow-y-auto p-8 sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <h2 id="privacy-title" className="text-2xl font-semibold">
              Privacy Policy
            </h2>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close privacy policy"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-teal hover:bg-mint"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              This website is informational. It does not include contact forms, user accounts or analytics, and it does
              not collect or store personal or medical information.
            </p>
            <p>
              Appointment booking links take you to Marham, a third-party platform. Any information you provide there is
              handled under Marham's own terms and privacy policy.
            </p>
            <p>
              Web fonts are loaded from Google Fonts, and the &ldquo;Get Directions&rdquo; link opens Google Maps. These
              services may receive standard technical information such as your IP address.
            </p>
            <p className="rounded-2xl bg-mint p-4 text-charcoal">
              Do not submit sensitive medical information through this website unless an appropriate, secure, and
              privacy-compliant system has been implemented.
            </p>
          </div>
        </div>
      </dialog>
    </footer>
  );
}
