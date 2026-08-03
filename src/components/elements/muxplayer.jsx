

import MuxPlayer from "@mux/mux-player-react";

const VideoPlayer = ({ url }) => {
  if (!url) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-neutral-900 text-neutral-500">
        Select a channel to start watching
      </div>
    );
  }

  return (
    <MuxPlayer
      streamType="live"
      src={url}
      className="aspect-video w-full overflow-hidden rounded-lg"
    />
  );
};

export default VideoPlayer;