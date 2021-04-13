import React from 'react'
import './gridBody.css';
import { Row, Col, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        width: 540,
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
      },
      
    },
    search: {
        fontFamily: '"Nunito", sans-serif',
        marginLeft: '650px',
        marginTop:'100px',
        fontWeight: 800,
        fontSize: 14,
        backgroundColor: 'black',
        display: 'center',
        color: 'white',
        borderWidth: '1.5px',
        borderColor: 'black !important',
        '&:hover': {
            backgroundColor: "#5175BB !important",
         },
    }
}))

function GridBody() {

    const classes = useStyles();
    return (
        <div className='gridbody-container'>
        
        <h1 id='helpful'>Helpful tips to secure<br />affordable therapy</h1>


            <div className='d-flex justify-content-between'>

                
                        <Col xs="6" sm="4">
                            <div className='gridPlaceholder'></div>
                            <h4>Ask about Affordable Care</h4>
                            <h5 className='gridText'>Sliding Scale is a payment structure that allows people to pay for services in proportion to personal factors,
                             such as income.</h5>
                            <h5 className='blueText'>Even if a provider seems to expensive--and even if you didn't find them there--you can alwaysreach out to see if they'll work out a different price for you</h5>
                        </Col>
                        <Col xs="6" sm="4">
                            <div className='gridPlaceholder'></div>
                            <h4>Know Up Front</h4>
                            <h5 className='gridText'>Some providers might charge for you first session or might do a free intake session,
                             so always make sure you explain your situation and get a quoute up front</h5>
                            <h5 className='blueText'>Many providers reserve affordable spots so they can offer sliding scale and/or free sessions, so don't be afraid to ask.</h5>

                        </Col>
                        <Col sm="4">
                            <div className='gridPlaceholder'></div>
                            <h4>Share the care</h4>
                            <h5 className='gridText'>Once you find a therapist in our network,
                             share the care by submitting the provider's details to our database, so other people can find them.</h5>
                            <h5 className='blueText'>*We rely on our own discovery and user submission to collect affordable therapy resources.</h5>

                        </Col>
                    

            </div>

            <Chip

                label="Search providers"
                clickable
                variant="outlined"
                className={classes.search}


            />

            </div>

            
            
            
            );
            
        }
        

export default GridBody;