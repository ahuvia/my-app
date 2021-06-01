import React, { useEffect, useState } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";

export default function ZxingBrower() {
  const [result, setresult] = useState("initialState");

  useEffect(() => {
    aw();
  }, []);
  const aw = async () => {
    const codeReader = new BrowserQRCodeReader();
    // const videoInputDevices = await BrowserQRCodeReader.listVideoInputDevices();
    // console.log(videoInputDevices);
  
    // const selectedDeviceId = videoInputDevices[0].deviceId;
    // alert(selectedDeviceId);
      codeReader.decodeFromVideoDevice(undefined, "vi", (result, err) => {
      if (result) {
        // properly decoded qr code
        console.log("Found QR code!", result);
        setresult(result);
      }
    });
  };
  return (
    <div>
        <div>
      <video id="vi" width="300" ></video>
        </div>

      {result}
    </div>
  );
}
