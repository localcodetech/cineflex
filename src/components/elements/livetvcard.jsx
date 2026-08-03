



const LiveTvCard = ({
  name,
  logo,
  country,
  category,
  onWatch,
}) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 transition hover:border-red-500/40">
      {/* Logo */}
      <div className="relative aspect-video overflow-hidden bg-neutral-900">
        <img
          src={logo}
          alt={name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
          LIVE
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        <div>
          <h2 className="text-lg font-semibold text-white">
            {name}
          </h2>

          <p className="mt-1 text-sm text-neutral-400">
            {country}
          </p>
        </div>

        <span className="inline-block rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">
          {category}
        </span>

        <button
          onClick={onWatch}
          className="mt-2 w-full rounded-lg bg-red-600 py-3 font-medium text-white transition hover:bg-red-700"
        >
          Watch Live
        </button>
      </div>
    </article>
  );
};

export default LiveTvCard;