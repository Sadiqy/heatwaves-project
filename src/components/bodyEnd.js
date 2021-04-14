import React from 'react'
import { Row, Col, Container} from "react-bootstrap";
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    search: {
        fontFamily: '"Nunito", sans-serif',
        //marginLeft: '650px',
        marginTop:'25px',
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


function BodyEnd() {
    const classes = useStyles();
    return (
        <div style={{ marginTop: '300px' }}>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{ 'font-family': 'Lora, serif', marginBottom: '50px' }}>Already have a great provider?</h1>
                        <h5 style={{ 'font-family': 'Nunito, sans-serif' }}>Fill out our referral form to send them our way.</h5>
                        <Chip

                            label="Submit provider or resource"
                            clickable
                            variant="outlined"
                            className={classes.search}
                        />
                    </Col>
                    <Col>
                        <div className='gridPlaceholder'></div>
                    </Col>
                </Row>
            </Container>

            <Container style={{'marginTop': '300px'}}>
                <Row>
                    <Col>
                        <h1 style={{ 'font-family': 'Lora, serif', marginBottom: '50px' }}>Care Providers- Get Involved with us</h1>
                        <h5 style={{ 'font-family': 'Nunito, sans-serif' }}>Fill out our step by step form to introduce yourself and your practice.</h5>
                        <Chip

                            label="Add my clinic/practice to the list"
                            clickable
                            variant="outlined"
                            className={classes.search}
                        />
                    </Col>
                    <Col>
                        <div className='gridPlaceholder'></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BodyEnd;