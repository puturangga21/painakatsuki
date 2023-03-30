import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import SearchPage from "./components/SearchPage";

function App() {
   return (
      <Router>
         <Routes>
            <Route exact path="/" Component={HomePage} />
            <Route path="/search-movie" Component={SearchPage} />
            <Route path="*" Component={NotFound} />
         </Routes>
      </Router>
   );
}

export default App;
