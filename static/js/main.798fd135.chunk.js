(this.webpackJsonpwedding=this.webpackJsonpwedding||[]).push([[0],{34:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),r=n(8),o=n.n(r),i=n(5),c=n(9),l=n(10),h=n(13),u=n(12),d=n(11),g=n.n(d),m="https://y5gfm8ypt6.execute-api.us-east-1.amazonaws.com/default/weddingPhoto",p={autoplay:!0,autoplayspeed:1500,dots:!1,infinite:!0,slidesToShow:3,speed:5500,swipeToSlide:!0},j={width:"31vw",height:"auto",maxWidth:"31vw",maxHeight:"91vh",marginTop:"50vh",transform:"translate3d(0, -50%, 0)"},v={textAlign:"center",fontSize:"24px",backgroundColor:"pink",width:"100vw"},b={textAlign:"center",fontSize:"24px"},f={est:"America/New_York",cst:"America/Chicago",mst:"US/Arizona",pst:"America/Los_Angeles"},x=n(0),P=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).urlParams=new URLSearchParams(window.location.search),t.refresh=t.urlParams.has("refresh")?t.urlParams.get("refresh"):300,t.occasion=t.urlParams.has("occasion")?t.urlParams.get("occasion"):"khayat-motz",t.timezone=t.urlParams.has("tz")?t.urlParams.get("tz"):"est",t.labels=!t.urlParams.has("labels")||"none"!==t.urlParams.get("labels"),t.interval=null,t.state={eventTitle:null,photos:null,gettingPhotos:!0},t.getPhotos=function(){t.state.gettingPhotos||t.setState({gettingPhotos:!0}),fetch(m+"?occasion="+t.occasion).then((function(t){return t.json()})).then((function(e){return t.setState({eventTitle:e.title,photos:e.photos.reverse(),gettingPhotos:!1})})).catch((function(t){return console.log("error >>",t)})),t.interval&&clearInterval(t.interval),t.interval=setInterval((function(){return t.getPhotos()}),60*t.refresh*1e3)},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getPhotos()}},{key:"render",value:function(){var t=this;return document.title=this.state.eventTitle?"".concat(this.state.eventTitle," | Captured.Day"):"Captured.Day",!this.state.photos||this.state.gettingPhotos?Object(x.jsx)("p",{children:"Getting photos..."}):Object(x.jsxs)(x.Fragment,{children:[this.state.eventTitle&&Object(x.jsx)("h4",{style:v,children:this.state.eventTitle}),Object(x.jsx)(g.a,Object(i.a)(Object(i.a)({},p),{},{children:this.state.photos.map((function(e){return function(t,e,n){var a=t.url,s=t.sender,r=t.urlType,o=new Date(t.receivedAt).toLocaleTimeString("en-US",{timeZone:f[e]});return Object(x.jsxs)("div",{children:[n&&Object(x.jsxs)("div",{style:b,children:[Object(x.jsx)("b",{children:s})," @ ".concat(o)]},"sender_"+s),r.startsWith("image/")?Object(x.jsx)("img",{src:a,alt:"alt_"+a,style:j},a):Object(x.jsx)("video",{autoPlay:!0,muted:!0,style:j,children:Object(x.jsx)("source",{src:a,type:r})})]},"div_"+a)}(e,t.timezone,t.labels)}))}))]})}}]),n}(s.a.Component),w=P;var y=function(){return Object(x.jsx)(w,{})};o.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.798fd135.chunk.js.map