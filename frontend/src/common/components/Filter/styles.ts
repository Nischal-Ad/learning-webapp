import { Stack } from '@mui/material'
import styled from 'styled-components'

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
