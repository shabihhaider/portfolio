import React from 'react'

const about = ({about}) => {
  return (
    <div className='portfolio-section'>
        <div className="content">
            <h1>Hi, I'm 
                <span className="name">Muhammad Shabih Haider</span>
            </h1>                
            <p>{about}</p>
            <a href="/storage/resume/Updated.pdf" target="_blank">
                <button>Download CV</button>
            </a>
        </div>

        <div className="image"> 
            <img src="/images/profile-picture.png" alt="profile picture" />
        </div>
    </div>
  )
}
export default about