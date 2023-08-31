import s from './Education.module.css';

const Education = () => {
  return (
    <>
      <div className={s.resumeContent}>
        <h3 className={s.subTitle}>Education</h3>
        <ul className={s.workList}>
          <li className={s.workItem}>
            <p className={s.workSubTittle}>'GoIT'</p>
            <p className={s.workDate}>2023 - Presentе</p>
            <p className={s.workSubTittle}>Full Stack Developer</p>
            <p className={s.workText}>
              <span className={s.spanText}></span>
              Skills: HTML, CSS/SCSS, JS, React, GitHub, Figma, Postman, API
              Integration
            </p>
          </li>
          <li className={s.workItem}>
            <p className={s.workSubTittle}>
              'Institute of Innovative Education, Kyiv National University of
              Construction and Architecture'
            </p>
            <p className={s.workDate}>2012 - 2017</p>
            <p className={s.workSubTittle}>Bachelor's Degree</p>
            <p className={s.workText}>
              <span className={s.spanText}></span>Occupational Safety in
              Construction
            </p>
          </li>
          <li className={s.workItem}>
            <p className={s.workSubTittle}>
              'Kyiv College of Construction, Architecture, and Design'
            </p>
            <p className={s.workDate}>2008 - 2012</p>
            <p className={s.workText}>
              <span className={s.spanText}></span>Building and Structure
              Furnishing and Construction Design
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Education;
