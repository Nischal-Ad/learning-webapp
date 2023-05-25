import React from 'react'
import SectionWrapper from '@Components/SectionWrapper'
import { Typography, Stack } from '@mui/material'
import Heading from '@Components/Heading/LandingHeading'
import { SuccessNumber } from '../styles'

const Success = () => {
  return (
    <SectionWrapper id="our success">
      <Heading
        margin={false}
        heading="Our"
        title="Success"
        desc="this is our success TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place."
      />
      <Stack
        spacing={{ xs: '5rem', lg: 0 }}
        justifyContent={{ lg: 'space-evenly' }}
        textAlign={'center'}
        direction={'row'}
        sx={{
          overflowX: 'auto',
          h5: {
            color: '#010514cc',
          },
        }}
      >
        <Typography variant="h5">
          <SuccessNumber>15K+</SuccessNumber>
          Students
        </Typography>
        <Typography variant="h5">
          <SuccessNumber>75%</SuccessNumber>
          Total Success
        </Typography>
        <Typography variant="h5">
          <SuccessNumber>35</SuccessNumber>
          Main Questions
        </Typography>
        <Typography variant="h5">
          <SuccessNumber>15</SuccessNumber>
          Years Experiences
        </Typography>
      </Stack>
    </SectionWrapper>
  )
}

export default Success
