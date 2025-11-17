import axiosConfig from "./axiosConfig";


export const getData = async () => {
  return await axiosConfig(
    "get",
    "https://dummyjson.com/products",
    ""
  );
};


export const createData = async (reqBody) => {
  return await axiosConfig(
    "post",
    "https://dummyjson.com/products/add",
    reqBody
  );
};


export const updateData = async (id, reqBody) => {
  return await axiosConfig(
    "put",
    `https://dummyjson.com/products/${id}`,
    reqBody
  );
};


export const deleteData = async (id) => {
  return await axiosConfig(
    "delete",
    `https://dummyjson.com/products/${id}`,
    ""
  );
};

export const getAdminData = async () => {
  return await axiosConfig(
    "get",
    "http://localhost:3000/details",
    ""
  );
};