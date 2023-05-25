import { Box, Button, Stack, MenuItem } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Auth from '@Features/user/Auth'
import { useState } from 'react'

interface INavLinks {
  NavDrop: (val: boolean) => void
}

const Navlinks = ({ NavDrop }: INavLinks) => {
  const [open, setOpen] = useState(false)

  const showAuth = (val: boolean) => {
    setOpen(val)
  }

  return (
    <Stack
      direction={{ md: 'row', xs: 'column' }}
      spacing={{ md: 0, xs: 2 }}
      margin={0}
      padding={0}
      component={'ul'}
      onClick={() => NavDrop(false)}
    >
      <MenuItem>
        <Box component={'a'} href="#welcome">
          Home
        </Box>
      </MenuItem>
      <MenuItem>
        <Box component={'a'} href="#our success">
          Our Success
        </Box>
      </MenuItem>
      <MenuItem>
        <Box component={'a'} href="#services">
          Services
        </Box>
      </MenuItem>
      <MenuItem>
        <Box component={'a'} href="#courses">
          Courses
        </Box>
      </MenuItem>
      <MenuItem>
        <Box component={'a'} href="#about us">
          About Us
        </Box>
      </MenuItem>
      <MenuItem>
        <Box component={'a'} href="#goals">
          Goals
        </Box>
      </MenuItem>
      <MenuItem>
        <Box component={'a'} href="#testimonial">
          Testomonials
        </Box>
      </MenuItem>
      <MenuItem>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={() => setOpen(true)}
          sx={{
            color: 'white !important',
            background: '#49BBBD',
            paddingX: 2,
            borderRadius: '9999px',

            '&:hover': {
              background: '#26b6b9',
            },
          }}
        >
          Join Us
        </Button>
        <Auth open={open} showAuth={showAuth} />
      </MenuItem>
    </Stack>
  )
}

export default Navlinks
