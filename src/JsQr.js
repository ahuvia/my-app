import React, { useEffect, useState } from "react";
import jsQR from "jsqr";
export default function JsQr() {
  const videoTag = document.getElementById("videoo");
  const canvasTag = document.getElementById("canvass");
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
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment", zoom:3   },
      //, frameRate: { ideal: 24, max: 30 }
    });
    const videoTag = document.getElementById("videoo");
    videoTag.autoplay = true;
    videoTag.height = 350;
    videoTag.width = 350;
    videoTag.setAttribute("autoplay", "");
    videoTag.setAttribute("muted", "");
    videoTag.setAttribute("playsinline", "");
    if ("srcObject" in videoTag) {
      videoTag.srcObject = mediaStream;
    } else {
      videoTag.src = URL.createObjectURL(mediaStream);
    }

    // const canvasTag = document.getElementById("canvass");
    var canvasTag = document.createElement("canvas");
    canvasTag.width = 350;
    canvasTag.height = 350;
    setInterval(() => {
      let ctx = canvasTag.getContext("2d");
      ctx.drawImage(videoTag, 0, 0, 350, 350);
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
        // router.redirect(Router.pages.result, qrCode);
        // let resultPage = document.querySelector('#result .qr-code-data');
        // resultPage.innerHTML = qrCode.data;
      }
    }, 100);
  };

  return (
    <div style={{ textAlign: "-webkit-center" }}>
      <video id="videoo" width="350" height="350" autoPlay></video>
      <div>{qr}</div>
      <canvas id="canvass" width="350" height="350"></canvas>
    </div>
  );
}
