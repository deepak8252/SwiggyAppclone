import React, { useEffect, useState } from 'react'
import data from "../components/card.json";
import { FaStar } from "react-icons/fa";
import { img_url, menuapi } from '../util/contant';
import { useParams } from 'react-router-dom';
import Restcateogery from '../components/Restcateogery';
const Restromenupage = () => {
  const [restro,setrestro]=useState([]);
  const {resid}=useParams();
  console.log(resid);
  useEffect(()=>{
  // fetchdata();
  // setrestro(data)
  fetchdata();
  },[]);

  const fetchdata= async()=>{
    const data=await fetch(menuapi+resid);
    const result=await data.json();
    setrestro(result);
  }

const {name,cuisines,avgRating,costForTwoMessage}=restro?.data?.cards[0]?.card?.card?.info || {};
 const {itemCards}=restro?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
//  console.log(restro?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
 const cateogery=restro?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(item=>item?.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//  console.log(cateogery,"hello")
  return (
   <>
    <div className='flex justify-between mx-auto w-9/12 shadow-lg m-3 p-4 items-center'>
     <div >
      <h4 className='font-bold'>{name}</h4>
      <p className='font-bold'>{cuisines}</p>
      <p>{costForTwoMessage}</p>
     </div>
     <div className='flex justify-center items-center '>
      <h5>{avgRating}</h5>
      <h5 className='p-2'><FaStar className=" text-orange-400 "/></h5>
     </div>
    </div>
  
<div className=' w-9/12 mx-auto shadow-lg '>
  {
    cateogery && cateogery.map((item)=>(
     <Restcateogery key={item.card.card.itemCards.id} data={item?.card?.card}/>
    ))
  }
</div>
  
   </>
  )
}

export default Restromenupage