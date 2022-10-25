import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/components/Footer';
import NavBar from './pages/components/NavBar';
import CreateTournamentPage from './pages/CreateTournamentPage';
import LandingPage from './pages/LandingPage';
import PlayerPage from './pages/PlayerPage';
import SearchPage from './pages/SearchPage';
import TournamentPage from './pages/TournamentPage';

function App() {
  return (
      <BrowserRouter>
      <NavBar />
      <Routes>
          {/* <Route path="/register" element={Register}/> */}
          {/* <Route path="/login" element={Login} /> */}
          <Route path="/t/:tournamentId" element={<TournamentPage/>} />
          <Route path="/t/new" element={<CreateTournamentPage/>} />
          <Route path="/p/:playerId" element={<PlayerPage/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/" element={<LandingPage/>}/>
      </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
