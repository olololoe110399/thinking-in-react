import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import back from "../assets/images/arrow-back.png";
import { reset } from "../redux/productsSlice";

function Nav() {
  const dispatch = useDispatch();

  const resetCart = () => {
    dispatch(reset());
  };

  return (
    <div className="text-between">
      <Link to="/">
        <img width="30" height="30" src={back} alt="" />
      </Link>
      <button className="reset-btn" onClick={resetCart}>
        Làm mới
      </button>
    </div>
  );
}

export default Nav;
