import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import { Nav } from "../components";
import "../assets/css/Home.css";

function Cart() {
  const carts = useSelector((state) => state.products.carts);

  return (
    <div className="app-wrap">
      <Nav />
      <div>
        <Table>
          {carts.length > 0 ? (
            <thead>
              <tr>
                <th>Tên</th>
                <th>giá</th>
                <th>số</th>
              </tr>
            </thead>
          ) : (
            "Giỏ trống"
          )}

          {carts.map((cart, index) => (
            <tbody key={index}>
              <tr>
                <td>{cart.name}</td>
                <td>{cart.price}</td>
                <td>{cart.quality}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default Cart;
