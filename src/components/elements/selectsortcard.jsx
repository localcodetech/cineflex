const SelectGenreCard = ({
  filtervalue,
  update,
  onChangeParam,
  children,
}) => {
  return (
    <select
      value={filtervalue}
      onChange={(e) => update(onChangeParam, e.target.value)}
      className="rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm capitalize text-white"
    >
      {children}
    </select>
  );
};

export default SelectGenreCard;