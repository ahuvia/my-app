import { useEffect, useRef, useState } from "react";
import ReactQrReader from './ReactQrReader'
const tiny = require("@ahuvia/tiny");

function App() {
  
  return (
    <div>
      <ReactQrReader/>
    </div>
  );
}

export default App;
