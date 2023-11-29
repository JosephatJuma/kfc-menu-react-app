import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./home/Home";
import ChickenBuckets from "./pages/ChickenBuckets";
import ChickenTenders from "./pages/ChickenTenders";
import HotWings from "./pages/HotWings";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ChickenBuckets />} />
            <Route path="/chicken-tenders" element={<ChickenTenders />} />
            <Route path="/hotwings" element={<HotWings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
