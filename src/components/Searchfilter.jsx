
import { Button} from '@mui/material'
import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

export const Searchfilter = (props) => {
  return (
    <div>
  
       <MDBBtn onClick={props.searchdata} className=" bg-blue-600 border ">search restaurant</MDBBtn>
    </div>
    
  )
}
