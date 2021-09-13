import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, fas, faMobileAlt, faEnvelope, faTree } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
library.add(fas);

library.add(fas, faEnvelopeSquare, faMobileAlt);

function Footer() {
    return (

        <footer id="contact">
            <div>
                <a href="mailto:nayandeepsidhu@gmail.com"><FontAwesomeIcon className="m-2" icon={faEnvelope} size = '2x'/>
                </a>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nayan-sidhu-88b011b6/"><FontAwesomeIcon className="m-2" icon={faLinkedinIn} size = '2x'/>
                </a>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://github.com/NiniSidhu"><FontAwesomeIcon className="m-2" icon={faGithub} size = '2x'/>
                </a>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://linktr.ee/TheSidhuEstates"><FontAwesomeIcon className="m-2" icon={faTree} size = '2x'/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;