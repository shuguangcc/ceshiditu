import{r as e}from"./vec4f64-e407da96.js";import{o as t}from"./ScreenSpacePass-00f8c8a4.js";import{e as n}from"./Float4PassUniform-3a47b7b3.js";import{t as l,o as m,n as u}from"./ShaderBuilder-93e8045e.js";import{f as a}from"./Texture2DPassUniform-6e8ae673.js";class s extends l{constructor(){super(...arguments),this.color=e(1,1,1,1)}}function i(){const o=new m;return o.include(t),o.fragment.uniforms.add([new a("tex",r=>r.texture),new n("uColor",r=>r.color)]),o.fragment.code.add(u`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),o}const g=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:s,build:i},Symbol.toStringTag,{value:"Module"}));export{g as d,s as i,i as l};
