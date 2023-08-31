import AboutMe from 'components/AboutMe/AboutMe';
import Contact from 'components/Contact/Contact';
import Home from 'components/Home/Home';
import Layout from 'components/Layout/Layout';
import Portfolio from 'components/Portfolio/Portfolio';
import Resume from 'components/Resume/Resume';
import { Route, Routes } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import s from './App.module.css';

export const App = () => {
  return (
    <>
      <CSSTransition in={true} timeout={500} classNames={s.fade} unmountOnExit>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </CSSTransition>
    </>
  );
};
