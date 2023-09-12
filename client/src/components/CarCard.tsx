import style from '../style/cars.module.scss';

export interface CarCardProps {
  brand: string;
  color: string;
  year: number;
  description: string;
}

const CarCard: React.FC<CarCardProps> = ({
  brand,
  color,
  year,
  description,
}) => {
  return (
    <div className={style.car__card}>
      <h1>Brand: {brand}</h1>
      <h2>Color: {color}</h2>
      <p>Year: {year}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default CarCard;
