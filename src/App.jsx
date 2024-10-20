import React, { useState, useEffect } from "react";
import ConverterForm from "./components/ConverterForm";

// NavBar component with a language dropdown
const NavBar = ({ toggleFooterMenu }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  // Manages the currently selected language in the dropdown

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Updates the state when a user selects a new language
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logowithtext.png" alt="Company Logo" className="logo" />
        {/* Displays company logo */}
      </div>

      <div className="Lan-navbar">
        <select
          id="language-dropdown"
          value={selectedLanguage}
          // Binds the dropdown value to the selectedLanguage state
          onChange={handleLanguageChange}
          // Listens for changes in the dropdown and triggers the handler
          className="language-dropdown">
          <option value="English">English</option>
          <option value="Spanish">Español</option>
          <option value="French">Français</option>
          <option value="German">Deutsch</option>
          <option value="Chinese">中文</option>
          {/* Language options for the dropdown */}
        </select>
      </div>

      <button className="footer-menu-toggle" onClick={toggleFooterMenu}>
        Menu
      </button>
      {/* Toggle button to control visibility of the footer menu */}
    </nav>
  );
};

// Main App Component
function App() {
  const [isFooterMenuVisible, setIsFooterMenuVisible] = useState(false);
  // Tracks the visibility of the footer menu

  const toggleFooterMenu = () => {
    setIsFooterMenuVisible(!isFooterMenuVisible);
    // Toggles the footer menu visibility between show/hide
  };

  useEffect(() => {
    const footer = document.querySelector(".footer");
    // Selects the footer element from the DOM
    if (isFooterMenuVisible) {
      footer.classList.add("show");
      // Adds 'show' class to footer when the menu is visible
    } else {
      footer.classList.remove("show");
      // Removes 'show' class to hide the footer
    }
  }, [isFooterMenuVisible]);
  // Effect runs every time isFooterMenuVisible state changes

  return (
    <div className="currency-converter">
      <NavBar toggleFooterMenu={toggleFooterMenu} />
      {/* Passes the toggle function to NavBar component */}
      <div className="title">
        <h1 className="converter-title">Currency Converter</h1>
        <p className="subtile">Check live foreign currency rates</p>
        {/* Title and subtitle for the app */}
      </div>

      <ConverterForm />
      {/* Currency converter form imported from another component */}

      <div className="container">
        <footer className="footer">
          <div className="details">
            <span className="details-link">
              <a href="src\components\AboutUs.jsx">About</a>
              <a href="src\components\ContactUs.jsx">Contact Us</a>
              <a href="src\components\HelpCenter.jsx">Help Center</a>
              <a href="src\components\Feedback.jsx">Feedback</a>
              <a href="src\components\Legal.jsx">Legal</a>
              <a href="src\components\Privacy.jsx">Privacy</a>
              <a href="src\components\Policy.jsx">Policy</a>
              <a href="src\components\Disclaimer.jsx">Disclaimer</a>
              {/* Links to various informational pages */}
            </span>
          </div>

          <div className="socials-icon">
            <div className="icons">
              <a href="https://web.facebook.com/">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                  width="50px"
                  height="50px"
                  alt="facebook logo"
                />
              </a>

              <a href="https://x.com/">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  width="50px"
                  height="50px"
                  alt="twitter logo"
                />
              </a>

              <a href="https://www.instagram.com/">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                  width="50px"
                  height="50px"
                  alt="instagram logo"
                />
              </a>
              {/* Social media icons with external links */}
            </div>
          </div>

          <p>&copy;2024</p>
          {/* Copyright section for the footer */}
        </footer>
      </div>
    </div>
  );
}

export default App;
