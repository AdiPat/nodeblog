import { useEffect, useState } from "react";
import logo from "./logo.svg";
import { CLIENT_PORT, CLIENT_URL } from "./constants";
import "./App.css";

function App() {
  const [customMessage, setCustomMessage] = useState("");

  const loadMessage = async () => {
    try {
      const response = await fetch("http://localhost:8080/hello");
      const message = await response.text();
      console.log(message);
      setCustomMessage(message);
    } catch (err) {
      console.error("Failed: ", err);
    }
  };

  useEffect(() => {
    console.log(CLIENT_URL);
    loadMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome User.</p>
        <p>Your custom message is: {customMessage}</p>
      </header>
    </div>
  );
}

export default App;
