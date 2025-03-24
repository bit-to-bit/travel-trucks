import css from './FilterPanel.module.css';
import FilterLocation from '../filterLocation/FilterLocation';

const FilterPanel = () => {
  return (
    <div className={css.filter}>
      <h4>Location</h4>
      <FilterLocation />
      <h4>Filters</h4>
    </div>
  );
};

export default FilterPanel;
