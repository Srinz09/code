import { clientVideos } from "./clientVideos";

const TOTAL_VIDEO_SLOTS = 4;

/** Empty slots left after the real client videos, ready for more as they're shared. */
export const videoSlotIds: string[] = Array.from(
  { length: Math.max(0, TOTAL_VIDEO_SLOTS - clientVideos.length) },
  (_, i) => `video-thumb-${i + 1}`
);
