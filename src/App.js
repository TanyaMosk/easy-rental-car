import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites.jsx"));
const SharedLayout = lazy(() =>
  import("./pages/SharedLayuot/SharedLayout.jsx")
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
