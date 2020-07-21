import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <Grid item sx={12} >
            <Paper onClick={()=>onVideoSelect(video)}
            style={{display: 'flex', alignItems: 'center', cursor:'pointer'}}>
            <img 
            style={{marginRight: '20px'}} 
            alt='Thumbnail' 
            src={video.snippet.thumbnails.medium.url} />
            <Typography variant='subtitle1'><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )

}

export default VideoItem