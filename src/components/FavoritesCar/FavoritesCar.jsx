import { useDispatch, useSelector } from "react-redux";
import styled from "./FavoritesCar.module.css";
import CarModal from "../CarModal/CarModal";
import { useState } from "react";
import { favoritesSelector } from "../../redux/selectord";
import { addToFavorites, removeFromFavorites } from "../../redux/advertsSlice";
import { IoMdHeart } from "react-icons/io";

const FavoritesCar = () => {
  const favorites = useSelector(favoritesSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState({});
  const dispatch = useDispatch();

  const openModal = (advert) => {
    setSelectedAdvert(advert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToFavorites = (advert) => {
    const isAlreadyFavorite = favorites.find(
      (favorite) => favorite.id === advert.id
    );

    if (isAlreadyFavorite) {
      dispatch(removeFromFavorites(advert.id));
    } else {
      dispatch(addToFavorites(advert));
    }
  };

  return (
    <>
      <div className={styled.carsCatalog}>
        <div className={styled.carsWrapper}>
          {favorites.map((advert) => (
            <ul key={advert.id} className={styled.carsList}>
              <button
                className={styled.favoritesButton}
                type="button"
                onClick={() => handleAddToFavorites(advert)}
              >
                <div className={styled.heartContainer}>
                  <IoMdHeart className={styled.heardActive} />
                </div>
              </button>
              <div className={styled.imageWrapper}>
                <img
                  className={styled.image}
                  src={
                    advert.img
                      ? advert.img
                      : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
                  }
                  alt={`${advert.make} ${advert.model}`}
                />
              </div>

              <div className={styled.carsTitleWrapper}>
                <h3 className={styled.carsTitle}>
                  {advert.make}
                  <span className={styled.carsTitleSecond}>{advert.model}</span>
                  , {advert.year}
                </h3>
                <h3 className={styled.carsTitle}>{advert.rentalPrice}</h3>
              </div>
              <div className={styled.carsItemWrapper}>
                <li className={styled.carsItem}>{advert.address}</li>
                <li className={styled.carsItem}>{advert.rentalCompany}</li>
                <li className={styled.carsItem}>{advert.type}</li>
                <li className={styled.carsItem}>{advert.model}</li>
                <li className={styled.carsItem}>{advert.id}</li>
                <li className={styled.carsItem}>{advert.functionalities[0]}</li>
              </div>
              <button
                className={styled.buttonLearn}
                type="button"
                onClick={() => openModal(advert)}
              >
                Learn more
              </button>
            </ul>
          ))}
        </div>
      </div>
      <CarModal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        selectedAdvert={selectedAdvert}
      />
    </>
  );
};

export default FavoritesCar;
