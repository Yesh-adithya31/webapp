import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import ProductDetail from "./component/ProductDetail";
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:id' element={<ProductDetail/>} />
      </Routes>
    </>
  );
}

export default App;
