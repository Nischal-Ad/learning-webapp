import {
  CardMedia,
  Typography,
  Box,
  Divider,
  Stack,
  CardActions,
  MenuItem,
  SelectChangeEvent,
  Button,
  Select,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import { CourseDetailsBoxWrapper, CourseDetailsOverViewWrapper } from '../style'
import facebook from '@Svg/facebook.svg'
import twitter from '@Svg/twitter.svg'
import instagram from '@Svg/instagram.svg'
import telegram from '@Svg/telegram.svg'
import whatapps from '@Svg/whatsapp.svg'
import youtube from '@Svg/youtube.svg'
import ReactStars from 'react-stars'
import ContentWrapper from './ContentWrapper'
import TestomonialCard from '@Features/user/testomonial'
import CourseRequirement from './CourseDataList'
import CourseContent from './CourseDataList'
import { memo, useEffect, useState } from 'react'
import { useCourse } from '../hooks/useCourse'
import { useAppSelector } from '@Store'
import Loading from '@Components/Loader'

const CourseDetailsCard = ({ details }: { details: ICourse }) => {
  const { status, data } = useAppSelector((store) => store.comment)
  const [filter, setFilter] = useState(0)
  const [page, setPage] = useState(data?.page || 1)
  const { ongetAllComments } = useCourse()

  const handelFilter = (e: SelectChangeEvent<string>) => {
    setFilter(+e.target.value)
  }

  const handelPage = (type?: string) => {
    if (type === 'next') {
      setPage((p) => p + 1)
    } else {
      setPage((p) => p - 1)
    }
  }

  useEffect(() => {
    if (details._id)
      ongetAllComments(
        `course[eq]=${details?._id}&limit=5&rating[gte]=${filter}&sort=rating&page=${page}`
      )
  }, [filter, page])

  return (
    <>
      <CardMedia
        component={'img'}
        alt=""
        image={details.img}
        sx={{
          height: '18rem',
          margin: '1rem 0',
          borderRadius: '5px',
          objectFit: 'fill',
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CourseDetailsBoxWrapper>
            <CardMedia component={'img'} alt="" image={details.img} />
            <Box className="data">
              <Typography variant="h4" component={'h1'}>
                {details.title}
              </Typography>
              <Typography variant="body1" component={'h2'} my={1} color={'var(--primary)'}>
                Created by: {details.author?.name}
              </Typography>
              <Typography variant="h5" component={'span'} fontWeight={'bold'}>
                ${details.price}
                <Typography variant="h6" component={'span'} className="disable">
                  {details.Dprice && `$${details.Dprice}`}
                </Typography>
              </Typography>
              <Button variant="contained" color="secondary">
                Add to Cart
              </Button>
              <Button variant="contained" className="buy" disableElevation>
                Buy Now
              </Button>
              <Divider
                sx={{
                  marginY: '1rem',
                }}
              />
              <Typography variant="h5" component={'span'} fontWeight={'bold'}>
                Share this course
              </Typography>
              <Stack
                component={'span'}
                direction={'row'}
                spacing={2}
                mt={2}
                sx={{
                  img: {
                    cursor: 'pointer',
                  },
                }}
              >
                <CardMedia component={'img'} alt="" image={facebook} height={30} />
                <CardMedia component={'img'} alt="" image={twitter} height={30} />
                <CardMedia component={'img'} alt="" image={whatapps} height={30} />
                <CardMedia component={'img'} alt="" image={telegram} height={30} />
                <CardMedia component={'img'} alt="" image={instagram} height={30} />
                <CardMedia component={'img'} alt="" image={youtube} height={30} />
              </Stack>
            </Box>
          </CourseDetailsBoxWrapper>
        </Grid>
        <Grid item xs={12} md={8}>
          <CourseDetailsOverViewWrapper>
            <ContentWrapper title="Overview">
              <Typography variant="subtitle1" component={'pre'}>
                {details.description}
              </Typography>
            </ContentWrapper>
            <ContentWrapper title="Course Content">
              <Typography variant="h5" component={'span'} fontWeight={'bold'}>
                This Course Contains:
              </Typography>
              {details.contents?.map((data, i) => {
                return <CourseContent key={i} sn={i + 1} data={data} />
              })}
            </ContentWrapper>
            <ContentWrapper title="Requirements">
              <Typography variant="h5" component={'span'} fontWeight={'bold'}>
                This Course Requirements:
              </Typography>
              {details.requirements?.map((data, i) => {
                return <CourseRequirement key={i} data={data} />
              })}
            </ContentWrapper>
            <ContentWrapper title="Rating">
              {details?.comments?.length > 0 ? (
                <>
                  <Stack
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    direction={{ sm: 'row', xs: 'column' }}
                  >
                    <Box>
                      <Typography variant="h5" component={'span'} fontWeight={'bold'}>
                        Our Ratings
                      </Typography>
                      <Stack spacing={1} direction={'row'} my={1} alignItems={'center'}>
                        <ReactStars
                          count={5}
                          size={20}
                          edit={false}
                          value={details.ratings}
                          color2={'#e59819'}
                        />
                        <Typography variant="subtitle2" component={'span'} fontWeight={'bold'}>
                          ({details?.ratings_qty})
                        </Typography>
                      </Stack>
                    </Box>
                    <Stack
                      direction={{ sm: 'row', xs: 'column' }}
                      spacing={1}
                      alignItems={{ sm: 'center' }}
                    >
                      <Typography variant="body2">Filter By:</Typography>
                      <Select
                        id="filter"
                        value={filter.toString()}
                        onChange={handelFilter}
                        size="small"
                      >
                        <MenuItem value={0}>All</MenuItem>
                        <MenuItem value={1}>1 Star</MenuItem>
                        <MenuItem value={2}>2 Star</MenuItem>
                        <MenuItem value={3}>3 Star</MenuItem>
                        <MenuItem value={4}>4 Star</MenuItem>
                        <MenuItem value={5}>5 Star</MenuItem>
                      </Select>
                    </Stack>
                  </Stack>

                  {status === 'loading' ? (
                    <Loading />
                  ) : (
                    <>
                      {data?.data &&
                        data?.data.map((data, i) => {
                          return <TestomonialCard key={i} testomonial={data} />
                        })}
                    </>
                  )}
                  <CardActions
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Button
                      size="medium"
                      color="success"
                      onClick={() => handelPage()}
                      disabled={status === 'loading' || data?.totalPages === Number(page)}
                    >
                      ← Previous
                    </Button>
                    <Button
                      size="medium"
                      color="success"
                      onClick={() => handelPage('next')}
                      disabled={status === 'loading' || data?.totalPages === Number(page)}
                    >
                      Next →
                    </Button>
                  </CardActions>
                </>
              ) : (
                <Typography variant="h5" component={'span'} fontWeight={'bold'}>
                  No any comments yet!
                </Typography>
              )}
            </ContentWrapper>
          </CourseDetailsOverViewWrapper>
        </Grid>
      </Grid>
    </>
  )
}

export default memo(CourseDetailsCard)
