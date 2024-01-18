
import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

const Seach = (props) => {
  return (
    <div>
      
        <MDBBtn onClick={props.filterdata} >Top Rated Restaurant</MDBBtn>
    </div>
  )
}

export default Seach