import React, { useEffect, useState } from 'react';
import File from './File';


function FileGrid({ size, fileDataList }) {
    const numRows = Math.floor((size[1] - 56) / 96)

    const gridStyle = {
        gridTemplateRows: `repeat(${numRows}, minmax(0, 1fr))`,
    }

    return (
        <>
            <div className="grid grid-flow-col w-24 m-2" style={gridStyle}>
                {fileDataList.map(fileData => {
                    return <File key={fileData.name} fileData={fileData} size={size} />
                })}
            </div>
        </>
    );
}

export default FileGrid;
