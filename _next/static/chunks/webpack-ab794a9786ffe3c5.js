!function(){"use strict";var a,b,c,d,e,f,g,h,i,j={},k={};function l(a){var b=k[a];if(void 0!==b)return b.exports;var c=k[a]={exports:{}},d=!0;try{j[a].call(c.exports,c,c.exports,l),d=!1}finally{d&&delete k[a]}return c.exports}l.m=j,a=[],l.O=function(b,c,d,e){if(c){e=e||0;for(var f=a.length;f>0&&a[f-1][2]>e;f--)a[f]=a[f-1];a[f]=[c,d,e];return}for(var g=1/0,f=0;f<a.length;f++){for(var c=a[f][0],d=a[f][1],e=a[f][2],h=!0,i=0;i<c.length;i++)g>=e&&Object.keys(l.O).every(function(a){return l.O[a](c[i])})?c.splice(i--,1):(h=!1,e<g&&(g=e));if(h){a.splice(f--,1);var j=d();void 0!==j&&(b=j)}}return b},l.n=function(a){var b=a&&a.__esModule?function(){return a.default}:function(){return a};return l.d(b,{a:b}),b},l.d=function(a,b){for(var c in b)l.o(b,c)&&!l.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:b[c]})},l.f={},l.e=function(a){return Promise.all(Object.keys(l.f).reduce(function(b,c){return l.f[c](a,b),b},[]))},l.u=function(a){return"static/chunks/"+a+"."+({"456":"d117a8d6153c5bb7","655":"a4e217cde41a6255"})[a]+".js"},l.miniCssF=function(a){return"static/css/"+({"405":"e6b7af6c4d528d5b","655":"e80fb59df4ee71e2","888":"27d177a30947857b"})[a]+".css"},l.g=(function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"==typeof window)return window}})(),l.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b={},c="_N_E:",l.l=function(a,d,e,f){if(b[a]){b[a].push(d);return}if(void 0!==e)for(var g,h,i=document.getElementsByTagName("script"),j=0;j<i.length;j++){var k=i[j];if(k.getAttribute("src")==a||k.getAttribute("data-webpack")==c+e){g=k;break}}g||(h=!0,(g=document.createElement("script")).charset="utf-8",g.timeout=120,l.nc&&g.setAttribute("nonce",l.nc),g.setAttribute("data-webpack",c+e),g.src=a),b[a]=[d];var m=function(c,d){g.onerror=g.onload=null,clearTimeout(n);var e=b[a];if(delete b[a],g.parentNode&&g.parentNode.removeChild(g),e&&e.forEach(function(a){return a(d)}),c)return c(d)},n=setTimeout(m.bind(null,void 0,{type:"timeout",target:g}),120e3);g.onerror=m.bind(null,g.onerror),g.onload=m.bind(null,g.onload),h&&document.head.appendChild(g)},l.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},l.p="/Korea-UV-Repeater-Map//_next/",d=function(a,b,c,d){var e=document.createElement("link");return e.rel="stylesheet",e.type="text/css",e.onerror=e.onload=function(f){if(e.onerror=e.onload=null,"load"===f.type)c();else{var g=f&&("load"===f.type?"missing":f.type),h=f&&f.target&&f.target.href||b,i=new Error("Loading CSS chunk "+a+" failed.\n("+h+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=g,i.request=h,e.parentNode.removeChild(e),d(i)}},e.href=b,document.head.appendChild(e),e},e=function(a,b){for(var c=document.getElementsByTagName("link"),d=0;d<c.length;d++){var e=c[d],f=e.getAttribute("data-href")||e.getAttribute("href");if("stylesheet"===e.rel&&(f===a||f===b))return e}for(var g=document.getElementsByTagName("style"),d=0;d<g.length;d++){var e=g[d],f=e.getAttribute("data-href");if(f===a||f===b)return e}},f={272:0},l.f.miniCss=function(a,b){var c;f[a]?b.push(f[a]):0!==f[a]&&({"655":1})[a]&&b.push(f[a]=(c=a,new Promise(function(a,b){var f=l.miniCssF(c),g=l.p+f;if(e(f,g))return a();d(c,g,a,b)})).then(function(){f[a]=0},function(b){throw delete f[a],b}))},g={272:0},l.f.j=function(a,b){var c=l.o(g,a)?g[a]:void 0;if(0!==c)if(c)b.push(c[2]);else if(272!=a){var d=new Promise(function(b,d){c=g[a]=[b,d]});b.push(c[2]=d);var e=l.p+l.u(a),f=new Error(),h=function(b){if(l.o(g,a)&&(0!==(c=g[a])&&(g[a]=void 0),c)){var d=b&&("load"===b.type?"missing":b.type),e=b&&b.target&&b.target.src;f.message="Loading chunk "+a+" failed.\n("+d+": "+e+")",f.name="ChunkLoadError",f.type=d,f.request=e,c[1](f)}};l.l(e,h,"chunk-"+a,a)}else g[a]=0},l.O.j=function(a){return 0===g[a]},h=function(a,b){var c,d,e=b[0],f=b[1],h=b[2],i=0;if(e.some(function(a){return 0!==g[a]})){for(c in f)l.o(f,c)&&(l.m[c]=f[c]);if(h)var j=h(l)}for(a&&a(b);i<e.length;i++)d=e[i],l.o(g,d)&&g[d]&&g[d][0](),g[d]=0;return l.O(j)},(i=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(h.bind(null,0)),i.push=h.bind(null,i.push.bind(i))}()