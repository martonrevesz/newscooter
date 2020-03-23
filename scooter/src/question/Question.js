import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './question.scss';

const Question = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const question = props.question;
  const answer = props.answer;

  const toggle = () => setIsOpen(!isOpen);

  return (  
    <div className="question">
      <div className="advantage-row" onClick={toggle}>
        <p>{question}</p><span className="icon"><i class="fas fa-angle-down"></i></span>
      </div>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          {answer}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Question;