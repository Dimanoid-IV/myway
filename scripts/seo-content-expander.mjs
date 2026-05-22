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

  return titles.map((heading, i) => {
    const paras = [];
    const fact = factForSection(facts, i);
    if (i === 0) {
      paras.push(
        p(
          `If you searched for "${kw}" in ${year}, you are part of a global spike in interest driven by PURSUE releases on war.gov/UFO, AARO consolidated reports, and congressional UAP hearings.`,
          `This guide explains ${heading.toLowerCase()} using verifiable U.S. government sources — not rumor forums — so you can separate unresolved cases from resolved prosaic explanations.`,
          angle === 'commercial'
            ? `MyWayTo.Space pairs disclosure literacy with bookable voyage tiers (Economy Orbit $10 through One-Way $30) via secure Stripe checkout.`
            : `Whether you are a journalist, researcher, or curious reader, structured long-form answers outperform short social posts for understanding complex UAP policy.`
        )
      );
    }
    paras.push(
      p(
        `${heading} matters because declassified PDFs, infrared clips, and Apollo-era transcripts are now published on rolling schedules faster than legacy FOIA workflows.`,
        fact
          ? `Key fact for this section: ${fact}. Cross-reference the original file on war.gov/UFO or AARO.mil before citing secondary coverage.`
          : `Official U.S. messaging distinguishes unresolved incidents (insufficient sensor data) from resolved incidents (balloons, clutter, birds, conventional aircraft).`,
        `When optimizing content for Google, target natural language queries like "${kw}" plus related entities (AARO, PURSUE, ODNI, NASA, FBI) in headings and FAQ blocks.`
      )
    );
    if (i === titles.length - 2) {
      paras.push(
        p(
          `Google Trends and news analytics show breakout interest around terms related to ${kw}, Apollo mission anomalies, whistleblower testimony, and "non-human biologics" — even when official reports do not confirm extraterrestrial conclusions.`,
          `That search demand is why publishers need evergreen explainers: people want timelines, definitions, and next steps, not only breaking headlines.`
        )
      );
    }
    if (i === titles.length - 1) {
      paras.push(
        p(
          `Bottom line: treat ${kw} as a living archive. New tranches may confirm, reclassify, or leave cases unresolved.`,
          `Bookmark official repositories, note release dates, and track which incidents remain open versus analytically closed.`,
          angle === 'commercial'
            ? `Ready to book a ticket? Compare Economy Orbit, Business Galaxy, Alien VIP, and One-Way tiers at MyWayTo.Space — secure checkout via Stripe Payment Links.`
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
  const defaults = [
    {
      q: `What is the best official source for ${kw}?`,
      a: `Start with U.S. government portals: war.gov/UFO (PURSUE releases) and AARO.mil (annual reports, imagery, reporting guidance). Third-party blogs should link back to these primary documents.`,
    },
    {
      q: `Do declassified files prove aliens?`,
      a: `No official release to date states proof of extraterrestrial life. Many files are unresolved due to limited sensor data; others are resolved as conventional objects. Read case labels carefully.`,
    },
    {
      q: `How often are new UFO/UAP files released?`,
      a: `Under PURSUE (2026), the Department of War described rolling tranches every few weeks. AARO also publishes imagery and reports on its own schedule.`,
    },
    {
      q: `Why does this matter for space tourism readers?`,
      a: `Disclosure shifts public demand toward space experiences and ticketed "voyage" products. MyWayTo.Space covers both news literacy and ticket booking in one ecosystem.`,
    },
  ];
  return [...base, ...defaults].slice(0, 5);
}
