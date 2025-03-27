import React from 'react'

const ServiceCard = ({ icon_class, children } ) => {
  return (
    <div class="service-card">
        <div class="icon"><i class={icon_class}></i></div>
        <h3>{children}</h3>
    </div>
  )
}

export default ServiceCard