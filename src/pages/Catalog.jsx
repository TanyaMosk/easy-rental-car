import { useSearchParams } from "react-router-dom";
import CarCard from "../components/CarCard/CarCard";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination/Pagination";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "../redux/operations";
import styled from "./Catalog.module.css";

export const Catalog = () => {
  const { adverts } = useSelector((state) => state.adverts);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(1);
  const page = searchParams.get("page") ?? 1;

  const dispatch = useDispatch();
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
        <h1>Cars catalog page!</h1>
        <CarCard adverts={adverts} />
        <Pagination loadMore={handleLoadMore} />
      </section>
    </main>
  );
};

// export const Catalog = () => {
//   const { adverts } = useSelector((state) => state.adverts);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [currentPage, setCurrentPage] = useState(1);
//   const page = searchParams.get("page") ?? "";

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchCars());
//   }, [dispatch]);

//   const handleLoadMore = () => {
//     const nextPage = Number(page) + 1;
//     setSearchParams({ page: nextPage });
//     setCurrentPage(nextPage);
//   };

//   return (
//     <div>
//       <h1>Cars catalog page!</h1>
//       <CarCard adverts={adverts} />
//       <Pagination loadMore={handleLoadMore} />
//     </div>
//   );
// };
