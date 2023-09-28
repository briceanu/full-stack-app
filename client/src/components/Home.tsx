// import HomeCard from './HomeCard';
import { data, dataElectric, innerRightSideData } from './data';

import style from '../style/home.module.scss';
import ElectricCar from './ElectricCar';
import LeftSideCard from './LeftSideCard';
import InnerRighSideCards from './InnerRighSideCards';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div className={style.home__container}>
        <div className={style.electricCars__container}>
          {data.map((car) => (
            <ElectricCar
              img={car.img}
              description={car.description}
              type={car.type}
              key={car.id}
              place={car.place}
            />
          ))}
        </div>
        <div className={style.container__data}>
          <h2>mobile.de.Magazin</h2>
          {dataElectric.map((car) => (
            <LeftSideCard
              img={car.img}
              description={car.description}
              key={car.id}
              place={car.place}
              title={car.type}
            />
          ))}
          <div className={style.right__side_cards__containers}>
            {innerRightSideData.map((car) => (
              <InnerRighSideCards
                key={car.id}
                img={car.img}
                place={car.place}
                type={car.type}
                description={car.description}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
