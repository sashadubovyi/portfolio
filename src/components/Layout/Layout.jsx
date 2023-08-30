import Header from 'components/Header/Header';

const { Outlet } = require('react-router-dom');

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
