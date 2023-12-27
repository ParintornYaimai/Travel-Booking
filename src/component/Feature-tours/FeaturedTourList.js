import React,{useEffect, useState} from 'react'
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours.js'
import { Col } from 'reactstrap'
import axios from 'axios'

const FeaturedTourList = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API}/tours/search/getFeaturedTour`)
    .then(res=>{
      setData(res.data.data)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  return (
    <>
      { Array.isArray(data) && data.length >0 ? (
        data.map(item => {
          return (
            <Col lg="4" md="6" key={item.id}>
              <TourCard tour={item} />
            </Col>
          )
        })
      ):(
        <p>No data</p>
      )
      }
    </>
  )
}

export default FeaturedTourList