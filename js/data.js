/**
 * AFTERIMAGE / CONTENT DATABASE
 * =============================
 * Edit character names, lore, relationships and story content HERE.
 * Avoid editing app.js unless changing site functionality.
 * Profile images live in assets/characters/. Recommended: 3:4 WebP or JPG portraits.
 * NOTE: Xinyi's surname "Shen" remains provisional; swap it below when decided.
 * NOTE: "Viva Hart" follows the latest character specification.
 */
window.ARCHIVE_DATA = {
  characters: [
    {
      id: 'vaessa', number: '001', name: 'Vaessa Veyne', codename: 'THE UNOWNED',
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
      id: 'xinyi', number: '003', name: 'Xinyi Shen', codename: 'THE GOLDEN DAUGHTER',
      job: 'Corporate Executive / Operator', affiliation: 'Kang Tao-associated networks', threat: 'Elevated',
      image: 'assets/characters/xinyi.webp',
      tagline: 'She knows the price of everything—and prefers to set it herself.',
      summary: 'A brilliant, corrupt corpo whose polished reputation conceals an extensive network of fraud, manipulation, and espionage.',
      specialties: ['Corporate espionage', 'Financial crime', 'Leverage', 'Political influence'],
      paragraphs: [
        'Xinyi operates within high-level corporate and financial circles, profiting from insider information, fraudulent transactions, sabotage, and carefully arranged outcomes. She enjoys her privilege and is not interested in dismantling the system that sustains it.',
        'Her understated cyberware, immaculate social presentation, and measured speech help her succeed in rooms where overt violence is considered vulgar. She relies instead on contracts, quiet pressure, and carefully placed people.',
        'She hired Vaessa to remove a dangerous business associate. The professional arrangement evolved into an enduring sexual and romantic relationship; they remain close while maintaining their independence.'
      ],
      contradiction: 'Capable of tenderness and genuine affection, yet deeply indifferent to the damage her business causes.',
      motivation: 'Turn the conspiracy into wealth and influence before anyone else can.'
    },
    {
      id: 'viva', number: '004', name: 'Viva Hart', codename: 'THE FABRICATOR',
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
      id: 'roxana', number: '005', name: 'Roxana Veyne', codename: 'THE WRECKING BALL',
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
    }
  ],
  connections: [
    {people: ['Vaessa', 'Xinyi'], type: 'LOVERS / NOT EXCLUSIVE', description: 'A lasting sexual and romantic relationship founded in professional respect. Independent lives, genuine tenderness, and clashing priorities.'},
    {people: ['Vaessa', 'Xinyi', 'Reina'], type: 'CASUAL INTIMACY', description: 'Reina occasionally joins them. Attraction and trust exist between the three, but no formal three-person relationship has been established.'},
    {people: ['Vaessa', 'Roxana'], type: 'SISTERS / FAMILY', description: 'Opposite approaches to violence, constant arguments, and an unbreakable willingness to defend one another.'},
    {people: ['Vaessa', 'Viva'], type: 'CLOSE FRIENDS', description: 'A rare friendship outside the work: expensive dinners, harmless trouble, confidences, and mutual protection.'},
    {people: ['Roxana', 'Kaya'], type: 'UNLIKELY ALLIES', description: 'Ballistics meets intrusion. Roxana favours explosions; Kaya favours solving the problem before anyone notices it exists.'},
    {people: ['Xinyi', 'Reina'], type: 'COMPLICATED ALLIES', description: 'Privileged access and shared intelligence create a useful partnership that neither entirely trusts.'}
  ]
};
