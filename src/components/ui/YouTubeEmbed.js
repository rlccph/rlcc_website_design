export default function YouTubeEmbed({ playlistId, videoId, title, className = "" }) {
  const src = playlistId
    ? `https://www.youtube.com/embed/videoseries?list=${playlistId}`
    : `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={`overflow-hidden rounded-lg border border-black/10 bg-black shadow-lg ${className}`.trim()}>
      <div className="aspect-video">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
