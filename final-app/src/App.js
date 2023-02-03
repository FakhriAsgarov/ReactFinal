import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import LoginPage from "./Pages/LoginPage/LoginPage";
import MainPage from "./Pages/MainPage/MainPage";

import { Route, Routes } from 'react-router-dom'
import ShoppingPage from "./Pages/ShoppingPage/ShoppingPage";
import Cart from "./Pages/Cart/Cart";
import Login from "./Components/Login/Login";
function App() {
  return (
    <div>
   <Navbar/>
      <Routes>
                <Route path="/" element={ <MainPage/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/:category" element={<ShoppingPage/>}></Route>
                <Route path="/cart" element={ <Cart/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
            </Routes>
    </div>
  );
}

export default App;
