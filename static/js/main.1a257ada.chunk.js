(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},,function(e,n,a){"use strict";a.r(n);var t=a(1),c=a.n(t),l=a(7),o=a.n(l),r=(a(13),a(8)),u=a(4),i=a(5),s=(a(14),a(15),a(16),a(0)),v=function(e){return console.log(e),Object(s.jsx)("button",{className:"square",onClick:function(){return e.onClickCallback(e.id)},children:e.value})},j=function(e){var n=function(e,n){var a;return(a=[]).concat.apply(a,Object(u.a)(e)).map((function(e){return Object(s.jsx)(v,{value:e.value,onClickCallback:n,id:e.id},e.id)}))}(e.squares,e.onClickCallback);return console.log(n),Object(s.jsx)("div",{className:"grid",children:n})},f="x",d=function(){for(var e=[],n=0,a=0;a<3;a+=1){e.push([]);for(var t=0;t<3;t+=1)e[a].push({id:n,value:""}),n+=1}return e},b=function(){var e=Object(t.useState)(d()),n=Object(i.a)(e,2),a=n[0],c=n[1],l=Object(t.useState)(f),o=Object(i.a)(l,2),v=o[0],b=o[1],h=Object(t.useState)(null),O=Object(i.a)(h,2),k=O[0],m=O[1],p=function(){for(var e=0;e<3;e++){if(a[e][0].value===a[e][1].value&&a[e][1].value===a[e][2].value&&""!==a[e][1].value)return a[e][0].value;if(a[0][e].value===a[1][e].value&&a[1][e].value===a[2][e].value&&""!==a[1][e].value)return a[0][e].value}if(""!==a[1][1].value){if(a[0][0].value===a[1][1].value&&a[0][0].value===a[2][2].value)return a[0][0].value;if(a[0][2].value===a[1][1].value&&a[0][2].value===a[2][0].value)return a[0][2].value}return null},x=null==k?"Current Player: ".concat(v):"Winner is ".concat(k);return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("h1",{children:"React Tic Tac Toe"}),Object(s.jsxs)("h2",{children:[" ",x," "]}),Object(s.jsx)("button",{onClick:function(){return c(d()),b(f),void m(null)},children:"Reset Game"})]}),Object(s.jsx)("main",{children:Object(s.jsx)(j,{squares:a,onClickCallback:function(e){var n=Object(u.a)(a);console.log("newS "+n);var t,l=Object(r.a)(n);try{for(l.s();!(t=l.n()).done;){var o=t.value;console.log("test "+o)}}catch(i){l.e(i)}finally{l.f()}n.forEach((function(n){console.log("board "+n),n.forEach((function(n){n.id===e&&""===n.value&&(n.value=v,b(v===f?"o":f))}))})),c(n),m(p())}})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.1a257ada.chunk.js.map