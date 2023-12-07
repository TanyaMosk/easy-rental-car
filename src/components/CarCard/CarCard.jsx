import React, { Component } from "react";
import styled from "./CarCard.module.css";
import CarModal from "../CarModal/CarModal";

class CarCard extends Component {
  state = {
    isModalOpen: false,
    selectedAdvert: [],
  };

  openModal = (advert) => {
    this.setState({ isModalOpen: true, selectedAdvert: advert });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { adverts } = this.props;
    const { isModalOpen, selectedAdvert } = this.state;

    return (
      <>
        <div className={styled.carsCatalog}>
          <div>
            {adverts.map((advert) => (
              <ul key={advert.id}>
                <img
                  className={styled.image}
                  src={advert.img}
                  alt={`${advert.make} ${advert.model}`}
                />
                <h2>
                  {advert.make} {advert.model}, {advert.year}
                </h2>
                <li>{advert.rentalPrice}</li>
                <li>{advert.type}</li>
                <li>{advert.functionalities}</li>
                <li>{advert.rentalCompany}</li>
                <li>{advert.address}</li>
                <button type="button" onClick={() => this.openModal(advert)}>
                  Learn more
                </button>
              </ul>
            ))}
          </div>
        </div>
        <CarModal
          isModalOpen={isModalOpen}
          onClose={this.closeModal}
          selectedAdvert={selectedAdvert}
        />
      </>
    );
  }
}

export default CarCard;

// class CarCard extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   // const { adverts } = useSelector((state) => state.adverts);
//   //   console.log(adverts);

//   openModal = () => {
//     this.setState({ isModalOpen: true });
//   };

//   closeModal = () => {
//     this.setState({ isModalOpen: false });
//   };
//   render() {
//     // const [modal, setModal] = useState(false);
//     return (
//       <>
//         <div className={styled.carsCatalog}>
//           <div>
//             {adverts.map(
//               ({
//                 id,
//                 year,
//                 make,
//                 model,
//                 type,
//                 img,
//                 description,
//                 fuelConsumption,
//                 engineSize,
//                 accessories,
//                 functionalities,
//                 rentalPrice,
//                 rentalCompany,
//                 address,
//                 rentalCondition,
//               }) => (
//                 <ul key={id}>
//                   <img src={img} width={360} />
//                   <h2>
//                     {make} {model} ,{year}{" "}
//                   </h2>
//                   <li>{rentalPrice}</li>
//                   <li>{type}</li>
//                   <li>{functionalities}</li>
//                   <li>{rentalCompany}</li>
//                   <li>{address}</li>
//                   <button type="button" onClick={openModal}>
//                     Lear more
//                   </button>
//                   <CarModal adverts={adverts} />
//                   {/* {modal && (

//                 )} */}
//                 </ul>
//               )
//             )}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default CarCard;
