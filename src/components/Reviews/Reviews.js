import React from "react";
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Reviews.scss'

const ReviewCard = () => {
    return(
        <div className='reviewcard'>
            <div className='reviewitem'>
            <Card variant="outlined" className='Tiktok'>
                <CardContent>
                    
                    <Typography variant="h5" component="div"paragraph gutterBottom>
                        "I asked for a quote, he got back to me quickly with the best price"
                    </Typography>
                   
                </CardContent>
            </Card>
            
            
            <Card variant="outlined" className='Tiktok'>
                <CardContent>
                    
                    <Typography variant="h5" component="div" gutterBottom paragraph>
                    "Book an appointment with this guy. I asked for a quote, he got back to me quickly with the best price. 
                    Long story short, he beat everyone's price,
                     came to my location of choice and did an excellent job. I only asked him to do the interior"
                    </Typography>
                    
                </CardContent>
            </Card>
            </div>
           

        </div>

    )
}
export default ReviewCard;