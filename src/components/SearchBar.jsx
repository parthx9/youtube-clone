import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';


class SearchBar extends Component{
    state = {
        searchItem : '',
    }

    handleChange = (event) => {
        
        this.setState({
            searchItem : event.target.value
        })
    }

    handleSubmit = (event) => {
        const { searchItem } = this.state ;
        const { onFormSubmit } = this.props ;

        onFormSubmit(searchItem)

        event.preventDefault()
    }
    
    render(){
        return(
            <Paper elevation={6}>
                <form onSubmit={this.handleSubmit} style={{padding: '25px'}}>
                    <TextField fullWidth onChange={this.handleChange} label='Search..' />
                </form>
            </Paper>
        )
    }
}

export default SearchBar