import { useRef, useState } from "react";
import QrReader from "react-scan-qr";
// import { useTorchLight } from "@blackbox-vision/use-torch-light";
// import Torch from "./Torch";
// import ScanQr from "./camera/ScanQr";

// import BarcodeScannerComponent from "react-webcam-barcode-scanner2";
import React from "react";
const tiny = require("@ahuvia/tiny");

function App() {
  const [data, setData] = useState("Not Found");

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      {tiny("אהוביה שני")}
      {/* <ScanQr /> */}
      {/* <Torch /> */}
      <QrReader
        delay={300}
        onScan={(data) => setData(data)}
        onError={handleError(data)}
        style={{ width: "90%" }}
      />
      {data}

      {/* <button onClick={toggle}>{on ? "Disable Torch" : "Enable Torch"}</button> */}
      {/* <p>{JSON.stringify(data, null, 2)}</p>
      <p>{JSON.stringify(error, null, 2)}</p> */}
      {/* <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      // <p>{data}</p> */}
    </div>
  );
}

export default App;
