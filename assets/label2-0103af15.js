import{q as E,i as C}from"./dom-5b7af1bf.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const v="calciteInternalLabelClick",b="calciteInternalLabelConnected",o="calciteInternaLabelDisconnected",L="calcite-label",d=new WeakMap,c=new WeakMap,r=new WeakMap,i=new Set,f=e=>{const{id:t}=e,n=t&&E(e,{selector:`${L}[for="${t}"]`});if(n)return n;const l=C(e,L);return!l||h(l,e)?null:l};function h(e,t){let n;const l="custom-element-ancestor-check",u=a=>{a.stopImmediatePropagation();const s=a.composedPath();n=s.slice(s.indexOf(t),s.indexOf(e))};return e.addEventListener(l,u,{once:!0}),t.dispatchEvent(new CustomEvent(l,{composed:!0,bubbles:!0})),e.removeEventListener(l,u),n.filter(a=>a!==t&&a!==e).filter(a=>{var s;return(s=a.tagName)===null||s===void 0?void 0:s.includes("-")}).length>0}function k(e){const t=f(e.el);if(d.has(t)||!t&&i.has(e))return;const n=w.bind(e);if(t){e.labelEl=t;const l=g.bind(e);d.set(e.labelEl,l),e.labelEl.addEventListener(v,l),i.delete(e),document.removeEventListener(b,c.get(e)),r.set(e,n),document.addEventListener(o,n)}else i.has(e)||(n(),document.removeEventListener(o,r.get(e)))}function x(e){if(i.delete(e),document.removeEventListener(b,c.get(e)),document.removeEventListener(o,r.get(e)),c.delete(e),r.delete(e),!e.labelEl)return;const t=d.get(e.labelEl);e.labelEl.removeEventListener(v,t),d.delete(e.labelEl)}function D(e){var t,n;return e.label||((n=(t=e.labelEl)===null||t===void 0?void 0:t.textContent)===null||n===void 0?void 0:n.trim())||""}function g(e){this.disabled||this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e)}function m(){i.has(this)&&k(this)}function w(){i.add(this);const e=c.get(this)||m.bind(this);c.set(this,e),document.addEventListener(b,e)}export{o as a,k as c,x as d,D as g,b as l};
