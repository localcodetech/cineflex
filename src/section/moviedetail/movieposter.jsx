import { getPosterUrl } from "@/api/api";

const MoviePoster = ({ posterPath, title }) => {
  if (!posterPath) {
    return null;
  }

  return (
    <img
      src={getPosterUrl(posterPath)}
      alt={title}
    
      fetchPriority="auto"
      className="w-48 shrink-0 rounded-lg shadow-2xl"
    />
  );
};

export default MoviePoster;