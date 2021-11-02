import React, { Component, useState } from "react";
import QrReader from "react-qr-scanner";

export default function ReactQrScanner() {
  const [delay, setdelay] = useState(100);
  const [result, setresult] = useState("");
  const rear = 'rear'
  const handleError = (err)=>{
      console.error(err)
  }
  const previewStyle = {
    height: 240,
    width: 240,
  }
  const constraints = {vidoe:{facingMode:"environment"}}
  return (
    <div>
      <h3>React-qr-acanner</h3>
      <QrReader
        delay={1}
        style={previewStyle}
        facingMode='environment'
        // constraints={constraints}
        onError={(err)=>handleError(err)}
        showViewFinder={false}
        onScan={(res) => {
          console.log(res)
           if(res)
           setresult(res)
        }}
      />
     <div>
       <br></br>
       <br></br>
       <br></br>
     <p>{result}</p>
     <h1>09:50</h1>
     </div>
    </div>
  );
}
