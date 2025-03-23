import css from './CamperCard.module.css';
const CamperCard = ({ camper }) => {
  return (
    <div className={css.card}>
      <div className={css.photo}>
        <img src={camper.gallery[0].original} alt='hi' />
      </div>
      <div className={css.info}>
        <p>{camper.name}</p>
        <p>{camper.price}</p>
        <p>{camper.description}</p>
      </div>
    </div>
  );
};

export default CamperCard;
