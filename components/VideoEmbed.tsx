type Aspect = "9:16" | "1:1" | "16:9";

type Props = {
  src: string;
  poster?: string;
  aspect?: Aspect;
};

const aspectMap: Record<Aspect, string> = {
  "9:16": "9 / 16",
  "1:1": "1 / 1",
  "16:9": "16 / 9",
};

export default function VideoEmbed({ src, poster, aspect = "9:16" }: Props) {
  return (
    <div
      className="w-full overflow-hidden rounded-3xl bg-dark-brown/5"
      style={{ aspectRatio: aspectMap[aspect] }}
    >
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
