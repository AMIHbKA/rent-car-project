import { Outlet, Route, Routes } from 'react-router-dom';
import { CarList } from './CarList/CarList';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Outlet></Outlet>
          </div>
        }
      >
        <Route index element={<div>Home</div>} />
        <Route path="catalog" element={<CarList />} />
        <Route path="favorites" element={<div>favorites</div>} />
      </Route>
    </Routes>
  );
};
