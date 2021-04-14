import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Slider4 from './slider4';
import Slider5 from './slider5';

function Carousel2(props)
{
    var items = [
        <Slider4/>,
        <Slider5/>
    ]

    return (
        <Carousel animation='slide' navButtonsAlwaysVisible='true'>
            {
                items.map( (item, i) => item )
            }

            
        </Carousel>

        
        )
    }



export default Carousel2;