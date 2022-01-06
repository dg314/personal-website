import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Rnd } from 'react-rnd';

function Window({ fileData, fileClose, size }) {
    const [width, setWidth] = useState(Math.max(size[0] * 0.4, 100));
    const [height, setHeight] = useState(Math.max(size[1] * 0.4, 100));
    const [x, setX] = useState(size[0] * 0.3);
    const [y, setY] = useState(size[1] * 0.3);

    console.log("EY")

    const changePosition = (newWidth, newHeight, newX, newY) => {
        setX(newX)
        setY(newY)
        setWidth(newWidth)
        setHeight(newHeight)
    }

    useEffect(() => {
        console.log(width)

        const newX = Math.max(Math.min(size[0] - width - 8, x), -8)
        const newY = Math.max(Math.min(size[1] - height - 40, y), -8)
        const newWidth = Math.min(width, size[0])
        const newHeight = Math.min(height, size[1] - 32)

        changePosition(newWidth, newHeight, newX, newY)
    }, [size])

    return (
        <Rnd 
            size={{ width: width, height: height }}
            position={{ x: x, y: y }}
            onDragStop={(e, d) => changePosition(width, height, d.x, d.y) }
            onResizeStop={(e, direction, ref, delta, position) => changePosition(parseInt(ref.style.width.slice(0, -2)), parseInt(ref.style.height.slice(0, -2)), position.x, position.y) }
            bounds="#drag-bounds"
            minWidth={200}
            minHeight={200}
        >
            <div className="bg-white rounded-xl w-full h-full">
                <div className="flex items-center w-full h-7 bg-neutral-300 rounded-t-xl">
                    <div className="w-7 h-7"/>
                    <p className="text-sm mx-auto">
                        {fileData.getFullName()}
                    </p>
                    <button onClick={fileClose} className="w-3 h-3 m-2 bg-red-600 rounded-full text-transparent hover:text-black/75 text-[0.65rem] p-0">
                        <AiOutlineClose className="mx-auto" />
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
