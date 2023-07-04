import Helmet from '@Components/Helmet'
import Section from '@Components/SectionWrapper'
import {
  Pagination,
  Stack,
  Typography,
  Select,
  MenuItem,
  TextField,
  IconButton,
} from '@mui/material'
import CourseCard from '@Components/Courses/Index'
import { useCourse } from './hooks/useCourse'
import { useAppSelector } from '@Store'
import Loading from '@Components/Loader'
import { useEffect, useState } from 'react'
import { SelectChangeEvent } from '@mui/material'
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded'
import { useSearchParams } from 'react-router-dom'

const Index = () => {
  const { ongetAllCourses } = useCourse()
  const [sort, setSort] = useState('-ratings')
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const { status, data } = useAppSelector((store) => store.course)
  const [params, setParams] = useSearchParams()

  const handelSearch = (event: React.ChangeEvent<unknown>, value: number) => {
    setParams((prev) => {
      const params = prev
      params.set('page', value.toString())

      return params
    })
  }

  const handelSort = (e: SelectChangeEvent<string>) => {
    setSort(e.target.value as string)
    setParams((prev) => {
      const params = prev
      params.set('sort', e.target.value)

      return params
    })
  }

  const handelPrice = () => {
    if (max && min) {
      setParams((prev) => {
        const params = prev
        params.set('price[gte]', min.toString())
        params.set('price[lte]', max.toString())

        return params
      })
    } else if (max) {
      setParams((prev) => {
        const params = prev
        params.set('price[lte]', max.toString())

        return params
      })
    } else if (min) {
      setParams((prev) => {
        const params = prev
        params.set('price[gte]', min.toString())

        return params
      })
    } else {
      setParams((prev) => {
        const params = prev
        params.delete('price[gte]')
        params.delete('price[lte]')

        return params
      })
    }
  }

  const searchParams = params.toString().replace(/\+/g, ' ')

  useEffect(() => {
    if (!params.has('sort')) {
      ongetAllCourses(`${searchParams}&sort=-ratings`)
    }
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
              <Stack justifyContent={'space-between'} direction={'row'} pb={1.5}>
                <Stack
                  direction={{ sm: 'row', xs: 'column' }}
                  spacing={{ sm: 1 }}
                  alignItems={'center'}
                  sx={{ input: { padding: 1, width: '2.5rem' } }}
                >
                  <Typography variant="body2">Price:</Typography>
                  <Stack alignItems={'center'} direction={'row'} spacing={1}>
                    <TextField
                      id="min"
                      type="number"
                      size="small"
                      placeholder="min"
                      value={min}
                      onChange={(e) => setMin(e.target.value)}
                    />
                    <TextField
                      id="max"
                      type="number"
                      size="small"
                      placeholder="max"
                      value={max}
                      onChange={(e) => setMax(e.target.value)}
                    />
                    <IconButton
                      aria-label="SmartDisplayRoundedIcon"
                      onClick={handelPrice}
                      sx={{
                        width: '3rem',
                        height: '3rem',
                      }}
                    >
                      <SmartDisplayRoundedIcon
                        color="primary"
                        sx={{
                          width: '3rem',
                          height: '3rem',
                        }}
                      />
                    </IconButton>
                  </Stack>
                </Stack>
                <Stack direction={{ sm: 'row', xs: 'column' }} spacing={1} alignItems={'center'}>
                  <Typography variant="body2">Sort By:</Typography>
                  <Select id="sort" value={sort} onChange={handelSort} size="small">
                    <MenuItem value={'-ratings'}>
                      <em>Default</em>
                    </MenuItem>
                    <MenuItem value={'ratings'}>Ratings low to high</MenuItem>
                    <MenuItem value={'price'}>Price low to high</MenuItem>
                    <MenuItem value={'-price'}>Price high to low</MenuItem>
                  </Select>
                </Stack>
              </Stack>

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
