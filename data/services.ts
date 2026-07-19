import {
  Brush,
  Code2,
  Globe2,
  Layers3,
  Megaphone,
  Palette,
  Play,
  ShoppingBag,
  Wand2
} from "lucide-react";

export const agencyServices = [
  {
    slug: "website-design",
    title: "Website Design",
    eyebrow: "Premium web presence",
    summary:
      "High-impact websites, landing pages, portfolio sites, and conversion-focused digital experiences.",
    icon: Globe2,
    gradient: "from-[#ff7a00] to-[#ffb067]",
    deliverables: [
      "Landing page and business website UI",
      "Hero section and page storytelling",
      "Responsive mobile-first layouts",
      "CTA, trust, and enquiry flow design"
    ],
    outcomes: [
      "Sharper brand perception",
      "Clearer service communication",
      "More confident lead generation"
    ],
    process: [
      "Define offer and audience",
      "Create visual direction",
      "Build reusable sections",
      "Launch and refine live page"
    ]
  },
  {
    slug: "web-development",
    title: "Web Development",
    eyebrow: "Fast production builds",
    summary:
      "Next.js, React, Tailwind, Framer Motion, forms, SEO metadata, and Vercel-ready implementation.",
    icon: Code2,
    gradient: "from-[#0d65ff] to-[#00f0a8]",
    deliverables: [
      "Next.js and React development",
      "Tailwind CSS responsive implementation",
      "Framer Motion interactions",
      "Vercel deployment and build checks"
    ],
    outcomes: [
      "Fast live deployment",
      "Clean maintainable code",
      "Smooth responsive experience"
    ],
    process: [
      "Audit design and content",
      "Build page components",
      "Test responsive states",
      "Deploy production version"
    ]
  },
  {
    slug: "ui-ux-systems",
    title: "UI/UX Systems",
    eyebrow: "Product interfaces",
    summary:
      "Dashboards, SaaS screens, mobile app UI, prototypes, and digital product journeys that feel effortless.",
    icon: Layers3,
    gradient: "from-[#8f7aff] to-[#0d65ff]",
    deliverables: [
      "Dashboard and app screen concepts",
      "User flow and information hierarchy",
      "Design system foundations",
      "Prototype-ready UI sections"
    ],
    outcomes: [
      "Cleaner user journeys",
      "Better product clarity",
      "Scalable interface language"
    ],
    process: [
      "Map user actions",
      "Structure key screens",
      "Design UI system",
      "Prepare development handoff"
    ]
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    eyebrow: "Memorable visual systems",
    summary:
      "Logo direction, typography, color systems, social identity, and launch-ready brand kits.",
    icon: Palette,
    gradient: "from-[#ff4d8d] to-[#ff8b1a]",
    deliverables: [
      "Logo direction and usage ideas",
      "Color and typography system",
      "Social profile visual identity",
      "Brand kit for web and marketing"
    ],
    outcomes: [
      "More recognizable presence",
      "Consistent visuals everywhere",
      "Professional first impression"
    ],
    process: [
      "Discover brand personality",
      "Explore visual routes",
      "Refine identity system",
      "Package final assets"
    ]
  },
  {
    slug: "marketing-creatives",
    title: "Marketing Creatives",
    eyebrow: "Campaign-ready visuals",
    summary:
      "Ads, banners, campaign graphics, thumbnails, posters, and high-impact launch visuals.",
    icon: Megaphone,
    gradient: "from-[#ff7a00] to-[#f15a00]",
    deliverables: [
      "Meta and Google ad creatives",
      "Launch campaign visuals",
      "Banners, thumbnails, and posters",
      "WhatsApp and social share creatives"
    ],
    outcomes: [
      "Better campaign recall",
      "Stronger visual consistency",
      "Faster creative production"
    ],
    process: [
      "Define campaign message",
      "Create visual concepts",
      "Adapt for channels",
      "Deliver ready-to-post assets"
    ]
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    eyebrow: "Business collateral",
    summary:
      "Brochures, decks, flyers, print assets, and business collateral with premium polish.",
    icon: Brush,
    gradient: "from-[#00f0a8] to-[#d5ff65]",
    deliverables: [
      "Brochure and flyer design",
      "Pitch and presentation decks",
      "Business posters and banners",
      "Print-ready and digital formats"
    ],
    outcomes: [
      "Polished business material",
      "Clear message hierarchy",
      "Professional campaign support"
    ],
    process: [
      "Collect content and size",
      "Design layout system",
      "Refine copy hierarchy",
      "Export final files"
    ]
  },
  {
    slug: "no-code-mvps",
    title: "No-Code MVPs",
    eyebrow: "Fast business tools",
    summary:
      "Lead funnels, forms, microsites, workflow pages, and quick-launch digital tools.",
    icon: Wand2,
    gradient: "from-[#d5ff65] to-[#00f0a8]",
    deliverables: [
      "Lead capture pages",
      "Business enquiry workflows",
      "MVP microsites",
      "Simple automation-ready structures"
    ],
    outcomes: [
      "Faster validation",
      "Lower launch complexity",
      "Useful digital workflow"
    ],
    process: [
      "Define MVP goal",
      "Design simple flow",
      "Build usable version",
      "Launch and iterate"
    ]
  },
  {
    slug: "motion-video-assets",
    title: "Motion & Video Assets",
    eyebrow: "Movement that sells",
    summary:
      "Animated web sections, UI motion, simple promo videos, and scroll-driven visual energy.",
    icon: Play,
    gradient: "from-[#0d65ff] to-[#8f7aff]",
    deliverables: [
      "Animated web sections",
      "Micro-interactions and transitions",
      "Simple launch reels",
      "Motion direction for campaigns"
    ],
    outcomes: [
      "More premium digital feel",
      "Higher attention retention",
      "Better presentation energy"
    ],
    process: [
      "Find motion opportunities",
      "Create movement language",
      "Implement animation",
      "Optimize for performance"
    ]
  },
  {
    slug: "ecommerce-ui",
    title: "Ecommerce UI",
    eyebrow: "Stores that convert",
    summary:
      "Product pages, storefront layouts, offer pages, and conversion-focused shopping journeys.",
    icon: ShoppingBag,
    gradient: "from-[#ff8b1a] to-[#0d65ff]",
    deliverables: [
      "Product landing page design",
      "Storefront UI sections",
      "Offer and bundle pages",
      "Conversion-first CTA flow"
    ],
    outcomes: [
      "Clearer product presentation",
      "Smoother shopping path",
      "Better sales-page structure"
    ],
    process: [
      "Understand product offer",
      "Plan page journey",
      "Design trust and CTA sections",
      "Build ready-to-launch UI"
    ]
  }
] as const;

export type AgencyService = (typeof agencyServices)[number];
