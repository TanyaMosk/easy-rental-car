const Pagination = ({ loadMore }) => {
  return (
    <button type="button" onClick={loadMore}>
      LOAD MORE
    </button>
  );
};

export default Pagination;
