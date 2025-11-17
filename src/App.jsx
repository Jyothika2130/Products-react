import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Listed from "./Listed";
import CartList from "./CartList";
import Header from "./Header";
import Admin from "./Admin";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Listed />} />
        <Route path="/items" element={<CartList />}/>
        <Route path="/admin" element={<Admin />}/>
      </Routes>
   </>
  );
}

export default App;
