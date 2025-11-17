import React from "react";
import { MdDelete } from "react-icons/md";

const CartList = ({ cartItems, setCartItems }) => {

 
  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);

  };
  

  return (
    <div>
      <h4>Cart Items ({cartItems.length})</h4>

      {cartItems.length == 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="card mb-2 p-2">
            <div className="d-flex align-items-center">
              <img
                src={item.thumbnail}
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
              <div className="ms-2">
                <h6 className="mb-0">{item.title}</h6>
                <small>${item.price}</small>
              </div>

              <button
                className="btn btn-outline-danger ms-4"
                onClick={() => handleDelete(item.id)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;
