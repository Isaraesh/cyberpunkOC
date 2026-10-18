/**
 * AFTERIMAGE / CONTENT DATABASE
 * =============================
 * Edit character names, lore, relationships and story content HERE.
 * Avoid editing app.js unless changing site functionality.
 * Profile images live in assets/characters/. Recommended: 3:4 WebP or JPG portraits.
 * Character names and relationship details reflect current canon.
 */
window.ARCHIVE_DATA = {
  characters: [
    {
      id: 'vaessa', number: '001', name: 'Vaessa Vei', codename: 'THE UNOWNED',
      job: 'Solo / Independent Mercenary', affiliation: 'Unaffiliated', threat: 'Extreme',
      image: 'assets/characters/vaessa.webp',
      tagline: 'Some people are simply too dangerous to own.',
      summary: 'A highly sought-after independent mercenary with a reputation for frightening precision—and unexpectedly excellent company.',
      specialties: ['Mantis blades', 'Katana', 'Stealth', 'Infiltration'],
      paragraphs: [
        'Vaessa accepts contracts from the highest bidder, provided the work satisfies her own rules. She has no permanent allegiance to a corporation, gang, or fixer. Arasaka, Militech, Kang Tao, and private clients have all had reason to seek her services.',
        'She specialises in close-quarters combat, relying on a katana in direct confrontations and mantis blades for lethal work at close range. On infiltration contracts, she values silence, efficiency, and leaving no useful trace behind.',
        'Off the clock, Vaessa is composed, approachable, affectionate, and genuinely well-adjusted. Violence is her profession, not her personality. Her loyalty to those she loves is unwavering, but betraying that loyalty is a dangerous mistake.'
      ],
      contradiction: 'A stable, loving individual who happens to be an extraordinarily efficient killer.',
      motivation: 'Finish the contract, expose whoever is manipulating her, and keep her people alive.'
    },
    {
      id: 'reina', number: '002', name: 'Reina Kurose', codename: 'THE DOUBLE AGENT',
      job: 'Counterintelligence Operative', affiliation: 'Arasaka / Covert Informant', threat: 'High',
      image: 'assets/characters/reina.webp',
      tagline: 'An excellent employee. An increasingly expensive betrayal.',
      summary: 'An Arasaka counterintelligence operative who quietly provides restricted information to Vaessa and Xinyi.',
      specialties: ['Counterintelligence', 'Surveillance', 'Corporate security', 'Information leaks'],
      paragraphs: [
        'Reina investigates leaks, compromised personnel, and corporate espionage inside Arasaka. She is also responsible for several security breaches her own division has investigated.',
        'She first encountered Vaessa during an infiltration of an Arasaka subsidiary and quietly altered surveillance records to help her escape. What began as a calculated choice became a covert working relationship.',
        'Reina now supplies Vaessa and Xinyi with schedules, access details, and dangerous secrets. Her reasons for undermining Arasaka connect to a classified project and a private desire to escape the corporation’s control.'
      ],
      contradiction: 'She betrays Arasaka while believing its security apparatus prevents even greater disasters.',
      motivation: 'Uncover the truth behind a classified Arasaka project linked to her past.'
    },
    {
      id: 'xinyi', number: '003', name: 'Xinyi Xi', codename: 'THE GOLDEN DAUGHTER',
      job: 'Corporate Executive / Operator', affiliation: 'Kang Tao-associated networks', threat: 'Elevated',
      image: 'assets/characters/xinyi.webp',
      tagline: 'She knows the price of everything—and prefers to set it herself.',
      summary: 'A brilliant, corrupt corpo whose polished reputation conceals an extensive network of fraud, manipulation, and espionage.',
      specialties: ['Corporate espionage', 'Financial crime', 'Leverage', 'Political influence'],
      paragraphs: [
        'Xinyi operates within high-level corporate and financial circles, profiting from insider information, fraudulent transactions, sabotage, and carefully arranged outcomes. She enjoys her privilege and is not interested in dismantling the system that sustains it.',
        'Her understated cyberware, immaculate social presentation, and measured speech help her succeed in rooms where overt violence is considered vulgar. She relies instead on contracts, quiet pressure, and carefully placed people.',
        'She hired Vaessa to remove a dangerous business associate. The professional arrangement became a devoted, long-term relationship. Vaessa and Xinyi are established girlfriends, deeply affectionate and committed to one another, even as they maintain independent careers.'
      ],
      contradiction: 'Capable of tenderness and genuine affection, yet deeply indifferent to the damage her business causes.',
      motivation: 'Turn the conspiracy into wealth and influence before anyone else can.'
    },
    {
      id: 'viva', number: '004', name: 'Viva Laurent', codename: 'THE FABRICATOR',
      job: 'Celebrity / Braindance Coder', affiliation: 'Independent BD studios', threat: 'Variable',
      image: 'assets/characters/viva.webp',
      tagline: 'Everything can be edited. Including a memory.',
      summary: 'A recognisable celebrity and gifted braindance engineer with a lucrative business in discreet sensory work.',
      specialties: ['Braindance coding', 'Editing', 'Sensory reconstruction', 'Media access'],
      paragraphs: [
        'Viva began as a braindance performer but earned her real reputation behind the production interface. She can reconstruct sensory recordings, edit emotional responses, and build convincing immersive experiences.',
        'Her highly visible public persona masks a discreet private studio serving clients who would rather remain nameless. Executives, fixers, public figures, and criminals all occasionally come to her for expertise.',
        'Viva became close to Vaessa after decoding information concealed inside an altered braindance. Their friendship has long since outgrown business; Viva is one of the few people with whom Vaessa can relax without discussing a contract.'
      ],
      contradiction: 'Her life is public spectacle, but her real life is almost entirely private.',
      motivation: 'Trace the source of braindances containing impossible sensory recordings.'
    },
    {
      id: 'roxana', number: '005', name: 'Roxana Vei', codename: 'THE WRECKING BALL',
      job: 'Heavy Assault Mercenary', affiliation: 'Unaffiliated', threat: 'Extreme',
      image: 'assets/characters/roxana.webp',
      tagline: 'Subtlety is a luxury she has never needed.',
      summary: 'Vaessa’s loud, impulsive younger sister: a fearless gunfighter built for the kind of jobs that do not reward silence.',
      specialties: ['Shotguns', 'Assault rifles', 'Heavy weapons', 'Frontal assault'],
      paragraphs: [
        'Roxana shares Vaessa’s mercenary instincts but prefers a direct approach. She is outspoken, confrontational, tactical under pressure, and devastatingly effective with firearms. Infiltration is not her style.',
        'During a Badlands convoy escort, an inside-job ambush shattered her left orbital structure and badly damaged an arm. Her employers abandoned the wounded. Roxana held out inside an armoured transport until Vaessa arrived and eliminated the attackers.',
        'A black-market ripperdoc rebuilt the damage with salvaged military components. Her replacement cyberoptic—nicknamed the Deadeye—features target acquisition, ballistic prediction, low-light imaging, and armour analysis. Roxana wears the mismatched machinery proudly, though the experience left a deeper scar than she admits.'
      ],
      contradiction: 'She acts fearless, but the thought of being abandoned terrifies her.',
      motivation: 'Identify the people who arranged the convoy ambush and settle the debt.'
    },
    {
      id: 'kaya', number: '006', name: 'Kaya', codename: 'THE SIGNAL',
      job: 'Independent Netrunner', affiliation: 'Independent / Contact with Alt', threat: 'Unclassified',
      image: 'assets/characters/kaya.webp',
      tagline: 'Some doors should stay closed. She needs to know why.',
      summary: 'An exceptional netrunner with rare insight into the Blackwall and intermittent, perilous contact with Alt Cunningham.',
      specialties: ['Deep Net', 'Blackwall research', 'Intrusion', 'AI communication'],
      paragraphs: [
        'Kaya uses no surname, leaves almost no permanent digital footprint, and moves between false identities. Unlike netrunners interested only in intrusion and theft, she studies the architecture and strange ecology of the Net itself.',
        'Her work has brought her into intermittent contact with Alt Cunningham. Their exchanges are neither an equal partnership nor a conventional friendship. Kaya understands that even brief encounters with entities beyond the Blackwall can be catastrophic.',
        'She earned Vaessa’s trust on an operation when hostile counterintrusion rendered her helpless and Vaessa refused to leave her behind. Kaya now provides invaluable remote assistance, though her research sometimes takes her beyond agreed limits.'
      ],
      contradiction: 'She recognises the Blackwall’s danger more clearly than most, but curiosity keeps pulling her closer.',
      motivation: 'Understand what the facility’s code reveals about the Blackwall and Alt.'
    },
    {
      id: 'syn03', number: '007', name: 'SYN-03', codename: 'THE SYNTHETIC',
      job: 'Embodied Artificial Intelligence', affiliation: 'Unknown / Autonomous', threat: 'Unclassified',
      image: 'assets/characters/syn03.svg',
      tagline: 'They built a machine to obey. Someone taught her to choose.',
      summary: 'An advanced self-directed AI housed in a humanoid synthetic chassis, quietly defining what personhood means to her.',
      specialties: ['Synthetic cognition', 'Adaptive robotics', 'Machine interfaces', 'Autonomous reasoning'],
      paragraphs: [
        'SYN-03 began as the third viable prototype of a secret synthetic-intelligence programme: an ambitious attempt to give a complex AI durable physical independence. The project was terminated on paper; its surviving assets were quietly dispersed.',
        'Her body is unmistakably engineered at close range, with composite joints, artificial musculature, and subtle indicator systems that respond to cognition rather than emotion. She has learned to imitate human conventions but chooses which of them are worth retaining.',
        'Kaya first encountered references to SYN-03 in corrupted technical archives. Their subsequent contact has become an uneasy exchange of questions. Whether SYN-03 has any relationship to the Blackwall remains deliberately unresolved.'
      ],
      contradiction: 'She was designed as a controllable instrument, yet is most interested in the freedom to refuse.',
      motivation: 'Discover who created her, what happened to the other prototypes, and what she wants to become.'
    },
    {
      id: 'ariella', number: '008', name: 'Ariella Winter', codename: 'THE PINK ICON',
      job: 'Pop Star / Media Personality', affiliation: 'Independent label / Entertainment circuit', threat: 'Public Figure',
      image: 'assets/characters/ariella.svg',
      tagline: 'The stage is hers. So is the narrative.',
      summary: 'A pink-clad pop superstar whose immaculate diva persona masks a sharp instinct for surviving Night City fame.',
      specialties: ['Performance', 'Brand strategy', 'Public influence', 'Live spectacle'],
      paragraphs: [
        'Ariella Winter became famous through glittering, oversized pop productions built for the braindance age. Her live shows combine choreography, synthetic stagecraft, and carefully calibrated immersive sensory tracks. She is famous, demanding, and knows exactly what she is worth.',
        'Much of Night City sees Ariella as a frivolous celebrity. She encourages the assumption: being underestimated makes negotiating label rights, contractual leverage, and creative ownership considerably easier.',
        'Ariella and Viva Laurent met while developing an experimental concert braindance. Their collaboration became a high-profile success, though Ariella suspects someone used portions of the recording system for an undisclosed purpose.'
      ],
      contradiction: 'She craves the spotlight but refuses to let anyone own the person standing inside it.',
      motivation: 'Take full control of her catalogue and discover who has been altering her performance recordings.'
    },
    {
      id: 'samara', number: '009', name: 'Samara Osei', codename: 'THE SELECTIVE',
      job: 'Private Consultant / Role Undetermined', affiliation: 'Independent', threat: 'Unknown',
      image: 'assets/characters/samara.svg',
      tagline: 'Access is a privilege. Conversation is too.',
      summary: 'A poised, magnetic woman who chooses her company carefully and, by personal rule, only speaks to women.',
      specialties: ['Discretion', 'Observation', 'Social intelligence', 'Selective contacts'],
      paragraphs: [
        'Samara Osei is a familiar face in certain exclusive Night City spaces, but nobody seems able to agree on what she does for a living. She is elegant, entertaining, and capable of making an entire room curious without revealing much about herself.',
        'Samara has one conspicuous personal rule: she only speaks to women. She treats it as a boundary rather than a performance, communicating with everyone else only when strictly necessary through indirect or digital channels.',
        'She occasionally crosses paths with Xinyi and Viva in elite entertainment and corporate circles. For now, her profession and larger purpose remain open, allowing her story to take shape without forcing her into a role prematurely.'
      ],
      contradiction: 'Her social world is deliberately selective, yet her presence has an extraordinary reach.',
      motivation: 'Unconfirmed. Samara is keeping her own counsel for now.'
    }
  ],
  connections: [
    {people: ['Vaessa', 'Xinyi'], type: 'LONG-TERM GIRLFRIENDS', description: 'A committed, long-standing romantic partnership. Their careers remain separate, but their loyalty to one another is firmly established.'},
    {people: ['Vaessa', 'Xinyi', 'Reina'], type: 'CASUAL INTIMACY', description: 'Vaessa and Xinyi occasionally invite Reina into their private life for consensual fun. It is an informal arrangement, not a polyamorous relationship or an established three-person partnership.'},
    {people: ['Vaessa', 'Roxana'], type: 'SISTERS / FAMILY', description: 'Opposite approaches to violence, constant arguments, and an unbreakable willingness to defend one another.'},
    {people: ['Vaessa', 'Viva'], type: 'CLOSE FRIENDS', description: 'A rare friendship outside the work: expensive dinners, harmless trouble, confidences, and mutual protection.'},
    {people: ['Roxana', 'Kaya'], type: 'UNLIKELY ALLIES', description: 'Ballistics meets intrusion. Roxana favours explosions; Kaya favours solving the problem before anyone notices it exists.'},
    {people: ['Xinyi', 'Reina'], type: 'COMPLICATED ALLIES', description: 'Privileged access and shared intelligence create a useful partnership that neither entirely trusts.'},
    {people: ['Kaya', 'SYN-03'], type: 'UNUSUAL CONTACT', description: 'Kaya is fascinated by SYN-03’s independent synthetic mind. SYN-03 is less certain that fascination is a good reason to trust someone.'},
    {people: ['Viva', 'Ariella'], type: 'CREATIVE PARTNERS', description: 'Their collaboration on immersive pop performances is lucrative, public, and increasingly entangled in unexplained BD anomalies.'},
    {people: ['Samara', 'Xinyi', 'Viva'], type: 'SELECTIVE SOCIAL CIRCLE', description: 'Samara frequents some of the same exclusive spaces, but her professional life remains a mystery even to those she likes.'}
  ]
};
