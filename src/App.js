import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import { VideoDetail } from './components/VideoDetail';
import { VideoList } from './components/VideoList';


class App extends Component {
    state = {
        selectedVideo : null,
        videos : []
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get("search", {
          params: {
            part: "snippet",
            maxResults: 5,
            key: 'AIzaSyBC9fLZBlRE3psuXQis6OtOb3u0QFR8wXs',
            q: searchTerm,
          }
        });

        this.setState({
            selectedVideo : response.data.items[0],
            videos : response.data.items
        })
        console.log(response.data.items)
      }


    render(){
        return(
            <Grid justify='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit = {this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail selectedVideo = {this.state.selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            {/* LIST */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App