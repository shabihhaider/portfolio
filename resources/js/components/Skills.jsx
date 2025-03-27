import React from 'react'
import SkillItem from './Skill-item'

const Skills = ({ children }) => {
  return (
    <div className='skills-section'>
        <h2>{children}</h2>

        <div class="skills-container">
            <div class="skills-slider">
                {/* Programming Languages */}
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C" skill="C" />
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C++" skill="C++" />
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" skill="Python" />
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" skill="PHP" />
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Laravel" skill="Laravel" />
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" alt=".NET" skill=".NET" />
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="C#" skill="C#" />
                
                {/* Web Development */}
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" skill="HTML" />
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" skill="CSS" />
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" skill="JavaScript" />
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg" alt="jQuery" skill="jQuery" />
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" skill="Tailwind" />
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" skill="Bootstrap" />
            
                {/* Database */}
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" alt="MySQL" skill="MySQL" />
            
                {/* Repeat Items for Infinite Loop */}
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C" skill="C" />
                <SkillItem img="https://upload.wikimedia.org/wikipedia/commons/6/6a/Python-logo-notext.svg" alt="Python" skill="Python" />
                
                
            </div>
        </div>
    </div>
  )
}

export default Skills