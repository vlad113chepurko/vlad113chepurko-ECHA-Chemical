import "./App.css";

function App() {
  return (
    <div className="container fade-up">
      <header className="header">
        <div className="brand">
          <div className="logo">🧩</div>
          <div>
            <h1>OPTIMADE Browser</h1>
            <p>Explore materials & properties via OPTIMADE API</p>
          </div>
        </div>
        <div className="controls">
          <div className="search">
            <input type="text" placeholder="Search materials..." />
            <span className="kbd">⌘K</span>
          </div>
          <button className="btn">Search</button>
          <button className="btn ghost">Dark / Light</button>
        </div>
      </header>

      <div className="layout">
        <main className="results">
          <div className="filters">
            <span className="filter-chip">All</span>
            <span className="filter-chip">Crystals</span>
            <span className="filter-chip">Metals</span>
            <span className="filter-chip">Organic</span>
          </div>

          <div className="grid">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card fade-up">
                <div className="meta">
                  <div className="thumb">Fe</div>
                  <div>
                    <h3>Iron</h3>
                    <p>Symbol: Fe</p>
                  </div>
                </div>
                <div className="types">
                  <span className="type">Metal</span>
                  <span className="type">Crystal</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pager">
            <button>&lt;</button>
            <span>1 / 5</span>
            <button>&gt;</button>
          </div>
        </main>

        <aside className="sidebar">
          <div className="title">
            <h2>Material Details</h2>
            <button className="btn ghost">Close</button>
          </div>
          <div className="props">
            <div className="prop-row">
              <b>Formula:</b> Fe2O3
            </div>
            <div className="prop-row">
              <b>Density:</b> 5.24 g/cm³
            </div>
            <div className="prop-row">
              <b>Band gap:</b> 2.1 eV
            </div>
            <div className="prop-row">
              <b>Space group:</b> R-3c
            </div>
          </div>

          <table className="prop-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lattice a</td>
                <td>5.03 Å</td>
              </tr>
              <tr>
                <td>Lattice b</td>
                <td>5.03 Å</td>
              </tr>
              <tr>
                <td>Lattice c</td>
                <td>13.75 Å</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </div>
    </div>
  );
}

export default App;
