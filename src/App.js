import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Cart } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
