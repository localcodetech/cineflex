
import { useNavigate } from "react-router";

import { getBackdropUrl } from "@/api/api";

const MovieHero = ({ backdropPath }) => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[50vh] w-full">
      {backdropPath && (
        <img
          src={getBackdropUrl(backdropPath)}
          alt="Movie Backdrop"
          className="h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

      <button
        onClick={() => navigate(-1)}
        className="absolute left-5 top-5 rounded bg-black/60 px-4 py-2 text-sm font-bold"
      >
        Back
      </button>
    </section>
  );
};

export default MovieHero;