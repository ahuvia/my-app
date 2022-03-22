import React, { useEffect, useState } from "react";
import jsQR from "jsqr";
export default function JsQr() {
  const [torch, setTorch] = useState(false)
  const [qr, setqr] = useState("זוזוו");
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
      video: { 
        facingMode: ( "environment"? "environment": "user"),
         zoom: 2.0,
         width: 400,//{ min: 1024, ideal: 1280, max: 1920 },
         height: 400,// { min: 576, ideal: 720, max: 1080 },
      optimizationMode:'detail',
      frameRate: 90},
      advanced: [{torch: torch}]
    };

    const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: false, video: {facingMode:"environment"}});
    const track = mediaStream.getVideoTracks()[0];
    console.log( track.getSettings())
    
    const videoTag = document.getElementById("videoo") as HTMLVideoElement;
    videoTag.autoplay = true;
    // videoTag.height = 290;
    // videoTag.width = 290;
    //@ts-ignore
    videoTag.setAttribute("autoplay", true);
    //@ts-ignore
    videoTag.setAttribute("muted", true);
    //@ts-ignore
    videoTag.setAttribute("playsinline", true);
    // if ("srcObject" in videoTag) {
    videoTag.srcObject = mediaStream;
    
    const offOn =()=>{
      let state = false;
      state = !state;
      //@ts-ignore
         document.getElementById('video').srcObject.getVideoTracks()[0].applyConstraints({ advanced: [{ torch: state }] });
    }
  
   //@ts-ignore
   const imageCapture = new ImageCapture(track);
   const photoCapabilities = imageCapture
     .getPhotoCapabilities()
     .then(() => { let state = false;
      //let there be light!
      const btn = document.querySelector(".switch") as HTMLElement;
      btn.addEventListener("click", function () {
        state = !state;
         //@ts-ignore
        // document.getElementById('video').srcObject.getVideoTracks()[0].applyConstraints({ advanced: [{ torch: state }] });
      setTorch(!torch)
        track.applyConstraints({
          //@ts-ignore
          advanced: [{ torch: state }],
        });
      });
    });
  // track.applyConstraints({
  //    //@ts-ignore
  //    advanced: [{ torch: torch }],
  //  });
  
 
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
        // mediaStream.getVideoTracks()[0].stop();
        // mediaStream.getTracks().forEach(track => track.stop())
      }
    }, 100);
  };


  return (
    <div style={{ textAlign: "center" }}>
      <div>22/03/22 09:59</div>
      <video id="videoo" 
       style={{ width: "auto" }}
       ></video>
       <button  className="switch" >פנס</button>
       <div>{qr}</div>
    </div>
  );
}
