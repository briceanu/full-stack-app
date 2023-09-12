import { NavLink, Outlet } from 'react-router-dom';
import style from '../style/navBar.module.scss';
import car from '../assets/car.svg';

const NavBar = () => {
  return (
    <>
      <div className={style.nav__container}>
        <img src={car} alt='car' className={style.car} />
        <nav>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            Home
          </NavLink>
          <NavLink
            to='cars'
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            Cars
          </NavLink>
          <NavLink
            to='saveCar'
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            Save Car
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
