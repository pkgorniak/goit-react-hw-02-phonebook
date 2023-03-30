const Filter = ({ filterValue, onFilterChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filterValue}
      onChange={onFilterChange}
    />
  );
};

export default Filter;
