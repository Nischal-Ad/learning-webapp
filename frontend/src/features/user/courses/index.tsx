import Helmet from '@Components/Helmet'
import Section from '@Components/SectionWrapper'
import { Pagination, Stack, Typography, MenuItem } from '@mui/material'
import CourseCard from '@Components/Courses/Index'
import { useCourse } from './hooks/useCourse'
import { useAppSelector } from '@Store'
import Loading from '@Components/Loader'
import { useEffect } from 'react'
import { Category as AppCategory } from '@Components/Filter'
import { Category } from '@Data/UserHome'
import { useSearchParams } from 'react-router-dom'
import { PriceRange, Sort } from '@Components/Filter'

const Index = () => {
  const { ongetAllCourses } = useCourse()
  const { status, data } = useAppSelector((store) => store.course)
  const [params, setParams] = useSearchParams()

  const handelPage = (event: React.ChangeEvent<unknown>, value: number) => {
    setParams((prev) => {
      const params = prev
      params.set('page', value.toString())

      return params
    })
  }

  const searchParams = params.toString().replace(/\+/g, ' ')

  useEffect(() => {
    if (params.has('sort')) {
      ongetAllCourses(searchParams)
    } else ongetAllCourses(`${searchParams}&sort=-ratings,-ratings_qty`)
  }, [searchParams])
  return (
    <>
      <Helmet
        title="Courses"
        content="choose your favourate course and start building your carrier"
      />
      {status === 'loading' ? (
        <Loading />
      ) : (
        <Section id="courses">
          {data && Array.isArray(data?.data) && data.data.length !== 0 ? (
            <>
              <Stack justifyContent={'space-between'} direction={'row'} pb={1.5}>
                <PriceRange />
                <Sort>
                  <MenuItem value={'-ratings,-ratings_qty'}>Best Match</MenuItem>
                  <MenuItem value={'-createdAt'}>Latest</MenuItem>
                  <MenuItem value={'price'}>Price low to high</MenuItem>
                  <MenuItem value={'-price'}>Price high to low</MenuItem>
                </Sort>
              </Stack>
              <AppCategory category={Category} />
              <Stack spacing={1} direction={'column'}>
                {data?.data?.map((course, i) => {
                  if (course) {
                    return <CourseCard course={course} key={i} />
                  }
                })}
              </Stack>
              {data?.totalPages && data?.totalPages > 1 && (
                <Pagination
                  onChange={handelPage}
                  count={data?.totalPages}
                  page={data?.page}
                  sx={{ display: 'flex', justifyContent: 'end' }}
                />
              )}
            </>
          ) : (
            <Typography variant="h5" color={'GrayText'} component={'h1'} textAlign={'center'}>
              Sorry! Course couldn't be found
            </Typography>
          )}
        </Section>
      )}
    </>
  )
}

export default Index
