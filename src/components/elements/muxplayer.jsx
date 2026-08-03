import MuxPlayer from "@mux/mux-player-react";

const VideoPlayer = ({ url }) => {
  if (!url) {
    return (
      <div className="mx-auto flex aspect-video w-full max-w-3xl items-center justify-center rounded-lg bg-neutral-900 text-neutral-500">
        Select a channel to start watching
      </div>
    );
  }

  return (
    <MuxPlayer
      streamType="live"
      src={url}
      className="mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-lg"
    />
  );
};

export default VideoPlayer;