import styled from "./LoadMore.module.css";

const LoadMore = ({ loadMore }) => {
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

export default LoadMore;
