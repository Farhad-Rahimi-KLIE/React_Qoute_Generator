import React, { useEffect, useState } from 'react'
import NetflexCard from './NetflexCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Netflex = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '83b41a465amshd41ec397225deabp1936d0jsnb1ca387627b7',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

    const [Data,setData] = useState([]);

    const generateData = async ()=>{
        try {
            let Apis = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
        const response = await fetch(Apis,options);
        const data = await response.json();
        setData(data.titles);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        generateData()
    })
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

  return (
    <Carousel responsive={responsive} showDots={true}>
      {
        Data.map((curElem)=>{
           return <NetflexCard key={curElem.summary.id} actualData={curElem}/>
        })
      }
   </Carousel>
  )
}

export default Netflex
