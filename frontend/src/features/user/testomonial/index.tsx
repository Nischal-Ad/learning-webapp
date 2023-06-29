import { Box, Typography, Stack, Avatar } from '@mui/material'
import ReactStars from 'react-stars'

const index = ({ testomonial }: { testomonial: IComment }) => {
  const color = Math.floor(100 + Math.random() * 900)
  return (
    <Box my={1} color={'var(--black)'} bgcolor={'#efefef'} px={1} py={0.5} borderRadius={2}>
      <Stack spacing={1} direction={'row'} alignItems={'center'}>
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: `#${color}`,
          }}
        >
          {testomonial?.user?.name.charAt(0).toUpperCase()}
        </Avatar>
        <Stack direction={'column'} alignItems={'start'}>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <ReactStars
              count={5}
              size={20}
              edit={false}
              value={testomonial?.rating}
              color2={'#e59819'}
            />
            <Typography variant="caption" component={'span'}>
              ({testomonial?.duration})
            </Typography>
          </Stack>
          <Typography variant="body1" component={'h6'} fontWeight={'bold'}>
            {testomonial?.user?.name}
          </Typography>
        </Stack>
      </Stack>
      <Typography component="p" variant="subtitle2" px={2} mt={1}>
        {testomonial?.comment}
      </Typography>
    </Box>
  )
}

export default index
