import React, { useEffect, useState } from "react";
import { Dialog, InputBase, Toolbar } from "@material-ui/core";
// import CropFreeIcon from "@material-ui/icons/CropFree";
import BarcodeScanner from "./BarcodeScanner";
import BarcodeScannerAndSelection from "./BarcodeScannerAndSelection";
import { DecodeHintType, BrowserMultiFormatReader } from "@zxing/library";
import useStyles from "./SearchBrStyle";

interface ISearchBarProps {
  searchValue: string;
  searchValueChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  scanValueChange?: (val: string) => void;
}

const ScanQr = (props: ISearchBarProps) => {
  const classes = useStyles();
  const [isScanDialogOpen, setIsScanDialogOpen] = useState<boolean>(false);
  const [scannedValue, setScannedValue] = useState<string>("");

  const hints = new Map();
  const formats = Array.from(Array(17).keys());
  hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);
  let codeReader: BrowserMultiFormatReader = new BrowserMultiFormatReader(
    hints
  );

  useEffect(() => {
    if (scannedValue !== "") {
      console.log("good");
      props.scanValueChange !== undefined &&
        props.scanValueChange(scannedValue);
      setIsScanDialogOpen(false);
    }
  }, [scannedValue]);

  return (
    <div>
      <Toolbar>
        <div className={classes.scan}>
          <div className={classes.searchIcon}>{/* <CropFreeIcon /> */}</div>
          <InputBase
            readOnly={true}
            placeholder="סרוק"
            classes={{
              root: classes.inputRoot,
              input: classes.inputScanBar,
            }}
            onClick={(e) => setIsScanDialogOpen(true)}
          />
          {/* <Dialog
            open={isScanDialogOpen}
            onClose={() => {
              setIsScanDialogOpen(false);
              codeReader.reset();
            }}
            aria-labelledby="simple-dialog-title"
          > */}
          <BarcodeScannerAndSelection
            codeReader={codeReader}
            setSacanVal={(val: string) => setScannedValue(val)}
          />
          {/* </Dialog> */}
        </div>
      </Toolbar>
    </div>
  );
};

export default ScanQr;
