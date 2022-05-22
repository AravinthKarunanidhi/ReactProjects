import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import FavouritePage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
function App() {
  return (
    <Layout>
 
      <Routes>
        <Route path="/" exact element={<AllMeetups></AllMeetups>} />

        <Route
          path="/new-meetup"
          exact
          element={<NewMeetupPage></NewMeetupPage>}
        />

        <Route
          path="/favorites"
          exact
          element={<FavouritePage></FavouritePage>}
        />
      </Routes>
    </Layout>
  );
}

export default App;
