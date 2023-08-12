import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products';
import ProductItem from './Components/ProductItem';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route index element={<Products />} />
          <Route path='/:id' element={<ProductItem />} />
          <Route path='/category/:category' element={<Products isCategory={true} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
