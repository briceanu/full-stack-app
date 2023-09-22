import style from '../style/homeCard.module.scss';
interface DataType {
  description: string;
  img: string;
  type: string;
}

const HomeCard: React.FC<DataType> = ({ type, description, img }) => {
  return (
    <div className={style.home__card}>
      <img src={img} alt='wheel' />
      <h2>{type}</h2>
      <p>{description}</p>
    </div>
  );
};

export default HomeCard;
