
import APP_CONSTANTS from '../strings';

function Footer() {
  return (
    <div className='footer'>
      <h1>Want to learn more?</h1>
      <p>{APP_CONSTANTS.FOOTER}</p>
      <div className='icons'>
        <a href="https://www.gmail.com" target="_blank" rel='noreferrer'>
          <img className='icon' src={process.env.PUBLIC_URL + '/images/logos/mail.png'} alt='mail-icon'></img>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel='noreferrer'>
          <img className='icon' src={process.env.PUBLIC_URL + '/images/logos/linkedin.png'} alt='linkedin-icon'></img>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel='noreferrer'>
          <img className='icon' src={process.env.PUBLIC_URL + '/images/logos/twitter.png'} alt='linkedin-icon'></img>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel='noreferrer'>
          <img className='icon' src={process.env.PUBLIC_URL + '/images/logos/spotify.png'} alt='linkedin-icon'></img>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel='noreferrer'>
          <img className='icon' src={process.env.PUBLIC_URL + '/images/logos/github.png'} alt='linkedin-icon'></img>
        </a>
      </div>
      Sidney Schwartz &copy; 2023
    </div>

  );
}

export default Footer;