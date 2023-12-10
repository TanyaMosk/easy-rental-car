import { useSelector } from "react-redux";
import styled from "./FavoritesCar.module.css";
import CarModal from "../CarModal/CarModal";
import { useState } from "react";
import { favoritesSelector } from "../../redux/selectord";

const FavoritesCar = () => {
  const favorites = useSelector(favoritesSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState({});

  const openModal = (advert) => {
    setSelectedAdvert(advert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(favorites);
  return (
    <>
      <div>
        <div className={styled.carsCatalog}>
          <div className={styled.carsWrapper}>
            {favorites.map((advert) => (
              <ul key={advert.id} className={styled.carsList}>
                {/* <button onClick={() => this.addToFavorites(advert)}>Fav</button> */}
                <img
                  className={styled.image}
                  src={
                    advert.img
                      ? advert.img
                      : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
                  }
                  alt={`${advert.make} ${advert.model}`}
                />
                <div className={styled.carsTitleWrapper}>
                  <h3 className={styled.carsTitle}>
                    {advert.make} {advert.model}, {advert.year}
                  </h3>
                  <h3 className={styled.carsTitle}>{advert.rentalPrice}</h3>
                </div>
                <div className={styled.carsItemWrapper}>
                  <li className={styled.carsItem}>{advert.address}</li>

                  <li className={styled.carsItem}>{advert.rentalCompany}</li>
                  <li className={styled.carsItem}>{advert.type}</li>
                  <li className={styled.carsItem}>{advert.model}</li>
                  <li className={styled.carsItem}>{advert.id}</li>

                  <li className={styled.carsItem}>
                    {advert.functionalities[0]}
                  </li>
                </div>
                <button type="button" onClick={() => openModal(advert)}>
                  Learn more
                </button>
              </ul>
            ))}
          </div>
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
