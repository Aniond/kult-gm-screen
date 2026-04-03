// kult-gm-screen/scripts/data.mjs
// All Kult: Divinity Lost GM Screen reference data

export const MOVES = {
  regular: [
    "Separate Them",
    "Capture Someone",
    "Put Someone in a Bad Spot",
    "Exchange Harm for Harm",
    "Announce Off-Screen Problems",
    "Announce Future Problems",
    "Deal Damage",
    "Decrease Stability",
    "Take Their Stuff",
    "Give the Possible Consequences and Ask",
    "Offer an Opportunity, With or Without a Price",
    "Turn Their Move Against Them",
    "Make a Threat Move",
    "Make a Move for a Higher Power or Plane of Existence",
    "Use Disadvantages/Hold"
  ],
  elysium: [
    "Expel a Creature Back from Elysium",
    "Draw Someone Back into Elysium",
    "Conceal Something's True Semblance",
    "Revoke a Magical Effect"
  ],
  madness: [
    "Attract Beings",
    "Distortion of Time and Space",
    "Bodily Changes",
    "Open Gateways",
    "Projection"
  ],
  passion: [
    "Insight into the Divine",
    "Become a Victim of Passion",
    "Following Passion",
    "Attract Beings",
    "Receive Insight Into Another's Soul",
    "Receive Divine Inspiration"
  ],
  dream: [
    "Sleep Paralysis",
    "A Dream Come True",
    "Sleep Walking",
    "Shift Dreams",
    "Caught in the Dream",
    "Create a Realm of Dreams",
    "A Portal is Opened",
    "Attract Beings",
    "Attract Dream Prince's Attention",
    "Leave Traces",
    "Discover Insight"
  ],
  underworld: [
    "Lost in the Labyrinth",
    "Become Separated",
    "Vanishing Resources",
    "Sense Danger",
    "Buckle Under the Pressure",
    "Trails from Those Who Have Gone Before",
    "Opening into Another World/Level",
    "A Wondrous Place",
    "Meeting with the Exotic",
    "Under the Control of Higher Beings",
    "The Influence of Nothingness",
    "Visions from She Who Waits Below"
  ],
  metropolis: [
    "The Presence of the Archon",
    "Memories from the Past",
    "Cross Time and Space",
    "Wondrous Place",
    "Gateway to Elysium",
    "Life in the Ruins",
    "The Influence of the City"
  ],
  inferno: [
    "Death is Only the Beginning",
    "Shadow from the Past",
    "The Influence of the Death Angels",
    "Soul Slaughter",
    "Offered a Pact",
    "Branded by Inferno",
    "Followers",
    "Entrancement of the Soul",
    "Intimate Moment"
  ],
  gaia: [
    "The Beast",
    "Decomposition",
    "Virgin Births",
    "Out-of-Body Experience"
  ]
};

export const UNIQUE_MOVES = {
  combat: {
    "1: Weak": [
      "Burst out in sudden, senseless violence.",
      "Flee from a conflict.",
      "Give up and beg for mercy.",
      "Knock someone or something over.",
      "Cause environmental destruction.",
      "Launch a careless attack and sustain damage in return.",
      "Summon reinforcements."
    ],
    "2: Novice": [
      "Grab hold of and pin someone.",
      "Launch or join a coordinated attack.",
      "Jump someone from behind, or as a sudden surprise.",
      "Grab hold of someone and drag the victim away.",
      "Wounds inflicted become infected.",
      "Take a trophy.",
      "Draw a concealed weapon.",
      "Take flight.",
      "Take cover [+2 Armor].",
      "Stun attack [if target fails to Endure Injury they must pick the Knocked out option]."
    ],
    "3: Considerable": [
      "Pin down with gunfire [Act Under Pressure to regain mobility].",
      "Terror inducing growl [Keep it Together to refrain from panicking].",
      "Brace themselves.",
      "Disarm their opponent.",
      "Launch an attack that ignores armor.",
      "Move a considerable distance in a single leap.",
      "Inject a venom, poison, or drug.",
      "Natural escape route.",
      "Take cover in a tactically sound position.",
      "Perform first aid.",
      "Work together with their allies to surround an opponent [opponent takes −1 to all rolls].",
      "Inflict electrical shock [2 Harm, knocked out if failing to Endure Injury].",
      "Scuttle up a wall and escape."
    ],
    "4: Powerful": [
      "Attack several targets simultaneously.",
      "Make an attack out of nowhere, striking first.",
      "Throw someone aside or trip them.",
      "Maiming attack [Harm +1].",
      "Blind their opponent.",
      "Bone-shattering attack [causes a Serious Wound].",
      "Cover a large distance in an instant.",
      "Destroy an opponent's weapon.",
      "Agonizing attack [Keep it Together to avoid a shock reaction]."
    ],
    "5: Exceptional": [
      "Keep the opponent at a distance [Act Under Pressure to get within reach to attack the creature].",
      "Counter-attack [attacks immediately after being attacked, −2 Avoid Harm].",
      "An attack against this creature is redirected and hits another target.",
      "Paralyze their opponent.",
      "Tear off one of their opponent's limbs [Critical Wound].",
      "Launch a heavy object towards someone.",
      "Break walls or floor.",
      "Teleport and attack in an instant [−2 Avoid Harm].",
      "Overwhelm [causes +1 Harm, opponent gets −1 to any attacking or avoidance Moves]."
    ]
  },
  influence: {
    "1: Weak": [
      "Give up, and offer assurances of loyalty.",
      "Trick someone.",
      "Offer something, or do someone a favour with a catch.",
      "Call for help.",
      "Know the right person.",
      "Know where something is located.",
      "Be aware of a detail regarding the [place/person/organization]."
    ],
    "2: Novice": [
      "Kidnap somebody.",
      "Steal something from someone.",
      "Threaten someone, either directly or veiled.",
      "Give orders to henchmen.",
      "Exploit a secret they have learned.",
      "Connect with their contacts in [organization].",
      "Offer mundane [knowledge/object/services] in exchange for payment.",
      "Employ henchmen with their own motives."
    ],
    "3: Considerable": [
      "Outmaneuver or surround someone, force someone into a corner.",
      "Manipulate and corrupt someone.",
      "Lead a [gang/squad/mob].",
      "Assert authority.",
      "Reveal their knowledge of [place/organization/event].",
      "Offer rare and obscure [knowledge/object/services] in exchange for payment.",
      "Recruit criminal elements.",
      "Hack into a network at someone's home or place of work."
    ],
    "4: Powerful": [
      "Purchase the loyalty of someone else's allies.",
      "Call for reinforcements.",
      "Slander someone.",
      "Start a trend, fad, or hype.",
      "Kill a rumor.",
      "Draw on the resources of [organisation].",
      "Assemble and launch a task force.",
      "Take shelter within the [organisation].",
      "Offer supernatural [knowledge/object/services] in exchange for payment.",
      "Recruit duty bound professional hitmen or a squad of mercenaries."
    ],
    "5: Exceptional": [
      "Influence society (directly or through institutions under their control).",
      "Systematically ruin someone's life.",
      "Make someone's secrets public [inflicting −2/−4 Stability].",
      "Reveal their knowledge of someone's deepest desires.",
      "Make an irresistible offer.",
      "Erase someone's identity.",
      "Accumulate forbidden knowledge.",
      "Stage a complex plan with many moving parts.",
      "Manipulate individuals/groups/organizations from the shadows.",
      "Demand obedience through the credible threat of terrifying consequences."
    ]
  },
  magic: {
    "1: Weak": [
      "Reveal something about Reality.",
      "Make contact with another entity.",
      "Speak prophecy.",
      "Protective aura [apply a magical +1 Armor to someone].",
      "Reveal a gate to another world.",
      "Reveal limited insight into [...] (Archons, Death Angels, Inferno, Metropolis...)",
      "Construct other-dimensional machinery.",
      "Initiate in one of the schools of magic."
    ],
    "2: Novice": [
      "Summon a being from [...] (Gaia, Limbo, Inferno, Metropolis, the Underground, Elysium).",
      "Inflict a tear in the Illusion.",
      "Awaken the sleeping madness.",
      "See the true nature of people and creatures.",
      "Send dreams and visions.",
      "Raise the living dead.",
      "Change a person's appearance and/or sex.",
      "Reveal deep insight into [...] (Archons, Death Angels, Inferno, Metropolis...).",
      "Curse somebody or something.",
      "Plant seeds of [...] (guilt, passion, hatred, suspicion) in someone's mind.",
      "Paralyzing touch.",
      "Perform complex cybernetic or arcane surgery.",
      "Journeyman in one of the schools of magic."
    ],
    "3: Considerable": [
      "Manipulate physical and emotional aspects of the surrounding environment.",
      "Influence or control another being.",
      "Open a temporary portal to another dimension.",
      "Possess somebody, taking full control of their body.",
      "Reveal and use a powerful artifact.",
      "Cause a serious sickness in somebody.",
      "Instill night terrors [−2 Stability].",
      "Make creatures from nightmares take physical form.",
      "Conceal their presence with a mental fog.",
      "Degenerate or disintegrate parts of someone's body [causing 1 Serious Wound].",
      "Seduce a crowd.",
      "Kill someone in their sleep.",
      "Heal a badly wounded or dying creature.",
      "Daze those in their surrounding with bewitching song.",
      "Steal life force [regains 2 Wounds, while causing 1 Serious Wound to someone else].",
      "Adept in one of the schools of magic.",
      "Become one with a machine.",
      "Repair, reshape or transform a living being or object."
    ],
    "4: Powerful": [
      "Corrupt a foetus.",
      "Harm someone or something.",
      "Transmit their consciousness via the internet.",
      "See into someone's soul and their past lives.",
      "Send a creature back to its place of origin.",
      "Cause someone's blood to boil – literally [Critical Wound].",
      "Manipulate memories, create memory blackouts.",
      "Create a magical apparatus or artifact.",
      "Spread the Principles of [Archon/Death Angel] to someone.",
      "Steal memories.",
      "Master of one of the schools of magic."
    ],
    "5: Exceptional": [
      "Distort streets, roads, and stairways.",
      "Open a permanent portal to another dimension.",
      "Enslave even the strong-willed.",
      "Find a lost soul.",
      "Manipulate time and space.",
      "Suddenly appear or disappear.",
      "Create a purgatory.",
      "Spiritual torture [−5 Stability].",
      "Create a [lictor/razide/nepharite].",
      "Move someone's physical body into Limbo.",
      "Make a small city fall into their clutches."
    ]
  }
};

export const NPC_DATA = {
  body: ["Agile","Androgynous","Angular","Animalistic","Athletic","Attractive","Average","Bent","Big","Bony","Broad","Broken","Brutalized","Burned","Chubby","Compact","Corpulent","Cowering","Crippled","Crouching","Curvy","Cute","Deformed","Dejected","Dignified","Dirty","Disproportionate","Emaciated","Energetic","Enormous","Fast","Fat","Feral","Firm","Flexible","Frail","Graceful","Hairy","Hardy","Hearty","Hefty","Hobbled","Huge","Hunched","Impaired","Jerky","Lanky","Large","Lean","Limber","Maimed","Malformed","Masculine","Massive","Misshapen","Muscular","Mutilated","Obese","Petite","Plump","Rigid","Robust","Scarred","Sensual","Sexy","Short","Sickly","Sinewy","Skinny","Slender","Slim","Slow","Small","Spindly","Stocky","Stout","Straight-backed","Strong","Tall and gangly","Tattooed","Taut","Tense","Toned","Towering","Trembling","Truncated","Unsteady","Warped","Weak","Well-trained","Wiry","Voluptuous","Youthful"],
  face: ["Aged","Androgynous","Angry","Apprehensive","Aristocratic","Ascetic","Attractive","Battered","Beaky","Bearded","Beautiful","Bony","Bored","Boring","Branded","Captivating","Cheerful","Childish","Chiseled","Coarse","Cruel","Cute","Defined","Determined","Dignified","Dirty","Disfigured","Dishonest","Dominant","Dour","Elfin","Emaciated","Expressionless","Expressive","Filthy","Flat","Fragile","Freckled","Friendly","Good-looking","Gorgeous","Grim","Grimacing","Haggard","Handsome","Happy","Hard","Harsh","Innocent","Made-up","Masculine","Memorable","Mutilated","Narrow","One-eyed","Open","Pale","Pallid","Pleasant","Pretty","Ravaged","Reassuring","Round","Ruthless","Sad","Scarred","Scornful","Sharp","Sickly","Smiling","Smooth","Sorrowful","Square-jawed","Stern","Sweaty","Tanned","Tattooed","Tense","Thin","Tired","Tough","Ugly","Weathered","Wrinkled","Youthful"],
  eyes: ["Analytical","Angry","Anxious","Arresting","Arrogant","Avoidant","Beautiful","Blind","Bloodshot","Burning","Calculating","Cloudy","Cold","Commanding","Confused","Cunning","Curious","Dark","Dead","Deep","Defeated","Demanding","Desolate","Desperate","Devastated","Devious","Disinterested","Distant","Distracted","Doubtful","Emerald green","Empathic","Empty","Fearless","Flirtatious","Forgiving","Friendly","Frightened","Grim","Guilt-laden","Hard","Hardened","Hollow","Hopeful","Hungry","Innocent","Intelligent","Intense","Intimidated","Kind","Large","Lively","Lucid","Mad","Magnetic","Merciless","Mesmerizing","Mischievous","One-eyed","Pale","Passionate","Penetrating","Piercing","Power-hungry","Pretty","Profound","Purple","Restless","Ruthless","Sad","Sapphire blue","Sarcastic","Servile","Shy","Skeptical","Spellbinding","Squinty","Stubborn","Suspicious","Tense","Tired","Tough","Twinkling","Understanding","Warm","Wise","Vulnerable","Yellow-gold"],
  clothes: ["Alternative","Amulets and fetishes","Athletic wear","Attention-grabbing clothes","Baggy","Biker","Bizarre","Black","Blood-stained","Bohemian","Brand name","Bright","Business","Camo","Carefree","Casual","Cheap suit","Clerical robes","Coat and hat","Combat armor","Designer","Dirty","Discreet","Everyday wear","Expensive","Filthy","Flashy","Foreign","Formal","Frilly and fluffy","Fur","Gangsta","Gothic","Gown","Handsome","Heavy metal","Hippie","Hobo","Ill-fitting","Impractical","Innocent","Kinky","Latest fashion","Leather","Luxury","Military uniform","Mismatched","Normcore","Occult symbolism","Old-fashioned","Organic materials","Ornate","Orthodox","Peacockish","Peculiar","Practical","Ragged and worn","Revealing","Ripped","Severe","Sexy","Sharp","Shimmery","Sportswear","Strange","Streetwear","Stylish","Suit","Survival","Tailored suit","Tattered and stained","Tight-fitting","Trenchcoat","Trendy","Tweed","Unconcerned","Uniform","Unique","Worn","Wrong season"],
  drive: ["Hierarchy","Submission","Community","Safety","Law","Allure","Victory","Honor","Avarice","Awakening","Power","Abuse","Exclusion","Fear","Torment","Compulsion","Conflict","Vengeance","Lust","Discord"]
};

export const HORROR_CONTRACT = [
  {
    title: "Know Your Players",
    desc: "Understand what scares each player, and what they enjoy. Horror is personal — tailor dread to individuals, not just generic tropes."
  },
  {
    title: "Quality Before Quantity",
    desc: "One well-crafted, lingering horror scene resonates far more than a constant barrage of shocking events. Let tension breathe."
  },
  {
    title: "Build the Atmosphere",
    desc: "Horror lives in the details. Use sensory descriptions, pacing, and tone to construct an environment that feels wrong long before anything happens."
  },
  {
    title: "Stay in the Scene",
    desc: "Don't rush. Linger in uncomfortable moments. Let players sit with the dread. Cutting away too quickly dissipates the fear."
  },
  {
    title: "Suggest Rather than Overwhelm",
    desc: "Implication is more frightening than explicit detail. Let the imagination do the work. What isn't shown can be more terrifying than what is."
  },
  {
    title: "The Inexplicable",
    desc: "Maintain mystery. Not everything needs an explanation. Some things simply are — ancient, alien, and beyond mortal comprehension."
  },
  {
    title: "Create a Feeling of Exposure",
    desc: "Strip away safety and certainty. Make players feel their characters are vulnerable, watched, and out of their depth."
  },
  {
    title: "Dare to be Unpleasant",
    desc: "True horror isn't comfortable. Push into difficult territory — not gratuitously, but with purpose. Discomfort creates authentic dread."
  },
  {
    title: "Create Interesting Monsters",
    desc: "Monsters should feel like they come from somewhere real — with motivations, history, and their own alien logic. Avoid the purely random."
  }
];

export const HARM_DATA = {
  typical: [
    { circumstance: "Tumbling down a flight of stairs, tipping over on a motorcycle", harm: 1 },
    { circumstance: "Collision when travelling 50 km/h (30 mph), thrown through a window", harm: 2 },
    { circumstance: "Getting your arm stuck in a lathe, drop from the 3rd floor onto pavement", harm: 3 },
    { circumstance: "Highway-speed collision, high-voltage electrical burns", harm: 4 },
    { circumstance: "Hit by a weapon or other attack", harm: "weapon" }
  ],
  weapons: [
    { weapon: "Unarmed brawl", harm: 1 },
    { weapon: "Melee weapon, improvised weapon", harm: 2 },
    { weapon: "Light firearms", harm: 2 },
    { weapon: "Heavy firearms", harm: 3 },
    { weapon: "Explosives, chainsaw", harm: 4 }
  ],
  wounds: [
    { condition: "Serious Wounds (non-stabilized)", deduction: "-1 ongoing" },
    { condition: "Critical Wounds", deduction: "-1 ongoing" },
    { condition: "Both Serious and Critical Wounds", deduction: "-2 ongoing" }
  ]
};

export const STABILITY = [
  { state: "Composed", tier: "safe", effect: "" },
  { state: "Uneasy", tier: "moderate", effect: "Moderate stress: −1 to Disadvantage rolls" },
  { state: "Unfocused", tier: "moderate", effect: "Moderate stress: −1 to Disadvantage rolls" },
  { state: "Shaken", tier: "serious", effect: "Serious stress: −1 Keep it Together, −2 to Disadvantage rolls" },
  { state: "Distressed", tier: "serious", effect: "Serious stress: −1 Keep it Together, −2 to Disadvantage rolls" },
  { state: "Neurotic", tier: "serious", effect: "Serious stress: −1 Keep it Together, −2 to Disadvantage rolls" },
  { state: "Anxious", tier: "critical", effect: "Critical stress: −2 Keep it Together, −3 to Disadvantage rolls, +1 See Through the Illusion" },
  { state: "Irrational", tier: "critical", effect: "Critical stress: −2 Keep it Together, −3 to Disadvantage rolls, +1 See Through the Illusion" },
  { state: "Unhinged", tier: "critical", effect: "Critical stress: −2 Keep it Together, −3 to Disadvantage rolls, +1 See Through the Illusion" },
  { state: "Broken", tier: "broken", effect: "The GM makes a Move" }
];

export const EXPERIENCE_QUESTIONS = [
  "Have we discovered anything new about the Truth?",
  "Have we learned anything new about our characters?",
  "Have we challenged ourselves?"
];
