import { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";

function Form() {
  //initialize data elements
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //submit url
  const API_URL = "http://developers.gictsystems.com/api/dummy/submit/";
  const AUTH_TOKEN = "Bearer ALDJAK23423JKSLAJAF23423J23SAD3";

  //   regex for checking if email is valid
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const handleValidation = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !address) {
      swal("Inputs Error", "Kindly fill in all the fields", "warning");
    } else if (!validEmail.test(email)) {
      //If email is in incorrect format
      swal("Email Error", "Kindly enter a valid email address", "warning");
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const formData = { name, email, phone, address };

    // const response = await fetch(
    //   "http://developers.gictsystems.com/api/dummy/items/",
    //   {
    //     method: "GET",
    //     headers: {
    //       mode: "cors",
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer ALDJAK23423JKSLAJAF23423J23SAD3",
    //     },
    //   }
    // );
    // console.log(response);
    try {
      const res = await axios.get("/api/");
      console.log("res");
      console.log(res);
    } catch (e) {
      console.log("Error");
      console.log(e);
    }
  };

  return (
    <div>
      <form id="form" className="p-4 m-5 rounded" onSubmit={handleValidation}>
        <h4 className="mx-auto text-center m-3">
          Please fill in the details below
        </h4>
        <div className="form-group mt-2">
          <label for="name">Full Names</label>
          <input
            value={name}
            name="names"
            type="text"
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group mt-2">
          <label for="name">Email</label>
          <input
            value={email}
            name="email"
            type="email"
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group mt-2">
          <label for="phone">Phone</label>
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            name="phone"
            type="number"
            className="form-control"
          />
        </div>
        <div className="form-group mt-2">
          <label for="address">Address</label>
          <input
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            name="address"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group mt-2 d-flex justify-content-end mt-3">
          <input name="submit" type="submit" className="btn btn-success " />
        </div>
      </form>
    </div>
  );
}

export default Form;
