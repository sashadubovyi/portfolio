import imgBB from '../../images/budget_boss.png';
import imgBS from '../../images/book_shelf.png';
import imgHA from '../../images/health_app.png';
import imgSC from '../../images/sweet_choco.png';
import imgWS from '../../images/web_studio.png';
import s from './PortfolioList.module.css';

const PortfolioList = () => {
  return (
    <ul className={s.workList}>
      <li className={s.workItem}>
        <a
          className={s.workA}
          href="https://sashadubovyi.github.io/BudgetBoss/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgBB} alt="budget boss" />
        </a>
        <p className={s.workP}>PREVIEW</p>
      </li>
      <li className={s.workItem}>
        <a
          className={s.workA}
          href="https://m1lky4.github.io/error-masters-project/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgBS} alt="book shelf" />
        </a>
        <p className={s.workP}>PREVIEW</p>
      </li>
      <li className={s.workItem}>
        <a
          className={s.workA}
          href="https://sashadubovyi.github.io/Sweet-Chocolate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgSC} alt="sweet choco" />
        </a>
        <p className={s.workP}>PREVIEW</p>
      </li>
      <li className={s.workItem}>
        <a
          className={s.workA}
          href="https://struzhaks.github.io/health-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgHA} alt="health app" />
        </a>
        <p className={s.workP}>PREVIEW</p>
      </li>
      <li className={s.workItem}>
        <a
          className={s.workA}
          href="https://sashadubovyi.github.io/WebStudio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imgWS} alt="web studio" />
        </a>
        <p className={s.workP}>PREVIEW</p>
      </li>
    </ul>
  );
};

export default PortfolioList;
