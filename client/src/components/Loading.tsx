import React from 'react';
import style from '../style/loading.module.scss';

const Loading = () => {
  return (
    <>
      <div className={style.main__container}>
        <h1>Loading </h1>
        <div className={style.circles__container}>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
