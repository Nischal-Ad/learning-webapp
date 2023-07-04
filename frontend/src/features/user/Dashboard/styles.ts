import styled from 'styled-components'
import { Swiper } from 'swiper/react'
import { Stack } from '@mui/material'

export const SwipperWrapper = styled(Swiper)`
  height: 24rem;
  border-radius: 10px;
  margin-top: 1rem;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: fill;
  }

  .swiper-slide p {
    position: absolute;
    bottom: 10px;
    color: white;
    background-color: #49bbbd;
    box-shadow: 0px 10px 60px rgba(38, 45, 118, 0.08);
    padding: 1rem;
    margin: 0 0.5rem;
    border-radius: 10px;
  }
`

export const CategoryWrapper = styled(Stack)`
  border-radius: 50px;
  overflow-x: auto;
  padding: 8px;
  margin: 5px 0;

  svg {
    margin-right: 5px;
  }

  div {
    display: flex;
    margin: 0;
    background-color: var(--white);
    padding: 5px 15px;
    border-radius: 15px;
    font-weight: 600;
    color: var(--black);
    white-space: nowrap;
  }
`
