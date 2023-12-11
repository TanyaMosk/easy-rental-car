import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "./SharedLayuot.module.css";

const SharedLayout = () => {
  return (
    <>
      <header className={styled.header}>
        <nav className={styled.navigation}>
          <div className={styled.wrapperLink}>
            <NavLink className={styled.navLink} to="/">
              Home
            </NavLink>
            <NavLink className={styled.navLink} to="/catalog">
              Catalog
            </NavLink>
            <NavLink className={styled.navLink} to="/favorites">
              Favorites
            </NavLink>
          </div>
          <NavLink className={styled.nameLink} to="/">
            <p>Easy Rental Car</p>
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
