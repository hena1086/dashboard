import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";



const Addproduct = () => {
  const [data, setData] = useState({
		full_name:"",
		phonno: "",
		email: "",
		idno: "",
		password: "",
    raddres:"",
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
			navigate("/Productlist");
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
      <h3 className="mb-4 title">Add Staff</h3>
      <div>
        <form onSubmit={handleSubmit}
      
          className="d-flex gap-3 flex-column"
        >
         	<CustomInput
              label="Enter  Full Name"
							type="text"
          
							name="full_name"
							onChange={handleChange}
							value={data.full_name}
           
							required
         
							className={styles.input}
						/>
							<CustomInput
							type="text"
							placeholder="phono"
							name="phonno"
              label="Phonno"
							onChange={handleChange}
							
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="email"
							name="email"
							onChange={handleChange}
					
							required
							className={styles.input1}
						/>
					<CustomInput
							type="text"
							placeholder="id no"
							name="idno"
							onChange={handleChange}
              label="Enter  Id  No"
							required
							className={styles.input}
						/>
						<CustomInput
							type="password"
							placeholder="password"
							name="password"
              label="Enter  Password"
							onChange={handleChange}
							
							required
							className={styles.input}
						/>
			
							<CustomInput
							type="date"
							placeholder="Addres"
							name="cdate"
							onChange={handleChange}
              label="Address"
							required
							className={styles.input}
						/>
						{/* <label className={styles.ll_btn}>Class Assigned</label> */}
							<CustomInput
							type="text"
							placeholder="Position"
							name="sposion"
							onChange={handleChange}
                            label="Enter  Posion Name"
							required
							className={styles.input}
						/>	
								 

          
     
    
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Staff
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
