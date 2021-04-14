import React from 'react'
import './form.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Col, Form, Container } from "react-bootstrap";
import FormLabel from '@material-ui/core/FormLabel';
import BusinessHoursItem from './businessHoursItem'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

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



function FormPage() {
  const classes = useStyles();

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className='form'>
        <h1>Fill out and submit our form to<br />join our list of searchable care<br />providers</h1>
        <h2 style={{ marginTop: '70px' }}>Please choose your clinic/practice type.</h2>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="position" name="position" defaultValue="top">
            <FormControlLabel value="end" control={<Radio color="primary" />} label="Individual Practice" />
            <FormControlLabel value="end" control={<Radio color="primary" />} label="Group Practice" />
          </RadioGroup>
        </FormControl>

        <h2 style={{ marginTop: '70px' }}>Please provide a point of contact.</h2>
        <h6 style={{ fontFamily: "'Nunito', sans-serif" }}>This person's information will not be seen by care seekers.</h6>

        <div className="poc">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name*</Form.Label>
                <Form.Control type="email" placeholder="Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control type="password" placeholder="Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Point of Contact Email* </Form.Label>
                <Form.Control type="email" placeholder="xxxxx@email.com" />
              </Form.Group>
            </Form.Row>
          </Form>
        </div>

        <h2 style={{ marginTop: '70px' }}>Please fill in your clinic/practice information.</h2>

        <div className="poc">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Business Name*</Form.Label>
                <Form.Control type="email" placeholder="Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Business Phone*</Form.Label>
                <Form.Control type="password" placeholder="(123) 456-7890" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Point of Contact Email* </Form.Label>
                <Form.Control type="email" placeholder="xxxxx@email.com" />
              </Form.Group>
            </Form.Row>
          </Form>
        </div>

        <div className="poc">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Business Address Line 1*</Form.Label>
                <Form.Control type="email" placeholder="xxxx Street" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Business Address Line 2*</Form.Label>
                <Form.Control type="password" placeholder="Suite xx" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>City* </Form.Label>
                <Form.Control type="email" placeholder="ie. Los Angeles" />
              </Form.Group>
            </Form.Row>
          </Form>
        </div>

        <div className="poc">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>5 Digit ZIP Code*</Form.Label>
                <Form.Control type="email" placeholder="12345" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State*</Form.Label>
                <Form.Control as="select" defaultValue="Please Select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

            </Form.Row>
          </Form>
        </div>

        <div className="poc">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Website*</Form.Label>
                <Form.Control type="email" placeholder="www.example.com" />
              </Form.Group>

            </Form.Row>
          </Form>
        </div>

        <h2 style={{ marginTop: '70px' }}>Please list your business hours</h2>

        <div className='poc'>{daysOfWeek.map((day) => <BusinessHoursItem day={day} />)}</div>


        <h2 style={{ marginTop: '70px', marginBottom: '40px' }}>Please select your specializations.</h2>

      </div>

      <div className='poc'>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Anxiety" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Depression" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="PTSD" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="CBT" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Addiction" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Substance Use" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Grief" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Other:" />
        </Form.Group>

        <div className='other'>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
            </Form.Row>
          </Form>
          <h5 style={{ fontSize: '15px' }}>Can't find your specializations? Please tell us what you're specialized. Separate
             the specializations with a comma ','.</h5>
        </div>

        <h2 style={{ marginTop: '70px', marginBottom: '40px', fontFamily: 'Lora, serif' }}>Please select your services.</h2>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Phone Appointments" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Webcam Appointments" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="In-office Appointments" />
        </Form.Group>

        <Chip

                    label="Submit your form"
                    clickable
                    variant="outlined"
                    className={classes.whiteChip + " " + classes.mapChip}
                    
                    
                /> 

      </div>





    </div>
  );
}

export default FormPage;