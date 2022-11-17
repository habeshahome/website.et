import { Box } from '@mui/material'
import { LayoutProps } from '../../../types/interfaceTypes'
import { ChapterNav } from '../chapter'
import { GlobalFooter, GlobalNav } from '../global'

const Layout1 = ({ options, children }: LayoutProps): JSX.Element => {
  return (
    <Box
      component='div'
      >
        <GlobalNav
          brand={'website.et'}
          items={
            [
              { name: 'Sell Online', slug: '/online_shop', img: '' },
              { name: 'Marketing', slug: '/digital_marketing', img: '' },
              { name: 'Web Design', slug: '/templates', img: '' },
              { name: 'Pricing', slug: '/pricing', img: '' },
              { name: 'Learn', slug: '/learn', img: '' },
              { name: 'Partner', slug: '/partner', img: '' }
            ]
              } />
        <ChapterNav />
          <Box
            component='div'
            sx={{ height: 'auto', width: 'auto', overflowX: 'hidden', flexShrink: 0 }}
          >
            { children }
          </Box>
        <GlobalFooter />
    </Box>
  )
}

export default Layout1
