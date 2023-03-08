import{l as c}from"./CollectionFlattener-3dd1f479.js";import{e as l,y as h,n as m}from"./cast-7928d7aa.js";import{j as u}from"./Collection-78126e82.js";import{n as f}from"./collectionUtils-3831b7c4.js";import{s as d}from"./Error-653283ae.js";import{C as b}from"./promiseUtils-6684e352.js";import"./typedArrayUtil-a8b5b3e9.js";import"./ensureType-cf29afa9.js";import{b as g}from"./Layer-f0696768.js";function B(n){return new c({getCollections:()=>[n.tables,n.layers],getChildrenFunction:s=>{const r=[];return"tables"in s&&r.push(s.tables),"layers"in s&&r.push(s.layers),r},itemFilterFunction:s=>{const r=s.parent;return r&&"tables"in r&&r.tables.includes(s)}})}function y(n,s,r){let e,t;if(n)for(let o=0,i=n.length;o<i;o++){if(e=n.getItemAt(o),e[s]===r)return e;if((e==null?void 0:e.type)==="group"&&(t=y(e.layers,s,r),t))return t}}const T=n=>{let s=class extends n{constructor(...e){super(...e),this.layers=new u;const t=a=>{a.parent&&"remove"in a.parent&&a.parent.remove(a)},o=a=>{a.parent=this,this.layerAdded(a),a.type!=="elevation"&&a.type!=="base-elevation"||d.getLogger(this.declaredClass).error(`Layer 'title:${a.title}, id:${a.id}' of type '${a.type}' is not supported as an operational layer and will therefore be ignored.`)},i=a=>{a.parent=null,this.layerRemoved(a)};this.layers.on("before-add",a=>t(a.item)),this.layers.on("after-add",a=>o(a.item)),this.layers.on("after-remove",a=>i(a.item))}destroy(){const e=this.layers.removeAll();for(const t of e)this.layerRemoved(t),t.destroy();this.layers.destroy()}set layers(e){this._set("layers",f(e,this._get("layers")))}add(e,t){const o=this.layers;if(t=o.getNextIndex(t),e instanceof g){const i=e;i.parent===this?this.reorder(i,t):o.add(i,t)}else b(e)?e.then(i=>{this.destroyed||this.add(i,t)}):d.getLogger(this.declaredClass).error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}addMany(e,t){const o=this.layers;t=o.getNextIndex(t),e.slice().forEach(i=>{i.parent!==this?(o.add(i,t),t+=1):this.reorder(i,t)})}findLayerById(e){return y(this.layers,"id",e)}findLayerByUid(e){return y(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,t){return this.layers.reorder(e,t)}layerAdded(e){}layerRemoved(e){}};return l([h()],s.prototype,"layers",null),s=l([m("esri.support.LayersMixin")],s),s};function p(n,s,r){if(n)for(let e=0,t=n.length;e<t;e++){const o=n.getItemAt(e);if(o[s]===r)return o;if((o==null?void 0:o.type)==="group"){const i=p(o.tables,s,r);if(i)return i}}}const F=n=>{let s=class extends n{constructor(...r){super(...r),this.tables=new u,this.tables.on("after-add",e=>{const t=e.item;t.parent&&t.parent!==this&&"tables"in t.parent&&t.parent.tables.remove(t),t.parent=this,t.type!=="feature"&&d.getLogger(this.declaredClass).error(`Layer 'title:${t.title}, id:${t.id}' of type '${t.type}' is not supported as a table and will therefore be ignored.`)}),this.tables.on("after-remove",e=>{e.item.parent=null})}destroy(){const r=this.tables.removeAll();for(const e of r)e.destroy();this.tables.destroy()}set tables(r){this._set("tables",f(r,this._get("tables")))}findTableById(r){return p(this.tables,"id",r)}findTableByUid(r){return p(this.tables,"uid",r)}};return l([h()],s.prototype,"tables",null),s=l([m("esri.support.TablesMixin")],s),s};export{T as d,F as l,B as t};
