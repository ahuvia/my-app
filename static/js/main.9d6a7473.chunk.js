(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(6),r=n.n(c),o=(n(12),n(2)),s=n(7),d=n(1);var u=function(){var e="mediaDevices"in navigator,t=Object(i.useState)(!1),n=Object(o.a)(t,2);return n[0],n[1],e&&navigator.mediaDevices.enumerateDevices().then((function(e){var t=e.filter((function(e){return"videoinput"===e.kind}));if(0===t.length)throw"No camera found on this device.";var n=t[t.length-1];navigator.mediaDevices.getUserMedia({video:{deviceId:n.deviceId,facingMode:["user","environment"],height:{ideal:1080},width:{ideal:1920}}}).then((function(e){var t=e.getVideoTracks()[0];new ImageCapture(t).getPhotoCapabilities().then((function(){document.querySelector(".switch").addEventListener("click",(function(){0==t.applyConstraints.advanced.torch?t.applyConstraints({advanced:[{torch:!0}]}):t.applyConstraints({advanced:[{torch:!1}]})}))}))}))})),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"switch",children:"On / Off"})})};var v=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(!0),n=Object(o.a)(t,2),a=(n[0],n[1],Object(i.useState)("NULL")),c=Object(o.a)(a,2);c[0],c[1],console.info(e.current);var r=Object(s.a)(e.current,{debug:!0,vibrate:200}),v=Object(o.a)(r,2);return v[0],v[1],Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(u,{})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.9d6a7473.chunk.js.map