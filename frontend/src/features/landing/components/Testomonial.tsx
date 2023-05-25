import SectionWrapper from '@Components/SectionWrapper'
import Heading from '@Components/Heading/LandingHeading'
import ReactStars from 'react-stars'
import {
  Box,
  Button,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Divider from '@mui/material/Divider'
import { TestomonialComment } from '../styles'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'

const Testomonial = () => {
  return (
    <SectionWrapper id="testimonial">
      <Heading
        heading="What they"
        title="say?"
        desc="Lets take a dive about what others says about us"
      />
      <Stack
        spacing={4}
        color={'#696984'}
        direction={{ lg: 'row', xs: 'column' }}
        alignItems={'center'}
        mb={12}
      >
        <Stack spacing={5} direction={'column'} width="100%">
          <Typography paragraph>
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </Typography>
          <Typography paragraph>
            Some of the students and teachers were greatly helped by the
            Skilline.
          </Typography>
          <Typography paragraph>
            Are you too? Please give your assessment
          </Typography>
          <Button
            size="large"
            variant="outlined"
            sx={{
              color: '#49BBBD',
              borderRadius: '9999px',
              display: 'gird',
              placeContent: 'center',
              width: '20rem',
              position: 'relative',
            }}
            endIcon={
              <ArrowForwardIcon
                sx={{
                  border: '1px solid #49BBBD',
                  borderRadius: '50%',
                  position: 'absolute',
                  right: -5,
                  top: 0,
                  height: 38,
                  width: 38,
                  bgcolor: 'white',
                }}
              />
            }
          >
            Write your assessment
          </Button>
        </Stack>
        <Box width="100%">
          <Box
            sx={{
              position: 'relative',
              overflow: 'visible',
            }}
          >
            <CardMedia
              component={'img'}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsanFcJm3Hy0YVEs5gDFks4RM2vdcPanMIBBZv2jhGVOYT30BT7Eqb6BsKhRRXRTqbPUU&usqp=CAU"
              sx={{
                height: '36rem',
                borderRadius: 2,
                objectFit: 'fill',
                marginRight: { lg: '2rem', xs: 0 },
                width: { lg: '30rem', xs: '100%' },
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                display: 'flex',
                width: { lg: '30rem', xs: '100%' },
                top: '35%',
                justifyContent: 'space-between',

                button: {
                  padding: 0,
                  margin: 0,
                },

                svg: {
                  color: '#ffffff',
                  fontSize: '3rem',
                  boxhadow: '2px 4px 60px rgba(41, 44, 124, 0.1)',
                },
              }}
            >
              <IconButton aria-label="arrow back">
                <ArrowCircleLeftIcon />
              </IconButton>
              <IconButton aria-label="arrow forward">
                <ArrowCircleRightIcon />
              </IconButton>
            </Box>
            <TestomonialComment
              sx={{
                marginLeft: { lg: 8, xs: 0 },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <Divider
                  orientation="vertical"
                  sx={{
                    color: '#49BBBD',
                    display: { xs: 'none', lg: 'block' },
                    height: '6rem',
                    marginRight: 3,
                  }}
                />
                <Typography paragraph fontSize={{ lg: 16, xs: 14 }}>
                  Thank you so much for your help. It's exactly what I've been
                  looking for. You won't regret it. It really saves me time and
                  effort. TOTC is exactly what our business has been lacking.
                </Typography>
              </Box>
              <Box
                color={'#5f5f7e'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Typography
                  component="h6"
                  fontWeight={600}
                  fontSize={{ lg: 16, xs: 14 }}
                >
                  Gloria Rose
                </Typography>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <ReactStars
                    count={5}
                    size={20}
                    edit={false}
                    value={5}
                    color2={'#ffd700'}
                  />
                  <Typography paragraph fontSize={{ lg: 16, xs: 14 }}>
                    12 reviews at Yelp
                  </Typography>
                </Box>
              </Box>
            </TestomonialComment>
          </Box>
        </Box>
      </Stack>
    </SectionWrapper>
  )
}

export default Testomonial
