import React from 'react';

const VideoDetail = ({ video }) => {
	if(!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://youtube.com/embed/${videoId}`;

	return (
		<div className="video-details row">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe src={url} className="embed-responsive-item"></iframe>
				<div className="details">
					<div>{video.snippet.title}</div>
					<div>{video.snippet.description}</div>
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;
