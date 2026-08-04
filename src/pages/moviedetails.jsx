import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import useMovieDetails from "@/hooks/usemoviedetail";

import MovieHero from "@/section/moviedetail/moviehero";
import MovieCast from "@/section/moviedetail/moviecast";

import { findTrailer } from "@/utils/moviehelpers";
import Paragraph from "@/components/common/Paragraph";
import { Button } from "@/components/ui/button";

const MovieDetail = () => {
  const { id } = useParams();
  const detailsRef = useRef(null);
  const navigate = useNavigate()

  const { movie, loading, error } = useMovieDetails(id);

  if (loading) {
    return <Paragraph className="p-10">Loading...</Paragraph>;
  }

  if (error) {
    return <Paragraph className="p-10 text-primary">{error}</Paragraph>;
  }

  if (!movie) {
    return null;
  }

  const trailer = findTrailer(movie);
  const cast = movie.credits ? movie.credits.cast.slice(0, 8) : [];
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "N/A";

  const scrollToDetails = () => {
    detailsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  console.log(cast, movie.overview)
  return (
    <>
      <MovieHero
        movie={movie}
        year={year}
        trailer={trailer}
        onMoreInfo={scrollToDetails}
      />

      <div ref={detailsRef} className="py-16">
        <h2 className="text-2xl font-bold">Overview</h2>

        <Paragraph className="mt-4 max-w-3xl leading-relaxed text-neutral-300">
          {movie.overview || "No overview available."}
        </Paragraph>

        <MovieCast cast={cast} />
      </div>

    <Button className={"py-5 px-8 text-sm hover:bg-accent "} onClickfunc={()=>{
      return navigate(-1)
    }}>
      Back
    </Button>

    </>
  );
};

export default MovieDetail;