import{r as f,t as Q,i as I}from"./typedArrayUtil-a8b5b3e9.js";import{d,l as w,i as p}from"./screenUtils-410d12c0.js";import{s as C,r as h,_ as v,e as m,P as R,g as U,u as P}from"./vec3-a020a6f6.js";import{n as c}from"./vec3f64-2f9cef06.js";import{p as H}from"./projection-d7b57a6c.js";import{q as E,p as T,_ as J}from"./plane-45609588.js";import{d as N,t as M,j as V}from"./sphere-4f5e644f.js";import{d as q,f as X}from"./elevationInfoUtils-427916a5.js";import{bx as S,bi as K,x as O,t as B,ak as F}from"./index-455b69b8.js";import{j as k}from"./objectResourceUtils-ef6e3cdf.js";import{L as y}from"./Texture-bbae5d9d.js";function W(n,e){return x(n,()=>e)}function dn(n){return x(n,e=>e.plane)}function x(n,e){const r=c(),D=c();let A=!1;return t=>{const s=e(t);if(t.action==="start"){const u=d(t.screenStart,w(M.get())),a=S(n.state.camera,u,z);f(a)&&(A=E(s,a,r))}if(!A)return null;const o=d(t.screenEnd,w(M.get())),i=S(n.state.camera,o,z);return Q(i)?null:E(s,i,D)?{...t,renderStart:r,renderEnd:D,plane:s,ray:i}:null}}function Y(n,e,r,D=null,A=null){let t=null;return s=>{if(s.action==="start"&&(t=n.sceneIntersectionHelper.intersectElevationFromScreen(p(s.screenStart.x,s.screenStart.y),e,r,A),f(t)&&f(D)&&!H(t,t,D))||Q(t))return null;const o=n.sceneIntersectionHelper.intersectElevationFromScreen(p(s.screenEnd.x,s.screenEnd.y),e,r,A);return f(o)?f(D)&&!H(o,o,D)?null:{...s,mapStart:t,mapEnd:o}:null}}function j(n,e,r,D=null,A=null){return Y(n,r,q(e,n,r),D,A)}function Z(n,e,r,D=null,A=null){return j(n,r,X(e),D,A)}function pn(n,e,r,D){const A=e.toMap(n.screenStart,{include:[r]});return f(A)?Z(e,r,A,D):null}function $(n,e){const r=en,D=rn,A=T();n.renderCoordsHelper.worldUpAtPosition(e,r);const t=v(A,r,m(D,e,n.state.camera.eye));return v(t,t,r),J(e,t,A)}function mn(n,e,r){let D=null;const A=new K;return A.next(W(n,$(n,e))).next(_(n,e)).next(nn(n,r)).next(t=>{t.mapEnd.x=t.mapStart.x,t.mapEnd.y=t.mapStart.y,D=t}),t=>(D=null,A.execute(t),D)}function _(n,e){const r=c(),D=C(e);n.renderCoordsHelper.worldUpAtPosition(e,r);const A=c(),t=c(),s=o=>(m(o,o,e),V(r,o,o),n.viewingMode==="global"&&C(o)*Math.sign(R(r,o))<.001-D&&m(o,U(o,r,.001),e),P(o,o,e),o);return o=>(o.renderStart=s(h(A,o.renderStart)),o.renderEnd=s(h(t,o.renderEnd)),o)}function nn(n,e){const r=n.renderCoordsHelper;return D=>{const A=r.fromRenderCoords(D.renderStart,e),t=r.fromRenderCoords(D.renderEnd,e);return f(A)&&f(t)?{...D,mapStart:A,mapEnd:t}:null}}var g;function Qn(n){let e=null;return r=>{switch(r.action){case"start":e=n.disableDisplay();break;case"end":case"cancel":f(e)&&(e.remove(),e=null)}return r}}function wn(n,e=null){const r=O(n.state.viewingMode);r.options.selectionMode=!0,r.options.store=B.MIN,r.options.hud=!1;const D=p(),A={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},t=c(),s=I(e,n.spatialReference),o=u=>{n.map.ground&&n.map.ground.opacity<1?A.exclude.add(k):A.exclude.delete(k),n.sceneIntersectionHelper.intersectIntersectorScreen(d(u,D),r,A);const a=r.results.min;let l;if(a.getIntersectionPoint(t))l=a.intersector===F.TERRAIN?g.GROUND:g.OTHER;else{if(!r.results.ground.getIntersectionPoint(t))return null;l=g.GROUND}return{location:n.renderCoordsHelper.fromRenderCoords(t,s),surfaceType:l}};let i;return u=>{if(u.action==="start"){const l=o(u.screenStart);i=f(l)?l.location:null}if(Q(i))return null;const a=o(u.screenEnd);return f(a)&&f(a.location)?{...u,mapStart:i,mapEnd:a.location,surfaceType:a.surfaceType}:null}}(function(n){n[n.GROUND=0]="GROUND",n[n.OTHER=1]="OTHER"})(g||(g={}));const en=c(),rn=c(),z=N(),L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAnFBMVEUAAAD/gAD/gAD/cAD/gAD/eAD/gAD/eQD/gAD/egD/gAD/ewD/gAD/fAD/gAD/fAD/gAD/fAD/fQD/fQD/fQD/fQD/fQD/fgD/jR7/mjn/mjf/p1H/plH/smf/sWb/vHr/u3n/xYz/xIv/zZz/zJv/zJr/1Kv/1Kr/06r/06n/27n/27f/4cX/4cT/59D/7dr/8uX/9u7/+/f////u2EN0AAAAM3RSTlMACBAQICAoKDAwODhAQEhIUFBYYGhweICIkJCXmJ+gp6ivsLe4uL+/wMDHx8/P19/n7/cWvjXwAAACeUlEQVR42tWX3XqiMBCGY2pbtbrUnzhhdak/lHWliJD7v7fdJ+KG5AMhh30P8zCTmS+TycDaeBoHi5Wgf4jVYvbKmRfPgSAHMX9mPRnM1tSIGHM/c2QddLp4c8wxCvYIvqROBPfbHlm/sRYC6smMNTKn3sxZAyvyYNW1v38MM/IkcPQnZHPMLtciz9P9hhqwzoLD+cnfpTIUaYinyZlBkE2YKZcMXCyN/YhsPkuFlMfWJLiwo89VMxfpJDForMCwuG+Zx7ttGO2S/w4LJ42ZURDty5M0a4dqsZAQAihQfXqWdlhnpcmdEPAI0tv2EbnsbsKmdgi6/1GN7T1XJLx5sF0P9SWABMC+co5JBE4Ge/1NTM3EGIJgjFONXCdAbeQYwhN7pRrRV20LJNIhWOczdu+xPFzIBiQ62iIsyIOTvlZUY+HXySLQaMUEeSC1CPYxENIlwk+q8e0clFAIfiKG+qpaIvod4wfU8sqvkDLda+xCCqgDaAk7uyeNqD+feFlfGCcg3Hzsk+xS7Nz1Aq4CcauhhMc0uxaqIgcFsF0J+1WQyoCN7Y9ezeCVH5LhSxmyRvsihKbK1m7LafpSpkpj6yJgtsiVBh6AX5UyCVmMbrNpcwj5/h6DPN79JjAiQAhXVeN6SZI0q5bQnn4wBiHEqpUybp1ZJzWxStVCHhKhAhVLp/Emh6trHpGLaB6yZHk7wu3Z+ChOxhwUNEmYYjpUvqJDksSHraQmJm2DdqQK6sGUObybYtpSN+8Phm3pN2xjDH33R6b0CKxAZNLvl8foD3BBnSw5e8RI+G2P8GD9wHw6YN3wkfA0R4Zz8CGCIfOCv8zM738walXuLw6nXBvPr8wvAAAAAElFTkSuQmCC",G="data:image/png;base64,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",b={mipmap:!0,preMultiplyAlpha:!0,width:64,height:64};function Cn(n){return n.fromData(L,()=>new y(L,b))}function hn(n){return n.fromData(G,()=>new y(G,b))}export{wn as B,W as C,nn as F,mn as G,j as N,Z as P,dn as T,pn as h,hn as i,Cn as o,Qn as z};