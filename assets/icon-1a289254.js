import{p as d,H as p,g as b,h as r,t as v,b as g,B as y,e as w}from"./dom-5b7af1bf.js";import{c as D}from"./observers-c77bfda3.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const z={icon:"icon",flipRtl:"flip-rtl"},m={},h={},u={s:16,m:24,l:32};async function k({icon:t,scale:i}){const a=u[i],e=x(t),s=e.charAt(e.length-1)==="F",n=`${s?e.substring(0,e.length-1):e}${a}${s?"F":""}`;if(m[n])return m[n];h[n]||(h[n]=fetch(w(`./assets/icon/${n}.json`)).then(l=>l.json()).catch(()=>(console.error(`"${n}" is not a valid calcite-ui-icon name`),"")));const c=await h[n];return m[n]=c,c}function x(t){const i=!isNaN(Number(t.charAt(0))),a=t.split("-");return a.length===1?i?`i${t}`:t:a.map((e,s)=>s===0?i?`i${e.toUpperCase()}`:e:e.charAt(0).toUpperCase()+e.slice(1)).join("")}const _="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}",C=d(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){var t;(t=this.intersectionObserver)===null||t===void 0||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:i,pathData:a,scale:e,textLabel:s}=this,f=b(t),n=u[e],c=!!s,l=[].concat(a||"");return r(g,{"aria-hidden":v(!c),"aria-label":c?s:null,role:c?"img":null},r("svg",{class:{[z.flipRtl]:f==="rtl"&&i,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${n} ${n}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},l.map(o=>typeof o=="string"?r("path",{d:o}):r("path",{d:o.d,opacity:"opacity"in o?o.opacity:1}))))}async loadIconPathData(){const{icon:t,scale:i,visible:a}=this;!y.isBrowser||!t||!a||(this.pathData=await k({icon:t,scale:i}))}waitUntilVisible(t){if(this.intersectionObserver=D("intersection",i=>{i.forEach(a=>{a.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),!this.intersectionObserver){t();return}this.intersectionObserver.observe(this.el)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return _}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function I(){if(typeof customElements>"u")return;["calcite-icon"].forEach(i=>{switch(i){case"calcite-icon":customElements.get(i)||customElements.define(i,C);break}})}I();export{C as I,I as d};
