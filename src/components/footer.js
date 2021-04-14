import React from 'react'
import { Row, Col, Container} from "react-bootstrap";
import './footer.css'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import blackLogoIcon from '../img/yft-black.JPG'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import SvgIcon from '@material-ui/core/SvgIcon';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',

        },
        input: {
            color: 'white'
        }
    },
    button: {
        fontFamily: '"Nunito", sans-serif',
        //marginLeft: '650px',
        marginTop: '25px',
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
}));

  const CssTextField = withStyles({
    root: {
      '& label': {
        color: 'white',
      },
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
  })(TextField);

function Footer() {
    const classes = useStyles();
    return (
        <div className='footer'>
            <Container>
                <Row style={{ 'font-family': 'Nunito, sans-serif' }}>
                    <Col>
                        <img src={blackLogoIcon} />
                        <h6>A 501(c)(3) Nonprofit Organization listing affordable accessible care in all 50 states</h6>
                        <h5 style={{ marginTop: '150px' }}>Terms of use<br />Site by Heat Waves</h5>
                    </Col>
                    <Col>
                        <div style={{ marginTop: '180px' }}>
                            <h4>About Us</h4>
                            <h4>Contact Us</h4>
                            <h4>Donate to You Find Therapy</h4>
                            <h4>Browse Care Providers</h4>
                            <h4>Care Provider Form</h4>
                            <h4>Referral Form</h4>
                            <div className='footerImg'>
                                <SvgIcon component={FacebookIcon} style={{ color: 'white', marginRight: '20px' }}/>
                                <SvgIcon component={TwitterIcon} style={{ color: 'white',  marginRight: '20px' }}/>
                                <SvgIcon component={InstagramIcon} style={{ color: 'white' }}/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    
                        <div style={{ marginTop: '180px' }}>
                            <h4 style={{ 'font-family': 'Lora, serif' }}>Subscribe to our newsletter</h4>
                            <h6>Get updates on new resource adds across the U.S</h6>
                        </div>
                        <form className={classes.root} noValidate autoComplete="off">
                            <CssTextField
                                label="email"
                                id="custom-css-outlined-input"
                                inputProps={{ style: { color: 'white', outlineColor: 'white' }}}
                            />
                            </form>
                            <Chip

                            label="Subscribe"
                            clickable
                            variant="outlined"
                            className={classes.button}
                        />
                    </Col>
                </Row>
            </Container>


        </div>
    );
  }
  
  export default Footer;