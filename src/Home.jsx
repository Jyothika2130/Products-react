import React, { useEffect, useState } from "react";
import { getData } from "./servics/allApi";
import Listed from "./Listed";
import CartList from "./CartList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const loadData = async () => {
    let res = await getData();
    if (res.status == 200) {
      setProducts(res.data.products);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]); 
  };

  return (
    <div className="container mt-4">

      <div className="row">
       
        <div className="col-md-8">
          <Listed products={products} addToCart={addToCart} />
        </div>

        
        <div className="col-md-4">
          <CartList cartItems={cartItems} />
        </div>
      </div>

    </div>
  );
};

export default Home
