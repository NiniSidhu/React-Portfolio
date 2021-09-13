import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, fas, faMobileAlt  } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas);


library.add(fas, faEnvelopeSquare, faMobileAlt);

function About() {
    return (
        <section className="container">
            <div className="about">
                <div className="pic">
                    <img className="pic" src={require(`../assets/images/whatsappdp.jpg`).default} alt="Nayandeep Sidhu" />
                </div>
                <div className="text">
                    <h2 className="title">Get in touch with me</h2>
                    <div className="mAll">
                        <a href="mailto:nayandeepsidhu@gmail.com">
                            <FontAwesomeIcon icon= "envelope-square" size="2x" color="#58564a" />
                        </a> <a href="mailto:nayandeepsidhu@gmail.com">nayandeepsidhu@gmail.com</a>
                    </div>
                    <div className="mAll">
                        <div>
                            <FontAwesomeIcon icon="mobile-alt" size="2x" color="#58564a" /> (905)-226-8302

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;