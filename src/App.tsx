import "./App.css";
import { layouts } from "./layouts/index";
import { components } from "./components/index";
function App() {
  return (
    <div className="container">
      <layouts.Header />
      <div className="app-content">
        <h1>Welcome to the Echo App</h1>
        <components.MaterialCard />
      </div>
    </div>
  );
}

export default App;
