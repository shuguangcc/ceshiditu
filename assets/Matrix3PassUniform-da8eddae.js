import{i as d,a as g}from"./ShaderBuilder-93e8045e.js";var a;(function(o){o[o.Color=0]="Color",o[o.Depth=1]="Depth",o[o.Normal=2]="Normal",o[o.Shadow=3]="Shadow",o[o.ShadowHighlight=4]="ShadowHighlight",o[o.ShadowExludeHighlight=5]="ShadowExludeHighlight",o[o.Highlight=6]="Highlight",o[o.Alpha=7]="Alpha",o[o.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",o[o.COUNT=9]="COUNT"})(a||(a={}));class n extends d{constructor(t,i){super(t,"mat3",g.Pass,(l,r,e)=>l.setUniformMatrix3fv(t,i(r,e)))}}export{n as e,a as h};