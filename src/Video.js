import React, { useRef } from "react";
import "./Video.css";

const Video = ({ videoLink }) => {
  const videoRef = useRef(null);
  return (
    <div className="video">
      <video className="video__player" src={videoLink} autoPlay loop muted />
    </div>
  );
};

export default Video;
