(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(t,e,n){},143:function(t,e,n){},145:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(10),o=n.n(i),r=(n(91),n(11)),s=n.n(r),d=n(18),u=n(15),j=(n(93),n(49)),b=n.n(j),l=n(5);function v(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],a=(e[1],Object(c.useState)("")),i=Object(u.a)(a,2),o=i[0],r=i[1],j=1,v=1,g=289,h=289;Object(c.useEffect)((function(){f()}),[]);var f=function(){var t=Object(d.a)(s.a.mark((function t(){var e,c,a,i,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={video:{facingMode:"environment",zoom:2,width:700,height:700,optimizationMode:"detail",frameRate:90},advanced:[{torch:n}]},t.next=3,navigator.mediaDevices.getUserMedia(e);case 3:c=t.sent,a=c.getVideoTracks()[0],console.log(a.getSettings()),(i=document.getElementById("videoo")).autoplay=!0,i.setAttribute("autoplay",""),i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.srcObject=c,function(){var t=!1;t=!t,document.getElementById("video").srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:t}]})},(o=document.createElement("canvas")).width=350,o.height=350,setInterval((function(){o.getContext("2d").drawImage(i,0,0,window.screen.width/100*80,window.screen.width/100*80);var t=o.getContext("2d").getImageData(j,v,g,h).data,e=b()(t,g,h);e&&(console.log(e),r(e.data),c.getVideoTracks()[0].stop())}),100);case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=!1;t=!t,document.getElementById("video").srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:t}]})};return Object(l.jsxs)("div",{style:{textAlign:"center"},children:[Object(l.jsx)("video",{id:"videoo",style:{width:"auto"}}),Object(l.jsx)("button",{onClick:function(){return O},className:"switch",children:"\u05e4\u05e0\u05e1\u05e1\u05e1"}),Object(l.jsx)("div",{children:o})]})}n(101),n(180),n(176),n(177),n(178),n(75);n(3),n(138);n(143),n(81);n(144);var g=function(){var t=Object(c.useState)("Not Found"),e=Object(u.a)(t,2);return e[0],e[1],Object(c.useEffect)((function(){}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{}),Object(l.jsx)("div",{id:"div1"}),Object(l.jsxs)("div",{id:"theater",children:[Object(l.jsx)("canvas",{id:"canvas"}),Object(l.jsxs)("label",{children:[Object(l.jsx)("br",{}),"Try to play me :)"]}),Object(l.jsx)("br",{})]})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),i(t),o(t)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),h()},91:function(t,e,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.15e6d6f6.chunk.js.map