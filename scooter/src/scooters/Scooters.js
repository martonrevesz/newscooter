import React from "react";
import scooterm from "./scootermplus.jpg";
import scooter4 from "./scooter4.jpg";
import nqilite from "./nqi-lite.jpg";
import "./scooters.scss";
import { Col, Row } from "reactstrap";
import Pricetable from "../pricetable/Pricetable.js";

class Scooters extends React.Component {
  render() {
    return (
      <div className="scooters" id="scooters">
        <div className="auto-margin why">
          <h2 className="text-left">Robogók és árak</h2>
          <Row>
            <Col md="6" className="advantage">
              <p className="type">Niu NQi elektromos robogó:</p>
              <div className="advantage-row">
                <span className="icon">
                  <i class="fas fa-tachometer-alt"></i>
                </span>
                <div className="info-text">
                  <p>Maximum sebesség:</p>
                  <p> 52 km/h</p>
                </div>
              </div>
              <div className="advantage-row">
                <span className="icon">
                  <i class="fas fa-dot-circle"></i>
                </span>
                <div className="info-text">
                  <p>Hatótáv 2 akkumulátorral:</p>
                  <p> 110 km</p>
                </div>               
              </div>
              <div className="advantage-row">
                <div className="info-text" style={{paddingLeft: "24px"}}>
                  <p>Hatótáv 3 akkumulátorral:</p>
                  <p> 165 km</p>
                </div>               
              </div>              
              <div className="advantage-row">
                <span className="icon dollar">
                  <i class="fas fa-dollar-sign"></i>
                </span>
                <div className="info-text">
                  <p>Üzemeltetési költség:</p>
                  <p> ~ 1 ft / km</p>
                </div>
              </div>
            </Col>
            <Col md="6">
              <img src={nqilite} width="280" alt="Fehér Niu elektromos motor" />
            </Col>
          </Row>
          <Pricetable day="9000" week1="14000" week="17000" week3="19000" month1="48000"/>
          <Row>
            <Col md="6" className="advantage">
              <p className="type">Niu M+ elektromos robogó:</p>
              <div className="advantage-row">
                <span className="icon">
                  <i class="fas fa-tachometer-alt"></i>
                </span>
                <div className="info-text">
                  <p>Maximum sebesség:</p>
                  <p> 50 km/h</p>
                </div>
              </div>
              <div className="advantage-row">
                <span className="icon">
                  <i class="fas fa-dot-circle"></i>
                </span>
                <div className="info-text">
                  <p>Hatótáv:</p>
                  <p> 125 km</p>
                </div>
              </div>
              <div className="advantage-row">
                <span className="icon dollar">
                  <i class="fas fa-dollar-sign"></i>
                </span>
                <div className="info-text">
                  <p>Üzemeltetési költség:</p>
                  <p> ~ 1 ft / km</p>
                </div>
              </div>
            </Col>
            <Col md="6">
              <img
                src={scooterm}
                width="280"
                alt="Fehér Niu elektromos motor"
              />
            </Col>
          </Row>
          <Pricetable day="9000" week="14000" />
          <Row>
            <Col md="6" className="advantage">
              <p className="type">Niu Ngt elektromos robogó:</p>
              <div className="licence-warning-container">
                <span className="licence-warning">
                  <span>A-s vagy B125-ös jogosítvánnyal</span>
                </span>
              </div>
              <div className="advantage-row">
                <span className="icon">
                  <i class="fas fa-tachometer-alt"></i>
                </span>
                <div className="info-text">
                  <p>Maximum sebesség:</p>
                  <p> 80 km/h</p>
                </div>
              </div>
              <div className="advantage-row">
                <span className="icon">
                  <i class="fas fa-dot-circle"></i>
                </span>
                <div className="info-text">
                  <p>Hatótáv:</p>
                  <p> 100-150 km</p>
                </div>
              </div>
              <div className="advantage-row">
                <span className="icon dollar">
                  <i class="fas fa-dollar-sign"></i>
                </span>
                <div className="info-text">
                  <p>Üzemeltetési költség:</p>
                  <p> ~ 1 ft / km</p>
                </div>
              </div>
            </Col>
            <Col md="6">
              <img
                src={scooter4}
                width="280"
                alt="Fehér Niu elektromos motor"
              />
            </Col>
          </Row>
          <Pricetable  week="24000" month2="75000"/>       
          <div className="text-left">
            Hosszabb távú vagy rendszeres bérlés esetén kérje el Önnek szóló
            egyedi ajánlatomat.
          </div>
        </div>
      </div>
    );
  }
}

export default Scooters;
