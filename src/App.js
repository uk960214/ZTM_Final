import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
// import Background from './components/Background/Background'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Background /> */}
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
