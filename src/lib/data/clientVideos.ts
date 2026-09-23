export type ClientVideo = { id: string; src: string; poster: string; width: number; height: number };

/** Real client video, supplied directly by the founder — no name or quote attached. */
export const clientVideos: ClientVideo[] = [
  {
    id: "cv-01",
    src: "/videos/client-stories/client-video-01.mp4",
    poster: "/videos/client-stories/client-video-01-poster.webp",
    width: 360,
    height: 640,
  },
];
