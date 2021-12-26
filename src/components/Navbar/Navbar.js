import React from "react";
import './Navbar.scss';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import BookIcon from '@mui/icons-material/Book';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { useTheme } from '@mui/material/styles';



const Nav = () => {
    const theme = useTheme();
    return(
    <div className='nav'>
      <div className='title'>
      Royal Treatment Detailing
      

      </div>
    
      <div className='container'>
        <a className='dope' href='https://www.instagram.com/royaltreatmentdetails/'>
            <div className='item'>
                <InstagramIcon fontSize="large" className='icon' sx={{}}/>
                <span className='text'>Instagram</span>
            </div>
        </a>
        <a className='dope' href='https://visibook.com/royaltreatmentmobiledetailing'>
            <div className='item'>
                <BookIcon fontSize="large" className='icon' sx={{}}/>
                <span className='text'>Appointments</span>
            </div>
        </a>
        <a className='dope' href='https://www.yelp.com/biz/royal-treatment-lynwood?osq=royal+treatment'>
            <div className='item'>
                <ReviewsIcon fontSize="large" className='icon' sx={{}}/>
                <span className='text'>Reviews</span>
            </div>
        </a>
                      
        
      </div>
      
      
    </div>
    )
}

export default Nav;

