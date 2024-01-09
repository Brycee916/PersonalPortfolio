import React from 'react';
import '../styles/Popup.css';

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="popup-content">
            <h2>Welcome to my Website</h2>
            <h3>What's New?</h3>
            <ul>
                <li> Contact tab - You can now send me a message!</li>
                <li> Updated Projects tab - included my group project from school</li>
                <li> 'What's New' popup when you first load my website</li>
                <li> Included more information for certain projects</li>
            </ul>

          <button className="popup-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
