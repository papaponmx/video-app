import React, { Component } from 'react';
import VideoListItem from './video_list-item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem 
		onVideoSelect={props.onVideoSelect}
		key={video.etag} 
		video={video} />
	});

	return (
		<ul className="col-md-18 list-group">
			{videoItems}
		</ul>
	);
}

export default VideoList;
