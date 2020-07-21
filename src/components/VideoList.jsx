import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
    const videoList = videos.map((video, id)=><VideoItem video={video} key={id}/>)
    return videoList

}

export default VideoList