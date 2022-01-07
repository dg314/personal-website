import React, { useState } from 'react';
import Window from './Window';

function File({ fileData, size, topFile, setTopFile }) {
    const [showWindow, setShowWindow] = useState(fileData.open)

    const fileOpen = () => {
        fileData.openFile({width: 0.4, height: 0.4, x: 0.3, y: 0.3})
        setShowWindow(fileData.open)
        becomeTopFile()
    }

    const fileClose = () => {
        fileData.closeFile()
        setShowWindow(fileData.open)
    }

    const becomeTopFile = () => {
        setTopFile(fileData.name)
    }

    const isTopFile = () => {
        return topFile === fileData.name
    }

    return (
        <>
            <a href={fileData.externalLink} target="_blank" rel="noreferrer" onClick={fileOpen} className="flex items-center w-20 h-20 m-2 border-2 border-transparent hover:bg-white/5 hover:border-white/20 hover:cursor-pointer">
                <div className="mx-auto">
                    <img className="w-12 h-12 mb-1 block mx-auto" draggable="false" src={fileData.getIconPath()} alt="File Icon"/>
                    <p className="text-white text-xs text-center">
                        {fileData.getFullName()}
                    </p>
                </div>
            </a>
            {showWindow && size[0] > 0 && size[1] > 0 ?
                <Window fileData={fileData} fileClose={fileClose} size={size} becomeTopFile={becomeTopFile} isTopFile={isTopFile} />
            : null}
        </>
    );
}

export default File;
