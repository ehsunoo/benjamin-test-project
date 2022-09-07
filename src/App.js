import { Routes, Route } from "react-router-dom";

// Pages
import OneTime from "./pages/Periods";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:period" element={<OneTime />} />
      </Routes>
    </div>
  );
}

export default App;
