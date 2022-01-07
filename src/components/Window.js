import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';

function Window({ fileData, fileClose, size, becomeTopFile, isTopFile }) {
    const pixelInitPosition = fileData.getPixelInitPosition(size)

    const [width, setWidth] = useState(pixelInitPosition.width);
    const [height, setHeight] = useState(pixelInitPosition.height);
    const [x, setX] = useState(pixelInitPosition.x);
    const [y, setY] = useState(pixelInitPosition.y);

    const setPosition = (newWidth, newHeight, newX, newY) => {
        setX(newX)
        setY(newY)
        setWidth(newWidth)
        setHeight(newHeight)
    }

    useEffect(() => {
        const newX = Math.max(Math.min(size[0] - width - 8, x), 0)
        const newY = Math.max(Math.min(size[1] - height - 40, y), 0)
        const newWidth = Math.min(width, size[0] - 8)
        const newHeight = Math.min(height, size[1] - 40)

        setPosition(newWidth, newHeight, newX, newY)
        // eslint-disable-next-line
    }, [size])

    const rndStyle = {
        zIndex: isTopFile() ? 30 : 20,
    }

    const windowStyle = {
        borderColor: isTopFile() ? "#CDCDCD" : "#BCBCBC"
    }

    const topBarStyle = {
        backgroundColor: isTopFile() ? "#CDCDCD" : "#BCBCBC"
    }

    return (
        <Rnd 
            size={{ width: width, height: height }}
            position={{ x: x, y: y }}
            onDragStop={(e, d) => setPosition(width, height, d.x, d.y) }
            onResizeStop={(e, direction, ref, delta, position) => setPosition(parseInt(ref.style.width.slice(0, -2)), parseInt(ref.style.height.slice(0, -2)), position.x, position.y) }
            bounds="#drag-bounds"
            minWidth={250}
            minHeight={250}
            dragHandleClassName="drag-bar"
            style={rndStyle}
            onDragStart={becomeTopFile}
            onMouseDown={becomeTopFile}
        >
            <div className="rounded-xl w-full h-full border-2 bg-white" style={windowStyle}>
                <div className="flex items-center w-full h-7 drag-bar rounded-t-md cursor-move" style={topBarStyle}>
                    <div className="w-7 h-7"/>
                    <p className="text-sm mx-auto">
                        {fileData.getFullName()}
                    </p>
                    <button onClick={fileClose} className="flex items-center w-10 h-5 md:w-3 md:h-3 m-2 bg-red-600 rounded-tr-md md:rounded-full px-5 py-[0.625rem] md:p-[0.375rem] hover:p-0">
                        <img className="w-3 h-3 md:w-2 md:h-2 mx-auto opacity-60 select-none" draggable="false" src="x.svg" alt="X"/>
                    </button>
                </div>
                <div className="w-full h-[calc(100%-1.75rem)] p-2">
                    {fileData.windowContent}
                </div>
            </div>
        </Rnd>
    )
}

export default Window;
