import React from 'react';

function About() {
    return (
        <>
            <div className="w-full h-full overflow-y-auto">
                <p className="text-sm text-black mb-4">
                    Hi! My name is David Grossman.
                </p>

                <p className="text-sm text-black mb-4">
                    I'm a sophomore at Brown University concentrating in <a className="text-blue-900" href="https://bulletin.brown.edu/the-college/concentrations/apmc/" target="_blank">Applied Math-Computer Science</a>.
                    My favorite areas of CS are web development and deep learning, and I've recently become interested in building decentralized applications on the Ethereum blockchain.
                </p>

                <p className="text-sm text-black mb-4">
                    As a researcher under the direction of <a className="text-blue-900" href="https://en.wikipedia.org/wiki/Andries_van_Dam" target="_blank">Professor Andy van Dam</a>, I work with the MERN stack to develop an integrated environment for document-based knowledge work (<a className="text-blue-900" href="https://cs.brown.edu/research/ptc/#/project/dash" target="_blank">Dash project</a>).
                    I also serve as the Vice President of Brown's <a className="text-blue-900" href="https://www.theaires.org/about" target="_blank">AI Robotics Ethics Society</a>, which is an organization that aims to educate future AI leaders on how to create AI ethically and responsibly.
                </p>

                <p className="text-sm text-black mb-4">
                    I primarily work in JavaScript (React.js, Node.js), HTML, CSS (Tailwind CSS), Python (TensorFlow, NumPy), and Java. Additionally, I have experience in Swift (iOS development), C, C# (Unity scripting), MATLAB, Go, and x86 assembly.
                </p>

                <p className="text-sm text-black mb-4">
                    I grew to love programming because of how it allows me to express my creativity to the world. If you want to learn more about the various passion projects that I've built over the years, open the Projects folder in the top left corner.
                </p>

                <p className="text-sm text-black mb-4">
                    Outside of CS, my hobbies include playing online chess and composing music. I'm also a member of the <a className="text-blue-900" href="https://sites.google.com/brown.edu/brownclubtennis/roster" target="_blank">Brown Club Tennis Team</a>.
                </p>

                <p className="text-sm text-black">
                    Thanks for checking out my website! If you want to get in touch, you can reach me at <a className="text-blue-900" href="mailto:david_grossman@brown.edu" target="_blank">david_grossman@brown.edu</a>.
                </p>
            </div>
        </>
    );
}

export default About;
