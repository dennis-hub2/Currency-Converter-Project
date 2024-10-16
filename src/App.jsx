import React, { useState, useEffect } from "react";
import ConverterForm from "./components/ConverterForm";

// NavBar component with a language dropdown
const NavBar = ({ toggleFooterMenu }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logowithtext.png" alt="Company Logo" className="logo" />
      </div>

      <div className="Lan-navbar">
        <select
          id="language-dropdown"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="language-dropdown">
          <option value="English">English</option>
          <option value="Spanish">Español</option>
          <option value="French">Français</option>
          <option value="German">Deutsch</option>
          <option value="Chinese">中文</option>
        </select>
      </div>

      {/* Menu toggle button */}
      <button className="footer-menu-toggle" onClick={toggleFooterMenu}>
        Menu
      </button>
    </nav>
  );
};

// Main App Component
function App() {
  const [isFooterMenuVisible, setIsFooterMenuVisible] = useState(false);

  const toggleFooterMenu = () => {
    setIsFooterMenuVisible(!isFooterMenuVisible);
  };

  useEffect(() => {
    const footer = document.querySelector(".footer");
    if (isFooterMenuVisible) {
      footer.classList.add("show");
    } else {
      footer.classList.remove("show");
    }
  }, [isFooterMenuVisible]);

  return (
    <div className="currency-converter">
      <NavBar toggleFooterMenu={toggleFooterMenu} />
      <div className="title">
        <h1 className="converter-title">Currency Converter</h1>
        <p className="subtile">Check live foreign currency rates</p>
      </div>

      <ConverterForm />

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
            </div>
          </div>

          <p>&copy;2024</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
