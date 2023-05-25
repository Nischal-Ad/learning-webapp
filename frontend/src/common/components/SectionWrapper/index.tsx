import React, { PropsWithChildren } from 'react'
import Container from '@mui/material/Container'

interface ISection extends PropsWithChildren {
  id: string
}

const Section: React.FC<ISection> = ({ id, children }) => {
  return (
    <section id={id}>
      <Container maxWidth="xl">{children}</Container>
    </section>
  )
}

export default Section
