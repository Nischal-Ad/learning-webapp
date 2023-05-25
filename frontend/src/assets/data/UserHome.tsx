import {
  ICategory,
  ISlider,
} from '@Features/user/Dashboard/data/dashboard.model'
import GamesIcon from '@mui/icons-material/Games'
import WebIcon from '@mui/icons-material/Web'

export const Slides: ISlider[] = [
  {
    img: `https://picsum.photos/800/600?random=${Math.floor(
      Math.random() * 100
    )}`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam nec justo at commodo. Nam ac nisi in augue consectetur rhoncus.`,
  },
  {
    img: `https://picsum.photos/800/600?random=${Math.floor(
      Math.random() * 100
    )}`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam nec justo at commodo. Nam ac nisi in augue consectetur rhoncus.`,
  },
  {
    img: `/src/assets/img/goalImg.jpg`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam nec justo at commodo. Nam ac nisi in augue consectetur rhoncus.`,
  },
]

export const Category: ICategory[] = [
  {
    icon: <WebIcon />,
    category: 'Web Development',
  },
  {
    icon: <GamesIcon />,
    category: 'Games',
  },
]
