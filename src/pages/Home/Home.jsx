import bg from "../../image/bg.jpg";
import styled from "./Home.module.css";

const Home = () => {
  return (
    <div className={styled.homeContainer}>
      <img className={styled.imageHome} src={bg} alt="Rental car" />
      <div className={styled.textWrapper}>
        <h1 className={styled.titleHome}>Easy rental car</h1>
        <div className={styled.welcomeTextWrapper}>
          <p className={styled.welcomeText}>
            Welcome to Easy Rental Car - your reliable partner in the world of
            car rental. We offer a wide selection of quality cars for every
            taste and need. Whether you're looking for a car to get from point A
            to point B or planning a vacation in comfort and style, we've got
            the right option for every customer.
          </p>
          <p className={styled.welcomeText}>
            Our cars are the reliability, comfort and safety you deserve. We
            make car rental simple and convenient with a transparent booking
            system and friendly customer service. Our goal is to provide you
            with the best experience in the car rental world.
          </p>
          <p className={styled.welcomeText}>
            Convenient location of rental points, flexible rates and an
            individual approach to each client - this is what makes us your best
            choice in the field of car rental. Choose Easy Rental Car for your
            next trip and be sure of the impeccable quality of service and cars
            we offer. Let us make your trip even more pleasant and safe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
