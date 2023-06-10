import Accordion from 'react-bootstrap/Accordion';
import APP_CONSTANTS from '../strings';

function About() {
  return (
    <div className='About'>
      <h2>{retrieveSpotifyPlaylist()}</h2>
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

function calculateTodaysDate() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  return month + '/' + day + '/' + year;
}

function retrieveSpotifyPlaylist() {
  return (
    <iframe src="https://open.spotify.com/embed/playlist/3060QiMRfCkYId2bs9e6DM?utm_source=generator" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  );
}

export default About;