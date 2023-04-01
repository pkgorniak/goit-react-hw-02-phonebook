import PropTypes from 'prop-types';

const Filter = ({ filterValue, onFilterChange }) => {
  return (
    <label>
      Fliter contacts by name
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
