(this.webpackJsonpwedding=this.webpackJsonpwedding||[]).push([[0],{34:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),s=n(8),c=n.n(s),i=n(5),r=n(9),l=n(10),h=n(13),u=n(12),g=n(11),d=n.n(g),p=n(1),j=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).settings={autoplay:!0,dots:!1,infinite:!0,speed:13e3,autoplayspeed:8e3,slidesToShow:3,slidesToScroll:1},t.interval=null,t.state={photos:null,gettingPhotos:!0},t.getPhotos=function(){console.log("getting photos..."),t.state.gettingPhotos||t.setState({gettingPhotos:!0}),fetch("https://y5gfm8ypt6.execute-api.us-east-1.amazonaws.com/default/weddingPhoto").then((function(t){return t.json()})).then((function(e){return t.setState({photos:e,gettingPhotos:!1})})).catch((function(t){return console.log("e >>",t)})),t.interval&&clearInterval(t.interval),t.interval=setInterval((function(){return t.getPhotos()}),6e5)},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getPhotos()}},{key:"render",value:function(){return!this.state.photos||this.state.gettingPhotos?Object(p.jsx)("p",{children:"Getting photos..."}):Object(p.jsx)(d.a,Object(i.a)(Object(i.a)({},this.settings),{},{children:this.state.photos.map((function(t){return function(t){var e=t.url,n=t.sender,o=new Date(t.receivedAt).toLocaleString();return Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:e,alt:"alt_"+e,style:{width:"".concat(31,"vw"),height:"".concat(84.01,"vh")},onLoad:function(t){var e=t.target.naturalHeight,n=t.target.naturalWidth,o=null;e>n?console.log("portrait",e,n):(console.log("landscape",e,n),o="".concat(e/n*31,"vh"),t.target.style.height=o)}},e),Object(p.jsx)("div",{children:"".concat(n," @ ").concat(o)},"sender_"+n)]},"div_"+e)}(t)}))}))}}]),n}(a.a.Component);var v=function(){return Object(p.jsx)(j,{})};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6c4c1c3d.chunk.js.map