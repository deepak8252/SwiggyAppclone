import { useState } from "react"
import Itemsmenu from "./Itemsmenu"

const Restcateogery=({data})=>{
    const [showmenu,setshowmenu]=useState(false)
    const handleclick=()=>{
        setshowmenu(!showmenu)
    }
 return(
    <>
   <div className="cursor-pointer text-center items-center my-4 shadow-lg  px-5 py-2  gap-5">
  <div className="justify-between flex" onClick={handleclick}>
  <span  className="  cursor-pointer pt-3 font-bold">{data.title}-({data.itemCards.length})</span>
   <span className=" cursor-pointer pt-3">🔽</span>
  </div>
 {showmenu && <Itemsmenu  items={data.itemCards}/>} 
   </div>

    </>
 )
}
export default Restcateogery