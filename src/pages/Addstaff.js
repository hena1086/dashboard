import React from 'react';
import axios from "axios";
// import CustomInput from "../components/CustomInput";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Addstaff = () => {
    const [data, setData] = useState({
        full_name: "",
        phoneno: "",
        email: "",
        idno: "",
        password: "",
        raddres: "",
        sposion: "",
        cdate: "",
        
      });
      const [error, setError] = useState("");
      const navigate = useNavigate();
    
      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url = "http://localhost:8080/api/ss/add";
          const { data: res } = await axios.post(url, data);
          navigate("/list-staff");
          console.log(res.message);
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(error.response.data.message);
          }
        }
    }
  return (
    <div>
      <div className="container">
        <div className="row">
          <br></br>
          <h1 className="text-center">Staff Registration Form</h1>
          <br></br>
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name:</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="full_name"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phoneno"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>ID Number:</label>
                  <input
                    type="text"
                    placeholder="Id Number"
                    name="idno"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Residential Address:</label>
                  <input
                    type="text"
                    placeholder="Residential Address"
                    name="raddres"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Staff Position:</label>
                  <input
                    type="text"
                    placeholder="Staff Position"
                    name="sposion"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Created  Date:</label>
                  <input
                    type="date"
                    placeholder="Created Date"
                    name="cdate"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                
                <br></br>
                <br></br>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addstaff