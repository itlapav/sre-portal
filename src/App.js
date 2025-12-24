import React, { useState } from "react";
import "./App.css";

function App() {
  const [incident, setIncident] = useState(false);

  const services = [
    { name: "Checkout", status: "Healthy" },
    { name: "Post-Sales", status: "Healthy" },
    { name: "Add-Ons", status: "Degraded" },
    { name: "Auth", status: "Healthy" }
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>SRE Portal</h1>
        <p>Service Reliability Overview</p>
      </header>

      {incident && (
        <div className="incident">
          🚨 Incident ongoing — team investigating
        </div>
      )}

      <button className="toggle" onClick={() => setIncident(!incident)}>
        {incident ? "Resolve Incident" : "Trigger Incident"}
      </button>

      <div className="services">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <h3>{service.name}</h3>
            <span className={`status ${service.status.toLowerCase()}`}>
              {service.status}
            </span>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>Maintained by SRE Team</p>
      </footer>
    </div>
  );
}

export default App;
