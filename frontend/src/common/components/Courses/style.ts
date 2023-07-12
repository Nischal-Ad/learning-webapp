import styled from 'styled-components'
import { Box } from '@mui/material'

export const CourseCardWrapper = styled(Box)`
  overflow: auto;
  color: var(--black);

  h1 {
    max-height: 4rem;
    min-height: 2rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  h6 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .disable {
    color: gray;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-decoration-line: line-through;
    margin-left: 5px;
  }

  .best {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
    padding: 2px 8px;
    border-radius: 2px;
    color: whitesmoke;
    font-size: 11px;
    margin-right: 5px;

    svg {
      font-size: 11px;
      margin-left: 8px;
    }
  }
`
