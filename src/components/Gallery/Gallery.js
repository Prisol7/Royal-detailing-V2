import React from "react";
import './Gallery.scss';
import Car4 from '../../pictures/car4.jpg';
import Car5 from '../../pictures/car5.jpg';
import Car6 from '../../pictures/car7.jpg';
import Car3 from '../../pictures/car3.jpg';
const Gallery = () => {
    return(
        <div className='parent'>
            <div className='child child1'>
                <img src={Car4} className='carImage'/>
            </div>
            <div className='child child2'>
                <img src={Car5} className='carImage'/>
            </div>
            <div className='child child3'>
                <img src={Car6} className='carImage'/>
            </div>
            <div className='child child4'>
                <img src={Car3} className='carImage'/>
            </div>
            <div className='child child5'></div>
            <div className='child child6'></div>
        </div>
    )
}

export default Gallery;