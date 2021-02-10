import { useRef, useState } from "react";
import QrReader from "react-qr-reader";
import { useTorchLight } from "@blackbox-vision/use-torch-light";

function App() {
  const streamRef = useRef(null);

  const [error, setError] = useState(null);
  const [data, setData] = useState("No result");

  const [on, toggle] = useTorchLight(on);

  const setRef = ({ stream }) => {
    streamRef.current = stream;
  };

  return (
    <>
      לא עובד k
      <QrReader
        onLoad={setRef}
        onScan={setData}
        onError={setError}
        style={{ width: "100%" }}
      />
      <button onClick={toggle}>{on ? "Disable Torch" : "Enable Torch"}</button>
      <p>{JSON.stringify(data, null, 2)}</p>
      <p>{JSON.stringify(error, null, 2)}</p>
    </>
  );
}

export default App;
