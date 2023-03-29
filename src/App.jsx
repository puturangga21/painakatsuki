import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";

function App() {
   return (
      <Router>
         <Routes>
            <Route exact path="/" Component={HomePage} />
            <Route path="*" Component={NotFound} />
         </Routes>
      </Router>
   );
}

export default App;
