import { Routes, Route } from "react-router-dom";

// Pages
import Periods from "./pages/Periods";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Periods />} />
        <Route path="/:period" element={<Periods />} />
      </Routes>
    </div>
  );
}

export default App;
