import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Img from '../images/dark-knight.jpg'
import Jaw from '../images/jaw.png'
import './scroll.css'

export default function ScrollList(){

  return(

    <div id="container">
      <div>
        <IconButton>
          <ChevronLeftIcon/>
        </IconButton>
      </div>
      <ul class="images">
        <li><img src={Img}/></li>
        <li><img src={Jaw}/></li>
      </ul>
      <div>
        <IconButton>
          <ChevronRightIcon/>
        </IconButton>
      </div>
    </div>
  )
}
