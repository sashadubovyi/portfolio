import s from './Services.module.css';

const Services = () => {
  return (
    <div className={s.main}>
      <h2 className={s.mainText}>Services</h2>
      <ul className={s.servicesList}>
        <li className={s.servicesItem}>
          <h3>Front-End Development:</h3>
          <p>HTML, CSS / SCSS, JavaScript (JS)</p>
          <p>React</p>
        </li>
        <li className={s.servicesItem}>
          <h3>Web Design:</h3>
          <p>HTML, CSS / SCSS</p>
          <p>Figma</p>
        </li>
        <li className={s.servicesItem}>
          <h3>Responsive Design:</h3>
          <p>HTML, CSS / SCSS</p>
        </li>
        <li className={s.servicesItem}>
          <h3>API Integration:</h3>
          <p>JavaScript (JS)</p>
          <p>Postman</p>
        </li>
        <li className={s.servicesItem}>
          <h3>Version Control:</h3>
          <p>GitHub</p>
        </li>
        <li className={s.servicesItem}>
          <h3>Back-End Development:</h3>
          <p>Node.js </p>
          <p>MongoDB</p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
