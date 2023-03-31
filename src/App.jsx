import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import SearchPage from "./components/SearchPage";
import HomeGenre from "./components/genre/HomeGenre";
import GenreAction from "./components/genre/GenreAction";
import GenreComedy from "./components/genre/GenreComedy";
import GenreDrama from "./components/genre/GenreDrama";
import GenreHarem from "./components/genre/GenreHarem";
import GenreHorror from "./components/genre/GenreHorror";
import GenreRomance from "./components/genre/GenreRomance";

function App() {
   return (
      <Router>
         <Routes>
            <Route exact path="/" Component={HomePage} />
            <Route path="/search-movie" Component={SearchPage} />
            <Route path="/genre" Component={HomeGenre} />
            <Route path="/genre-action" Component={GenreAction} />
            <Route path="/genre-comedy" Component={GenreComedy} />
            <Route path="/genre-drama" Component={GenreDrama} />
            <Route path="/genre-harem" Component={GenreHarem} />
            <Route path="/genre-horror" Component={GenreHorror} />
            <Route path="/genre-romance" Component={GenreRomance} />
            <Route path="*" Component={NotFound} />
         </Routes>
      </Router>
   );
}

export default App;
