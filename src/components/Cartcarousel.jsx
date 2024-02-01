import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "../util/delhimenu.json";
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Button, Card } from "@mui/material";
import { NavLink } from "react-router-dom";
import { img_url } from "../util/contant";
var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 
const Cartcarousel = () => {
    const[delhimenu,setdelhimenu]=useState([]);
    useEffect(()=>{
        const restdata=data?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants ;
        setdelhimenu(restdata);
        console.log(data);
    },[])
  return (
   
    <>
    <div className=' w-full bg-gray-900 my-5 py-5'>
    <div className=" w-3/4 mx-auto ">
               

               <div className="my-10">
               <Slider {...settings}>
               {
                 delhimenu &&  delhimenu.map((item)=>(
                     <>
                      <Card className="p-2 m-3  flex justify-center items-center flex-col" key={item.info.id}>
        <img src={img_url+item.info?.cloudinaryImageId} alt={item.name} className="  w-64 h-64 rounded-full" />
        {/* <h5 className="p-2">{item?.info?.name}</h5> */}
      
       <NavLink to={"/restmenu/"+item?.info?.id} >
       <Button variant="contained" color="primary" className=" my-3" >view menu</Button>
        </NavLink> 

     </Card>
                     </>
                  ))
               }
                </Slider>
               </div>
              
              </div>
    </div>
    </>
  )
}

export default Cartcarousel