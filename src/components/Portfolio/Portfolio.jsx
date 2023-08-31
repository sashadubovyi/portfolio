import s from './Portfolio.module.css';
import sprite from '../../images/sprite.svg';
import PortfolioList from 'components/PortfolioList/PortfolioList';
const Portfolio = () => {
  return (
    <div className={s.main}>
      <div className={s.topText}>
        <h2 className={s.mainText}>Portfolio</h2>
        <svg className={s.svg}>
          <use className={s.useSvg} xlinkHref={`${sprite}#portfolio`} />
        </svg>
      </div>
      <div className={s.resumeBox}>
        <PortfolioList />
        <a
          className={s.linkGitHub}
          href="https://github.com/sashadubovyi?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <p>All my projects are available on GitHub.</p>
          <svg className={s.svg}>
            <use xlinkHref={`${sprite}#github`} />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
