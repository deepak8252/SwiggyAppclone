import { Button } from '@mui/base'
import React,{useState,useEffect} from 'react'
import Restrocard from './Restrocard';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Delhirest from './Delhirest';
import Cartcarousel from './Cartcarousel';

const Body = () => {
  

  return (
    <div>
     
       <Restrocard/>
       <Cartcarousel/>
       <Delhirest/>
       
    </div>
  )
}

export default Body