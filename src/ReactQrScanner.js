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
      <h3>React-qr-acanner</h3>
      <QrReader
        delay={delay}
        style={previewStyle}
        // facingMode='front'
        onError={(err)=>handleError(err)}
        lagacyMode={true}
        onScan={(res) => {
          console.log(res)
          if(res)
           setresult(res.text)
        }}
      />
      <p>{result}u</p>
      <di>דדדדד</di>
    </div>
  );
}
