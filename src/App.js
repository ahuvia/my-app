import { useEffect, useRef, useState } from "react";
import ReactQrReader from './ReactQrReader'
import Torch from "./Torch";
const tiny = require("@ahuvia/tiny");

function App() {
  
  return (
    <div>
      {/* <ReactQrReader/> */}
      <Torch/>
    </div>
  );
}

export default App;
