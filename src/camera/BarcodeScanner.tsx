import { Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner2";

interface IBarcodeScannerProps {
  setSacanVal: (val: string) => void;
}

function BarcodeScanner(props: IBarcodeScannerProps) {
  const [data, setData] = React.useState("Not Found");

  useEffect(() => {
    return () => {
      setData("Not Found");
    };
  }, []);

  return (
    <>
      <BarcodeScannerComponent
        width={300}
        height={200}
        onUpdate={(err, result) => {
          if (result !== undefined) {
            setData(result.toString());
            props.setSacanVal(result.toString());
          } else setData("Not Found");
        }}
        inverse={true}
      />
      <Typography variant="h5" style={{ textAlign: "center" }}>
        סריקת ברקוד
      </Typography>
    </>
  );
}

export default BarcodeScanner;
