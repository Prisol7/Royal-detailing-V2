import React from "react";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';



import BookIcon from '@mui/icons-material/Book';
import ReviewsIcon from '@mui/icons-material/Reviews';
import InstagramIcon from '@mui/icons-material/Instagram';
import './BottomMenu.scss'
import { red } from "@mui/material/colors";

const BottomMenu = () => {
    const actions = [
        { icon: <InstagramIcon />, name: 'Inst agram' },
        { icon: <BookIcon />, name: 'Save' },
        { icon: <ReviewsIcon />, name: 'Print' },
        
      ];

      const handleClick1 = () => {
        // do something meaningful, Promises, if/else, whatever, and then
        window.location.assign('https://www.instagram.com/royaltreatmentdetails/');
      }
      const handleClick2 = () => {
        // do something meaningful, Promises, if/else, whatever, and then
        window.location.assign('https://visibook.com/royaltreatmentmobiledetailing');
      }

      const handleClick3 = () => {
        // do something meaningful, Promises, if/else, whatever, and then
        window.location.assign('https://www.yelp.com/biz/royal-treatment-lynwood?osq=royal+treatment');
      }


    return(
        
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon />}
        className='speeddial'
        
      >
        
          <SpeedDialAction
            key='Instagram'
            icon={<InstagramIcon />}
            tooltipTitle='Instagram'
            onClick={handleClick1}
          />
          
          
          <SpeedDialAction
            key='Appointments'
            icon={<BookIcon />}
            tooltipTitle='Appointments'
            onClick={handleClick2}
          />
          
          <SpeedDialAction
            key='Reviews'
            icon={<ReviewsIcon />}
            tooltipTitle='Reviews'
            onClick={handleClick3}
          />
        
       
      </SpeedDial>
    
    )
}
export default BottomMenu;