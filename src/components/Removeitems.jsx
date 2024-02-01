import React from "react";
import { img_url } from "../util/contant";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Removecard } from "../util/cartSlice";

const Itemsmenu = ({ items }) => {
const cartitems=useDispatch((store)=>store.cart.items);
const handleadd=(itemid)=>{
  cartitems(Removecard(itemid));
}
  return (
    <div>
      { items && items.map((item) => (
        <div
          key={item.card.info.id}
          className=" flex p-2 m-2 border-b-2 text-left flex-wrap"
        >
          <div className=" w-9/12 flex  flex-col text-justify">
            <span className="p-2 font-bold">{item.card.info.name}</span>
            <span className="p-2">
              Rs
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p>{item.card.info.description}</p>
          </div>
          <div className=" 3/12 p-3">
           <div className=" absolute">
           <Button variant="contained" color="primary" className="mb-3" onClick={()=>handleadd(item.id)} >Remove items</Button>
           </div>
            <img
              src={img_url + item.card.info.imageId}
              alt={item.card.info.name}
              className=" w-32"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemsmenu;
