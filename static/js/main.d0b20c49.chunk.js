(this.webpackJsonpwedding=this.webpackJsonpwedding||[]).push([[0],{34:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),s=n(8),i=n.n(s),a=n(5),c=n(9),l=n(10),h=n(13),u=n(12),d=n(11),g=n.n(d),j="https://y5gfm8ypt6.execute-api.us-east-1.amazonaws.com/default/weddingPhoto",p={autoplay:!0,autoplayspeed:1500,dots:!1,infinite:!0,pauseOnHover:!1,slidesToShow:3,speed:5500,swipeToSlide:!0},b={borderRadius:10,width:"31vw",height:"auto",marginTop:"31vh",transform:"translateY(-39%)"},m={backgroundColor:"#87786B",color:"white",fontFamily:"El Messiri",fontSize:"5vh",fontStyle:"italic",textAlign:"left",paddingLeft:"3vw",paddingTop:"1vw",width:"100vw",height:"8vh"},f={textAlign:"center",fontFamily:"El Messiri",fontSize:"22px",fontStyle:"italic",color:"white"},v={justifyContent:"center",textAlign:"center",overflowX:"auto",marginBottom:"8px"},w={marginTop:"3px",maxWidth:"100%",height:"auto",borderRadius:"2px"},y={width:"93%",border:"none",borderRadius:"23px",fontSize:"2rem",backgroundColor:"#3d7abf",color:"#fff"},x={est:"America/New_York",cst:"America/Chicago",mst:"US/Arizona",pst:"America/Los_Angeles",hst:"Pacific/Honolulu"},O=n(0),P=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).urlParams=new URLSearchParams(window.location.search),t.refresh=t.urlParams.has("refresh")?t.urlParams.get("refresh"):25,t.occasion=t.urlParams.has("occasion")?t.urlParams.get("occasion"):null,t.timezone=t.urlParams.has("tz")?t.urlParams.get("tz"):"est",t.labels=!!t.urlParams.has("labels")&&"time"===t.urlParams.get("labels"),t.state={eventTitle:null,photos:null,gettingPhotos:!0},t.getPhotos=function(){t.state.gettingPhotos||t.setState({gettingPhotos:!0}),fetch("".concat(j,"?occasion=").concat(t.occasion)).then((function(t){return t.json()})).then((function(e){return t.setState({eventTitle:e.title,photos:e.photos.reverse(),gettingPhotos:!1})})).catch((function(t){return console.log("error >>",t)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.getPhotos(),window.addEventListener("resize",(function(){"gallery"!==t.urlParams.get("view")&&window.location.reload(!1)})),setInterval((function(){return t.getPhotos()}),60*this.refresh*1e3)}},{key:"render",value:function(){var t=this;return document.title=this.state.eventTitle?"".concat(this.state.eventTitle," | Captured.Day"):"Captured.Day",this.occasion?!this.state.photos||this.state.gettingPhotos?Object(O.jsx)("p",{children:"Getting photos..."}):"gallery"===this.urlParams.get("view")?Object(O.jsxs)("div",{style:v,children:[this.state.photos.map((function(t){return Object(O.jsx)("img",{src:t.url,alt:"gallery",style:w},t.url)})),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{style:y,onClick:function(){return window.open("https://captured.pics?occasion=".concat(t.occasion),"_blank","noreferrer")},children:"\ud83d\udc48 Add more \ud83d\ude42"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]}):Object(O.jsxs)(O.Fragment,{children:[this.state.eventTitle&&Object(O.jsx)("h2",{style:m,children:this.state.eventTitle}),Object(O.jsx)(g.a,Object(a.a)(Object(a.a)({},p),{},{children:this.state.photos.map((function(e){return function(t,e,n){var o=t.url,r=t.sender,s=t.urlType,i=new Date(t.receivedAt).toLocaleTimeString("en-US",{timeZone:x[e],timeStyle:"short"});return Object(O.jsxs)("div",{children:[n&&Object(O.jsxs)("div",{style:f,children:[Object(O.jsx)("b",{children:r})," @ ".concat(i)]},"sender_".concat(r)),s.startsWith("image/")?Object(O.jsx)("img",{src:o,alt:"slide",style:b},o):Object(O.jsx)("video",{autoPlay:!0,muted:!0,style:b,children:Object(O.jsx)("source",{src:o,type:s})})]},"div_".concat(o))}(e,t.timezone,t.labels)}))}))]}):Object(O.jsx)("p",{children:"Occasion required. If you need help with this, please contact your event coordinator."})}}]),n}(r.a.Component),S=P;var T=function(){return Object(O.jsx)(S,{})};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d0b20c49.chunk.js.map