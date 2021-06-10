import React, { useEffect, useState } from "react";
import jsQR from "jsqr";
export default function JsQr() {
  const [qr, setqr] = useState("");
  const captureArea = {
    x: 1,
    y: 1,
    width: 349,
    height: 349,
  };
  useEffect(() => {
    webcam();
  }, []);

  const webcam = async () => {
    const constraints = {
      video: { facingMode: "environment", zoom: 2, tilt: 0, pan: 0 },
      //  , frameRate: { ideal: 24, max: 30 }
    };

    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    const videoTag = document.getElementById("videoo") as HTMLVideoElement;
    videoTag.autoplay = true;
    videoTag.setAttribute("height", "300");
    videoTag.setAttribute("width", "300");
    videoTag.setAttribute("autoplay", "");
    videoTag.setAttribute("muted", "");
    videoTag.setAttribute("playsinline", "");
    // if ("srcObject" in videoTag) {
    videoTag.srcObject = mediaStream;
    // } else {
    //   videoTag.src = URL.createObjectURL(mediaStream);
    // }

    // const canvasTag = document.getElementById("canvass");
    var canvasTag = document.createElement("canvas");
    canvasTag.width =  canvasTag.width;
    canvasTag.height =  canvasTag.height;
    setInterval(() => {
      let ctx = canvasTag.getContext("2d")!;
      ctx.drawImage(videoTag, 1, 1, canvasTag.width, canvasTag.height);
      // ctx.strokeStyle = "red";

      // ctx.strokeRect(
      //   captureArea.x,
      //   captureArea.y,
      //   captureArea.width,
      //   captureArea.height
      // );
    }, 100);

    setInterval(() => {
      let imageData = canvasTag
        .getContext("2d")!
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
        mediaStream.getVideoTracks()[0].stop()
        // mediaStream.getTracks().forEach(track => track.stop())
      }
    }, 100);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <video id="videoo" style={{ width: "auto" }}></video>
      <div>{qr}</div>
      {/* <canvas id="canvass" width="350" height="350"></canvas> */}
    </div>
  );
}
