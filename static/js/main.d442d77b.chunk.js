(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,n){},143:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(10),i=n.n(r),a=(n(91),n(11)),s=n.n(a),d=n(18),u=n(13),l=(n(93),n(36)),j=n.n(l),h=n(4);n(101),n(180),n(176),n(177),n(178),n(75);n(3),n(138);n(143),n(81);function v(){var e=Object(o.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=1,i=1,a=289,l=289,v=window.constraints={audio:!1,video:{facingMode:"environment",width:289,height:289}};function b(e){var t=document.getElementById("videoo"),n=e.getVideoTracks();console.log("Got stream with constraints:",v),console.log("Using video device: ".concat(n[0].label)),t.srcObject=e;var o=document.createElement("canvas");o.width=350,o.height=350,setInterval((function(){o.getContext("2d").drawImage(t,0,0,window.screen.width/100*80,window.screen.width/100*80);var n=o.getContext("2d").getImageData(r,i,a,l).data,s=j()(n,a,l);s&&(console.log(s),c(s.data),e.getTracks().forEach((function(e){return e.stop()})))}),10)}function f(e){if("ConstraintNotSatisfiedError"===e.name){var t=v.video;p("The resolution ".concat(t.width.exact,"x").concat(t.height.exact," px is not supported by your device."))}else"PermissionDeniedError"===e.name&&p("Permissions have not been granted to use your camera and microphone, you need to allow the page access to your devices in order for the demo to work.");p("getUserMedia error: ".concat(e.name),e)}function p(e,t){document.querySelector("#errorMsg").innerHTML+="<p>".concat(e,"</p>"),"undefined"!==typeof t&&console.error(t)}function g(e){return m.apply(this,arguments)}function m(){return(m=Object(d.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia(v);case 3:b(e.sent),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(o.useEffect)((function(){g()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("video",{id:"videoo",autoPlay:!0,playsInline:!0}),Object(h.jsx)("button",{id:"showVideo",onClick:function(e){g(e)},children:"Open camera"}),n,Object(h.jsx)("div",{id:"errorMsg"})]})}n(144);var b=function(){var e=Object(o.useState)("Not Found"),t=Object(u.a)(e,2);return t[0],t[1],Object(o.useEffect)((function(){}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsx)("div",{id:"div1"}),Object(h.jsxs)("div",{id:"theater",children:[Object(h.jsx)("canvas",{id:"canvas"}),Object(h.jsxs)("label",{children:[Object(h.jsx)("br",{}),"Try to play me :)"]}),Object(h.jsx)("br",{})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),f()},91:function(e,t,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.d442d77b.chunk.js.map