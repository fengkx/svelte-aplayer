function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function l(t){t.forEach(n)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function i(t,e,n){t.$$.on_destroy.push(o(e,n))}function c(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function h(t,e,n=e){return t.set(n),e}function u(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function y(){return m("")}function w(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function E(t,e,n,s){for(let l=0;l<t.length;l+=1){const s=t[l];if(s.nodeName===e){let e=0;const r=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||r.push(t.name)}for(let t=0;t<r.length;t++)s.removeAttribute(r[t]);return t.splice(l,1)[0]}}return s?v(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const s=t[n];if(3===s.nodeType)return s.data=""+e,t.splice(n,1)[0]}return m(e)}function q(t){return b(t," ")}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}function I(t,e,n){t.classList[n?"add":"remove"](e)}class D{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=p(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)d(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(f)}}let _;function A(t){_=t}function k(){if(!_)throw new Error("Function called outside component initialization");return _}function S(){const t=k();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const l=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);s.slice().forEach((e=>{e.call(t,l)}))}}}const L=[],B=[],N=[],P=[],z=Promise.resolve();let V=!1;function C(t){N.push(t)}let O=!1;const H=new Set;function R(){if(!O){O=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];A(e),U(e.$$)}for(A(null),L.length=0;B.length;)B.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];H.has(e)||(H.add(e),e())}N.length=0}while(L.length);for(;P.length;)P.pop()();V=!1,O=!1,H.clear()}}function U(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const Y=new Set;function j(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function X(t,e){t.d(1),e.delete(t.key)}function W(t,e){-1===t.$$.dirty[0]&&(L.push(t),V||(V=!0,z.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,a,o,i,c,h,u=[-1]){const d=_;A(e);const p=e.$$={fragment:null,ctx:null,props:h,update:t,not_equal:c,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:s(),dirty:u,skip_bound:!1};let v=!1;if(p.ctx=o?o(e,a.props||{},((t,n,...s)=>{const l=s.length?s[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=l)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](l),v&&W(e,t)),n})):[],p.update(),v=!0,l(p.before_update),p.fragment=!!i&&i(p.ctx),a.target){if(a.hydrate){const t=$(a.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();a.intro&&j(e.$$.fragment),function(t,e,s,a){const{fragment:o,on_mount:i,on_destroy:c,after_update:h}=t.$$;o&&o.m(e,s),a||C((()=>{const e=i.map(n).filter(r);c?c.push(...e):l(e),t.$$.on_mount=[]})),h.forEach(C)}(e,a.target,a.anchor,a.customElement),R()}A(d)}const J=[];function G(e,n=t){let s;const l=[];function r(t){if(a(e,t)&&(e=t,s)){const t=!J.length;for(let n=0;n<l.length;n+=1){const t=l[n];t[1](),J.push(t,e)}if(t){for(let t=0;t<J.length;t+=2)J[t][0](J[t+1]);J.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(a,o=t){const i=[a,o];return l.push(i),1===l.length&&(s=n(r)||t),a(e),()=>{const t=l.indexOf(i);-1!==t&&l.splice(t,1),0===l.length&&(s(),s=null)}}}}function K(e,n,s){const a=!Array.isArray(e),i=a?[e]:e,c=n.length<2;return{subscribe:G(s,(e=>{let s=!1;const h=[];let u=0,d=t;const f=()=>{if(u)return;d();const s=n(a?h[0]:h,e);c?e(s):d=r(s)?s:t},p=i.map(((t,e)=>o(t,(t=>{h[e]=t,u&=~(1<<e),s&&f()}),(()=>{u|=1<<e}))));return s=!0,f(),function(){l(p),d()}})).subscribe}}const Q=t=>{const e=Math.floor(t/3600),n=Math.floor((t-3600*e)/60),s=Math.floor(t-3600*e-60*n);return(e>0?[e,n,s]:[n,s]).map((t=>t<10?"0"+t:""+t)).join(":")},Z=/mobile/i.test(window.navigator.userAgent);function tt(t){if(t){const e=(t=t.replace(/([^\]^\n])\[/g,((t,e)=>e+"\n["))).split("\n");let n=[];const s=e.length;for(let t=0;t<s;t++){const s=e[t].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),l=e[t].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(s){const t=s.length;for(let e=0;e<t;e++){const t=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(s[e]),r=60*t[1]+parseInt(t[2])+(t[4]?parseInt(t[4])/(2===(t[4]+"").length?100:1e3):0);n.push([r,l])}}}return n=n.filter((t=>t[1])),n.sort(((t,e)=>t[0]-e[0])),n}return[]}console.log("\n %c Svelte APlayer v0.0.9 9b80281 %c http://svelte-aplayer.js.org \n\n","color: #fff; background: #ff3e00; padding:5px 0;","background: #fadfa3; padding:5px 0;");const et=[];function nt(t,e,n){const s=t.slice();return s[71]=e[n],s[73]=n,s}function st(t,e,n){const s=t.slice();return s[74]=e[n],s[76]=n,s}function lt(t){let e,n,s;return{c(){e=p("div"),n=v("svg"),s=v("path"),this.h()},l(t){e=E(t,"DIV",{class:!0});var l=$(e);n=E(l,"svg",{xmlns:!0,version:!0,viewBox:!0,class:!0},1);var r=$(n);s=E(r,"path",{d:!0,class:!0},1),$(s).forEach(f),r.forEach(f),l.forEach(f),this.h()},h(){x(s,"d","M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"),x(s,"class","svelte-3s9nfq"),x(n,"xmlns","http://www.w3.org/2000/svg"),x(n,"version","1.1"),x(n,"viewBox","0 0 16 31"),x(n,"class","svelte-3s9nfq"),x(e,"class","aplayer-button aplayer-play svelte-3s9nfq")},m(t,l){d(t,e,l),u(e,n),u(n,s)},d(t){t&&f(e)}}}function rt(t){let e,n,s;return{c(){e=p("div"),n=v("svg"),s=v("path"),this.h()},l(t){e=E(t,"DIV",{class:!0});var l=$(e);n=E(l,"svg",{xmlns:!0,version:!0,viewBox:!0,class:!0},1);var r=$(n);s=E(r,"path",{d:!0,class:!0},1),$(s).forEach(f),r.forEach(f),l.forEach(f),this.h()},h(){x(s,"d","M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"),x(s,"class","svelte-3s9nfq"),x(n,"xmlns","http://www.w3.org/2000/svg"),x(n,"version","1.1"),x(n,"viewBox","0 0 17 32"),x(n,"class","svelte-3s9nfq"),x(e,"class","aplayer-button aplayer-pause svelte-3s9nfq")},m(t,l){d(t,e,l),u(e,n),u(n,s)},d(t){t&&f(e)}}}function at(t){let e,n,s=[],l=new Map,r=t[6];const a=t=>t[74][0];for(let o=0;o<r.length;o+=1){let e=st(t,r,o),n=a(e);l.set(n,s[o]=ot(n,e))}return{c(){e=p("div"),n=p("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=E(t,"DIV",{class:!0});var l=$(e);n=E(l,"DIV",{class:!0,style:!0});var r=$(n);for(let e=0;e<s.length;e+=1)s[e].l(r);r.forEach(f),l.forEach(f),this.h()},h(){x(n,"class","aplayer-lrc-contents svelte-3s9nfq"),T(n,"transform","translateY("+-16*Math.max(t[7],0)+"px)"),x(e,"class","aplayer-lrc svelte-3s9nfq")},m(t,l){d(t,e,l),u(e,n);for(let e=0;e<s.length;e+=1)s[e].m(n,null)},p(t,e){192&e[0]&&(r=t[6],s=function(t,e,n,s,l,r,a,o,i,c,h,u){let d=t.length,f=r.length,p=d;const v={};for(;p--;)v[t[p].key]=p;const m=[],g=new Map,y=new Map;for(p=f;p--;){const t=u(l,r,p),o=n(t);let i=a.get(o);i?s&&i.p(t,e):(i=c(o,t),i.c()),g.set(o,m[p]=i),o in v&&y.set(o,Math.abs(p-v[o]))}const w=new Set,x=new Set;function $(t){j(t,1),t.m(o,h),a.set(t.key,t),h=t.first,f--}for(;d&&f;){const e=m[f-1],n=t[d-1],s=e.key,l=n.key;e===n?(h=e.first,d--,f--):g.has(l)?!a.has(s)||w.has(s)?$(e):x.has(l)?d--:y.get(s)>y.get(l)?(x.add(s),$(e)):(w.add(l),d--):(i(n,a),d--)}for(;d--;){const e=t[d];g.has(e.key)||i(e,a)}for(;f;)$(m[f-1]);return m}(s,e,a,1,t,r,l,n,X,ot,null,st)),128&e[0]&&T(n,"transform","translateY("+-16*Math.max(t[7],0)+"px)")},d(t){t&&f(e);for(let e=0;e<s.length;e+=1)s[e].d()}}}function ot(t,e){let n,s,l,r=e[74][1]+"";return{key:t,first:null,c(){n=p("p"),s=m(r),l=g(),this.h()},l(t){n=E(t,"P",{class:!0});var e=$(n);s=b(e,r),l=q(e),e.forEach(f),this.h()},h(){x(n,"class","svelte-3s9nfq"),I(n,"aplayer-lrc-current",e[76]===e[7]),this.first=n},m(t,e){d(t,n,e),u(n,s),u(n,l)},p(t,l){e=t,64&l[0]&&r!==(r=e[74][1]+"")&&M(s,r),192&l[0]&&I(n,"aplayer-lrc-current",e[76]===e[7])},d(t){t&&f(n)}}}function it(e){let n,s;return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new D(s)},m(t,e){n.m('<svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  version="1.1"\n                  viewBox="0 0 28 32"\n                  ><path\n                    d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"\n                  /></svg\n        >',t,e),d(t,s,e)},p:t,d(t){t&&f(s),t&&n.d()}}}function ct(e){let n,s;return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new D(s)},m(t,e){n.m('<svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  version="1.1"\n                  viewBox="0 0 28 32"\n                  ><path\n                    d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"\n                  /></svg\n                >',t,e),d(t,s,e)},p:t,d(t){t&&f(s),t&&n.d()}}}function ht(e){let n,s;return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new D(s)},m(t,e){n.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 32 32"\n                ><path\n                  d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"\n                /></svg\n              >',t,e),d(t,s,e)},p:t,d(t){t&&f(s),t&&n.d()}}}function ut(e){let n,s;return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new D(s)},m(t,e){n.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 32 32"\n                ><path\n                  d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"\n                /></svg\n              >',t,e),d(t,s,e)},p:t,d(t){t&&f(s),t&&n.d()}}}function dt(e){let n,s;return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new D(s)},m(t,e){n.m(' <svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 29 32"\n                ><path\n                  d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"\n                /></svg\n              >',t,e),d(t,s,e)},p:t,d(t){t&&f(s),t&&n.d()}}}function ft(e){let n,s;return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new D(s)},m(t,e){n.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 33 32"\n                ><path\n                  d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"\n                /></svg\n              >',t,e),d(t,s,e)},p:t,d(t){t&&f(s),t&&n.d()}}}function pt(e){let n,s;return{c(){s=y(),this.h()},l(t){s=y(),this.h()},h(){n=new D(s)},m(t,e){n.m('<svg\n                xmlns="http://www.w3.org/2000/svg"\n                version="1.1"\n                viewBox="0 0 29 32"\n                ><path\n                  d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"\n                /></svg\n              >',t,e),d(t,s,e)},p:t,d(t){t&&f(s),t&&n.d()}}}function vt(e){let n,s,l,r,a;return{c(){n=p("button"),s=v("svg"),l=v("path"),this.h()},l(t){n=E(t,"BUTTON",{type:!0,class:!0});var e=$(n);s=E(e,"svg",{xmlns:!0,version:!0,viewBox:!0,class:!0},1);var r=$(s);l=E(r,"path",{d:!0,class:!0},1),$(l).forEach(f),r.forEach(f),e.forEach(f),this.h()},h(){x(l,"d","M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"),x(l,"class","svelte-3s9nfq"),x(s,"xmlns","http://www.w3.org/2000/svg"),x(s,"version","1.1"),x(s,"viewBox","0 0 22 32"),x(s,"class","svelte-3s9nfq"),x(n,"type","button"),x(n,"class","aplayer-icon aplayer-icon-menu svelte-3s9nfq")},m(t,o){d(t,n,o),u(n,s),u(s,l),r||(a=w(n,"click",e[57]),r=!0)},p:t,d(t){t&&f(n),r=!1,a()}}}function mt(t){let e;return{c(){e=p("span"),this.h()},l(t){e=E(t,"SPAN",{class:!0}),$(e).forEach(f),this.h()},h(){x(e,"class","aplayer-list-cur svelte-3s9nfq")},m(t,n){d(t,e,n)},d(t){t&&f(e)}}}function gt(t){let e,n,s,l,r,a,o,i,c,h,v,y,T,I=t[73]+1+"",D=t[71].name+"",_=t[71].artist+"",A=t[73]===t[18].playingIndex&&mt();function k(){return t[58](t[73])}return{c(){e=p("li"),A&&A.c(),n=g(),s=p("span"),l=m(I),r=g(),a=p("span"),o=m(D),i=g(),c=p("span"),h=m(_),v=g(),this.h()},l(t){e=E(t,"LI",{class:!0});var u=$(e);A&&A.l(u),n=q(u),s=E(u,"SPAN",{class:!0});var d=$(s);l=b(d,I),d.forEach(f),r=q(u),a=E(u,"SPAN",{class:!0});var p=$(a);o=b(p,D),p.forEach(f),i=q(u),c=E(u,"SPAN",{class:!0});var m=$(c);h=b(m,_),m.forEach(f),v=q(u),u.forEach(f),this.h()},h(){x(s,"class","aplayer-list-index svelte-3s9nfq"),x(a,"class","aplayer-list-title"),x(c,"class","aplayer-list-artist svelte-3s9nfq"),x(e,"class","svelte-3s9nfq")},m(t,f){d(t,e,f),A&&A.m(e,null),u(e,n),u(e,s),u(s,l),u(e,r),u(e,a),u(a,o),u(e,i),u(e,c),u(c,h),u(e,v),y||(T=w(e,"click",k),y=!0)},p(s,l){(t=s)[73]===t[18].playingIndex?A||(A=mt(),A.c(),A.m(e,n)):A&&(A.d(1),A=null),16&l[0]&&D!==(D=t[71].name+"")&&M(o,D),16&l[0]&&_!==(_=t[71].artist+"")&&M(h,_)},d(t){t&&f(e),A&&A.d(),y=!1,T()}}}function yt(e){let n,s,a,o,i,c,h,v,y,D,_,A,k,S,L,B,N,P,z,V,C,O,H,R,U,Y,j,X,W,F,J,G,K,Q,tt,et,st,ot,mt,yt,wt,xt,$t,Et,bt,qt,Mt,Tt,It=e[5].name+"",Dt=e[5].artist+"",_t=e[20].ptime+"",At=e[20].duration+"";function kt(t,e){return t[1].paused?lt:rt}let St=kt(e),Lt=St(e),Bt=e[5].lrc&&at(e);function Nt(t,e){return t[22].muted||t[1].muted?ct:it}let Pt=Nt(e),zt=Pt(e);function Vt(t,e){return"random"===t[17].order?ut:ht}let Ct=Vt(e),Ot=Ct(e);function Ht(t,e){return"none"===t[17].loop?pt:"one"===t[17].loop?ft:"all"===t[17].loop?dt:void 0}let Rt=Ht(e),Ut=Rt&&Rt(e),Yt=e[4].length>1&&vt(e),jt=e[4],Xt=[];for(let t=0;t<jt.length;t+=1)Xt[t]=gt(nt(e,jt,t));return{c(){n=p("div"),s=p("div"),a=p("div"),Lt.c(),o=g(),i=p("div"),c=p("div"),h=p("span"),v=m(It),y=g(),D=p("span"),_=m(Dt),A=g(),Bt&&Bt.c(),k=g(),S=p("div"),L=p("div"),B=p("div"),N=p("div"),P=g(),z=p("div"),V=p("div"),C=p("span"),O=g(),H=p("div"),R=p("span"),U=p("span"),Y=m(_t),j=m(" /\n            "),X=p("span"),W=m(At),F=g(),J=p("span"),G=g(),K=p("div"),Q=p("button"),zt.c(),tt=g(),et=p("div"),st=p("div"),ot=p("div"),mt=g(),yt=p("button"),Ot.c(),wt=g(),xt=p("button"),Ut&&Ut.c(),$t=g(),Yt&&Yt.c(),Et=g(),bt=p("div"),qt=p("ol");for(let t=0;t<Xt.length;t+=1)Xt[t].c();this.h()},l(t){n=E(t,"DIV",{class:!0});var e=$(n);s=E(e,"DIV",{class:!0});var l=$(s);a=E(l,"DIV",{class:!0,style:!0});var r=$(a);Lt.l(r),r.forEach(f),o=q(l),i=E(l,"DIV",{class:!0});var u=$(i);c=E(u,"DIV",{class:!0});var d=$(c);h=E(d,"SPAN",{class:!0});var p=$(h);v=b(p,It),p.forEach(f),y=q(d),D=E(d,"SPAN",{class:!0});var m=$(D);_=b(m,Dt),m.forEach(f),d.forEach(f),A=q(u),Bt&&Bt.l(u),k=q(u),S=E(u,"DIV",{class:!0});var g=$(S);L=E(g,"DIV",{class:!0});var w=$(L);B=E(w,"DIV",{class:!0});var x=$(B);N=E(x,"DIV",{class:!0,style:!0}),$(N).forEach(f),P=q(x),z=E(x,"DIV",{class:!0,style:!0});var M=$(z);V=E(M,"DIV",{class:!0});var T=$(V);C=E(T,"SPAN",{class:!0,style:!0}),$(C).forEach(f),T.forEach(f),M.forEach(f),x.forEach(f),w.forEach(f),O=q(g),H=E(g,"DIV",{class:!0});var I=$(H);R=E(I,"SPAN",{class:!0});var Z=$(R);U=E(Z,"SPAN",{class:!0});var nt=$(U);Y=b(nt,_t),nt.forEach(f),j=b(Z," /\n            "),X=E(Z,"SPAN",{class:!0});var lt=$(X);W=b(lt,At),lt.forEach(f),Z.forEach(f),F=q(I),J=E(I,"SPAN",{hidden:!0}),$(J).forEach(f),G=q(I),K=E(I,"DIV",{class:!0});var rt=$(K);Q=E(rt,"BUTTON",{type:!0,class:!0});var at=$(Q);zt.l(at),at.forEach(f),tt=q(rt),et=E(rt,"DIV",{class:!0});var it=$(et);st=E(it,"DIV",{class:!0});var ct=$(st);ot=E(ct,"DIV",{class:!0,style:!0}),$(ot).forEach(f),ct.forEach(f),it.forEach(f),rt.forEach(f),mt=q(I),yt=E(I,"BUTTON",{type:!0,class:!0});var ht=$(yt);Ot.l(ht),ht.forEach(f),wt=q(I),xt=E(I,"BUTTON",{type:!0,class:!0});var ut=$(xt);Ut&&Ut.l(ut),ut.forEach(f),$t=q(I),Yt&&Yt.l(I),I.forEach(f),g.forEach(f),u.forEach(f),Et=q(l),bt=E(l,"DIV",{class:!0,style:!0});var dt=$(bt);qt=E(dt,"OL",{class:!0});var ft=$(qt);for(let n=0;n<Xt.length;n+=1)Xt[n].l(ft);ft.forEach(f),dt.forEach(f),l.forEach(f),e.forEach(f),this.h()},h(){x(a,"class","aplayer-pic svelte-3s9nfq"),T(a,"background-image","url( "+e[5].cover+" )"),x(h,"class","aplayer-title svelte-3s9nfq"),x(D,"class","aplayer-artist svelte-3s9nfq"),x(c,"class","aplayer-music svelte-3s9nfq"),x(N,"class","aplayer-loaded svelte-3s9nfq"),T(N,"width",e[19].bufferPercentage),x(C,"class","aplayer-loading-icon"),T(C,"display",e[21]?"inline":"none"),x(V,"class","aplayer-thumb svelte-3s9nfq"),x(z,"class","aplayer-played svelte-3s9nfq"),T(z,"width",e[20].playPercentage),x(B,"class","aplayer-bar svelte-3s9nfq"),x(L,"class","aplayer-bar-wrap svelte-3s9nfq"),x(U,"class","aplayer-ptime"),x(X,"class","aplayer-dtime"),x(R,"class","aplayer-time-inner svelte-3s9nfq"),J.hidden=!0,x(Q,"type","button"),x(Q,"class","aplayer-icon aplayer-icon-volume-down svelte-3s9nfq"),x(ot,"class","aplayer-volume svelte-3s9nfq"),T(ot,"height",e[1].muted?"0px":e[22].volumePercentage),x(st,"class","aplayer-volume-bar svelte-3s9nfq"),x(et,"class","aplayer-volume-bar-wrap svelte-3s9nfq"),x(K,"class","aplayer-volume-wrap svelte-3s9nfq"),x(yt,"type","button"),x(yt,"class","aplayer-icon aplayer-icon-order svelte-3s9nfq"),x(xt,"type","button"),x(xt,"class","aplayer-icon aplayer-icon-loop svelte-3s9nfq"),x(H,"class","aplayer-time svelte-3s9nfq"),x(S,"class","aplayer-controller svelte-3s9nfq"),x(i,"class","aplayer-info svelte-3s9nfq"),x(qt,"class","svelte-3s9nfq"),x(bt,"class","aplayer-list svelte-3s9nfq"),T(bt,"height",e[17].showList?`${e[16]}px`:"0px"),x(s,"class","aplayer-body  svelte-3s9nfq"),x(n,"class","aplayer svelte-3s9nfq"),I(n,"aplayer-withlrc",e[6].length>0),I(n,"aplayer-withlist",e[4].length>1),I(n,"aplayer-narrow",e[0]),I(n,"aplayer-mobile",Z)},m(t,l){d(t,n,l),u(n,s),u(s,a),Lt.m(a,null),u(s,o),u(s,i),u(i,c),u(c,h),u(h,v),u(c,y),u(c,D),u(D,_),u(i,A),Bt&&Bt.m(i,null),u(i,k),u(i,S),u(S,L),u(L,B),u(B,N),u(B,P),u(B,z),u(z,V),u(V,C),C.innerHTML='<svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    version="1.1"\n                    viewBox="0 0 32 32"\n                    ><path\n                      d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"\n                    /></svg\n                  >',e[52](L),u(S,O),u(S,H),u(H,R),u(R,U),u(U,Y),u(R,j),u(R,X),u(X,W),u(H,F),u(H,J),u(H,G),u(H,K),u(K,Q),zt.m(Q,null),u(K,tt),u(K,et),u(et,st),u(st,ot),e[54](st),u(H,mt),u(H,yt),Ot.m(yt,null),u(H,wt),u(H,xt),Ut&&Ut.m(xt,null),u(H,$t),Yt&&Yt.m(H,null),u(s,Et),u(s,bt),u(bt,qt);for(let e=0;e<Xt.length;e+=1)Xt[e].m(qt,null);e[59](bt),e[60](n),Mt||(Tt=[w(a,"click",e[51]),w(L,"mousedown",(function(){r(e[13])&&e[13].apply(this,arguments)})),w(L,"mousemove",(function(){r(e[14])&&e[14].apply(this,arguments)})),w(L,"mouseup",(function(){r(e[15])&&e[15].apply(this,arguments)})),w(L,"mouseleave",(function(){r(e[15])&&e[15].apply(this,arguments)})),w(L,"touchstart",(function(){r(e[13])&&e[13].apply(this,arguments)})),w(L,"touchmove",(function(){r(e[14])&&e[14].apply(this,arguments)})),w(L,"touchend",(function(){r(e[15])&&e[15].apply(this,arguments)})),w(Q,"click",e[53],!0),w(et,"mousedown",(function(){r(e[10])&&e[10].apply(this,arguments)})),w(et,"mousemove",(function(){r(e[11])&&e[11].apply(this,arguments)})),w(et,"mouseup",(function(){r(e[12])&&e[12].apply(this,arguments)})),w(et,"mouseleave",(function(){r(e[12])&&e[12].apply(this,arguments)})),w(et,"touchstart",(function(){r(e[10])&&e[10].apply(this,arguments)})),w(et,"touchmove",(function(){r(e[11])&&e[11].apply(this,arguments)})),w(et,"touchend",(function(){r(e[12])&&e[12].apply(this,arguments)})),w(yt,"click",e[55]),w(xt,"click",e[56])],Mt=!0)},p(t,s){if(St!==(St=kt(e=t))&&(Lt.d(1),Lt=St(e),Lt&&(Lt.c(),Lt.m(a,null))),32&s[0]&&T(a,"background-image","url( "+e[5].cover+" )"),32&s[0]&&It!==(It=e[5].name+"")&&M(v,It),32&s[0]&&Dt!==(Dt=e[5].artist+"")&&M(_,Dt),e[5].lrc?Bt?Bt.p(e,s):(Bt=at(e),Bt.c(),Bt.m(i,k)):Bt&&(Bt.d(1),Bt=null),524288&s[0]&&T(N,"width",e[19].bufferPercentage),2097152&s[0]&&T(C,"display",e[21]?"inline":"none"),1048576&s[0]&&T(z,"width",e[20].playPercentage),1048576&s[0]&&_t!==(_t=e[20].ptime+"")&&M(Y,_t),1048576&s[0]&&At!==(At=e[20].duration+"")&&M(W,At),Pt===(Pt=Nt(e))&&zt?zt.p(e,s):(zt.d(1),zt=Pt(e),zt&&(zt.c(),zt.m(Q,null))),4194306&s[0]&&T(ot,"height",e[1].muted?"0px":e[22].volumePercentage),Ct===(Ct=Vt(e))&&Ot?Ot.p(e,s):(Ot.d(1),Ot=Ct(e),Ot&&(Ot.c(),Ot.m(yt,null))),Rt===(Rt=Ht(e))&&Ut?Ut.p(e,s):(Ut&&Ut.d(1),Ut=Rt&&Rt(e),Ut&&(Ut.c(),Ut.m(xt,null))),e[4].length>1?Yt?Yt.p(e,s):(Yt=vt(e),Yt.c(),Yt.m(H,null)):Yt&&(Yt.d(1),Yt=null),262162&s[0]){let t;for(jt=e[4],t=0;t<jt.length;t+=1){const n=nt(e,jt,t);Xt[t]?Xt[t].p(n,s):(Xt[t]=gt(n),Xt[t].c(),Xt[t].m(qt,null))}for(;t<Xt.length;t+=1)Xt[t].d(1);Xt.length=jt.length}196608&s[0]&&T(bt,"height",e[17].showList?`${e[16]}px`:"0px"),64&s[0]&&I(n,"aplayer-withlrc",e[6].length>0),16&s[0]&&I(n,"aplayer-withlist",e[4].length>1),1&s[0]&&I(n,"aplayer-narrow",e[0])},i:t,o:t,d(t){t&&f(n),Lt.d(),Bt&&Bt.d(),e[52](null),zt.d(),e[54](null),Ot.d(),Ut&&Ut.d(),Yt&&Yt.d(),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(Xt,t),e[59](null),e[60](null),Mt=!1,l(Tt)}}}function wt(t,n,s){let l,r,a,o,u,d,f,p,v,m,g,y,w,x,$,E;var b,q;const M=k(),T=S(),I=(t,e)=>{T(t,e),M.dispatchEvent&&M.dispatchEvent(new CustomEvent(t,{detail:e}))},{player:D,playList:_,audioList:A,currentSong:L,rdTime:N,currentTime:P,duration:z,rdBufTime:V,wtBufTime:C,loading:O,lrc:H,controlState:R,volumeState:U}=function(t){const e=document.createElement("audio");et.push(e),function(t,e){["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"].forEach((n=>{t.addEventListener(n,(t=>{e(n,t)}))}))}(e,t);let n=G(0),s=G(NaN);const l=K([n,s],(([t,e])=>{let n=t/e;return n=Math.max(n,0),n=Math.min(n,1),n*=100,{ptime:Q(t),duration:Q(e),playPercentage:`${n}%`}}));let r=G(0);const a=K([r,s],(([t,e])=>{let n=t/e;return n=Math.max(n,0),n=Math.min(n,1),n*=100,{bufferPercentage:`${n}%`,bufTime:t}})),o=G({playingIndex:0,audio:[]}),i=K(o,(t=>t.audio)),c=G({volume:.7,loop:"all",order:"list",showList:!0}),h=K(c,(t=>({volumePercentage:100*t.volume+"%",muted:0===t.volume}))),u=K(o,(t=>t.audio[t.playingIndex])),d=K([a,n],(([{bufTime:t},n])=>!e.paused&&(e.readyState<=HTMLMediaElement.HAVE_CURRENT_DATA||t-n<2&&e.readyState===HTMLMediaElement.HAVE_FUTURE_DATA))),f=K(u,((t,e)=>{if(!t||!t.lrc)return void e([]);const n=t.lrc;n.startsWith("http")?fetch(n).then((t=>{if(!t.ok)throw new Error(`${t.statusText} canot loading lrc from ${n}`);return t.text()})).then((t=>{e(tt(t))})).catch((t=>{throw e([]),console.error(t),t})):e(tt(n))}),[]);let p=!1;return u.subscribe((e=>{p&&t("listswitch",e),p=!0})),i.subscribe((t=>{p=!0})),f.subscribe((e=>{e.length>0?t("lrcshow"):t("lrchide")})),{player:e,playList:o,audioList:i,currentSong:u,rdTime:l,currentTime:n,duration:s,rdBufTime:a,wtBufTime:r,loading:d,lrc:f,controlState:c,volumeState:h}}(I);i(t,_,(t=>s(18,d=t))),i(t,A,(t=>s(4,f=t))),i(t,L,(t=>s(5,p=t))),i(t,N,(t=>s(20,x=t))),i(t,P,(t=>s(63,m=t))),i(t,z,(t=>s(64,g=t))),i(t,V,(t=>s(19,w=t))),i(t,C,(t=>s(65,y=t))),i(t,O,(t=>s(21,$=t))),i(t,H,(t=>s(6,v=t))),i(t,R,(t=>s(17,u=t))),i(t,U,(t=>s(22,E=t)));let{audio:Y}=n,{order:j=u.order}=n,{loop:X=u.loop}=n,{volume:W=u.volume}=n,{mini:F=!1}=n,{mutex:J=!0}=n,{autoplay:Z=!1}=n,{theme:nt="#fadfa3"}=n,{list_max_height:st=1/0}=n,lt=!Z;const rt=()=>{J&&et.forEach((t=>t.pause())),D.play().catch((t=>{console.error(t)}))};let at=-1;D.addEventListener("timeupdate",(()=>{if(h(P,m=D.currentTime,m),o.includes("lrc")){for(;at>0&&D.currentTime<v[at][0];)s(7,at--,at);for(;at+1<v.length&&D.currentTime>=v[at+1][0];)s(7,at++,at)}})),D.addEventListener("volumechange",(()=>{h(R,u.volume=D.volume,u)})),D.addEventListener("loadedmetadata",(()=>{h(z,g=D.duration,g)})),D.addEventListener("error",(()=>{console.warn("An audio error has occurred, player will skip forward in 2 seconds."),f.length>1&&setTimeout((()=>{h(_,d.playingIndex=(d.playingIndex+1)%f.length,d),D.paused&&rt()}),2e3)}));const ot=()=>{const t=D.buffered.length?D.buffered.end(D.buffered.length-1):0;h(C,y=t,y)};D.addEventListener("progress",ot),D.addEventListener("canplay",ot),D.addEventListener("durationchange",(()=>{h(z,g=D.duration,g)}));let it,ct,ht,ut,dt,ft,pt,vt,mt;D.addEventListener("ended",(()=>{const t=f,e=(d.playingIndex+1)%t.length;if("none"===u.loop){if("list"===u.order)d.playingIndex<t.length-1?(h(_,d.playingIndex=e,d),s(1,D.currentTime=0,D)):(h(_,d.playingIndex=(d.playingIndex+1)%t.length,d),s(47,lt=!0),D.pause());else if("random"===u.order){const n=Math.floor(t.length*Math.random());n===d.playingIndex?h(_,d.playingIndex=e,d):h(_,d.playingIndex=n,d),s(1,D.currentTime=0,D)}}else"one"===u.loop?s(1,D.currentTime=0,D):"all"===u.loop&&h(_,d.playingIndex=e,d)}));let gt,yt=0;var wt;wt=()=>{"localhost"===location.hostname&&(window.theAudio=D);const t=function(t,e){let n=!1;return{volumeDragStart:()=>{n=!0},volumeDragMove:s=>{if(n){let n=1-((s.clientY||s.changedTouches[0].clientY)-e.getBoundingClientRect().top)/e.clientHeight;n=Math.max(n,0),n=Math.min(n,1),t.volume=n}},volumeDragEnd:s=>{if(n){let l=1-((s.clientY||s.changedTouches[0].clientY)-e.getBoundingClientRect().top)/e.clientHeight;l=Math.max(l,0),l=Math.min(l,1),t.volume=l,n=!1}}}}(D,it);s(10,ht=t.volumeDragStart),s(11,ut=t.volumeDragMove),s(12,dt=t.volumeDragEnd);const e=function(t,e){let n=!1;return{progressDragStart:()=>{n=!0},progressDragMove:s=>{if(n){let n=((s.clientX||s.changedTouches[0].clientX)-e.getBoundingClientRect().left)/e.clientWidth;n=Math.max(n,0),n=Math.min(n,1),t.currentTime=t.duration*n}},progressDragEnd:s=>{if(n){n=!1;let l=((s.clientX||s.changedTouches[0].clientX)-e.getBoundingClientRect().left)/e.clientWidth;l=Math.max(l,0),l=Math.min(l,1),t.currentTime=t.duration*l}}}}(D,ct);s(13,ft=e.progressDragStart),s(14,pt=e.progressDragMove),s(15,vt=e.progressDragEnd)},k().$$.on_mount.push(wt),function(t){k().$$.on_destroy.push(t)}((()=>{I("destroy")}));return t.$$set=t=>{s(70,n=e(e({},n),c(t))),"audio"in t&&s(37,Y=t.audio),"order"in t&&s(38,j=t.order),"loop"in t&&s(39,X=t.loop),"volume"in t&&s(40,W=t.volume),"mini"in t&&s(0,F=t.mini),"mutex"in t&&s(41,J=t.mutex),"autoplay"in t&&s(42,Z=t.autoplay),"theme"in t&&s(43,nt=t.theme),"list_max_height"in t&&s(44,st=t.list_max_height)},t.$$.update=()=>{64&t.$$.dirty[1]&&s(48,l="string"==typeof Y?JSON.parse(Y):Y),131072&t.$$.dirty[1]&&h(_,d.audio=Array.isArray(l)?l:[l],d),s(49,r=!function(t,e){const n=t[e];return!(null==n||"false"===n)}(n,"list_folded")&&f.length>1),262144&t.$$.dirty[1]&&h(R,u.showList=r,u),256&t.$$.dirty[1]&&h(R,u.loop=X,u),128&t.$$.dirty[1]&&h(R,u.order=j,u),512&t.$$.dirty[1]&&h(R,u.volume=W,u),4&t.$$.dirty[0]|24576&t.$$.dirty[1]&&s(16,yt=Math.min(null!==s(45,b=null==mt?void 0:mt.scrollHeight)&&void 0!==b?b:0,st)),512&t.$$.dirty[1]&&s(1,D.volume=W,D),32&t.$$.dirty[0]&&s(1,D.src=p.url,D),32&t.$$.dirty[0]|36864&t.$$.dirty[1]&&s(50,a=null!==s(46,q=p.theme)&&void 0!==q?q:nt),8&t.$$.dirty[0]|524288&t.$$.dirty[1]&&gt&&gt.style.setProperty("--theme-color",a),64&t.$$.dirty[0]&&(o=v&&v.length>0?"withlrc":""),2&t.$$.dirty[0]|65536&t.$$.dirty[1]&&(D.src,s(7,at=-1),lt||rt(),s(47,lt=!1))},n=c(n),[F,D,mt,gt,f,p,v,at,it,ct,ht,ut,dt,ft,pt,vt,yt,u,d,w,x,$,E,I,_,A,L,N,P,z,V,C,O,H,R,U,rt,Y,j,X,W,J,Z,nt,st,b,q,lt,l,r,a,()=>{D.paused?rt():D.pause()},function(t){B[t?"unshift":"push"]((()=>{ct=t,s(9,ct)}))},()=>{s(1,D.muted=!D.muted,D)},function(t){B[t?"unshift":"push"]((()=>{it=t,s(8,it)}))},()=>{h(R,u.order="list"===u.order?"random":"list",u)},()=>{"all"===u.loop?h(R,u.loop="one",u):"one"===u.loop?h(R,u.loop="none",u):"none"===u.loop&&h(R,u.loop="all",u)},()=>{h(R,u.showList=!u.showList,u),u.showList?I("listshow"):I("listhide")},t=>{h(_,d.playingIndex=t,d),s(1,D.currentTime=0,D)},function(t){B[t?"unshift":"push"]((()=>{mt=t,s(2,mt)}))},function(t){B[t?"unshift":"push"]((()=>{gt=t,s(3,gt)}))}]}export default class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),F(this,t,wt,yt,a,{audio:37,order:38,loop:39,volume:40,mini:0,mutex:41,autoplay:42,theme:43,list_max_height:44},[-1,-1,-1])}}
