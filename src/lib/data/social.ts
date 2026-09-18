export type SocialCategory = {
  label: string;
  description: string;
};

export const instagramHandle = "fitwithdebasri";
export const instagramUrl = `https://instagram.com/${instagramHandle}`;

export const socialCategories: SocialCategory[] = [
  { label: "Her story", description: "The real journey, told honestly — including the parts that weren't easy." },
  { label: "Client journeys", description: "Real people, shared once their story is verified and they've agreed to it." },
  { label: "Daily lifestyle", description: "What a realistic day actually looks like — not a highlight reel." },
  { label: "Meals", description: "Real Indian meals, not imported diet food." },
  { label: "Routines", description: "The habits that hold a plan together day to day." },
  { label: "Education", description: "Straightforward explanations, without the hype." },
  { label: "Behind the scenes", description: "How guidance actually gets built for each person." },
  { label: "Milestones", description: "Progress worth marking, at whatever pace it happens." },
];
