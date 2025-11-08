import React from "react";
import "./styles.css";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1>EZ Works World</h1>
        <p>Empowering Businesses with Smart Digital Solutions</p>
      </header>

      {/* Main Content */}
      <section className="main-section">
        <div className="content">
          <h2>Contact Us</h2>
          <p>
            Have a question or want to collaborate? Fill out the form below and
            our team will get in touch with you soon.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 EZ Works Global. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
