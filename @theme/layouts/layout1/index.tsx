import { Box } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
// import { useRecoilValue } from 'recoil'
// import { amET, enUS } from '../../../i18n'
// import { language } from '../../../store'
import { LayoutProps } from '../../../types/interfaceTypes'
import { GlobalFooter, GlobalNav } from '../global'

const Layout1 = ({ options, children, header }: LayoutProps): JSX.Element => {
  const router = useRouter()
  // const lang = useRecoilValue(language)
  // const t = lang === 'en' ? enUS : amET

  return (
    <Box component='div' height='auto'
    sx={{
      dispay: 'grid',
      gridTemplateRows: '100vh'
    }}>
      {
        header
      }
        <GlobalNav
          brand={'website.et'}
          items={
            [
              // { name: 'Services', slug: '/services', img: '' }
            ]
              } />

          <motion.main>
            <AnimatePresence mode='wait' onExitComplete={() => alert(router.route)}>

              <Box
                key={ router.route }
                component={ motion.div }
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ x: 300 }}
                sx={{
                  height: 'auto',
                  width: 'auto',
                  overflowX: 'hidden',
                  flexShrink: 0,
                  boxSizing: 'content-box'
                }}
              >
                    {children}
              </Box>
            </AnimatePresence>
          </motion.main>
        <GlobalFooter />
    </Box>
  )
}

export default Layout1
