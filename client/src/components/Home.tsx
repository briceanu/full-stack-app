import HomeCard from './HomeCard';
import { data } from './data';

import style from '../style/home.module.scss';

const Home = () => {
  return (
    <div className={style.home__container}>
      {data.map((car) => (
        <HomeCard
          description={car.description}
          type={car.type}
          img={car.img}
          key={car.id}
        />
      ))}
    </div>
  );
};

export default Home;
