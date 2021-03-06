import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSafari } from '@fortawesome/free-brands-svg-icons'



function Portfolio() {

    const [projects] = useState([
        {
             image: 'horiseon.PNG',
            alt: 'Horiseon',
            title: 'Horiseon',
            description: 'Web application for a startup company.',
            code: 'HTML, Advanced CSS',
            url: 'https://ninisidhu.github.io/Horiseon-Code-Refractor/',
            git: 'https://github.com/NiniSidhu/Horiseon-Code-Refractor'
        },
        {
            image: 'runbuddy.PNG',
           alt: 'Run Buddy',
           title: 'Run Buddy',
           description: 'Web application for signing up for a Run Buddy.',
           code: 'HTML, Advanced CSS',
           url: 'https://ninisidhu.github.io/Run-Buddy-V2/',
           git: 'https://github.com/NiniSidhu/Run-Buddy-V2'
       },
       {
             image: 'portfolio.PNG',
            alt: 'Professional Portfolio 1',
            title: 'Pro. Portfolio',
            description: 'Web application for first professional portfolio.',
            code: 'HTML, Advanced CSS',
            url: 'https://ninisidhu.github.io/Professional-Portfolio/#About-Me',
            git: 'https://github.com/NiniSidhu/Professional-Portfolio'
        },
        {
            image: 'password.PNG',
           alt: 'Password Generator',
           title: 'Password Gen',
           description: 'Web application for a random Password Generator.',
           code: 'HTML, CSS, JS',
           url: 'https://ninisidhu.github.io/Password-Generator/',
           git: 'https://github.com/NiniSidhu/Password-Generator'
       },
       {
             image: 'quiz.PNG',
            alt: 'Quiz-nos',
            title: 'Quiz-nos',
            description: 'Web application for a coding quiz.',
            code: 'HTML, Advanced CSS, JS',
            url: 'https://ninisidhu.github.io/Coding-Quiz/',
            git: 'https://github.com/NiniSidhu/Coding-Quiz'
        },
        {
            image: 'scheduler.PNG',
           alt: 'Workday Scheduler',
           title: 'Workday Scheduler',
           description: 'Web application for a Workday Scheduler.',
           code: 'HTML, Advanced CSS',
           url: 'https://ninisidhu.github.io/Workday-Scheduler/',
           git: 'https://github.com/NiniSidhu/Workday-Scheduler'
       },
       {
             image: 'taskmaster.PNG',
            alt: 'Task Master',
            title: 'Task Master',
            description: 'Web application for a Task tracker.',
            code: 'HTML, Advanced CSS, JS',
            url: 'https://ninisidhu.github.io/Taskmaster/',
            git: 'https://github.com/NiniSidhu/Taskmaster'
        },
        {
            image: 'weather.png',
           alt: 'Weather Dashboard',
           title: 'Weather Dashboard',
           description: 'Web application for a Weather application.',
           code: 'HTML, CSS, API, JS,',
           url: 'https://ninisidhu.github.io/Weather-Dashboard/',
           git: 'https://github.com/NiniSidhu/Weather-Dashboard'
       },
       {
        image: 'shahrukh.PNG',
        alt: 'Client Portfolio',
        title: 'Client Portfolio',
        description: 'Web application for a client portfolio.',
        code: 'HTML, CSS',
        url: 'https://ninisidhu.github.io/Shahrukh/',
        git: 'https://github.com/NiniSidhu/Shahrukh'
        },
        {
            image: 'personal.PNG',
            alt: 'Personal Portfolio',
            title: 'Personal Portfolio',
            description: 'Web application for a personal portfolio.',
            code: 'HTML, CSS, JS',
            url: 'https://ninisidhu.github.io/Nayandeep-Sidhu/#about',
            git: 'https://github.com/NiniSidhu/Nayandeep-Sidhu'
        },
        {
            image: 'windowshopper.png',
            alt: 'Window Shopper',
            title: 'Window Shopper',
            description: 'Full Stack e-commerce web application',
            code: 'HTML, CSS, JS, API, NPM, Express',
            url: 'https://github.com/Gr0upFour/projectTwo',
            git: 'https://github.com/Gr0upFour/projectTwo'
        },
        {
            image: 'crunchtime.png',
            alt: 'Crunch Time',
            title: 'Crunch Time',
            description: 'Front-end web application for fitness freaks!',
            code: 'HTML, CSS, JS',
            url: 'https://crunchteam04.github.io/Crunch-Time/',
            git: 'https://github.com/crunchteam04/Crunch-Time'
        }







    ])

    return (

        <div className="container">
            <h2 className="title center">Portfolio</h2>
            <div className="main">
               
                    {projects.map((project, i) =>
                        <div className="portfolio" key={i}>
                            <img className="photo" src={require(`../assets/images/${project.image}`).default} alt={project.alt} />
                            <div className="content">
                                <p className="title">{project.title}</p>
                                <br />
                                <p>{project.description}<br /><span>{project.code}</span></p>
                                <br />
                                <a className="projectIcon" href={project.url} target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" icon={faSafari} size = '2x'/></a>
                                <a className="projectIcon" href={project.git} target="_blank" rel="noreferrer"><FontAwesomeIcon className="m-2" icon={faGithub} size = '2x'/></a>
                            </div>
                        </div>
                    )}
                
            </div>
        </div>
    )
}

export default Portfolio;