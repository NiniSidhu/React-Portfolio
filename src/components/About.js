import React from 'react';

function About() {
    return (
        <section className="container">
            <div className="about">
                <div className="pic">
                    <img className="pic" src={require(`../assets/images/whatsappdp.jpg`).default} alt="Nayandeep Sidhu" />
                </div>
                <div className="text">
                    <h2>Electrical Engineer and Full Stack Web Developer</h2>
                    <p className="mTopBottom">
                        Electrical Engineer from University of Ottawa and Web Developer student in Full Stack Web Development from the University of Toronto. I am currently working as a Realtor in the Greater Toronto Area and am actively seeking oppertunities in Engineering and Web Development sector. 
                    </p>
                    <p className="mTopBottom">
                        Developed skill set directly relevant to web development, including strong knowledge of HTML, CSS,
                        and scripting languages; experience working with developers remotely to accomplish desired results.
                    </p>
                    <p className="mTopBottom">
                        I am self-motivated and can work alone to meet deadlines or with a team of developers. I have
                        consistently demonstrated teamwork, problem-solving and interpersonal abilities in every aspect
                        of my previous job experiences.</p>
                    <p className="mTopBottom">
                        I enjoy learning new technologies and am looking for an environment that will allow me to reach my
                        full potential.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default About;