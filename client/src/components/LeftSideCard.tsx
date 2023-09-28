import React from 'react';
import style from '../style/home.module.scss';

interface DataType {
  description: string;
  img: string;
  title: string;
  place: string;
}

const LeftSideCard: React.FC<DataType> = ({
  img,
  description,
  place,
  title,
}) => {
  return (
    <div className={style.left__side__card}>
      <img src={img} alt='wheel' />
      <div>
        <h2>{place}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LeftSideCard;
