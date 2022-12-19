import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartImg from "../assets/images/cart.png";

function Cart() {
  const carts = useSelector((state) => state.products.carts);
  return (
    <div className="text-right">
      ({carts.length}){" "}
      <Link to="/cart">
        <img width="30" height="30" src={cartImg} alt="" />
      </Link>
    </div>
  );
}

export default Cart;
