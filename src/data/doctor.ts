/**
 * Central content file for the website.
 *
 * Every credential, statistic, fee and link shown on the site is defined here,
 * so the content can be reviewed and updated in one place. All values come from
 * the doctor's listing on Marham, as supplied. Do not add qualifications,
 * services, timings or testimonials that have not been verified with the doctor.
 */

export const doctor = {
  name: 'Dr. Arooj Fatima',
  title: 'Psychiatrist',
  initials: 'AF',
  city: 'Lahore',
  area: 'Johar Town',
  country: 'Pakistan',

  /**
   * Portrait. Leave `src` as null to show the built-in placeholder.
   * To use an authorised photograph, place it in /public (e.g. /public/dr-arooj-fatima.webp)
   * and set src to '/dr-arooj-fatima.webp'.
   */
  portrait: {
    src: null as string | null,
    alt: 'Portrait of Dr. Arooj Fatima, Psychiatrist',
    width: 800,
    height: 1000,
  },

  qualifications: [
    { title: 'MBBS', detail: null },
    { title: 'Consultant Psychiatrist MD', detail: null },
    { title: 'CPD', detail: 'Child & Adolescent Mental Health' },
    { title: 'Certified Geriatric Psychiatrist', detail: 'APPNA' },
    { title: 'Member', detail: 'European Psychiatric Association' },
  ],

  /** Figures as listed on the doctor's Marham profile. */
  stats: {
    verification: 'PMDC Verified',
    experienceYears: 12,
    reviews: 1199,
    satisfactionPercent: 96,
    source: 'Marham doctor listing',
  },

  fees: {
    currency: 'PKR',
    clinic: 3500,
    video: 3500,
  },

  clinic: {
    name: 'Dr. Arooj Fatima E-clinic',
    addressLines: ['Block A3, Block A 3, Phase 1', 'Johar Town, Lahore', 'Punjab, Pakistan, 54700'],
    fullAddress: 'Block A3, Block A 3, Phase 1, Johar Town, Lahore, Punjab, Pakistan, 54700',
    streetAddress: 'Block A3, Phase 1, Johar Town',
    locality: 'Lahore',
    region: 'Punjab',
    postalCode: '54700',
    countryCode: 'PK',
  },

  /** Marham helpline listed for appointment information. Not a direct clinic number. */
  helpline: {
    display: '042-34500888',
    tel: '+924234500888',
    label: 'Marham appointment helpline',
  },

  links: {
    clinicBooking: 'https://www.marham.pk/doctors/lahore/psychiatrist/dr-arooj-fatima/callcenter',
    videoBooking: 'https://www.marham.pk/online-consultation/request?id=9&d_id=19055',
    profile: 'https://www.marham.pk/doctors/lahore/psychiatrist/dr-arooj-fatima',
    reviews: 'https://www.marham.pk/doctors/lahore/psychiatrist/dr-arooj-fatima#reviews-scroll',
    clinicInfo: 'https://www.marham.pk/hospitals/lahore/dr-arooj-fatima-e-clinic/johar-town-lahore',
  },
} as const;

export const formatFee = (amount: number) =>
  `${doctor.fees.currency} ${amount.toLocaleString('en-US')}`;

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${doctor.clinic.name}, ${doctor.clinic.fullAddress}`,
)}`;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Consultations', href: '#consultations' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
] as const;

export const faqs: { question: string; answer: string; link?: { label: string; href: string } }[] = [
  {
    question: 'How can I book an appointment with Dr. Arooj Fatima?',
    answer: `You can use the online booking link to explore appointment availability or contact Marham at ${doctor.helpline.display} for appointment information.`,
  },
  {
    question: 'What is the consultation fee?',
    answer: `The supplied listing shows a consultation fee of ${formatFee(doctor.fees.clinic)} for both video consultation and the listed clinic appointment. Please confirm the current fee when booking.`,
  },
  {
    question: 'Does Dr. Arooj Fatima offer video consultations?',
    answer:
      'The supplied listing includes a video consultation option. Use the online consultation booking link to check current availability.',
  },
  {
    question: 'Where is the clinic located?',
    answer: `${doctor.clinic.name} is listed at Block A3, Phase 1, Johar Town, Lahore, Punjab, Pakistan, 54700.`,
  },
  {
    question: 'What qualifications does Dr. Arooj Fatima have?',
    answer:
      'Her supplied profile lists MBBS, Consultant Psychiatrist MD, CPD in Child & Adolescent Mental Health, certification in geriatric psychiatry through APPNA, and membership in the European Psychiatric Association.',
  },
  {
    question: 'How can I learn more about the doctor?',
    answer:
      'You can visit her doctor profile to explore her professional information, reviews, and available consultation options.',
    link: { label: 'Visit the doctor profile', href: doctor.links.profile },
  },
];
