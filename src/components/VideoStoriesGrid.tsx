import ImageSlotPlaceholder from "./ImageSlotPlaceholder";
import { clientVideos } from "@/lib/data/clientVideos";
import { videoSlotIds } from "@/lib/data/testimonials";

export default function VideoStoriesGrid() {
  return (
    <div className="flex gap-3.5 overflow-x-auto px-6 pb-1.5 min-[800px]:grid min-[800px]:grid-cols-4 min-[800px]:gap-4 min-[800px]:overflow-visible min-[800px]:px-6">
      {clientVideos.map((video) => (
        <div
          key={video.id}
          className="relative overflow-hidden rounded-[10px] bg-cream min-[800px]:flex-none"
          style={{ flex: "0 0 62%", aspectRatio: "9 / 16", scrollSnapAlign: "center" }}
        >
          <video
            src={video.src}
            poster={video.poster}
            controls
            playsInline
            preload="none"
            className="h-full w-full object-cover"
          >
            Your browser doesn&rsquo;t support embedded video.
          </video>
        </div>
      ))}

      {videoSlotIds.map((id) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-[10px] min-[800px]:flex-none"
          style={{ flex: "0 0 62%", aspectRatio: "9 / 16", scrollSnapAlign: "center" }}
        >
          <ImageSlotPlaceholder label="Drop client video thumbnail" radius={10} className="h-full w-full" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full"
              style={{ background: "oklch(98% 0.01 85 / 0.9)" }}
            >
              <div
                className="ml-1"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "16px solid var(--forest)",
                }}
              />
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 px-3 py-2.5"
            style={{ background: "linear-gradient(to top, oklch(10% 0.01 85 / 0.6), transparent)" }}
          >
            <div className="text-[12.5px] font-semibold text-cream-light">Add client video</div>
          </div>
        </div>
      ))}
    </div>
  );
}
