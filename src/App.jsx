import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/ui";

import { AddBeerPage, AllBeersPage, BeerDetailsPage, HomePage, RandomBeerPage } from "./pages";

function App() {
  return (
    <div className="App">
    <Navbar />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;