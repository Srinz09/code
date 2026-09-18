export type Transformation = {
  id: string;
  name: string;
  city: string;
  isPlaceholder: boolean;
  timeframe: string;
  startingPoint: string;
  goal: string;
  challenge: string;
  journey: string;
  progress: string;
  quote: string;
  beforeImage?: { src: string; alt: string };
  progressImage?: { src: string; alt: string };
  afterImage?: { src: string; alt: string };
};

/**
 * No client transformation has been verified yet, so every entry here is an
 * explicit, visible placeholder — never a filled-in fake story. Replace a
 * card's fields (and drop in real images) as soon as a client's story is
 * verified and they've given permission to publish it.
 */
export const transformations: Transformation[] = [
  {
    id: "placeholder-1",
    name: "[Client name pending]",
    city: "[City]",
    isPlaceholder: true,
    timeframe: "[Timeframe]",
    startingPoint: "[Starting situation]",
    goal: "[Personal goal]",
    challenge: "[Key challenge]",
    journey: "[Journey summary]",
    progress: "[Progress description]",
    quote: "[Insert actual testimonial once verified]",
  },
  {
    id: "placeholder-2",
    name: "[Client name pending]",
    city: "[City]",
    isPlaceholder: true,
    timeframe: "[Timeframe]",
    startingPoint: "[Starting situation]",
    goal: "[Personal goal]",
    challenge: "[Key challenge]",
    journey: "[Journey summary]",
    progress: "[Progress description]",
    quote: "[Insert actual testimonial once verified]",
  },
  {
    id: "placeholder-3",
    name: "[Client name pending]",
    city: "[City]",
    isPlaceholder: true,
    timeframe: "[Timeframe]",
    startingPoint: "[Starting situation]",
    goal: "[Personal goal]",
    challenge: "[Key challenge]",
    journey: "[Journey summary]",
    progress: "[Progress description]",
    quote: "[Insert actual testimonial once verified]",
  },
  {
    id: "placeholder-4",
    name: "[Client name pending]",
    city: "[City]",
    isPlaceholder: true,
    timeframe: "[Timeframe]",
    startingPoint: "[Starting situation]",
    goal: "[Personal goal]",
    challenge: "[Key challenge]",
    journey: "[Journey summary]",
    progress: "[Progress description]",
    quote: "[Insert actual testimonial once verified]",
  },
];
