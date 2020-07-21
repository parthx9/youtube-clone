import React from 'react';
import VideoItem from './VideoItem'
import { Grid } from '@material-ui/core';

const VideoList = ({ videos, onVideoSelect }) => {
    const videoList = videos.map((video, id)=><VideoItem onVideoSelect = {onVideoSelect} video={video} key={id}/>)
    return (
        <Grid container spacing={10}>
            {videoList}
        </Grid>
    )

}

export default VideoList