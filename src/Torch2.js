import React from "react";

function Torch2() {
  function toggleFlash() {
    let that = this;
    const mediaStreamTrack = this.$refs.video.srcObject.getVideoTracks()[0];
    const imageCapture = new window.ImageCapture(mediaStreamTrack);
    imageCapture.getPhotoCapabilities().then(() => {
      if (that.tourch === false) {
        that.tourch = true;
        mediaStreamTrack.applyConstraints({
          advanced: [{ torch: true }],
        });
      } else if (that.tourch === true) {
        that.tourch = false;
        mediaStreamTrack.applyConstraints({
          advanced: [{ torch: false }],
        });
      }
    });
  }
  return (
    <div>
      <button onClick={toggleFlash}>flash</button>
    </div>
  );
}

export default Torch2;
