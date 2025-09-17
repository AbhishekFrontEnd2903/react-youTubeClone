import React from "react";

const VideoCard = ({ info }) => {
  console.log("info", info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 w-52 h-96 shadow">
      <img className="rounded-lg" src={thumbnails.high.url} alt="" />
      <ul>
        <li className="font-bold">title: {title}</li>
        <li>channel title: {channelTitle}</li>
        <li>views: {statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
