import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
const API_KEY = 'AIzaSyDF4VI-2QnolYiN1Ic3cu4QE01MLWFok7o';

export default class App extends Component {
  constructor(props){
    super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};
	
		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term }, (videos) => {
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	}

  render() {
		const videoSearch = _.debounce((term) =>  this.videoSearch(term), 300);

    return (
      <div><h1>My awesome App</h1>
			<SearchBar onSearchTermChange={ term => this.videoSearch(term) } />
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList 
				onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
			videos={this.state.videos} />  
      </div>
    );
  }
}
