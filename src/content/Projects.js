import React from 'react';
import ProjectData from '../ProjectData';
import Technology from '../Technology';

function Projects() {
    const gridStyle = {
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
    }

    const avax = new Technology("Avalanche", "https://docs.avax.network/")
    const react = new Technology("React.js", "https://reactjs.org/")
    const ether = new Technology("Ethereum", "https://ethereum.org/en/developers/docs/")
    const solid = new Technology("Solidity", "https://soliditylang.org/")
    const alch = new Technology("Alchemy", "https://docs.alchemy.com/alchemy/")
    const tail = new Technology("Tailwind CSS", "https://tailwindcss.com/")
    const swift = new Technology("Swift", "https://developer.apple.com/swift/")
    const realm = new Technology("Realm", "https://realm.io/")
    const pyth = new Technology("Python", "https://www.python.org/")
    const tens = new Technology("TensorFlow", "https://www.tensorflow.org/")
    const nltk = new Technology("NLTK", "https://www.nltk.org/")
    const tweep = new Technology("Tweepy", "https://www.tweepy.org/")
    const mongo = new Technology("MongoDB", "https://www.mongodb.com/")
    const unity = new Technology("Unity", "https://unity.com/")
    const csh = new Technology("C#", "https://docs.microsoft.com/en-us/dotnet/csharp/")

    const projectDataList = [
        new ProjectData("Social\u00A0Helix", "Coming soon...", [avax, react], "Web app that allows social media users to invest in AVAX tokens of their favorite creators", null, null),
        new ProjectData("Ether\u00A0Museum", "Coming soon...", [ether, solid, alch, react, tail], "Ethereum-powered decentralized platform that allows artists to share their work with the world", null, null),
        new ProjectData("Dash", "Ongoing", [react, mongo], "Web app that provides an integrated environment for document-based knowledge work", "https://browndash.com/", "Website"),
        new ProjectData("Personal Website", "Jan 2022", [react, tail], "Responsive website that displays my portfolio in a browser with files and windows", "https://github.com/dg314/personal-website", "GitHub"),
        new ProjectData("Crypto\u00A0Price Predictor", "Dec 2021", [pyth, tens, nltk, tweep], "Deep learning model that uses sentiment analysis and price history to predict crypto prices", "https://devpost.com/software/crypto-price-predictor", "Devpost"),
        new ProjectData("Hacker\u00A0Escape", "Dec 2020", [unity, csh], "Mobile puzzle game with 50+ levels to teach kids the basics of computer science", null, null),
        new ProjectData("My\u00A0Match\u00A0Data", "Oct 2019", [swift, realm], "iOS app for recording and analyzing tennis match statistics in customizable categories", "https://github.com/dg314/my-match-data", "GitHub"),
    ]

    return (
        <>
            <div className="overflow-y-auto w-full h-full">
                <div className="grid gap-6 w-full h-min" style={gridStyle}>
                    {projectDataList.map(projectData => {
                        return (
                            <div key={projectData.name} className="mx-auto w-[200px] p-2 h-fit bg-neutral-200 rounded-lg">
                                <div className="flex items-center w-full h-fit mt-2 mb-3">
                                    <img className="ml-auto mr-3 h-5" src={projectData.getIconPath()}/>
                                    <h1 className="mr-auto text-base leading-5 text-center inline-block w-min">
                                        {projectData.name}
                                    </h1>
                                </div>
                                <p className="text-center text-xs w-full mx-auto mb-3">
                                    {projectData.description}
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-1 mb-3">
                                    {projectData.technologies.map(technology => {
                                        return (
                                            <a key={technology.name} className="inline-block bg-neutral-300 text-[0.675rem] rounded-full whitespace-nowrap p-[3px] border-[1px] border-transparent hover:border-neutral-700" href={technology.link} target="_blank">
                                                {technology.name}
                                            </a>
                                        )
                                    })}
                                </div>
                                <p className="text-center text-sm">
                                    {projectData.date}
                                    {projectData.externalLink ? <><span>{" | "}</span><a className="text-blue-900" href={projectData.externalLink} target="_blank">{projectData.externalLinkName}</a></> : null}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Projects;
