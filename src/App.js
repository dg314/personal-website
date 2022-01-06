import React, { useState, useEffect, useLayoutEffect } from 'react';
import FileGrid from './components/FileGrid'
import FileData from './FileData';
import David from './content/David';
import About from './content/About';

function App() {
    const [time, setTime] = useState(new Date().toLocaleString())
    const [size, setSize] = useState([0, 0]);

    const fileDataList = [
        new FileData("dgNet", "", "", null, null),
        new FileData("dgMail", "", "mailto:david_grossman@brown.edu", null, null),
        new FileData("GitHub", "", "https://github.com/dg314", null, null),
        new FileData("LinkedIn", "", "https://linkedin.com/in/dg314", null, null),
        new FileData("david", ".png", "", <David/>, {width: 0.3, height: 0.3, x: 0.35, y: 0.05}),
        new FileData("resume", ".pdf", "resume.pdf", null, null),
        new FileData("about", ".txt", "", <About/>, {width: 0.4, height: 0.55, x: 0.3, y: 0.4}),
        new FileData("README", ".txt", "", null, null),
    ]

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            <div className="absolute w-full h-full opacity-20">
                <img className="object-contain w-full h-full px-16 pb-16 pt-20" draggable="false" src="/pi_symbol.svg"/>
            </div>
            <div className="font-mono absolute flex items-center z-50 w-full h-8 bg-[#070707]">
                <img className="h-4 m-2 text-white" draggable="false" src="/pi_symbol_white.svg"/>
                <h1 className="text-center text-white text-sm mx-1">dgOS v3.14</h1>
                <h1 className="text-center text-white text-sm ml-auto mr-2">{time}</h1>
            </div>
            <div id="drag-bounds" className="font-mono absolute top-8 w-full h-[calc(100%-2rem)]">
                <FileGrid size={size} fileDataList={fileDataList} />
            </div>
        </>
    );
}

export default App;
