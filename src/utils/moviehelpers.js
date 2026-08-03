

export const formatRuntime = (minutes) => {
  if (!minutes) {
    return "N/A";
  }

  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  return `${hours}h ${rest}m`;
};

export const findTrailer = (movie) => {
  if (!movie.videos) {
    return null;
  }

  const trailer = movie.videos.results.find((video) => {
    return video.site === "YouTube" && video.type === "Trailer";
  });

  if (!trailer) {
    return null;
  }

  return `https://www.youtube.com/watch?v=${trailer.key}`;
};