/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown'
import { Typography } from '@mui/material'

const markdown = '#Markdown - Ready!'

export default function CodingReact (): JSX.Element {
  return (
    <>
      <Typography variant="h3"> Coding in React!</Typography>
      <ReactMarkdown children={ String(markdown) } />
      <Typography variant='body1'>Awaiting Markdown Cofiguration in Webpack rules</Typography>
    </>
  )
}
