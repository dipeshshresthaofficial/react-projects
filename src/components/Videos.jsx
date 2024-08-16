import { Box, Stack } from '@mui/material'
import React from 'react'
import { VideoCard, ChannelCard } from './index';

const Videos = ({videos}) => {
  console.log(videos)
  return (
    <Stack
      direction='row'
      flexWrap='wrap'
      gap={2}
      sx={{
        height: {sx: 'auto', md: '95%'},
        overflowY:'auto'
      }}

      >
      {
        videos.map((item,idx) => {
          // there are other items like playlist info, we will discard them
          if(!(item?.id?.channelId || item?.id?.videoId)) return;
          // if the item is either channel or video then only we will return the Box ui
          return (
            <Box key={idx}>
              { item.id.channelId && <ChannelCard channel = {item} />}
              { item.id.videoId && <VideoCard video = {item} />}
            </Box>
          )
        })
      }
    </Stack>
  )
}

export default Videos