(this.webpackJsonpwedding=this.webpackJsonpwedding||[]).push([[0],{34:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),r=n(8),o=n.n(r),i=n(5),c=n(9),h=n(10),l=n(13),u=n(12),d=n(11),g=n.n(d),m="https://y5gfm8ypt6.execute-api.us-east-1.amazonaws.com/default/weddingPhoto",p={autoplay:!0,autoplayspeed:1500,dots:!1,infinite:!0,slidesToShow:3,speed:5500,swipeToSlide:!0},j={width:"31vw",height:"auto",maxWidth:"31vw",maxHeight:"91vh",marginTop:"50vh",transform:"translate3d(0, -50%, 0)"},v={textAlign:"center",fontSize:"24px"},f={est:"America/New_York",cst:"America/Chicago",mst:"US/Arizona",pst:"America/Los_Angeles"},b=n(0),P=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).urlParams=new URLSearchParams(window.location.search),t.refresh=t.urlParams.has("refresh")?t.urlParams.get("refresh"):300,t.occasion=t.urlParams.has("occasion")?t.urlParams.get("occasion"):"khayat-motz",t.timezone=t.urlParams.has("tz")?t.urlParams.get("tz"):"est",t.interval=null,t.state={eventTitle:null,photos:null,gettingPhotos:!0},t.getPhotos=function(){t.state.gettingPhotos||t.setState({gettingPhotos:!0}),fetch(m+"?occasion="+t.occasion).then((function(t){return t.json()})).then((function(e){return t.setState({eventTitle:e.title,photos:e.photos.reverse(),gettingPhotos:!1})})).catch((function(t){return console.log("error >>",t)})),t.interval&&clearInterval(t.interval),t.interval=setInterval((function(){return t.getPhotos()}),60*t.refresh*1e3)},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getPhotos()}},{key:"render",value:function(){var t=this;return document.title="".concat(this.state.eventTitle," | Captured.Day"),!this.state.photos||this.state.gettingPhotos?Object(b.jsx)("p",{children:"Getting photos..."}):Object(b.jsx)(g.a,Object(i.a)(Object(i.a)({},p),{},{children:this.state.photos.map((function(e){return function(t,e){var n=t.url,a=t.sender,s=t.urlType,r=new Date(t.receivedAt).toLocaleTimeString("en-US",{timeZone:f[e]}),o=j,i=v;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{style:i,children:[Object(b.jsx)("b",{children:a})," @ ".concat(r)]},"sender_"+a),s.startsWith("image/")?Object(b.jsx)("img",{src:n,alt:"alt_"+n,style:o},n):Object(b.jsx)("video",{autoPlay:!0,muted:!0,style:o,children:Object(b.jsx)("source",{src:n,type:s})})]},"div_"+n)}(e,t.timezone)}))}))}}]),n}(s.a.Component),w=P;var y=function(){return Object(b.jsx)(w,{})};o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9f3cfe70.chunk.js.map