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
    body: "I was around 99 kg, low on energy, and uncomfortable in my own body. Everyday things — climbing stairs, keeping up through a full workday, even sitting through a family function — felt harder than they should have. I knew something needed to change. I just didn't know where to start.",
    image: {
      src: "/images/founder/founder-before.jpg",
      alt: "Debasri before her transformation",
    },
  },
  {
    tag: "Chapter 2 — The Decision",
    title: "The quiet decision",
    body: "There wasn't one dramatic moment — no single event I can point to. It was a quiet decision that built up over time: something had to change, and it had to start with me. Not a New Year's resolution. Not a reaction to one bad photo. Just a decision I finally kept.",
    imagePlaceholderLabel: "[Photo — the turning point]",
  },
  {
    tag: "Chapter 3 — The Process",
    title: "What actually changed",
    body: "It wasn't a magic pill, and it wasn't one product. It was learning how my own body worked, building a routine I could realistically keep, and showing up again on the days it felt hard. Consistency mattered far more than intensity.",
    imagePlaceholderLabel: "[Photo — daily routine]",
    tags: [
      "Nutrition",
      "Daily routine",
      "Lifestyle changes",
      "Consistency",
      "Support",
      "Accountability",
      "Patience",
    ],
  },
  {
    tag: "Chapter 4 — Today",
    title: "A healthier lifestyle, built slowly",
    body: "The change happened gradually, through consistency over time — not overnight, and not without setbacks along the way. I didn't become someone else. I slowly became a healthier version of myself. That's the process I now help others go through. Individual results vary.",
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
