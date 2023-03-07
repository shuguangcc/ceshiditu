import{e as c,h as A,bs as R,aS as E,aV as D,M as C,aT as O,g as I,i as S,E as $}from"./index-73a6a617.js";import{o as L}from"./FeatureContainer-da4a075a.js";import{r as N}from"./vec3f32-ad1dc57f.js";import{r as T}from"./Container-066a9dfb.js";import{e as w}from"./color-acd28174.js";import{E as p,f as F}from"./VertexArrayObject-fdf4ec2e.js";import{R as m,E as P,C as x,F as g,I as U}from"./enums-64ab819c.js";const V=Math.PI/180,W=4;class q extends T{constructor(r){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=c(),this._localOrigin={x:0,y:0},this._getBounds=r}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=A(this._program)}doRender(r){const{context:t}=r,n=this._getBounds();if(n.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(r),this._updateBufferData(t,n),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const h=this._program;t.bindVAO(this._vao),t.useProgram(h),h.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(P.LINES,8*n.length,x.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:c()}}_createShaderProgram(r){if(this._program)return;const t=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,n=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=r.programCache.acquire(t,n,v().attributes)}_updateMatricesAndLocalOrigin(r){const{state:t}=r,{displayMat3:n,size:h,resolution:u,pixelRatio:a,rotation:o,viewpoint:e}=t,l=V*o,{x:i,y}=e.targetGeometry,b=R(i,t.spatialReference);this._localOrigin.x=b,this._localOrigin.y=y;const _=a*h[0],f=a*h[1],B=u*_,M=u*f,d=E(this._dvsMat3);D(d,d,n),C(d,d,O(_/2,f/2)),I(d,d,N(h[0]/B,-f/M,1)),S(d,d,-l)}_updateBufferData(r,t){const{x:n,y:h}=this._localOrigin,u=2*W*t.length,a=new Float32Array(u),o=new Uint32Array(8*t.length);let e=0,l=0;for(const i of t)i&&(a[2*e+0]=i[0]-n,a[2*e+1]=i[1]-h,a[2*e+2]=i[0]-n,a[2*e+3]=i[3]-h,a[2*e+4]=i[2]-n,a[2*e+5]=i[3]-h,a[2*e+6]=i[2]-n,a[2*e+7]=i[1]-h,o[l+0]=e+0,o[l+1]=e+3,o[l+2]=e+3,o[l+3]=e+2,o[l+4]=e+2,o[l+5]=e+1,o[l+6]=e+1,o[l+7]=e+0,e+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=p.createVertex(r,g.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=p.createIndex(r,g.DYNAMIC_DRAW,o),!this._vao){const i=v();this._vao=new F(r,i.attributes,i.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const v=()=>w("bounds",{geometry:[{location:0,name:"a_position",count:2,type:x.FLOAT}]});let J=class extends L{constructor(s){super(s),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=$(this._boundsRenderer)}enableRenderingBounds(s){this._boundsRenderer=new q(s),this.requestRender()}get hasLabels(){return!1}onTileData(s,r){s.patch(r),this.contains(s)||this.addChild(s),this.requestRender()}onTileError(s){s.clear(),this.contains(s)||this.addChild(s)}_renderChildren(s,r){for(const t of this.children)t.isReady&&t.hasData&&(t.commit(s),s.context.setStencilFunction(U.EQUAL,t.stencilRef,255),t.getDisplayList().replay(s,t,r))}};export{J as n};
