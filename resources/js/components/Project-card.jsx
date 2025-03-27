import React from 'react'

const ProjectCard = ({ img, title, details, githubLink = '#', tags = 'Tag' }) => {
  return (
    <div className="project-card">
        <div className="card-content">
            <div className="image-container">
                <img src={img} alt="project_image" className="project-image" />
                <div className="image-overlay">
                    <div className="github-icon">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <img src={'/images/github-logo-1.png'} alt="source code" className="github-img" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{details}</p>
            </div>
            <div className="tags">
                {tags.split(',').map((tag, index) => (
                    <p className="tag" key={index}>{`#${tag.trim()}`}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard   