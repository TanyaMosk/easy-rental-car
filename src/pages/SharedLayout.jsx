import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "./SharedLayuot.module.css";
// import { Header, WrapperNav,StyledLink, Icon, WrapperDiv, WrapperIcon, TextLink, SuspenseWrapper } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav className={styled.navigation}>
          <div className={styled.wrapperLink}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </div>
          <NavLink to="/">
            <p>Easy Rental Car</p>
          </NavLink>
        </nav>
      </header>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
