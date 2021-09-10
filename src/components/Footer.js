import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (

        <footer id="contact">
            <div>
                <a href="mailto:nayandeepsidhu@gmail.com">
                    <FontAwesomeIcon icon={["fas", "envelope-square"]} size="3x" color="#607d8b" />
                </a>
            </div>
            <div>
                <a href="https://github.com/NiniSidhu" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "git-square"]} size="3x" color="#607d8b" />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/nayan-sidhu-88b011b6/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" color="#607d8b" />
                </a>
            </div>
            <div>
                <a href="https://linktr.ee/TheSidhuEstates" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "address-card"]} size="3x" color="#607d8b" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;