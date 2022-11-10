import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import ControlGrid from './modules/common/components/controlgrid/';
import IndexControl from './modules/common/components/indexcontrol/';

function App() {

  // STATE
  const [selectedIndex, setSelectedIndex] = useState(0);

  // CALL BACKS


  return (
    <div className="App">
      <header className="App-header"> 

        <p>Control Box and Horizontal Slider Demo - {selectedIndex}</p>
        <hr style={{'width':'70%'}}></hr>              
        
        <ControlGrid quantity={4} index={selectedIndex} updateSelectedIndex={setSelectedIndex}/>

        <IndexControl index={selectedIndex} updateSelectedIndex={setSelectedIndex}/>

      </header>      
    </div>
  );
}

export default App;
