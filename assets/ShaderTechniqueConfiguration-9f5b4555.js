let _=class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const s of t)e[s]=this[s];return e}};function u(o={}){return(t,e)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(e),o.constValue!=null)Object.defineProperty(t,e,{get:()=>o.constValue});else{const s=t._parameterNames.length-1,p=o.count||2,h=Math.ceil(Math.log2(p)),a=t._parameterBits??[0];let r=0;for(;a[r]+h>16;)r++,r>=a.length&&a.push(0);t._parameterBits=a;const n=a[r],m=(1<<h)-1<<n;a[r]+=h,Object.defineProperty(t,e,{get(){return this[s]},set(i){if(this[s]!==i&&(this[s]=i,this._keyDirty=!0,this._parameterBits[r]=this._parameterBits[r]&~m|+i<<n&m,typeof i!="number"&&typeof i!="boolean"))throw"Configuration value for "+e+" must be boolean or number, got "+typeof i}})}}}export{u as e,_ as t};
