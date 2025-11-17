import React from "react";


const ItemList = ({ products,addToCart}) => {
     
  return (
    <div className="row">
      {products?.map((item) => (
        <div className="col-md-4 mb-3" key={item.id}>
          <div className="card">
            <img
              src={item.thumbnail}
              className="card-img-top"
              style={{ height: "180px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h6>{item.title}</h6>
              <p>${item.price}</p>

              <button
                className="btn btn-primary "
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
