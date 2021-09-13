import React from 'react';

function About() {
    return (
        <section className="container">
            <div className="about">
                <div className="pic">
                    <img className="pic" src={require(`../assets/images/whatsappdp.jpg`).default} alt="Nayandeep Sidhu" />
                </div>
                <div className="text">
                    <h2 className="title">Electrical Engineer </h2> 
                    <h2 className="title">&</h2>
                    <h2 className="title">Full Stack Web Developer</h2>
                    <p className="aboutText">
                        Electrical Engineer from the University of Ottawa and Web Developer student in Full Stack Web Development from the University of Toronto. I am currently working as a Realtor in the Greater Toronto Area and am actively seeking oppertunities in Engineering and Web Development sector. 
                    </p>
                    <p className="aboutText">
                        Possess skills relevant to Web Development including strong knowledge of HTML, CSS, JS along with skills relevant to Electrical Engineering including State Transfer systems, robotics to name a few.
                    </p>
                    <p className="aboutText">
                        I am self-motivated and can work alone to meet deadlines or with a team of developers. I have
                        consistently demonstrated teamwork, problem-solving and interpersonal abilities in every aspect
                        of my previous job experiences.</p>
                    <p className="aboutText">
                        I enjoy learning new technologies and am looking for an environment that will allow me to reach my
                        full potential.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default About;