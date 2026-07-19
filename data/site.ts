import {
  BadgeCheck,
  Brush,
  Code2,
  Globe2,
  LayoutDashboard,
  Megaphone,
  Palette,
  PenTool,
  Play,
  Rocket,
  ShoppingBag,
  Sparkles,
  Wand2
} from "lucide-react";

export const siteConfig = {
  name: "DesignstryX",
  tagline: "Design, development, and digital launch studio.",
  description:
    "DesignstryX is a Udyam-registered design and development agency creating premium websites, UI/UX, brand identity, marketing creatives, and launch-ready digital experiences.",
  url: "https://healing-foundation.vercel.app",
  logo: "/images/brand/designstryx-logo.png",
  ogImage: "/images/brand/designstryx-logo.png",
  phone: "+91 98169 44777",
  secondaryPhone: "+91 98160 07464",
  phoneNumbers: ["+91 98169 44777", "+91 98160 07464"],
  phoneHref: "tel:+919816944777",
  secondaryPhoneHref: "tel:+919816007464",
  whatsapp: "https://wa.me/919816944777",
  email: "Designstryx@gmail.com",
  secondaryEmail: "nmhrkbharatsharma@gmail.com",
  emailHref: "mailto:Designstryx@gmail.com",
  secondaryEmailHref: "mailto:nmhrkbharatsharma@gmail.com",
  address: "Solan, Himachal Pradesh, India",
  hours: "Project enquiries open all week",
  registration: "Udyam registered business"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const hero = {
  eyebrow: "Creative Technology Studio",
  title: "Premium design and development for ambitious digital brands.",
  copy:
    "DesignstryX creates websites, product interfaces, brand systems, and marketing creatives with a polished, modern launch experience.",
  image: "/images/centre/ethos-team.png",
  stats: [
    { value: "UI/UX", label: "design systems" },
    { value: "Next.js", label: "web builds" },
    { value: "Vercel", label: "deployment" }
  ]
};

export const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Udyam Registered",
    text: "DesignstryX is registered on the Udyam portal for professional business identity."
  },
  {
    icon: Rocket,
    title: "Launch Focused",
    text: "Every project is planned around speed, clarity, conversion, and deployment readiness."
  },
  {
    icon: Sparkles,
    title: "Premium Finish",
    text: "Elegant typography, smooth motion, responsive layouts, and modern visual systems."
  }
];

export const treatments = [
  {
    slug: "website-design",
    title: "Website Design",
    summary: "Premium websites, landing pages, portfolio pages, and conversion-focused visual systems.",
    icon: Globe2
  },
  {
    slug: "web-development",
    title: "Web Development",
    summary: "Next.js, React, Tailwind CSS, Framer Motion, SEO metadata, forms, and Vercel deployment.",
    icon: Code2
  },
  {
    slug: "product-ui",
    title: "Product & App UI",
    summary: "Dashboards, SaaS screens, mobile app UI, design systems, and interactive prototypes.",
    icon: LayoutDashboard
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    summary: "Logo direction, typography, color systems, brand kits, and social identity assets.",
    icon: Palette
  },
  {
    slug: "marketing-creatives",
    title: "Marketing Creatives",
    summary: "Ad creatives, campaign graphics, launch assets, banners, thumbnails, and posters.",
    icon: Megaphone
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    summary: "Brochures, presentation decks, business creatives, print-ready and digital assets.",
    icon: Brush
  },
  {
    slug: "no-code",
    title: "No-Code Builds",
    summary: "Fast MVP pages, automation-ready forms, business tools, and content-driven microsites.",
    icon: Wand2
  },
  {
    slug: "motion-video",
    title: "Motion & Video Assets",
    summary: "UI motion, animated web sections, product reels, and lightweight launch videos.",
    icon: Play
  },
  {
    slug: "ecommerce",
    title: "Ecommerce Stores",
    summary: "Product pages, storefront UI, offer landing pages, and conversion-ready shopping experiences.",
    icon: ShoppingBag
  }
];

export const facilities = [
  {
    title: "Strategy Sprint",
    text: "Offer positioning, page flow, audience clarity, and conversion goals before design begins.",
    image: "/images/centre/consultation-office.jpeg"
  },
  {
    title: "Premium UI System",
    text: "Typography, spacing, colors, reusable sections, and responsive layouts for a consistent brand.",
    image: "/images/centre/ethos-team.png"
  },
  {
    title: "Deployment Setup",
    text: "Vercel hosting, forms, metadata, performance checks, and domain guidance.",
    image: "/images/centre/team-office-landscape.jpeg"
  },
  {
    title: "Creative Production",
    text: "Social creatives, launch assets, banners, decks, and campaign visuals for marketing.",
    image: "/images/centre/awareness-session.jpeg"
  },
  {
    title: "Frontend Build",
    text: "Clean Next.js and Tailwind implementation with responsive UI and smooth interactions.",
    image: "/images/centre/counselling-room.jpeg"
  },
  {
    title: "Growth Support",
    text: "Ongoing updates, polish, new sections, SEO basics, and conversion improvements.",
    image: "/images/centre/reception-lounge.jpeg"
  }
];

export const megaMenu = {
  treatments: treatments.slice(0, 6).map((item) => ({
    label: item.title,
    href: `/services/${item.slug}`,
    description: item.summary,
    icon: item.icon
  })),
  facilities: facilities.slice(0, 6).map((item, index) => ({
    label: item.title,
    href: index < 3 ? "/#work" : "/#process",
    description: item.text,
    icon: [PenTool, LayoutDashboard, Rocket, Brush, Code2, Sparkles][index]
  }))
};

export const gallery = [
  { title: "Website Design", image: "/images/centre/ethos-team.png" },
  { title: "UI Planning", image: "/images/centre/consultation-office.jpeg" },
  { title: "Creative Workshop", image: "/images/centre/awareness-session.jpeg" },
  { title: "Team Collaboration", image: "/images/centre/team-office-landscape.jpeg" },
  { title: "Frontend Build", image: "/images/centre/counselling-room.jpeg" },
  { title: "Launch Review", image: "/images/centre/reception-lounge.jpeg" }
];

export const testimonials = [
  {
    quote:
      "DesignstryX turns rough ideas into polished digital experiences that feel premium from the first screen.",
    name: "Founder",
    role: "Website design project"
  },
  {
    quote:
      "The process is clear, fast, and practical. Design, build, and launch are handled without confusion.",
    name: "Business owner",
    role: "Landing page launch"
  },
  {
    quote:
      "A strong eye for modern UI, spacing, and responsive design. The final site felt sharp and trustworthy.",
    name: "Startup client",
    role: "Product UI support"
  }
];

export const faqs = [
  {
    question: "What services does DesignstryX provide?",
    answer:
      "DesignstryX provides website design, web development, UI/UX, brand identity, graphic design, marketing creatives, motion assets, ecommerce pages, and no-code style business tools."
  },
  {
    question: "Can you build the full site and make it live?",
    answer:
      "Yes. DesignstryX can plan, design, develop, test, deploy on Vercel, and guide domain setup for a complete website launch."
  },
  {
    question: "Is DesignstryX registered?",
    answer:
      "Yes. DesignstryX is registered on the Udyam portal. The certificate can be added to the website later as a trust document."
  },
  {
    question: "How can I start a project?",
    answer:
      "Call, WhatsApp, or email with your business type, target audience, services, reference links, and deadline."
  }
];

export const blogPosts = [
  {
    slug: "premium-website-checklist",
    title: "What Makes a Website Feel Premium?",
    excerpt: "A practical checklist covering typography, spacing, motion, trust, content, and conversion design.",
    date: "2026-07-19",
    image: "/images/centre/ethos-team.png"
  },
  {
    slug: "landing-page-that-converts",
    title: "How to Plan a Landing Page That Converts",
    excerpt: "Offer clarity, sections, social proof, CTA placement, and page rhythm for stronger leads.",
    date: "2026-07-19",
    image: "/images/centre/consultation-office.jpeg"
  },
  {
    slug: "why-vercel-for-business-sites",
    title: "Why Vercel Works Well for Modern Business Websites",
    excerpt: "Fast deployments, stable previews, clean hosting, and simple workflows for professional web projects.",
    date: "2026-07-19",
    image: "/images/centre/team-office-landscape.jpeg"
  }
];

export const processSteps = [
  {
    title: "Discovery",
    text: "Understand your business, audience, offer, competitors, references, and launch goal."
  },
  {
    title: "Design Direction",
    text: "Shape the visual system, page flow, hero concept, CTA strategy, and responsive structure."
  },
  {
    title: "Development",
    text: "Build the website with clean components, smooth motion, SEO metadata, and fast performance."
  },
  {
    title: "Launch & Support",
    text: "Deploy on Vercel, test the live site, guide domain setup, and support post-launch changes."
  }
];

export const values = [
  "Premium design",
  "Fast delivery",
  "Clean development",
  "Responsive UI",
  "Conversion clarity",
  "Launch support"
];

export const inclusions = [
  { icon: Globe2, title: "Website design" },
  { icon: Code2, title: "Frontend development" },
  { icon: Palette, title: "Brand identity" },
  { icon: Megaphone, title: "Marketing creatives" }
];
