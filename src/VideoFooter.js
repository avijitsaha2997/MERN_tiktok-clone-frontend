import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({ channel, description }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://images.freeimages.com/fic/images/icons/45/blend/512/cd.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
