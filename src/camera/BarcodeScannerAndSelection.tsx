import { Select, MenuItem, FormControl, Dialog } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { DecodeHintType, BrowserMultiFormatReader } from "@zxing/library";
// yimport ReactDOM from "react-dom";
import axios from "axios";

interface IBarcodeScannerProps {
  codeReader: BrowserMultiFormatReader;
  setSacanVal: (val: string) => void;
}

function BarcodeScannerAndSelection(props: IBarcodeScannerProps) {
  const [selectedDeviceId, setselectedDeviceId] = React.useState("");
  const [selectedDevices, setselectedDevices] = React.useState([""]);
  const [isScanDialogOpen, setIsScanDialogOpen] = useState(false);
  const [indexCanera, setIndexCanera] = useState("");

  const getIndexCamera = async () => {
    const index = await (
      await axios.get(
        `${process.env.REACT_APP_API_URL}passengers/checkPassenger/123456788`
      )
    ).data;
    console.log(index[0].idCamera);
    setIndexCanera(index[0].idCamera);
    return index[0].idCamera;
  };

  useEffect(() => {
    async function fetch() {
      await props.codeReader.listVideoInputDevices().then(async (val) => {
        setselectedDevices(val.map((elem) => elem.deviceId));
        console.log(val);
        setselectedDeviceId(val[0].deviceId);
        // console.log("deviceId", val[0].deviceId, "deviceId", val[1].deviceId);
      });

      await props.codeReader.decodeFromVideoDevice(
        selectedDeviceId,
        "video",
        (result, err) => {
          if (result) {
            // console.log( result);
            props.setSacanVal(result.toString());
            props.codeReader.reset();
          }
        }
      );
    }
    fetch();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <video id="video" width="300" height="300"></video>
      </div>
      <div onClick={(e) => setIsScanDialogOpen(true)}>המצלמה לא עובדת?</div>
      <Dialog
        open={isScanDialogOpen}
        onClose={() => {
          setIsScanDialogOpen(false);
        }}
        aria-labelledby="simple-dialog-title"
      >
        <FormControl variant="outlined" style={{ width: "16rem" }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            lang="he"
            value={selectedDeviceId}
            onChange={async (event: React.ChangeEvent<{ value: unknown }>) => {
              props.codeReader.reset();
              setselectedDeviceId(event.target.value as string);
              props.codeReader.reset();
              await props.codeReader.decodeFromVideoDevice(
                selectedDeviceId,
                "video",
                (result, err) => {
                  if (result) {
                    // console.log(result);
                    props.setSacanVal(result.toString());
                    props.codeReader.reset();
                  }
                }
              );
            }}
          >
            {selectedDevices.map((device, index) => (
              <MenuItem key={`menuitem${index}`} value={device}>
                מצלמה {index + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Dialog>
    </div>
  );
}

export default BarcodeScannerAndSelection;
