import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/ui";

import { HomePage } from "./pages";

function App() {
  return (
    <div className="App">
    <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </div>
  );
}

export default App;