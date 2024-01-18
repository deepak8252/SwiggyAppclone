import { Button } from '@mui/material'
import React from 'react'

const Toprated = (props) => {
  return (
    <div>
        <Button variant="contained" color="success"  onClick={props.data}>Top Rated restaurant</Button>
        
    </div>
  )
}

export default Toprated