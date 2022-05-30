import { useEffect, useRef, useState } from "react";
import BarcodeDecoder from "./BarcodeDecoder";
import JsQr from "./JsQr";
import Qr_Scanner from "./Qr_Scanner";
import ReactQrReader from './ReactQrReader'
import Torch from "./Torch";
const tiny = require("@ahuvia/tiny");

function App() {
  
  return (
    <div>
      {/* <ReactQrReader/> */}
      {/* <Torch/> */}
      {/* <BarcodeDecoder/> */}
      <JsQr/>
      {/* <Qr_Scanner/> */}
    </div>
  );
}

export default App;
