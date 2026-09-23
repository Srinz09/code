import Image from "next/image";
import { clientStories } from "@/lib/data/clientStories";

export default function ClientStoriesGrid() {
  return (
    <div className="grid grid-cols-2 items-start gap-3.5 min-[800px]:grid-cols-4 min-[800px]:gap-4">
      {clientStories.map((story) => (
        <div key={story.id} className="overflow-hidden rounded-[2px] border border-line-soft bg-cream">
          <Image
            src={story.src}
            alt="Real client before and after transformation"
            width={story.width}
            height={story.height}
            sizes="(min-width: 800px) 25vw, 50vw"
            className="h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
}
