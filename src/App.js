import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/NavBar";
import About from "./components/About";
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import projectData from "./assets/project-data.json";
import experienceData from "./assets/experience-data.json";
import Nav from 'react-bootstrap/Nav';
import MyComponent from './components/Header';
import APP_CONSTANTS from './strings';
import ExperienceItem from './components/ExperienceItem';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App" id="home">
      
      <Navigation></Navigation>
      <header className="App-header">
        <div className='home'>
          <div>
            <p>Hi, I'm Sidney. I love solving problems and making people happy.</p>
            <p>I recently graduated from Brown University where I studied Computer Science.</p>
            <p>This year, I am in New York City working in Private Equity at Related Fund Management.</p>
            <p>Last summer, I worked as a Summer Analyst at TPG Real Estate Partners. During the pandemic
              I took a gap year and worked as an intern at WISE Ventures.
              I also have experiences working for Activision Blizzard, the Minnesota Vikings, and UNINTERRUPTED.
            </p>
          </div>
        </div> 

      </header>
      <img className='GradPic' src={process.env.PUBLIC_URL + '/images/brownhappy.jpg'} alt='Grad Pic'></img>

      <body id="about">
        <div className='body-text'>
          <p>At Brown, I played Varsity Football for a few years, participated in the Breakthrough Lab accelerator,
            and was involvued various clubs. I helped start The Optic, Brown's first photography publication. 
            Over the years I also engaged in Ivy Film Festival and Brown Private Equity Club.</p>
          <p>In my freetime, I love playing as well as watching sports, reading, and listening to music.</p>
        </div>
        <div>
            <h4>Here's what I enjoy listening to:</h4>
            {retrieveSpotifyPlaylist()}
        </div>
        <div className='App-footer' id='contact'>
        <p>The best way to connect with me is via LinkedIn or Twitter. Feel free to reach out!</p>
          <footer>
            <Container fluid className="bg-light text-light">
              <Row>
                <Col>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
                  </a>
                </Col>
                <Col>
                  <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="footer-icon" />
                  </a>
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
      </body>
    </div>
  );
}

function retrieveSpotifyPlaylist() {
  return (
    <iframe src="https://open.spotify.com/embed/playlist/3060QiMRfCkYId2bs9e6DM?utm_source=generator" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  );
}

export default App;