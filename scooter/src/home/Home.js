import React from 'react';
import logo from './logo.jpg'; 
import './home.scss';
import { Col, Row } from "reactstrap";

class Home extends React.Component {
    render() {
      return <div className="home">
              <div className="auto-margin  why">
                  <h2 className="text-left">Miért e-robogó?</h2>
                  <p className="text-left">Elektromos robogók rövid és hosszútávú bérbeadásával foglalkozom Budapesten. 
                    Hiszek abban, hogy az elektromos robogózás a nagyvárosban kényelmes és praktikus alternatíva lehet az Ön számára akár alkalmilag, akár rendszeres munkavégzéshez. </p>
                  <Row>
                    <Col md="7">
                      <img  src={logo} width="400" height="400" alt="scooter"/>
                    </Col>
                    <Col md="5" className="advantage">
                      <div className="advantage-row">
                      <p>Megbízható</p><span className="icon"><i class="fas fa-check-circle"></i></span>
                      </div>
                      <div className="advantage-row">
                      <p>Költséghatékony</p><span className="icon"><i class="fas fa-check-circle"></i></span>
                      </div>
                      <div className="advantage-row">
                      <p>Környezetbarát</p><span className="icon"><i class="fas fa-check-circle"></i></span>
                      </div>
                    </Col>
                  </Row>
              </div>
            </div>;
    }
  }

export default Home;