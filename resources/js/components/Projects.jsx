import React from 'react'
import ProjectCard from './Project-card'

const Projects = ({ children }) => {
  return (
    <div className="projects-section">
        <div>
            <h2>{children}</h2>
        </div>

        <div className="projects-container">
            <ProjectCard img="/images/Project_1.PNG" githubLink="https://github.com/shabihhaider/Gender-Prognosis-Guess-the-Gender-of-a-person-" title="Gender Prognosis" details="Aims to develop a predictive model that estimates the gender of a person based on specific input data." tags="html,css,jQuery,bootstrap"/>
            <ProjectCard img="https://media.designrush.com/articles/256011/conversions/Colorful-Web-design_-Two-Films-details.jpg" title="Project 2" details="sdnfuidsafsdbufibsdaf sdhfibadsfbds" tags="html,css,jQuery,bootstrap"/>
            <ProjectCard img="https://media.designrush.com/articles/256011/conversions/Colorful-Web-design_-Two-Films-details.jpg" title="Project 3" details="the dnfuidsa dnfuidsa asndjasd sakjdhbas kdsa dja" tags="html,css,jQuery,bootstrap"/>
        </div>

        <div className="view-all-container">
            <a href="/project" target="_blank">
                <button className="view-all-btn">View All</button>
            </a>
        </div>
    </div>
  )
}

export default Projects