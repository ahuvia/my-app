import { useEffect, useRef, useState } from "react";
import QrReader from "react-scan-qr";
import jsQR from "jsqr";
import JsQr from "./JsQr";
import JsQR2 from "./jsQR2";
// import { useTorchLight } from "@blackbox-vision/use-torch-light";
// import Torch from "./Torch";
import ScanQr from "./camera/ScanQr";
import "./icon.css";
// import BarcodeScannerComponent from "react-webcam-barcode-scanner2";
import React from "react";
import ZxingBrower from "./zxingBrower";
const tiny = require("@ahuvia/tiny");

function App() {
  const [data, setData] = useState("Not Found");

  const input = document.getElementById("input");
  const canvas = document.getElementById("canvas");

  useEffect(() => {}, []);
  return (
    <div>
      <input
        id="input"
        type="file"
        name="video"
        accept="image/*;capture=camera"
      ></input>
      <canvas id="canvas"></canvas>
      {/* <JsQr /> */}
      {/* <JsQR2/> */}
      <div id="div1"></div>
      {/* <video
        style={{ width: "500px", height: "375px", backgroundColor: "#666" }}
        autoPlay={true}
        id="vid"
      ></video> */}

      <div id="theater">
        {/* <video
          id="video"
          src="http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv"
          controls="false"
        ></video> */}
        <canvas
          id="canvas"
          // src="http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv"
          // controls="false"
        ></canvas>
        <label>
          <br />
          Try to play me :)
        </label>
        <br />
      </div>
      {/* {tiny("אהוביה שני")} */}
      {/* <ScanQr /> */}
      {/* <Torch /> */}
      {/* <QrReader
        delay={300}
        onScan={(data) => setData(data)}
        onError={handleError(data)}
        style={{ width: "90%" }}
      />
      {data} */}
      {/* <ZxingBrower/> */}
      {/* <button onClick={toggle}>{on ? "Disable Torch" : "Enable Torch"}</button> */}
      {/* <p>{JSON.stringify(data, null, 2)}</p>
      <p>{JSON.stringify(error, null, 2)}</p> */}
      {/* <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      // <p>{data}</p> */}
    </div>
  );
}

export default App;
