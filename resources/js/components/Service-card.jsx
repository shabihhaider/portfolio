import React from 'react'

const ServiceCard = ({ icon_class, children } ) => {
  return (
    <div className="service-card">
        <div className="icon"><i className={icon_class}></i></div>
        <h3>{children}</h3>
    </div>
  )
}

export default ServiceCard