import React from 'react';
import logo from './logo.jpg'; 
import './home.scss';
import { Col, Row } from "reactstrap";
import Advantage from '../advantage/Advantage';

class Home extends React.Component {
    render() {
      return <div className="home">
              <div className="auto-margin  why">
                  <h1 className="text-left">Miért elektromos robogó?</h1>
                  <p className="text-left">Elektromos robogók rövid és hosszútávú bérbeadásával foglalkozom Budapesten. 
                    Hiszek abban, hogy az elektromos robogó bérlés a nagyvárosban kényelmes és praktikus alternatíva lehet az Ön számára akár alkalmilag, akár rendszeres munkavégzéshez. </p>
                  <Row>
                    <Col md="6">
                      <img  class="home-image" src={logo} alt="scooter"/>
                    </Col>
                    <Col md="6" className="advantage">
                      <Advantage title="Minimális üzemeltetési költség" detail="Míg egy átlagos kétütemű robogó 100 km-en 4 liter benzint és 1 deci olajat fogyaszt nagyjábol 1600ft üzemeltetési költséggel, addig egy villanyrobogó 3kWh áramot fogyaszt, ami mindossze 114 ft költséget jelent."/>
                      <Advantage title="Megbízhatóság" detail="Motorjaink újak illetve az elektromos robogóknak minimális a szervízigénye, egyszerűsége folytán nem nagyon tud benne mi elromlani, így nincs többé lerobbant motor miatti időkiesés és bevételkiesés, cseremotorra való várakozás."/>
                      <Advantage title="Kényelem" detail="Tempomat, telefontartó, modern LCD kijelző, tiszta, csendes üzemmód!"/>
                    </Col>
                  </Row>
              </div>
            </div>;
    }
  }

export default Home;