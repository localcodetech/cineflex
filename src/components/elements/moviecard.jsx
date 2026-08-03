
import { getPosterUrl } from "@/api/api";




const MovieCard = ({movie, onCardClick}) =>{ const poster = getPosterUrl(movie.poster_path);
    const year =  movie.release_date ? movie.release_date.slice(0,4) : "N/A"
const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";


    return (
        <div
        onClick={()=>{
            onCardClick && onCardClick(movie)}}

            className="group cursor-pointer overflow-hidden rounded-lg bg-neutral-900 ring-2 ring-neutral-800 transition hover:ring-primary"
        >

                  <div className="relative aspect-2/3 w-full bg-neutral-800">
        {poster ? (
          <img
            src={poster}
            alt={movie.title}
            loading="lazy"
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-3 text-center text-xs text-neutral-500">
            No poster available
          </div>
        )}

        <span className="absolute right-2 top-2 rounded bg-black/70 px-2 py-1 text-xs font-bold text-yellow-400">
          {rating}
        </span>
      </div>

      <div className="p-3">
        <h3 className="truncate text-sm font-bold text-white">{movie.title}</h3>
        <p className="mt-1 text-xs text-neutral-400">{year}</p>
      </div>
   



        </div>
    )
}

export default MovieCard;