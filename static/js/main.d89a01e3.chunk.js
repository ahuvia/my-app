(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,n){},143:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(10),o=n.n(c),s=(n(91),n(11)),r=n.n(s),d=n(18),u=n(16),j=(n(93),n(49)),b=n.n(j),l=n(5);function v(){var e=Object(i.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=1,o=1,s=289,j=289;Object(i.useEffect)((function(){v()}),[]);var v=function(){var e=Object(d.a)(r.a.mark((function e(){var t,n,i,d,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={video:{facingMode:"environment",zoom:2,width:{min:1024,ideal:1280,max:1920},height:{min:576,ideal:720,max:1080},optimizationMode:"detail",frameRate:90}},e.next=3,navigator.mediaDevices.getUserMedia(t);case 3:n=e.sent,i=n.getVideoTracks()[0],console.log(i.getSettings()),i.applyConstraints({advanced:[{}]}),(d=document.getElementById("videoo")).autoplay=!0,d.setAttribute("autoplay",""),d.setAttribute("muted",""),d.setAttribute("playsinline",""),d.srcObject=n,(u=document.createElement("canvas")).width=350,u.height=350,setInterval((function(){u.getContext("2d").drawImage(d,0,0,window.screen.width/100*80,window.screen.width/100*80);var e=u.getContext("2d").getImageData(c,o,s,j).data,t=b()(e,s,j);t&&(console.log(t),a(t.data),n.getVideoTracks()[0].stop())}),100);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{style:{textAlign:"center"},children:[Object(l.jsx)("video",{id:"videoo",style:{width:"auto"}}),Object(l.jsx)("div",{children:n})]})}n(101),n(180),n(176),n(177),n(178),n(75);n(3),n(138);n(143),n(81);n(144);var g=function(){var e=Object(i.useState)("Not Found"),t=Object(u.a)(e,2);return t[0],t[1],Object(i.useEffect)((function(){}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{}),Object(l.jsx)(v,{}),Object(l.jsx)("div",{id:"div1"}),Object(l.jsxs)("div",{id:"theater",children:[Object(l.jsx)("canvas",{id:"canvas"}),Object(l.jsxs)("label",{children:[Object(l.jsx)("br",{}),"Try to play me :)"]}),Object(l.jsx)("br",{})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),f()},91:function(e,t,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.d89a01e3.chunk.js.map