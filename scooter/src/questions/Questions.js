import React from "react";
import "./questions.scss";
import Question from "../question/Question.js";

class Questions extends React.Component {
  render() {
    return (
      <div className="questions">
        <div className="auto-margin  why">
          <h2 className="text-left">Kérdések és válaszok</h2>
          <Question
            question="Mennyi a motor hatótávolsága?"
            answer="Az NQi Lite 110, az N-Sport 120, az M+ 125, az Ngt 130 km hatótávval rendelkezik. Mivel az elemek külön tölthetőek, ezért cserélgetéssel és napközbeni töltéssel gyakorlatilag korlátlan km megtehető."
          ></Question>
          <Question
            question="Mennyit fogyaszt a motor?"
            answer="A motor 2db 1.55 kwH-s akkumulátorral rendelkezik, összesen 3.1 kWh kapacitással. Ennek teletöltese a mai nappali áram árak mellett 114 ft-ra jön ki, tehát 112 km-es hatótávval az üzemeltetési költsége 1 ft per km körül mozog!"
          ></Question>
          <Question
            question="Van-e kötelező biztosítás a motorra?"
            answer="Igen, a motorra jelenleg érvényes kötelező biztosítás van."
          ></Question>
          <Question
            question="Van-e kaució?"
            answer="Igen, a bérlés feltétele 30 000 ft kaució letétele."
          ></Question>
        </div>
      </div>
    );
  }
}

export default Questions;
