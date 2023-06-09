import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { memo } from 'react'
import { IDialog } from './data/auth.model'
import { IconButton, Typography, CardMedia } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import logo from '@Svg/logo_big.svg'
import { useState } from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'

const index = ({ open, showAuth }: IDialog) => {
  const [isLogin, setIsLogin] = useState(true)

  const handleClose = () => {
    showAuth(false)
  }

  return (
    <Dialog
      open={open}
      keepMounted
      aria-describedby="dialog-auth"
      maxWidth={'xs'}
    >
      <DialogTitle textAlign={'center'}>
        {isLogin ? 'Login' : 'Sign Up'}
        <IconButton
          aria-label="delete"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 5,
            top: 12,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CardMedia
          component={'img'}
          image={logo}
          sx={{
            objectFit: 'fill',
            width: '8rem',
            marginBottom: 1,
          }}
        />
        {isLogin ? <Login /> : <SignUp />}
      </DialogContent>
      <DialogActions sx={{ marginY: 1 }}>
        {isLogin ? 'New here? ' : 'Already have an alc? '}
        <Typography
          variant="subtitle2"
          component={'span'}
          onClick={() => setIsLogin(!isLogin)}
          sx={{
            color: 'blue',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {isLogin ? 'Create Account' : 'Login'}
        </Typography>
      </DialogActions>
    </Dialog>
  )
}

export default memo(index)
