import React from 'react'

const EducationCard = ({ icon_class, year, degree, school } ) => {
  return (
    <div class="education-card">
        <div class="icon">
            <i class={icon_class}></i>
        </div>
        <div class="content">
            <span class="year">{year}</span>
            <h3>{degree}</h3>
            <p>{school}</p>
        </div>
    </div>
  )
}

export default EducationCard