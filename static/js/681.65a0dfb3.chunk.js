"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{63:function(e,t,n){n.d(t,{Hg:function(){return r},Jh:function(){return o},Pg:function(){return a},XT:function(){return u},yO:function(){return c}});var i=n(263);function r(){return i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=28f59146d010acf01a886226973a360d")}function a(e){return i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=28f59146d010acf01a886226973a360d"))}function c(e){return i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=28f59146d010acf01a886226973a360d"))}function o(e){return i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=28f59146d010acf01a886226973a360d"))}function u(e){return i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=28f59146d010acf01a886226973a360d&language=en-US&query=".concat(e,"&page=1"))}},681:function(e,t,n){n.r(t);var i=n(439),r=n(63),a=n(791),c=n(689),o=n(184);t.default=function(){var e=(0,a.useState)([]),t=(0,i.Z)(e,2),n=t[0],u=t[1],f=(0,c.UO)().id;return(0,a.useEffect)((function(){(0,r.Jh)(f).then((function(e){u(e.data.results)}))}),[f]),0===n.length?(0,o.jsx)("p",{children:"We don't have any reviews for this movie."}):(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:n.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:e.author}),(0,o.jsx)("p",{children:e.content})]},e.id)}))})})}}}]);
//# sourceMappingURL=681.65a0dfb3.chunk.js.map