# Dr. Arooj Fatima — Psychiatrist website

A one-page site for Dr. Arooj Fatima, a psychiatrist in Johar Town, Lahore. Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Getting started

```bash
npm install
npm run dev       # local development server
npm run build     # type-check and production build to dist/
npm run preview   # serve the production build
```

## Editing content

All credentials, statistics, fees, addresses, links and FAQ text live in **`src/data/doctor.ts`**. Change them there and every section updates.

## Before publishing

- **Portrait.** The site shows a labelled placeholder. Once the doctor has approved a photo, put it in `public/` (for example `public/dr-arooj-fatima.webp`, about 800×1000) and set `doctor.portrait.src` to `'/dr-arooj-fatima.webp'`.
- **Domain.** Once the domain is authorised, add `<link rel="canonical">` and `og:url` in `index.html` (there is a comment marking the spot) and use absolute URLs for `og:image`.
- **Credentials and figures.** Check every qualification and statistic with the doctor. All figures come from the Marham listing, and the site credits them to it.
- **Map.** There is no map embed because the exact clinic coordinates have not been verified. "Get Directions" searches Google Maps for the clinic name and address.
- **Booking.** All booking buttons link to Marham. The site has no forms and collects no data.
- **Helpline.** 042-34500888 is the Marham helpline and is labelled that way, not as a direct clinic number.

## Structure

```
src/
  data/doctor.ts          central content
  components/             Header, HeroSection, TrustStrip, AboutDoctor, ExpertiseSection,
                          ConsultationCards, BookingSteps, ClinicLocation, PatientReviews,
                          FAQAccordion, ContactCTA, Footer, Portrait, ui (shared helpers)
  index.css               design tokens, CSS 3D spheres, animations, reduced-motion rules
```

The 3D effects are CSS only: layered radial-gradient spheres and gold rings, plus a slight mouse parallax in the hero driven by Framer Motion. All animation stops when the visitor's system asks for reduced motion.
