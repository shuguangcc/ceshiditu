import{p as R,H as U,c as p,l as oe,h as s,j as se,t as y,b as ae}from"./dom-5b7af1bf.js";import{S as w,i as I,b as re,e as C,g as ce,h as le,j as G,k as he,f as de,c as k,l as g,u as pe,r as ue,a as me,F as E}from"./floating-ui-bda1a599.js";import{g as q}from"./guid-e49c4e43.js";import{T as fe,C as be,g as A,a as ge,h as T,b as H,c as N}from"./utils2-202b6d37.js";import{c as ve,d as xe,g as Ie}from"./label2-0103af15.js";import{s as Ce,c as ye,a as we,d as ke,H as Ee}from"./form-9bc9e261.js";import{c as S}from"./observers-c77bfda3.js";import{u as Ae}from"./interactive-52dcf836.js";import{c as D,d as Te}from"./openCloseComponent-587e936b.js";import{c as He,d as Se}from"./conditionalSlot-e2a39862.js";import{d as W}from"./icon-1a289254.js";import"./preload-helper-41c905a7.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */function De(e,t){for(var i=-1,n=e==null?0:e.length,o=Array(n);++i<n;)o[i]=t(e[i],i,e);return o}var X=Array.isArray,Fe=1/0,F=w?w.prototype:void 0,z=F?F.toString:void 0;function K(e){if(typeof e=="string")return e;if(X(e))return De(e,K)+"";if(le(e))return z?z.call(e):"";var t=e+"";return t=="0"&&1/e==-Fe?"-0":t}function ze(e){return e}var Pe="[object AsyncFunction]",$e="[object Function]",Le="[object GeneratorFunction]",Oe="[object Proxy]";function je(e){if(!G(e))return!1;var t=C(e);return t==$e||t==Le||t==Pe||t==Oe}var _e=9007199254740991,Me=/^(?:0|[1-9]\d*)$/;function Ve(e,t){var i=typeof e;return t=t??_e,!!t&&(i=="number"||i!="symbol"&&Me.test(e))&&e>-1&&e%1==0&&e<t}var Be=9007199254740991;function Y(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Be}function Re(e){return e!=null&&Y(e.length)&&!je(e)}var Ue=Object.prototype;function Ge(e){var t=e&&e.constructor,i=typeof t=="function"&&t.prototype||Ue;return e===i}function qe(e,t){for(var i=-1,n=Array(e);++i<e;)n[i]=t(i);return n}var Ne="[object Arguments]";function P(e){return I(e)&&C(e)==Ne}var J=Object.prototype,We=J.hasOwnProperty,Xe=J.propertyIsEnumerable,Ke=P(function(){return arguments}())?P:function(e){return I(e)&&We.call(e,"callee")&&!Xe.call(e,"callee")};function Ye(){return!1}var Q=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$=Q&&typeof module=="object"&&module&&!module.nodeType&&module,Je=$&&$.exports===Q,L=Je?re.Buffer:void 0,Qe=L?L.isBuffer:void 0,Ze=Qe||Ye,et="[object Arguments]",tt="[object Array]",it="[object Boolean]",nt="[object Date]",ot="[object Error]",st="[object Function]",at="[object Map]",rt="[object Number]",ct="[object Object]",lt="[object RegExp]",ht="[object Set]",dt="[object String]",pt="[object WeakMap]",ut="[object ArrayBuffer]",mt="[object DataView]",ft="[object Float32Array]",bt="[object Float64Array]",gt="[object Int8Array]",vt="[object Int16Array]",xt="[object Int32Array]",It="[object Uint8Array]",Ct="[object Uint8ClampedArray]",yt="[object Uint16Array]",wt="[object Uint32Array]",a={};a[ft]=a[bt]=a[gt]=a[vt]=a[xt]=a[It]=a[Ct]=a[yt]=a[wt]=!0;a[et]=a[tt]=a[ut]=a[it]=a[mt]=a[nt]=a[ot]=a[st]=a[at]=a[rt]=a[ct]=a[lt]=a[ht]=a[dt]=a[pt]=!1;function kt(e){return I(e)&&Y(e.length)&&!!a[C(e)]}function Et(e){return function(t){return e(t)}}var Z=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f=Z&&typeof module=="object"&&module&&!module.nodeType&&module,At=f&&f.exports===Z,v=At&&ce.process,O=function(){try{var e=f&&f.require&&f.require("util").types;return e||v&&v.binding&&v.binding("util")}catch{}}(),j=O&&O.isTypedArray,Tt=j?Et(j):kt,Ht=Object.prototype,St=Ht.hasOwnProperty;function Dt(e,t){var i=X(e),n=!i&&Ke(e),o=!i&&!n&&Ze(e),l=!i&&!n&&!o&&Tt(e),c=i||n||o||l,d=c?qe(e.length,String):[],h=d.length;for(var r in e)(t||St.call(e,r))&&!(c&&(r=="length"||o&&(r=="offset"||r=="parent")||l&&(r=="buffer"||r=="byteLength"||r=="byteOffset")||Ve(r,h)))&&d.push(r);return d}function Ft(e){var t=[];if(e!=null)for(var i in Object(e))t.push(i);return t}var zt=Object.prototype,Pt=zt.hasOwnProperty;function $t(e){if(!G(e))return Ft(e);var t=Ge(e),i=[];for(var n in e)n=="constructor"&&(t||!Pt.call(e,n))||i.push(n);return i}function Lt(e){return Re(e)?Dt(e,!0):$t(e)}function Ot(e){return e==null?"":K(e)}function jt(e){return function(t,i,n){for(var o=-1,l=Object(t),c=n(t),d=c.length;d--;){var h=c[e?d:++o];if(i(l[h],h,l)===!1)break}return t}}var _t=jt();function Mt(e){return typeof e=="function"?e:ze}var ee=/[\\^$.*+?()[\]{}|]/g,Vt=RegExp(ee.source);function Bt(e){return e=Ot(e),e&&Vt.test(e)?e.replace(ee,"\\$&"):e}function Rt(e,t){return e==null?e:_t(e,Mt(t),Lt)}const Ut=(e,t)=>{const i=Bt(t),n=new RegExp(i,"i");e.length===0&&console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);const o=(c,d)=>{if(c!=null&&c.constant||c!=null&&c.filterDisabled)return!0;let h=!1;return Rt(c,r=>{typeof r=="function"||r==null||(Array.isArray(r)||typeof r=="object"&&r!==null?o(r,d)&&(h=!0):d.test(r)&&(h=!0))}),h};return e.filter(c=>o(c,n))};/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const m={title:"title",close:"close",imageContainer:"image-container",chipIcon:"chip-icon",closeIcon:"close-icon"},Gt={close:"Close"},_={image:"image"},qt={close:"x"},Nt="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:6px}:host([scale=m]) .image-container{block-size:1.5rem;inline-size:1.5rem;padding-inline-start:0.25rem}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale=l]) .image-container{block-size:2rem;inline-size:2rem;padding-inline-start:0.25rem}:host{box-sizing:border-box;display:inline-flex;cursor:default;align-items:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container{display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center}.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host span{padding-block:0;padding-inline:var(--calcite-chip-spacing-unit-l)}:host([closable]) span{padding-inline:var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s)}:host([icon]:not([closable])) span{padding-block:0;padding-inline:var(--calcite-chip-spacing-unit-l)}:host button{margin:0px;display:inline-flex;max-block-size:100%;min-block-size:100%;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;border-start-start-radius:0;border-start-end-radius:50px;border-end-end-radius:50px;border-end-start-radius:0;padding-block:0;padding-inline:var(--calcite-chip-spacing-unit-s);color:inherit;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}:host button:hover{background-color:var(--calcite-chip-transparent-hover)}:host button:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host button:active{background-color:var(--calcite-chip-transparent-press)}.image-container{display:inline-flex;overflow:hidden;border-radius:50%}:host slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0;margin-inline-start:var(--calcite-chip-spacing-unit-l);border-start-start-radius:0;border-start-end-radius:50px;border-end-end-radius:50px;border-end-start-radius:0}:host([color=blue]){border-color:transparent;background-color:var(--calcite-ui-info);color:var(--calcite-ui-text-inverse)}:host([color=red]){border-color:transparent;background-color:var(--calcite-ui-danger);color:var(--calcite-ui-text-inverse)}:host([color=yellow]){border-color:transparent;background-color:var(--calcite-ui-warning);color:#151515}:host([color=green]){border-color:transparent;background-color:var(--calcite-ui-success);color:#151515}:host([color=grey]){border-color:transparent;background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([color=grey]) button,:host([color=grey]) .close-icon{color:var(--calcite-ui-text-3)}:host([color=grey]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([appearance=clear]),:host([appearance=transparent]){background-color:transparent;color:var(--calcite-ui-text-1)}:host([color=blue][appearance=clear]),:host([color=blue][appearance=transparent]){border-color:var(--calcite-ui-info)}:host([color=blue][appearance=clear]) .chip-icon,:host([color=blue][appearance=transparent]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-info))}:host([color=red][appearance=clear]),:host([color=red][appearance=transparent]){border-color:var(--calcite-ui-danger)}:host([color=red][appearance=clear]) .chip-icon,:host([color=red][appearance=transparent]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-danger))}:host([color=yellow][appearance=clear]),:host([color=yellow][appearance=transparent]){border-color:var(--calcite-ui-warning)}:host([color=yellow][appearance=clear]) .chip-icon,:host([color=yellow][appearance=transparent]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-warning))}:host([color=green][appearance=clear]),:host([color=green][appearance=transparent]){border-color:var(--calcite-ui-success)}:host([color=green][appearance=clear]) .chip-icon,:host([color=green][appearance=transparent]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-success))}:host([color=grey][appearance=clear]),:host([color=grey][appearance=transparent]){border-color:var(--calcite-ui-border-1)}:host([color=grey][appearance=clear]) .chip-icon,:host([color=grey][appearance=transparent]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([closed]){display:none}",Wt=R(class extends U{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteChipDismiss=p(this,"calciteChipDismiss",6),this.appearance="solid",this.color="grey",this.dismissible=!1,this.closable=!1,this.dismissLabel=Gt.close,this.iconFlipRtl=!1,this.scale="m",this.closed=!1,this.closeClickHandler=e=>{e.preventDefault(),this.calciteChipDismiss.emit(this.el),this.closed=!0},this.guid=q()}handleDismissible(e){this.closable=e}handleClosable(e){this.dismissible=e}connectedCallback(){He(this),this.dismissible&&this.handleDismissible(this.dismissible),this.closable&&this.handleClosable(this.closable)}disconnectedCallback(){Se(this)}async setFocus(){var e;(e=this.closeButton)===null||e===void 0||e.focus()}renderChipImage(){const{el:e}=this;return oe(e,_.image)?s("div",{class:m.imageContainer,key:"image"},s("slot",{name:_.image})):null}render(){const e=s("calcite-icon",{class:m.chipIcon,flipRtl:this.iconFlipRtl,icon:this.icon,scale:"s"}),t=s("button",{"aria-describedby":this.guid,"aria-label":this.dismissLabel,class:m.close,onClick:this.closeClickHandler,ref:i=>this.closeButton=i},s("calcite-icon",{class:m.closeIcon,icon:qt.close,scale:"s"}));return s("div",{class:"container"},this.renderChipImage(),this.icon?e:null,s("span",{class:m.title,id:this.guid},s("slot",null)),this.closable?t:null)}get el(){return this}static get watchers(){return{dismissible:["handleDismissible"],closable:["handleClosable"]}}static get style(){return Nt}},[1,"calcite-chip",{appearance:[513],color:[513],dismissible:[1540],closable:[1540],dismissLabel:[1,"dismiss-label"],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],value:[8],closed:[1540],setFocus:[64]}]);function te(){if(typeof customElements>"u")return;["calcite-chip","calcite-icon"].forEach(t=>{switch(t){case"calcite-chip":customElements.get(t)||customElements.define(t,Wt);break;case"calcite-icon":customElements.get(t)||W();break}})}te();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const Xt="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.75rem}.wrapper{display:flex;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-color:transparent;padding-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.wrapper--single{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px}.input{flex-grow:1;-webkit-appearance:none;appearance:none;border-style:none;background-color:transparent;padding:0px;font-family:inherit;color:var(--calcite-ui-text-1);font-size:inherit;block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-inline-size:120px;margin-block-end:var(--calcite-combobox-item-spacing-unit-s)}.input:focus{outline:2px solid transparent;outline-offset:2px}.input--transparent{opacity:0}.input--single{margin-block:0px;padding:0px}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;inline-size:0px;min-inline-size:0px;opacity:0}.input--icon{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.input-wrap{display:flex;flex-grow:1}.input-wrap--single{flex:1 1 0%;overflow:hidden}.label{pointer-events:none;display:flex;max-inline-size:100%;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;font-weight:var(--calcite-font-weight-normal);block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--icon{padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:flex;inline-size:1rem;cursor:pointer;align-items:center}.icon-end{flex:none}.floating-ui-container{display:block;position:absolute;z-index:900;visibility:hidden;pointer-events:none;inline-size:0;block-size:0;overflow:hidden}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);visibility:hidden;transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;visibility:visible;transform:translate(0)}.floating-ui-container--active{pointer-events:initial;visibility:visible;inline-size:unset;block-size:unset;overflow:unset}@media (forced-colors: active){.wrapper,.floating-ui-container--active{border:1px solid canvasText}}.screen-readers-only{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{max-block-size:45vh;overflow-y:auto;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.list{margin:0px;display:block;padding:0px}.list--hide{block-size:0px;overflow:hidden}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);margin-inline:0 var(--calcite-combobox-item-spacing-unit-s);max-inline-size:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.item{display:block}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}",Kt=e=>e.tagName===N,M="combobox-item-",V="combobox-chip-",x="combobox-label-",b="combobox-listbox-",B="combobox-input-",ie=R(class extends U{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteLookupChange=p(this,"calciteLookupChange",6),this.calciteComboboxChange=p(this,"calciteComboboxChange",6),this.calciteComboboxFilterChange=p(this,"calciteComboboxFilterChange",6),this.calciteComboboxChipDismiss=p(this,"calciteComboboxChipDismiss",6),this.calciteComboboxBeforeClose=p(this,"calciteComboboxBeforeClose",6),this.calciteComboboxClose=p(this,"calciteComboboxClose",6),this.calciteComboboxBeforeOpen=p(this,"calciteComboboxBeforeOpen",6),this.calciteComboboxOpen=p(this,"calciteComboboxOpen",6),this.active=!1,this.open=!1,this.disabled=!1,this.maxItems=0,this.overlayPositioning="absolute",this.required=!1,this.selectionMode="multi",this.scale="m",this.value=null,this.intlRemoveTag=fe.removeTag,this.placement=he,this.internalValueChangeFlag=!1,this.items=[],this.groupItems=[],this.selectedItems=[],this.visibleItems=[],this.activeItemIndex=-1,this.activeChipIndex=-1,this.activeDescendant="",this.text="",this.textInput=null,this.mutationObserver=S("mutation",()=>this.updateItems()),this.resizeObserver=S("resize",()=>this.setMaxScrollerHeight()),this.guid=q(),this.inputHeight=0,this.ignoreSelectedEventsFlag=!1,this.openTransitionProp="opacity",this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?de(t,e):null},this.getValue=()=>{const e=this.selectedItems.map(t=>{var i;return(i=t==null?void 0:t.value)===null||i===void 0?void 0:i.toString()});return e!=null&&e.length?e.length>1?e:e[0]:""},this.onLabelClick=()=>{this.setFocus()},this.keydownHandler=e=>{const{key:t}=e;switch(t){case"Tab":this.activeChipIndex=-1,this.activeItemIndex=-1,this.allowCustomValues&&this.text?(this.addCustomChip(this.text,!0),e.preventDefault()):this.open&&(this.open=!1,e.preventDefault());break;case"ArrowLeft":this.previousChip(),e.preventDefault();break;case"ArrowRight":this.nextChip(),e.preventDefault();break;case"ArrowUp":e.preventDefault(),this.shiftActiveItemIndex(-1),this.comboboxInViewport()||this.el.scrollIntoView();break;case"ArrowDown":e.preventDefault(),this.open||(this.open=!0),this.shiftActiveItemIndex(1),this.comboboxInViewport()||this.el.scrollIntoView();break;case" ":this.textInput.value||(e.preventDefault(),this.open=!0,this.shiftActiveItemIndex(1));break;case"Home":if(!this.open)return;e.preventDefault(),this.updateActiveItemIndex(0),this.scrollToActiveItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"End":if(!this.open)return;e.preventDefault(),this.updateActiveItemIndex(this.visibleItems.length-1),this.scrollToActiveItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"Escape":this.open=!1,e.preventDefault();break;case"Enter":this.activeItemIndex>-1?(this.toggleSelection(this.visibleItems[this.activeItemIndex]),e.preventDefault()):this.activeChipIndex>-1?(this.removeActiveChip(),e.preventDefault()):this.allowCustomValues&&this.text?(this.addCustomChip(this.text,!0),e.preventDefault()):e.defaultPrevented||Ce(this)&&e.preventDefault();break;case"Delete":case"Backspace":this.activeChipIndex>-1?(e.preventDefault(),this.removeActiveChip()):!this.text&&this.isMulti()&&(e.preventDefault(),this.removeLastChip());break}},this.toggleCloseEnd=()=>{this.open=!1,this.el.removeEventListener("calciteComboboxClose",this.toggleCloseEnd)},this.toggleOpenEnd=()=>{this.open=!1,this.el.removeEventListener("calciteComboboxOpen",this.toggleOpenEnd)},this.setMaxScrollerHeight=async()=>{const{listContainerEl:e,open:t,referenceEl:i}=this;if(!e||!t)return;await this.reposition(!0);const n=this.getMaxScrollerHeight();e.style.maxHeight=n>0?`${n}px`:"",e.style.minWidth=`${i.clientWidth}px`,await this.reposition(!0)},this.calciteChipDismissHandler=(e,t)=>{this.open=!1;const i=this.items.find(n=>n===t);i&&this.toggleSelection(i,!1),this.calciteComboboxChipDismiss.emit(e.detail)},this.clickHandler=e=>{e.composedPath().some(t=>t.tagName==="CALCITE-CHIP")||(this.open=!this.open,this.updateActiveItemIndex(0),this.setFocus())},this.setInactiveIfNotContained=e=>{const t=e.composedPath();!this.open||t.includes(this.el)||t.includes(this.referenceEl)||(this.allowCustomValues&&this.text.trim().length&&this.addCustomChip(this.text),this.selectionMode==="single"&&(this.textInput&&(this.textInput.value=""),this.text="",this.filterItems(""),this.updateActiveItemIndex(-1)),this.open=!1)},this.setFloatingEl=e=>{this.floatingEl=e,k(this,this.referenceEl,this.floatingEl)},this.setContainerEl=e=>{this.resizeObserver.observe(e),this.listContainerEl=e,this.transitionEl=e,D(this)},this.setReferenceEl=e=>{this.referenceEl=e,k(this,this.referenceEl,this.floatingEl)},this.inputHandler=e=>{const t=e.target.value;this.text=t,this.filterItems(t),t&&(this.activeChipIndex=-1)},this.filterItems=(()=>{const e=(t,i)=>t&&i.some(({label:n,value:o})=>Kt(t)?o===t.label:o===t.textLabel||o===t.value||n===t.textLabel||n===t.value);return g(t=>{const i=Ut(this.data,t);this.getCombinedItems().forEach(o=>{const l=!e(o,i);o.hidden=l;const[c,d]=o.ancestors;(e(c,i)||e(d,i))&&(o.hidden=!1),l||o.ancestors.forEach(h=>h.hidden=!1)}),this.visibleItems=this.getVisibleItems(),this.calciteComboboxFilterChange.emit({visibleItems:[...this.visibleItems],text:t})},100)})(),this.internalCalciteLookupChangeEvent=()=>{this.calciteLookupChange.emit(this.selectedItems)},this.emitCalciteLookupChange=g(this.internalCalciteLookupChangeEvent,0),this.internalComboboxChangeEvent=()=>{const{selectedItems:e}=this;this.calciteComboboxChange.emit({selectedItems:e})},this.emitComboboxChange=g(this.internalComboboxChangeEvent,0),this.updateItems=()=>{this.items=this.getItems(),this.groupItems=this.getGroupItems(),this.data=this.getData(),this.selectedItems=this.getSelectedItems(),this.visibleItems=this.getVisibleItems(),this.needsIcon=this.getNeedsIcon(),this.allowCustomValues||this.setMaxScrollerHeight()},this.scrollToActiveItem=()=>{const e=this.visibleItems[this.activeItemIndex],t=this.calculateSingleItemHeight(e),{offsetHeight:i,scrollTop:n}=this.listContainerEl;i+n<e.offsetTop+t?this.listContainerEl.scrollTop=e.offsetTop-i+t:e.offsetTop<n&&(this.listContainerEl.scrollTop=e.offsetTop)},this.comboboxFocusHandler=()=>{var e;(e=this.textInput)===null||e===void 0||e.focus()},this.comboboxBlurHandler=e=>{this.setInactiveIfNotContained(e)}}activeHandler(e){if(this.disabled){this.active=!1,this.open=!1;return}this.open=e}openHandler(e){if(e||pe(this.floatingEl),this.disabled){this.active=!1,this.open=!1;return}this.active=e,this.setMaxScrollerHeight()}handleDisabledChange(e){e||(this.active=!1,this.open=!1)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}valueHandler(e){if(!this.internalValueChangeFlag){const t=this.getItems();Array.isArray(e)?t.forEach(i=>i.selected=e.includes(i.value)):e?t.forEach(i=>i.selected=e===i.value):t.forEach(i=>i.selected=!1),this.updateItems()}}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}documentClickHandler(e){se(e)&&this.setInactiveIfNotContained(e)}calciteComboboxItemChangeHandler(e){if(this.ignoreSelectedEventsFlag)return;const t=e.target,i=this.visibleItems.indexOf(t);this.updateActiveItemIndex(i),this.toggleSelection(t,t.selected)}async reposition(e=!1){const{floatingEl:t,referenceEl:i,placement:n,overlayPositioning:o,filteredFlipPlacements:l}=this;return ue(this,{floatingEl:t,referenceEl:i,overlayPositioning:o,placement:n,flipPlacements:l,type:"menu"},e)}async setFocus(){var e;(e=this.textInput)===null||e===void 0||e.focus(),this.activeChipIndex=-1,this.activeItemIndex=-1}connectedCallback(){var e;this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1,(e=this.mutationObserver)===null||e===void 0||e.observe(this.el,{childList:!0,subtree:!0}),ve(this),ye(this),D(this),this.setFilteredPlacements(),this.reposition(!0),this.active&&this.activeHandler(this.active),this.open&&this.openHandler(this.open)}componentWillLoad(){this.updateItems()}componentDidLoad(){we(this,this.getValue()),this.reposition(!0)}componentDidRender(){this.el.offsetHeight!==this.inputHeight&&(this.reposition(!0),this.inputHeight=this.el.offsetHeight),Ae(this)}disconnectedCallback(){var e,t;(e=this.mutationObserver)===null||e===void 0||e.disconnect(),(t=this.resizeObserver)===null||t===void 0||t.disconnect(),xe(this),ke(this),me(this,this.referenceEl,this.floatingEl),Te(this)}selectedItemsHandler(){this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1}textHandler(){this.updateActiveItemIndex(-1)}comboboxInViewport(){const e=this.el.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.right<=(window.innerWidth||document.documentElement.clientWidth)&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)}onBeforeOpen(){this.calciteComboboxBeforeOpen.emit()}onOpen(){this.calciteComboboxOpen.emit()}onBeforeClose(){this.calciteComboboxBeforeClose.emit()}onClose(){this.calciteComboboxClose.emit()}getMaxScrollerHeight(){const e=this.getCombinedItems().filter(o=>!o.hidden),{maxItems:t}=this;let i=0,n=0;return e.length>t&&e.forEach(o=>{if(i<t&&t>0){const l=this.calculateSingleItemHeight(o);l>0&&(n+=l,i++)}}),n}calculateSingleItemHeight(e){let t=e.offsetHeight;return Array.from(e.querySelectorAll(be)).map(n=>n==null?void 0:n.offsetHeight).forEach(n=>{t-=n}),t}getCombinedItems(){return[...this.groupItems,...this.items]}toggleSelection(e,t=!e.selected){e&&(this.isMulti()?(e.selected=t,this.updateAncestors(e),this.selectedItems=this.getSelectedItems(),this.emitCalciteLookupChange(),this.emitComboboxChange(),this.resetText(),this.filterItems("")):(this.ignoreSelectedEventsFlag=!0,this.items.forEach(i=>i.selected=i===e?t:!1),this.ignoreSelectedEventsFlag=!1,this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.textInput&&(this.textInput.value=e.textLabel),this.open=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems("")))}updateAncestors(e){if(this.selectionMode!=="ancestors")return;const t=A(e),i=ge(e);e.selected?t.forEach(n=>{n.selected=!0}):(i.forEach(n=>n.selected=!1),[...t].forEach(n=>{T(n)||(n.selected=!1)}))}getVisibleItems(){return this.items.filter(e=>!e.hidden)}getSelectedItems(){if(!this.isMulti()){const e=this.items.find(({selected:t})=>t);return e?[e]:[]}return this.items.filter(e=>e.selected&&(this.selectionMode!=="ancestors"||!T(e))).sort((e,t)=>{const i=this.selectedItems.indexOf(e),n=this.selectedItems.indexOf(t);return i>-1&&n>-1?i-n:n-i})}getData(){return this.items.map(e=>({constant:e.constant,filterDisabled:e.filterDisabled,value:e.value,label:e.textLabel}))}getNeedsIcon(){return this.selectionMode==="single"&&this.items.some(e=>e.icon)}resetText(){this.textInput&&(this.textInput.value=""),this.text=""}getItems(){return Array.from(this.el.querySelectorAll(H)).filter(t=>!t.disabled)}getGroupItems(){return Array.from(this.el.querySelectorAll(N))}addCustomChip(e,t){const i=this.items.find(n=>n.textLabel===e);if(i)this.toggleSelection(i,!0);else{this.isMulti()||this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1);const n=document.createElement(H);n.value=e,n.textLabel=e,n.selected=!0,this.el.appendChild(n),this.resetText(),t&&this.setFocus(),this.updateItems(),this.filterItems(""),this.emitCalciteLookupChange(),this.emitComboboxChange()}}removeActiveChip(){this.toggleSelection(this.selectedItems[this.activeChipIndex],!1),this.setFocus()}removeLastChip(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1),this.setFocus()}previousChip(){if(this.text)return;const e=this.selectedItems.length-1,t=this.activeChipIndex;this.activeChipIndex=t===-1?e:Math.max(t-1,0),this.updateActiveItemIndex(-1),this.focusChip()}nextChip(){if(this.text||this.activeChipIndex===-1)return;const e=this.selectedItems.length-1,t=this.activeChipIndex+1;t>e?(this.activeChipIndex=-1,this.setFocus()):(this.activeChipIndex=t,this.focusChip()),this.updateActiveItemIndex(-1)}focusChip(){var e;const t=(e=this.selectedItems[this.activeChipIndex])===null||e===void 0?void 0:e.guid,i=t?this.referenceEl.querySelector(`#${V}${t}`):null;i==null||i.setFocus()}shiftActiveItemIndex(e){const{length:t}=this.visibleItems,i=(this.activeItemIndex+t+e)%t;this.updateActiveItemIndex(i),this.scrollToActiveItem()}updateActiveItemIndex(e){var t;this.activeItemIndex=e;let i=null;this.visibleItems.forEach((n,o)=>{o===e?(n.active=!0,i=`${M}${n.guid}`):n.active=!1}),this.activeDescendant=i,this.activeItemIndex>-1&&(this.activeChipIndex=-1,(t=this.textInput)===null||t===void 0||t.focus())}isMulti(){return this.selectionMode!=="single"}renderChips(){const{activeChipIndex:e,scale:t,selectionMode:i,intlRemoveTag:n}=this;return this.selectedItems.map((o,l)=>{const c={chip:!0,"chip--active":e===l},h=[...[...A(o)].reverse(),o].map(u=>u.textLabel),r=i!=="ancestors"?o.textLabel:h.join(" / ");return s("calcite-chip",{class:c,dismissLabel:n,dismissible:!0,icon:o.icon,id:o.guid?`${V}${o.guid}`:null,key:o.textLabel,onCalciteChipDismiss:u=>this.calciteChipDismissHandler(u,o),scale:t,title:r,value:o.value},r)})}renderInput(){const{guid:e,active:t,disabled:i,placeholder:n,selectionMode:o,selectedItems:l,open:c}=this,d=o==="single",h=l[0],r=!(c||t)&&d&&!!h;return s("span",{class:{"input-wrap":!0,"input-wrap--single":d}},r&&s("span",{class:{label:!0,"label--icon":!!(h!=null&&h.icon)},key:"label"},h.textLabel),s("input",{"aria-activedescendant":this.activeDescendant,"aria-autocomplete":"list","aria-controls":`${b}${e}`,"aria-label":Ie(this),class:{input:!0,"input--single":!0,"input--transparent":this.activeChipIndex>-1,"input--hidden":r,"input--icon":!!this.placeholderIcon},disabled:i,id:`${B}${e}`,key:"input",onBlur:this.comboboxBlurHandler,onFocus:this.comboboxFocusHandler,onInput:this.inputHandler,placeholder:n,ref:u=>this.textInput=u,type:"text"}))}renderListBoxOptions(){return this.visibleItems.map(e=>s("li",{"aria-selected":y(e.selected),id:e.guid?`${M}${e.guid}`:null,role:"option",tabindex:"-1"},e.textLabel))}renderFloatingUIContainer(){const{active:e,setFloatingEl:t,setContainerEl:i,open:n}=this,o={"list-container":!0,[E.animation]:!0,[E.animationActive]:n||e};return s("div",{"aria-hidden":"true",class:{"floating-ui-container":!0,"floating-ui-container--active":n||e},ref:t},s("div",{class:o,ref:i},s("ul",{class:{list:!0,"list--hide":!(n||e)}},s("slot",null))))}renderIconStart(){const{selectedItems:e,placeholderIcon:t,selectionMode:i}=this,n=e[0],o=n==null?void 0:n.icon,l=i==="single";return(!this.open&&n?!!o&&l:!!this.placeholderIcon&&(!n||l))&&s("span",{class:"icon-start"},s("calcite-icon",{class:"selected-icon",icon:!this.open&&n?o:t,scale:"s"}))}renderIconEnd(){const{active:e,open:t}=this;return s("span",{class:"icon-end"},s("calcite-icon",{icon:e||t?"chevron-up":"chevron-down",scale:"s"}))}render(){const{active:e,guid:t,label:i,open:n}=this,o=this.selectionMode==="single";return s(ae,null,s("div",{"aria-autocomplete":"list","aria-controls":`${b}${t}`,"aria-expanded":y(n||e),"aria-haspopup":"listbox","aria-labelledby":`${x}${t}`,"aria-live":"polite","aria-owns":`${b}${t}`,class:{wrapper:!0,"wrapper--single":o||!this.selectedItems.length,"wrapper--active":n||e},onClick:this.clickHandler,onKeyDown:this.keydownHandler,ref:this.setReferenceEl,role:"combobox"},s("div",{class:"grid-input"},this.renderIconStart(),!o&&this.renderChips(),s("label",{class:"screen-readers-only",htmlFor:`${B}${t}`,id:`${x}${t}`},i),this.renderInput()),this.renderIconEnd()),s("ul",{"aria-labelledby":`${x}${t}`,"aria-multiselectable":"true",class:"screen-readers-only",id:`${b}${t}`,role:"listbox",tabIndex:-1},this.renderListBoxOptions()),this.renderFloatingUIContainer(),s(Ee,{component:this}))}get el(){return this}static get watchers(){return{active:["activeHandler"],open:["openHandler"],disabled:["handleDisabledChange"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],value:["valueHandler"],flipPlacements:["flipPlacementsHandler"],selectedItems:["selectedItemsHandler"],text:["textHandler"]}}static get style(){return Xt}},[1,"calcite-combobox",{active:[1540],open:[1540],disabled:[516],label:[1],placeholder:[1],placeholderIcon:[513,"placeholder-icon"],maxItems:[514,"max-items"],name:[513],allowCustomValues:[516,"allow-custom-values"],overlayPositioning:[513,"overlay-positioning"],required:[516],selectionMode:[513,"selection-mode"],scale:[513],value:[1025],intlRemoveTag:[1,"intl-remove-tag"],flipPlacements:[16],items:[32],groupItems:[32],selectedItems:[32],visibleItems:[32],needsIcon:[32],activeItemIndex:[32],activeChipIndex:[32],activeDescendant:[32],text:[32],reposition:[64],setFocus:[64]},[[5,"pointerdown","documentClickHandler"],[0,"calciteComboboxItemChange","calciteComboboxItemChangeHandler"]]]);function ne(){if(typeof customElements>"u")return;["calcite-combobox","calcite-chip","calcite-icon"].forEach(t=>{switch(t){case"calcite-combobox":customElements.get(t)||customElements.define(t,ie);break;case"calcite-chip":customElements.get(t)||te();break;case"calcite-icon":customElements.get(t)||W();break}})}ne();const ci=ie,li=ne;export{ci as CalciteCombobox,li as defineCustomElement};
