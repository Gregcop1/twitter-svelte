function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function i(t,e,n){t.$$.on_destroy.push(c(e,n))}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function E(t){return w(t," ")}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e){(null!=e||t.value)&&(t.value=e)}function _(t,e,n){t.classList[n?"add":"remove"](e)}function A(t,e=document.body){return Array.from(e.querySelectorAll(t))}let R;function L(t){R=t}function P(t,e){(function(){if(!R)throw new Error("Function called outside component initialization");return R})().$$.context.set(t,e)}const N=[],k=[],q=[],C=[],j=Promise.resolve();let I=!1;function U(t){q.push(t)}const O=new Set;function D(){do{for(;N.length;){const t=N.shift();L(t),M(t.$$)}for(;k.length;)k.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];O.has(e)||(O.add(e),e())}q.length=0}while(N.length);for(;C.length;)C.pop()();I=!1,O.clear()}function M(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const V=new Set;let z;function B(){z={r:0,c:[],p:z}}function H(){z.r||s(z.c),z=z.p}function T(t,e){t&&t.i&&(V.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(V.has(t))return;V.add(t),z.c.push(()=>{V.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function K(t,e){J(t,1,1,()=>{e.delete(t.key)})}function F(t,e,n,r,s,o,a,c,i,l,u,f){let p=t.length,h=o.length,d=p;const m={};for(;d--;)m[t[d].key]=d;const g=[],$=new Map,y=new Map;for(d=h;d--;){const t=f(s,o,d),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=l(c,t)).c(),$.set(c,g[d]=i),c in m&&y.set(c,Math.abs(d-m[c]))}const v=new Set,b=new Set;function w(t){T(t,1),t.m(c,u),a.set(t.key,t),u=t.first,h--}for(;p&&h;){const e=g[h-1],n=t[p-1],r=e.key,s=n.key;e===n?(u=e.first,p--,h--):$.has(s)?!a.has(r)||v.has(r)?w(e):b.has(s)?p--:y.get(r)>y.get(s)?(b.add(r),w(e)):(v.add(s),p--):(i(n,a),p--)}for(;p--;){const e=t[p];$.has(e.key)||i(e,a)}for(;h;)w(g[h-1]);return g}function G(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function W(t){return"object"==typeof t&&null!==t?t:{}}function X(t){t&&t.c()}function Y(t,e){t&&t.l(e)}function Q(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),U(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(U)}function Z(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(N.push(t),I||(I=!0,j.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,n,o,a,c,i,l=[-1]){const u=R;L(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;p.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=s)&&(p.bound[t]&&p.bound[t](s),h&&tt(e,t)),n}):[],p.update(),h=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l(v(n.target)):p.fragment&&p.fragment.c(),n.intro&&T(e.$$.fragment),Q(e,n.target,n.anchor),D()),L(u)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const rt=[];function st(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!rt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}function ot(e,n,r){const a=!Array.isArray(e),i=a?[e]:e,l=n.length<2;return{subscribe:st(r,e=>{let r=!1;const u=[];let f=0,p=t;const h=()=>{if(f)return;p();const r=n(a?u[0]:u,e);l?e(r):p=o(r)?r:t},d=i.map((t,e)=>c(t,t=>{u[e]=t,f&=~(1<<e),r&&h()},()=>{f|=1<<e}));return r=!0,h(),function(){s(d),p()}}).subscribe}}const at={},ct=()=>({});function it(t){let e;return{c(){e=h("i"),this.h()},l(t){v(e=b(t,"I",{class:!0})).forEach(p),this.h()},h(){y(e,"class","fa fa-twitter fa-fw svelte-5oddb0")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function lt(t){let e;return{c(){e=h("i"),this.h()},l(t){v(e=b(t,"I",{class:!0})).forEach(p),this.h()},h(){y(e,"class","fa fa-spinner fa-pulse fa-fw svelte-5oddb0")},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function ut(e){let n;function r(t,e){return t[0]?lt:it}let s=r(e),o=s(e);return{c(){o.c(),n=g()},l(t){o.l(t),n=g()},m(t,e){o.m(t,e),f(t,n,e)},p(t,[e]){s!==(s=r(t))&&(o.d(1),(o=s(t))&&(o.c(),o.m(n.parentNode,n)))},i:t,o:t,d(t){o.d(t),t&&p(n)}}}function ft(t,e,n){let{loading:r=!1}=e;return t.$set=(t=>{"loading"in t&&n(0,r=t.loading)}),[r]}class pt extends nt{constructor(t){super(),et(this,t,ft,ut,a,{loading:0})}}function ht(e){let n,r,s,o,a,c,i,l,g,$,x;return{c(){n=h("nav"),r=h("ul"),s=h("li"),o=h("a"),a=h("i"),c=d(" Accueil"),i=m(),l=h("li"),g=h("a"),$=h("i"),x=d(" Mes tweets"),this.h()},l(t){var e=v(n=b(t,"NAV",{class:!0})),u=v(r=b(e,"UL",{class:!0})),f=v(s=b(u,"LI",{class:!0})),h=v(o=b(f,"A",{href:!0,class:!0}));v(a=b(h,"I",{class:!0})).forEach(p),c=w(h," Accueil"),h.forEach(p),f.forEach(p),i=E(u);var d=v(l=b(u,"LI",{class:!0})),m=v(g=b(d,"A",{href:!0,class:!0}));v($=b(m,"I",{class:!0})).forEach(p),x=w(m," Mes tweets"),m.forEach(p),d.forEach(p),u.forEach(p),e.forEach(p),this.h()},h(){y(a,"class","fa fa-home svelte-12b4lb5"),y(o,"href","."),y(o,"class","nav-item svelte-12b4lb5"),_(o,"nav-item--active",void 0===e[0]),y(s,"class","svelte-12b4lb5"),y($,"class","fa fa-bell-o svelte-12b4lb5"),y(g,"href","my-tweets"),y(g,"class","nav-item svelte-12b4lb5"),_(g,"nav-item--active","my-tweets"===e[0]),y(l,"class","svelte-12b4lb5"),y(r,"class","svelte-12b4lb5"),y(n,"class","main-nav svelte-12b4lb5")},m(t,e){f(t,n,e),u(n,r),u(r,s),u(s,o),u(o,a),u(o,c),u(r,i),u(r,l),u(l,g),u(g,$),u(g,x)},p(t,[e]){1&e&&_(o,"nav-item--active",void 0===t[0]),1&e&&_(g,"nav-item--active","my-tweets"===t[0])},i:t,o:t,d(t){t&&p(n)}}}function dt(t,e,n){let{segment:r}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment)}),[r]}class mt extends nt{constructor(t){super(),et(this,t,dt,ht,a,{segment:0})}}function gt(t){let e,n,r,s,o;const a=new mt({props:{segment:t[0]}}),c=new pt({props:{loading:!1}});return{c(){e=h("header"),n=h("div"),X(a.$$.fragment),r=m(),s=h("p"),X(c.$$.fragment),this.h()},l(t){var o=v(e=b(t,"HEADER",{class:!0})),i=v(n=b(o,"DIV",{class:!0}));Y(a.$$.fragment,i),r=E(i);var l=v(s=b(i,"P",{class:!0}));Y(c.$$.fragment,l),l.forEach(p),i.forEach(p),o.forEach(p),this.h()},h(){y(s,"class","logo svelte-4y1lzg"),y(n,"class","container svelte-4y1lzg"),y(e,"class","main-header svelte-4y1lzg")},m(t,i){f(t,e,i),u(e,n),Q(a,n,null),u(n,r),u(n,s),Q(c,s,null),o=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),a.$set(n)},i(t){o||(T(a.$$.fragment,t),T(c.$$.fragment,t),o=!0)},o(t){J(a.$$.fragment,t),J(c.$$.fragment,t),o=!1},d(t){t&&p(e),Z(a),Z(c)}}}function $t(t,e,n){let{segment:r}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment)}),[r]}class yt extends nt{constructor(t){super(),et(this,t,$t,gt,a,{segment:0})}}function vt(t){let e,n,r,s;const o=new yt({props:{segment:t[0]}}),a=t[2].default,c=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(a,t,t[1],null);return{c(){X(o.$$.fragment),e=m(),n=h("main"),r=h("div"),c&&c.c(),this.h()},l(t){Y(o.$$.fragment,t),e=E(t);var s=v(n=b(t,"MAIN",{class:!0})),a=v(r=b(s,"DIV",{class:!0}));c&&c.l(a),a.forEach(p),s.forEach(p),this.h()},h(){y(r,"class","container"),y(n,"class","main-container")},m(t,a){Q(o,t,a),f(t,e,a),f(t,n,a),u(n,r),c&&c.m(r,null),s=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),c&&c.p&&2&e&&c.p(l(a,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(a,t[1],e,null))},i(t){s||(T(o.$$.fragment,t),T(c,t),s=!0)},o(t){J(o.$$.fragment,t),J(c,t),s=!1},d(t){Z(o,t),t&&p(e),t&&p(n),c&&c.d(t)}}}function bt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)}),[r,o,s]}class wt extends nt{constructor(t){super(),et(this,t,bt,vt,a,{segment:0})}}function Et(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=d(r)},l(t){var s=v(e=b(t,"PRE",{}));n=w(s,r),s.forEach(p)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&p(e)}}}function xt(e){let n,r,s,o,a,c,i,l,$,S=e[1].message+"";document.title=n=e[0];let _=e[2]&&e[1].stack&&Et(e);return{c(){r=m(),s=h("h1"),o=d(e[0]),a=m(),c=h("p"),i=d(S),l=m(),_&&_.c(),$=g(),this.h()},l(t){A('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=E(t);var n=v(s=b(t,"H1",{class:!0}));o=w(n,e[0]),n.forEach(p),a=E(t);var u=v(c=b(t,"P",{class:!0}));i=w(u,S),u.forEach(p),l=E(t),_&&_.l(t),$=g(),this.h()},h(){y(s,"class","svelte-8od9u6"),y(c,"class","svelte-8od9u6")},m(t,e){f(t,r,e),f(t,s,e),u(s,o),f(t,a,e),f(t,c,e),u(c,i),f(t,l,e),_&&_.m(t,e),f(t,$,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(o,t[0]),2&e&&S!==(S=t[1].message+"")&&x(i,S),t[2]&&t[1].stack?_?_.p(t,e):((_=Et(t)).c(),_.m($.parentNode,$)):_&&(_.d(1),_=null)},i:t,o:t,d(t){t&&p(r),t&&p(s),t&&p(a),t&&p(c),t&&p(l),_&&_.d(t),t&&p($)}}}function St(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)}),[r,s,!1]}class _t extends nt{constructor(t){super(),et(this,t,St,xt,a,{status:0,error:1})}}function At(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&X(c.$$.fragment),n=g()},l(t){c&&Y(c.$$.fragment,t),n=g()},m(t,e){c&&Q(c,t,e),f(t,n,e),r=!0},p(t,e){const r=16&e?G(s,[W(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){B();const t=c;J(t.$$.fragment,1,0,()=>{Z(t,1)}),H()}o?(X((c=new o(a())).$$.fragment),T(c.$$.fragment,1),Q(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&T(c.$$.fragment,t),r=!0)},o(t){c&&J(c.$$.fragment,t),r=!1},d(t){t&&p(n),c&&Z(c,t)}}}function Rt(t){let e;const n=new _t({props:{error:t[0],status:t[1]}});return{c(){X(n.$$.fragment)},l(t){Y(n.$$.fragment,t)},m(t,r){Q(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(T(n.$$.fragment,t),e=!0)},o(t){J(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function Lt(t){let e,n,r,s;const o=[Rt,At],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),f(t,r,n),s=!0},p(t,s){let i=e;(e=c(t))===i?a[e].p(t,s):(B(),J(a[i],1,1,()=>{a[i]=null}),H(),(n=a[e])||(n=a[e]=o[e](t)).c(),T(n,1),n.m(r.parentNode,r))},i(t){s||(T(n),s=!0)},o(t){J(n),s=!1},d(t){a[e].d(t),t&&p(r)}}}function Pt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Lt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new wt({props:s});return{c(){X(o.$$.fragment)},l(t){Y(o.$$.fragment,t)},m(t,e){Q(o,t,e),n=!0},p(t,[e]){const n=12&e?G(r,[4&e&&{segment:t[2][0]},8&e&&W(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(T(o.$$.fragment,t),n=!0)},o(t){J(o.$$.fragment,t),n=!1},d(t){Z(o,t)}}}function Nt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;return P(at,r),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)}),[s,o,a,c,i,r]}class kt extends nt{constructor(t){super(),et(this,t,Nt,Pt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const qt=[],Ct=[{js:()=>import("./index.1d6b6249.js"),css:["index.1d6b6249.css","client.2a459e40.css","Writer.22f84e69.css"]},{js:()=>import("./my-tweets.c6cf1b50.js"),css:["client.2a459e40.css","Writer.22f84e69.css"]}],jt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/my-tweets\/?$/,parts:[{i:1}]}];const It="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ut,Ot,Dt,Mt=!1,Vt=[],zt="{}";const Bt={page:st({}),preloading:st(null),session:st(It&&It.session)};let Ht,Tt;Bt.session.subscribe(async t=>{if(Ht=t,!Mt)return;Tt=!0;const e=Qt(new URL(location.href)),n=Ot={},{redirect:r,props:s,branch:o}=await ne(e);n===Ot&&await ee(r,o,s,e.page)});let Jt,Kt=null;let Ft,Gt=1;const Wt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Xt={};function Yt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Qt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(It.baseUrl))return null;let e=t.pathname.slice(It.baseUrl.length);if(""===e&&(e="/"),!qt.some(t=>t.test(e)))for(let n=0;n<jt.length;n+=1){const r=jt[n],s=r.pattern.exec(e);if(s){const n=Yt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Zt(){return{x:pageXOffset,y:pageYOffset}}async function te(t,e,n,r){if(e)Ft=e;else{const t=Zt();Xt[Ft]=t,e=Ft=++Gt,Xt[Ft]=n?t:{x:0,y:0}}Ft=e,Ut&&Bt.preloading.set(!0);const s=Kt&&Kt.href===t.href?Kt.promise:ne(t);Kt=null;const o=Ot={},{redirect:a,props:c,branch:i}=await s;if(o===Ot&&(await ee(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Xt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Xt[Ft]=t,t&&scrollTo(t.x,t.y)}}async function ee(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Qt(new URL(t,document.baseURI));return n?(Wt[e.replaceState?"replaceState":"pushState"]({id:Ft},"",t),te(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Bt.page.set(r),Bt.preloading.set(!1),Ut)Ut.$set(n);else{n.stores={page:{subscribe:Bt.page.subscribe},preloading:{subscribe:Bt.preloading.subscribe},session:Bt.session},n.level0={props:await Dt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)se(t.nextSibling);se(t),se(e)}Ut=new kt({target:Jt,props:n,hydrate:!0})}Vt=e,zt=JSON.stringify(r.query),Mt=!0,Tt=!1}async function ne(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;Dt||(Dt=It.preloaded[0]||ct.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ht));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==zt)return!0;const s=Vt[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Tt&&!u&&Vt[c]&&Vt[c].part===e.i)return Vt[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(re);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Ct[e.i]);let m;return m=Mt||!It.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ht):{}:It.preloaded[c+1],o[`level${p}`]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function re(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function se(t){t.parentNode.removeChild(t)}function oe(t){const e=Qt(new URL(t,document.baseURI));if(e)return Kt&&t===Kt.href||function(t,e){Kt={href:t,promise:e}}(t,ne(e)),Kt.promise}let ae;function ce(t){clearTimeout(ae),ae=setTimeout(()=>{ie(t)},20)}function ie(t){const e=ue(t.target);e&&"prefetch"===e.rel&&oe(e.href)}function le(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ue(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Qt(s);if(o){te(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Wt.pushState({id:Ft},"",s.href)}}function ue(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function fe(t){if(Xt[Ft]=Zt(),t.state){const e=Qt(new URL(location.href));e?te(e,t.state.id):location.href=location.href}else(function(t){Ft=t})(Gt=Gt+1),Wt.replaceState({id:Ft},"",location.href)}!function(t){var e;"scrollRestoration"in Wt&&(Wt.scrollRestoration="manual"),e=t.target,Jt=e,addEventListener("click",le),addEventListener("popstate",fe),addEventListener("touchstart",ie),addEventListener("mousemove",ce),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Wt.replaceState({id:Gt},"",e);const n=new URL(location.href);if(It.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=It;Dt||(Dt=o&&o[0]),ee(null,[],{error:c,status:a,session:s,level0:{props:Dt},level1:{props:{status:a,error:c},component:_t},segments:o},{host:e,path:n,query:Yt(r),params:{}})}();const r=Qt(n);return r?te(r,Gt,!0,t):void 0})}({target:document.querySelector("#sapper")});export{st as A,x as B,i as C,$ as D,ot as E,S as F,s as G,A as H,nt as S,y as a,f as b,b as c,p as d,h as e,m as f,v as g,E as h,et as i,w as j,_ as k,u as l,g as m,t as n,X as o,Y as p,Q as q,T as r,a as s,d as t,J as u,Z as v,B as w,F as x,H as y,K as z};
