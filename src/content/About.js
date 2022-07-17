import React from 'react';

function About() {
    return (
        <>
            <div className="w-full h-full overflow-y-auto">
                <p className="text-sm text-black mb-4">
                    Hi! My name is David Grossman.
                </p>

                <p className="text-sm text-black mb-4">
                    I'm a rising junior at Brown University concentrating in <a className="text-blue-900" href="https://bulletin.brown.edu/the-college/concentrations/apmc/" target="_blank" rel="noreferrer">Applied Math-Computer Science</a> with the AI/ML pathway. I currently work as a Software Engineering Intern at a San Francisco-based startup called <a className="text-blue-900" href="https://www.kapwing.com/" target="_blank" rel="noreferrer">Kapwing</a>, where I'm developing an AI video editing toolkit (scene cut detection, content-aware video resizing, background blur, etc.) with React-Redux, Flask, Expess, MongoDB, FFmpeg, and the MediaPipe C++ API.
                </p>

                <p className="text-sm text-black mb-4">
                    As a <a className="text-blue-900" href="https://brown-deep-learning.github.io/dl-website-2022" target="_blank" rel="noreferrer">Deep Learning</a> TA and the Vice President of the <a className="text-blue-900" href="https://www.theaires.org/about" target="_blank" rel="noreferrer">AI Robotics Ethics Society</a> @ Brown, I've become passionate about both the ethical and technical aspects of artificial intelligence. This past year, I also worked under <a className="text-blue-900" href="https://en.wikipedia.org/wiki/Andries_van_Dam" target="_blank" rel="noreferrer">Professor Andy van Dam</a> to develop a MERN-stack web app for hypermedia organization (<a className="text-blue-900" href="https://cs.brown.edu/research/ptc/#/project/dash" target="_blank" rel="noreferrer">Dash project</a>).
                </p>

                <p className="text-sm text-black mb-4">
                    I primarily code in JavaScript (Node.js, React, Next.js, Express), HTML, CSS (Tailwind CSS), Python (TensorFlow, Flask, NumPy, Pandas), and Java. Additionally, I have experience in Swift (iOS development), SQL, C, C# (Unity scripting), C++, MATLAB, Go, and x86 assembly.
                </p>

                <p className="text-sm text-black mb-4">
                    I grew to love programming because of how it allows me to express my creativity to the world. If you want to learn more about the various passion projects that I've built over the years, open the Projects folder in the top left corner. My most significant project so far is a Web3 app called SocialHelix, as it led to a <a className="text-blue-900" href="https://dg314.com/whitepaper.pdf" target="_blank" rel="noreferrer">patent-pending blockchain protocol</a> for distributed order matching engines in a decentralized exchange.
                </p>

                <p className="text-sm text-black mb-4">
                    Outside of CS, my hobbies include playing online chess and composing music. I'm also a member of the <a className="text-blue-900" href="https://sites.google.com/brown.edu/brownclubtennis/roster" target="_blank" rel="noreferrer">Brown Club Tennis Team</a>.
                </p>

                <p className="text-sm text-black">
                    Thanks for checking out my website! If you want to get in touch, you can reach me at <a className="text-blue-900" href="mailto:david_grossman@brown.edu" target="_blank" rel="noreferrer">david_grossman@brown.edu</a>.
                </p>
            </div>
        </>
    );
}

export default About;
