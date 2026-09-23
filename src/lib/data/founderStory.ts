export type StoryChapter = {
  tag: string;
  title: string;
  body: string;
  imgOrder: 0 | 1;
  imgLabel: string;
  tags?: string[];
};

export const heroPhotos = {
  before: { src: "/images/founder/founder-before.webp", alt: "Before" },
  now: { src: "/images/founder/founder-now.webp", alt: "Now" },
};

/** "Her Story" timeline — the reference marks every chapter image as an explicit, un-filled placeholder. */
export const storyChapters: StoryChapter[] = [
  {
    tag: "Chapter 1",
    title: "Before",
    imgOrder: 0,
    imgLabel: "Photo · 1200×900",
    body: "I was 99 kg, diabetic, dealing with a fatty liver, and living with a fibroid so large it eventually needed surgery to remove. I felt unhealthy, low on energy, and uncomfortable in my own body. I knew something needed to change, but I didn’t know where to start.",
  },
  {
    tag: "Chapter 2",
    title: "The Decision",
    imgOrder: 1,
    imgLabel: "Photo · 1200×900",
    body: "There wasn’t one dramatic moment. There was a quiet decision: something had to change, and it had to start with me.",
  },
  {
    tag: "Chapter 3",
    title: "The Process",
    imgOrder: 0,
    imgLabel: "Photo · 1200×900",
    body: "It wasn’t magic, and it wasn’t one product. It was learning, structure, and showing up on the days it was hard.",
    tags: ["Learning", "Structure", "Nutrition", "Lifestyle Changes", "Consistency", "Support", "Accountability", "Patience"],
  },
  {
    tag: "Chapter 4",
    title: "The Transformation",
    imgOrder: 1,
    imgLabel: "Photo · 1200×900",
    body: "The change happened slowly, through consistency over time — not overnight. Individual results vary.",
  },
];

export type StoryCard = {
  isPhoto: boolean;
  photo?: { src: string; alt: string };
  photoLabel?: string;
  bg: string;
  textColor: string;
  eyebrow?: string;
  title: string;
  titleSize: string;
  sub?: string;
  labels?: string[];
  hasCta?: boolean;
  cta?: string;
  ctaHref?: string;
  ctaBg?: string;
  ctaColor?: string;
  hasCta2?: boolean;
  cta2?: string;
  cta2Href?: string;
};

const cream = "oklch(98% 0.01 85)";
const forest = "oklch(28% 0.05 145)";

export function buildHomeStoryCards(waHref: string): StoryCard[] {
  return [
    {
      isPhoto: true,
      photo: { src: heroPhotos.before.src, alt: "Before" },
      bg: "oklch(90% 0.015 85)",
      textColor: cream,
      eyebrow: "My Transformation",
      title: "I Was Once 99 KG.",
      titleSize: "clamp(26px,7vw,32px)",
      sub: "This was my starting point — diabetes, a fatty liver, and a fibroid that needed surgery.",
      hasCta: true,
      cta: "Book Free Consultation",
      ctaHref: "#consultation",
      ctaBg: cream,
      ctaColor: forest,
    },
    {
      isPhoto: false,
      bg: "oklch(90% 0.03 145)",
      textColor: "oklch(22% 0.02 85)",
      eyebrow: "The Journey",
      title: "",
      titleSize: "0px",
      labels: ["Nutrition", "Consistency", "Accountability"],
    },
    {
      isPhoto: true,
      photo: { src: heroPhotos.now.src, alt: "Today" },
      bg: "oklch(90% 0.015 85)",
      textColor: cream,
      eyebrow: "Today",
      title: "A Healthier, Fitter Lifestyle.",
      titleSize: "26px",
      hasCta: true,
      cta: "See My Story",
      ctaHref: "#story",
      ctaBg: cream,
      ctaColor: forest,
    },
    {
      isPhoto: false,
      bg: forest,
      textColor: cream,
      title: "You Don’t Have To Do It Alone.",
      titleSize: "26px",
      hasCta: true,
      cta: "Book A Free Consultation",
      ctaHref: "#consultation",
      ctaBg: cream,
      ctaColor: forest,
      hasCta2: true,
      cta2: "Chat On WhatsApp",
      cta2Href: waHref,
    },
  ];
}

export function buildStartStoryCards(waHref: string): StoryCard[] {
  return [
    {
      isPhoto: true,
      photo: { src: heroPhotos.before.src, alt: "Before" },
      bg: "oklch(90% 0.015 85)",
      textColor: cream,
      eyebrow: "My Transformation",
      title: "I Was Once 99 KG.",
      titleSize: "clamp(26px,7vw,32px)",
      sub: "I knew something had to change.",
      hasCta: true,
      cta: "Book A Free Consultation",
      ctaHref: "#lead-form",
      ctaBg: cream,
      ctaColor: forest,
    },
    {
      isPhoto: true,
      photo: { src: heroPhotos.before.src, alt: "Before" },
      bg: "oklch(90% 0.015 85)",
      textColor: cream,
      eyebrow: "Before",
      title: "99 KG",
      titleSize: "40px",
      sub: "This was my starting point.",
    },
    {
      isPhoto: false,
      bg: "oklch(90% 0.03 145)",
      textColor: "oklch(22% 0.02 85)",
      eyebrow: "The Journey",
      title: "",
      titleSize: "0px",
      labels: ["Nutrition", "Routine", "Consistency", "Accountability"],
    },
    {
      isPhoto: true,
      photo: { src: heroPhotos.now.src, alt: "Today" },
      bg: "oklch(90% 0.015 85)",
      textColor: cream,
      eyebrow: "Today",
      title: "A Healthier, Fitter Lifestyle.",
      titleSize: "26px",
    },
    {
      isPhoto: false,
      bg: forest,
      textColor: cream,
      title: "You Don’t Have To Do It Alone.",
      titleSize: "26px",
      hasCta: true,
      cta: "Book A Free Transformation Consultation",
      ctaHref: "#lead-form",
      ctaBg: cream,
      ctaColor: forest,
      hasCta2: true,
      cta2: "Chat On WhatsApp",
      cta2Href: waHref,
    },
  ];
}

export type HeroSlide = { photo: { src: string; alt: string }; title?: string; body?: string; badge?: string };

export const homeHeroSlides: HeroSlide[] = [
  {
    photo: heroPhotos.before,
    title: "The starting point most people hide.",
    body: "99 kg, low energy, and not sure where to begin.",
    badge: "Then — 99 KG",
  },
  {
    photo: heroPhotos.now,
    title: "Built slowly. Kept honestly.",
    body: "Structure, nutrition, and accountability — over time, not overnight.",
    badge: "Now — Ongoing",
  },
];

export const startHeroSlides: HeroSlide[] = [{ photo: heroPhotos.before }, { photo: heroPhotos.now }];
