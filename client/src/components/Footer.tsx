import style from '../style/footer.module.scss';
import { BiLogoReact } from 'react-icons/bi';
import { SiNestjs } from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <BiLogoReact className={style.icons} />
      <div>
        <SiNestjs className={style.icons} />
        <IoLogoCss3 className={style.icons} />
        <SiJavascript className={style.icons} />
      </div>
    </footer>
  );
};

export default Footer;
