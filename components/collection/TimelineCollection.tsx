import React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
// import TimelineDot from '@mui/lab/TimelineDot'

interface TimelineCollectionProps {
  items: string[]
}

const TimelineCollection = ({ items }: TimelineCollectionProps): JSX.Element => {
  return (
    <Timeline>
      {
        items.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> { item }</TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
  )
}

export default TimelineCollection
