import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core'

const VideoItem = ({ video  }) => {
    return (
        <Grid item sx={12} >
            <Paper style={{display: 'flex', alignItems: 'center'}}></Paper>
            <img 
            style={{marginRight: '20px'}} 
            alt='Thumbnail' 
            src={video.snippet.thumbnails.medium.url} />
            <Typography variant='subtitle1'><b>{video.snippet.title}</b></Typography>
        </Grid>
    )

}

export default VideoItem