import{e as f,n as d,h as b,m as w,q as $,y as h,r as C,S as x,s as I,g as D,o as L,t as M,u as k,v}from"./symbols-fa594797.js";import{a as c}from"./Error-653283ae.js";import{r as u,t as T}from"./typedArrayUtil-a8b5b3e9.js";const y={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function F(e,s=y){var a,m;if(!e)return{symbol:null};const{retainId:i=y.retainId,ignoreDrivers:n=y.ignoreDrivers,hasLabelingContext:r=y.hasLabelingContext,retainCIM:l=y.retainCIM}=s;let o=null;if(f(e)||e instanceof d)o=e.clone();else if(e.type==="cim"){const t=(m=(a=e.data)==null?void 0:a.symbol)==null?void 0:m.type;if(t!=="CIMPointSymbol")return{error:new c("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${t||"unknown"}' is unsupported in 3D`,{symbol:e})};o=l?e.clone():b.fromCIMSymbol(e)}else if(e instanceof w)o=$.fromSimpleLineSymbol(e);else if(e instanceof h)o=b.fromSimpleMarkerSymbol(e);else if(e instanceof C)o=b.fromPictureMarkerSymbol(e);else if(e instanceof x)o=s.geometryType&&s.geometryType==="mesh"?I.fromSimpleFillSymbol(e):D.fromSimpleFillSymbol(e);else{if(!(e instanceof L))return{error:new c("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${e.type||e.declaredClass}' is unsupported in 3D`,{symbol:e})};o=r?M.fromTextSymbol(e):b.fromTextSymbol(e)}if(i&&o&&o.type!=="cim"&&(o.id=e.id),n&&f(o))for(let t=0;t<o.symbolLayers.length;++t)o.symbolLayers.getItemAt(t)._ignoreDrivers=!0;return{symbol:o}}const P=["building-scene","integrated-mesh","point-cloud","scene"];function q(e,s,i,n){const r=g(e,{},{context:n,isLabelSymbol:!1});u(r)&&(s[i]=r)}function A(e,s,i,n){const r=g(e,{},{context:n,isLabelSymbol:!0});u(r)&&(s[i]=r)}function p(e){return e instanceof k||e instanceof d}function g(e,s,i){var m;if(T(e))return null;const{context:n,isLabelSymbol:r}=i,l=n==null?void 0:n.origin,o=n==null?void 0:n.messages;if(l==="web-scene"&&!p(e)){const t=F(e,{retainCIM:!0,hasLabelingContext:r});return u(t.symbol)?t.symbol.write(s,n):(o==null||o.push(new c("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:n,error:t.error})),null)}const a=(m=n==null?void 0:n.layer)==null?void 0:m.type;return l!=="web-map"&&(l!=="portal-item"||a&&P.includes(a))||!p(e)?e.write(s,n):(o==null||o.push(new c("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:e,context:n})),null)}function S(e,s){return v(e,null,s)}export{F as S,y as a,A as c,q as m,S as p};
