import { Box } from '@mui/system'

const services = [
  {
    name: 'Web Design',
    slug: 'web_design',
    img: '/img/services'
  },
  {
    name: 'Web Design',
    slug: 'web_design',
    img: '/img/services'
  },
  {
    name: 'Web Design',
    slug: 'web_design',
    img: '/img/services'
  }
]

const ChapterServices = (): JSX.Element => {
  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{}}>
        {
          services.map((service, index) => (
            <Box key={index}> { service.name } </Box>
          ))
        }
      </Box>
    </Box>
  )
}

export default ChapterServices
