import { useRef, useState } from "react";
import QrReader from "react-qr-reader";
import { useTorchLight } from "@blackbox-vision/use-torch-light";
import Troch from "./Troch";
import logo from "./logo.svg";
import { ReactFlashlight } from "react-flashlight";
function App() {
  const streamRef = useRef(null);

  const [error, setError] = useState(null);
  const [data, setData] = useState("No result");

  const [on, toggle] = useTorchLight(streamRef.current);

  const setRef = ({ stream }) => {
    streamRef.current = stream;
  };
  const style = {
    backgroundImage: `url(${logo})`,
    height: "90vh",
    width: "90vw",
  };

  return (
    <>
      {/* <Troch /> */}
      לא עובד
      <header className="App-header">
        <ReactFlashlight>
          <div style={style}>Hello, I am a child element.</div>
        </ReactFlashlight>
      </header>
      {/* <QrReader
        onLoad={setRef}
        onScan={setData}
        onError={setError}
        style={{ width: "100%" }}
      /> */}
      {/* <button onClick={toggle}>{on ? "Disable Torch" : "Enable Torch"}</button>
      <p>{JSON.stringify(data, null, 2)}</p>
      <p>{JSON.stringify(error, null, 2)}</p> */}
    </>
  );
}

export default App;
