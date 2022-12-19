import React from "react";

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockChange,
}) {
  const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleInStockChange = (e) => {
    onInStockChange(e.target.checked);
  };

  return (
    <form>
      <input
        className="search-input"
        type="text"
        placeholder="Tìm kiếm..."
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockChange}
        />{" "}
        Chỉ hiển thị sản phẩm còn hàng trong kho
      </p>
    </form>
  );
}

export default SearchBar;
