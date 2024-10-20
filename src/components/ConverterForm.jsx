import React, { useState } from "react";
import CurrencySelect from "./CurrencySelect";

const ConverterForm = () => {
  const [amount, setAmount] = useState("");
  // Stores the amount entered by the user

  const [fromCurrency, setFromCurrency] = useState("USD");
  // Default 'from' currency set to USD

  const [toCurrency, setToCurrency] = useState("GBP");
  // Default 'to' currency set to GBP

  const [result, setResult] = useState("");
  // Holds the result of the currency conversion

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    // Swap 'from' and 'to' currencies when called
  };

  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    // API key for accessing the exchange rate API
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;
    // Constructs the URL for fetching the exchange rate based on selected currencies

    try {
      const response = await fetch(API_URL);
      // Fetches the exchange rate from the API

      if (!response.ok) throw Error("Something went wrong");
      // Checks if the response is successful

      const data = await response.json();
      const rate = data.conversion_rate;
      // Extracts the conversion rate from the API response

      const convertedAmount = (rate * parseFloat(amount)).toFixed(3);
      // Multiplies the amount by the rate and formats it to 3 decimal places

      setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
      // Updates the result state with the converted amount
    } catch (error) {
      console.log(error);
      // Logs any errors that occur during the API request
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
    // Prevents the form's default submit behavior and calls the conversion function
  };

  const handleFocus = () => {
    if (amount === "") {
      setAmount("");
      // Clears the input field when focused if no amount is entered
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
      // Updates the amount state only if the input is a valid number or decimal
    }
  };

  return (
    <form
      className="converter-form"
      autoComplete="off"
      id="convertor-form"
      onSubmit={handleFormSubmit}>
      {/* Form element that handles currency conversion submission */}

      <div className="form-group">
        <label className="form-label" htmlFor="amount">
          Amount
          <input
            type="number"
            id="amount"
            className="form-input"
            value={amount}
            placeholder="eg. $100"
            onFocus={handleFocus}
            // Clears the input when focused
            onChange={handleAmountChange}
            // Validates and updates amount input
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
            // Updates the selected 'from' currency
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
            // Updates the selected 'to' currency
          />
        </div>
      </div>

      <div className="result-container">
        <button type="submit" className="submit-button">
          Get Exchange Rate
        </button>
        {/* Button to submit the form and fetch the exchange rate */}
      </div>

      {result && (
        <div className="exchange-rate">
          <p className="exchange-rate-result">{result}</p>
          {/* Displays the conversion result if available */}
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
          {/* Disclaimer for the users about the rates */}
        </span>
      </div>
    </form>
  );
};

export default ConverterForm;
