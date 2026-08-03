import Paragraph from "@/components/common/Paragraph";

const EmptyState = ({
  loading, error, movies, isSearching,
  query,
}) => {
  if (loading || error || movies.length > 0) {
    return null;
  }

  return (
    <Paragraph className="text-neutral-400">
      {isSearching
        ? `Nothing found for "${query}"`
        : "No movies match these filters."}
    </Paragraph>
  );
};

export default EmptyState;