import React, { useState, useEffect, useLayoutEffect } from 'react';
import FileGrid from './components/FileGrid'

function App() {
    const [time, setTime] = useState(new Date().toLocaleString())
    const [size, setSize] = useState([0, 0]);

    const files = [
        {
            name: "david",
            extension: ".png",
            open: false,
            externalLink: "",
        },
        {
            name: "about",
            extension: ".txt",
            open: false,
            externalLink: "",
        },
        {
            name: "resume",
            extension: ".pdf",
            open: false,
            externalLink: "",
        },
        {
            name: "GitHub",
            extension: "",
            open: false,
            externalLink: "https://github.com/dg314",
        },
        {
            name: "LinkedIn",
            extension: "",
            open: false,
            externalLink: "https://linkedin.com/in/dg314",
        }
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
            <div className="absolute w-screen h-screen opacity-20">
                <img className="object-contain w-full h-full px-16 pb-16 pt-20 select-none" src="/pi_symbol.svg"/>
            </div>
            <div className="font-mono absolute z-10 w-screen h-screen">
                <div className="flex items-center h-8 bg-black/20 z-50">
                    <img className="h-4 m-2 text-white select-none" src="/pi_symbol_white.svg"/>
                    <h1 className="text-center text-white text-sm mx-1 select-none">dgOS v3.14</h1>
                    <h1 className="text-center text-white text-sm ml-auto mr-2 select-none">{time}</h1>
                </div>
                <FileGrid size={size} files={files} />
            </div>
        </>
    );
}

export default App;
