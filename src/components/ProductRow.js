import React from "react";

function ProductRow({ product, addProductToCart }) {
  return (
    <tr>
      <td>
        <img
          className="product-img"
          src={product.preview_image}
          alt={product.name}
        />
      </td>
      <td className="align-top">
        <p>{product.name}</p>
        <div className="d-flex flex-justify-between">
          <div>
            <span className="text-red">{product.price}</span>
            {!product.stocked && (
              <>
                <br />
                <span className="text-orange">Tạm hết hàng</span>
              </>
            )}
          </div>
          <div>
            {product.stocked && (
              <button
                className="primary-btn"
                onClick={() => addProductToCart(product)}
              >
                Thêm vào giỏ hàng
              </button>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
}

export default ProductRow;
