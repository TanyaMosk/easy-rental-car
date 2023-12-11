import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "./SharedLayuot.module.css";
// import cars from "../image/cars.jpg";
// import { Header, WrapperNav,StyledLink, Icon, WrapperDiv, WrapperIcon, TextLink, SuspenseWrapper } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <header className={styled.header}>
        {/* <img className={styled.headerImage} src={cars} /> */}
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
      {/* <hr /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
