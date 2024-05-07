
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home(props) {
  return (
    <div>
      <nav className="navbar">
        <Link to="/launches/page/0">Launches Listing</Link>
        <Link to="/payloads/page/0">Payloads Listing</Link>
        <Link to="/cores/page/0">Cores Listing</Link>
        <Link to="/rockets/page/0">Rockets Listing</Link>
        <Link to="/ships/page/0">Ships Listing</Link>
        <Link to="/launchpads/page/0">Launch Pads Listing</Link>
      </nav>
      <div className="container">
        <h2>SpaceX Rocket Road Hawthorne California</h2>
        <h3>Elon Musk</h3>
        <p>SpaceX designs, manufactures, and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</p>
      </div>
    </div>
  );
}

export default Home;