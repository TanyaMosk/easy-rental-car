import styled from "./Dropdown.module.css";

const Dropdown = () => {
  return (
    <div className={styled.dropdownContainer}>
      <div>
        <p>Car brand</p>
        <select>
          <option>Buick</option>
          <option>Volvo</option>
          <option>HUMMER</option>
        </select>
      </div>
      <div>
        <p>Price/ 1 hour</p>
        <select>
          To
          <option>40$</option>
          <option>50$</option>
          <option>60$</option>
        </select>
      </div>
      <div>
        <label>
          <p>Car mileage / km</p>
          <input></input>
          <input></input>
        </label>
      </div>
      <button type="button">Search</button>
    </div>
  );
};

export default Dropdown;
