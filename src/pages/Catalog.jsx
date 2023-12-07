import CarCard from "../components/CarCard/CarCard";
import { useSelector } from "react-redux";

export const Catalog = () => {
  const { adverts } = useSelector((state) => state.adverts);
  return (
    <div>
      <h1>Cars catalog page!</h1>
      <CarCard adverts={adverts} />
    </div>
  );
};
