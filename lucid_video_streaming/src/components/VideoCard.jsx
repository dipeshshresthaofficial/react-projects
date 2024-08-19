import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { 
        demoThumbnailUrl, 
        demoVideoUrl, 
        demoChannelUrl, 
        demoChannelTitle, 
        demoVideoTitle, 
        demoProfilePicture 
    } from '../utils/constants';
import { customColors } from '../utils/customColors';

const VideoCard = ({ video }) => {
  return (
    <Card
        sx={{
            width: '320px'
        }}>
        <Link to= {video?.id?.videoId? `/video/${video?.id?.videoId}`:demoVideoUrl}>
            <CardMedia 
                image = {video?.snippet?.thumbnails?.high?.url} 
                alt = {video?.snippet?.title}
                sx={{
                    height: '180px',
                    width: '358px'
                }} />
        </Link>

        <CardContent
                sx={{
                    backgroundColor: customColors.lightBlack
                }}
                >
            <Link
                to={video?.id?.videoId? `/video/${video?.id?.videoId}`:demoVideoUrl}
                style={{
                    color: customColors.white
                }}
                >
                <Typography
                    variant='subtitle1'
                    >{video.snippet.title.slice(0,35)}</Typography>
            
            </Link>
            <Link 
                to={video?.snippet?.channelId? `/channel/${video?.snippet?.channelId}`:demoChannelUrl}
                style={{
                    display: 'flex',
                    gap: 6,
                    alignItems: 'center'
                }}
                >
                <Typography
                    variant='subtitle2'
                    sx={{
                        color: 'gray'
                    }}
                    >
                    {video.snippet.channelTitle.slice(0,35)}
                </Typography>
                <CheckCircle 
                    sx={{
                        fontSize: 12,
                        color: customColors.gray
                    }}/>
            </Link>
            </CardContent>
    </Card>
  )
}

export default VideoCard