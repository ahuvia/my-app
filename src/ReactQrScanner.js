import React, { Component, useState } from "react";
import QrReader from "react-qr-scanner";

export default function ReactQrScanner() {
  const [delay, setdelay] = useState(100);
  const [result, setresult] = useState("");

  const handleError = (err)=>{
      console.error(err)
  }
  const previewStyle = {
    height: 240,
    width: 320,
  }
  return (
    <div>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={(err)=>handleError(err)}
        facingMode={"rear"}
        onScan={(res) => {
          console.log(res)
          if(res)
           setresult(res.text)
        }}
      />
      <p>{result}</p>
    </div>
  );
}
