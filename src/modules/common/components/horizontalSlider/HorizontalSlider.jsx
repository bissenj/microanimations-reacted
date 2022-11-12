import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react";
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

function HorizontalSlider({index, updateSelectedIndex}) {
    
    const sliderRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const currentIndex = useRef(-1);
    const currentTranslate = useRef(0);
    const prevTranslate = useRef(0);
    
    // Dragging variables
    const dragging = useRef(false);
    const startPos = useRef(0);
    const animationRef = useRef(null);



    const setPositionByIndex = useCallback((width = dimensions.width) => {
        //console.log("setPositionByIndex: ", currentIndex.current, width);
        currentTranslate.current = currentIndex.current * -width;
        prevTranslate.current = currentTranslate.current;

        //console.log("  -- currentTranslate: ", currentTranslate.current, "prev: ", prevTranslate.current);

        setSliderPosition();
    }, [dimensions.width]);


    // USE EFFECT when index changes
    useEffect(() => {
        if (currentIndex.current !== index) {
            //console.log("Do stuff in use effect: ", index);
            currentIndex.current = index;
            setPositionByIndex();
        }
    }, [index]);


    // USE EFFECT for Event Handlers
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])


    // Handle Key Down
    const handleKeyDown = ({key}) => {
        //console.log("handleKeyDown", key);
        //const arrowsPressed = ['ArrowRight', 'ArrowLeft'].includes(key);

        if (key === 'ArrowRight') {
            updateSelectedIndex(currentIndex.current += 1);             
        }

        if (key === 'ArrowLeft') {
            updateSelectedIndex(currentIndex.current -= 1);           
        }
    }

    function animation() {
        setSliderPosition();
        if (dragging.current) requestAnimationFrame(animation);
    }

    // Handle drag start
    function handleDragStart(e) {
        console.log("Drag Start");
        dragging.current = true;
        startPos.current = e.pageX;

        animationRef.current = requestAnimationFrame(animation);
    }


     // Handle drag end
     function handleDragEnd(e) {
        console.log("Drag End");

        dragging.current = false;
        cancelAnimationFrame(animationRef.current);

        const threshold = 50;
        const movedBy = currentTranslate.current - prevTranslate.current;
        if (movedBy < -threshold) {
            updateSelectedIndex(currentIndex.current += 1);
        }
        if (movedBy > threshold) {
            updateSelectedIndex(currentIndex.current -= 1);
        }
        setPositionByIndex();

    }

    // Handle drag move
    function handleDragMove(e) {
        if (dragging.current) {
            console.log("Drag Move");

            const currentPosition = e.pageX;
            currentTranslate.current = prevTranslate.current + currentPosition - startPos.current;
        }
    }



    // USE LAYOUT EFFECT when setPositionByIndex is called? 
    useLayoutEffect(() => {
        //console.log("useLayoutEffect");
        if (sliderRef.current) {
            const dims = getElementDimensions(sliderRef.current);            
            setDimensions(dims);
            //console.log("  -- Dimensions: ", dims);
            
            setPositionByIndex(dims.width);
        }
    }, [setPositionByIndex]);


    // Handles the actual "moving" of the slides.
    function setSliderPosition() {
        if (!sliderRef.current) return;  // bail if no reference   

        sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
        //console.log("Set slider position: ", currentTranslate.current);
    }


    function getElementDimensions(element) {
        const width = element.clientWidth
        const height = element.clientHeight
        return { width, height }
    }
    
    
    return (
        <div className='photoSlider' tabIndex={0} data-index={index}>
            <div className='slide-viewer'>
                {/* <div ref={sliderRef} className='slide-group animating' style={{ transform: `translateX(-${index * 100}%)` }}> */}
                <div 
                    ref={sliderRef} 
                    className='slide-group animating' 
                    style={{ transform: `translateX(-${index * 100}%)` }}
                    onPointerDown={handleDragStart}
                    onPointerUp={handleDragEnd}
                    onPointerMove={handleDragMove}
                    onPointerLeave={() => {    
                        console.log("Drag Leave");                                            
                        if (dragging.current) {
                            handleDragEnd();                            
                        }
                        
                    }}
                >
                
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



