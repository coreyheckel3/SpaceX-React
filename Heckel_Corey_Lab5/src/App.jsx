
import './App.css';
import Home from './components/Home';
import CoreList from './components/CoreList';
import LaunchList from './components/LaunchList';
import LaunchpadList from './components/LaunchpadList';
import PayloadList from './components/PayloadList';
import RocketList from './components/RocketList';
import ShipList from './components/ShipList';
import Core from './components/Core';
import Launch from './components/Launch';
import Launchpad from './components/Launchpad';
import Payload from './components/Payload';
import Rocket from './components/Rocket';
import Ship from './components/Ship';
import NotFound from './components/NotFound';
import spacexLogo from './spacex.png';

//import Home from './components/Home';
import {Route, Link, Routes} from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
        <h1 className='App-title'>Welcome to the<img src={spacexLogo} alt="Space X" className="img-translate" style={{ width: '280px', height: '280px', verticalAlign: 'middle' }}></img>API</h1>
      </header>
      <br />
      <br />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/launches/page/:page' element={<LaunchList />}/>
        <Route path='/launches/:id' element={<Launch />}/>
        <Route path ='/payloads/page/:page' element={<PayloadList />}/>
        <Route path = '/payloads/:id' element={<Payload />} />
        <Route path = '/cores/page/:page' element={<CoreList />}/>
        <Route path = '/cores/:id' element={<Core />} />
        <Route path = '/rockets/page/:page' element={<RocketList />} />
        <Route path = '/rockets/:id' element={<Rocket />}/>
        <Route path = '/ships/page/:page' element={<ShipList />} />
        <Route path = '/ships/:id' element={<Ship />}/>
        <Route path = '/launchpads/page/:page' element={<LaunchpadList />}/>
        <Route path = '/launchpads/:id' element = {<Launchpad />}/>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
