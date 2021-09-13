import React from 'react';

function About() {
    return (
        <section className="container">
            <h2 className="title">Resume</h2>
            <div className="resumeText">Download my <a href={require(`../assets/downloads/Nayandeep-Sidhu-Resume.pdf`).default}>Resume</a></div>
            <div className="resume">
                <div className="skillColumns">
                    <h3 className="title">Front-end</h3>
                    <ul className="skillsList">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Media Queries</li>
                        <li>Responsive Design</li>
                        <li>Version Control (Git, TFS)</li>
                        <li>Testing/Debugging (Jest)</li>
                    </ul>
                </div>
                <div className="skillColumns">
                    <h3 className="title">Back-end</h3>
                    <ul className="skillsList">
                        <li>API's</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Handlebars.js</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>GraphQL</li>
                        <li>Apollo</li>
                        <li>XML</li>
                        <li>XSL</li>
                        <li>JSON</li>
                        <li>REST</li>
                    </ul>
                </div>
                <div className="skillColumns">
                    <h3 className="title">Technologies</h3>
                    <ul className="skillsList">
                        <li>Github</li>
                        <li>GitHub Pages</li>
                        <li>Heroku</li>
                        <li>Adobe Photoshop</li>
                        <li>Visual Studio Code</li>
                        <li>Insomnia</li>
                        <li>Microsoft Suite</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default About;