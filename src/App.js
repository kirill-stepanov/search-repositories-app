import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import HomePage from './pages/home'
import FavouritePage from './pages/favourite'
import DetailsPage from './pages/details'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/favourite" element={<FavouritePage/>}/>
          <Route exact path="/details" element={<DetailsPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App