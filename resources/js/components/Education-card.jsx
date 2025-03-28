import React from 'react'

const EducationCard = ({ icon_class, year, degree, school } ) => {
  return (
    <div className="education-card">
        <div className="icon">
            <i className={icon_class}></i>
        </div>
        <div className="content">
            <span className="year">{year}</span>
            <h3>{degree}</h3>
            <p>{school}</p>
        </div>
    </div>
  )
}

export default EducationCard