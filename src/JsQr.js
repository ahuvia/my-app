import React, { useEffect, useState } from "react";
import jsQR from "jsqr";
export default function JsQr() {
  const videoTag = document.getElementById("videoo");
  const canvasTag = document.getElementById("canvass");
  const [qr, setqr] = useState("");
  const captureArea = {
    x: 100,
    y: 60,
    width: 120,
    height: 120,
  };
  useEffect(() => {
    webcam();
  }, []);

  const webcam = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
    });
    const videoTag = document.getElementById("videoo");
    if ("srcObject" in videoTag) {
      videoTag.srcObject = mediaStream;
    } else {
      videoTag.src = URL.createObjectURL(mediaStream);
    }

    const canvasTag = document.getElementById("canvass");
    setInterval(() => {
      let ctx = canvasTag.getContext("2d");
      ctx.drawImage(videoTag, 0, 0, 320, 240);
      ctx.strokeStyle = "red";

      ctx.strokeRect(
        captureArea.x,
        captureArea.y,
        captureArea.width,
        captureArea.height
      );
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
    <div>
      <canvas id="canvass" width="320" height="240"></canvas>
      {qr}
      <video id="videoo" width="320" height="240" autoPlay></video>
    </div>
  );
}
