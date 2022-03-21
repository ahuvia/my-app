import { useEffect, useRef, useState } from "react";
import BarcodeDecoder from "./BarcodeDecoder";
import JsQr from "./JsQr";
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
    </div>
  );
}

export default App;
