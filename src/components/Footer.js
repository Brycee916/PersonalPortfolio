import React from 'react';
import "../styles/Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";

function Footer() {
  const handleLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/bryce-c-629b1780/';
  };
  const handleGitHub = () => {
    window.location.href = 'https://github.com/Brycee916';
  }

  return (
    <div className="footer">
        <div className="socials">
            <LinkedInIcon className="iconHover" onClick={handleLinkedIn} style={{ cursor: 'pointer'}}/>
            <GithubIcon className="iconHover" onClick={handleGitHub} style={{ cursor: 'pointer'}}/>
        </div>
        <div>
            <p> &copy; 2023 BrycesTechFolio.com</p>
        </div>
    </div>
  )
}

export default Footer