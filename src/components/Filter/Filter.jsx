import PropTypes from 'prop-types';
import CSS from './Filter.module.css';

const Filter = ({ value, onFilterChange }) => {
  return (
    <div className={CSS.filter}>
      <label htmlFor="filter" className={CSS.userForm__label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id="filter"
        className={CSS.filterInput}
        onChange={onFilterChange}
        value={value}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
