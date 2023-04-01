import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "./pages/HomePage";
import NotFound from "./components/NotFound";
import SearchPage from "./components/SearchPage";
import HomeGenre from "./pages/genre/HomeGenre";
import GenreAction from "./pages/genre/GenreAction";
import GenreComedy from "./pages/genre/GenreComedy";
import GenreDrama from "./pages/genre/GenreDrama";
import GenreHarem from "./pages/genre/GenreHarem";
import GenreHorror from "./pages/genre/GenreHorror";
import GenreRomance from "./pages/genre/GenreRomance";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route exact path="/" Component={HomePage} />
               <Route path="/search-movie" Component={SearchPage} />
               <Route path="/genre" Component={HomeGenre}>
                  <Route path="action" Component={GenreAction} />
                  <Route path="comedy" Component={GenreComedy} />
                  <Route path="drama" Component={GenreDrama} />
                  <Route path="harem" Component={GenreHarem} />
                  <Route path="horror" Component={GenreHorror} />
                  <Route path="romance" Component={GenreRomance} />
               </Route>
               <Route path="*" Component={NotFound} />
            </Routes>
         </Router>

         <Analytics />
      </>
   );
}

export default App;
