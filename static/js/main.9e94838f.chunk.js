(this.webpackJsonpwedding=this.webpackJsonpwedding||[]).push([[0],{34:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),o=n(8),i=n.n(o),r=n(5),c=n(9),l=n(10),h=n(13),u=n(12),d=n(11),g=n.n(d),m="https://y5gfm8ypt6.execute-api.us-east-1.amazonaws.com/default/weddingPhoto",p={autoplay:!0,autoplayspeed:1500,dots:!1,infinite:!0,pauseOnHover:!1,slidesToShow:3,speed:5500,swipeToSlide:!0},v={borderRadius:10,width:"31vw",height:"auto",maxWidth:"31vw",maxHeight:"78vh",marginTop:"32vh",transform:"translate3d(0, -39%, 0)"},j={backgroundColor:"#87786B",color:"white",fontFamily:"El Messiri",fontSize:"5vh",fontStyle:"italic",textAlign:"left",paddingLeft:"3vw",paddingTop:"1vw",width:"100vw",height:"8vh"},f={textAlign:"center",fontFamily:"El Messiri",fontSize:"22px",fontStyle:"italic",color:"white"},b={est:"America/New_York",cst:"America/Chicago",mst:"US/Arizona",pst:"America/Los_Angeles"},w=n(0),y=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).urlParams=new URLSearchParams(window.location.search),t.refresh=t.urlParams.has("refresh")?t.urlParams.get("refresh"):25,t.occasion=t.urlParams.has("occasion")?t.urlParams.get("occasion"):"khayat-motz",t.timezone=t.urlParams.has("tz")?t.urlParams.get("tz"):"est",t.labels=!!t.urlParams.has("labels")&&"time"===t.urlParams.get("labels"),t.state={eventTitle:null,photos:null,gettingPhotos:!0},t.getPhotos=function(){t.state.gettingPhotos||t.setState({gettingPhotos:!0}),fetch("".concat(m,"?occasion=").concat(t.occasion)).then((function(t){return t.json()})).then((function(e){return t.setState({eventTitle:e.title,photos:e.photos.reverse(),gettingPhotos:!1})})).catch((function(t){return console.log("error >>",t)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.getPhotos(),window.addEventListener("resize",(function(){return window.location.reload(!1)})),setInterval((function(){return t.getPhotos()}),60*this.refresh*1e3)}},{key:"render",value:function(){var t=this;return document.title=this.state.eventTitle?"".concat(this.state.eventTitle," | Captured.Day"):"Captured.Day",!this.state.photos||this.state.gettingPhotos?Object(w.jsx)("p",{children:"Getting photos..."}):Object(w.jsxs)(w.Fragment,{children:[this.state.eventTitle&&Object(w.jsx)("h2",{style:j,children:this.state.eventTitle}),Object(w.jsx)(g.a,Object(r.a)(Object(r.a)({},p),{},{children:this.state.photos.map((function(e){return function(t,e,n){var a=t.url,s=t.sender,o=t.urlType,i=new Date(t.receivedAt).toLocaleTimeString("en-US",{timeZone:b[e]});return Object(w.jsxs)("div",{children:[n&&Object(w.jsxs)("div",{style:f,children:[Object(w.jsx)("b",{children:s})," @ ".concat(i)]},"sender_".concat(s)),o.startsWith("image/")?Object(w.jsx)("img",{src:a,alt:"alt_".concat(a),style:v},a):Object(w.jsx)("video",{autoPlay:!0,muted:!0,style:v,children:Object(w.jsx)("source",{src:a,type:o})})]},"div_".concat(a))}(e,t.timezone,t.labels)}))}))]})}}]),n}(s.a.Component),O=y;var P=function(){return Object(w.jsx)(O,{})};i.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(P,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9e94838f.chunk.js.map