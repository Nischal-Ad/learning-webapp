import { AppBar, Box } from '@mui/material'
import styled from 'styled-components'

export const Navbar = styled(AppBar)`
  background-color: transparent !important;
  box-shadow: none !important;
  transition: 500ms !important;

  &.white {
    background-color: white !important;
    box-shadow: 0px 10px 60px rgba(38, 45, 118, 0.2) !important;
  }
`

export const NavbarWrapper = styled(Box)`
  @keyframes slide-in {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  position: relative;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  &.smallNav {
    position: absolute;
    width: 100dvw;
    top: 3.6rem;
    height: 100dvh;
    background-color: white;
    left: 0;
    margin-left: 0;
    animation-name: slide-in;
  }

  @media (max-width: 899px) {
    &.slide-out {
      position: absolute;
      width: 100dvw;
      top: 3.6rem;
      height: 100dvh;
      background-color: white;
      left: 0;
      margin-left: 0;
      animation-name: slide-out;
    }
  }
`

export const SearchFormWrapper = styled.form`
  width: 100%;
`
