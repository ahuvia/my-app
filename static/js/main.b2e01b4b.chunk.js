(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,n){},143:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(10),r=n.n(a),o=(n(91),n(11),n(18),n(13)),s=(n(93),n(49),n(5));var d=function(){var e="mediaDevices"in navigator,t=Object(i.useState)(!1),n=Object(o.a)(t,2);return n[0],n[1],e&&navigator.mediaDevices.enumerateDevices().then((function(e){var t=e.filter((function(e){return"videoinput"===e.kind}));if(0===t.length)throw"No camera found on this device.";var n=t[t.length-1];navigator.mediaDevices.getUserMedia({video:{deviceId:n.deviceId,facingMode:["user","environment"],height:{ideal:1080},width:{ideal:1920}}}).then((function(e){var t=e.getVideoTracks()[0];new ImageCapture(t).getPhotoCapabilities().then((function(){var e=!1;document.querySelector(".switch").addEventListener("click",(function(){e=!e,t.applyConstraints({advanced:[{torch:e}]})}))}))}))})),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"switch",children:"On / Off"})})};n(101),n(180),n(176),n(177),n(178),n(75);n(3),n(138);n(143),n(81);n(144);var u=function(){var e=Object(i.useState)("Not Found"),t=Object(o.a)(e,2);return t[0],t[1],Object(i.useEffect)((function(){}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{id:"div1"}),Object(s.jsxs)("div",{id:"theater",children:[Object(s.jsx)("canvas",{id:"canvas"}),Object(s.jsxs)("label",{children:[Object(s.jsx)("br",{}),"Try to play me :)"]}),Object(s.jsx)("br",{})]}),Object(s.jsx)(d,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),v()},91:function(e,t,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.b2e01b4b.chunk.js.map