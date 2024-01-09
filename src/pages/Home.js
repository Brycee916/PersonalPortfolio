import React, { useState, useEffect } from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";
import { useNavigate } from 'react-router-dom';
import Popup from '../components/Popup';

export default function Home() {
    const [showPopup, setShowPopup] = useState(true); // Initially set to true to show the popup

    useEffect(() => {
        // Check if the flag is set in localStorage
        const popupShown = localStorage.getItem('popupShown');

        // If the flag is not set, show the popup and set the flag in localStorage
        if (!popupShown) {
            setShowPopup(true);
            localStorage.setItem('popupShown', 'true');
        }
    }, []);

    const navigate = useNavigate();
    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/bryce-c-629b1780/', '_blank');
      };
    const handleGitHub = () => {
        window.open('https://github.com/Brycee916', '_blank');
    }
    const handleEmail = () => {
        navigate('/contact');
    }
    const handleClosePopup = () => {
        setShowPopup(false);
    };

  return (
    <div className="home">
        {showPopup && <Popup onClose={() => setShowPopup(false)} />}
        <div className="about">
            <h2>Hi, my name is Bryce</h2>
            <div className="prompt">
                <p>I'm a computer science student who is eager to learn about software development and new technologies</p><br/>
                <LinkedInIcon className="iconHover" onClick={handleLinkedIn} style={{ cursor: 'pointer'}}/>
                <EmailIcon className="iconHover" onClick={handleEmail} style={{ cursor: 'pointer'}}/>
                <GithubIcon className="iconHover" onClick={handleGitHub} style={{ cursor: 'pointer'}}/>
            </div>
        </div>
        <div className="skills">
            <h1>Technical Skills</h1>
            <ol className="list-skills">
                <li className="item-skills">
                    <h2>Languages</h2>
                    <span>
                        Java, C++, Visual Basic.net, HTML, CSS, x86 Assembly
                    </span>
                </li>
                <li className="item-skills">
                    <h2>Tools</h2>
                    <span>
                        Git, GitHub, GitLab, Ansible Automation Platform, Unix/Linux, Vim, Excel, Confluence, Jira,
                        Trello, MS Teams, Slack, BootStrap, FireBase, NetBeans, VSCode, JGrasp, IntelliJ
                    </span>
                </li>
                <li className="item-skills">
                    <h2>Learning</h2>
                    <span>
                        React.js, MySQL, MongoDB, Node.js, Express
                    </span>
                </li>
                <li className="item-skills">
                    <h2>Other skills</h2>
                    <span>
                        Object Oriented Programming, Data Strutures and Algorithms
                    </span>
                </li>
            </ol>
        </div>

        <div className="skills"></div>
    </div>
  )
}
