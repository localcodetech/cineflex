
const MovieGenres = ({ genres }) => {
  if (!genres || genres.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {genres.map((genre) => (
        <span
          key={genre.id}
          className="rounded-full border border-neutral-700 px-3 py-1 text-xs"
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
};

export default MovieGenres;