import { Stack, Typography, Select, TextField, IconButton } from '@mui/material'
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded'
import React, { useState, useEffect, PropsWithChildren } from 'react'
import { SelectChangeEvent } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { CategoryWrapper } from './styles'
import { ICategory } from '@Features/user/Dashboard/data/dashboard.model'

export const PriceRange = () => {
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [params, setParams] = useSearchParams()

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
        params.delete('price[gte]')
        return params
      })
    } else if (min) {
      setParams((prev) => {
        const params = prev
        params.set('price[gte]', min.toString())
        params.delete('price[lte]')
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

  useEffect(() => {
    const minPrice = params.get('price[gte]')
    const maxPrice = params.get('price[lte]')

    if (minPrice) setMin(minPrice)
    if (maxPrice) setMax(maxPrice)
  }, [params])

  return (
    <Stack
      direction={{ sm: 'row', xs: 'column' }}
      spacing={{ sm: 1 }}
      alignItems={{ sm: 'center' }}
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
  )
}

export const Sort: React.FC<Required<PropsWithChildren>> = ({ children }) => {
  const [sort, setSort] = useState('-ratings')
  const [params, setParams] = useSearchParams()

  const handelSort = (e: SelectChangeEvent<string>) => {
    setParams((prev) => {
      const params = prev
      params.set('sort', e.target.value)
      return params
    })
  }

  useEffect(() => {
    const sort = params.get('sort')
    if (sort) setSort(sort)
  }, [params])

  return (
    <>
      <Stack direction={{ sm: 'row', xs: 'column' }} spacing={1} alignItems={{ sm: 'center' }}>
        <Typography variant="body2">Sort By:</Typography>
        <Select id="sort" value={sort} onChange={handelSort} size="small">
          {children}
        </Select>
      </Stack>
    </>
  )
}

export const Category = ({ category }: { category: ICategory[] }) => {
  return (
    <CategoryWrapper spacing={2} direction={'row'}>
      {category.map((data, i) => {
        return (
          <Box key={i}>
            {data.icon}
            {data.category}
          </Box>
        )
      })}
    </CategoryWrapper>
  )
}
