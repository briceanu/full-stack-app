import React from 'react';
import style from '../style/home.module.scss';
interface DataType {
  img: string;
  place: string;
  type: string;
  description: string;
}

const InnerRighSideCards: React.FC<DataType> = ({
  img,
  place,
  type,
  description,
}) => {
  return (
    <div className={style.right__side__cards}>
      <img src={img} alt='cars' />
      <div>
        <h2>{place}</h2>
        <h3>{type}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InnerRighSideCards;
