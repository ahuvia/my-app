import { useEffect, useRef, useState } from "react";
import QrReader from "react-scan-qr";
import ReactQrScanner from "./ReactQrScanner";
import jsQR from "jsqr";
import JsQr from "./JsQr";
import JsQR2 from "./jsQR2";
// import { useTorchLight } from "@blackbox-vision/use-torch-light";
import Torch2 from "./Torch2";
import ScanQr from "./camera/ScanQr";
import "./icon.css";
// import BarcodeScannerComponent from "react-webcam-barcode-scanner2";
import React from "react";
import ZxingBrower from "./zxingBrower";
import Camera from "./Camera";
const tiny = require("@ahuvia/tiny");

function App() {
  const [data, setData] = useState("Not Found");
  const [isJsQr, setIsJsQr] = useState(jsQR? true: false)

  const handleError = (err) => {
    console.error(err);
  };
  const width = 400;
  const height = 400;
  const tryy = async () => {
    // var video = document.querySelector("#videoElement");
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment", frameRate: { ideal: 24, max: 30 } },
    });
    // const video = document.createElement("video");
    const video = document.getElementById("vid");

    if ("srcObject" in video) {
      video.srcObject = mediaStream;
    } else {
      video.src = URL.createObjectURL(mediaStream);
    }

    const currentDiv = document.getElementById("div1");
    video.autoplay = true;
    // currentDiv.appendChild(video);
  };

  const canvas = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var video = document.getElementById("vid");

    // set canvas size = video size when known
    video.addEventListener("loadedmetadata", function () {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    });

    video.addEventListener(
      "play",
      function () {
        var $this = this; //cache
        (function loop() {
          if (!$this.paused && !$this.ended) {
            ctx.drawImage($this, 0, 0);
            setTimeout(loop, 1000 / 30); // drawing at 30fps
          }
        })();
      },
      0
    );
  };

//   if(jsQR){
// setIsJsQr(true)
//   }
  useEffect(() => {
    // tryy();
    // canvas();
  }, []);
  return (
    <div>
      {/* {isJsQr?(<JsQr />):( */}
      <ReactQrScanner/>
      {/* )} */}
      {/* <Camera /> */}
      {/* <ReactQrScanner/> */}
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
      {/* <Torch2 /> */}
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
