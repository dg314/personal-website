import React, { useState, useEffect, useLayoutEffect } from 'react';
import FileGrid from './components/FileGrid'
import FileData from './FileData';
import David from './content/David';
import About from './content/About';
import ReadMe from './content/ReadMe';
import Projects from './content/Projects';

function App() {
    const [time, setTime] = useState(new Date().toLocaleString())
    const [size, setSize] = useState([0, 0])
    const [showFiles, setShowFiles] = useState(false)

    const fileDataList = [
        new FileData("Projects", "", null, <Projects/>, null),
        new FileData("dgMail", "", "mailto:david_grossman@brown.edu", null, null),
        new FileData("GitHub", "", "https://github.com/dg314", null, null),
        new FileData("LinkedIn", "", "https://linkedin.com/in/dg314", null, null),
        new FileData("david", ".png", null, <David/>, {width: 0.3, height: 0.3, x: 0.35, y: 0.05}),
        new FileData("resume", ".pdf", "resume.pdf", null, null),
        new FileData("about", ".txt", null, <About/>, {width: 0.5, height: 0.55, x: 0.25, y: 0.4}),
        new FileData("README", ".txt", null, <ReadMe/>, null),
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
            setTime(new Date().toLocaleString())
        }, 1000)

        const dispTimer = setTimeout(() => {
            setShowFiles(true)
        }, 1000)

        return () => {
            clearInterval(interval)
            clearTimeout(dispTimer)
        }
    }, []);
    
    return (
        <>
            <div className="absolute w-full h-full opacity-20">
                <img className="object-contain w-full h-full px-16 pb-16 pt-20" draggable="false" src="/pi_symbol.svg" alt="Pi Symbol"/>
            </div>
            <div className="font-mono absolute flex items-center z-50 w-full h-8 bg-[#070707]">
                <img className="h-4 m-2 text-white" draggable="false" src="/pi_symbol_white.svg" alt="Pi Symbol"/>
                <h1 className="text-center text-white text-sm mx-1">dgOS v3.14</h1>
                <h1 className="text-center text-white text-sm ml-auto mr-2">{time}</h1>
            </div>
            <div className="font-mono absolute top-8 w-full h-[calc(100%-2rem)] p-1">
                <div className="w-full h-full" id="drag-bounds">
                    {showFiles ? <FileGrid size={size} fileDataList={fileDataList} /> : null}
                </div>
            </div>
        </>
    );
}

export default App;
