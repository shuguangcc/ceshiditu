import{r as Q}from"./typedArrayUtil-a8b5b3e9.js";import{e as Rt}from"./ensureType-cf29afa9.js";import{j as D}from"./cast-7928d7aa.js";import{u as k,g as U,s as At,o as pt,p as et,r as nt,A as Et}from"./vec3-a020a6f6.js";import{n as E,r as T}from"./vec3f64-2f9cef06.js";import{s as dt,d as rt,k as Nt,v as bt,e as Ft,r as Mt,_ as q,p as ot,T as V,g as H,V as it,R as P}from"./sphere-4f5e644f.js";import{u as gt,h as Bt}from"./mat4-44a0988f.js";import{w as It}from"./vec4-790471c0.js";import{r as M}from"./vec4f64-e407da96.js";import{p as A,A as St,j as L,G as xt,R as Lt,D as jt}from"./plane-45609588.js";import{c as st}from"./Util-a48361c6.js";function C(r){return r?{ray:rt(r.ray),c0:r.c0,c1:r.c1}:{ray:rt(),c0:0,c1:Number.MAX_VALUE}}function Pt(r,t=C()){return Nt(r,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function $t(r,t,e=C()){const n=At(r.vector);return bt(r.origin,t,e.ray),e.c0=0,e.c1=n,e}function ee(r,t){return ut(r,r.c0,t)}function ne(r,t){return ut(r,r.c1,t)}function ut(r,t,e){return k(e,r.ray.origin,U(e,r.ray.direction,t))}new dt(()=>C());function re(r){return r?[A(r[0]),A(r[1]),A(r[2]),A(r[3]),A(r[4]),A(r[5])]:[A(),A(),A(),A(),A(),A()]}function Gt(){return[E(),E(),E(),E(),E(),E(),E(),E()]}function oe(r,t){for(let e=0;e<x.NUM;e++)St(r[e],t[e])}function ie(r,t,e,n=Dt){const o=gt(Ft.get(),t,r);Bt(o,o);for(let i=0;i<Y.NUM;++i){const h=It(Mt.get(),zt[i],o);pt(n[i],h[0]/h[3],h[1]/h[3],h[2]/h[3])}Ht(e,n)}function Ht(r,t){L(t[s.FAR_BOTTOM_LEFT],t[s.NEAR_BOTTOM_LEFT],t[s.NEAR_TOP_LEFT],r[g.LEFT]),L(t[s.NEAR_BOTTOM_RIGHT],t[s.FAR_BOTTOM_RIGHT],t[s.FAR_TOP_RIGHT],r[g.RIGHT]),L(t[s.FAR_BOTTOM_LEFT],t[s.FAR_BOTTOM_RIGHT],t[s.NEAR_BOTTOM_RIGHT],r[g.BOTTOM]),L(t[s.NEAR_TOP_LEFT],t[s.NEAR_TOP_RIGHT],t[s.FAR_TOP_RIGHT],r[g.TOP]),L(t[s.NEAR_BOTTOM_LEFT],t[s.NEAR_BOTTOM_RIGHT],t[s.NEAR_TOP_RIGHT],r[g.NEAR]),L(t[s.FAR_BOTTOM_RIGHT],t[s.FAR_BOTTOM_LEFT],t[s.FAR_TOP_LEFT],r[g.FAR])}function v(r,t){for(let e=0;e<x.NUM;e++){const n=r[e];if(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]>=t[3])return!1}return!0}function se(r,t){return ct(r,Pt(t,_t.get()))}function he(r,t){for(let e=0;e<x.NUM;e++){const n=r[e];if(!xt(n,t))return!1}return!0}function ae(r,t,e){return ct(r,$t(t,e,_t.get()))}function le(r,t){for(let e=0;e<x.NUM;e++)if(Lt(r[e],t)>0)return!1;return!0}function ct(r,t){for(let e=0;e<x.NUM;e++)if(!jt(r[e],t))return!1;return!0}var g,s;(function(r){r[r.LEFT=0]="LEFT",r[r.RIGHT=1]="RIGHT",r[r.BOTTOM=2]="BOTTOM",r[r.TOP=3]="TOP",r[r.NEAR=4]="NEAR",r[r.FAR=5]="FAR"})(g||(g={})),function(r){r[r.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",r[r.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",r[r.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",r[r.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",r[r.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",r[r.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",r[r.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",r[r.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(s||(s={}));const de={bottom:[s.FAR_BOTTOM_RIGHT,s.NEAR_BOTTOM_RIGHT,s.NEAR_BOTTOM_LEFT,s.FAR_BOTTOM_LEFT],near:[s.NEAR_BOTTOM_LEFT,s.NEAR_BOTTOM_RIGHT,s.NEAR_TOP_RIGHT,s.NEAR_TOP_LEFT],far:[s.FAR_BOTTOM_RIGHT,s.FAR_BOTTOM_LEFT,s.FAR_TOP_LEFT,s.FAR_TOP_RIGHT],right:[s.NEAR_BOTTOM_RIGHT,s.FAR_BOTTOM_RIGHT,s.FAR_TOP_RIGHT,s.NEAR_TOP_RIGHT],left:[s.FAR_BOTTOM_LEFT,s.NEAR_BOTTOM_LEFT,s.NEAR_TOP_LEFT,s.FAR_TOP_LEFT],top:[s.FAR_TOP_LEFT,s.NEAR_TOP_LEFT,s.NEAR_TOP_RIGHT,s.FAR_TOP_RIGHT]};var x,Y;(function(r){r[r.NUM=6]="NUM"})(x||(x={})),function(r){r[r.NUM=8]="NUM"}(Y||(Y={}));const zt=[M(-1,-1,-1,1),M(1,-1,-1,1),M(1,1,-1,1),M(-1,1,-1,1),M(-1,-1,1,1),M(1,-1,1,1),M(1,1,1,1),M(-1,1,1,1)],_t=new dt(C),Dt=Gt();class j{constructor(t,e){this._objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new d,this._objectCount=0,e&&(e.maximumObjectsPerNode!==void 0&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),e.maximumDepth!==void 0&&(this._maximumDepth=e.maximumDepth))}get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}destroy(){this._degenerateObjects.clear(),d.clearPool(),Z[0]=null,I.prune(),S.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=d.acquire();for(let o=0;o<e;o++){const i=t[o];this._isDegenerate(i)?this._degenerateObjects.add(i):(n.init(this._root),this._add(i,n))}d.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=d.acquire();for(const o of t){const i=Q(e)?e:q(this._objectToBoundingSphere(o),Ut);z(i[3])?(n.init(this._root),this._remove(o,i,n)):this._degenerateObjects.delete(o)}d.release(n),this._shrink()}update(t,e){if(!z(e[3])&&this._isDegenerate(t))return;const n=kt(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const o=ot(t,e);this._forEachNode(this._root,i=>{if(!this._intersectsNode(o,i))return!1;const h=i.node;return h.terminals.forAll(a=>{this._intersectsObject(o,a)&&n(a)}),h.residents!==null&&h.residents.forAll(a=>{this._intersectsObject(o,a)&&n(a)}),!0})}forEachAlongRayWithVerticalOffset(t,e,n,o){const i=ot(t,e);this._forEachNode(this._root,h=>{if(!this._intersectsNodeWithOffset(i,h,o))return!1;const a=h.node;return a.terminals.forAll(l=>{this._intersectsObjectWithOffset(i,l,o)&&n(l)}),a.residents!==null&&a.residents.forAll(l=>{this._intersectsObjectWithOffset(i,l,o)&&n(l)}),!0})}forEach(t){this._forEachNode(this._root,e=>{const n=e.node;return n.terminals.forAll(t),n.residents!==null&&n.residents.forAll(t),!0}),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,o=()=>!0,i=1/0){let h=1/0,a=1/0,l=null;const c=K(t,e),f=u=>{if(--i,!o(u))return;const R=this._objectToBoundingSphere(u);if(!v(n,R))return;const b=B(t,e,H(R)),$=b-R[3],_=b+R[3];$<h&&(h=$,a=_,l=u)};return this._forEachNodeDepthOrdered(this._root,u=>{if(i<=0||!v(n,u.bounds)||(U(p,c,u.halfSize),k(p,p,u.bounds),B(t,e,p)>a))return!1;const R=u.node;return R.terminals.forAll(b=>f(b)),R.residents!==null&&R.residents.forAll(b=>f(b)),!0},t,e),l}forEachInDepthRange(t,e,n,o,i,h,a){let l=-1/0,c=1/0;const f={setRange:_=>{n===j.DepthOrder.FRONT_TO_BACK?(l=Math.max(l,_.near),c=Math.min(c,_.far)):(l=Math.max(l,-_.far),c=Math.min(c,-_.near))}};f.setRange(o);const u=B(e,n,t),R=K(e,n),b=K(e,-n),$=_=>{if(!a(_))return;const F=this._objectToBoundingSphere(_),G=H(F),tt=B(e,n,G)-u,Ot=tt-F[3],mt=tt+F[3];Ot>c||mt<l||!v(h,F)||i(_,f)};this._forEachNodeDepthOrdered(this._root,_=>{if(!v(h,_.bounds)||(U(p,R,_.halfSize),k(p,p,_.bounds),B(e,n,p)-u>c)||(U(p,b,_.halfSize),k(p,p,_.bounds),B(e,n,p)-u<l))return!1;const F=_.node;return F.terminals.forAll(G=>$(G)),F.residents!==null&&F.residents.forAll(G=>$(G)),!0},e,n)}forEachNode(t){this._forEachNode(this._root,e=>t(e.node,e.bounds,e.halfSize))}forEachNeighbor(t,e){const n=V(e),o=H(e),i=l=>{const c=this._objectToBoundingSphere(l),f=V(c),u=n+f;return!(et(H(c),o)-u*u<=0)||t(l)};let h=!0;const a=l=>{h&&(h=i(l))};this._forEachNode(this._root,l=>{const c=V(l.bounds),f=n+c;if(et(H(l.bounds),o)-f*f>0)return!1;const u=l.node;return u.terminals.forAll(a),h&&u.residents!==null&&u.residents.forAll(a),h}),h&&this.forEachDegenerateObject(a)}_intersectsNode(t,e){return y(e.bounds,2*-e.halfSize,O),y(e.bounds,2*e.halfSize,m),st(t.origin,t.direction,O,m)}_intersectsNodeWithOffset(t,e,n){return y(e.bounds,2*-e.halfSize,O),y(e.bounds,2*e.halfSize,m),n.applyToMinMax(O,m),st(t.origin,t.direction,O,m)}_intersectsObject(t,e){const n=this._objectToBoundingSphere(e);return!(n[3]>0)||it(n,t)}_intersectsObjectWithOffset(t,e,n){const o=this._objectToBoundingSphere(e);return!(o[3]>0)||it(n.applyToBoundingSphere(o),t)}_forEachNode(t,e){let n=d.acquire().init(t);const o=[n];for(;o.length!==0;){if(n=o.pop(),e(n)&&!n.isLeaf())for(let i=0;i<n.node.children.length;i++)n.node.children[i]&&o.push(d.acquire().init(n).advance(i));d.release(n)}}_forEachNodeDepthOrdered(t,e,n,o=j.DepthOrder.FRONT_TO_BACK){let i=d.acquire().init(t);const h=[i];for(wt(n,o,lt);h.length!==0;){if(i=h.pop(),e(i)&&!i.isLeaf())for(let a=7;a>=0;--a){const l=lt[a];i.node.children[l]&&h.push(d.acquire().init(i).advance(l))}d.release(i)}}_remove(t,e,n){I.clear();const o=n.advanceTo(e,(i,h)=>{I.push(i.node),I.push(h)})?n.node.terminals:n.node.residents;if(o.removeUnordered(t),o.length===0)for(let i=I.length-2;i>=0;i-=2){const h=I.data[i],a=I.data[i+1];if(!this._purge(h,a))break}}_nodeIsEmpty(t){if(t.terminals.length!==0)return!1;if(t.residents!==null)return t.residents.length===0;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(t.residents===null&&(t.residents=new D({shrink:!0})),!0)}_add(t,e){e.advanceTo(this._objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const o=d.acquire().init(t);this._add(e.getItemAt(n),o),d.release(o)}}_grow(t,e){if(e!==0&&(ht(t,e,n=>this._objectToBoundingSphere(n),N),z(N[3])&&!this._fitsInsideTree(N)))if(this._nodeIsEmpty(this._root.node))q(N,this._root.bounds),this._root.halfSize=1.25*N[3];else{const n=this._rootBoundsForRootAsSubNode(N);this._placingRootViolatesMaxDepth(n)?this._rebuildTree(N,n):this._growRootAsSubNode(n),d.release(n)}}_rebuildTree(t,e){nt(X,e.bounds),X[3]=e.halfSize,ht([t,X],2,o=>o,J);const n=d.acquire().init(this._root);this._root.initFrom(null,J,1.25*J[3]),this._forEachNode(n,o=>(this.add(o.node.terminals.data,o.node.terminals.length),o.node.residents!==null&&this.add(o.node.residents.data,o.node.residents.length),!0)),d.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,o=>(n=Math.max(n,o.depth),n+e<=this._maximumDepth)),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let o=-1/0;const i=this._root.bounds,h=this._root.halfSize;for(let a=0;a<3;a++){const l=i[a]-h-(n[a]-e),c=n[a]+e-(i[a]+h),f=Math.max(0,Math.ceil(l/(2*h))),u=Math.max(0,Math.ceil(c/(2*h)))+1,R=2**Math.ceil(Math.log(f+u)*Math.LOG2E);o=Math.max(o,R),w[a].min=f,w[a].max=u}for(let a=0;a<3;a++){let l=w[a].min,c=w[a].max;const f=(o-(l+c))/2;l+=Math.ceil(f),c+=Math.floor(f);const u=i[a]-h-l*h*2;W[a]=u+(c+l)*h}return W[3]=o*h*Tt,d.acquire().initFrom(null,W,o*h,0)}_growRootAsSubNode(t){const e=this._root.node;nt(N,this._root.bounds),N[3]=this._root.halfSize,this._root.init(t),t.advanceTo(N,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(t===-1)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(this._root.node.terminals.length!==0||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,o=0;for(;o<e.length&&t==null;)n=o++,t=e[n];for(;o<e.length;)if(e[o++])return-1;return n}_isDegenerate(t){return!z(this._objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}}class d{constructor(){this.bounds=P(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,o=this.depth){return this.node=Q(t)?t:d.createEmptyNode(),Q(e)&&q(e,this.bounds),this.halfSize=n,this.depth=o,this}advance(t){let e=this.node.children[t];e||(e=d.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=ft[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.bounds[3]=this.halfSize*Tt,this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const o=this._childIndex(t);e&&e(this,o),this.advance(o)}}isLeaf(){return this.node.residents!=null}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new D({shrink:!0}),residents:new D({shrink:!0})}}static acquire(){return d._pool.acquire()}static release(t){d._pool.release(t)}static clearPool(){d._pool.prune()}}function vt(r,t){r[0]=Math.min(r[0],t[0]-t[3]),r[1]=Math.min(r[1],t[1]-t[3]),r[2]=Math.min(r[2],t[2]-t[3])}function yt(r,t){r[0]=Math.max(r[0],t[0]+t[3]),r[1]=Math.max(r[1],t[1]+t[3]),r[2]=Math.max(r[2],t[2]+t[3])}function y(r,t,e){e[0]=r[0]+t,e[1]=r[1]+t,e[2]=r[2]+t}function ht(r,t,e,n){if(t===1){const o=e(r[0]);q(o,n)}else{O[0]=1/0,O[1]=1/0,O[2]=1/0,m[0]=-1/0,m[1]=-1/0,m[2]=-1/0;for(let o=0;o<t;o++){const i=e(r[o]);z(i[3])&&(vt(O,i),yt(m,i))}Et(n,O,m,.5),n[3]=Math.max(m[0]-O[0],m[1]-O[1],m[2]-O[2])/2}}function wt(r,t,e){if(!S.length)for(let n=0;n<8;++n)S.push({index:0,distance:0});for(let n=0;n<8;++n){const o=ft[n];S.data[n].index=n,S.data[n].distance=B(r,t,o)}S.sort((n,o)=>n.distance-o.distance);for(let n=0;n<8;++n)e[n]=S.data[n].index}function K(r,t){let e,n=1/0;for(let o=0;o<8;++o){const i=B(r,t,at[o]);i<n&&(n=i,e=at[o])}return e}function B(r,t,e){return t*(r[0]*e[0]+r[1]*e[1]+r[2]*e[2])}function z(r){return!isNaN(r)&&r!==-1/0&&r!==1/0&&r>0}d._pool=new Rt(d),function(r){var t;(t=r.DepthOrder||(r.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(j||(j={}));const ft=[T(-1,-1,-1),T(1,-1,-1),T(-1,1,-1),T(1,1,-1),T(-1,-1,1),T(1,-1,1),T(-1,1,1),T(1,1,1)],at=[T(-1,-1,-1),T(-1,-1,1),T(-1,1,-1),T(-1,1,1),T(1,-1,-1),T(1,-1,1),T(1,1,-1),T(1,1,1)],Tt=Math.sqrt(3),Z=[null];function kt(r){return Z[0]=r,Z}const W=P(),p=E(),O=E(),m=E(),I=new D,Ut=P(),N=P(),X=P(),J=P(),w=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],S=new D,lt=[0,0,0,0,0,0,0,0],ue=j;export{ne as A,ue as G,re as H,Gt as I,Ht as L,se as P,g as U,C as a,Pt as b,he as c,ee as d,v as i,de as k,s as l,ae as m,le as p,ie as s,oe as u,x as v};