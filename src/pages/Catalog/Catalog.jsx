import { useSearchParams } from "react-router-dom";
import CarCard from "../../components/CarCard/CarCard";
import { useSelector } from "react-redux";
import LoadMore from "../../components/LoadMore/LoadMore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "../../redux/operations";
import styled from "./Catalog.module.css";
import {
  advertsSelector,
  filterSelector,
  isLoadingSelector,
} from "../../redux/selectord";
import { addFilter, resetAdverts } from "../../redux/advertsSlice";
import Dropdown from "../../components/Dropdown/Dropdown";

const Catalog = () => {
  const { adverts } = useSelector(advertsSelector);
  const filter = useSelector(filterSelector);

  const isLoading = useSelector(isLoadingSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAdverts());
    // setSearchParams({ page: 1 });
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  // useEffect(() => {
  //   dispatch(fetchCars());
  // }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = Number(page) + 1;
    setSearchParams({ page: nextPage });
  };

  console.log(filter);

  const visibilAdverts = adverts.filter((advert) => advert.make === filter);

  return (
    <main>
      <section className={styled.catalogSection}>
        <Dropdown />
        {isLoading ? (
          <div>...Loading</div>
        ) : (
          <>
            {/* <CarCard adverts={adverts} /> */}
            {filter === "" ? ( // Додана перевірка filter === ""
              <CarCard adverts={adverts} />
            ) : (
              <CarCard adverts={visibilAdverts} />
            )}
            {adverts.length && <LoadMore loadMore={handleLoadMore} />}
          </>
        )}
      </section>
    </main>
  );
};

export default Catalog;
