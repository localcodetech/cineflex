import MovieRow from "@/components/elements/movierow";

import {
  getTrending,
  getPopular,
  getTopRated,
  getNowPlaying,
} from "@/api/api";

const Home = () => {
  return (
    <section className="py-10">
      <MovieRow
        title="Trending This Week"
        fetchFunction={getTrending}
      />

      <MovieRow
        title="Popular Movies"
        fetchFunction={getPopular}
      />

      <MovieRow
        title="Now Playing"
        fetchFunction={getNowPlaying}
      />

      <MovieRow
        title="Top Rated"
        fetchFunction={getTopRated}
      />
    </section>
  );
};

export default Home;