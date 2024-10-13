import React, { useState } from "react";
import CurrencySelect from "./CurrencySelect";

const ConverterForm = () => {
  const [amount, setAmount] = useState(""); // State for the amount
  const [fromCurrency, setFromCurrency] = useState("USD"); // Default currency
  const [toCurrency, setToCurrency] = useState("GBP"); // Default currency
  const [result, setResult] = useState(""); // State for the final conversion result

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Function to fetch the exchange rate and update the result
  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Something went wrong");

      const data = await response.json();
      const rate = data.conversion_rate; // Get the exchange rate

      // Calculate the result for the amount entered
      const convertedAmount = (rate * parseFloat(amount)).toFixed(3); // Multiply amount by rate and format to 2 decimal places

      // Set result as the converted amount
      setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };

  // Handle focus to clear the input field when clicked
  const handleFocus = () => {
    if (amount === "") {
      setAmount(""); // Clear input when focused
    }
  };

  // Handle amount change and ensure only numbers are entered
  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      // Allow only numbers and decimals
      setAmount(value);
    }
  };

  return (
    <form
      className="converter-form"
      autoComplete="off"
      id="convertor-form"
      onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="amount">
          Amount
          <input
            type="number"
            id="amount"
            className="form-input"
            value={amount}
            placeholder="eg. $100"
            onFocus={handleFocus} // Clear on focus
            onChange={handleAmountChange} // Handle number-only input
            required
          />
        </label>
      </div>

      <div className="form-container">
        <div className="form-section">
          <label className="form-label" htmlFor="from-currency">
            From
          </label>
          <CurrencySelect
            selectedCurrency={fromCurrency}
            handleCurrency={(e) => setFromCurrency(e.target.value)}
          />
        </div>

        <div className="swap-container" onClick={handleSwapCurrencies}>
          <div className="swap-icon">
            {/* SVG swap icon */}
            <svg
              width="16"
              viewBox="0 0 20 19"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
                fill="#000"
              />
            </svg>
          </div>
        </div>

        <div className="form-section">
          <label className="form-label" htmlFor="to-currency">
            To
          </label>
          <CurrencySelect
            selectedCurrency={toCurrency}
            handleCurrency={(e) => setToCurrency(e.target.value)}
          />
        </div>
      </div>

      <div className="result-container">
        <button type="submit" className="submit-button">
          Get Exchange Rate
        </button>
      </div>

      {/* Only render the result when it's available */}
      {result && (
        <div className="exchange-rate">
          <p className="exchange-rate-result">{result}</p>
        </div>
      )}

      <div className="disclaimer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/15691/15691615.png"
          width="20"
          height="20"
          alt="Info free icon"
        />
        <span className="notice">
          We use the mid-market rate for our Converter. This is for
          informational purposes only. You won’t receive this rate when sending
          money.
        </span>
      </div>
    </form>
  );
};

export default ConverterForm;
