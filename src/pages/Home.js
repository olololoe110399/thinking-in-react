import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SearchBar, Cart, ProductTable } from "../components";
import mockProducts from "../assets/mock/products";
import "../assets/css/Home.css";
import { add } from "../redux/productsSlice";

function Home() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(mockProducts);
  const [inStockOnly, setInStockOnly] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const newProducts = mockProducts.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (inStockOnly ? item.stocked : true)
    );
    setProducts(newProducts);
  }, [search, inStockOnly]);

  const addProductToCart = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="app-wrap">
      <Cart />
      <SearchBar
        filterText={search}
        inStockOnly={inStockOnly}
        onFilterTextChange={setSearch}
        onInStockChange={setInStockOnly}
      />
      <ProductTable products={products} addProductToCart={addProductToCart} />
    </div>
  );
}

export default Home;
