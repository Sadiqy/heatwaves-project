import '../components/header.css';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import pointer from '../img/pointer.JPG'


const useStyles = makeStyles((theme) => ({
    root: {
        width: 540,
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
      },
      
    },
    whiteChip: {
        fontFamily: '"Nunito", sans-serif',
        fontWeight: 800,
        fontSize: 14,
        backgroundColor: 'white',
        //color: 'black',
        borderWidth: '1.5px',
        borderColor: 'black !important',
    },
    
    mapChip: {
        '&:hover': {
            backgroundColor: "#5175BB !important",
         },
        backgroundColor: "black",
        color: "white",
        marginLeft: 10,
         marginTop: 15,
        fontWeight: 800,
        //flexWrap: 'wrap',

    }
    
  }));

  const BreakLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
        
        }}
    />
);


function Header2() {
    const classes = useStyles();

    return (
        <div className='header-container' style={{marginBottom:'250px'}}>
            <div>
                <h1>We look forward to partnering<br />with you. Lorem ipsum.</h1>
            </div>

            <Chip

                    label="Sign Up"
                    clickable
                    variant="outlined"
                    className={classes.whiteChip + " " + classes.mapChip}
                    
                    
                /> 

            <div className="breakeline-wrapper"><BreakLine color="#7F7C75" /></div>
            <div className="flex-gap">
                <div><img style={{ marginTop: '10px' }} src={pointer} /></div>
                <div><h5 className="belowLine">Learn more about our care providers and guiding principles to see if we're a<br />
                good fit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5></div>
            </div>

        </div>

        

        
    );
  }
  
  export default Header2;
