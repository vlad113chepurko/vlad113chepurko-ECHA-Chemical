import "./App.css";
import { layouts } from "./layouts/index";
import { components } from "./components/index";
function App() {
  return (
    <>
      <layouts.Header />
      <main className="app-content">
        <h1 style={{ marginBottom: "30px" }}>Welcome to the Echo App</h1>
        <components.Filter />
        <components.MaterialCard />
      </main>
    </>
  );
}

export default App;
