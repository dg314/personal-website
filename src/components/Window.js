import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Rnd } from 'react-rnd';

function Window({ fileData, fileClose, size }) {
    const [width, setWidth] = useState(Math.max(size[0] * 0.4, 100));
    const [height, setHeight] = useState(Math.max(size[1] * 0.4, 100));
    const [x, setX] = useState(size[0] * 0.3);
    const [y, setY] = useState(size[1] * 0.3);

    const changePosition = (newWidth, newHeight, newX, newY) => {
        console.log("HELLO!")
        if (newWidth < 100 || newHeight < 100) {
            return
        }

        if (size[0] > 0 && size[1] > 0) {
            newX = Math.max(Math.min(size[0] - 8 - newWidth, newX), -8)
            newY = Math.max(Math.min(size[1] - 40 - newHeight, newY), -8)
            newWidth = Math.min(newWidth, size[0])
            newHeight = Math.min(newHeight, size[1] - 32)
        }

        //setX(newX)
        //setY(newY)
        //setWidth(newWidth)
        //setHeight(newHeight)
    }

    useEffect(() => {
        changePosition(width, height, x, y)
    }, [size])

    return (
        <Rnd size={{ width: width, height: height }} position={{ x: x, y: y }} onDragStop={(e, d) => changePosition(width, height, d.x - 16, d.y - 16) } onResizeStop={(e, direction, ref, delta, position) => changePosition(ref.style.width, ref.style.height, position.x, position.y) }
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
                <div className="w-full h-[calc(100%-1.75rem)]">
                    {fileData.windowContent}
                </div>
            </div>
        </Rnd>
    )
}

export default Window;
