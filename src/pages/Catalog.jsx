import { useSearchParams } from "react-router-dom";
import CarCard from "../components/CarCard/CarCard";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination/Pagination";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "../redux/operations";
import styled from "./Catalog.module.css";
import { advertsSelector } from "../redux/selectord";
import { resetAdverts } from "../redux/advertsSlice";

export const Catalog = () => {
  const { adverts } = useSelector(advertsSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(1);
  const page = searchParams.get("page") ?? 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAdverts());
  }, [dispatch]);

  console.log(page);
  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    const nextPage = Number(page) + 1;
    setSearchParams({ page: nextPage });
    // setCurrentPage(nextPage);
    console.log(page);
  };

  return (
    <main>
      <section className={styled.catalogSection}>
        <CarCard adverts={adverts} />
        <Pagination loadMore={handleLoadMore} />
      </section>
    </main>
  );
};
