(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),r=n.n(i),o=(n(12),n(4)),s=n(6),d=n(3),u=n(7),l=n.n(u),v=n(0);function h(){var e,t=(new Date).toLocaleString(),n=Object(c.useState)(!1),a=Object(d.a)(n,2),i=a[0],r=a[1],u=Object(c.useState)("\u05d6\u05d5\u05d6\u05d5\u05d5"),h=Object(d.a)(u,2),g=h[0],b=h[1],j=1,p=1,m=289,f=289;Object(c.useEffect)((function(){O()}),[]);var O=function(){var t=Object(s.a)(Object(o.a)().mark((function t(){var n,c,a,s,d;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={video:{facingMode:"environment",zoom:1,width:400,height:400,optimizationMode:"detail",frameRate:90},advanced:[{torch:i}]},t.prev=1,t.next=4,navigator.mediaDevices.getUserMedia(n);case 4:e=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),alert("\u05dc\u05d0 \u05d4\u05e6\u05dc\u05d7\u05e0\u05d5 \u05dc\u05d2\u05e9\u05ea \u05dc\u05de\u05e6\u05dc\u05de\u05d4"+t.t0.message);case 10:c=e.getVideoTracks()[0],console.log(c.getSettings()),(a=document.getElementById("videoo")).autoplay=!0,a.setAttribute("autoplay",!0),a.setAttribute("muted",!0),a.setAttribute("playsinline",!0),a.srcObject=e,function(){var e=!1;e=!e,document.getElementById("video").srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:e}]})},s=new ImageCapture(c),s.getPhotoCapabilities().then((function(){var e=!1;document.querySelector(".switch").addEventListener("click",(function(){e=!e,r(!i),c.applyConstraints({advanced:[{torch:e}]})}))})),(d=document.createElement("canvas")).width=350,d.height=350,setInterval((function(){d.getContext("2d").drawImage(a,0,0,window.screen.width/100*80,window.screen.width/100*80);var e=d.getContext("2d").getImageData(j,p,m,f).data,t=l()(e,m,f);t&&(console.log(t),b(t.data))}),100);case 25:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{style:{textAlign:"center"},children:[Object(v.jsx)("div",{children:t}),Object(v.jsx)("video",{id:"videoo",style:{width:"auto"}}),Object(v.jsx)("button",{className:"switch",children:"\u05e4\u05e0\u05e1"}),Object(v.jsx)("div",{children:g})]})}n(14);var g=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(h,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(g,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.1d39dce6.chunk.js.map