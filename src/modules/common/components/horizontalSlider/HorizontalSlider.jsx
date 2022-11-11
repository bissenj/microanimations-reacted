import React from "react";
import './horizontal-slider.css';

/*

// What it does:
1.  Animates slide transitions
2.  Sets slide by passing in interval

// What it doesn't do:
1.  Touch events
2.  Keypress events
3.  Wrapping
4.  Notifies other components when index is changed within slider
5.  Updates github pages on push.

// Concerns
1.  Unsure how the responsive height is going to work with history slides.

*/


const data = [{id: 1, text: "This is Slide 1", background: "#FFCF47"}, {id: 2, text: "Slide 2", background: "#7ADCEF"}, {id: 3, text: "3rd Slide", background: "#a78df5" }, {id:4, text:"Last Slide.  4", background: "#ff8686"}];

function HorizontalSlider({index}) {
    
    return (
        <div className='photoSlider' tabIndex={0} data-index={index}>
            <div className='slide-viewer'>
                <div className='slide-group animating' style={{ transform: `translateX(-${index * 100}%)` }}>
                    {data.map((item, index) => {
                        return (<div key={index} className='slide flex-center' style={{backgroundColor: item.background}}
                                    data-id={item.id}> 
                                        {item.text} 
                                </div>);
                    })}
                </div>
            </div>
        </div>
    );
}

export default HorizontalSlider;


// References:
// 1.  https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0