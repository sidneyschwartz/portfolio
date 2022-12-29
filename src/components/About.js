import Accordion from 'react-bootstrap/Accordion';
import APP_CONSTANTS from '../strings';

function About() {
  return (
    <div className='About'>
      <h2>What I do</h2>
      <Accordion className='Accordian' flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Private Equity</Accordion.Header>
          <Accordion.Body>
            {APP_CONSTANTS.PRIVATE_EQUITY}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Software Engineering</Accordion.Header>
          <Accordion.Body>
          {APP_CONSTANTS.SOFTWARE_ENGINEERING}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Entrepreneurship</Accordion.Header>
          <Accordion.Body>
            {APP_CONSTANTS.ENTREPRENEURSHIP}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>

  );
}

export default About;