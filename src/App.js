import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from './components/ProductDetails';
import ShopCart from './components/ShopCart';
import Navbar from './components/shared/Navbar';
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/" element={<Navigate to="/products" />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
