import { Button, Input, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

const SearchFilter = (): JSX.Element => {
  const ref = useRef()
  const [query, setQuery] = useState('')
  const [item, setItem] = useState('')
  const [items, setItems] = useState([''])

  function addItem (): void {
    if (item === '') { alert('Nothing to add !') } else {
      setItems(prev => { return [...prev, item] })
      setItem('')
      setQuery('')
    }
  }

  function removeItem (itemTobeRemoved: string): void {
    const copy = items // making is pure function
    copy.splice(copy.indexOf(itemTobeRemoved), 1) // removed item on copy list
    setItems([...copy])
    setQuery('')
  }

  const filteredList = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [query, items])

  useEffect(() => {

  }, [items])

  return (
    <Box sx={{ px: 2, py: 3, fontSize: '2rem', mt: 6, display: 'flex', height: '50vh', flexDirection: 'colulm', alignContent: 'center', justifyContent: 'center' }}>
      <Box>
        <Input type='text' placeholder="search" sx={{ fontSize: '36px', mb: 12 }}
          value={ query }
          onChange={e => setQuery(e.target.value) }
        />
        <br/>
        <Box sx={{ mb: 6 }}>
          <Input ref={ref} type='text' placeholder='Start adding to the list' sx={{ fontSize: '24px', mr: 3 }}
            value = { item } onChange={e => setItem(e.target.value)} />
          <Button size='large' variant='outlined' onClick={ addItem } > Add </Button>
        </Box>

        <AnimatePresence>
        {
          filteredList.map((item, index) => (
            <Box
              key={index}
              component={ motion.div }
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, color: 'red' }}
              onClick={() => removeItem(item) }
              whileHover={{ textDecorationLine: 'line-through', opacity: 0.6 }}
            >
              <Typography variant='h6'>
                { item }
              </Typography>
            </Box>
          ))
        }
        </AnimatePresence>
      </Box>
    </Box>
  )
}

export default SearchFilter
