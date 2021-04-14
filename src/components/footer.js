import React from 'react'
import { Row, Col, Container} from "react-bootstrap";
import './footer.css'
import blackLogoIcon from '../img/yft-black.JPG'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import SvgIcon from '@material-ui/core/SvgIcon';


function Footer() {
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
                    </Col>
                </Row>
            </Container>


        </div>
    );
  }
  
  export default Footer;