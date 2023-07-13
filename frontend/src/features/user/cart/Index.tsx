import Section from '@Components/SectionWrapper'
import { Divider, IconButton, Box, Menu, MenuItem, Typography } from '@mui/material'
import Helmet from '@Components/Helmet'
import CourseCard from '@Components/Courses/Index'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import React, { useState, useEffect } from 'react'
import { useCart } from './hooks/useCart'
import { useAppSelector } from '@Store'
import Loading from '@Components/Loader'

const Index = () => {
  const [openOptions, setOpenOptions] = useState<null | HTMLElement>(null)
  const { onUserDeleteCart, onGetAllCart } = useCart()
  const { status, data } = useAppSelector((store) => store.cart)

  const handelOptions = (event: React.MouseEvent<HTMLElement>) => {
    setOpenOptions(event.currentTarget)
  }

  const handleClose = () => {
    setOpenOptions(null)
  }

  useEffect(() => {
    onGetAllCart()
  }, [])

  const displayOptions = (id: string) => {
    console.log(id)

    return (
      <Menu
        id="notification"
        anchorEl={openOptions}
        open={Boolean(openOptions)}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={() => onUserDeleteCart(id)}>Remove from cart</MenuItem>
      </Menu>
    )
  }

  return status === 'loading' ? (
    <Loading />
  ) : (
    <>
      <Helmet title="My-Cart" content="my fovourate courses" />
      <Section id="my-cart">
        {!data.data || !data.data.cartItems || data.data.cartItems.length === 0 ? (
          <Typography variant="h5" color={'GrayText'} component={'h1'} textAlign={'center'}>
            There is no any items in cart!
          </Typography>
        ) : (
          data.data.cartItems.map((cart, i) => {
            return (
              <Box key={i} position={'relative'}>
                <CourseCard course={cart} />
                <IconButton
                  aria-label="MoreVertIcon"
                  onClick={handelOptions}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                  }}
                >
                  <MoreVertIcon />
                </IconButton>
                {displayOptions(cart._id)}
                <Divider
                  sx={{
                    margin: 2,
                  }}
                />
              </Box>
            )
          })
        )}
      </Section>
    </>
  )
}

export default Index
