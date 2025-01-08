import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
