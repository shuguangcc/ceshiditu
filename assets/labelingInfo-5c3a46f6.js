import{s as N,a as j}from"./Error-653283ae.js";import{y as f}from"./string-cdf077e6.js";import{e as o,y as s,l as d,n as S}from"./cast-7928d7aa.js";import{y as x,m as g,S as L,o as I,P as O,F as B}from"./symbols-fa594797.js";import{s as J}from"./jsonMap-c1f958cf.js";import{o as D}from"./screenUtils-410d12c0.js";import"./ensureType-cf29afa9.js";import{o as P,r as c}from"./Extent-69509002.js";import{t as M}from"./typedArrayUtil-a8b5b3e9.js";import{w as v,u as V,_ as F,x as G,f as R,g as z}from"./labelUtils-a194a22a.js";import{l as U,o as k,S as H,t as W,r as _,s as q,y as K}from"./defaultsJSON-59981e75.js";import{c as h}from"./jsonUtils-d7db3dc7.js";var y;let p=y=class extends d{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,r){return r.value?v(r.value):e}writeExpression(e,r,n){this.value!=null&&(e=v(this.value)),e!=null&&(r[n]=e)}clone(){return new y({expression:this.expression,title:this.title,value:this.value})}};o([s({type:String,json:{write:{writerEnsuresNonNull:!0}}})],p.prototype,"expression",void 0),o([P("expression",["expression","value"])],p.prototype,"readExpression",null),o([c("expression")],p.prototype,"writeExpression",null),o([s({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],p.prototype,"title",void 0),o([s({json:{read:!1,write:!1}})],p.prototype,"value",void 0),p=y=o([S("esri.layers.support.LabelExpressionInfo")],p);const E=p,Q=x.fromJSON(U),T=g.fromJSON(k),X=L.fromJSON(H),Y=I.fromJSON(W);function he(e){if(M(e))return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return Q;case"polyline":return T;case"polygon":case"extent":return X}return null}const de=x.fromJSON(_),Se=g.fromJSON(q),xe=L.fromJSON(K);var w;const u=new J({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function $(e){var r;return!e||e.origin!=="service"&&((r=e.layer)==null?void 0:r.type)!=="map-image"}function Z(e){return(e==null?void 0:e.type)==="map-image"}function A(e){var r,n;return!!Z(e)&&!!((n=(r=e.capabilities)==null?void 0:r.exportMap)!=null&&n.supportsArcadeExpressionForLabeling)}function ee(e){return $(e)||A(e.layer)}let l=w=class extends d{constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=Y,this.useCodedValues=void 0,this.where=null}static evaluateWhere(e,r){const n=(t,i,a)=>{switch(i){case"=":return t==a;case"<>":return t!=a;case">":return t>a;case">=":return t>=a;case"<":return t<a;case"<=":return t<=a}return!1};try{if(e==null)return!0;const t=e.split(" ");if(t.length===3)return n(r[t[0]],t[1],t[2]);if(t.length===7){const i=n(r[t[0]],t[1],t[2]),a=t[3],b=n(r[t[4]],t[5],t[6]);switch(a){case"AND":return i&&b;case"OR":return i||b}}return!1}catch{console.log("Error.: can't parse = "+e)}}readLabelExpression(e,r){const n=r.labelExpressionInfo;if(!n||!n.value&&!n.expression)return e}writeLabelExpression(e,r,n){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=V(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const t=F(this.labelExpressionInfo.expression);t&&(e="["+t+"]")}}e!=null&&(r[n]=e)}writeLabelExpressionInfo(e,r,n,t){if(e==null&&this.labelExpression!=null&&$(t))e=new E({expression:this.getLabelExpressionArcade()});else if(!e)return;const i=e.toJSON(t);i.expression&&(r[n]=i)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return G(this)}getLabelExpressionArcade(){return R(this)}getLabelExpressionSingleField(){return z(this)}hash(){return JSON.stringify(this)}clone(){return new w({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:f(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:f(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};o([s({type:String,json:{write:!0}})],l.prototype,"name",void 0),o([s({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],l.prototype,"allowOverrun",void 0),o([s({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1}}}})],l.prototype,"deconflictionStrategy",void 0),o([s({type:String,json:{write:{overridePolicy(e,r,n){return this.labelExpressionInfo&&(n==null?void 0:n.origin)==="service"&&A(n.layer)?{enabled:!1}:{allowNull:!0}}}}})],l.prototype,"labelExpression",void 0),o([P("labelExpression")],l.prototype,"readLabelExpression",null),o([c("labelExpression")],l.prototype,"writeLabelExpression",null),o([s({type:E,json:{write:{overridePolicy:(e,r,n)=>ee(n)?{allowNull:!0}:{enabled:!1}}}})],l.prototype,"labelExpressionInfo",void 0),o([c("labelExpressionInfo")],l.prototype,"writeLabelExpressionInfo",null),o([s({type:u.apiValues,json:{type:u.jsonValues,read:u.read,write:u.write}})],l.prototype,"labelPlacement",void 0),o([s({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],l.prototype,"labelPosition",void 0),o([s({type:Number})],l.prototype,"maxScale",void 0),o([c("maxScale")],l.prototype,"writeMaxScale",null),o([s({type:Number})],l.prototype,"minScale",void 0),o([c("minScale")],l.prototype,"writeMinScale",null),o([s({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:!1}}}})],l.prototype,"repeatLabel",void 0),o([s({type:Number,cast:D,json:{write:!0,origins:{"web-scene":{write:!1}}}})],l.prototype,"repeatLabelDistance",void 0),o([s({types:O,json:{origins:{"web-scene":{types:B,write:h,default:null}},write:h,default:null}})],l.prototype,"symbol",void 0),o([s({type:Boolean,json:{write:!0}})],l.prototype,"useCodedValues",void 0),o([s({type:String,json:{write:!0}})],l.prototype,"where",void 0),l=w=o([S("esri.layers.support.LabelClass")],l);const re=l,m=N.getLogger("esri.layers.support.labelingInfo"),te=/\[([^\[\]]+)\]/gi;function ge(e,r,n){return e?e.map(t=>{const i=new re;if(i.read(t,n),i.labelExpression){const a=r.fields||r.layerDefinition&&r.layerDefinition.fields||this.fields;i.labelExpression=i.labelExpression.replace(te,(b,C)=>`[${ne(C,a)}]`)}return i}):null}function ne(e,r){if(!r)return e;const n=e.toLowerCase();for(let t=0;t<r.length;t++){const i=r[t].name;if(i.toLowerCase()===n)return i}return e}const oe={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function Le(e,r){const n=f(e);return n.some(t=>le(t,r))?[]:n}function le(e,r){const n=e.labelPlacement,t=oe[r];if(!e.symbol)return m.warn("No ILabelClass symbol specified."),!0;if(!t)return m.error(new j("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${r}' is not supported`)),!0;if(!t.includes(n)){const i=t[0];n&&m.warn(`Found invalid label placement type ${n} for ${r}. Defaulting to ${i}`),e.labelPlacement=i}return!1}export{he as J,de as N,Se as O,xe as a,Q as b,Le as c,X as d,ge as i,re as j,T as u};
