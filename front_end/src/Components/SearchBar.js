import React, { Component } from 'react';
import return_selected from './mainPage.js'

class SearchBar extends Component {
    //Javascript functions go here:

    render() {
        return (
            <nav class="nav navbar navbar-light bg-light navbar-expand-lg">
                        <form class="nav-link form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" id="searchInput" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn my-2 my-sm-0" type="submit" onClick={this.props.onSearchClick.bind(this)}>Search</button>
                        </form>

                        <a class="nav-link ml-auto" href="#" onClick={this.props.toggleAll}>Toggle All</a>
                        <a class="nav-link" href="#" onClick={this.props.downloadSelected}>Download Selected</a>
                       

               
            </nav>
        )
    }
}

export default SearchBar;