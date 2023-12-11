import Modal from "react-modal";
import styled from "./CarModal.module.css";
import { IoMdClose } from "react-icons/io";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    borderRadius: "24px",
    marginRight: "-20%",
    transform: "translate(-50%, -50%)",
    padding: "30px 37px  10px 37px",
  },
};

Modal.setAppElement("#root");

const CarModal = ({ isModalOpen, onClose, selectedAdvert }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="onRequestClose Example"
    >
      <>
        <div className={styled.containerCarModalWrapper}>
          <div className={styled.modalWrapper}>
            <button
              className={styled.closeButton}
              type="button"
              onClick={onClose}
            >
              <IoMdClose className={styled.closeIcon} />
            </button>

            <div key={selectedAdvert.id}>
              <div className={styled.carModalImageWrapper}>
                <img
                  className={styled.imageCar}
                  src={selectedAdvert.img}
                  alt={`${selectedAdvert.make} ${selectedAdvert.model}`}
                />
              </div>
              <h2 className={styled.carsModalTitle}>
                {selectedAdvert.make}
                <span className={styled.carsTitleSecond}>
                  {selectedAdvert.model}
                </span>
                ,{selectedAdvert.year}
              </h2>
              <ul className={styled.firstItemsWrapper}>
                <li className={styled.firstItems}>{selectedAdvert.address}</li>
                <span className={styled.firstItems}>|</span>
                <li className={styled.firstItems}>
                  Id: {selectedAdvert.id}{" "}
                  <span className={styled.firstItems}>|</span>
                </li>

                <li className={styled.firstItems}>
                  Year: {selectedAdvert.year}
                  <span className={styled.firstItems}>|</span>
                </li>

                <li className={styled.firstItems}>
                  Type: {selectedAdvert.type}
                  <span className={styled.firstItems}>|</span>
                </li>

                <li className={styled.firstItems}>
                  Fuel consumption: {selectedAdvert.fuelConsumption}
                  <span className={styled.firstItems}>|</span>
                </li>

                <li className={styled.firstItems}>
                  Engine size: {selectedAdvert.engineSize}
                </li>
              </ul>
              <h4 className={styled.titleDescriptionOne}>
                {selectedAdvert.description}
              </h4>
              <h4 className={styled.titleDescription}>
                Accessories and functionalities:
              </h4>
              <ul>
                <li className={styled.firstItems}>
                  {selectedAdvert.accessories}
                </li>
                <li className={styled.firstItems}>
                  {selectedAdvert.functionalities}
                </li>
              </ul>
              <div className={styled.rentalConditionsWrapper}>
                <h4 className={styled.titleDescription}>Rental Conditions:</h4>
                <ul className={styled.rentalConditionsItemsWrapper}>
                  <li className={styled.rentalItem}>
                    Minimum age:{" "}
                    <span className={styled.rentalItemSecond}>25</span>
                  </li>
                  <li className={styled.rentalItem}>Valid driver’s license</li>
                  <li className={styled.rentalItem}>
                    Security deposite require
                  </li>
                </ul>
                <ul className={styled.rentalItems}>
                  <li className={styled.rentalItem}>
                    Mileage:{" "}
                    <span className={styled.rentalItemSecond}>5,858</span>
                  </li>
                  <li className={styled.rentalItem}>
                    Price:{" "}
                    <span className={styled.rentalItemSecond}>
                      {selectedAdvert.rentalPrice}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <a className={styled.buttonRend} href="tel:+380730000000">
              Rent car
            </a>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default CarModal;
