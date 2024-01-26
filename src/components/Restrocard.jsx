
import { Button, Card } from "@mui/material";
import {data} from "../util/Restaurant"
import { useState ,useEffect, useContext} from 'react';
import { img_url } from "../util/contant";
import Toprated from "./Toprated";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Userdata from "../util/Userdata";
export default function Restrocard() {
  const [restdata,setrestdata]=useState([]);
  const [filterresdata,setfilterresdata]=useState([]);
  const [searchdata,setsearchdata]=useState();
 useEffect(()=>{
  setrestdata(data);
  setfilterresdata(data);

 },[]);
 const handletoprated=()=>{
  const toprest= filterresdata.filter((item)=>item.avgRatingString>4.3);
  setrestdata(toprest);
 };
 const changehandle=(e)=>{
   setsearchdata( e.target.value);
 }
 const searchrest=()=>{
  let filterData = filterresdata.filter((item) =>
  item?.name?.toLowerCase()?.includes(searchdata.toLowerCase()))
  setrestdata(filterData);
 };
 const {setusername,name}=useContext(Userdata);
  return (
<>
<div className="flex justify-between items-center p-3 flex-wrap gap-3">
<Toprated data={handletoprated}/>
<div>
<input type="text" placeholder="enter your name" className=" text  border-collapse"  value={searchdata} onChange={changehandle}/>
<Button variant="contained" color="success" onClick={searchrest}  >search restaurant</Button>
</div>
<label> USERNAME:</label>
<input type="text" className="text border-collapse" onChange={(e)=>{
setusername(e.target.value);
}}  value={name} />
</div>
<div className="flex flex-wrap justify-center items-center">
  
 {
  restdata.map((item)=>{
    return (
     <Card className="p-2 m-3 w-64 flex justify-center items-center flex-col" key={item.id}>
        <img src={img_url+item.cloudinaryImageId} alt={item.name} className="  w-64 h-40" />
        <h5 className="p-2">{item.name}</h5>
        <span className="flex justify-between items-center">{item.avgRatingString} <FaStar className=" text-orange-400"/></span>
        <div className="flex justify-between items-center">
          <span className="p-3">{item.costForTwo}</span>
           <span className="p-3">{item.areaName}</span>  
          
        </div>
       <NavLink to={"/restmenu/"+item.id} >
       <Button variant="contained" color="primary" className="mb-3" >view menu</Button>
        </NavLink> 

     </Card>
    
    )
  })
 }
</div>
</>
  );
}