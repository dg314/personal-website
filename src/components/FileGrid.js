import React from 'react';
import File from './File';


function FileGrid({ size, files }) {
    const numRows = Math.floor((size[1] - 56) / 96)

    const gridStyle = {
        gridTemplateRows: `repeat(${numRows}, minmax(0, 1fr))`,
    }

    return (
        <>
            <div class="grid grid-flow-col w-24 m-2" style={gridStyle}>
                {files.map(file => {
                    return <File file={file} />
                })}
            </div>
        </>
    );
}

export default FileGrid;
