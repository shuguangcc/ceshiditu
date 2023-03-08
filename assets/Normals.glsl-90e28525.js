import{n as o}from"./compilerUtils-034cacb8.js";import{n}from"./ShaderBuilder-93e8045e.js";function s(a,i){const e=a.fragment;switch(e.code.add(n`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),i.doubleSidedMode){case r.None:e.code.add(n`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case r.View:e.code.add(n`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case r.WindingOrder:e.code.add(n`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:o(i.doubleSidedMode);case r.COUNT:}}var r;(function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT"})(r||(r={}));export{s as e,r as i};
