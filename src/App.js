import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Body from './Components/Body';

function App() {
  return (
    <div className='wrapper'>
      <div className="background_glass">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
