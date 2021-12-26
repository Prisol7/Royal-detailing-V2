import React from "react";
import Paper from '@mui/material/Paper';
import './Hero.scss';
import BackgroundCar from '../../pictures/car6.jpg'



const Hero = () => {
    return(
        <Paper className='hero'>
            <img src={BackgroundCar} />
            
        </Paper>
        
       
    )
}

export default Hero;
