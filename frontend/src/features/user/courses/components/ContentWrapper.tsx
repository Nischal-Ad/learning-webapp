import { Typography, Divider, Box } from '@mui/material'
import { IContentWrapper } from '../data/course.model'

const ContentWrapper: React.FC<IContentWrapper> = ({ title, children }) => {
  return (
    <Box mb={3}>
      <Typography
        variant="h6"
        component={'span'}
        sx={{
          color: 'white',
          borderRadius: '5px',
          padding: '5px 1rem',
          background: 'var(--primary)',
        }}
      >
        {title}
      </Typography>
      <Divider sx={{ marginY: '1rem' }} />
      {children}
    </Box>
  )
}

export default ContentWrapper
