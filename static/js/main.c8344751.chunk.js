(this.webpackJsonpwedding=this.webpackJsonpwedding||[]).push([[0],{34:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),r=a(8),o=a.n(r),i=a(5),c=a(9),l=a(10),h=a(13),u=a(12),d=a(11),g=a.n(d),m="https://y5gfm8ypt6.execute-api.us-east-1.amazonaws.com/default/weddingPhoto",v={autoplay:!0,autoplayspeed:1500,dots:!1,infinite:!0,pauseOnHover:!1,slidesToShow:3,speed:5500,swipeToSlide:!0},p={borderRadius:10,width:"31vw",height:"auto",maxWidth:"31vw",maxHeight:"78vh",marginTop:"32vh",transform:"translate3d(0, -39%, 0)"},j={backgroundColor:"#87786B",color:"white",fontFamily:"El Messiri",fontSize:"5vh",fontStyle:"italic",textAlign:"left",paddingLeft:"3vw",paddingTop:"1vw",width:"100vw",height:"8vh"},f={textAlign:"center",fontFamily:"El Messiri",fontSize:"22px",fontStyle:"italic",color:"white"},y={est:"America/New_York",cst:"America/Chicago",mst:"US/Arizona",pst:"America/Los_Angeles"},b=a(0),w=function(t){Object(h.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).urlParams=new URLSearchParams(window.location.search),t.refresh=t.urlParams.has("refresh")?t.urlParams.get("refresh"):25,t.occasion=t.urlParams.has("occasion")?t.urlParams.get("occasion"):"khayat-motz",t.timezone=t.urlParams.has("tz")?t.urlParams.get("tz"):"est",t.labels=!t.urlParams.has("labels")||"none"!==t.urlParams.get("labels"),t.key=t.urlParams.has("key")?t.urlParams.get("key"):null,t.interval=null,t.state={eventTitle:null,photos:null,gettingPhotos:!0},t.getPhotos=function(){t.state.gettingPhotos||t.setState({gettingPhotos:!0});var e="".concat(m,"?occasion=").concat(t.occasion);t.key&&(e+="&key=".concat(t.key)),fetch(e).then((function(t){return t.json()})).then((function(e){return t.setState({eventTitle:e.title,photos:e.photos.reverse(),gettingPhotos:!1})})).catch((function(t){return console.log("error >>",t)})),t.interval&&clearInterval(t.interval),t.interval=setInterval((function(){return t.getPhotos()}),60*t.refresh*1e3)},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getPhotos()}},{key:"render",value:function(){var t=this;return document.title=this.state.eventTitle?"".concat(this.state.eventTitle," | Captured.Day"):"Captured.Day",!this.state.photos||this.state.gettingPhotos?Object(b.jsx)("p",{children:"Getting photos..."}):Object(b.jsxs)(b.Fragment,{children:[this.state.eventTitle&&Object(b.jsx)("h2",{style:j,children:this.state.eventTitle}),Object(b.jsx)(g.a,Object(i.a)(Object(i.a)({},v),{},{children:this.state.photos.map((function(e){return function(t,e,a){var n=t.url,s=t.sender,r=t.urlType,o=new Date(t.receivedAt).toLocaleTimeString("en-US",{timeZone:y[e]});return Object(b.jsxs)("div",{children:[a&&Object(b.jsxs)("div",{style:f,children:[Object(b.jsx)("b",{children:s})," @ ".concat(o)]},"sender_".concat(s)),r.startsWith("image/")?Object(b.jsx)("img",{src:n,alt:"alt_".concat(n),style:p},n):Object(b.jsx)("video",{autoPlay:!0,muted:!0,style:p,children:Object(b.jsx)("source",{src:n,type:r})})]},"div_".concat(n))}(e,t.timezone,t.labels)}))}))]})}}]),a}(s.a.Component),P=w;var O=function(){return Object(b.jsx)(P,{})};o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c8344751.chunk.js.map