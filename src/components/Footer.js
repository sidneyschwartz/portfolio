
import APP_CONSTANTS from '../strings';
// import '../index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';



function Footer() {
  return (
    
    <div className='footer'>
      {/* <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="sidneyschwartz" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/sidneyschwartz?trk=profile-badge">Sidney Schwartz</a></div> */}
      <p>The best way to reach out to me is by email.</p>
      <p>{APP_CONSTANTS.FOOTER}</p>
      <div className='icons'>
        <a href="https://www.gmail.com" target="_blank" rel='noreferrer'>
          <img className='icon' src={process.env.PUBLIC_URL + '/images/logos/mail.png'} alt='mail-icon'></img>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel='noreferrer'>
          <img className='icon' src={process.env.PUBLIC_URL + '/images/logos/linkedin.png'} alt='linkedin-icon'></img>
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

function retrieveTwitterProfile() {
  return (
    <a href="https://twitter.com/sidneyschwartz_" target="_blank" rel='noreferrer'>
        <img className='icon' src={process.env.PUBLIC_URL + '/images/logos/twitter.png'} alt='linkedin-icon'></img>
    </a>
  );
}

function showLinkedInBadge() {
  return (
      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="sidneyschwartz" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/sidneyschwartz?trk=profile-badge">Sidney Schwartz</a></div>
  );
}


export default Footer;