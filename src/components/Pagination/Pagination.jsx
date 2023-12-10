// import { useSelector } from "react-redux";
import styled from "./Pagination.module.css";
// import { isLoadingSelector } from "../../redux/selectord";

const Pagination = ({ loadMore }) => {
  // const { isLoading } = useSelector(isLoadingSelector);

  // console.log(isLoading);
  return (
    <>
      <div className={styled.buttonLoadMoreWrapper}>
        <button
          className={styled.buttonLoadMore}
          type="button"
          onClick={loadMore}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default Pagination;
