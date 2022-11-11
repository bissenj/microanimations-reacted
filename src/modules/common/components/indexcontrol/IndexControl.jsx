import React from 'react';
// import { useState } from 'react';


const borderBox = {
    border: '1px solid #ccc',
    // width: '60px',
    // height: '60px',
    // backgroundColor: 'white',
    minWidth: '200px',
    padding: '20px',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

}

function IndexControl({index, updateSelectedIndex}) {
    //const [currentIndex, setCurrentIndex] = useState(0);

    const handleUpdate = (val) => {
        //setCurrentIndex(currentIndex + val);
        updateSelectedIndex(index + val);
    }

    return (
        <div style={borderBox}>
            {/* Left Increment */}
            <button onClick={() => handleUpdate(-1)}>-</button>

            {/* Label */}
            <span>{ index }</span>

             {/* Right Increment */}
            <button onClick={() => handleUpdate(1)}>+</button>
        </div>
    );
}

export default IndexControl;