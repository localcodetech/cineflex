import useGenres from "@/hooks/usegenres";

import { sortOptions, years } from "@/constants/appvalues";

import SelectGenreCard from "@/components/elements/selectsortcard";
import { Button } from "../ui/button";

const FilterBar = ({ filters, onChange, onReset }) => {
  const genres = useGenres();

  const update = (key, value) => {
    onChange({
      ...filters,
      [key]: value,
    });
  };

  const hasFilters = filters.genre || filters.year;

  return (
    <div className="mb-8 flex flex-wrap gap-4">
      {/* Genre */}
      <SelectGenreCard
        update={update}
        filtervalue={filters.genre}
        onChangeParam="genre"
      >
        <option value="">All Genres</option>

        {genres.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </SelectGenreCard>

      {/* Year */}
      <SelectGenreCard
        update={update}
        filtervalue={filters.year}
        onChangeParam="year"
      >
        <option value="">Any Year</option>

        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </SelectGenreCard>

      {/* Sort */}
      <SelectGenreCard
        update={update}
        filtervalue={filters.sortBy}
        onChangeParam="sortBy"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectGenreCard>

      {hasFilters && (
        <Button variant="default" onClickfunc={onReset} className={" rounded bg-primary px-8 py-5 font-bold disabled:opacity-50"}>
          Clear
        </Button>
      )}
    </div>
  );
};

export default FilterBar;