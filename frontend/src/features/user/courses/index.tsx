import Helmet from '@Components/Helmet'
import Section from '@Components/SectionWrapper'
import { Pagination, Stack, Typography } from '@mui/material'
import CourseCard from '@Components/Courses/Index'
import { useCourse } from './hooks/useCourse'
import { useAppSelector } from '@Store'
import Loading from '@Components/Loader'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Index = () => {
  const { ongetAllCourses } = useCourse()
  const { status, data } = useAppSelector((store) => store.course)
  const [params, setParams] = useSearchParams()

  const handelSearch = (event: React.ChangeEvent<unknown>, value: number) => {
    setParams((prev) => {
      const params = prev
      params.set('page', value.toString())

      return params
    })
  }

  const searchParams = params.toString().replace(/\+/g, ' ')

  useEffect(() => {
    ongetAllCourses(searchParams)
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
              <Stack spacing={1} direction={'column'}>
                {data?.data?.map((course, i) => {
                  if (course) {
                    return <CourseCard course={course} key={i} />
                  }
                })}
              </Stack>
              {data?.totalPages && data?.totalPages > 1 && (
                <Pagination
                  onChange={handelSearch}
                  count={data?.totalPages}
                  page={data?.page}
                  sx={{ display: 'flex', justifyContent: 'end' }}
                />
              )}
            </>
          ) : (
            <Typography variant="h2" color={'GrayText'} component={'h1'} textAlign={'center'}>
              Sorry! Course couldn't be found
            </Typography>
          )}
        </Section>
      )}
    </>
  )
}

export default Index
