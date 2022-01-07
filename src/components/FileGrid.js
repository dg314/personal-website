import React, { useState } from 'react';
import File from './File';


function FileGrid({ size, fileDataList }) {
    const numRows = Math.floor((size[1] - 56) / 96)

    const [topFile, setTopFile] = useState(null)

    const gridStyle = {
        gridTemplateRows: `repeat(${numRows}, minmax(0, 1fr))`,
    }

    return (
        <>
            <div className="grid grid-flow-col w-24" style={gridStyle}>
                {fileDataList.map(fileData => {
                    return <File key={fileData.name} fileData={fileData} size={size} topFile={topFile} setTopFile={setTopFile} />
                })}
            </div>
        </>
    );
}

export default FileGrid;
