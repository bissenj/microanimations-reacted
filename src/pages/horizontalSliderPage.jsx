import React, {useState, useEffect} from "react";

import '../App.css';

import ControlGrid from '../modules/common/components/controlgrid/';
import IndexControl from '../modules/common/components/indexcontrol/';
import HorizontalSlider from '../modules/common/components/horizontalSlider/HorizontalSlider';

import Footer from '../components/footer';

const container = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}


const DOCUMENT_TITLE = 'Horizontal Slider Page';

export default function HorizontalSliderPage() {

    // STATE
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    // SEO
    useEffect(() => {
        document.title = DOCUMENT_TITLE;
      }, []);
        
    return (
        <>
            <div className="App">
                <header className="App-header"> 

                    <p>Control Box and Horizontal Slider Demo - {selectedIndex}</p>
                    <hr style={{'width':'70%'}}></hr>              
                    
                    <div style={container}>
                    <ControlGrid quantity={4} index={selectedIndex} updateSelectedIndex={setSelectedIndex}/>
                    <HorizontalSlider index={selectedIndex} updateSelectedIndex={setSelectedIndex} />
                    </div>

                    <IndexControl index={selectedIndex} updateSelectedIndex={setSelectedIndex}/>

                </header>      
            </div>
            <Footer></Footer>
        </>
    );   
}