import React, { useState } from "react";

function Troch() {
  //Test browser support
  const SUPPORTS_MEDIA_DEVICES = "mediaDevices" in navigator;
  const [isOn, setIsOn] = useState(false);
  if (SUPPORTS_MEDIA_DEVICES) {
    //Get the environment camera (usually the second one)
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const cameras = devices.filter((device) => device.kind === "videoinput");

      if (cameras.length === 0) {
        throw "No camera found on this device.";
      }
      const camera = cameras[cameras.length - 1];

      // Create stream and get video track
      navigator.mediaDevices
        .getUserMedia({
          video: {
            deviceId: camera.deviceId,
            facingMode: ["user", "environment"],
            height: { ideal: 1080 },
            width: { ideal: 1920 },
          },
        })
        .then((stream) => {
          const track = stream.getVideoTracks()[0];

          //Create image capture object and get camera capabilities
          const imageCapture = new ImageCapture(track);
          const photoCapabilities = imageCapture
            .getPhotoCapabilities()
            .then(() => {
              //todo: check if camera has a torch

              //let there be light!
              const btn = document.querySelector(".switch");
              btn.addEventListener("click", function () {
                if (isOn) {
                  setIsOn(false);
                  track.applyConstraints({
                    advanced: [{ torch: false }],
                  });
                } else {
                  setIsOn(true);
                  track.applyConstraints({
                    advanced: [{ torch: true }],
                  });
                }
              });
            });
        });
    });

    //The light will be on as long the track exists
  }

  return (
    <div>
      <button className="switch">On / Off</button>
    </div>
  );
}

export default Troch;
