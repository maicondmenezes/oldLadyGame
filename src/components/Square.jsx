import './Square.css'
import React from 'react'
import { Button } from '@material-ui/core';
export default props => 
  <Button 
    variant   ='outlined'
    className ='Square'      
  >
    {props.playerSimbol}
  </Button>    