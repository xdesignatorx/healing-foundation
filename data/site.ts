import {
  BadgeCheck,
  BedDouble,
  Brain,
  Cigarette,
  Dumbbell,
  HeartHandshake,
  Home,
  Leaf,
  Moon,
  Salad,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Wind
} from "lucide-react";

export const siteConfig = {
  name: "Healing Foundation",
  tagline: "Private rehabilitation, compassionate recovery, refined care.",
  description:
    "A premium residential rehabilitation and wellness centre offering addiction recovery, mental health support, family care, and holistic healing in a calm, private setting.",
  url: "https://healing-foundation.vercel.app",
  ogImage:
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
  phone: "+91 78768 27691",
  secondaryPhone: "+91 98160 98191",
  phoneNumbers: ["+91 78768 27691", "+91 98160 98191"],
  phoneHref: "tel:+917876827691",
  secondaryPhoneHref: "tel:+919816098191",
  whatsapp: "https://wa.me/917876827691",
  email: "healingfoundation9@gmail.com",
  emailHref: "mailto:healingfoundation9@gmail.com",
  address: "Private Wellness Estate, Near Green Valley Road, India",
  hours: "Admissions support available 24/7"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const hero = {
  eyebrow: "Premium Recovery Residence",
  title: "Discreet, dignified rehabilitation in a restorative wellness setting.",
  copy:
    "Healing Foundation blends evidence-informed clinical care with serene living, personalized therapy, and family-inclusive recovery planning.",
  image:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
  stats: [
    { value: "24/7", label: "clinical support" },
    { value: "1:1", label: "care planning" },
    { value: "Private", label: "residential setting" }
  ]
};

export const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Confidential Admissions",
    text: "Every enquiry is handled with discretion, clarity, and respect for the family journey."
  },
  {
    icon: BadgeCheck,
    title: "Structured Care",
    text: "Recovery plans combine therapy, routine, wellness practices, and relapse-prevention work."
  },
  {
    icon: HeartHandshake,
    title: "Family Guidance",
    text: "Families receive education and support so healing can continue beyond the centre."
  }
];

export const treatments = [
  {
    slug: "alcohol-dependence",
    title: "Alcohol Dependence Recovery",
    summary:
      "Medically guided support, counseling, habit restructuring, and relapse-prevention planning.",
    icon: Leaf
  },
  {
    slug: "substance-use",
    title: "Substance Use Treatment",
    summary:
      "Personalized recovery pathways for drug dependence with therapeutic and wellness support.",
    icon: ShieldCheck
  },
  {
    slug: "dual-diagnosis",
    title: "Dual Diagnosis Care",
    summary:
      "Integrated support for addiction alongside anxiety, depression, trauma, or mood concerns.",
    icon: Brain
  },
  {
    slug: "family-therapy",
    title: "Family Therapy",
    summary:
      "Guided conversations and education to rebuild trust, boundaries, and communication.",
    icon: Users
  },
  {
    slug: "aftercare",
    title: "Aftercare Planning",
    summary:
      "A practical continuity plan designed for life after residential care.",
    icon: HeartHandshake
  },
  {
    slug: "wellness-restoration",
    title: "Wellness Restoration",
    summary:
      "Yoga, mindful movement, nutrition, rest, and daily rhythm to support whole-person healing.",
    icon: Sparkles
  },
  {
    slug: "nicotine-dependence",
    title: "Nicotine & Habit Recovery",
    summary:
      "Supportive counseling and routine-building for residents working through nicotine dependence and compulsive habits.",
    icon: Cigarette
  },
  {
    slug: "stress-burnout",
    title: "Stress & Burnout Care",
    summary:
      "A calm residential reset focused on rest, emotional regulation, guided therapy, and healthy daily structure.",
    icon: Moon
  },
  {
    slug: "mindfulness-therapy",
    title: "Mindfulness-Based Therapy",
    summary:
      "Breathwork, reflective practices, and therapist-guided emotional awareness to support steadier recovery.",
    icon: Wind
  }
];

export const facilities = [
  {
    title: "Private Residential Suites",
    text: "Calm rooms designed for rest, privacy, and uninterrupted recovery.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Therapy & Consultation Rooms",
    text: "Quiet clinical spaces for individual therapy, psychiatric reviews, and family sessions.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Gardens & Mindfulness Areas",
    text: "Nature-led spaces for reflection, movement, journaling, and guided mindfulness.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Nutrition-Focused Dining",
    text: "Balanced meals that support physical restoration and stable daily routines.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Medical Observation",
    text: "Regular wellness monitoring and coordinated reviews where clinical oversight is required.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Movement & Fitness Zone",
    text: "Gentle fitness, walking routines, and guided movement to rebuild energy and confidence.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
  }
];

export const megaMenu = {
  treatments: [
    {
      label: "Alcohol Recovery",
      href: "/treatments",
      description: "Structured care for alcohol dependence and relapse prevention.",
      icon: Leaf
    },
    {
      label: "Drug De-Addiction",
      href: "/treatments",
      description: "Residential support for substance use recovery.",
      icon: ShieldCheck
    },
    {
      label: "Dual Diagnosis",
      href: "/treatments",
      description: "Integrated care for addiction with anxiety, depression, or trauma concerns.",
      icon: Brain
    },
    {
      label: "Family Therapy",
      href: "/treatments",
      description: "Guided family support, communication, and recovery education.",
      icon: Users
    },
    {
      label: "Aftercare Planning",
      href: "/treatments",
      description: "A continuity plan for life after residential treatment.",
      icon: HeartHandshake
    },
    {
      label: "Wellness Therapies",
      href: "/treatments",
      description: "Mindfulness, yoga, nutrition, and restorative daily rhythm.",
      icon: Sparkles
    }
  ],
  facilities: [
    {
      label: "Private Rooms",
      href: "/facilities",
      description: "Comfortable residential suites for quiet recovery.",
      icon: BedDouble
    },
    {
      label: "Clinical Spaces",
      href: "/facilities",
      description: "Therapy rooms designed for privacy and emotional safety.",
      icon: Stethoscope
    },
    {
      label: "Wellness Residence",
      href: "/facilities",
      description: "Calm gardens, mindful corners, and nature-led spaces.",
      icon: Home
    },
    {
      label: "Nutrition Support",
      href: "/facilities",
      description: "Balanced meals for physical restoration and routine.",
      icon: Salad
    },
    {
      label: "Fitness & Movement",
      href: "/facilities",
      description: "Gentle movement, breathwork, and healthy activity.",
      icon: Dumbbell
    },
    {
      label: "24/7 Support",
      href: "/contact",
      description: "Admissions support and guidance for families.",
      icon: ShieldCheck
    }
  ]
};

export const gallery = [
  {
    title: "Arrival Courtyard",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Quiet Lounge",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Wellness Studio",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Garden Walks",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Dining Room",
    image:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Reflection Spaces",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
  }
];

export const testimonials = [
  {
    quote:
      "The team treated our family with dignity from the first call. The process felt calm, private, and deeply human.",
    name: "Family member",
    role: "Alcohol recovery program"
  },
  {
    quote:
      "The structure helped me feel safe again. Therapy, routine, and the environment all worked together.",
    name: "Former resident",
    role: "Residential care"
  },
  {
    quote:
      "We finally understood how to support recovery at home. The family sessions were transformative.",
    name: "Parent",
    role: "Family support"
  }
];

export const faqs = [
  {
    question: "Is the admission process confidential?",
    answer:
      "Yes. Enquiries, assessments, and admissions are handled privately by a trained care coordinator."
  },
  {
    question: "Can families speak with the care team?",
    answer:
      "Yes. Family involvement is encouraged where clinically appropriate, with clear boundaries and scheduled updates."
  },
  {
    question: "Do you provide detox?",
    answer:
      "Detox needs are assessed before admission. Where medical detox is required, the team will guide the safest next step."
  },
  {
    question: "How long does treatment take?",
    answer:
      "Length of stay depends on the person's needs, clinical assessment, and recovery goals. A care plan is discussed before admission."
  }
];

export const blogPosts = [
  {
    slug: "choosing-private-rehab-centre",
    title: "How to Choose a Private Rehab Centre With Confidence",
    excerpt:
      "A practical guide to evaluating care quality, privacy, family support, and aftercare planning.",
    date: "2026-01-12",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "family-role-in-recovery",
    title: "The Role of Family in Sustainable Recovery",
    excerpt:
      "Why education, boundaries, and compassionate communication matter during and after treatment.",
    date: "2026-02-03",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "routine-and-wellness",
    title: "Why Daily Routine Supports Addiction Recovery",
    excerpt:
      "Sleep, nutrition, therapy, movement, and reflection can create stability during early recovery.",
    date: "2026-03-18",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
  }
];

export const processSteps = [
  {
    title: "Private enquiry",
    text: "Speak with an admissions coordinator and share the situation in confidence."
  },
  {
    title: "Clinical assessment",
    text: "The care team reviews needs, safety considerations, goals, and suitable treatment options."
  },
  {
    title: "Residential care",
    text: "A structured daily program begins with therapy, wellness practices, and progress reviews."
  },
  {
    title: "Aftercare pathway",
    text: "Before discharge, residents receive a realistic recovery plan for home and community life."
  }
];

export const values = [
  "Discretion",
  "Clinical clarity",
  "Human warmth",
  "Restorative environment",
  "Family inclusion",
  "Long-term recovery"
];

export const inclusions = [
  { icon: BedDouble, title: "Residential comfort" },
  { icon: Brain, title: "Therapeutic depth" },
  { icon: Leaf, title: "Holistic wellness" },
  { icon: Users, title: "Family support" }
];
