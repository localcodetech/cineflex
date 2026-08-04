

import { useEffect, useState } from "react";

const useMovies = (fetchFunction, filters = {}) => {
  const filterKey = JSON.stringify(filters);

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [activeKey, setActiveKey] = useState(filterKey);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // filters changed, so go back to page 1 before the request goes out
  if (activeKey !== filterKey) {
    setActiveKey(filterKey);
    setPage(1);
  }

  

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await fetchFunction(page, JSON.parse(filterKey));

        setMovies((previous) => {
          const combined =
            page === 1 ? data.results : [...previous, ...data.results];

          return combined.filter(
            (movie, index) =>
              combined.findIndex((item) => item.id === movie.id) === index
          );
        });

        setTotalPages(Math.min(data.total_pages, 500));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [fetchFunction, filterKey, page]);

  const loadMore = () => {
    setPage((previous) => previous + 1);
  };

  return {
    movies,
    error,
    loading,
    loadMore,
    hasMore: page < totalPages,
    isFirstLoad: loading && movies.length === 0,
  };
};

export default useMovies;


