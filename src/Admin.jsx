import React, { useEffect, useState } from "react";
import { createData, getData, updateData, deleteData } from "./servics/allApi";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  // Load products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      let res = await getData();
      setProducts(res?.data?.products || []);
    };
    fetchProducts();
  }, []);

  // Add product
  const handleAdd = async () => {
    if (!title || !price || !thumbnail) return alert("All fields are required!");

    const reqBody = { title, price: Number(price), thumbnail };
    const res = await createData(reqBody);

    // Add product to state
    setProducts((prev) => [...prev, res.data || { ...reqBody, id: Date.now() }]);
    setTitle("");
    setPrice("");
    setThumbnail("");
  };

  // Update product
  const handleUpdate = async () => {
    if (!title || !price || !thumbnail) return alert("All fields are required!");

    const reqBody = { title, price: Number(price), thumbnail };
    await updateData(editId, reqBody);

    setProducts((prev) =>
      prev.map((item) =>
        item.id === editId ? { ...item, title, price: Number(price), thumbnail } : item
      )
    );

    setTitle("");
    setPrice("");
    setThumbnail("");
    setEditId(null);
  };

 
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteData(id);
      setProducts((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container mt-4">
      <h4>Admin Panel</h4>

      <input
        type="text"
        className="form-control mt-3 mb-2"
        placeholder="Enter product title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Enter product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter product image URL"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />

      {editId ? (
        <button className="btn btn-warning me-2" onClick={handleUpdate}>
          Update Product
        </button>
      ) : (
        <button className="btn btn-primary me-2" onClick={handleAdd}>
          Add Product
        </button>
      )}

      <hr />

      <h5>Products List</h5>
      <ul className="list-group mt-3">
        {products.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px" }}
              />
              <div>
                <h6 className="mb-0">{item.title}</h6>
                <small>${item.price}</small>
              </div>
            </div>

            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => {
                  setEditId(item.id);
                  setTitle(item.title);
                  setPrice(item.price);
                  setThumbnail(item.thumbnail);
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
