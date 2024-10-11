import React, { useState } from "react";


// NavBar component with a language dropdown
const NavBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="src/assets/logo text.png"
          alt="Company Logo"
          className="logo"
        />
      </div>

      <div className="Lan-navbar">
        <select
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
    </nav>
  );
};

// Main App Component
function App() {
  return (
    <div className="currency-converter">
      <NavBar />
      <div className="title">
        <h1 className="converter-title">Currency Converter</h1>
        <p className="subtile">Check live foreign currency rates</p>
      </div>
    </div>
  );
}

export default App;
