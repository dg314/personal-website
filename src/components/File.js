import React, { useState, useEffect } from 'react';

function File({ file }) {
    const onFileClick = () => {
        file.open = true

        if (file.externalLink) {
            window.open(file.externalLink, "_blank")
        }
    }

    return (
        <>
            <button onClick={onFileClick} className="w-20 h-20 m-2 border-2 border-transparent hover:bg-white/5 hover:border-white/20">
                <img className="w-12 h-12 mb-1 block mx-auto" src={`icons/${file.name}.svg`}/>
                <p className="text-white text-xs text-center select-none">
                    {`${file.name}${file.extension}`}
                </p>
            </button>
        </>
    );
}

export default File;
