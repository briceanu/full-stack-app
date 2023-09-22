import { NavLink } from 'react-router-dom';
import style from '../style/hamburgerNavBar.module.scss';
interface UpdataFunction {
  updateMenu: () => void;
  menu_class: string;
}
const SideMenu: React.FC<UpdataFunction> = ({ updateMenu, menu_class }) => {
  return (
    <div className={`${menu_class} ${style.menu}`}>
      <NavLink
        to='/'
        onClick={updateMenu}
        className={({ isActive }) => (isActive ? style.active : '')}
      >
        Home
      </NavLink>
      <NavLink
        to='cars'
        onClick={updateMenu}
        className={({ isActive }) => (isActive ? style.active : '')}
      >
        Cars
      </NavLink>
      <NavLink
        onClick={updateMenu}
        to='saveCar'
        className={({ isActive }) => (isActive ? style.active : '')}
      >
        Save Car
      </NavLink>
    </div>
  );
};

export default SideMenu;
