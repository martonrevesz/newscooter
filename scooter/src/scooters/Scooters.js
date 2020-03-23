import React from 'react';
import scooter from './scooter.jpg'; 
import './scooters.scss';
import { Col, Row, Table } from "reactstrap";
import Pricetable from '../pricetable/Pricetable.js';

class Scooters extends React.Component {
    render() {
      return <div className="scooters" id="scooters">
                <div className="auto-margin why">
                        <h2 className="text-left">Robogók és árak</h2>
                        <Row>
                        <Col md="6" className="advantage">
                            <p>Niu NQi Lite elektromos robogó:</p>
                            <div className="advantage-row">
                                <span className="icon"><i class="fas fa-tachometer-alt"></i></span><div className="info-text"><p>Maximum sebesség:</p><p> 50 km/h</p></div>
                            </div>
                            <div className="advantage-row">
                            <span className="icon"><i class="fas fa-dot-circle"></i></span><div className="info-text"><p>Hatótáv:</p><p>  112 km</p></div>
                            </div>
                            <div className="advantage-row">
                            <span className="icon dollar"><i class="fas fa-dollar-sign"></i></span><div className="info-text"><p>Üzemeltetési költség:</p><p>  ~ 1 ft / km</p></div>
                            </div>
                        </Col>
                        <Col md="6">
                            <img  src={scooter} width="300" alt="scooter"/>
                        </Col>
                        </Row>
                        <Pricetable />
                    </div>
                </div>;
    }
  }

export default Scooters;