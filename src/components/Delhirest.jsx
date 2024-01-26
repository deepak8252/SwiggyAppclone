import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { Button, Card } from "@mui/material";
import { NavLink } from "react-router-dom";
import { img_url } from "../util/contant";
import data from "../util/delhimenu.json";
const Delhirest = () => {
    const [delhirest,setdelhirest]=useState([]);
    useEffect(()=>{
     fetchdata();
    },[]);
    const fetchdata=async()=>{
  // const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.65420&lng=77.23730");
  // const result=await data.json();
  console.log(data,"delhi");
const restdata=data?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants ;
setdelhirest(restdata);
console.log(restdata)
    }
   
  return (
   <>
     <h2 className='text-center capitalize my-4 '>top restaurant in delhi</h2>
    <div className="flex flex-wrap justify-center items-center">
            {
              delhirest && delhirest.map((item)=>(
                
                    <Card className="p-2 m-3 w-64 flex justify-center items-center flex-col" key={item.info.id}>
        <img src={img_url+item.info?.cloudinaryImageId} alt={item.name} className="  w-64 h-40" />
        <h5 className="p-2">{item?.info?.name}</h5>
        <span className="flex justify-between items-center">{item?.info?.avgRatingString} <FaStar className=" text-orange-400"/></span>
        <div className="flex justify-between items-center">
          <span className="p-3">{item?.info?.costForTwo}</span>
           <span className="p-3">{item.info?.areaName}</span>  
          
        </div>
       <NavLink to={"/restmenu/"+item?.info?.id} >
       <Button variant="contained" color="primary" className="mb-3" >view menu</Button>
        </NavLink> 

     </Card>
                ))
            }

    </div>   
   </>     
  )
}

export default Delhirest