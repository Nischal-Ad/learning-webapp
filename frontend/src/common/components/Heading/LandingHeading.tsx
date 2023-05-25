import React from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

interface IHeading {
  heading: string
  title?: string
  desc?: string
  margin?: boolean
}

const LandingHeading: React.FC<IHeading> = ({
  heading,
  title,
  desc,
  margin = true,
}) => {
  return (
    <Box
      textAlign={'center'}
      mx={{ lg: '18%', xs: 0 }}
      mb={5}
      mt={margin ? 5 : 0}
    >
      <Typography
        fontWeight={700}
        variant={'h1'}
        color={'#2F327D'}
        fontSize={36}
        mb={1}
        sx={{
          span: {
            color: '#00CBB8',
          },
        }}
      >
        {heading} {title && <span>{title}</span>}
      </Typography>
      {desc && (
        <Typography paragraph color="#696984" lineHeight={'1.8rem'}>
          {desc}
        </Typography>
      )}
    </Box>
  )
}

export default LandingHeading
