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
  logo: "/images/brand/healing-foundation-logo.png",
  ogImage: "/images/centre/front-sign.jpeg",
  phone: "+91 78768 27691",
  secondaryPhone: "+91 98160 98191",
  phoneNumbers: ["+91 78768 27691", "+91 98160 98191"],
  phoneHref: "tel:+917876827691",
  secondaryPhoneHref: "tel:+919816098191",
  whatsapp: "https://wa.me/917876827691",
  email: "healingfoundation9@gmail.com",
  emailHref: "mailto:healingfoundation9@gmail.com",
  address: "Mehta Market, Opp. Tata Motors, Kumarhatti, Solan, H.P.",
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
  image: "/images/centre/exterior-night-wide.jpeg",
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
    image: "/images/centre/shared-room.jpeg"
  },
  {
    title: "Therapy & Consultation Rooms",
    text: "Quiet clinical spaces for individual therapy, psychiatric reviews, and family sessions.",
    image: "/images/centre/counselling-room.jpeg"
  },
  {
    title: "Group Therapy Hall",
    text: "Open session areas for psychoeducation, guided discussion, and peer-supported recovery work.",
    image: "/images/centre/group-therapy-session.jpeg"
  },
  {
    title: "Reception & Common Areas",
    text: "Clean, welcoming spaces for admissions, coordination, reading, and daily routine.",
    image: "/images/centre/reception-lounge.jpeg"
  },
  {
    title: "Consultation Office",
    text: "Private office spaces for reviews, care planning, family conversations, and documentation.",
    image: "/images/centre/consultation-office.jpeg"
  },
  {
    title: "Movement & Fitness Zone",
    text: "Gentle fitness, walking routines, and guided movement to rebuild energy and confidence.",
    image: "/images/centre/wellness-yoga-hall.jpeg"
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
    title: "Healing Foundation Residence",
    image: "/images/centre/front-sign.jpeg"
  },
  {
    title: "Residential Building",
    image: "/images/centre/exterior-day-team.jpeg"
  },
  {
    title: "Night View",
    image: "/images/centre/exterior-night-wide.jpeg"
  },
  {
    title: "Reception Lounge",
    image: "/images/centre/reception-lounge.jpeg"
  },
  {
    title: "Residential Dormitory",
    image: "/images/centre/residential-dorm.jpeg"
  },
  {
    title: "Shared Room",
    image: "/images/centre/shared-room.jpeg"
  },
  {
    title: "Counselling Room",
    image: "/images/centre/counselling-room.jpeg"
  },
  {
    title: "Consultation Office",
    image: "/images/centre/consultation-office.jpeg"
  },
  {
    title: "Group Therapy Session",
    image: "/images/centre/group-therapy-session.jpeg"
  },
  {
    title: "Wellness & Yoga Hall",
    image: "/images/centre/wellness-yoga-hall.jpeg"
  },
  {
    title: "Awareness Session",
    image: "/images/centre/awareness-session.jpeg"
  },
  {
    title: "Outdoor Activity",
    image: "/images/centre/outdoor-activity.jpeg"
  },
  {
    title: "Community Celebration",
    image: "/images/centre/community-celebration.jpeg"
  },
  {
    title: "Recovery Education",
    image: "/images/centre/recovery-stages-poster.jpeg"
  },
  {
    title: "Stair Lobby",
    image: "/images/centre/stair-lobby.jpeg"
  },
  {
    title: "Care Team",
    image: "/images/centre/team-office-landscape.jpeg"
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
    image: "/images/centre/consultation-office.jpeg"
  },
  {
    slug: "family-role-in-recovery",
    title: "The Role of Family in Sustainable Recovery",
    excerpt:
      "Why education, boundaries, and compassionate communication matter during and after treatment.",
    date: "2026-02-03",
    image: "/images/centre/group-therapy-session.jpeg"
  },
  {
    slug: "routine-and-wellness",
    title: "Why Daily Routine Supports Addiction Recovery",
    excerpt:
      "Sleep, nutrition, therapy, movement, and reflection can create stability during early recovery.",
    date: "2026-03-18",
    image: "/images/centre/wellness-yoga-hall.jpeg"
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
