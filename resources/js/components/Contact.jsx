import React from 'react'
import ContactForm from '@/components/Contact-form'

const Contact = ({ children }) => {
  return (
    <div className='contact-section'>
        <h2>{children}</h2>
        <ContactForm />
    </div>
  )
}

export default Contact