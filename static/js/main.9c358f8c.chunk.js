(this.webpackJsonpwedding=this.webpackJsonpwedding||[]).push([[0],{34:function(t,e,n){"use strict";n.r(e);var s=n(0),c=n.n(s),i=n(8),o=n.n(i),r=n(5),a=n(9),d=n(10),u=n(13),h=n(12),l=n(11),j=n.n(l),p=n(1),b=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).settings={autoplay:!0,dots:!1,infinite:!0,speed:5e3,autoplayspeed:2e3,slidesToShow:2,slidesToScroll:1},t.state={photos:null},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://y5gfm8ypt6.execute-api.us-east-1.amazonaws.com/default/weddingPhoto").then((function(t){return t.json()})).then((function(e){return t.setState({photos:e})})).catch((function(t){return console.log("e >>",t)}))}},{key:"render",value:function(){return this.state.photos?Object(p.jsx)(j.a,Object(r.a)(Object(r.a)({},this.settings),{},{children:this.state.photos.map((function(t){return function(t){var e=t.url,n=t.sender.slice(t.sender.length-4),s=new Date(1e3*t.receivedAt).toString();return Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:e,alt:"alt_"+e,width:"85%",height:"75%"},e),Object(p.jsx)("div",{children:n},"sender_"+n),Object(p.jsx)("div",{children:s},"timed_"+s)]},"div_"+e)}(t)}))})):Object(p.jsx)("p",{children:"Getting photos..."})}}]),n}(c.a.Component);var f=function(){return Object(p.jsx)(b,{})};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9c358f8c.chunk.js.map