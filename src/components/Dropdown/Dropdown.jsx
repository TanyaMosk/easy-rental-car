import Select from "react-select";
import styled from "./Dropdown.module.css";

const Dropdown = () => {
  const optionsCars = [
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "Audi", label: "Audi" },
    { value: "Bentley", label: "Bentley" },
    { value: "BMW", label: "BMW" },
    { value: "Buick", label: "Buick" },
    { value: "Chevrolet", label: "Chevrolet" },
    { value: "Chrysler", label: "Chrysler" },
    { value: "GMC", label: "GMC" },
    { value: "HUMMER", label: "HUMMER" },
    { value: "Hyundai", label: "Hyundai" },
    { value: "Kia", label: "Kia" },
    { value: "Lamborghini", label: "Lamborghini" },
    { value: "Land", label: "Land" },
    { value: "Lincoln", label: "Lincoln" },
    { value: "Mercedes-Benz", label: "Mercedes-Benz" },
    { value: "MINI", label: "MINI" },
    { value: "Mitsubishi", label: "Mitsubishi" },
    { value: "Nissan", label: "Nissan" },
    { value: "Pontiac", label: "Pontiac" },
    { value: "Subaru", label: "Subaru" },
    { value: "Volvo", label: "Volvo" },
  ];

  const optionsPrise = [
    { value: "20$", label: "20$" },
    { value: "30$", label: "30$" },
    { value: "40$", label: "40$" },
    { value: "50$", label: "50$" },
    { value: "60$", label: "60$" },
    { value: "70$", label: "70$" },
    { value: "80$", label: "80$" },
    { value: "90$", label: "90$" },
    { value: "100$", label: "100$" },
    { value: "110$", label: "110$" },
    { value: "120$", label: "120$" },
    { value: "130$", label: "130$" },
    { value: "140$", label: "140$" },
    { value: "150$", label: "150$" },
    { value: "160$", label: "160$" },
    { value: "170$", label: "170$" },
    { value: "180$", label: "180$" },
    { value: "190$", label: "190$" },
    { value: "200$", label: "200$" },
    { value: "250$", label: "250$" },
    { value: "300$", label: "300$" },
    { value: "350$", label: "350$" },
    { value: "400$", label: "400$" },
    { value: "450$", label: "450$" },
    { value: "500$", label: "500$" },
  ];

  return (
    <div className={styled.dropdownContainer}>
      <div>
        <p className={styled.titleCar}>Car brand</p>
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "224px",
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "32px",
              borderRadius: "14px",
              background: "#f7f7fb",
              border: "none",
            }),
          }}
          options={optionsCars}
        />
      </div>
      <div>
        <p className={styled.titleCar}>Price/ 1 hour</p>
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "125px",
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "32px",
              borderRadius: "14px",
              background: "#f7f7fb",
              border: "none",
            }),
          }}
          placeholder={"To"}
          options={optionsPrise}
        />
      </div>
      <div>
        <label>
          <p className={styled.titleCar}>Car mileage / km</p>
          <div className={styled.carInputWrapper}>
            <input className={styled.carInputOne}></input>
            <input className={styled.carInputTwo}></input>
          </div>
        </label>
      </div>
      <div>
        <button className={styled.dropdownButton} type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
