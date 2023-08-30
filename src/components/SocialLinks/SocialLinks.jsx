import s from './SocialLinks.module.css';
import sprite from '../../images/sprite.svg';

const SocialLinks = () => {
  return (
    <div className={s.secondaryInfo}>
      <ul className={s.secondaryList}>
        <li className={s.secondaryItem}>
          <a
            href="https://www.facebook.com/sdubovyi"
            target="_blank"
            rel="noreferrer"
          >
            <svg className={s.svg}>
              <use xlinkHref={`${sprite}#facebook`} />
            </svg>
          </a>
        </li>
        <li className={s.secondaryItem}>
          <a
            href="https://www.instagram.com/sashadubovyi/"
            target="_blank"
            rel="noreferrer"
          >
            <svg className={s.svg}>
              <use xlinkHref={`${sprite}#instagram`} />
            </svg>
          </a>
        </li>
        <li className={s.secondaryItem}>
          <a href="https://t.me/alex_dubov" target="_blank" rel="noreferrer">
            <svg className={s.svg}>
              <use xlinkHref={`${sprite}#telegram`} />
            </svg>
          </a>
        </li>
        <li className={s.secondaryItem}>
          <a
            href="https://www.linkedin.com/in/oleksandr-dubovyi/"
            target="_blank"
            rel="noreferrer"
          >
            <svg className={s.svg}>
              <use xlinkHref={`${sprite}#linkedin`} />
            </svg>
          </a>
        </li>
        <li className={s.secondaryItem}>
          <a
            href="https://github.com/sashadubovyi"
            target="_blank"
            rel="noreferrer"
          >
            <svg className={s.svg}>
              <use xlinkHref={`${sprite}#github`} />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
