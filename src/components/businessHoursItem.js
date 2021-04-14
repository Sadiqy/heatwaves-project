import React from 'react'
import {Col, Form} from "react-bootstrap";
import './businessHoursItem.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function BusinessHoursItem(props) {
  return (
    <div className="businessHoursItem-container d-flex align-items-center">
      <h3 className="day">{props.day}</h3>

      <Form className="mb-3 mr-3">
            <Form.Row>
                <Form.Group as={Col} className="mr-2">
                    <Form.Label>Start time</Form.Label>
                    <Form.Control placeholder="0:00 AM" />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Close time</Form.Label>
                    <Form.Control placeholder="0:00 PM" />
                </Form.Group>
            </Form.Row>
        </Form>

        <RadioGroup defaultValue="top">
              <FormControlLabel value="end" control={<Radio color="primary" />} label="closed" />
        </RadioGroup>
    </div>
  );
}

export default BusinessHoursItem;