import FilterBar from "@/components/elements/filterbar";

const DEFAULT_FILTERS = {
  genre: "",
  year: "",
  sortBy: "popularity.desc",
};

const FilterSection = ({
  isSearching,
  filters,
  setFilters,
}) => {
  if (isSearching) {
    return null;
  }

  return (
    <FilterBar
      filters={filters}
      onChange={setFilters}
      onReset={() => setFilters(DEFAULT_FILTERS)}
    />
  );
};

export default FilterSection;