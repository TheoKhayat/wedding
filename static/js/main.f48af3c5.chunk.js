(this.webpackJsonpwedding=this.webpackJsonpwedding||[]).push([[0],{34:function(t,e,n){"use strict";n.r(e);var o=n(1),s=n.n(o),r=n(8),i=n.n(r),a=n(5),c=n(9),h=n(10),l=n(13),u=n(12),d=n(11),g=n.n(d),j=n(0),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).settings={autoplay:!0,dots:!1,infinite:!0,speed:5500,autoplayspeed:1500,slidesToShow:3,slidesToScroll:1},t.interval=null,t.state={photos:null,gettingPhotos:!0},t.getPhotos=function(){var e=new URLSearchParams(window.location.search),n=e.has("refresh")?e.get("refresh"):15e7;console.log("getting photos..."),t.state.gettingPhotos||t.setState({gettingPhotos:!0}),fetch("https://y5gfm8ypt6.execute-api.us-east-1.amazonaws.com/default/weddingPhoto").then((function(t){return t.json()})).then((function(e){return t.setState({photos:e,gettingPhotos:!1})})).catch((function(t){return console.log("e >>",t)})),t.interval&&clearInterval(t.interval),t.interval=setInterval((function(){return t.getPhotos()}),n)},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getPhotos()}},{key:"render",value:function(){return!this.state.photos||this.state.gettingPhotos?Object(j.jsx)("p",{children:"Getting photos..."}):Object(j.jsx)(g.a,Object(a.a)(Object(a.a)({},this.settings),{},{children:this.state.photos.map((function(t){return function(t){var e=t.url,n=t.sender,o=t.urlType,s=new Date(t.receivedAt).toLocaleTimeString("en-US",{timeZone:"America/New_York"}),r={width:"31vw",height:"auto",maxWidth:"31vw",maxHeight:"91vh",marginTop:"50vh",transform:"translate3d(0, -50%, 0)"};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{style:{textAlign:"center",fontSize:"24px"},children:[Object(j.jsx)("b",{children:n})," @ ".concat(s)]},"sender_"+n),o.startsWith("image/")?Object(j.jsx)("img",{src:e,alt:"alt_"+e,style:r},e):Object(j.jsx)("video",{autoPlay:!0,muted:!0,style:r,children:Object(j.jsx)("source",{src:e,type:o})})]},"div_"+e)}(t)}))}))}}]),n}(s.a.Component);var v=function(){return Object(j.jsx)(p,{})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f48af3c5.chunk.js.map