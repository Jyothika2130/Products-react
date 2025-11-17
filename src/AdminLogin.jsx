import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getAdminData } from "./servics/allApi";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const onLogin = async () => {
    if (!loginData.username || !loginData.password) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please enter both Username and Password",
      });
      return;
    }

    try {
      const response = await getAdminData() 

      if (response.status == 200) {
        const adminList = response.data;

        const matchedAdmin = adminList.find(
          (admin) =>
            admin.name === loginData.username &&
            admin.password === loginData.password
        );

        if (matchedAdmin) {
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Redirecting to Admin Panel...",
            timer: 1500,
            showConfirmButton: false,
          });

          
          navigate("/admin");
        } else {
          Swal.fire({
            icon: "error",
            title: "Invalid Credentials",
            text: "Username or Password is incorrect",
          });
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong! Try again later.",
      });
      console.error(error);
    }
  };

  const box = {
    width: "350px",
    backgroundColor: "white",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
    padding: "30px",
    margin: "100px auto",
    borderRadius: "10px",
  };

  return (
    <div style={box}>
      <h3 className="text-primary text-center mb-4">Admin Login</h3>

      <input
        type="text"
        placeholder="Username"
        className="form-control mb-3"
        value={loginData.username}
        onChange={(e) =>
          setLoginData({ ...loginData, username: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="form-control mb-4"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
      />

      <button className="btn btn-primary w-100" onClick={onLogin}>
        LOGIN
      </button>
    </div>
  );
};

export default AdminLogin;
