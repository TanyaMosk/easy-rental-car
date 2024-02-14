import Dropdown from "../../components/Dropdown/Dropdown";
import FavoritesCar from "../../components/FavoritesCar/FavoritesCar";
import styled from "./Favorites.module.css";

const Favorites = () => {
  return (
    <section className={styled.favoritesSection}>
      <Dropdown />
      <FavoritesCar />
    </section>
  );
};

export default Favorites;
