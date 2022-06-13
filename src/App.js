import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product/Product";
import Products from "./components/Products/Products";
import RequiredAuth from "./hoc/RequiredAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <RequiredAuth>
            <Home />
          </RequiredAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
    </div>;
}

export default App;
