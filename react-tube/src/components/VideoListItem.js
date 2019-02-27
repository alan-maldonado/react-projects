import React, { Component } from 'react';

class VideoListItem extends Component {
  render() {
    const video = this.props.video;
    const onVideoSelect = this.props.onVideoSelect;
    const imageUrl = video.snippet.thumbnails.default.url;
    const mediaTitle = video.snippet.title;

    return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} alt="Video" />
          </div>

          <div className="media-body">
            <div className="media-heading">{mediaTitle}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
