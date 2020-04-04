import React from 'react';
import contact from './contact.jpg'; 
import './contact.scss';
import { Col, Row } from "reactstrap";

class Contact extends React.Component {
    render() {
      return <div className="contact" id="contact">
                <div className="auto-margin why">
                        <h2 className="text-left">Kapcsolat</h2>
                        <Row className="body">
                        <Col md="5">
                            <div className="advantage-row">
                                <span className="icon"><i class="fas fa-envelope"></i></span><p>erobogoberles@gmail.com</p>
                            </div>
                            <div className="advantage-row">
                                 <span className="icon"><i class="fas fa-phone"></i></span><p>0630 889 50 22</p>
                            </div>                          
                        </Col>
                        </Row>
                    </div>
                </div>;
    }
  }

export default Contact;