import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";
function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@avijitsaha</h3>
        <p>This is some desc</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
