import { Catalog } from 'pages/Catalog';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<div>favorites</div>} />
      </Route>
    </Routes>
  );
};
