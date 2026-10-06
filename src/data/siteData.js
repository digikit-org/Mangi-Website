/**
 * MANGI INTERIORS — OFFICIAL WEBSITE CONTENT
 * Directly derived from: Google Docs Content Specification
 * https://docs.google.com/document/d/11P0xYM1emu3lZwwZrLCZh1-9qCS8nxa9YFoaiFFAahI/edit
 */

export const siteConfig = {
  brand: {
    name: "Mangi Interiors",
    tagline: "Design. Build. Inspire.",
    subtitle: "Commercial Interior Design & Turnkey Execution",
    contact: {
      phone: "+91 7742036962",
      whatsapp: "+91 7742036962",
      email: "info@mangiinteriors.com",
      address: "Bengaluru, Karnataka, India",
      socials: [
        { name: "LinkedIn", href: "https://linkedin.com" },
        { name: "Instagram", href: "https://instagram.com" },
        { name: "YouTube", href: "https://youtube.com" },
      ],
    },
    copyright: "© Mangi Interiors. All Rights Reserved.",
  },

  // Recommended Navigation from Google Doc
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],

  // 01 — HOME / HERO
  hero: {
    badge: "Design. Build. Inspire.",
    title: "Commercial Interiors,\nDesigned to Perform.",
    description:
      "We design and deliver commercial spaces that bring together function, aesthetics, brand identity and business performance. From workplaces and retail environments to hospitality and healthcare spaces, Mangi Interiors manages every stage of the journey—from concept and design to execution and handover.",
    sectorChips: [
      "Healthcare",
      "Offices",
      "Retail",
      "Hospitality",
      "Commercial Spaces",
    ],
    ctaButton: "Book a Free Consultation",
    secondaryButton: "Explore Our Work",
    bgImage: "/images/banner-desk.png",
  },

  // 08 — NUMBERS
  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "250+", label: "Projects Delivered" },
    { value: "7+", label: "Industry Sectors" },
    { value: "100%", label: "End-to-End Design & Execution" },
    { tag: "SPACES FOR A BETTER TOMORROW" },
  ],

  // INTRODUCTION / ABOUT MANGI INTERIORS
  about: {
    badge: "ABOUT MANGI INTERIORS",
    headline: "Spaces Designed Around Your Business.",
    subheading: "We Design Spaces That Help Businesses Move Forward.",
    paragraphs: [
      "Your space is more than four walls. It is where your people work, your customers interact with your brand, and your business grows.",
      "At Mangi Interiors, we create commercial interiors that are purposeful, practical and visually distinctive. Our approach combines thoughtful design with disciplined execution to create spaces that work as beautifully as they look.",
      "Whether you're building a new space, expanding your business or transforming an existing environment, we bring design, planning, execution and project management together under one roof.",
      "We don't believe in designing spaces simply for appearance. We believe in creating spaces with a reason behind every decision.",
    ],
    principles: [
      {
        title: "Design with Purpose.",
        description:
          "Intelligent space planning and aesthetics tailored to your brand identity, daily workflow, and long-term business goals.",
      },
      {
        title: "Build with Precision.",
        description:
          "Superior craftsmanship, stringent material quality checks, and millimetric execution across every fixture and finish.",
      },
      {
        title: "Deliver with Responsibility.",
        description:
          "Single-point turnkey accountability ensuring on-time, on-budget, snag-free handover ready for business operations.",
      },
    ],
    ctaText: "Discover Mangi Interiors",
  },

  // 02 — WHAT WE DO / 10 — SERVICES
  whatWeDo: {
    badge: "— WHAT WE DO",
    title: "From Concept to Completion.",
    description:
      "We provide end-to-end interior solutions for businesses looking to create spaces that are functional, engaging and built to last.",
    servicesHeadline: "Complete Interior Solutions Under One Roof.",
    categories: [
      {
        id: "healthcare",
        title: "Healthcare Interiors",
        description:
          "Professional, welcoming and efficient environments designed around patients, staff and operational requirements.",
        image: "/images/healthcare.jpg",
      },
      {
        id: "corporate",
        title: "Corporate & Office Interiors",
        description:
          "Workspaces designed to support productivity, collaboration and the evolving needs of modern teams.",
        image: "/images/Corporate.png",
      },
      {
        id: "retail",
        title: "Retail Interiors",
        description:
          "Customer-focused environments that strengthen your brand presence and create engaging experiences.",
        image: "/images/retail_hd.jpg",
      },
      {
        id: "hospitality",
        title: "Hospitality Interiors",
        description:
          "Thoughtfully designed spaces that balance atmosphere, functionality and guest experience.",
        image: "/images/hospitality.jpg",
      },

      {
        id: "commercial",
        title: "Commercial Interiors",
        description:
          "Purpose-built environments that bring together functionality, identity and everyday business needs.",
        image: "/images/meeting_boardroom.jpg",
      },
      {
        id: "turnkey",
        title: "Turnkey Interior Solutions",
        description:
          "From initial planning and design to execution, coordination and final handover—we take care of the complete process.",
        image: "/images/coworking.jpg",
      },
    ],

    // 03 — OUR EXPERTISE & 10 — SERVICES PILLARS
    capabilities: [
      {
        id: "interior-design",
        title: "Interior Design",
        description:
          "From space planning and concepts to materials, finishes and detailed design, we create interiors that balance visual appeal with functionality.",
        icon: "PenTool",
      },
      {
        id: "space-planning",
        title: "Space Planning",
        description:
          "We optimize your available space to create efficient movement, productive work zones and better user experiences.",
        icon: "Layout",
      },
      {
        id: "design-build",
        title: "Design & Build",
        description:
          "Our integrated approach connects design and execution, helping reduce coordination between multiple agencies.",
        icon: "Compass",
      },
      {
        id: "turnkey-execution",
        title: "Turnkey Execution",
        description:
          "We take responsibility for the complete interior journey—from planning and design through execution and final handover.",
        icon: "ShieldCheck",
      },
      {
        id: "project-mgmt",
        title: "Project Management",
        description:
          "Our team manages site coordination, timelines, vendors and execution requirements throughout the project.",
        icon: "Building2",
      },
      {
        id: "furniture-finishing",
        title: "Furniture & Finishing",
        description:
          "We help bring the design together through carefully selected furniture, finishes, fixtures and detailing.",
        icon: "Armchair",
      },
    ],
  },

  // 04 — INDUSTRIES
  industries: {
    badge: "— INDUSTRIES",
    title: "Designed for Different Businesses. Built Around Different Needs.",
    description:
      "Every industry has its own challenges. Our approach adapts to the way your business operates.",
    items: [
      {
        id: "healthcare",
        title: "Healthcare",
        description:
          "Functional and reassuring spaces designed with people, efficiency and comfort in mind.",
        image: "/images/healthcare.jpg",
      },
      {
        id: "workplaces",
        title: "Workplaces",
        description:
          "Efficient, collaborative and inspiring environments designed for modern businesses.",
        image: "/images/Corporate.png",
      },
      {
        id: "retail",
        title: "Retail",
        description:
          "Brand-led spaces designed to attract customers and support better experiences.",
        image: "/images/retail_hd.jpg",
      },
      {
        id: "hospitality",
        title: "Hospitality",
        description:
          "Distinctive interiors that create memorable environments for guests.",
        image: "/images/hospitality.jpg",
      },

      {
        id: "commercial-spaces",
        title: "Commercial Spaces",
        description:
          "Flexible and purposeful environments built around business operations.",
        image: "/images/meeting_boardroom.jpg",
      },
      {
        id: "education",
        title: "Education",
        description:
          "Future-ready smart classrooms, libraries, and collaborative training environments.",
        image: "/images/education.jpg",
      },
      {
        id: "coworking",
        title: "Co-working Hubs",
        description:
          "Agile and community-oriented shared spaces designed for modern enterprise agility.",
        image: "/images/coworking.jpg",
      },
      {
        id: "residential",
        title: "Luxury Residential",
        description:
          "Bespoke private estates and penthouses blending architectural refinement with personal luxury.",
        image: "/images/residential.jpg",
      },
    ],
  },

  // 05 — OUR PROJECTS (with full Case Study structure from doc section 11)
  projects: {
    badge: "— OUR PROJECTS",
    title: "Spaces That Speak for Your Business.",
    description:
      "Workspaces that combine design, functionality and brand identity.",
    categories: [
      "All Projects",
      "Corporate Offices",
      "Executive Workspaces",
      "Meeting & Conference Rooms",
      "Reception Areas",
      "Collaboration Spaces",
      "Retail Spaces",
      "Hospitality Spaces",
      "Healthcare Spaces",
    ],
    items: [
      {
        id: "proj-1",
        title: "Tata Technology Innovation Center",
        category: "Corporate Offices",
        location: "Whitefield, Bengaluru",
        projectType: "Global R&D Headquarters",
        area: "48,000 sq.ft",
        scope: "Turnkey Design & Build, MEP, Acoustic Architecture",
        brief:
          "The client required an agile, technology-driven workplace for 450+ engineers that balances focused coding pods with high-energy collaborative break-outs.",
        approach:
          "We engineered an open radial floorplate zoned by acoustic thresholds, integrating biophilic green corridors, dynamic circadian lighting, and custom ergonomic workstations.",
        solution:
          "Delivered a seamless LEED Gold-compliant interior with private phone booths, reconfigurable town-hall amphitheater, and smart app-controlled boardroom climate systems.",
        highlights: [
          "Space Planning: Radial team clustering minimizing foot-traffic distractions",
          "Interior Design: Neutral concrete textures accented with warm brushed brass and wood",
          "Execution: Completed within 75 days with zero snag items at client handover",
          "Furniture & Finishes: Custom sound-dampening felt ceiling baffles & high-durability oak joinery",
          "Project Management: Full weekly milestone tracking and live client dashboard",
        ],
        result:
          "A signature innovation campus that increased cross-departmental collaboration by 35% and earned praise as the client's flagship Asian facility.",
        image: "/images/Corporate.png",
      },
      {
        id: "proj-2",
        title: "The Grand Pavilion Bistro & Lounge",
        category: "Hospitality Spaces",
        location: "Indiranagar, Bengaluru",
        projectType: "Experiential Dining & Cocktail Lounge",
        area: "12,500 sq.ft",
        scope:
          "Concept Design, Architectural Arches, Bespoke Furniture, Turnkey Fitout",
        brief:
          "Create a high-end dining destination that delivers intimate dining zones while maintaining fluid server circulation and theatrical ambient lighting.",
        approach:
          "Designed a sequence of terracotta arched colonnades that guide guests through distinct atmospheric transitions from daylight conservatory to evening lounge.",
        solution:
          "Engineered custom fluted timber booths, hand-finished acoustic plaster ceilings, and concealed low-glare warm LED cove fixtures.",
        highlights: [
          "Space Planning: Optimized 140-cover layout with clear 1.8m primary service corridors",
          "Interior Design: Warm earth tones, botanical textures, and fluted glass partitions",
          "Execution: Integrated commercial MEP kitchen ducting and fire suppression seamlessly",
          "Furniture & Finishes: Italian terrazzo flooring with inlaid brass dividing strips",
          "Project Management: Delivered 10 days ahead of the critical festive opening window",
        ],
        result:
          "One of the city's highest-rated dining spaces, combining acoustic comfort with unforgettable visual prestige.",
        image: "/images/hospitality.jpg",
      },
      {
        id: "proj-3",
        title: "Apex Premier Multi-Specialty Clinic",
        category: "Healthcare Spaces",
        location: "Banjara Hills, Hyderabad",
        projectType: "Outpatient Surgical & Diagnostic Center",
        area: "26,000 sq.ft",
        scope:
          "Medical Interior Architecture, Cleanroom HVAC, Turnkey Execution",
        brief:
          "Transform a raw commercial floorplate into an empathetic, calming healthcare facility that eliminates clinical anxiety while maintaining sterile clinical protocols.",
        approach:
          "Blended biophilic wood-look non-porous antimicrobial surfaces, indirect perimeter cove lighting, and curved corridor geometry for effortless gurney and wheelchair mobility.",
        solution:
          "Implemented HEPA-filtered positive pressure treatment rooms, private consultation chambers with 48dB acoustic isolation, and an expansive hotel-style patient lobby.",
        highlights: [
          "Space Planning: Strict segregation of clean and dirty utility flows",
          "Interior Design: Calming sage greens, organic curved reception counters, and natural timber tones",
          "Execution: Medical-grade vinyl seamless flooring with 150mm wall coving",
          "Furniture & Finishes: Antibacterial bleach-cleanable upholstery and solid-surface countertops",
          "Project Management: Complete statutory fire and bio-medical approval compliance",
        ],
        result:
          "A state-of-the-art medical center that reduced patient intake wait stress and streamlined staff operational efficiency.",
        image: "/images/healthcare.jpg",
      },
      {
        id: "proj-4",
        title: "Luxe Atelier Flagship Boutique",
        category: "Retail Spaces",
        location: "UB City, Bengaluru",
        projectType: "Luxury Couture Retail Showroom",
        area: "8,500 sq.ft",
        scope:
          "Luxury Retail Design, Custom Display Joinery, High-CRI Lighting",
        brief:
          "A premier fashion label sought an understated yet ultra-luxurious showroom that lets merchandise shine as museum pieces.",
        approach:
          "Minimalist gallery aesthetic using soft travertine stone, brushed titanium hanging rails, and museum-grade 98+ CRI directional track lighting.",
        solution:
          "Created VIP styling salons, expansive backlit vanity mirrors, and concealed cashier point-of-sale stations for an uninterrupted customer experience.",
        highlights: [
          "Space Planning: Curated experiential retail progression with unhurried customer flow",
          "Interior Design: Monochromatic ivory travertine and hand-applied limewash plaster",
          "Execution: Micron-tolerance metal fabrication and hidden hinge architectural doors",
          "Furniture & Finishes: Custom velvet lounge chairs and bespoke marble plinths",
          "Project Management: Strict night-shift execution compliant with mall operational rules",
        ],
        result:
          "The brand's highest revenue-generating store nationally within its first fiscal quarter.",
        image: "/images/retail_hd.jpg",
      },
      {
        id: "proj-5",
        title: "WeWork Collaborative Enterprise Floor",
        category: "Collaboration Spaces",
        location: "Koramangala, Bengaluru",
        projectType: "Enterprise Co-working Suite",
        area: "34,000 sq.ft",
        scope: "Fast-Track Turnkey Interior Fitout",
        brief:
          "Rapid turnaround interior fitout for an international Fortune 500 team needing 250 workstations and flexible collaboration zones.",
        approach:
          "Modular demountable glazed walls and raised access flooring for maximum future layout reconfiguration agility.",
        solution:
          "Delivered vibrant communal pantries, soundproofed phone pods, meeting rooms with 4K video conferencing, and ergonomic sit-stand desks.",
        highlights: [
          "Space Planning: 60/40 balance between focus workstations and collaborative lounges",
          "Interior Design: Industrial modern loft vibe with exposed architectural ducting and warm brick",
          "Execution: Fast-tracked 45-day turnkey delivery",
          "Furniture & Finishes: Commercial Grade 5 acoustic carpeting and magnetic writable glass boards",
          "Project Management: Zero downtime deployment ready for immediate day-one occupancy",
        ],
        result:
          "Turnkey handover delivered on time with 100% tenant satisfaction score.",
        image: "/images/coworking.jpg",
      },
      {
        id: "proj-6",
        title: "Executive Boardroom & Leadership Suite",
        category: "Meeting & Conference Rooms",
        location: "MG Road, Bengaluru",
        projectType: "C-Suite Boardroom & Private Executive Lounge",
        area: "6,800 sq.ft",
        scope: "Acoustic Architecture, Audio-Visual Integration, Fine Joinery",
        brief:
          "A boardroom worthy of global board meetings, equipped with invisible acoustic panelling and state-of-the-art telepresence.",
        approach:
          "Integrated acoustic leather wall panels, motorized concealed ceiling microphones, and an engineered 24-seater solid walnut conference table.",
        solution:
          "Flawless sound isolation (STC 55), smart motorized sheer blinds, and one-touch touchpanel scene controls.",
        highlights: [
          "Space Planning: Dedicated pre-function lounge, executive washroom, and catering pantry",
          "Interior Design: Rich walnut veneers, brushed bronze accents, and genuine leather seating",
          "Execution: Sub-millimeter joinery tolerance with concealed wire management",
          "Furniture & Finishes: Hand-stitched Herman Miller executive seating",
          "Project Management: High-security NDA compliance throughout construction",
        ],
        result:
          "An executive environment that projects authority, prestige, and quiet luxury.",
        image: "/images/meeting_boardroom.jpg",
      },
    ],
  },

  // 06 — WHY MANGI INTERIORS
  whyMangi: {
    badge: "— WHY MANGI INTERIORS",
    title: "One Team. One Vision. One Responsibility.",
    subtitle:
      "A successful interior project isn't only about how the final space looks. It's about how efficiently the entire journey comes together.",
    pillars: [
      {
        number: "01",
        title: "Business-Focused Thinking",
        description:
          "We understand that your interior is an investment in your business. Every design decision is made with functionality, experience and long-term value in mind.",
      },
      {
        number: "02",
        title: "End-to-End Execution",
        description:
          "From concept development and planning to site execution and handover, we manage the complete project journey under one unified roof.",
      },
      {
        number: "03",
        title: "Practical Design",
        description:
          "We create spaces that look refined while remaining practical, ergonomic, and durable for high-traffic everyday use.",
      },
      {
        number: "04",
        title: "Attention to Detail",
        description:
          "From materials and finishes to lighting, furniture and spatial flow, we focus on the subtle details that bring the complete space together.",
      },
      {
        number: "05",
        title: "Transparent Coordination",
        description:
          "A single dedicated team helps simplify communication, daily site updates, and decision-making throughout the project lifecycle.",
      },
      {
        number: "06",
        title: "Built Around You",
        description:
          "No two businesses are the same. We develop solutions tailor-made around your requirements, brand identity, space and objectives.",
      },
    ],
  },

  // 07 — OUR PROCESS
  process: {
    badge: "— OUR PROCESS",
    title: "A Better Space. A Simpler Process.",
    description:
      "We believe the interior journey should be structured, transparent and easy to navigate.",
    steps: [
      {
        step: "01",
        title: "DISCOVER",
        description:
          "We begin by understanding your business, space, objectives, requirements and budget.",
        icon: "Users",
        summary: "Site audits, workflow interviews & requirement blueprint",
      },
      {
        step: "02",
        title: "PLAN",
        description:
          "Our team develops the spatial strategy, scope and project direction based on your needs.",
        icon: "Layout",
        summary: "Zoning plans, circulation flow & preliminary BOQs",
      },
      {
        step: "03",
        title: "DESIGN",
        description:
          "We transform the plan into a detailed interior concept that reflects your brand and functional requirements.",
        icon: "PenTool",
        summary:
          "Photorealistic 3D VR renders, material palettes & MEP schematics",
      },
      {
        step: "04",
        title: "EXECUTE",
        description:
          "Our project team coordinates materials, vendors, contractors and site activities to bring the design to life.",
        icon: "Hammer",
        summary:
          "Precision civil works, custom joinery fabrication & daily site QC",
      },
      {
        step: "05",
        title: "HANDOVER",
        description:
          "Once the work is complete, we ensure the space is ready for you to move in and start operating.",
        icon: "KeyRound",
        summary: "Zero-snag signoff, deep cleaning & comprehensive warranty",
      },
    ],
  },

  // TRUSTED BY LEADING BRANDS / CLIENTS
  clients: {
    badge: "OUR CLIENTS",
    title: "Trusted by Leading Brands",
    description:
      "Long-term partnerships built on trust, transparency and exceptional delivery.",
    brands: [
      {
        name: "Apollo Hospitals",
        logo: "/images/logos/logo1.jpeg",
      },
      {
        name: "Sahyadri Hospitals",
        logo: "/images/logos/logo2.jpeg",
      },
      {
        name: "Manipal Hospitals",
        logo: "/images/logos/logo3.jpeg",
      },
      {
        name: "KIMS Hospitals",
        logo: "/images/logos/logo4.jpeg",
      },
      {
        name: "Manipal Academy of Higher Education",
        logo: "/images/logos/logo5.jpeg",
      },
      {
        name: "AMRI Hospitals",
        logo: "/images/logos/logo6.jpeg",
      },
      {
        name: "ZYETA",
        logo: "/images/logos/logo7.jpeg",
        invert: true,
      },
      {
        name: "JLL",
        logo: "/images/logos/logo8.jpeg",
      },
    ],
  },

  // 12 — CONTACT PAGE
  contactSection: {
    badge: "12 — CONTACT",
    title: "Let's Talk About Your Space.",
    subtext:
      "Planning a new office? Setting up a retail store? Expanding your business? Renovating an existing space?\nTell us what you're working on, and our team will get in touch to understand your requirements.",
    directCall: "+91 7742036962",
    directWhatsapp: "+91 7742036962",
    directEmail: "info@mangiinteriors.com",
    formTitle: "Let's Discuss Your Project.",
    submitText: "Submit & Get a Free Consultation",
  },

  // 13 — FINAL CTA
  finalCta: {
    title: "Your Space Has a Purpose. Let's Design It That Way.",
    description:
      "Whether you're starting from scratch, expanding your business or transforming an existing space, Mangi Interiors can help turn your vision into a finished environment.",
    tagline: "Design. Build. Inspire.",
    buttonText: "Book a Free Consultation",
    trustNote: "No obligation. Just a conversation about your project.",
    bgImage: "/images/meeting_boardroom.jpg",
  },

  // FOOTER (from Doc Section: FOOTER)
  footer: {
    brandName: "MANGI INTERIORS",
    tagline: "Design. Build. Inspire.",
    subTagline: "Commercial Interior Design & Turnkey Execution",
    quickLinks: [
      { label: "Home", href: "#hero" },
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Industries", href: "#industries" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    servicesList: [
      "Office Interiors",
      "Retail Interiors",
      "Hospitality Interiors",
      "Healthcare Interiors",
      "Commercial Interiors",
      "Turnkey Solutions",
    ],
    contactInfo: {
      phone: "+91 7742036962",
      email: "info@mangiinteriors.com",
      whatsapp: "+91 7742036962",
    },
    copyright: "© Mangi Interiors. All Rights Reserved.",
  },
};
