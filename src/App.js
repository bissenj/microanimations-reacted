import logo from './logo.svg';
import './App.css';

// import { useState } from 'react';

import HomePage from "./pages/homePage";
import HorizontalSliderPage from "./pages/horizontalSliderPage";
import WebWorkerPage from "./pages/webWorkerPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import ControlGrid from './modules/common/components/controlgrid/';
// import IndexControl from './modules/common/components/indexcontrol/';
// import HorizontalSlider from './modules/common/components/horizontalSlider/HorizontalSlider';

// const container = {
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   height: '100%'
// }

function App() {

  return (
    <>      
      <Router>
        <Routes>          
            <Route path="/" element={<HomePage />} />
            <Route path="/microanimations-reacted" element={<HomePage />} />            
            <Route path="/slider" element={<HorizontalSliderPage/>} />
            <Route path="/webworker" element={<WebWorkerPage/>} />          
        </Routes>
      </Router>
    </>
  )
}


//   // STATE
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   // CALL BACKS


//   return (
//     <div className="App">
//       <header className="App-header"> 

//         <p>Control Box and Horizontal Slider Demo - {selectedIndex}</p>
//         <hr style={{'width':'70%'}}></hr>              
        
//         <div style={container}>
//           <ControlGrid quantity={4} index={selectedIndex} updateSelectedIndex={setSelectedIndex}/>
//           <HorizontalSlider index={selectedIndex} updateSelectedIndex={setSelectedIndex} />
//         </div>

//         <IndexControl index={selectedIndex} updateSelectedIndex={setSelectedIndex}/>

//       </header>      
//     </div>
//   );
// }

export default App;
