import"./string-cdf077e6.js";import{r as d}from"./vec3f64-2f9cef06.js";import{u}from"./aaBoundingBox-fc742a4e.js";function g(t,{isPrimitive:a,width:o,depth:c,height:i}){const r=a?10:1;if(o==null&&i==null&&c==null)return[r*t[0],r*t[1],r*t[2]];const n=d(o,c,i);let s;for(let e=0;e<3;e++){const l=n[e];if(l!=null){s=l/t[e];break}}for(let e=0;e<3;e++)n[e]==null&&(n[e]=t[e]*s);return n}const f=u(-.5,-.5,-.5,.5,.5,.5),m=u(-.5,-.5,0,.5,.5,1),h=u(-.5,-.5,0,.5,.5,.5);function k(t){switch(t){case"sphere":case"cube":case"diamond":return f;case"cylinder":case"cone":case"inverted-cone":return m;case"tetrahedron":return h;default:return}}const p=["butt","square","round"],q=[...p,"none"],x=["miter","bevel","round"];export{x as a,k as c,q as i,g as t,p as u};
