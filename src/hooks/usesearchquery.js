import { useNavigate, useSearchParams } from "react-router";

const useSearchQuery = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("q") || "";

  const setQuery = (value) => {
    const target = value
      ? `/movies?q=${encodeURIComponent(value)}`
      : "/movies";

    navigate(target, { replace: true });
  };

  return { query, setQuery };
};

export default useSearchQuery;



// i will use this hook for the search 
// i can't write every search query in all pages to write it once and use it any where i want. 