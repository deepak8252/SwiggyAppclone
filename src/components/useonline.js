import { useState } from "react"

 export const useonline=()=>{
   const [online,setonline]=useState(true);
   window.addEventListener("offline",()=>{
    setonline(false)
   },[])
   window.addEventListener("online",()=>{
    setonline(true);
   })
   return online
}