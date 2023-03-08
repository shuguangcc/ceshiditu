import{t as d}from"./AlphaCutoff-96178e0d.js";import{n as o}from"./ShaderBuilder-93e8045e.js";function f(r){r.fragment.code.add(o`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.float(d)}) { discard; } }
  `)}export{f as d};
