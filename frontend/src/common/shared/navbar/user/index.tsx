import Section from '@Components/SectionWrapper'
import {
  AppBar,
  CardMedia,
  TextField,
  Stack,
  Menu,
  Dialog,
  DialogTitle,
  Box,
  IconButton,
  DialogContent,
  MenuItem,
  Button,
  Badge,
  Divider,
  Avatar,
  Typography,
} from '@mui/material'
import { SearchFormWrapper } from '../style'
import { Link, useNavigate } from 'react-router-dom'
import logo from '@Svg/logo_text_black.svg'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import LockIcon from '@mui/icons-material/Lock'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import CloseIcon from '@mui/icons-material/Close'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import NotificationList from './components/NotificationList'
import { useAuth } from '@Features/user/Auth/hooks/useAuth'

const Index = () => {
  const [userMenu, setUserMenu] = React.useState<null | HTMLElement>(null)
  const [search, setSearch] = React.useState('')
  const [showSearch, setShowSearch] = React.useState(false)
  const [openNotification, setOpenNotification] =
    React.useState<null | HTMLElement>(null)

  const { onUserLogout } = useAuth()
  const navigate = useNavigate()
  const color = Math.floor(100 + Math.random() * 900)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenu(event.currentTarget)
  }

  const handleNotification = (event: React.MouseEvent<HTMLElement>) => {
    setOpenNotification(event.currentTarget)
  }

  const handleClose = () => {
    setUserMenu(null)
    setOpenNotification(null)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowSearch(false)
    navigate(`/courses/${search}`)
  }

  const handleLogout = () => {
    onUserLogout()
    navigate('/', { replace: true, state: { previousPath: null } })
  }

  const displaySearch = () => {
    return (
      <SearchFormWrapper onSubmit={handleSearch}>
        <TextField
          type="search"
          id="search"
          placeholder="Search..."
          variant="standard"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ marginRight: 1, color: 'var(--black)' }} />
            ),
          }}
        />
      </SearchFormWrapper>
    )
  }

  const displayMenu = () => {
    return (
      <Menu
        id="user-menu"
        anchorEl={userMenu}
        open={Boolean(userMenu)}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            paddingX: 1,

            svg: {
              marginRight: 1,
            },

            a: {
              display: 'flex',
              alignItems: 'center',
              color: 'var(--black)',
              my: 0.5,
            },
          },
        }}
      >
        <MenuItem
          sx={{
            cursor: 'auto',
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight={'bold'}
            display={'flex'}
            flexDirection={'column'}
            textAlign={'center'}
          >
            Nischal Adhikari
            <Typography variant="caption">
              nischaladhikari101@gmail.com
            </Typography>
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link to={'/my-learnings'}>
            <LocalLibraryIcon /> My Learnings
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={'/changepassword'}>
            <LockIcon /> Change Password
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ExitToAppIcon /> Logout
        </MenuItem>
      </Menu>
    )
  }

  const displayNotification = () => {
    return (
      <Menu
        id="notification"
        anchorEl={openNotification}
        open={Boolean(openNotification)}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            overflow: 'auto',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            paddingX: 2,
            pb: 1,
            mt: 1.5,
            height: { sm: '25rem', xs: '50dvh' },
            width: { sm: '25rem', xs: '80dvw' },
          },
        }}
      >
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          paddingBottom={1}
        >
          <Typography variant="h6" component={'span'} fontWeight={'bold'}>
            Notifications
          </Typography>
          <Button>clear all</Button>
        </Stack>
        <Divider />
        <NotificationList />
        <NotificationList /> <NotificationList />
        <NotificationList /> <NotificationList />
        <NotificationList /> <NotificationList />
        <NotificationList /> <NotificationList />
        <NotificationList /> <NotificationList />
        <NotificationList /> <NotificationList />
        <NotificationList />
      </Menu>
    )
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'white',
        marginBottom: '1rem',
        boxShadow: '0px 10px 60px rgba(38, 45, 118, 0.118)',
      }}
    >
      <Section id="navbar">
        <Stack
          spacing={{ md: 10, lg: 25, xs: 2 }}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          py={1}
        >
          <Link to="/">
            <CardMedia
              image={logo}
              component={'img'}
              sx={{
                width: '10rem',
              }}
            />
          </Link>
          <Box display={{ md: 'block', xs: 'none' }} width={'100%'}>
            {displaySearch()}
          </Box>
          <Stack
            spacing={{ sm: 2 }}
            direction={'row'}
            alignItems={'center'}
            sx={{
              'img, svg': {
                cursor: 'pointer',
                color: 'black',
              },
            }}
          >
            <IconButton
              aria-label="search"
              onClick={() => setShowSearch(!showSearch)}
              sx={{
                display: { md: 'none' },
              }}
            >
              <SearchIcon />
            </IconButton>
            <Link to={'/cart'}>
              <IconButton aria-label="cart">
                <AddShoppingCartIcon />
              </IconButton>
            </Link>
            <IconButton aria-label="notification" onClick={handleNotification}>
              <Badge color="error" variant="dot" invisible={false}>
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="profile" onClick={handleClick}>
              <Avatar
                sx={{
                  width: 30,
                  height: 30,
                  bgcolor: `#${color}`,
                }}
              >
                N
              </Avatar>
            </IconButton>
          </Stack>
        </Stack>
      </Section>
      {showSearch && (
        <Dialog open={showSearch}>
          <DialogTitle>
            <Stack direction={'row'} justifyContent={'space-between'}>
              Search...
              <IconButton
                aria-label="close"
                onClick={() => setShowSearch(false)}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
          </DialogTitle>
          <DialogContent>{displaySearch()}</DialogContent>
        </Dialog>
      )}
      {displayMenu()}
      {displayNotification()}
    </AppBar>
  )
}

export default Index
