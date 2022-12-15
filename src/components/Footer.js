
function Footer() {
  return (
    <div className='footer'>
      <h1>Want to learn more?</h1>
      <p>I would love to connect. I'm happy to chat about anything related to software engineering,
        entrepreneurship, or problem solving! Feel free to reach out at the links below. Ciao!</p>
      <div className='icons'>
        <a className='ProjectTitle' href="https://www.gmail.com" target="_blank" rel='noreferrer'>
        <img className='icon' src={process.env.PUBLIC_URL+'/images/mail.png'} alt='mail-icon'></img>
        </a>
        <a className='ProjectTitle' href="https://www.linkedin.com" target="_blank" rel='noreferrer'>
          <img className='icon' src={process.env.PUBLIC_URL+'/images/linkedin.png'} alt='linkedin-icon'></img>
        </a>
      </div>

    </div>

  );
}

export default Footer;