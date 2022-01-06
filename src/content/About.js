import React from 'react';

function About() {
    return (
        <>
            <div className="w-full h-full overflow-y-auto">
                <p className="text-sm text-black mb-4">
                    Hi everyone! My name is David Grossman.
                </p>

                <p className="text-sm text-black mb-4">
                    I'm a sophomore at Brown University concentrating in <a className="text-blue-900" href="https://bulletin.brown.edu/the-college/concentrations/apmc/" target="_blank">Applied Math-Computer Science</a>.
                    My favorite areas of CS are web development and deep learning, and I've recently become interested in building decentralized applications on the Ethereum blockchain.
                </p>

                <p className="text-sm text-black mb-4">
                    As a researcher under the direction of <a className="text-blue-900" href="https://en.wikipedia.org/wiki/Andries_van_Dam" target="_blank">Professor Andy van Dam</a>, I develop an integrated environment for document-based knowledge work using the MERN stack (<a className="text-blue-900" href="https://cs.brown.edu/research/ptc/#/project/dash" target="_blank">Dash project</a>).
                    I also serve as the Vice President of Brown's <a className="text-blue-900" href="https://www.theaires.org/about" target="_blank">AI Robotics Ethics Society</a>, which is an organization that aims to educate future AI leaders on how to create AI ethically and responsibly.
                </p>

                <p className="text-sm text-black mb-4">
                    I primarily work in JavaScript (React.js, Node.js), HTML, CSS (Tailwind CSS), Python (TensorFlow, NumPy), and Java. I also have experience in Swift, C, C#, MATLAB, Go, and x86 assembly.
                </p>

                <p className="text-sm text-black">
                    Outside of CS, my hobbies include playing online chess and composing music. I'm also a mamber of the <a className="text-blue-900" href="https://sites.google.com/brown.edu/brownclubtennis/roster" target="_blank">Brown Club Tennis Team</a>.
                </p>
            </div>
        </>
    );
}

export default About;
