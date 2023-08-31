import s from './WorkExperience.module.css';

const WorkExperience = () => {
  return (
    <div className={s.resumeContent}>
      <h3 className={s.subTitle}>Work experience</h3>
      <ul className={s.workList}>
        <li className={s.workItem}>
          <p className={s.workSubTittle}>'Unicum Alliance'</p>
          <p className={s.workDate}>2020-2023</p>
          <p className={s.workSubTittle}>Financial Consultant:</p>
          <p className={s.workText}>
            <span className={s.spanText}></span>
            Strengthened client relationships through proactive communication,
            leading to increased satisfaction and client retention.
            <br />
            <span className={s.spanText}></span> Implemented a comprehensive
            system for tracking and analyzing client data, improving
            decision-making processes, and providing customized service.
            <br />
            <span className={s.spanText}></span> Orchestrated successful client
            meetings, demonstrating excellent interpersonal skills and
            effectively addressing client needs.
            <br />
            <span className={s.spanText}></span> Developed innovative trading
            strategies that generated significant returns and contributed to
            business growth.
            <br />
            <span className={s.spanText}></span> Led teams of 10 and 40 members
            as Team Lead and Desk Manager respectively, achieving high
            productivity and goal attainment.
            <br />
            <span className={s.spanText}></span> Designed comprehensive
            onboarding webinars for new employees, facilitating smooth
            transitions and integration.
          </p>
        </li>
        <li className={s.workItem}>
          <p className={s.workSubTittle}>'CraftFood, Mondeleze'</p>
          <p className={s.workDate}>2019-2020</p>
          <p className={s.workSubTittle}>Trade Representative:</p>
          <p className={s.workText}>
            <span className={s.spanText}></span>
            Increased product visibility and brand awareness through effective
            presentations and displays.
            <br />
            <span className={s.spanText}></span> Negotiated favorable shelf
            placements, resulting in improved sales and product visibility.
            <br />
            <span className={s.spanText}></span> Implemented efficient inventory
            management strategies, reducing stockouts and improving product
            availability.
            <br />
            <span className={s.spanText}></span> Consistently achieved sales
            targets through persuasive techniques and effective communication of
            product benefits.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WorkExperience;
