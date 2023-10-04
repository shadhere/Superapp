// App.js
import React from "react";
import RegistrationForm from "./RegistrationForm";
import "./App.css"; // Import your CSS styles

function App() {
  return (
    <div className="app">
      <div className="left-half">
        {/* Add your image here */}
        <img
          src="/Supermain.png"
          alt="Supermain"
          className="background-image"
        />
      </div>
      <div className="right-half">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
