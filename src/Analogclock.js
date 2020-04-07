import React from 'react';

function AnalogClock(props) {
    // console.log(props);
    let time = new Date(props.time);

    let clockContainer = {
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 20000,
        borderStyle: 'solid',
        borderColor: 'black'
    }

    let secondHand = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 1,
        transform: 'rotate(' + ((time.getSeconds() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        borderColor: 'red'
    }

    let minuteHand = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 3,
        transform: 'rotate(' + ((time.getMinutes() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        borderColor: 'grey'
    }

    let hourHand = {
        position: 'relative',
        top: 92,
        left: 106,
        border: '1px solid red',
        width: '20%',
        height: 7,
        transform: 'rotate(' + ((time.getHours() / 12) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        borderColor: 'red'
    }
    return (
        // <h1 style={{color:"green"}}>Analog Clcok</h1>
        <div className="container mt-5 pt-5"  style={clockContainer}>
            <div style={secondHand}></div>
            <div style={minuteHand}></div>
            <div style={hourHand}></div>
        </div>
    )
}

export default AnalogClock;