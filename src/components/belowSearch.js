import React from 'react'
import {Col} from "react-bootstrap"
import './belowSearch.css'


function BelowSearch() {
    return (
        <div className='d-flex justify-content-between'>


            <Col xs="6" sm="4">
            </Col>
            <Col xs="6" sm="4">
            </Col>
            <Col sm="4">
                
                    <div className='belowSearch'>
                        <h1 style={{'font-family': 'Lora, serif'}}>You deserve affordable,<br />accessible therapy.</h1>
                        <h5 className='gridText'>We hope our platform helps connect you with the<br /> services or resource you're looking for:
                                we'll always<br /> be a free resource, so we appreciate all you support<br /> and feedback.</h5>
                        <h5 className='gridText'>Sincerely,</h5>
                        <h5 style={{ 'font-weight': 'bold' }} className='gridText'>The You Find Therapy Team</h5>
                    </div>
                

            </Col>


        </div>
        );
    }
    
    export default BelowSearch;
    