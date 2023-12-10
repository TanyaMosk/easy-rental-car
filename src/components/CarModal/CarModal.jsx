import Modal from "react-modal";
import styled from "./CarModal.module.css";
import { IoMdClose } from "react-icons/io";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-20%",
    transform: "translate(-50%, -50%)",
    padding: "0",
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
      <div>
        <div>
          <div className={styled.modalWrapper}>
            <button
              className={styled.closeButton}
              type="button"
              onClick={onClose}
            >
              <IoMdClose />
            </button>
            <div>
              <div key={selectedAdvert.id}>
                <img
                  className={styled.imageCar}
                  src={selectedAdvert.img}
                  alt={`${selectedAdvert.make} ${selectedAdvert.model}`}
                />
                <h2>
                  {selectedAdvert.make} {selectedAdvert.model} ,
                  {selectedAdvert.year}
                </h2>
                <ul className={styled.firstItemsWrapper}>
                  <li className={styled.firstItems}>
                    {selectedAdvert.address}
                  </li>
                  <li>|</li>
                  <li className={styled.firstItems}>Id: {selectedAdvert.id}</li>
                  <li>|</li>
                  <li className={styled.firstItems}>
                    Year: {selectedAdvert.year}
                  </li>
                  <li>|</li>
                  <li className={styled.firstItems}>
                    Type: {selectedAdvert.type}
                  </li>
                  <li>|</li>
                  <li className={styled.firstItems}>
                    Fuel consumption: {selectedAdvert.fuelConsumption}
                  </li>
                  <li>|</li>
                  <li className={styled.firstItems}>
                    Engine size: {selectedAdvert.engineSize}
                  </li>
                </ul>
                <h4>{selectedAdvert.description}</h4>
                <li>{selectedAdvert.accessories}</li>
                <li>{selectedAdvert.functionalities}</li>
                <div className={styled.rentalConditionsWrapper}>
                  <h4>Rental Conditions:</h4>
                  <ul className={styled.rentalConditionsItemsWrapper}>
                    <li>
                      Minimum age: <p>25</p>
                    </li>
                    <li>Valid driver’s license</li>
                    <li>Security deposite require</li>
                  </ul>
                  <ul className={styled.rentalItems}>
                    <li className={styled.rentalItem}>
                      Mileage: <p>5,858</p>
                    </li>
                    <li className={styled.rentalItem}>
                      Price: <p>{selectedAdvert.rentalPrice}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="tel:+380730000000">Rent car</a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CarModal;
