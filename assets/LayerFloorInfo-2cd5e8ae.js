import{_ as d}from"./preload-helper-41c905a7.js";import{r as s}from"./typedArrayUtil-a8b5b3e9.js";import{e as t,y as l,l as p,n as v}from"./cast-7928d7aa.js";import{j as a}from"./Collection-78126e82.js";import"./ensureType-cf29afa9.js";async function A(e,r){const{WhereClause:n}=await d(()=>import("./WhereClause-2b5b05b2.js"),["./WhereClause-2b5b05b2.js","./string-cdf077e6.js","./typedArrayUtil-a8b5b3e9.js"],import.meta.url);return n.create(e,r)}function y(e,r){return s(e)?s(r)?`(${e}) AND (${r})`:e:r}var i;let o=i=class extends p{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new a}clone(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};t([l({type:String,json:{write:!0}})],o.prototype,"floorField",void 0),t([l({json:{read:!1,write:!1}})],o.prototype,"viewAllMode",void 0),t([l({json:{read:!1,write:!1}})],o.prototype,"viewAllLevelIds",void 0),o=i=t([v("esri.layers.support.LayerFloorInfo")],o);const _=o;export{_ as p,A as r,y as t};
