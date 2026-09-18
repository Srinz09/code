export type StoryChapter = {
  tag: string;
  title: string;
  body: string;
  image?: { src: string; alt: string };
  imagePlaceholderLabel?: string;
  tags?: string[];
};

export const founderName = "Debasri";

export const founderStat = {
  startingWeight: "99 kg",
  location: "India",
};

export const storyChapters: StoryChapter[] = [
  {
    tag: "Chapter 1 — Before",
    title: "Where I started",
    body: "I was around 99 kg, low on energy, uncomfortable in my own body. I knew something had to change. I just didn't know where to start.",
    image: {
      src: "/images/founder/founder-before.jpg",
      alt: "Debasri before her transformation",
    },
  },
  {
    tag: "Chapter 2 — The Decision",
    title: "The quiet decision",
    body: "There was no dramatic moment. Just a quiet decision that finally stuck — something had to change, starting with me.",
    imagePlaceholderLabel: "[Photo — the turning point]",
  },
  {
    tag: "Chapter 3 — The Process",
    title: "What actually changed",
    body: "Not a magic pill or one product. Just learning my body, building a routine I could keep, and showing up on the hard days.",
    imagePlaceholderLabel: "[Photo — daily routine]",
    tags: ["Nutrition", "Routine", "Consistency", "Accountability"],
  },
  {
    tag: "Chapter 4 — Today",
    title: "A healthier lifestyle, built slowly",
    body: "The change came slowly, through consistency — not overnight. I didn't become someone else. I became a healthier version of myself.",
    image: {
      src: "/images/founder/founder-now.jpg",
      alt: "Debasri today, living a healthier lifestyle",
    },
  },
];

export const founderLifestylePhoto = {
  src: "/images/founder/founder-lifestyle.jpg",
  alt: "Debasri in daily life today",
};
