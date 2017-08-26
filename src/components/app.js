import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
const API_KEY = 'AIzaSyDF4VI-2QnolYiN1Ic3cu4QE01MLWFok7o';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

		YTSearch({ key: API_KEY, term: 'React' },  (videos) => {
			this.setState({ videos })
		});
	}

  render() {
    return (
      <div><h1>My awesome App</h1>
			<SearchBar />
			<VideoList videos={this.state.videos} />  
      </div>
    );
  }
}
