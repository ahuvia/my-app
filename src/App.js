import { useRef, useState } from "react";
import QrReader from "react-qr-reader";
import { useTorchLight } from "@blackbox-vision/use-torch-light";
import Troch from "./Troch";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import Torch from "./Torch";

function App() {
  const [data, setData] = React.useState("Not Found");

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
    </>
  );
}

export default App;
