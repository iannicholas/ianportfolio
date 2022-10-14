import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IanHeader from './components/header';
import IanFooter from './components/footer';
import IanAbout from './components/about';
import IanBody from './components/body';

function App() {
  return (
    
    <div className="App">
      <IanHeader />
      <IanAbout />
      <IanBody />
      <IanFooter />
    </div>
  );
}

export default App;
