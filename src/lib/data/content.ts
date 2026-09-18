export type IdCard = { title: string; body: string };
export type Benefit = { title: string; body: string };
export type Step = { num: number; title: string; body: string };
export type Faq = { q: string; a: string };
export type GoalOption = string;

export const identificationCards: IdCard[] = [
  { title: "You've tried diets before.", body: "You start strong, then work, travel or family life gets in the way." },
  { title: "You know what you should do.", body: "Consistency is the hard part, not the knowledge." },
  { title: "You feel uncomfortable in your own body.", body: "It affects more than you'd like to admit — energy, confidence, even how you show up at work." },
  { title: "You keep starting over.", body: "Every Monday shouldn't feel like day one again." },
  { title: "You want support, not another generic plan.", body: "One more PDF diet chart isn't the problem you're trying to solve." },
];

export const benefits: Benefit[] = [
  { title: "I've been where you are.", body: "I understand the frustration of wanting to change but struggling to stay consistent — because I lived it, not just read about it." },
  { title: "You won't be left guessing.", body: "You get structured guidance based on your goals, your routine and your starting point — not a template made for someone else." },
  { title: "Accountability changes everything.", body: "Motivation runs out. A weekly check-in and someone tracking your progress with you helps you keep going when it does." },
  { title: "Your journey is personal.", body: "A 24-year-old IT professional and a 52-year-old parent don't need the same plan. Yours is built around your life." },
  { title: "Sustainable beats extreme.", body: "The goal isn't a crash result. It's a routine you can realistically keep long after the program ends." },
];

export const howItWorksSteps: Step[] = [
  { num: 1, title: "Tell me about yourself", body: "A short form about your goal, your biggest challenge, and what you've already tried." },
  { num: 2, title: "We talk", body: "A free consultation to understand your lifestyle, your goals, and whether this is the right fit." },
  { num: 3, title: "We understand your starting point", body: "Your routine, food habits, work schedule and any health context that matters." },
  { num: 4, title: "You get your starting direction", body: "Clear next steps — what to focus on first, and why." },
  { num: 5, title: "We build consistency together", body: "Ongoing guidance and accountability so the change actually sticks." },
];

export const faqs: Faq[] = [
  { q: "Do I need to already be fit to start?", a: "No. Most people start from exactly where you are now — the whole point is building from there, not from some ideal starting point." },
  { q: "Is this only for weight loss?", a: "No. Many people come for weight management, but just as many are working on consistency, energy, eating habits, or general fitness without an extreme goal." },
  { q: "Do I need a gym?", a: "No. Plans are built around what's realistic for you — home workouts, a gym, or a mix — depending on your routine and access." },
  { q: "Will I get personal guidance?", a: "Yes. Guidance is based on your goals and situation, discussed directly with you on your consultation and adjusted as you go." },
  { q: "How does the consultation work?", a: "It's a short, free conversation — over a call or WhatsApp — about your goals, your challenges, and whether this approach is right for you. No pressure to sign up on the spot." },
  { q: "How much time does this take?", a: "This depends on your goals and current routine — it's discussed honestly during your consultation so you know what you're committing to." },
  { q: "Can I still eat normal Indian food?", a: "Yes. Guidance works with your actual food habits — home meals, eating out, festivals and family occasions included — not a restrictive imported diet plan." },
  { q: "How quickly will I see results?", a: "Individual progress varies depending on your starting point, consistency and many personal factors. I don't promise a specific number or timeline." },
  { q: "What if I have a medical condition?", a: "If you have diabetes, thyroid concerns, liver issues, high blood pressure, high cholesterol, or any other medical condition, please continue working with your qualified healthcare professional. This guidance does not replace medical advice, diagnosis or treatment." },
  { q: "Is this a replacement for medical treatment?", a: "No. This is wellness and lifestyle guidance, not medical treatment, and it should be used alongside — never instead of — advice from your doctor." },
  { q: "What happens after the consultation?", a: "If it's a good fit, I'll explain the next steps and what working together looks like. If it isn't, I'll say so honestly rather than push you into it." },
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
  "Individual results vary. Wellness and lifestyle guidance is not a substitute for professional medical advice, diagnosis or treatment. Individuals with diabetes, thyroid concerns, liver issues, high blood pressure, high cholesterol, or any other medical condition should continue working with their qualified healthcare professional before making changes to diet, exercise or medication. This website does not diagnose, treat or cure any medical condition.";
