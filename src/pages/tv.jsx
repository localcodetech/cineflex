import { useState } from "react";
import useTVChannel from "@/hooks/usetvchannels";
import VideoPlayer from "@/components/elements/muxplayer";
import ChannelCard from "@/components/elements/channelcard";

const TV = () => {
  const channels = useTVChannel();
  const [selected, setSelected] = useState(null);
  const [category, setCategory] = useState("");

  const categories = [...new Set(channels.map((item) => item.category))];

  const visible = category
    ? channels.filter((item) => item.category === category)
    : channels;

  return (
    <section className="py-10">
      <h1 className="mb-6 text-3xl font-bold">Live TV</h1>

      <div className="grid gap-8 lg:grid-cols-3 lg:sticky">
        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-28">
            <VideoPlayer url={selected ? selected.stream_url : null} />

            {selected && (
              <div className="mt-4">
                <p className="text-lg font-bold">{selected.name}</p>
                <p className="text-sm text-neutral-400">
                  {selected.category} · {selected.country}
                </p>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold">Channels</h2>

            {categories.length > 1 && (
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white"
              >
                <option value="">All</option>
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            )}
          </div>

          {channels.length === 0 ? (
            <p className="text-neutral-400">Loading channels...</p>
          ) : (
            <div className="grid grid-cols-2 gap-3 lg:max-h-[70vh] lg:overflow-y-auto lg:pr-2">
              {visible.map((channel) => (
                <ChannelCard
                  key={channel.id}
                  channel={channel}
                  isActive={selected ? selected.id === channel.id : false}
                  onSelect={setSelected}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TV;