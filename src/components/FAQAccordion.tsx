import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { faqs } from '../data/doctor';
import { ExternalLink, Reveal, SectionHeading } from './ui';

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faqs" aria-labelledby="faq-title" className="py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-title"
            align="left"
            eyebrow="FAQs"
            title="Frequently Asked Questions"
            intro="Practical information about booking and consultations. This section does not provide medical advice."
          />
        </div>

        <Reveal>
          <ul className="divide-y divide-teal/10 rounded-4xl bg-white px-6 shadow-soft sm:px-8">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              const buttonId = `${baseId}-q${i}`;
              const panelId = `${baseId}-a${i}`;
              return (
                <li key={faq.question}>
                  <h3 className="font-sans text-base">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left font-semibold text-charcoal transition-colors hover:text-teal"
                    >
                      {faq.question}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen ? 'rotate-45 border-teal bg-teal text-white' : 'border-teal/20 text-teal'
                        }`}
                      >
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12 text-muted">
                          <p>{faq.answer}</p>
                          {faq.link && (
                            <ExternalLink
                              href={faq.link.href}
                              className="mt-3 inline-flex items-center gap-1 font-semibold text-teal link-underline"
                            >
                              {faq.link.label}
                              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                            </ExternalLink>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
