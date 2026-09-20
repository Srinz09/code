export type ValidationStep = {
  id: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
  checklist: string[];
};

export const validationSteps: ValidationStep[] = [
  {
    id: "market-research",
    number: "01",
    title: "Market research",
    summary: "Before a logo, a domain, or telling anyone about it — find out if there's an actual gap.",
    detail:
      "The first thing to do as soon as you have an idea is market research. It tells you whether there's a real gap in the market, or whether you're about to walk into a space that already has a lot of competitors.",
    checklist: [
      "List every existing product or service that already solves this problem.",
      "Work out how crowded the space actually is — a handful of players, or dozens?",
      "Identify what none of them are doing well — that gap is your opening.",
      "Decide honestly whether the gap is big enough to build a business around.",
    ],
  },
  {
    id: "business-model",
    number: "02",
    title: "Business model",
    summary: "Figure out the shape of the money before you build anything.",
    detail:
      "Think about who your actual customer is. Are they paying you directly? Is it a monthly subscription, a transaction fee, or a one-time purchase? Know the shape of the money before you write a line of code.",
    checklist: [
      "Name the customer who pays — not just who uses it.",
      "Choose the revenue shape: subscription, transaction fee, one-time purchase, or something else.",
      "Estimate what they'd realistically pay, and how often.",
      "Check the math adds up to a real business, not just a nice idea.",
    ],
  },
  {
    id: "validate-before-build",
    number: "03",
    title: "Validate before you build",
    summary: "Go talk to real people who would actually use it if it existed today.",
    detail:
      "Talk to real people who would actually use it if it existed today. If you can't find 10 people who are extremely excited about what you're building, that's when you know you haven't hit the jackpot with your idea yet.",
    checklist: [
      "Write down the exact problem you're asking people to react to.",
      "Talk to at least 10 real prospective customers, one conversation at a time.",
      "Listen for genuine excitement, not polite interest.",
      "Count how many of the 10 would use it today if it existed — that's your signal.",
    ],
  },
];
