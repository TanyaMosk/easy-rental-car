import { useSearchParams } from "react-router-dom";
import CarCard from "../components/CarCard/CarCard";
import { useSelector } from "react-redux";
import LoadMore from "../components/LoadMore/LoadMore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "../redux/operations";
import styled from "./Catalog.module.css";
import { advertsSelector, isLoadingSelector } from "../redux/selectord";
import { resetAdverts } from "../redux/advertsSlice";
import Dropdown from "../components/Dropdown/Dropdown";

export const Catalog = () => {
  const { adverts } = useSelector(advertsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(1);
  const page = searchParams.get("page") ?? 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAdverts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    const nextPage = Number(page) + 1;
    setSearchParams({ page: nextPage });
    // setCurrentPage(nextPage);
  };

  return (
    <main>
      <section className={styled.catalogSection}>
        <Dropdown />
        {isLoading ? (
          <div>...Loading</div>
        ) : (
          <>
            <CarCard adverts={adverts} />
            {adverts.length && <LoadMore loadMore={handleLoadMore} />}
          </>
        )}
      </section>
    </main>
  );
};
