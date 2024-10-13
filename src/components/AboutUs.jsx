import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our Currency Converter! We are dedicated to providing the
        most accurate and up-to-date currency exchange rates to help you make
        informed decisions. Our goal is to simplify the currency conversion
        process for travelers, businesses, and anyone looking to exchange
        currencies easily and efficiently.
      </p>
      <p style={styles.paragraph}>
        With a user-friendly interface and real-time data, we strive to make
        currency conversion accessible for everyone. Our team is committed to
        continuous improvement, ensuring that our platform meets your needs and
        exceeds your expectations.
      </p>
      <p style={styles.paragraph}>
        Thank you for choosing our Currency Converter. We’re here to help you
        navigate the world of currency exchange!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  paragraph: {
    textAlign: "left",
    fontSize: "16px",
    marginBottom: "20px",
    color: "#666",
  },
};

export default AboutUs;
