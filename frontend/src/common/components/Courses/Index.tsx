import { Box, Typography, CardMedia } from '@mui/material'
import { CourseCardWrapper } from './style'
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const CourseCard = ({ course, list = true }: { course: ICourse; list?: boolean }) => {
  return (
    <Box
      sx={{
        minWidth: list ? '100%' : ['100%', '14.3rem'],
        maxWidth: list ? '100%' : ['100%', '14.3rem'],
      }}
    >
      <Link to={`/courses/${course?._id}`}>
        <CourseCardWrapper
          sx={{
            display: list ? { md: 'flex', xs: 'block' } : 'block',
            marginBottom: list ? '1.5rem' : '',
            flexDirection: 'row',
          }}
        >
          <CardMedia
            component={'img'}
            image={course?.img}
            sx={{
              height: '10rem',
              width: list ? { md: '16rem', xs: '100%' } : '100%',
              objectFit: 'fill',
              marginRight: list ? { md: '1rem', xs: 0 } : 0,
            }}
          />
          <Box>
            <Typography variant="h6" component={'h1'} fontWeight={'bold'}>
              {course?.title}
            </Typography>
            {list && <Typography variant="subtitle2">{course?.description}</Typography>}
            <Box display="flex" alignItems="center">
              <ReactStars
                count={5}
                size={20}
                edit={false}
                value={course?.ratings}
                color2={'#e59819'}
              />
              <Typography variant="caption" color={'GrayText'}>
                ({course?.ratings_qty})
              </Typography>
            </Box>
            <Typography variant="body1" component={'span'} fontWeight={'bold'}>
              ${course?.price}
              <Typography variant="body2" component={'span'} className="disable">
                {course?.Dprice && `$${course?.Dprice}`}
              </Typography>
            </Typography>
            <Box display={{ sm: 'flex' }}>
              {course?.highRated && (
                <Typography
                  variant="body2"
                  component={'span'}
                  className="best"
                  bgcolor={'goldenrod'}
                >
                  HighRated <AutoAwesomeIcon />
                </Typography>
              )}
              {course?.new && (
                <Typography
                  variant="body2"
                  component={'span'}
                  className="best"
                  bgcolor={'blueviolet'}
                >
                  new <AutoAwesomeIcon />
                </Typography>
              )}
            </Box>
          </Box>
        </CourseCardWrapper>
      </Link>
    </Box>
  )
}

export default CourseCard
