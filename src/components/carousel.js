import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
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
    <h1>Helllllooooo</h1>



export default Slider;