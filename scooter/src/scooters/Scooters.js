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
                            <p>Jelenleg NIU XXX-999 robogó bérelhető:</p>
                            <div className="advantage-row">
                                <span className="icon"><i class="fas fa-tachometer-alt"></i></span><p>Maximum segesség: 70 km/h</p>
                            </div>
                            <div className="advantage-row">
                            <span className="icon"><i class="fas fa-dot-circle"></i></span><p>Hatótáv: 124-134 km</p>
                            </div>
                            <div className="advantage-row">
                            <span className="icon"><i class="fas fa-clock"></i></span><p>Töltési idő: 5-6 óra</p>
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