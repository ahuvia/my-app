import React, { useState, useEffect } from "react";
import "./scanQrStyle.css";
// import { useHistory } from "react-router-dom";
// import { GPS } from "helpers/types";

import BarcodeScannerAndSelection from "./BarcodeScannerAndSelection";
import { DecodeHintType, BrowserMultiFormatReader } from "@zxing/library";
const QrReader = require("react-qr-reader");

function ScanQr(): any {
  const [result, setResult] = useState<string | null>("");
  // const [gps, setGPS] = useState<GPS>({ lat: 0, lon: 0 });
  const [scannedValue, setScannedValue] = useState<string>("");
  const deley = 100;
  // const history = useHistory();
  const hints = new Map();

  const formats = Array.from(Array(17).keys());
  hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);
  let codeReader: BrowserMultiFormatReader = new BrowserMultiFormatReader(
    hints
  );

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setGPS({
  //       lat: position.coords.latitude,
  //       lon: position.coords.longitude,
  //     });
  //   });
  // }, []);

  const handleError = (err: any) => {
    console.error(err);
  };

  const handleScan = (data: string) => {
    if (data !== null) {
      setResult(data);
      console.log("good");
      // history.push({
      //   pathname: "/destination",
      //   // search: '?query=abc',
      //   // state: { gps: gps },
      // });
    } else console.log("trying");
  };
  const previewStyle = {
    width: 250,
    display: "inline-block",
    marginTop: "0.7rem",
  };

  return (
    <div className="scan-qr">
      <h1 className="title">סרקו את קוד ה - QR</h1>
      <h2 className="description">קוד הQR נמצא באמצעי התחבורה עליו עליתם</h2>
      {/* <div className="corner">
        <QrReader
          delay={deley}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          showViewFinder={false}
        />
      </div> */}
      <BarcodeScannerAndSelection
        codeReader={codeReader}
        setSacanVal={(val: string) => {
          console.log(val);
          setScannedValue(val);
          handleScan(val);
        }}
      />
      <p>{result}</p>
      <h2 className="help">לחצו כאן לעזרה</h2>
    </div>
  );
}

export default ScanQr;
