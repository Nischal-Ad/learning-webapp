import { Box } from '@mui/material'
import { CategoryWrapper } from '../styles'
import { ICategory } from '../data/dashboard.model'

const Category = ({ category }: { category: ICategory[] }) => {
  return (
    <CategoryWrapper spacing={2} direction={'row'}>
      {category.map((data, i) => {
        return (
          <Box key={i}>
            {data.icon}
            {data.category}
          </Box>
        )
      })}
    </CategoryWrapper>
  )
}

export default Category
