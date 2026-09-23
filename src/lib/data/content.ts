export type IdCard = { title: string; body: string };
export type Benefit = { title: string; body: string };
export type Step = { num: number; title: string; body: string };
export type Faq = { q: string; a: string };
export type ComparisonRow = { label: string; alone: string; guided: string };

export const identificationCards: IdCard[] = [
  { title: "You've tried diets before.", body: "You start strong, then work, travel, or family meals get in the way." },
  { title: "You know what you should do. But consistency is hard.", body: "Knowing and doing are two different things." },
  { title: "You feel uncomfortable in your own body.", body: "It affects more than you'd like to admit." },
  { title: "You're tired of starting over.", body: "Every Monday shouldn’t feel like day one." },
  { title: "You want guidance from someone who understands.", body: "Not another generic plan you found online." },
];

export const benefits: Benefit[] = [
  { title: "I've Been Where You Are.", body: "I understand the frustration of wanting to change but struggling to stay consistent." },
  { title: "You Won't Be Left Guessing.", body: "You'll receive structured guidance based on your goals and situation." },
  { title: "Accountability Changes Everything.", body: "Motivation disappears. A system and support help you keep going." },
  {
    title: "Your Journey Is Personal.",
    body: "Mostly eating at home, eating out, or a mix? Guidance is built around your actual routine — not a one-size-fits-all plan.",
  },
  { title: "We Focus On Sustainable Habits.", body: "The goal isn't perfection. The goal is building routines you can realistically continue." },
];

export const homeSteps: Step[] = [
  { num: 1, title: "Tell Me About Yourself", body: "A short form about your goal, struggle, lifestyle, and what you’ve tried before." },
  { num: 2, title: "We Talk", body: "A short consultation to understand your goals, challenges, and whether this is right for you." },
  { num: 3, title: "Get Your Personal Starting Plan", body: "Guidance on your next steps, tailored to where you are." },
  { num: 4, title: "Stay Accountable", body: "Continue with structured support and accountability." },
];

export const startSteps: Step[] = [
  { num: 1, title: "Tell Me About Yourself", body: "A quick form about your goal and readiness." },
  { num: 2, title: "We Talk", body: "A short consultation about your goals and challenges." },
  { num: 3, title: "Get Guidance", body: "A personal starting point and accountability." },
];

export const comparisonRows: ComparisonRow[] = [
  { label: "Structure", alone: "Trial and error", guided: "A clear starting point" },
  { label: "Accountability", alone: "Motivation-dependent", guided: "Regular check-ins" },
  { label: "Advice", alone: "Generic and conflicting", guided: "Based on your situation" },
  { label: "Support", alone: "Figuring it out alone", guided: "Someone to ask" },
  { label: "Medical caution", alone: "Unsure what’s safe", guided: "Guided to consult your doctor" },
];

export const homeFaqs: Faq[] = [
  { q: "Do I need to already be fit to start?", a: "No. The whole point is to start from where you currently are." },
  { q: "Is this only for weight loss?", a: "No. People may also be looking to improve their routines, consistency, nutrition habits, and general wellness." },
  { q: "Will I get personal guidance?", a: "Yes — guidance is based on your goals and situation, discussed directly with you during your consultation." },
  { q: "How quickly will I see results?", a: "Individual progress varies depending on many factors. I avoid promising specific outcomes." },
  {
    q: "What if I have a medical condition?",
    a: "If you have diabetes, thyroid concerns, liver issues, high blood pressure, high cholesterol, or any other medical condition, please consult and continue working with your qualified healthcare professional. Wellness guidance should not replace medical diagnosis or treatment.",
  },
  { q: "Can I still eat home-cooked Indian meals?", a: "Yes. Guidance is built around your actual eating habits — whether that’s dal-roti at home, eating out with family, or a mix of both." },
  { q: "Is this a replacement for medical treatment?", a: "No." },
];

export const startFaqs: Faq[] = [
  { q: "Is this only for weight loss?", a: "No. People may also be looking to improve routines, consistency, and general wellness." },
  { q: "How quickly will I see results?", a: "Individual progress varies. I avoid promising specific outcomes." },
  { q: "What if I have a medical condition?", a: "Please consult and continue working with your qualified healthcare professional. This guidance does not replace medical treatment." },
  {
    q: "Can I still eat normal home-cooked Indian food?",
    a: "The goal is to build healthier habits around your actual lifestyle and eating patterns rather than assuming you eat a completely different diet.",
  },
];

export const goalOptions: string[] = [
  "Weight management",
  "Building healthier habits",
  "Improving consistency",
  "Feeling more energetic",
  "General wellness",
  "Not sure, I need guidance",
];

export const challengeOptions: string[] = [
  "Starting and stopping",
  "Eating habits",
  "Busy work schedule",
  "Family or social meals",
  "Lack of routine",
  "Lack of accountability",
  "Something else",
];

export const readinessOptions: string[] = [
  "Just exploring",
  "Interested but unsure",
  "Ready to start soon",
  "Ready to start now",
];

export const trustStripItems: string[] = [
  "Real, personal transformation",
  "Wellness guidance, not medical advice",
  "Response within 24 hours",
  "Individual results vary",
];

export const topBarMessages: string[] = [
  "A real, personal transformation",
  "Not medical advice",
  "Usually replies within 24 hours",
];

export const navLinks: { href: string; label: string }[] = [
  { href: "#story", label: "Her Story" },
  { href: "#proof", label: "Transformations" },
  { href: "#how", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

export const homeDisclaimer =
  "Individual results vary. Wellness and lifestyle guidance is not a substitute for professional medical advice, diagnosis, or treatment. Individuals with diabetes, thyroid concerns, liver issues, high blood pressure, high cholesterol, or any other medical condition should consult their qualified healthcare professional before making changes to diet, exercise, or medication. This website does not diagnose, treat, or cure any medical condition.";

export const startDisclaimer =
  "Individual results vary. Wellness and lifestyle guidance is not a substitute for professional medical advice, diagnosis, or treatment. Consult your qualified healthcare professional regarding any medical condition.";

export const transformationsDisclaimer =
  "Individual results vary. Wellness and lifestyle guidance is not a substitute for professional medical advice, diagnosis, or treatment.";
