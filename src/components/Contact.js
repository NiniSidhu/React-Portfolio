import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return (
        <section className="container">
            <div className="about">
                <div className="pic">
                    <img className="pic" src={require(`../assets/images/whatsappdp.jpg`).default} alt="Nayandeep Sidhu" />
                </div>
                <div className="text">
                    <h2 className="mAll">Contact me</h2>
                    <div className="mAll">
                        <a href="mailto:nayandeepsidhu@gmail.com">
                            <FontAwesomeIcon icon={["fas", "envelope-square"]} size="1x" color="#607d8b" />
                        </a> <a href="mailto:nayandeepsidhu@gmail.com">nayandeepsidhu@gmail.com</a>
                    </div>
                    <div className="mAll">
                        <div>
                            <FontAwesomeIcon icon={["fas", "mobile-alt"]} size="1x" color="#607d8b" /> (905)-226-8302

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;