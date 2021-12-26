import React from "react";
import { Paper, Typography } from "@mui/material";
import './Body.scss'
import BodyCar from '../../pictures/car2.jpg'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Gallery from "../Gallery/Gallery";

const Body = () => {

    return(
        <div className='cont' >
            <div className='paper1 paper' >
                <Typography variant='h4' >
                    LET US CLEAN YOUR CAR
                </Typography>
                <Typography variant='h6' sx={{paddingBottom: '10px'}} gutterBottom>
                Here at Royal Treatment We Take Pride In Our Work And Treat Every Car Just Like Its Our Own.
                </Typography>
                <img src={BodyCar} className='carimage'/>
            </div>
            <div className='paper2 paper'>
                <Typography variant='h4'>
                    Ultimatedeal Pachage
                </Typography>
                <Typography variant='h5' >
                    $350 
                </Typography>
                <Typography>
                    -Wash and Conditioning <br />
                    -Tire Degreasing <br />
                    -Tire Shine <br />
                    -Rim Polish <br />
                    -Clarbar <br />
                    -Engine Bay Cleaning <br />
                    -!st Step Paint Correction<br />
                    -Chemical Guys Hyper Wax Application <br />
                    -Sealed with Ceramic Coating 3 year protection <br />
                    -Interior Detail w/ Vinyl Protection <br />
                    -Steam CLeaning <br />
                    -Leather Treatment / SHampooing of Seats and Floor Mats <br />
                    -Detailed Vacuum <br />
                    -Pet Hair, Sand, Floors and Headliner Will be Additional<br />
                </Typography>
            </div>
            
        </div>
        
    )
}

export default Body;