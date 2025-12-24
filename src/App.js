import "./App.css";

function StatusBadge({ status }) {
  const color =
    status === "OK" ? "green" : status === "WARN" ? "orange" : "red";

  return <span className={`badge ${color}`}>{status}</span>;
}

function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>📡 SRE Status Portal</h1>
        <p>Service reliability & operational transparency</p>
      </header>

      <div className="grid">
        <Card title="Service Status">
          <p>
            API Service: <StatusBadge status="OK" />
          </p>
          <p>
            Web Frontend: <StatusBadge status="OK" />
          </p>
          <p>
            Database: <StatusBadge status="OK" />
          </p>
        </Card>

        <Card title="SLO Overview">
          <p>Availability: <strong>99.95%</strong></p>
          <p>Latency (P95): <strong>240ms</strong></p>
          <p>Error Budget Remaining: <strong>87%</strong></p>
        </Card>

        <Card title="Recent Incidents">
          <ul>
            <li>No incidents in the last 7 days 🎉</li>
          </ul>
        </Card>

        <Card title="Runbooks">
          <ul>
            <li>🔧 Restart Service</li>
            <li>📈 Scale Infrastructure</li>
            <li>🚨 Incident Response</li>
          </ul>
        </Card>
      </div>

      <footer className="footer">
        <p>Maintained by SRE Team</p>
      </footer>
    </div>
  );
}

export default App;
