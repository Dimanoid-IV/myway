/** 50 SEO article definitions — U.S. disclosure + high-intent search queries */

const S = (slug, title, primaryKeyword, category, sectionTitles, facts, faqSeed = [], extra = {}) => ({
  slug,
  title,
  primaryKeyword,
  keywords: extra.keywords || [primaryKeyword, 'UAP', 'UFO', 'declassified', 'Pentagon', '2026'],
  category,
  description: extra.description,
  angle: extra.angle || 'informative',
  publishDate: extra.date || '2026-05-20',
  relatedSlugs: extra.related || [],
  sectionTitles,
  facts,
  faqSeed,
});

export const ARTICLES = [
  // === DISCLOSURE (10) ===
  S('war-gov-ufo-portal-pursue-explained', 'war.gov/UFO Explained: PURSUE Portal & Declassified UAP Files (2026)', 'war.gov ufo', 'disclosure',
    ['What Is war.gov/UFO?', 'PURSUE: Presidential Unsealing System', 'What Was in Release 01?', 'Unresolved vs Resolved Cases', 'How to Research Files Yourself', 'What Releases Come Next?'],
    ['the Department of War launched war.gov/UFO in May 2026 with 160+ records', 'PURSUE stands for Presidential Unsealing and Reporting System for UAP Encounters', 'new tranches are planned every few weeks after security review'],
    [{ q: 'What does PURSUE stand for?', a: 'Presidential Unsealing and Reporting System for UAP Encounters — the interagency workflow for declassifying UAP records.' }],
    { related: ['pentagon-ufo-files-may-2026-release', 'how-to-download-declassified-ufo-files'], description: 'Complete guide to war.gov/UFO and the PURSUE UAP disclosure portal — files, timelines, and how to read cases.' }),

  S('pentagon-ufo-files-may-2026-release', 'Pentagon UFO Files May 2026: What’s in the First PURSUE Release?', 'Pentagon UFO files 2026', 'disclosure',
    ['Release Date and Scope', 'PDFs, Videos, and Images', 'Apollo and NASA Materials', 'Military Sightings Iraq Syria', 'Redactions and Limits', 'Media vs Primary Sources'],
    ['NPR and NBC reported 160+ files spanning the 1940s to 2025', 'roughly two-thirds of documents contain partial redactions', 'materials include FBI, NASA, State Department, and DoD contributions'],
    [], { related: ['war-gov-ufo-portal-pursue-explained', 'apollo-17-three-dots-ufo-photo-explained'] }),

  S('pursue-uap-disclosure-program-trump', 'PURSUE UAP Program: Trump Directive & Government Transparency (2026)', 'PURSUE UAP', 'disclosure',
    ['February 2026 Presidential Directive', 'Interagency Declassification Workflow', 'DOW and ODNI Roles', 'Rolling Tranches Timeline', 'Public vs Classified Channels', 'Impact on Congressional Oversight'],
    ['President Trump directed agencies to identify UAP and extraterrestrial-related records', 'officials described tens of millions of pages potentially in scope', 'PURSUE is described as unprecedented in U.S. transparency efforts'],
    [], { related: ['war-gov-ufo-portal-pursue-explained'] }),

  S('how-to-download-declassified-ufo-files', 'How to Download Declassified UFO Files (war.gov/UFO Guide)', 'download declassified UFO files', 'disclosure',
    ['Step-by-Step Portal Navigation', 'File Formats and Metadata', 'Organizing Cases by Agency', 'Saving Videos and IR Footage', 'Verifying Hashes and Dates', 'Building a Research Archive'],
    ['war.gov/UFO hosts PDFs, images, and videos without security clearance', 'cases are tagged by agency, geography, and incident date', 'private analysts are explicitly invited to review unresolved cases'],
    [], { related: ['war-gov-ufo-portal-pursue-explained'] }),

  S('apollo-17-three-dots-ufo-photo-explained', 'Apollo 17 “Three Dots” Photo: Unresolved UAP Image Explained', 'Apollo 17 three dots UFO', 'disclosure',
    ['What the Photograph Shows', 'Why NASA Could Not Explain It', 'Triangle Formation Theories', 'Comparison to Resolved Cases', 'Apollo Archive Context', 'What Would Resolve the Case'],
    ['The Next Web highlighted an Apollo 17 image with three dots in triangular formation', 'the photo remained in archives for decades before the 2026 portal release', 'PURSUE labels many Apollo-linked materials as unresolved'],
    [], { related: ['apollo-11-buzz-aldrin-uap-sightings-declassified', 'apollo-12-uap-documents-pentagon-release'] }),

  S('apollo-11-buzz-aldrin-uap-sightings-declassified', 'Apollo 11 UAP: Buzz Aldrin Observations in Declassified Docs', 'Apollo 11 UFO Buzz Aldrin', 'disclosure',
    ['Three Anomalies in Crew Debrief', 'Object En Route to the Moon', 'Cabin Light Flashes', 'Return Trip Bright Light', 'Official vs Popular Narratives', 'Laser Reflection Hypothesis'],
    ['a PURSUE-era document cites three observations attributed to Buzz Aldrin', 'crew tentatively assumed one return sighting might be a laser', 'Apollo 11 transcripts are part of broader NASA releases'],
    [], { related: ['apollo-17-three-dots-ufo-photo-explained'] }),

  S('apollo-12-uap-documents-pentagon-release', 'Apollo 12 UAP Documents: Lunar Mission Files in PURSUE', 'Apollo 12 UAP', 'disclosure',
    ['Mission Transcripts in Release', 'Lunar Surface Photography', 'Anomaly Reporting Standards', 'Cross-Agency NASA-DoD Handoffs', 'Unresolved Labels', 'Research Tips for Historians'],
    ['Flying Mag noted Apollo-era files across PURSUE Release 01', 'NASA mission materials are mixed with DoD UAP reporting', 'lack of multi-sensor data often blocks resolution'],
    [], { related: ['apollo-11-buzz-aldrin-uap-sightings-declassified'] }),

  S('fbi-ufo-files-1947-1968-declassified', 'FBI UFO Files 1947–1968: Declassified Archive Guide', 'FBI UFO files declassified', 'disclosure',
    ['Case File 65_HS1-834228961', 'Flying Disc Era Reports', 'Fewer Redactions in 2026 Release', 'Eyewitness vs Secondhand Accounts', 'Cold War Context', 'How to Cross-Index Cases'],
    ['Defense News cited FBI file 65_HS1-834228961 in the first PURSUE tranche', 'historical reports cover rotating saucers and metallic objects', 'FBI materials span nearly 80 years of U.S. UAP history'],
    [], { related: ['pentagon-ufo-files-may-2026-release'] }),

  S('nasa-uap-mission-transcripts-explained', 'NASA UAP Mission Transcripts: How to Read Released Documents', 'NASA UAP transcripts', 'disclosure',
    ['Transcript Types in Releases', 'Mission Phase Annotations', 'Anomaly Call-Out Language', 'Public FOIA vs PURSUE', 'Audio vs Text Gaps', 'Linking to Imagery Cases'],
    ['NASA contributions include mission transcripts and lunar imagery', 'terminology varies between astronaut jargon and formal anomaly tags', 'many anomalies lack corroborating sensor tracks'],
    [], { related: ['apollo-11-buzz-aldrin-uap-sightings-declassified'] }),

  S('unresolved-uap-cases-vs-resolved', 'Unresolved UAP Cases vs Resolved: Government Definitions', 'unresolved UAP cases', 'disclosure',
    ['Official Definition of Unresolved', 'Why Sensor Gaps Matter', 'Resolved Prosaic Explanations', 'Public Analyst Role', 'AARO vs PURSUE Reporting', 'Case Status Tracking Spreadsheet'],
    ['war.gov/UFO emphasizes unresolved cases when data is insufficient', 'AARO 2024 report resolved many cases to balloons, clutter, and aircraft', 'private-sector expertise is explicitly welcomed on unresolved files'],
    [], { related: ['aaro-annual-uap-report-2024-summary'] }),

  // === AARO (10) ===
  S('aaro-annual-uap-report-2024-summary', 'AARO Annual UAP Report 2024: 757 Reports Explained', 'AARO UAP report 2024', 'aaro',
    ['Reporting Window May 2023–June 2024', '757 New Reports Statistic', 'Resolution Trends', 'Safety of Flight Concerns', 'Foreign Adversary Hypotheses', 'Public Website Updates'],
    ['ODNI published the consolidated AARO report in November 2024', 'AARO received 757 reports in the covered period', 'most cases were resolved without exotic attribution'],
    [], { related: ['757-uap-reports-explained-aaro'] }),

  S('aaro-historical-record-report-volume-1', 'AARO Historical Record Report Vol. 1: Key Findings', 'AARO historical report', 'aaro',
    ['Scope Since 1945', 'No Confirmed Extraterrestrial Tech', 'Reverse-Engineering Claims Addressed', 'KONA BLUE Section', 'Interview Limitations', 'Volume II Expectations'],
    ['Volume I released March 2024 on AARO.mil', 'report states no evidence any sighting was extraterrestrial technology', 'KONA BLUE described as a proposed DHS program never fully approved'],
    [], { related: ['kona-blue-uap-program-declassified'] }),

  S('aaro-volume-2-uap-report-what-to-expect', 'AARO Volume 2 UAP Report: What to Expect Next', 'AARO volume 2', 'aaro',
    ['NDAA Mandated Timeline', 'Additional Interviews Promised', 'Claims Deferred from Vol. I', 'Congressional Briefings', 'Comparison to PURSUE', 'How to Monitor Releases'],
    ['Volume II planned per FY24 NDAA Section 6802', 'additional claims on people, locations, and tests may appear', 'AARO continues parallel public imagery releases'],
    [], { related: ['aaro-historical-record-report-volume-1'] }),

  S('757-uap-reports-explained-aaro', '757 UAP Reports: What AARO’s Number Really Means', '757 UAP reports', 'aaro',
    ['Report Ingest Pipeline', 'Duplicate Filtering', 'Geographic Distribution', 'Military vs Civilian Sources', 'Trend vs Anomaly', 'Data Visualization Tools'],
    ['757 reports reflects a single annual consolidation window', 'reporting increased after standardized military reporting guidance', 'public interest spikes correlate with hearings and releases'],
    [], { related: ['aaro-annual-uap-report-2024-summary'] }),

  S('aaro-official-uap-imagery-europe-2024', 'AARO UAP Imagery Europe 2024: PR-017 and PR-018 Cases', 'AARO UAP imagery Europe', 'aaro',
    ['PR-018 Infrared Ten-Minute Video', 'Morphology Assessment', 'PR-017 Cell Phone Footage Limits', 'EUCOM Submission Process', 'Unresolved Labels', 'Trend Analysis Value'],
    ['PR-018: ten minutes thirty seconds infrared from U.S. platform in Europe 2024', 'AARO assessed physical object presence with high confidence but unremarkable features', 'PR-017 footage insufficient for determination'],
    [], { related: ['uap-infrared-video-middle-east-2024'] }),

  S('uap-infrared-video-middle-east-2024', 'UAP Infrared Video Middle East 2024: Sensor Limits Explained', 'UAP infrared video Middle East', 'aaro',
    ['Thermal Contrast Signatures', 'Single-Modality Problems', 'Artifact vs Physical Object', 'Forty-Two Second Clip Context', 'Why Cases Stay Open', 'Multi-Sensor Best Practices'],
    ['AARO posted Middle East 2024 infrared with ambiguous thermal contrast', 'without telemetry or multimodal data, resolution is blocked', 'case remains open for future corroboration'],
    [], { related: ['aaro-official-uap-imagery-europe-2024'] }),

  S('how-to-report-uap-aaro-website', 'How to Report UAP to AARO: Military & Contractor Guide', 'how to report UAP AARO', 'aaro',
    ['Secure Reporting Mechanism', 'GENADMIN Guidance 2024', 'Materiel Disposition Rules', 'Service Member Obligations', 'Civilian Limitations', 'Whistleblower vs Official Channel'],
    ['AARO launched secure reporting for USG employees and contractors', 'GENADMIN on reporting and materiel disposition was approved for public release', 'misplaced evidence chains often explain unresolved status'],
    [], { related: ['ndaa-uap-reporting-requirements'] }),

  S('uap-vs-ufo-terminology-guide', 'UAP vs UFO: Terminology Guide for 2026 Searchers', 'UAP vs UFO', 'aaro',
    ['DoD Preferred Term UAP', 'Anomalous vs Aerial History', 'Google Search Behavior', 'Media Headline Confusion', 'Legal and Statutory Usage', 'SEO Keyword Strategy'],
    ['modern statutes and portals use Unidentified Anomalous Phenomena (UAP)', 'public still searches UFO heavily — both matter for content strategy', 'AARO and PURSUE use UAP in formal releases'],
    [], { related: ['aaro-annual-uap-report-2024-summary'] }),

  S('ndaa-uap-reporting-requirements', 'NDAA UAP Requirements: Reporting, Archives, and Oversight', 'NDAA UAP requirements', 'aaro',
    ['Section 6802 Overview', 'Congressional Reporting Cadence', 'NARA Records Collection', 'AARO Mandate Evolution', 'State and Local Exclusions', 'Compliance Checklist'],
    ['FY24 NDAA drives historical record reports and future volumes', 'congressional defense and intelligence committees receive briefings', 'records mandates intersect with PURSUE declassification'],
    [], { related: ['nara-uap-records-collection'] }),

  S('nara-uap-records-collection', 'NARA UAP Records Collection: Archives Guide for Researchers', 'NARA UAP records', 'aaro',
    ['Catalog Structure', 'Relationship to PURSUE', 'FOIA vs Born-Digital Releases', 'Preservation Standards', 'Academic Access Tips', 'Future Declassification Waves'],
    ['NARA efforts complement rolling PURSUE tranches', 'many legacy records exist only on paper', 'cross-indexing agency metadata is essential'],
    [], { related: ['ndaa-uap-reporting-requirements'] }),

  // === PROGRAMS (10) ===
  S('kona-blue-uap-program-declassified', 'KONA BLUE Declassified: UAP Program Facts vs Claims', 'KONA BLUE UFO', 'programs',
    ['Origins in AAWSAP/AATIP', 'DHS Prospective SAP Status', 'Termination in 2012', 'Non-Human Biologics Allegations', 'AARO Factual Findings', 'Black Vault PDF Sources'],
    ['KONA BLUE was a proposed DHS program, not an approved long-running SAP', 'AARO found no evidence of retrieved materials under that name', 'declassified PDFs released via AARO historical review'],
    [], { related: ['aawsap-aatip-history-uap', 'non-human-biologics-claims-explained'] }),

  S('aawsap-aatip-history-uap', 'AAWSAP and AATIP History: From DIA Funding to KONA BLUE', 'AATIP AAWSAP', 'programs',
    ['2007–2012 Funding Line', 'DIA Cancellation Reasons', 'Contractor UAP Research', 'Paranormal Side Studies', 'Transition to DHS Proposal', 'Lessons for Oversight'],
    ['DIA canceled AAWSAP/AATIP in 2012 for lack of merit', 'contractors conducted UAP and paranormal research at private facilities', 'supporters later pitched KONA BLUE to DHS'],
    [], { related: ['kona-blue-uap-program-declassified'] }),

  S('david-grusch-whistleblower-facts-2026', 'David Grusch Whistleblower Facts: UAP Claims in 2026', 'David Grusch UAP', 'programs',
    ['June 2023 House Testimony', 'ICIG Credible and Urgent Finding', 'Retrieval and Reverse-Engineering Allegations', 'Lack of Public Primary Documents', 'Congressional Reactions', 'Relationship to PURSUE Releases'],
    ['Grusch testified under oath about alleged secret retrieval programs', 'ICIG deemed disclosure credible and urgent procedurally', 'no public document dump has confirmed physical alien craft'],
    [], { related: ['david-grusch-congressional-testimony-summary'] }),

  S('david-grusch-congressional-testimony-summary', 'Grusch Congressional Testimony Summary: UAP Hearing Guide', 'Grusch congressional testimony', 'programs',
    ['Oversight Committee Context', 'Key Quotes and Limits', 'Classified Annex', 'Secondhand vs Firsthand Evidence', 'Pentagon Denials', 'What Would Change the Debate'],
    ['hearing was among the highest-profile UAP events in U.S. history', 'lawmakers split between procedural credibility and evidentiary proof', 'Pentagon maintains no verified extraterrestrial materiel program'],
    [], { related: ['david-grusch-whistleblower-facts-2026'] }),

  S('reverse-engineering-ufo-claims-aaro-response', 'UFO Reverse Engineering Claims: AARO Response Analysis', 'UFO reverse engineering', 'programs',
    ['Specific People and Locations Alleged', 'AARO Empirical Conclusions', 'Contractor Lab Trail', 'Private Sector Storage Theory', 'Burlison Investigation 2025–26', 'Evidence Standards'],
    ['AARO found no empirical evidence of reverse-engineering extraterrestrial technology', 'Volume I states claimed tests and documents were inaccurate', 'House GOP pursued private labs like MIT Lincoln'],
    [], { related: ['private-contractors-ufo-programs-burlison'] }),

  S('non-human-biologics-claims-explained', 'Non-Human Biologics Claims: What Officials Actually Say', 'non-human biologics UAP', 'programs',
    ['Grusch Allegation Context', 'KONA BLUE Wording', 'Medical Evidence Standards', 'AARO Denials and Gaps', 'Volume II Possibilities', 'Responsible Reporting'],
    ['phrase appears in whistleblower discourse and KONA BLUE interview claims', 'no publicly released autopsy-grade chain of custody documents', 'readers should demand primary forensic sources'],
    [], { related: ['kona-blue-uap-program-declassified'] }),

  S('uap-nondisclosure-agreements-debunked', 'UAP NDAs Debunked? AARO Findings on Threat Claims', 'UAP NDA', 'programs',
    ['Death Threat Allegations Online', 'AARO NDA Search Results', 'Legitimate Classification Channels', 'Whistleblower Protections', 'Media Myth vs Statute', 'When NDAs Actually Apply'],
    ['AARO reported no authentic UAP-related NDA threatening violence for disclosure', 'standard classification still applies to active programs', 'IC whistleblower routes remain the lawful path'],
    [], { related: ['david-grusch-whistleblower-facts-2026'] }),

  S('imint-gint-masint-uap-sensors-explained', 'IMINT, GINT, MASINT for UAP: Sensor Types Explained', 'MASINT UAP', 'programs',
    ['All-Domain Anomaly Resolution', 'Why Multi-INT Matters', 'Infrared vs Radar vs EO', 'Data Fusion Pipelines', 'Commercial Phone Footage Limits', 'Future Collection Standards'],
    ['AARO name emphasizes all-domain collection including measurement and signature intelligence', 'single-sensor clips rarely suffice for resolution', 'military platforms outperform civilian video for attribution'],
    [], { related: ['uap-infrared-video-middle-east-2024'] }),

  S('private-contractors-ufo-programs-burlison', 'Private Contractors and UFO Programs: Burlison Investigation', 'private contractors UFO', 'programs',
    ['MIT Lincoln Labs 1952 Talk', 'RAND, MITRE, Aerospace Corp Trail', 'Why Contractors Obscure Oversight', 'Grusch Contracting Claims', 'FOIA to Private Entities', 'Congressional Letters'],
    ['Rep. Eric Burlison requested a 1952 flying saucer briefing from MIT Lincoln Labs', 'Grusch alleged crash retrieval work moved to contractors', 'Pentagon denies retrieval programs exist'],
    [], { related: ['mit-lincoln-lab-flying-saucer-talk-1952'] }),

  S('mit-lincoln-lab-flying-saucer-talk-1952', 'MIT Lincoln Lab “Flying Saucer Talk” (1952): What We Know', 'MIT Lincoln Lab flying saucer', 'programs',
    ['Burlison Letter Timeline', '30-Day Compliance Response', 'Historical Cold War Briefings', 'Relation to Blue Book Era', 'What Video Might Show', 'How to Request Copies'],
    ['Burlison announced MIT Lincoln attorneys will comply within 30 days', '1952 briefing referenced in disclosure advocacy circles', 'primary video not yet public as of initial reporting'],
    [], { related: ['private-contractors-ufo-programs-burlison'] }),

  // === HISTORY (10) ===
  S('nimitz-tic-tac-uap-incident-guide', 'Nimitz Tic Tac UAP Incident: Complete Guide', 'Nimitz tic tac UFO', 'history',
    ['2004 Carrier Strike Group Context', 'Pilot Eyewitness Accounts', 'FLIR Video Release', 'AARO Historical Mention', 'Scientific Hypotheses', 'Why Case Stays Famous'],
    ['incident remains a touchstone in Congressional hearings', 'video evidence drove mainstream UAP attention', 'official resolutions vary by office and year'],
    [], { related: ['congressional-uap-hearings-timeline'] }),

  S('roswell-incident-declassified-documents', 'Roswell Incident: Declassified Documents and Timeline', 'Roswell declassified documents', 'history',
    ['1947 Crash Narrative', 'Army Air Field Press Release', 'Mogul Balloon Explanations', 'FBI and DoD Cross-References', 'PURSUE Era Mentions', 'Research Bibliography'],
    ['Roswell remains the most searched historical UAP keyword cluster', 'modern releases contextualize but rarely revolutionize the case', 'compare PURSUE tags against prior Blue Book files'],
    [], { related: ['project-blue-book-history-guide'] }),

  S('area-51-ufo-myths-vs-facts', 'Area 51 UFO Myths vs Facts: What Archives Show', 'Area 51 UFO', 'history',
    ['Groom Lake Flight Testing', 'U-2 and Stealth Prototypes', 'Worker Lawsuits and Secrecy', 'No Confirmed Alien Hangar Proof', 'Popular Culture Impact', 'Official Geography and Airspace'],
    ['most UFO sightings near Area 51 align with classified aircraft tests', 'AARO has not confirmed extraterrestrial storage there', 'search interest remains extremely high globally'],
    [], { related: ['roswell-incident-declassified-documents'] }),

  S('project-blue-book-history-guide', 'Project Blue Book History: U.S. Air Force UAP Investigations', 'Project Blue Book', 'history',
    ['1952–1969 Timeline', 'Hynek Classification System', 'Official vs Unexplained Percentages', 'Digitization Projects', 'Link to FBI Archives', 'Modern AARO Successor'],
    ['Blue Book is the dominant historical corpus pre-internet', 'AARO Volume I reviews all official efforts since 1945', 'many cases now re-tagged with modern sensors vocabulary'],
    [], { related: ['fbi-ufo-files-1947-1968-declassified'] }),

  S('uap-sighting-statistics-2015-2025', 'UAP Sighting Statistics 2015–2025: Reporting Waves', 'UAP sighting statistics', 'history',
    ['NUFORC and MUFON Trends', 'Smartphone Evidence Explosion', 'Hearing-Driven Spikes', 'Fear vs Trust Language', 'Global Heat Maps', 'Forecast 2026–2030'],
    ['uaprepo.com documents reporting spikes after major news events', 'smartphone era increased photo attachments after 2007', 'disclosure likely sustains elevated reporting'],
    [], { related: ['ufo-tourism-trend-google-searches'] }),

  S('congressional-uap-hearings-timeline', 'Congressional UAP Hearings Timeline: 2023–2026', 'congressional UAP hearings', 'history',
    ['July 2023 Oversight Hearing', 'Witness List and Claims', 'Senate Intelligence Briefings', 'House GOP Disclosure Caucus', 'Burlison and Burchett Roles', 'Next Hearing Signals'],
    ['2023 hearings mainstreamed UAP after Grusch and pilots', 'lawmakers demanded transparency before PURSUE existed', 'hearings correlate with Google Trends breakouts'],
    [], { related: ['david-grusch-congressional-testimony-summary'] }),

  S('marco-rubio-uap-firsthand-witnesses', 'Marco Rubio on UAP: Firsthand Witness Claims Explained', 'Marco Rubio UAP', 'history',
    ['Senate Intelligence Context', 'Corroboration Statements', 'Safety Concerns for Witnesses', 'Comparison to Grusch', 'Policy Implications', 'Public vs Classified Briefings'],
    ['Rubio stated he spoke to firsthand witnesses who corroborated certain claims', 'fear of retaliation appears in multiple lawmaker comments', 'policy debate continues without public materiel'],
    [], { related: ['david-grusch-whistleblower-facts-2026'] }),

  S('tim-burchett-ufo-disclosure-efforts', 'Tim Burchett UFO Disclosure: Congressional Advocacy Guide', 'Tim Burchett UFO', 'history',
    ['Transparency Rhetoric', 'Criticism of DoD Silos', 'Legislative Partnerships', 'Media Strategy', 'PURSUE Reaction', 'Voter Interest Data'],
    ['Burchett is a leading House voice on UAP transparency', 'accused DoD of siloing information from Congress', 'aligned with Trump-era release mandates'],
    [], { related: ['congressional-uap-hearings-timeline'] }),

  S('gillibrand-uap-amendment-explained', 'Gillibrand UAP Amendment: Oversight and Safety Provisions', 'Gillibrand UAP amendment', 'history',
    ['NDAA Amendment History', 'Safety of Flight Focus', 'Reporting Standardization', 'AARO Authorization Roots', 'Civil Rights and Whistleblowers', 'Future Legislative Watch'],
    ['Gillibrand provisions helped institutionalize UAP reporting', 'safety-of-flight remains a top DoD concern in AARO reports', 'amendments interact with PURSUE transparency pushes'],
    [], { related: ['ndaa-uap-reporting-requirements'] }),

  S('odni-uap-intelligence-assessment', 'ODNI UAP Intelligence Role: Assessment and Reporting Lines', 'ODNI UAP', 'history',
    ['DNI Coordination with AARO', 'Consolidated Annual Reports', 'IC Collection Challenges', 'Foreign Adversary Scenarios', 'Public Release Redactions', 'Analyst Career Paths'],
    ['ODNI publishes consolidated UAP assessments with DoD', 'adversary breakthrough technology is a stated concern', 'PURSUE adds parallel historical declassification'],
    [], { related: ['aaro-annual-uap-report-2024-summary'] }),

  // === TRAVEL / COMMERCIAL (10) ===
  S('space-tourism-after-ufo-disclosure', 'Space Tourism After UFO Disclosure: Market Outlook 2026', 'space tourism UFO disclosure', 'travel',
    ['Disclosure-to-Demand Funnel', 'Ticket Tier Positioning', 'Consumer Psychology', 'Regulatory Outlook', 'Media Cycle Timing', 'Booking Conversion Tips'],
    ['PURSUE-era transparency correlates with space curiosity searches', 'MyWayTo.Space packages voyages as experiential products', 'combine news content with Stripe checkout for conversions'],
    [], { angle: 'commercial', related: ['alien-spacecraft-tickets-buying-guide'] }),

  S('alien-spacecraft-tickets-buying-guide', 'Alien Spacecraft Tickets: Buying Guide (2026)', 'alien spacecraft tickets', 'travel',
    ['Economy Orbit Tier', 'Business Galaxy Tier', 'Alien VIP Tier', 'One-Way Unknown Tier', 'Stripe Payment Link Security', 'Refund and Terms Basics'],
    ['four ticket tiers priced $10–$30 on MyWayTo.Space', 'checkout uses Stripe Payment Links hosted by Stripe', 'read Terms section before purchase'],
    [], { angle: 'commercial', related: ['booking-interstellar-travel-tickets-online'] }),

  S('uap-disclosure-and-space-travel-future', 'UAP Disclosure and Space Travel: Future Scenarios', 'UAP disclosure space travel', 'travel',
    ['Public Imagination vs Engineering', 'Suborbital Market Growth', 'Orbital Hospitality', 'Narrative Marketing Ethics', 'Insurance and Liability', '2030 Forecast'],
    ['disclosure increases appetite for space narratives', 'commercial tickets remain entertainment-forward products', 'always verify provider terms and safety claims'],
    [], { angle: 'commercial' }),

  S('economy-orbit-vs-vip-space-tickets', 'Economy Orbit vs Alien VIP: Space Ticket Comparison', 'economy orbit space ticket', 'travel',
    ['Feature Matrix', 'Price vs Experience', 'Shared vs Private Pods', 'Meal and Oxygen Packages', 'Who Each Tier Fits', 'Upgrade Paths'],
    ['Economy Orbit starts at $10 with shared bio-pod motifs', 'Alien VIP at $25 adds lounge and zero-G spa framing', 'compare highlight tier Business Galaxy at $15'],
    [], { angle: 'commercial' }),

  S('how-much-does-space-tourism-cost-2026', 'How Much Does Space Tourism Cost in 2026?', 'space tourism cost 2026', 'travel',
    ['Industry Price Bands', 'MyWayTo.Space Tier Breakdown', 'Hidden Fees to Watch', 'Promotional Pricing', 'Comparison to Blue Origin Style Trips', 'Budget Planning'],
    ['consumer searches for space tourism cost spike after UAP news', 'MyWayTo offers sub-hundred-dollar experiential tiers', 'distinguish satire-forward branding from literal launch providers'],
    [], { angle: 'commercial' }),

  S('booking-interstellar-travel-tickets-online', 'Booking Interstellar Travel Tickets Online: Step-by-Step', 'book space travel tickets online', 'travel',
    ['Choose Your Voyage Tier', 'Click Book This Voyage', 'Stripe Checkout Flow', 'Email Confirmation Expectations', 'Mobile UX Tips', 'Customer Support Channels'],
    ['booking opens Stripe Payment Links in a new tab', 'publishable key lives in VITE_STRIPE_PUBLISHABLE_KEY', 'each tier maps to a dedicated payment link env var'],
    [], { angle: 'commercial' }),

  S('ufo-tourism-trend-google-searches', 'UFO Tourism Trend: Google Searches and Travel Keywords', 'UFO tourism trend', 'travel',
    ['Breakout Queries 2025–2026', 'UAP vs UFO Search Split', 'war.gov Traffic Spikes', 'Content Calendar Ideas', 'Internal Linking Strategy', 'SERP Feature Targets'],
    ['Google Trends shows UAP interest spikes after releases', 'related topics include unidentified flying object and vapor noise terms', 'pair informational posts with ticket CTAs'],
    [], { angle: 'commercial', related: ['space-tourism-after-ufo-disclosure'] }),

  S('best-time-to-book-space-voyage-2026', 'Best Time to Book a Space Voyage in 2026', 'best time book space voyage', 'travel',
    ['Seasonal Demand Curves', 'Disclosure Event Windows', 'Holiday Campaigns', 'Inventory Psychology', 'Price Timing', 'Email Capture Ideas'],
    ['book early around major UAP news cycles for marketing symmetry', 'highlighted Business Galaxy tier drives mobile scroll on MyWayTo', 'use blog clusters for SEO support'],
    [], { angle: 'commercial' }),

  S('space-travel-insurance-uap-era', 'Space Travel Insurance in the UAP Era: What to Know', 'space travel insurance', 'travel',
    ['Entertainment vs Operational Policies', 'Liability Disclaimers', 'Stripe Receipt Records', 'Medical Exclusions', 'Consumer Protection Basics', 'When to Consult Professionals'],
    ['experiential ticket sites require clear fictional disclaimers', 'Terms on MyWayTo.Space govern purchases', 'insurance questions spike after disclosure headlines'],
    [], { angle: 'commercial' }),

  S('mywayto-space-tickets-review', 'MyWayTo.Space Tickets Review: Tiers, UX, and Checkout', 'mywayto.space review', 'travel',
    ['Site UX and Glassmorphism Design', 'Ticket Card Comparison', 'Stripe Integration Quality', 'Mobile Horizontal Scroll', 'Blog and SEO Ecosystem', 'Who Should Buy'],
    ['site runs React + Vite + Tailwind', 'four tiers with Stripe Payment Links', 'blog now includes 50+ UAP SEO articles for organic traffic'],
    [], { angle: 'commercial', related: ['alien-spacecraft-tickets-buying-guide'] }),
];
