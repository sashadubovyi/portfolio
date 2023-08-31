import s from './Contact.module.css';
import sprite from '../../images/sprite.svg';

const Contact = () => {
  return (
    <div className={s.main}>
      <div className={s.topText}>
        <h2 className={s.mainText}>Contact</h2>
        <svg className={s.svg}>
          <use className={s.useSvg} xlinkHref={`${sprite}#contact`} />
        </svg>
      </div>
      <div className={s.resumeBox}></div>
      <ul className={s.contactList}>
        <li className={s.contactItem}>
          <strong>Email:</strong>
          <a href="mailto:sashadubovyi@ukr.net">sashadubovyi@ukr.net</a>
        </li>
        <li className={s.contactItem}>
          <strong>Phone:</strong>
          <a href="tel:+380631065986">+38(063)106-59-86</a>
        </li>
        <li className={s.contactItem}>
          <strong>Telegram:</strong>
          <a
            href="https://t.me/alex_dubov"
            target="_blank"
            rel="noopener noreferrer"
          >
            alex_dubov
          </a>
        </li>
        <li className={s.contactItem}>
          <strong>WhatsUp: </strong>
          <a
            href="https://wa.me/380631065986"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alex D
          </a>
        </li>
        <li className={s.contactItem}>
          <strong>
            Viber: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </strong>
          <a
            href="viber://chat?number=%2B380631065986"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alex D
          </a>
        </li>
        <li className={s.contactItem}>
          <strong>Instagram: </strong>
          <a
            href="https://www.instagram.com/sashadubovyi/"
            target="_blank"
            rel="noreferrer"
          >
            sashadubovyi
          </a>
        </li>
        <li className={s.contactItem}>
          <strong>Facebook: </strong>
          <a
            href="https://www.facebook.com/sdubovyi"
            target="_blank"
            rel="noreferrer"
          >
            aleksandr dubovyi
          </a>
        </li>
        <li className={s.contactItem}>
          <strong>LinkedIn: </strong>
          <a
            href="https://www.linkedin.com/in/oleksandr-dubovyi/"
            target="_blank"
            rel="noreferrer"
          >
            oleksandr dubovyi
          </a>
        </li>
        <li className={s.contactItem}>
          <strong>GitHub: </strong>
          <a
            href="https://github.com/sashadubovyi"
            target="_blank"
            rel="noreferrer"
          >
            oleksandr dubovyi
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
