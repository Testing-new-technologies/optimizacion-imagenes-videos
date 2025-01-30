import {IKContext, IKVideo} from "imagekitio-react";
import "./App.css";

const App = () => {
  return (
    <IKContext urlEndpoint={import.meta.env.PUBLIC_URL_ENDPOINT}>
      <div className="content">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>

        <div className="" style={{width: "200px", height: "100px"}}>
          <IKVideo
            path="/xlargex.mp4"
            controls={false}
            autoPlay
            loop
            muted={true}
            transformation={{
              width: "400",
              //format: "hls",
              //quality: "auto"
            }}
            className={"object-cover object-cover-cover"}
            poster="/xlargex.mp4/ik-thumbnail.jpg"
            //preload={"metadata"}
          />
        </div>

      </div>
    </IKContext>
  );
};

export default App;
