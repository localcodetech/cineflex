import { Play } from "lucide-react";
import Paragraph from "@/components/common/Paragraph";

const ChannelCard = ({ channel, isActive, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(channel)}
      aria-pressed={isActive}
      className={`group relative flex flex-col items-center gap-3 overflow-hidden rounded-xl border p-4 transition-all duration-300 ${
        isActive
          ? "border-[#e50914] bg-neutral-900 shadow-lg shadow-[#e50914]/20"
          : "border-neutral-800 bg-neutral-900/50 hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-900"
      }`}
    >
      {isActive && (
        <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-[#e50914] px-2 py-0.5 text-[10px] font-bold uppercase text-white">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          Live
        </span>
      )}

      <div className="relative flex h-16 w-full items-center justify-center">
        {channel.logo ? (
          <img
            src={channel.logo}
            alt={channel.name}
            loading="lazy"
            className={`max-h-16 max-w-full object-contain transition-transform duration-300 ${
              isActive ? "" : "group-hover:scale-110"
            }`}
          />
        ) : (
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-800 text-2xl font-bold text-neutral-500">
            {channel.name.charAt(0)}
          </span>
        )}

        {!isActive && (
          <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Play className="text-lg text-white" />
          </span>
        )}
      </div>

      <div className="w-full text-center">
        <Paragraph
          className={`line-clamp-2 text-sm font-medium transition-colors ${
            isActive ? "text-white" : "text-neutral-200"
          }`}
        >
          {channel.name}
        </Paragraph>
        <Paragraph className="mt-1 truncate text-xs text-neutral-500">
          {channel.category} · {channel.country}
        </Paragraph>
      </div>
    </button>
  );
};

export default ChannelCard;