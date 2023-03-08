import{U as G}from"./request-d3e98716.js";import{a as q}from"./Error-653283ae.js";import{f as re,j as H}from"./promiseUtils-6684e352.js";import{o as ne}from"./_commonjsHelpers-a430e9ea.js";import{d as V}from"./cast-7928d7aa.js";import{c as ie}from"./imageutils-b39249d8.js";import{f as ae}from"./mathUtils-2519596a.js";import{p as se,b as z,r as $,t as j,c as oe}from"./cimAnalyzer-721530a4.js";import{r as ue,e as ce}from"./rasterizingUtils-133923fb.js";import{a as le}from"./utils-c81a5c52.js";var N,X={exports:{}};N=function(){return function(o){var r={};function e(i){if(r[i])return r[i].exports;var a=r[i]={exports:{},id:i,loaded:!1};return o[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}return e.m=o,e.c=r,e.p="",e(0)}([function(o,r,e){Object.defineProperty(r,"__esModule",{value:!0}),r.isNotPNG=c,r.isNotAPNG=u,r.default=s;var i=l(e(1)),a=e(2);function l(m){return m&&m.__esModule?m:{default:m}}var h=new Error("Not a PNG"),n=new Error("Not an animated PNG");function c(m){return m===h}function u(m){return m===n}var t=new Uint8Array([137,80,78,71,13,10,26,10]);function s(m){var g=new Uint8Array(m);if(Array.prototype.some.call(t,function(P,A){return P!==g[A]}))return h;var _=!1;if(f(g,function(P){return!(_=P==="acTL")}),!_)return n;var w=[],b=[],C=null,y=null,I=0,B=new a.APNG;if(f(g,function(P,A,x,E){var M=new DataView(A.buffer);switch(P){case"IHDR":C=A.subarray(x+8,x+8+E),B.width=M.getUint32(x+8),B.height=M.getUint32(x+12);break;case"acTL":B.numPlays=M.getUint32(x+8+4);break;case"fcTL":y&&(B.frames.push(y),I++),(y=new a.Frame).width=M.getUint32(x+8+4),y.height=M.getUint32(x+8+8),y.left=M.getUint32(x+8+12),y.top=M.getUint32(x+8+16);var te=M.getUint16(x+8+20),D=M.getUint16(x+8+22);D===0&&(D=100),y.delay=1e3*te/D,y.delay<=10&&(y.delay=100),B.playTime+=y.delay,y.disposeOp=M.getUint8(x+8+24),y.blendOp=M.getUint8(x+8+25),y.dataParts=[],I===0&&y.disposeOp===2&&(y.disposeOp=1);break;case"fdAT":y&&y.dataParts.push(A.subarray(x+8+4,x+8+E));break;case"IDAT":y&&y.dataParts.push(A.subarray(x+8,x+8+E));break;case"IEND":b.push(v(A,x,12+E));break;default:w.push(v(A,x,12+E))}}),y&&B.frames.push(y),B.frames.length==0)return n;var Z=new Blob(w),ee=new Blob(b);return B.frames.forEach(function(P){var A=[];A.push(t),C.set(F(P.width),0),C.set(F(P.height),4),A.push(U("IHDR",C)),A.push(Z),P.dataParts.forEach(function(x){return A.push(U("IDAT",x))}),A.push(ee),P.imageData=new Blob(A,{type:"image/png"}),delete P.dataParts,A=null}),B}function f(m,g){var _=new DataView(m.buffer),w=8,b=void 0,C=void 0,y=void 0;do C=_.getUint32(w),y=g(b=d(m,w+4,4),m,w,C),w+=12+C;while(y!==!1&&b!="IEND"&&w<m.length)}function d(m,g,_){var w=Array.prototype.slice.call(m.subarray(g,g+_));return String.fromCharCode.apply(String,w)}function p(m){for(var g=new Uint8Array(m.length),_=0;_<m.length;_++)g[_]=m.charCodeAt(_);return g}function v(m,g,_){var w=new Uint8Array(_);return w.set(m.subarray(g,g+_)),w}var U=function(m,g){var _=m.length+g.length,w=new Uint8Array(_+8),b=new DataView(w.buffer);b.setUint32(0,g.length),w.set(p(m),4),w.set(g,8);var C=(0,i.default)(w,4,_);return b.setUint32(_+4,C),w},F=function(m){return new Uint8Array([m>>>24&255,m>>>16&255,m>>>8&255,255&m])}},function(o,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(h){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,c=-1,u=n,t=n+(arguments.length>2&&arguments[2]!==void 0?arguments[2]:h.length-n);u<t;u++)c=c>>>8^e[255&(c^h[u])];return-1^c};for(var e=new Uint32Array(256),i=0;i<256;i++){for(var a=i,l=0;l<8;l++)a=1&a?3988292384^a>>>1:a>>>1;e[i]=a}},function(o,r,e){Object.defineProperty(r,"__esModule",{value:!0}),r.Frame=r.APNG=void 0;var i=function(){function n(c,u){for(var t=0;t<u.length;t++){var s=u[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}return function(c,u,t){return u&&n(c.prototype,u),t&&n(c,t),c}}(),a=l(e(3));function l(n){return n&&n.__esModule?n:{default:n}}function h(n,c){if(!(n instanceof c))throw new TypeError("Cannot call a class as a function")}r.APNG=function(){function n(){h(this,n),this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[]}return i(n,[{key:"createImages",value:function(){return Promise.all(this.frames.map(function(c){return c.createImage()}))}},{key:"getPlayer",value:function(c){var u=this,t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return this.createImages().then(function(){return new a.default(u,c,t)})}}]),n}(),r.Frame=function(){function n(){h(this,n),this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.imageData=null,this.imageElement=null}return i(n,[{key:"createImage",value:function(){var c=this;return this.imageElement?Promise.resolve():new Promise(function(u,t){var s=URL.createObjectURL(c.imageData);c.imageElement=document.createElement("img"),c.imageElement.onload=function(){URL.revokeObjectURL(s),u()},c.imageElement.onerror=function(){URL.revokeObjectURL(s),c.imageElement=null,t(new Error("Image creation error"))},c.imageElement.src=s})}}]),n}()},function(o,r,e){Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function u(t,s){for(var f=0;f<s.length;f++){var d=s[f];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(t,d.key,d)}}return function(t,s,f){return s&&u(t.prototype,s),f&&u(t,f),t}}();function a(u){return u&&u.__esModule?u:{default:u}}function l(u,t){if(!(u instanceof t))throw new TypeError("Cannot call a class as a function")}function h(u,t){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||typeof t!="object"&&typeof t!="function"?u:t}function n(u,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);u.prototype=Object.create(t&&t.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(u,t):u.__proto__=t)}var c=function(u){function t(s,f,d){l(this,t);var p=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return p.playbackRate=1,p._currentFrameNumber=0,p._ended=!1,p._paused=!0,p._numPlays=0,p._apng=s,p.context=f,p.stop(),d&&p.play(),p}return n(t,u),i(t,[{key:"renderNextFrame",value:function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length,this._currentFrameNumber===this._apng.frames.length-1&&(this._numPlays++,this._apng.numPlays!==0&&this._numPlays>=this._apng.numPlays&&(this._ended=!0,this._paused=!0)),this._prevFrame&&this._prevFrame.disposeOp==1?this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&this._prevFrame.disposeOp==2&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top);var s=this.currentFrame;this._prevFrame=s,this._prevFrameData=null,s.disposeOp==2&&(this._prevFrameData=this.context.getImageData(s.left,s.top,s.width,s.height)),s.blendOp==0&&this.context.clearRect(s.left,s.top,s.width,s.height),this.context.drawImage(s.imageElement,s.left,s.top),this.emit("frame",this._currentFrameNumber),this._ended&&this.emit("end")}},{key:"play",value:function(){var s=this;this.emit("play"),this._ended&&this.stop(),this._paused=!1;var f=performance.now()+this.currentFrame.delay/this.playbackRate,d=function p(v){if(!s._ended&&!s._paused){if(v>=f){for(;v-f>=s._apng.playTime/s.playbackRate;)f+=s._apng.playTime/s.playbackRate,s._numPlays++;do s.renderNextFrame(),f+=s.currentFrame.delay/s.playbackRate;while(!s._ended&&v>f)}requestAnimationFrame(p)}};requestAnimationFrame(d)}},{key:"pause",value:function(){this._paused||(this.emit("pause"),this._paused=!0)}},{key:"stop",value:function(){this.emit("stop"),this._numPlays=0,this._ended=!1,this._paused=!0,this._currentFrameNumber=-1,this.context.clearRect(0,0,this._apng.width,this._apng.height),this.renderNextFrame()}},{key:"currentFrameNumber",get:function(){return this._currentFrameNumber}},{key:"currentFrame",get:function(){return this._apng.frames[this._currentFrameNumber]}},{key:"paused",get:function(){return this._paused}},{key:"ended",get:function(){return this._ended}}]),t}(a(e(4)).default);r.default=c},function(o,r){function e(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(n){return typeof n=="function"}function a(n){return typeof n=="number"}function l(n){return typeof n=="object"&&n!==null}function h(n){return n===void 0}o.exports=e,e.EventEmitter=e,e.prototype._events=void 0,e.prototype._maxListeners=void 0,e.defaultMaxListeners=10,e.prototype.setMaxListeners=function(n){if(!a(n)||n<0||isNaN(n))throw TypeError("n must be a positive number");return this._maxListeners=n,this},e.prototype.emit=function(n){var c,u,t,s,f,d;if(this._events||(this._events={}),n==="error"&&(!this._events.error||l(this._events.error)&&!this._events.error.length)){if((c=arguments[1])instanceof Error)throw c;var p=new Error('Uncaught, unspecified "error" event. ('+c+")");throw p.context=c,p}if(h(u=this._events[n]))return!1;if(i(u))switch(arguments.length){case 1:u.call(this);break;case 2:u.call(this,arguments[1]);break;case 3:u.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),u.apply(this,s)}else if(l(u))for(s=Array.prototype.slice.call(arguments,1),t=(d=u.slice()).length,f=0;f<t;f++)d[f].apply(this,s);return!0},e.prototype.addListener=function(n,c){var u;if(!i(c))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",n,i(c.listener)?c.listener:c),this._events[n]?l(this._events[n])?this._events[n].push(c):this._events[n]=[this._events[n],c]:this._events[n]=c,l(this._events[n])&&!this._events[n].warned&&(u=h(this._maxListeners)?e.defaultMaxListeners:this._maxListeners)&&u>0&&this._events[n].length>u&&(this._events[n].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[n].length),typeof console.trace=="function"&&console.trace()),this},e.prototype.on=e.prototype.addListener,e.prototype.once=function(n,c){if(!i(c))throw TypeError("listener must be a function");var u=!1;function t(){this.removeListener(n,t),u||(u=!0,c.apply(this,arguments))}return t.listener=c,this.on(n,t),this},e.prototype.removeListener=function(n,c){var u,t,s,f;if(!i(c))throw TypeError("listener must be a function");if(!this._events||!this._events[n])return this;if(s=(u=this._events[n]).length,t=-1,u===c||i(u.listener)&&u.listener===c)delete this._events[n],this._events.removeListener&&this.emit("removeListener",n,c);else if(l(u)){for(f=s;f-- >0;)if(u[f]===c||u[f].listener&&u[f].listener===c){t=f;break}if(t<0)return this;u.length===1?(u.length=0,delete this._events[n]):u.splice(t,1),this._events.removeListener&&this.emit("removeListener",n,c)}return this},e.prototype.removeAllListeners=function(n){var c,u;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[n]&&delete this._events[n],this;if(arguments.length===0){for(c in this._events)c!=="removeListener"&&this.removeAllListeners(c);return this.removeAllListeners("removeListener"),this._events={},this}if(i(u=this._events[n]))this.removeListener(n,u);else if(u)for(;u.length;)this.removeListener(n,u[u.length-1]);return delete this._events[n],this},e.prototype.listeners=function(n){return this._events&&this._events[n]?i(this._events[n])?[this._events[n]]:this._events[n].slice():[]},e.prototype.listenerCount=function(n){if(this._events){var c=this._events[n];if(i(c))return 1;if(c)return c.length}return 0},e.listenerCount=function(n,c){return n.listenerCount(c)}}])},X.exports=N();const he=ne(X.exports);async function fe(o,r){const e=he(o);if(e instanceof Error)throw e;await e.createImages(),re(r);const{frames:i,width:a,height:l}=e,h=document.createElement("canvas");h.width=a,h.height=l;const n=h.getContext("2d"),c=[],u=[];for(const t of i){u.push(V(t.delay||100));const s=t.imageElement;t.blendOp===0?n.globalCompositeOperation="copy":n.globalCompositeOperation="source-over";const f=t.disposeOp===2&&n.getImageData(t.left,t.top,t.width,t.height);n.drawImage(s,t.left,t.top);const d=n.getImageData(0,0,a,l);c.push(d),t.disposeOp===0||(t.disposeOp===1?n.clearRect(t.left,t.top,t.width,t.height):t.disposeOp===2&&n.putImageData(f,t.left,t.top))}return{frameDurations:u,getFrame:t=>c[t],width:a,height:l}}const de=[137,80,78,71,13,10,26,10];function pe(o){const r=new Uint8Array(o);return!de.some((e,i)=>e!==r[i])}function me(o){if(!pe(o))return!1;const r=new DataView(o),e=new Uint8Array(o);let i,a=8;do{const l=r.getUint32(a);if(i=String.fromCharCode.apply(String,Array.prototype.slice.call(e.subarray(a+4,a+8))),i==="acTL")return!0;a+=12+l}while(i!=="IEND"&&a<e.length);return!1}var L={},Y={},O={};Object.defineProperty(O,"__esModule",{value:!0}),O.loop=O.conditional=O.parse=void 0;var ge=function o(r,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(e))e.forEach(function(h){return o(r,h,i,a)});else if(typeof e=="function")e(r,i,a,o);else{var l=Object.keys(e)[0];Array.isArray(e[l])?(a[l]={},o(r,e[l],i,a[l])):a[l]=e[l](r,i,a,o)}return i};O.parse=ge;var ye=function(o,r){return function(e,i,a,l){r(e,i,a)&&l(e,o,i,a)}};O.conditional=ye;var ve=function(o,r){return function(e,i,a,l){for(var h=[],n=e.pos;r(e,i,a);){var c={};if(l(e,o,i,c),e.pos===n)break;n=e.pos,h.push(c)}return h}};O.loop=ve;var k={};Object.defineProperty(k,"__esModule",{value:!0}),k.readBits=k.readArray=k.readUnsigned=k.readString=k.peekBytes=k.readBytes=k.peekByte=k.readByte=k.buildStream=void 0;var _e=function(o){return{data:o,pos:0}};k.buildStream=_e;var J=function(){return function(o){return o.data[o.pos++]}};k.readByte=J;var we=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(r){return r.data[r.pos+o]}};k.peekByte=we;var T=function(o){return function(r){return r.data.subarray(r.pos,r.pos+=o)}};k.readBytes=T;var be=function(o){return function(r){return r.data.subarray(r.pos,r.pos+o)}};k.peekBytes=be;var xe=function(o){return function(r){return Array.from(T(o)(r)).map(function(e){return String.fromCharCode(e)}).join("")}};k.readString=xe;var ke=function(o){return function(r){var e=T(2)(r);return o?(e[1]<<8)+e[0]:(e[0]<<8)+e[1]}};k.readUnsigned=ke;var Ue=function(o,r){return function(e,i,a){for(var l=typeof r=="function"?r(e,i,a):r,h=T(o),n=new Array(l),c=0;c<l;c++)n[c]=h(e);return n}};k.readArray=Ue;var Ae=function(o,r,e){for(var i=0,a=0;a<e;a++)i+=o[r+a]&&Math.pow(2,e-a-1);return i},Fe=function(o){return function(r){for(var e=J()(r),i=new Array(8),a=0;a<8;a++)i[7-a]=!!(e&1<<a);return Object.keys(o).reduce(function(l,h){var n=o[h];return n.length?l[h]=Ae(i,n.index,n.length):l[h]=i[n.index],l},{})}};k.readBits=Fe,function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=O,e=k,i={blocks:function(t){for(var s=0,f=[],d=t.data.length,p=0,v=(0,e.readByte)()(t);v!==s&&v;v=(0,e.readByte)()(t)){if(t.pos+v>=d){var U=d-t.pos;f.push((0,e.readBytes)(U)(t)),p+=U;break}f.push((0,e.readBytes)(v)(t)),p+=v}for(var F=new Uint8Array(p),m=0,g=0;g<f.length;g++)F.set(f[g],m),m+=f[g].length;return F}},a=(0,r.conditional)({gce:[{codes:(0,e.readBytes)(2)},{byteSize:(0,e.readByte)()},{extras:(0,e.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,e.readUnsigned)(!0)},{transparentColorIndex:(0,e.readByte)()},{terminator:(0,e.readByte)()}]},function(t){var s=(0,e.peekBytes)(2)(t);return s[0]===33&&s[1]===249}),l=(0,r.conditional)({image:[{code:(0,e.readByte)()},{descriptor:[{left:(0,e.readUnsigned)(!0)},{top:(0,e.readUnsigned)(!0)},{width:(0,e.readUnsigned)(!0)},{height:(0,e.readUnsigned)(!0)},{lct:(0,e.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,r.conditional)({lct:(0,e.readArray)(3,function(t,s,f){return Math.pow(2,f.descriptor.lct.size+1)})},function(t,s,f){return f.descriptor.lct.exists}),{data:[{minCodeSize:(0,e.readByte)()},i]}]},function(t){return(0,e.peekByte)()(t)===44}),h=(0,r.conditional)({text:[{codes:(0,e.readBytes)(2)},{blockSize:(0,e.readByte)()},{preData:function(t,s,f){return(0,e.readBytes)(f.text.blockSize)(t)}},i]},function(t){var s=(0,e.peekBytes)(2)(t);return s[0]===33&&s[1]===1}),n=(0,r.conditional)({application:[{codes:(0,e.readBytes)(2)},{blockSize:(0,e.readByte)()},{id:function(t,s,f){return(0,e.readString)(f.blockSize)(t)}},i]},function(t){var s=(0,e.peekBytes)(2)(t);return s[0]===33&&s[1]===255}),c=(0,r.conditional)({comment:[{codes:(0,e.readBytes)(2)},i]},function(t){var s=(0,e.peekBytes)(2)(t);return s[0]===33&&s[1]===254}),u=[{header:[{signature:(0,e.readString)(3)},{version:(0,e.readString)(3)}]},{lsd:[{width:(0,e.readUnsigned)(!0)},{height:(0,e.readUnsigned)(!0)},{gct:(0,e.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,e.readByte)()},{pixelAspectRatio:(0,e.readByte)()}]},(0,r.conditional)({gct:(0,e.readArray)(3,function(t,s){return Math.pow(2,s.lsd.gct.size+1)})},function(t,s){return s.lsd.gct.exists}),{frames:(0,r.loop)([a,n,c,l,h],function(t){var s=(0,e.peekByte)()(t);return s===33||s===44})}];o.default=u}(Y);var R={};Object.defineProperty(R,"__esModule",{value:!0}),R.deinterlace=void 0;var Ce=function(o,r){for(var e=new Array(o.length),i=o.length/r,a=function(t,s){var f=o.slice(s*r,(s+1)*r);e.splice.apply(e,[t*r,r].concat(f))},l=[0,4,2,1],h=[8,8,4,2],n=0,c=0;c<4;c++)for(var u=l[c];u<i;u+=h[c])a(u,n),n++;return e};R.deinterlace=Ce;var S={};Object.defineProperty(S,"__esModule",{value:!0}),S.lzw=void 0;var Pe=function(o,r,e){var i,a,l,h,n,c,u,t,s,f,d,p,v,U,F,m,g=4096,_=-1,w=e,b=new Array(e),C=new Array(g),y=new Array(g),I=new Array(g+1);for(n=(a=1<<(f=o))+1,i=a+2,u=_,l=(1<<(h=f+1))-1,t=0;t<a;t++)C[t]=0,y[t]=t;for(d=p=v=U=F=m=0,s=0;s<w;){if(U===0){if(p<h){d+=r[m]<<p,p+=8,m++;continue}if(t=d&l,d>>=h,p-=h,t>i||t==n)break;if(t==a){l=(1<<(h=f+1))-1,i=a+2,u=_;continue}if(u==_){I[U++]=y[t],u=t,v=t;continue}for(c=t,t==i&&(I[U++]=v,t=u);t>a;)I[U++]=y[t],t=C[t];v=255&y[t],I[U++]=v,i<g&&(C[i]=u,y[i]=v,!(++i&l)&&i<g&&(h++,l+=i)),u=c}U--,b[F++]=I[U],s++}for(s=F;s<w;s++)b[s]=0;return b};S.lzw=Pe,Object.defineProperty(L,"__esModule",{value:!0});var K=L.decompressFrames=L.decompressFrame=Q=L.parseGIF=void 0,Me=Ee(Y),Be=O,Oe=k,Ie=R,Le=S;function Ee(o){return o&&o.__esModule?o:{default:o}}var ze=function(o){var r=new Uint8Array(o);return(0,Be.parse)((0,Oe.buildStream)(r),Me.default)},Q=L.parseGIF=ze,Re=function(o){for(var r=o.pixels.length,e=new Uint8ClampedArray(4*r),i=0;i<r;i++){var a=4*i,l=o.pixels[i],h=o.colorTable[l]||[0,0,0];e[a]=h[0],e[a+1]=h[1],e[a+2]=h[2],e[a+3]=l!==o.transparentIndex?255:0}return e},W=function(o,r,e){if(o.image){var i=o.image,a=i.descriptor.width*i.descriptor.height,l=(0,Le.lzw)(i.data.minCodeSize,i.data.blocks,a);i.descriptor.lct.interlaced&&(l=(0,Ie.deinterlace)(l,i.descriptor.width));var h={pixels:l,dims:{top:o.image.descriptor.top,left:o.image.descriptor.left,width:o.image.descriptor.width,height:o.image.descriptor.height}};return i.descriptor.lct&&i.descriptor.lct.exists?h.colorTable=i.lct:h.colorTable=r,o.gce&&(h.delay=10*(o.gce.delay||10),h.disposalType=o.gce.extras.disposal,o.gce.extras.transparentColorGiven&&(h.transparentIndex=o.gce.transparentColorIndex)),e&&(h.patch=Re(h)),h}console.warn("gif frame does not have associated image.")};L.decompressFrame=W;var Se=function(o,r){return o.frames.filter(function(e){return e.image}).map(function(e){return W(e,o.gct,r)})};async function Te(o,r){const e=Q(o),i=K(e,!0),{width:a,height:l}=e.lsd,h=document.createElement("canvas");h.width=a,h.height=l;const n=h.getContext("2d"),c=[],u=[];for(const t of i){u.push(V(t.delay||100));const s=new ImageData(t.patch,t.dims.width,t.dims.height),f=ie(s),d=t.disposalType===3&&n.getImageData(t.dims.left,t.dims.top,t.dims.width,t.dims.height);n.drawImage(f,t.dims.left,t.dims.top);const p=n.getImageData(0,0,a,l);c.push(p),t.disposalType===1||(t.disposalType===2?n.clearRect(t.dims.left,t.dims.top,t.dims.width,t.dims.height):t.disposalType===3&&n.putImageData(d,t.dims.left,t.dims.top))}return{frameDurations:u,getFrame:t=>c[t],width:a,height:l}}K=L.decompressFrames=Se;const De=[71,73,70];function $e(o){const r=new Uint8Array(o);return!De.some((e,i)=>e!==r[i])}function je(o){if(!$e(o))return!1;const r=new DataView(o),e=r.getUint8(10);let i=13+(128&e?3*2**(1+(7&e)):0),a=0,l=!1;for(;!l;){switch(r.getUint8(i++)){case 33:if(!h())return!1;break;case 44:n();break;case 59:l=!0;break;default:return!1}if(a>1)return!0}function h(){switch(r.getUint8(i++)){case 249:c();break;case 1:u();break;case 254:t();break;case 255:s();break;default:return!1}return!0}function n(){a++,i+=8;const d=r.getUint8(i++);i+=128&d?3*2**(1+(7&d)):0,i++,f()}function c(){i++,i+=4,f()}function u(){a++,i++,i+=12,f()}function t(){f()}function s(){i++,i+=8,i+=3,f()}function f(){let d;for(;d=r.getUint8(i++);)i+=d}return!1}class rt{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(r){return this._resourceMap.get(r)??null}async fetchResource(r,e){const i=this._resourceMap.get(r);if(i)return{width:i.width,height:i.height};const a=this._inFlightResourceMap.get(r);if(a)return a.then(h=>({width:h.width,height:h.height}));const l=Ge(r,e);return this._inFlightResourceMap.set(r,a),l.then(h=>(this._inFlightResourceMap.delete(r),this._resourceMap.set(r,h),{width:h.width,height:h.height}),()=>({width:0,height:0}))}deleteResource(r){this._inFlightResourceMap.delete(r),this._resourceMap.delete(r)}}async function Ne(o,r){const e=window.URL.createObjectURL(o);try{const{data:i}=await G(e,{...r,responseType:"image"});return i}catch(i){throw H(i)?i:new q("mapview-invalid-resource",`Could not fetch requested resource at ${e}`)}finally{window.URL.revokeObjectURL(e)}}async function Ge(o,r){const{arrayBuffer:e,mediaType:i}=await qe(o,r),a=i==="image/png";return i==="image/gif"&&je(e)?Te(e):a&&me(e)?fe(e,r):Ne(new Blob([e],{type:i}),r)}async function qe(o,r){let e;const i=";base64,";if(o.includes(i)){const a=o.indexOf(i),l=o.indexOf(i)+i.length,h=o.substring(l),n=atob(h),c=new Uint8Array(n.length);for(let u=0;u<n.length;u++)c[u]=n.charCodeAt(u);e={arrayBuffer:c.buffer,mediaType:o.substring(0,a).replace("data:","")}}else try{const a=await G(o,{responseType:"array-buffer",...r});e={arrayBuffer:a.data,mediaType:a.getHeader("Content-Type")}}catch(a){if(!H(a))throw new q("mapview-invalid-resource",`Could not fetch requested resource at ${o}`)}return e}const He=512;class nt{constructor(r){this._resourceManager=r}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(r,e,i){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),r.type==="simple-fill"||r.type==="esriSFS"){const[d,p,v]=ue(this._rasterizationCanvas,r.style,e);return{size:[p,v],image:new Uint32Array(d.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:ae(Math.ceil(e))}}if(r.type==="simple-line"||r.type==="esriSLS"||r.type==="line"&&r.dashTemplate){let d,p;if(r.type==="simple-line"||r.type==="esriSLS")switch(d=se(r.style,r.cap),r.cap){case"butt":p="Butt";break;case"square":p="Square";break;default:p="Round"}else d=r.dashTemplate,p=r.cim.capStyle;const[v,U,F]=ce(d,p);return{size:[U,F],image:new Uint32Array(v.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let a,l,h,n=1;if(r.type==="simple-marker"||r.type==="esriSMS"||r.type==="line-marker"?(a=z.fromSimpleMarker(r),h=$(a)):r.cim&&r.cim.type==="CIMHatchFill"?(a=z.fromCIMHatchFill(r.cim,e),l=new j(a.frame.xmin,-a.frame.ymax,a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin),n=e):r.cim.markerPlacement&&r.cim.markerPlacement.type==="CIMMarkerPlacementInsidePolygon"?(a=z.fromCIMInsidePolygon(r.cim),l=new j(a.frame.xmin,-a.frame.ymax,a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin)):(a=r.cim,h=$(a)),h&&!i){const[d,p,v]=oe(h);return d?{size:[p,v],image:new Uint32Array(d.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:n}:null}const[c,u,t,s,f]=z.rasterize(this._rasterizationCanvas,a,l,this._resourceManager,!i);return c?{size:[u,t],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:s,anchorY:f}:null}rasterizeImageResource(r,e,i,a){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=r,this._rasterizationCanvas.height=e;const l=this._rasterizationCanvas.getContext("2d");i instanceof ImageData?l.putImageData(i,0,0):(i.setAttribute("width",`${r}px`),i.setAttribute("height",`${e}px`),l.drawImage(i,0,0,r,e));const h=l.getImageData(0,0,r,e),n=new Uint8Array(h.data);if(a){for(const d of a)if(d&&d.oldColor&&d.oldColor.length===4&&d.newColor&&d.newColor.length===4){const[p,v,U,F]=d.oldColor,[m,g,_,w]=d.newColor;if(p===m&&v===g&&U===_&&F===w)continue;for(let b=0;b<n.length;b+=4)p===n[b]&&v===n[b+1]&&U===n[b+2]&&F===n[b+3]&&(n[b]=m,n[b+1]=g,n[b+2]=_,n[b+3]=w)}}let c;for(let d=0;d<n.length;d+=4)c=n[d+3]/255,n[d]=n[d]*c,n[d+1]=n[d+1]*c,n[d+2]=n[d+2]*c;let u=n,t=r,s=e;const f=He;if(t>=f||s>=f){const d=t/s;d>1?(t=f,s=Math.round(f/d)):(s=f,t=Math.round(f*d)),u=new Uint8Array(4*t*s);const p=new Uint8ClampedArray(u.buffer);le(n,r,e,p,t,s,!1)}return{size:[t,s],image:new Uint32Array(u.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}export{nt as c,rt as o};