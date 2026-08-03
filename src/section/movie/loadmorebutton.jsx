
const LoadMoreButton = ({
  isSearching,
  hasMore,
  loading,
  onLoadMore,
}) => {
  if (isSearching || !hasMore) {
    return null;
  }

  return (
    <div className="mt-12 flex justify-center">
      <button
        onClick={onLoadMore}
        disabled={loading}
        className="rounded bg-primary px-8 py-3 font-bold hover:bg-destructive disabled:opacity-50"
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default LoadMoreButton;