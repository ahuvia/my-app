import React, { useEffect, useState } from "react";
import jsQR from "jsqr";
export default function Camera() {
  const [qr, setqr] = useState('')
  const captureArea = {
    x: 1,
    y: 1,
    width: 289,
    height: 289,
  };
  const constraints = window.constraints =  {
    audio: false,
    video: { facingMode: ( "environment"? "environment": "user"),width: 289,
    height: 289},
  };
  function handleSuccess(stream) {
    const video = document.getElementById("videoo");
    const videoTracks = stream.getVideoTracks();
    console.log("Got stream with constraints:", constraints);
    console.log(`Using video device: ${videoTracks[0].label}`);

    //window.stream = stream; // make variable available to browser console
    video.srcObject = stream;
    var canvasTag = document.createElement("canvas");
    canvasTag.width = 350;
    canvasTag.height = 350;
    setInterval(() => {
      let ctx = canvasTag.getContext("2d");
   
      ctx.drawImage(
        video,
        0,
        0,
        (window.screen.width / 100) * 80,
        (window.screen.width / 100) * 80
      );
    
      let imageData = canvasTag
        .getContext("2d")
        .getImageData(
          captureArea.x,
          captureArea.y,
          captureArea.width,
          captureArea.height
        ).data;

      // parsing qr code from canvas
      const qrCode = jsQR(imageData, captureArea.width, captureArea.height);

      if (qrCode) {
        console.log(qrCode);
        setqr(qrCode.data);
        // stream.getVideoTracks()[0].stop();
        stream.getTracks().forEach(track => track.stop())
      }
    }, 10);
  }

  function handleError(error) {
    if (error.name === "ConstraintNotSatisfiedError") {
      const v = constraints.video;
      errorMsg(
        `The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`
      );
    } else if (error.name === "PermissionDeniedError") {
      errorMsg(
        "Permissions have not been granted to use your camera and " +
          "microphone, you need to allow the page access to your devices in " +
          "order for the demo to work."
      );
    }
    errorMsg(`getUserMedia error: ${error.name}`, error);
  }

  function errorMsg(msg, error) {
    const errorElement = document.querySelector("#errorMsg");
    errorElement.innerHTML += `<p>${msg}</p>`;
    if (typeof error !== "undefined") {
      console.error(error);
    }
  }

  async function init(e) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
      //e.target.disabled = true;
    } catch (e) {
      handleError(e);
    }
  }
  useEffect(() => {
    init()
  }, []);
  

  // document.querySelector('#showVideo').addEventListener('click', e => init(e));
  return (
    <div>
      <video id="videoo" autoPlay playsInline></video>
      <button
        id="showVideo"
        onClick={(e) => {init(e)}}>
        Open camera
      </button>
      {qr}
      <div id="errorMsg"></div>
    </div>
  );
}
