import React from 'react'
import ServiceCard from './Service-card'

const Services = ({ children }) => {
  return (
    <div className='services-section'>
        <h2>{children}</h2>
        <p className="section-subtitle">These are some of the services I offer. Reach out to me if I can help you with any!</p>

        <div className="services-container">
            <ServiceCard icon_class="fas fa-laptop-code" >Programming</ServiceCard>
            <ServiceCard icon_class="fas fa-globe">Web Development</ServiceCard>
            <ServiceCard icon_class="fas fa-database">Database Management</ServiceCard>
            <ServiceCard icon_class="fas fa-project-diagram">Project Development</ServiceCard>
            <ServiceCard icon_class="fas fa-code">Software Design</ServiceCard>
            <ServiceCard icon_class="fas fa-desktop">Desktop Applications</ServiceCard>
            <ServiceCard icon_class="fas fa-tools">Debugging & Optimization</ServiceCard>
        </div>
    </div>
  )
}

export default Services