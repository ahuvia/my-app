import React from 'react'
import { useState } from 'react';

export default function BarcodeDecoder() {
    const [view, setView] = useState('second')
    if (!('BarcodeDetector' in window)) {
        setView('Barcode Detector is not supported by this browser.');
      } else {
        setView('Barcode Detector supported!');
      
        // create new detector
        // var barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});
      }
  return (
    <div>{view}</div>
  )
}
