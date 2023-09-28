import React from 'react';
import style from '../style/home.module.scss';

interface ElectricCarModel {
  img: string;
  description: string;
  type: string;
  place: string;
}

const ElectricCar: React.FC<ElectricCarModel> = ({
  img,
  description,
  type,
  place,
}) => {
  return (
    <div className={style.electricCar}>
      <img src={img} alt='cars' />
      <div>
        <h2>{type}</h2>
        <p>{description}</p>
        <button>{place}</button>
      </div>
    </div>
  );
};

export default ElectricCar;
