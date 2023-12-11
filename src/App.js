import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home.jsx";
import { Catalog } from "./pages/Catalog.jsx";
import { Favorites } from "./pages/Favorites.jsx";
import SharedLayout from "./pages/SharedLayout.jsx";

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
