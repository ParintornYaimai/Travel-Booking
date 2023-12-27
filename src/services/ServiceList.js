import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationsImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title: 'Weather',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum.'
    },
    {
        imgUrl: guideImg,
        title: 'Weather',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum.'
    },
    {
        imgUrl: customizationsImg,
        title: 'Weather',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatum.'
    },
] 


const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((item, index) => {
            return (
                <Col lg='3' key={index}>
                    <ServiceCard item={item}/>
                </Col>
            )
        })
    }
    </>
  )
}

export default ServiceList