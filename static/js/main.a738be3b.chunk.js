(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(7),r=n.n(a),o=(n(14),n(2)),s=(n(15),n(9)),u=n(1);var d=function(){var e="mediaDevices"in navigator,t=Object(i.useState)(!1),n=Object(o.a)(t,2);return n[0],n[1],e&&navigator.mediaDevices.enumerateDevices().then((function(e){var t=e.filter((function(e){return"videoinput"===e.kind}));if(0===t.length)throw"No camera found on this device.";var n=t[t.length-1];navigator.mediaDevices.getUserMedia({video:{deviceId:n.deviceId,facingMode:["user","environment"],height:{ideal:1080},width:{ideal:1920}}}).then((function(e){var t=e.getVideoTracks()[0];new ImageCapture(t).getPhotoCapabilities().then((function(){var e=!1;document.querySelector(".switch").addEventListener("click",(function(){e=!e,t.applyConstraints({advanced:[{torch:e}]})}))}))}))})),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"switch",children:"On / Off"})})};var v=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),n=Object(o.a)(t,2),c=(n[0],n[1],Object(i.useState)("No result")),a=Object(o.a)(c,2),r=(a[0],a[1],Object(s.a)(e.current)),v=Object(o.a)(r,2);return v[0],v[1],Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(d,{})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),h()}},[[26,1,2]]]);
//# sourceMappingURL=main.a738be3b.chunk.js.map