import SectionWrapper from '@Components/SectionWrapper'
import Heading from '@Components/Heading/LandingHeading'
import { Box, CardMedia } from '@mui/material'
import Test from '@Img/test.jpg'
import { AboutImageWrapper } from '../styles'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'

const AboutUs = () => {
  return (
    <SectionWrapper id="about us">
      <Heading
        heading="What Is"
        title="E-Learning"
        desc="TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place."
      />
      <Stack
        spacing={{ lg: 0, xs: 4 }}
        justifyContent={{ lg: 'space-around' }}
        direction={{ lg: 'row', xs: 'column' }}
      >
        <AboutImageWrapper>
          <CardMedia component="img" image={Test} />
          <Box>
            <Typography paragraph color="#fff" fontWeight={500}>
              hey it me
            </Typography>
            <Button variant="contained">Error</Button>
          </Box>
        </AboutImageWrapper>

        <AboutImageWrapper>
          <CardMedia component="img" image={Test} />
          <Box>
            <Typography paragraph color="#fff" fontWeight={500}>
              hey it me
            </Typography>
            <Button variant="contained">Error</Button>
          </Box>
        </AboutImageWrapper>
      </Stack>
    </SectionWrapper>
  )
}

export default AboutUs
