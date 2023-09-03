// Router Dom
import { Routes, Route } from 'react-router-dom';

// Sass
import './styles/global.scss'

// Components
import Navbar from './components/Navbar'

// Pages
import Movie from './pages/Movie';
import NotFound from './pages/404';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Body />
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
