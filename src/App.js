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

function App() {
  return (
    <div className="App" id="home">
      <Navigation></Navigation>
      <header className="App-header">
        <div className='home'>
          <h1 className='welcome'>{APP_CONSTANTS.HEADER}</h1>
          <div>
            <img className='me' src={process.env.PUBLIC_URL + '/images/me.png'} alt='me'></img>
          </div>
        </div> 
        <Nav.Link href="#about">
          <img className='icon' src={process.env.PUBLIC_URL + '/images/downarrow.gif'} href="#about" alt='down arrow'></img>
        </Nav.Link>
      </header>
      <body id="about">
        <About></About>
        <h2 id='experience' className='sectionHeader'>Work & Leadership Experience</h2>
        <div className='ExperienceData'>
          {experienceData.map((item, index) => (
            <ExperienceItem name={item.name} image={item.image} link={item.link} description={item.description}></ExperienceItem>
          ))}
        </div>
        <h2 id='projects' className='sectionHeader'>Projects</h2>
        <div className='ProjectData'>
          {projectData.map((item, index) => (
            <ProjectCard name={item.name} image={item.image} link={item.link} description={item.description}></ProjectCard>
          ))}
        </div>
        <div id='contact'>
          <Footer></Footer>
        </div>
      </body>
    </div>
  );
}

export default App;