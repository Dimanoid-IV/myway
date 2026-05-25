/** Primary host: Vercel redirects apex mywayto.space → www (307). All canonicals must use www. */
export const SITE = {
  name: 'MyWayTo.Space',
  url: 'https://www.mywayto.space',
  description:
    'Alien spacecraft tickets, space tourism, and UAP disclosure news — book your interstellar voyage.',
  ogImage: 'https://www.mywayto.space/1.png',
  twitter: '@mywaytospace',
  author: 'MyWayTo.Space Editorial',
  locale: 'en_US',
};

export const CATEGORIES = {
  disclosure: { label: 'U.S. UFO Disclosure', slug: 'disclosure' },
  aaro: { label: 'AARO & Government Reports', slug: 'aaro' },
  programs: { label: 'Secret Programs & Whistleblowers', slug: 'programs' },
  history: { label: 'Famous Cases & History', slug: 'history' },
  travel: { label: 'Space Travel & Tickets', slug: 'travel' },
};
