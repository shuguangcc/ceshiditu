import{kr as V,aT as P,a1 as C,as as y,u as K,cL as L,s as k,e as p,y as d,tf as q,aL as b,iF as f,aG as _,rs as F,rt as z,iG as M,b as J,aE as D,tg as B,aW as G,th as Z,ti as H,tj as W,hz as R,U as $,aU as Q,aV as E}from"./index-74d49a87.js";import{i as N}from"./originUtils-1469eeaf.js";import{n as X}from"./I3SIndexInfo-0412432b.js";import{getSiblingOfSameTypeI as Y}from"./resourceUtils-357afe82.js";let ee=null;function te(){return ee}async function T(s,i,e){if(!i||!i.resources)return;const t=i.portalItem===s.portalItem?new Set(s.paths):new Set;s.paths.length=0,s.portalItem=i.portalItem;const a=new Set(i.resources.toKeep.map(n=>n.resource.path)),r=new Set,o=[];a.forEach(n=>{t.delete(n),s.paths.push(n)});for(const n of i.resources.toUpdate)if(t.delete(n.resource.path),a.has(n.resource.path)||r.has(n.resource.path)){const{resource:h,content:u,finish:I,error:x}=n,S=Y(h,V());s.paths.push(S.path),o.push(O({resource:S,content:u,compress:n.compress,finish:I,error:x},e))}else s.paths.push(n.resource.path),o.push(re(n,e)),r.add(n.resource.path);for(const n of i.resources.toAdd)o.push(O(n,e)),s.paths.push(n.resource.path);if(t.forEach(n=>{if(i.portalItem){const h=i.portalItem.resourceFromPath(n);o.push(h.portalItem.removeResource(h).catch(()=>{}))}}),o.length===0)return;const l=await P(o);C(e);const c=l.filter(n=>"error"in n).map(n=>n.error);if(c.length>0)throw new y("save:resources","Failed to save one or more resources",{errors:c})}async function O(s,i){var a,r;const e={...K(i)?i:{},compress:s.compress},t=await L(s.resource.portalItem.addResource(s.resource,s.content,e));if(t.ok!==!0)throw(a=s.error)==null||a.call(s,t.error),t.error;(r=s.finish)==null||r.call(s,s.resource)}async function re(s,i){var t,a;const e=await L(s.resource.update(s.content,i));if(e.ok!==!0)throw(t=s.error)==null||t.call(s,e.error),e.error;(a=s.finish)==null||a.call(s,s.resource)}const j="esri.layers.mixins.SceneService",m=k.getLogger(j),ne=s=>{let i=class extends s{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=D(async(e,t,a)=>{switch(e){case g.SAVE:return this._save(t);case g.SAVE_AS:return this._saveAs(a,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return b.fromJSON(e.spatialReference);{const t=e.store,a=t.indexCRS||t.geographicCRS,r=a&&parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10);return r!=null?new b(r):null}}readFullExtent(e,t,a){if(e!=null&&typeof e=="object"){const l=e.spatialReference==null?{...e,spatialReference:this._readSpatialReference(t)}:e;return _.fromJSON(l,a)}const r=t.store,o=this._readSpatialReference(t);return o==null||r==null||r.extent==null||!Array.isArray(r.extent)||r.extent.some(l=>l<A)?null:new _({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},a=e.split(".");return a.length>=2&&(t.major=parseInt(a[0],10),t.minor=parseInt(a[1],10)),t}readVersion(e,t){const a=t.store,r=a.version!=null?a.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){const a=this.portalItem&&this.portalItem.title;if(this.sublayerTitleMode==="item-title")return B(this.url,t.name);let r=t.name;if(!r&&this.url){const o=G(this.url);K(o)&&(r=o.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&a&&(r=a+" - "+r),Z(r)}set url(e){const t=H({layer:this,url:e,nonStandardUrlAllowed:!1,logger:m});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,a,r){W(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url"),t=R(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=X(this.parsedUrl.path,this.rootNode,e,this.apiKey,m,t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){var t,a,r;if((e==null?void 0:e.type)==="page"){const o=e.rootIndex%e.pageSize,l=(a=(t=e.rootPage)==null?void 0:t.nodes)==null?void 0:a[o];if(l==null||l.obb==null||l.obb.center==null||l.obb.halfSize==null)throw new y("sceneservice:invalid-node-page","Invalid node page.");if(l.obb.center[0]<A||this.fullExtent==null||this.fullExtent.hasZ)return;const c=l.obb.halfSize,n=l.obb.center[2],h=Math.sqrt(c[0]*c[0]+c[1]*c[1]+c[2]*c[2]);this.fullExtent.zmin=n-h,this.fullExtent.zmax=n+h}else if((e==null?void 0:e.type)==="node"){const o=(r=e.rootNode)==null?void 0:r.mbs;if(!Array.isArray(o)||o.length!==4||o[0]<A)return;const l=o[2],c=o[3],{fullExtent:n}=this;n&&(n.zmin=l-c,n.zmax=l+c)}}async _fetchService(e){if(this.url==null)throw new y("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await $(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var o;const t=await $(((o=this.parsedUrl)==null?void 0:o.path)??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let a=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(a=!0),a)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,this._getServiceContext()),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){var a;const t=(await $(((a=this.parsedUrl)==null?void 0:a.path)+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){var e;return{origin:"service",portalItem:this.portalItem,portal:(e=this.portalItem)==null?void 0:e.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,a){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const o of r)e.typeKeywords.push(o);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((o,l,c)=>c.indexOf(o)===l),a===v.newItem&&(e.typeKeywords=e.typeKeywords.filter(o=>o!=="Hosted Service")))}async _saveAs(e,t){var n;const a={...U,...t};let r=Q.from(e);r||(m.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new y("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),r.id&&(r=r.clone(),r.id=null);const o=r.portal||E.getDefault();await this._ensureLoadBeforeSave(),r.type=w,r.portal=o;const l={origin:"portal-item",url:null,messages:[],portal:o,portalItem:r,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},c={layers:[this.write({},l)]};return await Promise.all(l.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(c,l,a),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,a,v.newItem),await o.signIn(),await((n=o.user)==null?void 0:n.addItem({item:r,folder:a&&a.folder,data:c})),await T(this.resourceReferences,l,null),this.portalItem=r,N(l),l.portalItem=r,r}async _save(e){const t={...U,...e};if(!this.portalItem)throw m.error("_save(): requires the .portalItem property to be set"),new y("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==w)throw m.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+w),new y("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${w}"`);await this._ensureLoadBeforeSave();const a={origin:"portal-item",url:this.portalItem.itemUrl&&R(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||E.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},r={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(r,a,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,v.existingItem),await this.portalItem.update({data:r}),await T(this.resourceReferences,a,null),N(a),this.portalItem}async _validateAgainstJSONSchema(e,t,a){var n,h;let r=((n=t.messages)==null?void 0:n.filter(u=>u.type==="error").map(u=>new y(u.name,u.message,u.details)))??[];(h=a==null?void 0:a.validationOptions)!=null&&h.ignoreUnsupported&&(r=r.filter(u=>u.name!=="layer:unsupported"&&u.name!=="symbol:unsupported"&&u.name!=="symbol-layer:unsupported"&&u.name!=="property:unsupported"&&u.name!=="url:unsupported"&&u.name!=="scenemodification:unsupported"));const o=a==null?void 0:a.validationOptions,l=o==null?void 0:o.enabled,c=te();if(l&&c){const u=(await c()).validate(e,a.portalItemLayerType);if(u.length>0){const I=`Layer item did not validate:
${u.join(`
`)}`;if(m.error(`_validateAgainstJSONSchema(): ${I}`),o.failPolicy==="throw"){const x=u.map(S=>new y("sceneservice:schema-validation",S)).concat(r);throw new y("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:x})}}}if(r.length>0)throw new y("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}};return p([d(q)],i.prototype,"id",void 0),p([d({type:b})],i.prototype,"spatialReference",void 0),p([f("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],i.prototype,"readSpatialReference",null),p([d({type:_})],i.prototype,"fullExtent",void 0),p([f("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],i.prototype,"readFullExtent",null),p([d({readOnly:!0,type:F})],i.prototype,"heightModelInfo",void 0),p([d({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],i.prototype,"minScale",void 0),p([d({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],i.prototype,"maxScale",void 0),p([d({readOnly:!0})],i.prototype,"version",void 0),p([f("version",["store.version"])],i.prototype,"readVersion",null),p([d({type:String,json:{read:{source:"copyrightText"}}})],i.prototype,"copyright",void 0),p([d({type:String,json:{read:!1}})],i.prototype,"sublayerTitleMode",void 0),p([d({type:String})],i.prototype,"title",void 0),p([f("portal-item","title")],i.prototype,"readTitlePortalItem",null),p([f("service","title",["name"])],i.prototype,"readTitleService",null),p([d({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],i.prototype,"layerId",void 0),p([d(z)],i.prototype,"url",null),p([M("url")],i.prototype,"writeUrl",null),p([d()],i.prototype,"parsedUrl",null),p([d({readOnly:!0})],i.prototype,"store",void 0),p([d({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],i.prototype,"rootNode",void 0),i=p([J(j)],i),i},A=-1e38;var v;(function(s){s[s.existingItem=0]="existingItem",s[s.newItem=1]="newItem"})(v||(v={}));const w="Scene Service",U={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var g;(function(s){s[s.SAVE=0]="SAVE",s[s.SAVE_AS=1]="SAVE_AS"})(g||(g={}));export{ne as E,g as L};