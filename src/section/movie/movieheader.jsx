import Head from "@/components/common/head";
import { Input } from "@/components/ui/input";

const MoviesHeader = ({ query, setQuery, isSearching }) => {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Head
        text={isSearching ? `Results for "${query}"` : "Movies"}
        className="text-3xl"
      />

      <Input
      className={"w-full sm:w-64 sm:shrink-0 py-5 px-4"}
        type="text"
        value={query}
        placeholder="Search movies..."
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
};

export default MoviesHeader;