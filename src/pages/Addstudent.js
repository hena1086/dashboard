import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Addstudent = () => {
  const [data, setData] = useState({
    full_name: "",
    idno: "",
    email: "",
    password: "",
    phonno: "",
    bdate: "",
    department: "",
    raddres: "",
    cenrollement: "",
    cschedule: "",
    sdate: "",
    edate: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/stud/add";
      const { data: res } = await axios.post(url, data);
      navigate("/list-student");
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
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <br></br>
          <h1 className="text-center">Student Registration Form</h1>
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
                  <label>Id Number:</label>
                  <input
                    type="text"
                    placeholder="Id Number"
                    name="idno"
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
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phonno"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Date of Birth:</label>
                  <input
                    type="date"
                    placeholder="Birth Date"
                    name="bdate"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Departement:</label>
                  <input
                    type="text"
                    placeholder="Departement"
                    name="department"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Photo:</label>
                  <input
                    type="file"
                    placeholder="Photo"
                    name="photo"
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
                  <label>Class Enrollement:</label>
                  <input
                    type="date"
                    placeholder="class enrollement"
                    name="cenrollement"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Class Schedule:</label>
                  <input
                    type="date"
                    placeholder="Class Schedule"
                    name="cschedule"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Starting Date:</label>
                  <input
                    type="date"
                    placeholder="Starting Date"
                    name="sdate"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Ending Date:</label>
                  <input
                    type="date"
                    placeholder="Ending Date"
                    name="edate"
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

export default Addstudent