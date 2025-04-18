import css from './FilterLocation.module.css';
import Sprite from '../../img/sprite.svg';

const FilterLocation = () => {
  return (
    <div className={css.location}>
      <svg width='20' height='20'>
        <use xlinkHref={`${Sprite}#icon-map`} />
      </svg>
      <input type='text' placeholder='Kyiv, Ukraine' />
    </div>
  );
};

export default FilterLocation;
