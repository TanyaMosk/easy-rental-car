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
          <div className={styled.carsWrapper}>
            {adverts.map((advert) => (
              <ul key={advert.id} className={styled.carsList}>
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
