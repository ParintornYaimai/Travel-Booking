import React, { useState } from "react";
import "./search-bar-.css";
import { Col, Form, FormGroup } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    location: "",
    distance: "",
    maxGroupSize: 0,
  });
  const [resdata,setResdata] = useState([])

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      data.location === "" ||
      data.distance === "" ||
      data.maxGroupSize === ""
    ) {
      return alert("Please fill all the fields");
    }
   
    axios.get(
      `${process.env.REACT_APP_API}/tours/search/getTourBySearch?city=${data.location}&distance=${data.distance}&maxGroupSize=${data.maxGroupSize}`
    )
    .then (res=>{
      setResdata(res.data.data)
      console.log(res.data.data.title);
    })
    .catch(err=>{
      console.log(err);
    })
  };
 

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form
          className="d-flex align-items-center gap-4"
          onSubmit={handleSubmit}
        >
          <FormGroup className="d-flex  gap-3 form__group form__group form__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                id="location"
                type="text"
                placeholder="Where atre you going?"
                onChange={handleChange}
              ></input>
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group form__group-fast">
            <span>
              <i class="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input
                id="distance"
                type="text"
                placeholder="Distance k/m"
                onChange={handleChange}
              ></input>
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group form__group-fast">
            <span>
              <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>Max people</h6>
              <input
                id="maxGroupSize"
                type="text"
                placeholder="0"
                onChange={handleChange}
              ></input>
            </div>
          </FormGroup>

          <button className="search__icon" type="submit">
            <i class="ri-search-line"></i>
          </button>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
