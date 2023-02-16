import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MenuOption } from '../app/App';

const Home = lazy(() => import('../../../beers/home/page/home'));

const About = lazy(() => import('../../../beers/about/page/about'));
const ErrorPage = lazy(() => import('../../../beers/error/page/error'));
const Details = lazy(() => import('../../../beers/details/page/details'));

// COMENTARIO TEMPORAL HASTA TERMINAR HOME, MY BEERS Y ABOUT.
// const MyBeers = lazy(() => import('../../../beers/mybeers/page/mybeers'));

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path={menuOptions[0].path} element={<Home></Home>}></Route>
        {/* <Route path={menuOptions[1].path} element={<MyBeers></MyBeers>}></Route> */}
        <Route path={menuOptions[2].path} element={<About></About>}></Route>
        <Route path={'/details'} element={<Details></Details>}></Route>
        <Route path={'*'} element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </Suspense>
  );
}
