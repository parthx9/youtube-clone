import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import { VideoDetail } from './components/VideoDetail';
import { VideoList } from './components/VideoList';
import axios from 'axios'


class App extends Component {

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get("search", {
          params: {
            part: "snippet",
            maxResults: 5,
            key: 'AIzaSyBC9fLZBlRE3psuXQis6OtOb3u0QFR8wXs',
            q: searchTerm,
          }
        });
        console.log(response)
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
                            <VideoDetail />
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