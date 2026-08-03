import Paragraph from "@/components/common/Paragraph";



const ChannelCard = ({ channel, isActive, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(channel)}
      className={`group flex flex-col items-center gap-3 rounded-lg border p-4 transition ${
        isActive
          ? "border-[#e50914] bg-neutral-900"
          : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-600"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-center">
        {channel.logo ? (
          <img
            src={channel.logo}
            alt={channel.name}
            className="max-h-16 max-w-full object-contain"
          />
        ) : (
          <span className="text-2xl font-bold text-neutral-600">
            {channel.name.charAt(0)}
          </span>
        )}
      </div>

      <div className="text-center">
        <Paragraph className="line-clamp-2 text-sm font-medium text-neutral-200">
          {channel.name}
        </Paragraph>
        <Paragraph className="mt-1 text-xs text-neutral-500">
          {channel.category} · {channel.country}
        </Paragraph>
      </div>
    </button>
  );
};

export default ChannelCard;