import SectionWrapper from '@Components/SectionWrapper'
import Heading from '@Components/Heading/LandingHeading'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import File from '@Svg/file.svg'
import Calender from '@Svg/calendar.svg'
import User from '@Svg/user.svg'
import { CardImageWrapper, CardWrapper } from '../styles'
import { ICards } from '../data/landing.model'

const Cards = ({ heading, img, desc }: ICards) => {
  return (
    <CardWrapper>
      <CardActionArea>
        <CardImageWrapper>
          <CardMedia
            component="img"
            image={img}
            alt=""
            sx={{ padding: '2rem' }}
          />
        </CardImageWrapper>
        <CardContent>
          <Typography
            component="h1"
            fontSize={30}
            fontWeight={700}
            mb={2}
            height={100}
            color="#2F327D"
          >
            {heading}
          </Typography>
          <Typography paragraph lineHeight={'1.8rem'}>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardWrapper>
  )
}

const Services = () => {
  return (
    <SectionWrapper id="services">
      <Heading
        heading="All-In-One"
        title="Cloud Softwore"
        desc="TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office. "
      />
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <Cards
            heading="Online Billing, Invoicing, & Contracts"
            img={File}
            desc="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office."
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Cards
            heading="Easy Scheduling & Attendance Tracking"
            img={Calender}
            desc="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Cards
            heading="Customer Tracking"
            img={User}
            desc="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization "
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  )
}

export default Services
