import React, { useState, useEffect, useLayoutEffect } from 'react';
import FileGrid from './components/FileGrid'
import FileData from './FileData';
import David from './content/David';
import About from './content/About';
import ReadMe from './content/ReadMe';
import Projects from './content/Projects';
import Loader from 'react-loader-spinner';

function App() {
    const [time, setTime] = useState(new Date().toLocaleString())
    const [size, setSize] = useState([0, 0])
    const [fileDataList, setFileDataList] = useState(null)

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
            let aboutHeight = 0.55
            let aboutY = 0.4

            if (window.innerHeight < 500) {
                aboutY = 0.65
                aboutHeight = 0.35
            }
            else if (window.innerHeight < 560) {
                aboutY = 0.55
                aboutHeight = 0.45
            }
            else if (window.innerHeight < 600) {
                aboutY = 0.5
                aboutHeight = 0.5
            }
            else if (window.innerHeight < 700) {
                aboutY = 0.45
            }

            setFileDataList(
                [
                    new FileData("Projects", "", null, <Projects/>, null),
                    new FileData("dgMail", "", "mailto:david_grossman@brown.edu", null, null),
                    new FileData("GitHub", "", "https://github.com/dg314", null, null),
                    new FileData("LinkedIn", "", "https://linkedin.com/in/dg314", null, null),
                    new FileData("david", ".png", null, <David/>, {width: 0.3, height: 0.3, x: 0.35, y: 0.05}),
                    new FileData("resume", ".pdf", "resume.pdf", null, null),
                    new FileData("about", ".txt", null, <About/>, {width: 0.5, height: aboutHeight, x: 0.25, y: aboutY}),
                    new FileData("README", ".txt", null, <ReadMe/>, null),
                ]
            )
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
                    {fileDataList ? <FileGrid size={size} fileDataList={fileDataList} /> : 
                    <div className="w-full h-full flex items-center">
                        <Loader className="mx-auto" type="TailSpin" color="#FFFFFF" height={100} width={100} />
                    </div>}
                </div>
            </div>
        </>
    );
}

export default App;
