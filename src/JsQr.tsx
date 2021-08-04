import React, { useEffect, useState } from "react";
import jsQR from "jsqr";
export default function JsQr() {
  const [qr, setqr] = useState("");
  const captureArea = {
    x: 1,
    y: 1,
    width: 289,
    height: 289,
  };
  useEffect(() => {
    webcam();
  }, []);

  const webcam = async () => {
    const constraints = {
      video: { facingMode: "environment", zoom: 2.0,
      width: {ideal: 1280}, height: {ideal: 720},
      frameRate: 90}
    };

    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    const track = mediaStream.getVideoTracks()[0];
    console.log( track.getSettings())
    track.applyConstraints({ advanced: [{}] });
    const videoTag = document.getElementById("videoo") as HTMLVideoElement;
    videoTag.autoplay = true;
    videoTag.height = 290;
    videoTag.width = 290;
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
    canvasTag.width = 350;
    canvasTag.height = 350;
    setInterval(() => {
      let ctx = canvasTag.getContext("2d")!;
      //   console.log(window.screen.width,window.screen.height)
      // console.log(window.screen.width/100*80,1,window.screen.height/100*50)
      ctx.drawImage(
        videoTag,
        0,
        0,
        (window.screen.width / 100) * 80,
        (window.screen.width / 100) * 80
      );
      // ctx.drawImage(videoTag, 1, 1, 349, 349);
      // ctx.strokeStyle = "red";

      // ctx.strokeRect(
      //   captureArea.x,
      //   captureArea.y,
      //   captureArea.width,
      //   captureArea.height
      // );
    // }, 100);

    // setInterval(() => {
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
        mediaStream.getVideoTracks()[0].stop();
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
