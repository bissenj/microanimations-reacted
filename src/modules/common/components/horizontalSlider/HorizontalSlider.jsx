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


// LET THE LEARNING BEGIN (...continue) -> References

// 1.  React Touch Drag Slider.  Pretty good example of what I want to build.
//     https://www.npmjs.com/package/react-touch-drag-slider
//     https://github.com/bushblade/react-touch-drag-slider/tree/main/src



// 2.  Clever way to move slides on index changed.  No drag support though.
//     https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

// 3.  Example of drag slider.  No snap to slide though.
//     https://codesandbox.io/s/j356wz6wy5?file=/src/Carousel.js

// 4.  React Draggable Slider - Open source project to check out.  Uses React Spring and GSAP
//     https://www.npmjs.com/package/react-draggable-slider

// 5.  Bear Carousel - Text content fade ins when animations finish
//     https://carousel.bearests.com/example/text-animations
//     https://github.com/imagine10255/bear-react-carousel

// 6.  useLayoutEffect
//     https://upmostly.com/tutorials/react-uselayouteffect-hook?gclid=Cj0KCQiAgribBhDkARIsAASA5bu64wv1TgvjfgbuT2-J4clO126hP7aH-gLlTcCFN4OQbZqMQQwi-4IaAnSDEALw_wcB

// 7.  will-change -> Might help with about page animations
//     https://css-tricks.com/almanac/properties/w/will-change/



