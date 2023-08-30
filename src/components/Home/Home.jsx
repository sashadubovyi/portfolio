import s from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={s.main}>
        <div className={s.textBox}>
          <h1 className={s.name}>Oleksandr Dubovyi</h1>
          <p className={s.text}>I'm a junior front-end developer</p>
        </div>
      </div>
    </>
  );
};

export default Home;
