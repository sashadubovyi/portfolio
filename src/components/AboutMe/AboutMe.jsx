import s from './AboutMe.module.css';
import sprite from '../../images/sprite.svg';
import Services from 'components/Services/Services';

const AboutMe = () => {
  const handleDownload = () => {
    const resumeFile = '/Oleksand_Dubovyi_Junior_Front_end.pdf';

    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Oleksand_Dubovyi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className={s.main}>
        <div className={s.topText}>
          <h2 className={s.mainText}>About Me</h2>
          <svg className={s.svg}>
            <use className={s.useSvg} xlinkHref={`${sprite}#about`} />
          </svg>
        </div>
        <div className={s.aboutMeBox}>
          <div className={s.aboutMe}>
            <h3 className={s.subTittle}>Junior Front-end developer</h3>
            <p className={s.aboutMeText}>
              I am a beginner in front-end development, currently undergoing
              training at GoIt's Front- End Developer Bootcamp. I have
              experience working with JavaScript, React, HTML, CSS/SCSS,
              Git/GitHub, and utilizing libraries for coding and working with
              APIs. I am responsible and creative, with a strong willingness to
              learn and explore new technologies in programming.
            </p>
          </div>
          <nav className={s.personalInfo}>
            <h3 className={s.subTittle}>Personal Information</h3>
            <ul className={s.personalList}>
              <li className={s.personalItem}>
                <p className={s.personalText}>Full name:</p>
                <p>Dubovyi Oleksandr</p>
              </li>
              <li className={s.personalItem}>
                <p className={s.personalText}>Age:</p>
                <p>30 y.o.</p>
              </li>
              <li className={s.personalItem}>
                <p className={s.personalText}>Residence:</p>
                <p>Ukraine, Kyiv</p>
              </li>
              <li className={s.personalItem}>
                <button
                  className={s.downloadResumeBtn}
                  onClick={handleDownload}
                >
                  Download resume &#8681;
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <Services />
      </div>
    </>
  );
};

export default AboutMe;
