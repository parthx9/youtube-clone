import React from 'react';
import { Paper, Typography } from '@material-ui/core'

export const VideoDetail = ({ selectedVideo }) => {
    if(!selectedVideo) return <div></div>
        
    const videoURL = `https:www.youtube.com/embed/${selectedVideo.id.videoId}`

    console.log(videoURL)

    return (
        <>
        <Paper elevation={6} style={{height: '70%' }}>
            <iframe height='100%' frameBorder='0' width='100%' title='Video Player' src={videoURL} />
        </Paper>
        <Paper elevation={6} style={{padding: '15px'}}>
            <Typography variant='h4'> {selectedVideo.snippet.title} - {selectedVideo.snippet.channelTitle} </Typography>
            <Typography variant='subtitle1'> {selectedVideo.snippet.channelTitle} </Typography>
            <Typography variant='subtitle2'> {selectedVideo.snippet.description} </Typography>
        </Paper>
        </>
    )
}

