export type IdCard = { title: string; body: string };
export type Benefit = { title: string; body: string };
export type Step = { num: number; title: string; body: string };
export type Faq = { q: string; a: string };
export type GoalOption = string;

export const identificationCards: IdCard[] = [
  { title: "You've tried diets before.", body: "Start strong, then life gets in the way." },
  { title: "You know what you should do.", body: "Knowing isn't the hard part. Doing is." },
  { title: "You feel uncomfortable in your own body.", body: "It affects your energy and confidence too." },
  { title: "You keep starting over.", body: "Every Monday shouldn't feel like day one." },
  { title: "You want support, not another generic plan.", body: "Not another PDF diet chart." },
];

export const benefits: Benefit[] = [
  { title: "I've been where you are.", body: "I've lived this, not just studied it." },
  { title: "You won't be left guessing.", body: "Guidance built around your goals — not a copy-paste template." },
  { title: "Accountability changes everything.", body: "Motivation fades. Weekly check-ins keep you going." },
  { title: "Your journey is personal.", body: "Your plan is built around your life, not someone else's." },
  { title: "Sustainable beats extreme.", body: "Not a crash result — a routine you can keep." },
];

export const howItWorksSteps: Step[] = [
  { num: 1, title: "Tell me about yourself", body: "A short form about your goal and challenge." },
  { num: 2, title: "We talk", body: "A free call to see if this is right for you." },
  { num: 3, title: "We understand your starting point", body: "Your routine, food habits and schedule." },
  { num: 4, title: "You get your starting direction", body: "Clear next steps — what to focus on first." },
  { num: 5, title: "We build consistency together", body: "Ongoing guidance so the change sticks." },
];

export const faqs: Faq[] = [
  { q: "Do I need to already be fit to start?", a: "No — most people start exactly where they are." },
  { q: "Do I need a gym?", a: "No. Plans work with home workouts, a gym, or both." },
  { q: "Is this only for weight loss?", a: "No — many come for energy, consistency or general fitness too." },
  { q: "Can I still eat normal Indian food?", a: "Yes. Home meals, eating out, festivals — all included." },
  { q: "How much time does this take?", a: "Depends on your goals — we discuss this upfront, on your consultation." },
  { q: "How quickly will I see results?", a: "It varies by person. I won't promise a fixed number or timeline." },
  { q: "What if I have a medical condition?", a: "Please continue with your doctor — this guidance supports, but never replaces, medical care." },
  { q: "What happens after the consultation?", a: "If it's a good fit, I'll explain next steps. If not, I'll say so honestly." },
];

export const goalOptions: GoalOption[] = [
  "Weight management",
  "Building healthier habits",
  "Improving consistency",
  "Feeling more energetic",
  "General wellness",
  "Not sure — I need guidance",
];

export const challengeOptions: GoalOption[] = [
  "I keep starting and stopping",
  "I don't know what routine to follow",
  "Eating habits / cravings",
  "Lack of accountability",
  "Busy lifestyle",
  "Something else",
];

export const readinessOptions: GoalOption[] = [
  "Just exploring",
  "Interested but unsure",
  "Ready to start soon",
  "Ready to start now",
];

export const ageRangeOptions: GoalOption[] = ["18–30", "31–45", "46–60", "60+"];

export const medicalOptions: GoalOption[] = ["Yes", "No", "Prefer to discuss privately"];

export const trustBadges: string[] = [
  "Real transformation story",
  "Personal guidance",
  "Accountability support",
  "Private consultation",
];

export const navLinks: { href: string; label: string }[] = [
  { href: "#story", label: "Her Story" },
  { href: "#transformations", label: "Transformations" },
  { href: "#how", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export const wellnessDisclaimer =
  "Individual results vary. This is wellness and lifestyle guidance — not a substitute for medical advice, diagnosis or treatment. If you have any medical condition, please continue working with your qualified healthcare professional.";
