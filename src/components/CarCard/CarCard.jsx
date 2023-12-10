import React, { useState } from "react";
import styled from "./CarCard.module.css";
import CarModal from "../CarModal/CarModal";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../redux/advertsSlice";

const CarCard = ({ adverts }) => {
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
    dispatch(addToFavorites(advert));
    console.log(advert);
  };

  return (
    <>
      <div className={styled.carsCatalog}>
        <div className={styled.carsWrapper}>
          {adverts.map((advert) => (
            <ul key={advert.id} className={styled.carsList}>
              <button
                type="button"
                onClick={() => handleAddToFavorites(advert)}
              >
                Fav
              </button>
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
                <li className={styled.carsItem}>{advert.functionalities[0]}</li>
              </div>
              <button type="button" onClick={() => openModal(advert)}>
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

export default CarCard;
