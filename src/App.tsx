import React from 'react';
import { Authorization } from './features/authorization/Authorization';
import { SpotifyExample } from './features/spotifyExample/SpotifyExample';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Authorization />
        <SpotifyExample />
      </header>
    </div>
  );
}

export default App;
