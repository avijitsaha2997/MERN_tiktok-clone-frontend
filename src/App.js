import "./App.css";
import Video from "./Video";
import Sample1 from "./assets/videos/Sample1.mp4";
import Sample2 from "./assets/videos/Sample2.mp4";
import Sample3 from "./assets/videos/Sample3.mp4";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  async function fetchData() {
    return await fetch(
      "https://mern-tiktok-clone-backend.onrender.com/v2/posts"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err.message);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="app">
      <div className="app__videos">
        {data.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
