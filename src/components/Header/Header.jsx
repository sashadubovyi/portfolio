import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import photo from '../../images/myphoto.JPG';
import sprite from '../../images/sprite.svg';
import SocialLinks from 'components/SocialLinks/SocialLinks';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.mainInfo}>
        <img src={photo} alt="MyPhoto" className={s.myPhoto} />
        <nav className={s.navMenu}>
          <ul className={s.headerList}>
            <li>
              <NavLink className={s.headerItem} to={'/'}>
                <svg className={s.svg}>
                  <use className={s.useSvg} xlinkHref={`${sprite}#home`} />
                </svg>
                <p className={s.navText}>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={s.headerItem} to={'/about'}>
                <svg className={s.svg}>
                  <use className={s.useSvg} xlinkHref={`${sprite}#about`} />
                </svg>
                <p className={s.navText}>About Me</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={s.headerItem} to={'/resume'}>
                <svg className={s.svg}>
                  <use className={s.useSvg} xlinkHref={`${sprite}#resume`} />
                </svg>
                <p className={s.navText}>Resume</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={s.headerItem} to={'/portfolio'}>
                <svg className={s.svg}>
                  <use className={s.useSvg} xlinkHref={`${sprite}#portfolio`} />
                </svg>
                <p className={s.navText}>Portfolio</p>
              </NavLink>
            </li>
            <li>
              <NavLink className={s.headerItem} to={'/contact'}>
                <svg className={s.svg}>
                  <use xlinkHref={`${sprite}#contact`} />
                </svg>
                <p className={s.navText}>Contact</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Header;
