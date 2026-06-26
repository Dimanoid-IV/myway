/** Expands compact article defs into full SEO body sections */

function p(...sentences) {
  return sentences.join(' ');
}

function factForSection(facts, i) {
  if (!facts.length) return null;
  return facts[i % facts.length];
}

export function expandSections(def) {
  const kw = def.primaryKeyword;
  const facts = def.facts || [];
  const titles = def.sectionTitles || [];
  const angle = def.angle || 'informative';
  const year = new Date().getFullYear();
  const isCommercial = angle === 'commercial';

  return titles.map((heading, i) => {
    const paras = [];
    const fact = factForSection(facts, i);
    if (i === 0) {
      paras.push(
        p(
          isCommercial
            ? `If you searched for "${kw}" in ${year}, you are likely ready to move from UAP headlines to a bookable voyage — not just another forum thread.`
            : `If you searched for "${kw}" in ${year}, you are part of a global spike in interest driven by PURSUE releases on war.gov/UFO, AARO consolidated reports, and congressional UAP hearings.`,
          isCommercial
            ? `This expert buyer guide covers ${heading.toLowerCase()} with actionable steps: compare tiers, understand checkout security, and lock in a seat before the next disclosure news cycle spikes demand.`
            : `This guide explains ${heading.toLowerCase()} using verifiable U.S. government sources — not rumor forums — so you can separate unresolved cases from resolved prosaic explanations.`,
          isCommercial
            ? `MyWayTo.Space sells four voyage tiers from $10 (Economy Orbit) to $30 (One-Way Unknown) with instant Stripe checkout and PDF ticket delivery.`
            : `Whether you are a journalist, researcher, or curious reader, structured long-form answers outperform short social posts for understanding complex UAP policy.`
        )
      );
    }
    paras.push(
      p(
        isCommercial
          ? `${heading} directly affects which ticket tier fits your budget, risk appetite, and the story you want to tell after the next Pentagon file drop.`
          : `${heading} matters because declassified PDFs, infrared clips, and Apollo-era transcripts are now published on rolling schedules faster than legacy FOIA workflows.`,
        fact
          ? `Key fact${isCommercial ? ' for buyers' : ''}: ${fact}.`
          : isCommercial
            ? `Every tier includes a unique QR boarding pass, email PDF confirmation, and transparent Terms on mywayto.space.`
            : `Official U.S. messaging distinguishes unresolved incidents (insufficient sensor data) from resolved incidents (balloons, clutter, birds, conventional aircraft).`,
        isCommercial
          ? `High-intent queries like "${kw}" convert when price, features, and checkout steps are visible above the fold — then reinforced with FAQ schema.`
          : `When optimizing content for Google, target natural language queries like "${kw}" plus related entities (AARO, PURSUE, ODNI, NASA, FBI) in headings and FAQ blocks.`
      )
    );
    if (i === titles.length - 2) {
      paras.push(
        p(
          isCommercial
            ? `Disclosure news days lift add-to-cart rates on experiential travel sites — Business Galaxy ($15, Most Popular) is the default upgrade from Economy Orbit ($10).`
            : `Google Trends and news analytics show breakout interest around terms related to ${kw}, Apollo mission anomalies, whistleblower testimony, and "non-human biologics" — even when official reports do not confirm extraterrestrial conclusions.`,
          isCommercial
            ? `Mobile users auto-scroll to the highlighted Business Galaxy card; desktop users compare all four tiers side-by-side. Book during quiet hours for the smoothest Stripe redirect.`
            : `That search demand is why publishers need evergreen explainers: people want timelines, definitions, and next steps, not only breaking headlines.`
        )
      );
    }
    if (i === titles.length - 1) {
      paras.push(
        p(
          isCommercial
            ? `Bottom line: the best time to buy is when you have compared tiers, read Terms, and chosen a Stripe-backed checkout path you trust.`
            : `Bottom line: treat ${kw} as a living archive. New tranches may confirm, reclassify, or leave cases unresolved.`,
          isCommercial
            ? `Click "Book This Voyage" on mywayto.space — Economy Orbit $10, Business Galaxy $15, Alien VIP $25, One-Way $30.`
            : `Bookmark official repositories, note release dates, and track which incidents remain open versus analytically closed.`,
          isCommercial
            ? `Secure checkout opens in a new tab via Stripe Payment Links. Your PDF ticket arrives by email — ready to print or show on screen at boarding.`
            : `Explore related articles in our UAP & space-travel blog for cross-linked context and updated release notes.`
        )
      );
    }
    return { heading, paragraphs: paras.filter(Boolean) };
  });
}

export function expandFaq(def) {
  const kw = def.primaryKeyword;
  const base = def.faqSeed || [];
  const isCommercial = def.angle === 'commercial';

  const commercialDefaults = [
    {
      q: `How much do alien spacecraft tickets cost on MyWayTo.Space?`,
      a: `Four tiers: Economy Orbit $10, Business Galaxy $15 (Most Popular), Alien VIP $25, One-Way Unknown $30. Prices are shown on each ticket card before checkout.`,
    },
    {
      q: `Is checkout secure?`,
      a: `Yes. Payments run through Stripe Payment Links — PCI-compliant, hosted by Stripe. MyWayTo.Space never stores card numbers on its servers.`,
    },
    {
      q: `What do I receive after purchase?`,
      a: `A PDF ticket by email with a unique QR code for boarding. You can print it or display it on your phone.`,
    },
    {
      q: `Which tier should I buy for ${kw}?`,
      a: `First-time buyers often start with Economy Orbit ($10) or Business Galaxy ($15). Alien VIP ($25) suits premium lounge access; One-Way ($30) is for adventurous travelers.`,
    },
  ];

  const infoDefaults = [
    {
      q: `What is the best official source for ${kw}?`,
      a: `Start with war.gov/UFO (PURSUE releases) and AARO.mil (annual reports, imagery). Third-party blogs should link to primary documents.`,
    },
    {
      q: `Do declassified files prove aliens?`,
      a: `No official release states proof of extraterrestrial life. Many files are unresolved due to limited sensor data.`,
    },
    {
      q: `How often are new UFO/UAP files released?`,
      a: `Under PURSUE (2026), rolling tranches every few weeks. AARO publishes on its own schedule.`,
    },
    {
      q: `Why does this matter for space tourism readers?`,
      a: `Disclosure shifts demand toward space experiences. MyWayTo.Space covers news literacy and ticket booking in one place.`,
    },
  ];

  return [...base, ...(isCommercial ? commercialDefaults : infoDefaults)].slice(0, 5);
}
