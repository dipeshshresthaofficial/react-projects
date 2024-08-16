import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { demoChannelUrl, demoProfilePicture } from '../utils/constants';
import { Link } from 'react-router-dom';
import { customColors } from '../utils/customColors';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({channel}) => {
  return (
    <Box
      sx={{ width: '320px', display:'flex', alignItems: 'center', justifyContent: 'center'}}
      >
      <Link
        to={channel?.id?.channelId? `/channel/${channel?.id?.channelId}`: demoChannelUrl}
        >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: 1,
            color: customColors.white
          }}>
          <CardMedia 
            image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt = {channel?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: '180px',
              width: '180px',
              border: `1px solid ${customColors.lightWhite}`
            }}/>
        
          <Typography
            variant='subtitle1'
            >
            {channel?.snippet?.channelTitle}
            <CheckCircle 
            sx={{
              fontSize: 14
            }}
            />
          </Typography>
          
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard