import "./App.css";
import Video from "./Video";
import Sample1 from "./assets/videos/Sample1.mp4";
import Sample2 from "./assets/videos/Sample2.mp4";
import Sample3 from "./assets/videos/Sample3.mp4";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video videoLink={Sample1} />
        <Video videoLink={Sample2} />
        <Video videoLink={Sample3} />
      </div>
    </div>
  );
}

export default App;
