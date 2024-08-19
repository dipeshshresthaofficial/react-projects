import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Stack, Box, Typography } from '@mui/material';
import { customColors } from '../utils/customColors';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = ({}) => {
  // retrieving id present in url as a parameter
  const { id } = useParams();
  const [channelData, setChannelData] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);
  console.log(channelData);

  useEffect(() =>{
    // fetching channel information from Rapid API
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data)=> setChannelData(data?.items[0]));

    // fetch videos of particular channel from Rapid API
    fetchFromAPI(`search?channelId=${id}&part=snippet`)
      .then((data) => setChannelVideos(data.items));
  },[id])
  return (
    <Stack
      sx={{
        height: 'auto',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Box
      height='200px'
      width='100%'
      bgcolor={customColors.lightBlack}>
      </Box>
      <Box sx={{marginBottom: "60px"}}>
        <ChannelCard channel={channelData} marginTop="-110px"/>
        <Typography  sx={{color: "#fff", textAlign: "center", marginTop: "-26px", fontSize: "0.85rem"}}>
          {`${channelData?.statistics?.subscriberCount} Subscribers`}
        </Typography>
      </Box>
      <Box>
        <Videos videos={channelVideos} />
      </Box>
    </Stack>
  )
}

export default ChannelDetail