// import logo from "./logo.svg";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home.jsx";
import { Catalog } from "./pages/Catalog.jsx";
import { Favorites } from "./pages/Favorites.jsx";
import SharedLayout from "./pages/SharedLayout.jsx";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { fetchCars } from "./redux/operations";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCars());
  // }, [dispatch]);

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
