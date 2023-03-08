import{t as b}from"./typedArrayUtil-a8b5b3e9.js";import{u as V}from"./aaBoundingRect-4a760199.js";import{g as A,q as J}from"./Polyline-bf268e7b.js";import{s as N,l as R,u as X,y as q,f as k}from"./jsonUtils-03c4af61.js";import{r as S,s as j,a as p}from"./normalizeUtils-ee4bf39f.js";import{b as z,m as B}from"./Extent-69509002.js";function Z(t){return M(t,!0)}function ss(t){return M(t,!1)}function M(t,s){if(b(t))return null;const n=t.spatialReference,i=z(n),e="toJSON"in t?t.toJSON():t;if(!i)return e;const h=B(n)?102100:4326,o=S[h].maxX,x=S[h].minX;if(N(e))return T(e,o,x);if(R(e))return e.points=e.points.map(r=>T(r,o,x)),e;if(X(e))return D(e,i);if(q(e)||k(e)){const r=A(F,e),u={xmin:r[0],ymin:r[1],xmax:r[2],ymax:r[3]},m=p(u.xmin,x)*(2*o),_=m===0?e:j(e,m);return u.xmin+=m,u.xmax+=m,u.xmax>o?L(_,o,s):u.xmin<x?L(_,x,s):_}return e}function D(t,s){if(!s)return t;const n=E(t,s).map(i=>i.extent);return n.length<2?n[0]||t:n.length>2?(t.xmin=s.valid[0],t.xmax=s.valid[1],t):{rings:n.map(i=>[[i.xmin,i.ymin],[i.xmin,i.ymax],[i.xmax,i.ymax],[i.xmax,i.ymin],[i.xmin,i.ymin]])}}function T(t,s,n){if(Array.isArray(t)){const i=t[0];if(i>s){const e=p(i,s);t[0]=i+e*(-2*s)}else if(i<n){const e=p(i,n);t[0]=i+e*(-2*n)}}else{const i=t.x;if(i>s){const e=p(i,s);t.x+=e*(-2*s)}else if(i<n){const e=p(i,n);t.x+=e*(-2*n)}}return t}function E(t,s){const n=[],{ymin:i,ymax:e,xmin:h,xmax:o}=t,x=t.xmax-t.xmin,[r,u]=s.valid,{x:m,frameId:_}=w(t.xmin,s),{x:a,frameId:c}=w(t.xmax,s),$=m===a&&x>0;if(x>2*u){const v={xmin:h<o?m:a,ymin:i,xmax:u,ymax:e},O={xmin:r,ymin:i,xmax:h<o?a:m,ymax:e},P={xmin:0,ymin:i,xmax:u,ymax:e},C={xmin:r,ymin:i,xmax:0,ymax:e},f=[],y=[];I(v,P)&&f.push(_),I(v,C)&&y.push(_),I(O,P)&&f.push(c),I(O,C)&&y.push(c);for(let d=_+1;d<c;d++)f.push(d),y.push(d);n.push(new l(v,[_]),new l(O,[c]),new l(P,f),new l(C,y))}else m>a||$?n.push(new l({xmin:m,ymin:i,xmax:u,ymax:e},[_]),new l({xmin:r,ymin:i,xmax:a,ymax:e},[c])):n.push(new l({xmin:m,ymin:i,xmax:a,ymax:e},[_]));return n}function w(t,s){const[n,i]=s.valid,e=2*i;let h,o=0;return t>i?(h=Math.ceil(Math.abs(t-i)/e),t-=h*e,o=h):t<n&&(h=Math.ceil(Math.abs(t-n)/e),t+=h*e,o=-h),{x:t,frameId:o}}function I(t,s){const{xmin:n,ymin:i,xmax:e,ymax:h}=s;return g(t,n,i)&&g(t,n,h)&&g(t,e,h)&&g(t,e,i)}function g(t,s,n){return s>=t.xmin&&s<=t.xmax&&n>=t.ymin&&n<=t.ymax}function L(t,s,n=!0){const i=!k(t);if(i&&J(t),n)return new G().cut(t,s);const e=i?t.rings:t.paths,h=i?4:2,o=e.length,x=-2*s;for(let r=0;r<o;r++){const u=e[r];if(u&&u.length>=h){const m=[];for(const _ of u)m.push([_[0]+x,_[1]]);e.push(m)}}return i?t.rings=e:t.paths=e,t}class l{constructor(s,n){this.extent=s,this.frameIds=n}}const F=V();class G{constructor(){this._linesIn=[],this._linesOut=[]}cut(s,n){let i;if(this._xCut=n,s.rings)this._closed=!0,i=s.rings,this._minPts=4;else{if(!s.paths)return null;this._closed=!1,i=s.paths,this._minPts=2}for(const h of i){if(!h||h.length<this._minPts)continue;let o=!0;for(const x of h)o?(this.moveTo(x),o=!1):this.lineTo(x);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),i=[];for(const h of this._linesIn)h&&h.length>=this._minPts&&i.push(h);const e=-2*this._xCut;for(const h of this._linesOut)if(h&&h.length>=this._minPts){for(const o of h)o[0]+=e;i.push(h)}return this._closed?s.rings=i:s.paths=i,s}moveTo(s){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(s[0]),this._moveTo(s[0],s[1],this._prevSide),this._prevPt=s,this._firstPt=s}lineTo(s){const n=this._side(s[0]);if(n*this._prevSide==-1){const i=this._intersect(this._prevPt,s);this._lineTo(this._xCut,i,0),this._prevSide=0,this._lineTo(s[0],s[1],n)}else this._lineTo(s[0],s[1],n);this._prevSide=n,this._prevPt=s}close(){const s=this._firstPt,n=this._prevPt;s[0]===n[0]&&s[1]===n[1]||this.lineTo(s),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(s,n,i){this._closed?(this._lineIn.push([i<=0?s:this._xCut,n]),this._lineOut.push([i>=0?s:this._xCut,n])):(i<=0&&this._lineIn.push([s,n]),i>=0&&this._lineOut.push([s,n]))}_lineTo(s,n,i){this._closed?(this._addPolyVertex(this._lineIn,i<=0?s:this._xCut,n),this._addPolyVertex(this._lineOut,i>=0?s:this._xCut,n)):i<0?(this._prevSide===0&&this._pushLineOut(),this._lineIn.push([s,n])):i>0?(this._prevSide===0&&this._pushLineIn(),this._lineOut.push([s,n])):this._prevSide<0?(this._lineIn.push([s,n]),this._lineOut.push([s,n])):this._prevSide>0&&(this._lineOut.push([s,n]),this._lineIn.push([s,n]))}_addPolyVertex(s,n,i){const e=s.length;e>1&&s[e-1][0]===n&&s[e-2][0]===n?s[e-1][1]=i:s.push([n,i])}_checkClosingPt(s){const n=s.length;n>3&&s[0][0]===this._xCut&&s[n-2][0]===this._xCut&&s[1][0]===this._xCut&&(s[0][1]=s[n-2][1],s.pop())}_side(s){return s<this._xCut?-1:s>this._xCut?1:0}_intersect(s,n){const i=(this._xCut-s[0])/(n[0]-s[0]);return s[1]+i*(n[1]-s[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}export{Z as a,ss as p};