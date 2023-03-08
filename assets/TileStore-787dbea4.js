import{r as B,t as $}from"./typedArrayUtil-a8b5b3e9.js";import{v as k,d as q,A,C as P,a as X}from"./promiseUtils-6684e352.js";import{e as Y}from"./Queue-3a0c055d.js";import{v as E}from"./cast-7928d7aa.js";import{b as R,a as N}from"./Extent-69509002.js";import{e as I}from"./TileKey-0750ad58.js";import{n as W}from"./Evented-515b9d9c.js";import{h as j}from"./string-cdf077e6.js";import{i as O}from"./rbush-8e36784a.js";import{e as V,t as D}from"./ensureType-cf29afa9.js";import{u as Z}from"./aaBoundingRect-4a760199.js";import{a as J}from"./Query-ff8c2cfb.js";class K{constructor(e,t){this.item=e,this.controller=t,this.promise=null}}let ue=class{constructor(e){this._deferreds=new Map,this._controllers=new Map,this._processingItems=new Map,this._isPaused=!1,this._schedule=null,this._task=null,this.concurrency=1,e.concurrency&&(this.concurrency=e.concurrency),this._queue=new Y(e.peeker),this.process=e.process;const t=e.scheduler;e.priority&&B(t)&&(this._task=t.registerTask(e.priority,this))}destroy(){this.clear(),this._schedule&&(this._schedule.remove(),this._schedule=null),this._task&&(this._task.remove(),this._task=null)}get length(){return this._processingItems.size+this._queue.length}abort(e){const t=this._controllers.get(e);t&&t.abort()}clear(){this._queue.clear();const e=[];this._controllers.forEach(t=>e.push(t)),this._controllers.clear(),e.forEach(t=>t.abort()),this._processingItems.clear(),this._cancelNext()}forEach(e){this._deferreds.forEach((t,s)=>e(s))}get(e){const t=this._deferreds.get(e);return t?t.promise:void 0}isOngoing(e){return this._processingItems.has(e)}has(e){return this._deferreds.has(e)}pause(){this._isPaused||(this._isPaused=!0,this._cancelNext())}push(e,t){const s=this.get(e);if(s)return s;const o=new AbortController;let i=null;t&&(i=k(t,()=>o.abort()));const l=()=>{const c=this._processingItems.get(e);c&&c.controller.abort(),r(),n.reject(X())},r=()=>{h.remove(),B(i)&&i.remove(),this._deferreds.delete(e),this._controllers.delete(e),this._queue.remove(e),this._processingItems.delete(e),this._scheduleNext()},h=q(o.signal,l),n=A();return this._deferreds.set(e,n),this._controllers.set(e,o),n.promise.then(r,r),this._queue.push(e),this._scheduleNext(),n.promise}last(){return this._queue.last()}peek(){return this._queue.peek()}popLast(){return this._queue.popLast()}reset(){const e=[];this._processingItems.forEach(t=>e.push(t)),this._processingItems.clear();for(const t of e)this._queue.push(t.item),t.controller.abort();this._scheduleNext()}resume(){this._isPaused&&(this._isPaused=!1,this._scheduleNext())}takeAll(){const e=[];for(;this._queue.length;)e.push(this._queue.pop());return this.clear(),e}get running(){return!this._isPaused&&this._queue.length>0&&this._processingItems.size<this.concurrency}runTask(e){for(;!e.done&&this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop()),e.madeProgress()}_scheduleNext(){this._task||this._isPaused||this._schedule||(this._schedule=E(()=>{this._schedule=null,this._next()}))}_next(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())}_cancelNext(){this._schedule&&(this._schedule.remove(),this._schedule=null)}_processResult(e,t){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).resolve(t))}_processError(e,t){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).reject(t))}_canProcessFulfillment(e){return!!this._deferreds.get(e.item)&&this._processingItems.get(e.item)===e}_process(e){if($(e))return;let t;const s=new AbortController,o=new K(e,s);this._processingItems.set(e,o);try{t=this.process(e,s.signal)}catch(i){this._processError(o,i)}P(t)?(o.promise=t,t.then(i=>this._processResult(o,i),i=>this._processError(o,i))):this._processResult(o,t)}get test(){return{update:e=>this.runTask(e)}}};function x(m,e){return[m,e]}function M(m,e,t){return m[0]=e,m[1]=t,m}function Q(m,e,t,s,o){return m[0]=e,m[1]=t,m[2]=s,m[3]=o,m}const v=new I("0/0/0/0");class T{constructor(e,t,s,o,i,l,r,h,n,c,d,p){this.level=e,this.resolution=t,this.scale=s,this.origin=o,this.first=i,this.last=l,this.size=r,this.norm=h,this.worldStart=n,this.worldEnd=c,this.worldSize=d,this.wrap=p}static create(e,t,s=null){const o=R(e.spatialReference),i=t.origin||x(e.origin.x,e.origin.y),l=x(e.size[0]*t.resolution,e.size[1]*t.resolution),r=x(-1/0,-1/0),h=x(1/0,1/0),n=x(1/0,1/0);B(s)&&(M(r,Math.max(0,Math.floor((s.xmin-i[0])/l[0])),Math.max(0,Math.floor((i[1]-s.ymax)/l[1]))),M(h,Math.max(0,Math.floor((s.xmax-i[0])/l[0])),Math.max(0,Math.floor((i[1]-s.ymin)/l[1]))),M(n,h[0]-r[0]+1,h[1]-r[1]+1));const{cols:c,rows:d}=t;let p,w,y,f;return!s&&c&&d&&(M(r,c[0],d[0]),M(h,c[1],d[1]),M(n,c[1]-c[0]+1,d[1]-d[0]+1)),e.isWrappable?(p=x(Math.ceil(Math.round((o.valid[1]-o.valid[0])/t.resolution)/e.size[0]),n[1]),w=x(Math.floor((o.origin[0]-i[0])/l[0]),r[1]),y=x(p[0]+w[0]-1,h[1]),f=!0):(w=r,y=h,p=n,f=!1),new T(t.level,t.resolution,t.scale,i,r,h,n,l,w,y,p,f)}normalizeCol(e){if(!this.wrap)return e;const t=this.worldSize[0];return e<0?t-1-Math.abs((e+1)%t):e%t}denormalizeCol(e,t){return this.wrap?this.worldSize[0]*t+e:e}getWorldForColumn(e){return this.wrap?Math.floor(e/this.worldSize[0]):0}getFirstColumnForWorld(e){return e*this.worldSize[0]+this.first[0]}getLastColumnForWorld(e){return e*this.worldSize[0]+this.first[0]+this.size[0]-1}getColumnForX(e){return(e-this.origin[0])/this.norm[0]}getXForColumn(e){return this.origin[0]+e*this.norm[0]}getRowForY(e){return(this.origin[1]-e)/this.norm[1]}getYForRow(e){return this.origin[1]-e*this.norm[1]}getTileBounds(e,t,s=!1){v.set(t);const o=s?v.col:this.denormalizeCol(v.col,v.world),i=v.row;return Q(e,this.getXForColumn(o),this.getYForRow(i+1),this.getXForColumn(o+1),this.getYForRow(i)),e}getTileCoords(e,t,s=!1){v.set(t);const o=s?v.col:this.denormalizeCol(v.col,v.world);return Array.isArray(e)?M(e,this.getXForColumn(o),this.getYForRow(v.row)):(e.x=this.getXForColumn(o),e.y=this.getYForRow(v.row)),e}}let C=class{constructor(){this.spans=[]}acquire(e){this.lodInfo=e}release(){this.lodInfo=null,this.spans.length=0}forEach(e,t){const{spans:s,lodInfo:o}=this,{level:i}=o;if(s.length!==0)for(const{row:l,colFrom:r,colTo:h}of s)for(let n=r;n<=h;n++)e.call(t,i,l,o.normalizeCol(n),o.getWorldForColumn(n))}};C.pool=new V(C);class S{constructor(e,t,s){this.row=e,this.colFrom=t,this.colTo=s}}const u=new I("0/0/0/0");let L=class{constructor(e,t,s,o,i,l,r,h){this.x=e,this.ymin=t,this.ymax=s,this.invM=o,this.leftAdjust=i,this.rightAdjust=l,this.leftBound=r,this.rightBound=h}static create(e,t){e[1]>t[1]&&([e,t]=[t,e]);const[s,o]=e,[i,l]=t,r=i-s,h=l-o,n=h!==0?r/h:0,c=(Math.ceil(o)-o)*n,d=(Math.floor(o)-o)*n;return new L(s,Math.floor(o),Math.ceil(l),n,r<0?c:d,r<0?d:c,r<0?i:s,r<0?s:i)}incrRow(){this.x+=this.invM}getLeftCol(){return Math.max(this.x+this.leftAdjust,this.leftBound)}getRightCol(){return Math.min(this.x+this.rightAdjust,this.rightBound)}};const _=[[0,0],[0,0],[0,0],[0,0]],G=1e-6;let ge=class{constructor(e,t=null){this.tileInfo=e,this.fullExtent=t,this.scales=[],this._infoByScale={},this._infoByLevel={};const s=e.lods.slice();s.sort((i,l)=>l.scale-i.scale);const o=this._lodInfos=s.map(i=>T.create(e,i,t));s.forEach((i,l)=>{this._infoByLevel[i.level]=o[l],this._infoByScale[i.scale]=o[l],this.scales[l]=i.scale},this),this._wrap=e.isWrappable}get spatialReference(){return this.tileInfo.spatialReference}getLODInfoAt(e){return this._infoByLevel[typeof e=="number"?e:e.level]}getTileBounds(e,t,s=!1){u.set(t);const o=this._infoByLevel[u.level];return o?o.getTileBounds(e,u,s):e}getTileCoords(e,t,s=!1){u.set(t);const o=this._infoByLevel[u.level];return o?o.getTileCoords(e,u,s):e}getTileCoverage(e,t=192,s="closest"){const o=s==="closest"?this.getClosestInfoForScale(e.scale):this.getSmallestInfoForScale(e.scale),i=C.pool.acquire(o),l=this._wrap;let r,h,n,c=1/0,d=-1/0;const p=i.spans;_[0][0]=_[0][1]=_[1][1]=_[3][0]=-t,_[1][0]=_[2][0]=e.size[0]+t,_[2][1]=_[3][1]=e.size[1]+t;for(const a of _)e.toMap(a,a),a[0]=o.getColumnForX(a[0]),a[1]=o.getRowForY(a[1]);const w=[];let y=3;for(let a=0;a<4;a++){if(_[a][1]===_[y][1]){y=a;continue}const g=L.create(_[a],_[y]);c=Math.min(g.ymin,c),d=Math.max(g.ymax,d),w[g.ymin]===void 0&&(w[g.ymin]=[]),w[g.ymin].push(g),y=a}if(c==null||d==null||d-c>100)return null;let f=[];for(r=c;r<d;){w[r]!=null&&(f=f.concat(w[r])),h=1/0,n=-1/0;for(let a=f.length-1;a>=0;a--){const g=f[a];h=Math.min(h,g.getLeftCol()),n=Math.max(n,g.getRightCol())}if(h=Math.floor(h),n=Math.floor(n),r>=o.first[1]&&r<=o.last[1])if(l)if(o.size[0]<o.worldSize[0]){const a=Math.floor(n/o.worldSize[0]);for(let g=Math.floor(h/o.worldSize[0]);g<=a;g++)p.push(new S(r,Math.max(o.getFirstColumnForWorld(g),h),Math.min(o.getLastColumnForWorld(g),n)))}else p.push(new S(r,h,n));else h>o.last[0]||n<o.first[0]||(h=Math.max(h,o.first[0]),n=Math.min(n,o.last[0]),p.push(new S(r,h,n)));r+=1;for(let a=f.length-1;a>=0;a--){const g=f[a];g.ymax>=r?g.incrRow():f.splice(a,1)}}return i}getTileParentId(e){u.set(e);const t=this._infoByLevel[u.level],s=this._lodInfos.indexOf(t)-1;return s<0?null:(this._getTileIdAtLOD(u,this._lodInfos[s],u),u.id)}getTileResolution(e){const t=this._infoByLevel[typeof e=="object"?e.level:e];return t?t.resolution:-1}getTileScale(e){const t=this._infoByLevel[e.level];return t?t.scale:-1}intersects(e,t){u.set(t);const s=this._infoByLevel[u.level],o=e.lodInfo;if(o.resolution>s.resolution){this._getTileIdAtLOD(u,o,u);const l=o.denormalizeCol(u.col,u.world);for(const r of e.spans)if(r.row===u.row&&r.colFrom<=l&&r.colTo>=l)return!0}if(o.resolution<s.resolution){const[l,r,h,n]=e.spans.reduce((f,a)=>(f[0]=Math.min(f[0],a.row),f[1]=Math.max(f[1],a.row),f[2]=Math.min(f[2],a.colFrom),f[3]=Math.max(f[3],a.colTo),f),[1/0,-1/0,1/0,-1/0]),c=s.denormalizeCol(u.col,u.world),d=o.getColumnForX(s.getXForColumn(c)),p=o.getRowForY(s.getYForRow(u.row)),w=o.getColumnForX(s.getXForColumn(c+1))-1,y=o.getRowForY(s.getYForRow(u.row+1))-1;return!(d>n||w<h||p>r||y<l)}const i=o.denormalizeCol(u.col,u.world);return e.spans.some(l=>l.row===u.row&&l.colFrom<=i&&l.colTo>=i)}normalizeBounds(e,t,s){if(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],this._wrap){const o=R(this.tileInfo.spatialReference),i=-s*(o.valid[1]-o.valid[0]);e[0]+=i,e[2]+=i}return e}getSmallestInfoForScale(e){const t=this.scales;if(this._infoByScale[e])return this._infoByScale[e];if(e>t[0])return this._infoByScale[t[0]];for(let s=1;s<t.length-1;s++)if(e>t[s]+G)return this._infoByScale[t[s-1]];return this._infoByScale[t[t.length-1]]}getClosestInfoForScale(e){const t=this.scales;return this._infoByScale[e]||(e=t.reduce((s,o)=>Math.abs(o-e)<Math.abs(s-e)?o:s,t[0])),this._infoByScale[e]}scaleToLevel(e){const t=this.scales;if(this._infoByScale[e])return this._infoByScale[e].level;for(let s=t.length-1;s>=0;s--)if(e<t[s])return s===t.length-1?this._infoByScale[t[t.length-1]].level:this._infoByScale[t[s]].level+(t[s]-e)/(t[s]-t[s+1]);return this._infoByScale[t[0]].level}scaleToZoom(e){return this.tileInfo.scaleToZoom(e)}_getTileIdAtLOD(e,t,s){const o=this._infoByLevel[s.level];return e.set(s),t.resolution<o.resolution?null:(t.resolution===o.resolution||(e.level=t.level,e.col=Math.floor(s.col*o.resolution/t.resolution+.01),e.row=Math.floor(s.row*o.resolution/t.resolution+.01)),e)}},z=class{constructor(e,t){this.key=new I(0,0,0,0),this.bounds=Z(),this.objectIds=new Set,this.key.set(t);const s=e.getLODInfoAt(this.key);this.tileInfoView=e,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=s.resolution,this.scale=s.scale,this.level=s.level}get id(){return this.key.id}get extent(){return N.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}createChildTiles(){const e=this.key.getChildKeys(),t=D.acquire();for(let s=0;s<e.length;s++)t[s]=new z(this.tileInfoView,e[s]);return t}getQuantizationParameters(){return J.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}};const F={added:[],removed:[]},b=new Set,H=new I(0,0,0,0);let we=class extends W{constructor(e){super(),this._tiles=new Map,this._index=O(9,j("esri-csp-restrictions")?t=>({minX:t.bounds[0],minY:t.bounds[1],maxX:t.bounds[2],maxY:t.bounds[3]}):[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),this.tiles=[],this.tileScheme=e}destroy(){this.clear()}clear(){this.tiles.length=0,this._tiles.clear(),this._index.clear()}has(e){return this._tiles.has(e)}get(e){return this._tiles.get(e)}boundsIntersections(e){return this._index.search({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]})}updateTiles(e){const t={added:[],removed:[]};for(const s of e.added)if(!this.has(s)){const o=new z(this.tileScheme,s);this._tiles.set(s,o),this._index.insert(o),t.added.push(o)}for(const s of e.removed)if(this.has(s)){const o=this.get(s);this._tiles.delete(s),this._index.remove(o),t.removed.push(o)}this.tiles.length=0,this._tiles.forEach(s=>this.tiles.push(s)),(t.added.length||t.removed.length)&&this.emit("update",t)}setViewState(e){const t=this.tileScheme.getTileCoverage(e,0);if(!t)return;const{spans:s,lodInfo:o}=t,{level:i}=o;if(s.length>0)for(const{row:l,colFrom:r,colTo:h}of s)for(let n=r;n<=h;n++){const c=H.set(i,l,o.normalizeCol(n),o.getWorldForColumn(n)).id;if(b.add(c),!this.has(c)){const d=new z(this.tileScheme,c);this._tiles.set(c,d),this._index.insert(d),this.tiles.push(d),F.added.push(d)}}for(let l=this.tiles.length-1;l>=0;l--){const r=this.tiles[l];b.has(r.id)||(this._tiles.delete(r.id),this.tiles.splice(l,1),this._index.remove(r),F.removed.push(r))}(F.added.length||F.removed.length)&&this.emit("update",F),C.pool.release(t),b.clear(),F.added.length=0,F.removed.length=0}};export{C as a,we as d,ge as h,ue as l};
