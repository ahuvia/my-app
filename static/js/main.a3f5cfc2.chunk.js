(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(7),o=n.n(i),r=(n(20),n(2)),s=n(0);var d=n(6),u=n.n(d),l=n(8),v=n(9),h=n.n(v);function g(){var t=Object(a.useState)(!1),e=Object(r.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)("\u05d6\u05d5\u05d6\u05d5"),o=Object(r.a)(i,2),d=o[0],v=o[1],g=1,j=1,p=289,b=289;Object(a.useEffect)((function(){m()}),[]);var m=function(){var t=Object(l.a)(u.a.mark((function t(){var e,a,i,o,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return{video:{facingMode:"environment",zoom:2,width:400,height:400,optimizationMode:"detail",frameRate:90},advanced:[{torch:n}]},t.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:!0});case 3:e=t.sent,a=e.getVideoTracks()[0],console.log(a.getSettings()),(i=document.getElementById("videoo")).autoplay=!0,i.setAttribute("autoplay","true"),i.setAttribute("muted","true"),i.setAttribute("playsinline","true"),i.srcObject=e,function(){var t=!1;t=!t,document.getElementById("video").srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:t}]})},o=new ImageCapture(a),o.getPhotoCapabilities().then((function(){var t=!1;document.querySelector(".switch").addEventListener("click",(function(){t=!t,c(!n),a.applyConstraints({advanced:[{torch:t}]})}))})),(r=document.createElement("canvas")).width=350,r.height=350,setInterval((function(){r.getContext("2d").drawImage(i,0,0,window.screen.width/100*80,window.screen.width/100*80);var t=r.getContext("2d").getImageData(g,j,p,b).data,e=h()(t,p,b);e&&(console.log(e),v(e.data))}),100);case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.jsxs)("div",{style:{textAlign:"center"},children:[Object(s.jsx)("h3",{children:"JSQR"}),Object(s.jsx)("video",{id:"videoo",autoPlay:!0,playsInline:!0,muted:!0,style:{width:"auto"}}),Object(s.jsx)("button",{className:"switch",children:"\u05e4\u05e0\u05e1"}),Object(s.jsx)("div",{children:d})]})}var j=n(10),p=n(11),b=n(4),m=n(15),f=n(14),w=n(12),O=n.n(w);a.Component;n(30);var y=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(g,{})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),x()}},[[32,1,2]]]);
//# sourceMappingURL=main.a3f5cfc2.chunk.js.map