import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import ChickenBuckets from "./pages/ChickenBuckets";
import ChickenTenders from "./pages/ChickenTenders";
import HotWings from "./pages/HotWings";
import Sandwiches from "./pages/Sandwiches";
import Burgers from "./pages/Burgers";
import Drinks from "./pages/Drinks";
import Checkout from "./Checkout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ChickenBuckets />} />
            <Route path="/chicken-tenders" element={<ChickenTenders />} />
            <Route path="/hotwings" element={<HotWings />} />
            <Route path="/sandwiches" element={<Sandwiches />} />
            <Route path="/burgers" element={<Burgers />} />
            <Route path="/drinks" element={<Drinks />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
