import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

function ProductTable({ addProductToCart, products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
        addProductToCart={addProductToCart}
      />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
