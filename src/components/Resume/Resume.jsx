import s from './Resume.module.css';
import sprite from '../../images/sprite.svg';
import WorkExperience from 'components/WorkExperience/WorkExperience';
import Education from 'components/Education/Education';

const Resume = () => {
  return (
    <div className={s.main}>
      <div className={s.topText}>
        <h2 className={s.mainText}>Resume</h2>
        <svg className={s.svg}>
          <use className={s.useSvg} xlinkHref={`${sprite}#resume`} />
        </svg>
      </div>
      <div className={s.resumeBox}>
        <WorkExperience />
        <Education />
      </div>
    </div>
  );
};

export default Resume;
