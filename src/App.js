import { useRef, useState } from "react";
import { QrReader } from "@blackbox-vision/react-qr-reader";
import { useTorchLight } from "@blackbox-vision/use-torch-light";
import Troch from "./Troch";

function App() {
  const streamRef = useRef(null);
  const [show, setShow] = useState(true);
  const [data, setData] = useState("NULL");

  console.info(streamRef.current);

  const [on, toggle] = useTorchLight(streamRef.current, {
    debug: true,
    vibrate: 200,
  });

  return (
    <div className="App">
      <Troch />
      {/* <button onClick={() => setShow(!show)} style={{ marginBottom: 16 }}>
        {show ? "Unmount QR Reader" : "Mount QR Reader"}
      </button>
      {show && (
        <QrReader
          resolution={600}
          facingMode="environment"
          onLoad={({ stream }) => (streamRef.current = stream)}
          onScan={(decoded) => setData(decoded)}
          onError={(err) => console.info(err)}
        />
      )}
      <button onClick={toggle} style={{ marginTop: 16 }}>
        {on ? "Disable" : "Enable"} Torch Light
      </button>
      <div>
        <p>
          El valor del QR es:{" "}
          {typeof data === "object" ? JSON.stringify(data) : data}
        </p>
      </div> */}
    </div>
  );
}

export default App;
