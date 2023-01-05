import { Box } from '@mui/system'
import { useEffect } from 'react'
import Layout1 from '../../@theme/layouts/layout1'
import useAxios from '../../hooks/useAxios'

export default function Services (): JSX.Element {
  const { data, isLoading, error } = useAxios('https://jsonplaceholder.typicode.com/todos')

  useEffect(() => {
    console.log(data)
  })

  return (
    <Layout1>
      <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        { (isLoading === true) ? 'Loading Data' : 'Done'}
        { (error.length > 0) && <p>  { error } </p> }
      </Box>
    </Layout1>
  )
}
