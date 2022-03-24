import React, { useEffect, useState } from 'react'

export default function Qr_Scanner() {
    let mediaStream : MediaStream;
    const [devices, setDevices] = useState([]);
    const [cameraId, setcameraId] = useState('')
    useEffect(() => {
        navigator.mediaDevices.enumerateDevices()
        .then((devices) => {
          const videoSelect : any = []
          devices.forEach((device) => {
            if (device.kind === 'videoinput') {
              videoSelect.push(device)
            }
          })
          return videoSelect
        })
        .then((devices) => {
            setcameraId(devices[0].deviceId)
            setDevices(devices)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [])

    useEffect(() => {
        video()
    }, [setcameraId])
    

    const video = async ()=>{
        mediaStream = await navigator.mediaDevices.getUserMedia({video: {deviceId : cameraId}});
          //@ts-ignore
        document.getElementById('video').srcObject.getVideoTracks()[0].applyConstraints({ video: {deviceId : cameraId}});
        const videoTag = document.getElementById("video") as HTMLVideoElement;
    videoTag.autoplay = true;
    videoTag.height = 290;
    videoTag.width = 290;
    //@ts-ignore
    videoTag.setAttribute("autoplay", true);
    //@ts-ignore
    videoTag.setAttribute("muted", true);
    //@ts-ignore
    videoTag.setAttribute("playsinline", true);
    // if ("srcObject" in videoTag) {
    videoTag.srcObject = mediaStream;
    }
    
  return (
    <div>
        <div>12:00</div>
          <select
              onChange={e => {
                const value = e.target.value
                setcameraId( value)
                alert(value)
              }}
            >
              {devices.map((deviceInfo : any, index) => (
                <React.Fragment key={deviceInfo.deviceId}>
                    <option value={deviceInfo.deviceId}>{deviceInfo.label || `camera ${index}`}</option>
                    </React.Fragment>
              ))}
            </select>
            <video id='video'></video>
    </div>
  )
}
