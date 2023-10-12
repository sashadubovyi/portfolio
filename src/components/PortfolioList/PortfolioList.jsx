import imgBB from '../../images/budget_boss.png';
import imgBS from '../../images/book_shelf.png';
import imgHA from '../../images/health_app.png';
import imgSC from '../../images/sweet_choco.png';
import imgWS from '../../images/web_studio.png';
import s from './PortfolioList.module.css';
import portfolioData from './portfolioData';

const PortfolioList = () => {
  return (
    <ul className={s.workList}>
      {portfolioData.map(data => (
        <li className={s.workItem} key={data.id}>
          <a
            className={s.workA}
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.image} alt={data.title} />
          </a>
          <p className={s.workP}>PREVIEW</p>
        </li>
      ))}
    </ul>
  );
};

export default PortfolioList;
