var G=Object.defineProperty;var J=(e,t,n)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var C=(e,t,n)=>(J(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function w(){}function T(e){return e()}function B(){return Object.create(null)}function O(e){e.forEach(T)}function k(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function I(e){return e??""}function h(e,t){e.appendChild(t)}function q(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function X(e){return document.createTextNode(e)}function N(){return X(" ")}function H(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function p(e,t,n){t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:d(e,t,n)}function Y(e){return Array.from(e.childNodes)}let P;function $(e){P=e}const g=[],j=[];let y=[];const A=[],Z=Promise.resolve();let z=!1;function ee(){z||(z=!0,Z.then(K))}function M(e){y.push(e)}function te(e){A.push(e)}const L=new Set;let m=0;function K(){if(m!==0)return;const e=P;do{try{for(;m<g.length;){const t=g[m];m++,$(t),ne(t.$$)}}catch(t){throw g.length=0,m=0,t}for($(null),g.length=0,m=0;j.length;)j.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];L.has(n)||(L.add(n),n())}y.length=0}while(g.length);for(;A.length;)A.pop()();z=!1,L.clear(),$(e)}function ne(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}function se(e){const t=[],n=[];y.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),y=t}const x=new Set;let ie;function R(e,t){e&&e.i&&(x.delete(e),e.i(t))}function oe(e,t,n,s){if(e&&e.o){if(x.has(e))return;x.add(e),ie.c.push(()=>{x.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function re(e,t,n){const s=e.$$.props[t];s!==void 0&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function le(e){e&&e.c()}function U(e,t,n){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,n),M(()=>{const o=e.$$.on_mount.map(T).filter(k);e.$$.on_destroy?e.$$.on_destroy.push(...o):O(o),e.$$.on_mount=[]}),i.forEach(M)}function V(e,t){const n=e.$$;n.fragment!==null&&(se(n.after_update),O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(e,t){e.$$.dirty[0]===-1&&(g.push(e),ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,s,i,o,f,u=[-1]){const a=P;$(e);const l=e.$$={fragment:null,ctx:[],props:o,update:w,not_equal:i,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:B(),dirty:u,skip_bound:!1,root:t.target||a.$$.root};f&&f(l.root);let _=!1;if(l.ctx=n?n(e,t.props||{},(r,c,...v)=>{const S=v.length?v[0]:c;return l.ctx&&i(l.ctx[r],l.ctx[r]=S)&&(!l.skip_bound&&l.bound[r]&&l.bound[r](S),_&&fe(e,r)),c}):[],l.update(),_=!0,O(l.before_update),l.fragment=s?s(l.ctx):!1,t.target){if(t.hydrate){const r=Y(t.target);l.fragment&&l.fragment.l(r),r.forEach(E)}else l.fragment&&l.fragment.c();t.intro&&R(e.$$.fragment),U(e,t.target,t.anchor),K()}$(a)}class D{constructor(){C(this,"$$");C(this,"$$set")}$destroy(){V(this,1),this.$destroy=w}$on(t,n){if(!k(n))return w;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!Q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ue="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ue);function ce(e){let t,n,s,i,o,f,u,a,l,_;return{c(){t=b("div"),n=b("p"),n.textContent="Mono County",s=N(),i=b("replay-web-page"),f=N(),u=b("div"),u.innerHTML='<p>Webpage</p> <p><a href="https://monocounty.ca.gov/sites/default/files/fileattachments/board_of_supervisors/meeting/30464/r20-93.pdf">https://monocounty.ca.gov/sites/default/files/fileattachments/board_of_supervisors/meeting/30464/r20-93.pdf</a></p>',d(n,"class","info-title svelte-13d9qm"),p(i,"id","embed"),p(i,"source",o="/assets/"+e[1]),p(i,"embed","replay-only"),p(i,"url","https://monocounty.ca.gov/sites/default/files/fileattachments/board_of_supervisors/meeting/30464/r20-93.pdf"),p(i,"class","svelte-13d9qm"),d(u,"id","info"),d(u,"class","svelte-13d9qm"),d(t,"id","wacz-popup"),d(t,"class",a=I(e[0]?"visible":"")+" svelte-13d9qm")},m(r,c){q(r,t,c),h(t,n),h(t,s),h(t,i),h(t,f),h(t,u),l||(_=H(t,"click",e[2]),l=!0)},p(r,[c]){c&2&&o!==(o="/assets/"+r[1])&&p(i,"source",o),c&1&&a!==(a=I(r[0]?"visible":"")+" svelte-13d9qm")&&d(t,"class",a)},i:w,o:w,d(r){r&&E(t),l=!1,_()}}}function ae(e,t,n){let{visible:s}=t,{filename:i}=t;const o=fetch("https://giacomobg.github.io.wacz-component/dist/assets/"+i+".content.json").contentMetadata;console.log(o),fetch("https://giacomobg.github.io.wacz-component/dist/assets/"+i+".json");function f(){n(0,s=!1)}return e.$$set=u=>{"visible"in u&&n(0,s=u.visible),"filename"in u&&n(1,i=u.filename)},[s,i,f]}class de extends D{constructor(t){super(),W(this,t,ae,ce,F,{visible:0,filename:1})}}function _e(e){let t,n,s,i,o,f,u,a;function l(r){e[2](r)}let _={filename:pe};return e[0]!==void 0&&(_.visible=e[0]),t=new de({props:_}),j.push(()=>re(t,"visible",l)),{c(){le(t.$$.fragment),s=N(),i=b("main"),o=b("button"),o.textContent="Click this to trigger bringing up the Mono County embed",d(o,"id","show-info"),d(o,"class","svelte-ahqomz"),d(i,"class","svelte-ahqomz")},m(r,c){U(t,r,c),q(r,s,c),q(r,i,c),h(i,o),f=!0,u||(a=H(o,"click",e[1]),u=!0)},p(r,[c]){const v={};!n&&c&1&&(n=!0,v.visible=r[0],te(()=>n=!1)),t.$set(v)},i(r){f||(R(t.$$.fragment,r),f=!0)},o(r){oe(t.$$.fragment,r),f=!1},d(r){r&&(E(s),E(i)),V(t,r),u=!1,a()}}}let pe="mono-county-pdf-01-2023-08-25T15-57-33.wacz";function me(e,t,n){let s=!1;function i(){n(0,s=!0)}function o(f){s=f,n(0,s)}return[s,i,o]}class he extends D{constructor(t){super(),W(this,t,me,_e,F,{})}}new he({target:document.getElementById("app")});
