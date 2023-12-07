import Modal from "react-modal";

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
          <div>
            <button type="button" onClick={onClose}>
              Close
            </button>
            <div>
              <ul key={selectedAdvert.id}>
                <img
                  src={selectedAdvert.img}
                  alt={`${selectedAdvert.make} ${selectedAdvert.model}`}
                />
                <h2>
                  {selectedAdvert.make} {selectedAdvert.model} ,
                  {selectedAdvert.year}
                </h2>
                <li>{selectedAdvert.make}</li>
                <li>{selectedAdvert.model}</li>
                <li>{selectedAdvert.year}</li>
                <li>{selectedAdvert.type}</li>
                <li>{selectedAdvert.description}</li>
                <li>{selectedAdvert.fuelConsumption}</li>
                <li>{selectedAdvert.engineSize}</li>
                <li>{selectedAdvert.accessories}</li>
                <li>{selectedAdvert.functionalities}</li>
                <li>{selectedAdvert.rentalPrice}</li>
                <li>{selectedAdvert.rentalCompany}</li>
                <li>{selectedAdvert.address}</li>
                <li>{selectedAdvert.rentalCondition}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CarModal;
