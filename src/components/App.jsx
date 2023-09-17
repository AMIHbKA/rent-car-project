import { Outlet, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            Layout <Outlet></Outlet>
          </div>
        }
      >
        <Route index element={<div>Home</div>} />
        <Route path="catalog" element={<div>catalog</div>} />
        <Route path="favorites" element={<div>favorites</div>} />
      </Route>
    </Routes>
  );
};
