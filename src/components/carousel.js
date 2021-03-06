import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Slider1 from './slider1';
import Slider2 from './slider2';
import Slider3 from './slider3';

function Slider(props)
{
    var items = [
        <Slider1/>,
        <Slider2/>,
        <Slider3/>
    ]

    return (
        <Carousel animation='slide' navButtonsAlwaysVisible='true'>
            {
                items.map( (item, i) => item )
            }

            
        </Carousel>

        
        )
    }



export default Slider;