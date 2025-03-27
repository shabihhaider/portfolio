import React from 'react'

const Section = ({name, children}) => {
  return (
    <section id={name}>
        {children}
    </section>
  )
}

export default Section