import React from 'react';
//import { useState } from 'react';
import './control-grid.css';

//https://www.robinwieruch.de/react-function-component/


function ControlGrid({quantity, index, updateSelectedIndex}) {
    // STATE
    //const [selectedIndex, setSelectedIndex] = useState(index);

    // RENDER BOXES
    const createBoxes = () => {
        let content = [];
        for (let i = 0; i < quantity; i++) {
            let classes = 'control-box';
            if (i == index) {
                classes += ' selected';
                //setSelectedIndex(i);
            }
           
            content.push(<div key={i} className={classes} data-index={i} onClick={handleClick}></div>)                     
        }
        return content;
    }
    
    // CLICK HANDLER
    const handleClick = (e) => { 
        const newIndex = parseInt(e.target.dataset.index);
        //setSelectedIndex(newIndex); 
        updateSelectedIndex(newIndex);       
    }

    return (
        <div className='control-grid'>
            {createBoxes()} 
        </div>
    );
}

export default ControlGrid;