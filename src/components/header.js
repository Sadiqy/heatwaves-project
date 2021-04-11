import React from 'react'
import '../components/header.css';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import rockOn from '../img/rockOn.JPG';

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
    addictionChip: {
        '&:hover': {
            backgroundColor: "#E1F1FF !important",
         }
    },
    anxietyChip: {
        '&:hover': {
            backgroundColor: "#FFB7A2 !important",
         }
    },
    cbtChip: {
        '&:hover': {
            backgroundColor: "brown !important",
         }
    },
    depressionChip: {
        '&:hover': {
            backgroundColor: "orange !important",
         }
    },
    griefChip: {
        '&:hover': {
            backgroundColor: "#E9C4B2 !important",
         }
    },
    ptsdChip: {
        '&:hover': {
            backgroundColor: "#AFD5C2 !important",
         }
    },
    substanceChip: {
        '&:hover': {
            backgroundColor: "#AFBEEF !important",
         }
    },
    loremChip: {
        '&:hover': {
            backgroundColor: "pink !important",
         }
    },

    mapChip: {
        '&:hover': {
            backgroundColor: "#5175BB !important",
         },
        backgroundColor: "black",
        color: "white",
        marginLeft: 10,
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

  


function Header() {
  const classes = useStyles();
  


  return (
    <div className = 'header-container'>
        <div className="text-chips">
            <h1>Discover affordable mental health care providers near you for:</h1>
            <div className={classes.root}>
                <Chip
                    //onClick={handleClick}
                    label="Addiction"
                    clickable
                    variant="outlined"
                    className={classes.whiteChip + " " + classes.addictionChip }
                    
                    
                />
                <Chip
                    label="Anxiety"
                    clickable
                    variant="outlined"
                    className={classes.whiteChip + " " + classes.anxietyChip }
                />
                <Chip
                    label="CBT"
                    clickable
                    variant="outlined"
                    className={classes.whiteChip + " " + classes.cbtChip}
                />
                <Chip
                    label="Depression"
                    clickable
                    variant="outlined"
                    className={classes.whiteChip + " " + classes.depressionChip}
                />
                <Chip
                    label="Grief"
                    clickable
                    variant="outlined"
                    className={classes.whiteChip + " " + classes.griefChip}
                />
                <Chip
                    label="PTSD"
                    clickable
                    variant="outlined"
                    className={classes.whiteChip + " " + classes.ptsdChip}
                />
                <Chip
                    label="Substance Abuse"
                    clickable
                    variant="outlined"
                    className={classes.whiteChip + " " + classes.substanceChip}
                />
                <Chip
                    label="Lorem Ipsum"
                    clickable
                    variant="outlined"
                    className={classes.whiteChip + " " + classes.loremChip}
                />
            </div>

            <Chip

                    label="View the map"
                    clickable
                    variant="outlined"
                    className={classes.whiteChip + " " + classes.mapChip}
                    
                    
                />     
        </div>

          <div className="breakeline-wrapper"><BreakLine color="#7F7C75" /></div>
          <div className="flex-gap">
              <div><img src={rockOn} /></div>
              <div><h5 className="belowLine">We're s 501(c)(3) Nonprofit Organization listing affordable accessible care in all<br/> 50 states.
                                                Loremipsum dolor sit amet, consectetur adipiscing elit.</h5></div>
          </div>


        

         

        
        
          
            
          
    </div>
  );
}

export default Header;
