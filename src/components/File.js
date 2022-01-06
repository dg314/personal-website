import React, { useState, useEffect } from 'react';
import Window from './Window';

function File({ fileData, size }) {
    const [showWindow, setShowWindow] = useState(fileData.isWindowShown())

    const fileOpen = () => {
        fileData.openFile()
        setShowWindow(fileData.isWindowShown())
    }

    const fileClose = () => {
        fileData.closeFile()
        setShowWindow(fileData.isWindowShown())
    }

    return (
        <>
            <button onClick={fileOpen} className="w-20 h-20 m-2 border-2 border-transparent hover:bg-white/5 hover:border-white/20">
                <img className="w-12 h-12 mb-1 block mx-auto" draggable="false" src={`icons/${fileData.name}.svg`}/>
                <p className="text-white text-xs text-center">
                    {fileData.getFullName()}
                </p>
            </button>
            {showWindow ?
                <Window fileData={fileData} fileClose={fileClose} size={size} />
            : null}
        </>
    );
}

export default File;
