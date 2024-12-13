
import React from "react";
import ReactDOM from "react-dom/client";

// Define the component
function WelcomeMessage() {
  const userName = "Aryan";
  return <h1>Hello, {userName}!</h1>;
}

// Render the component directly
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WelcomeMessage />
  </React.StrictMode>
);
