import React from 'react'

const SkillItem = ({ img, alt, skill }) => {
  return (
    <div className="skill-item">
      <img src={img} alt={alt} />
      <p>{skill}</p>
    </div>
  )
}

export default SkillItem