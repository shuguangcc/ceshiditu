import{W as n,fk as u,s as m,r as d,fl as v,t as R,U as I}from"./index-ca9d4bb6.js";async function q(e,t={},a){await e.load(a);const r=n(e.itemUrl,"resources"),{start:o=1,num:c=10,sortOrder:i="asc",sortField:l="created"}=t,p={query:{start:o,num:c,sortOrder:i,sortField:l,token:e.apiKey},signal:u(a,"signal")},s=await e.portal.request(r,p);return{total:s.total,nextStart:s.nextStart,resources:s.resources.map(({created:w,size:g,resource:y})=>({created:new Date(w),size:g,resource:e.resourceFromPath(y)}))}}async function F(e,t,a,r){if(!e.hasPath())throw new m(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const o=e.portalItem;await o.load(r);const c=n(o.userItemUrl,t==="add"?"addResources":"updateResources"),[i,l]=f(e.path),p=await x(a),s=new FormData;return i&&i!=="."&&s.append("resourcesPrefix",i),d(r)&&r.compress&&s.append("compress","true"),s.append("fileName",l),s.append("file",p,l),s.append("f","json"),d(r)&&r.access&&s.append("access",r.access),await o.portal.request(c,{method:"post",body:s,signal:u(r,"signal")}),e}async function U(e,t,a){if(!t.hasPath())throw new m("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(a);const r=n(e.userItemUrl,"removeResources");await e.portal.request(r,{method:"post",query:{resource:t.path},signal:u(a,"signal")}),t.portalItem=null}async function O(e,t){await e.load(t);const a=n(e.userItemUrl,"removeResources");return e.portal.request(a,{method:"post",query:{deleteAll:!0},signal:u(t,"signal")})}function f(e){const t=e.lastIndexOf("/");return t===-1?[".",e]:[e.slice(0,t),e.slice(t+1)]}function h(e){const[t,a]=P(e),[r,o]=f(t);return[r,o,a]}function P(e){const t=v(e);return R(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function x(e){return e instanceof Blob?e:(await I(e.url,{responseType:"blob"})).data}function S(e,t){if(!e.hasPath())return null;const[a,,r]=h(e.path);return e.portalItem.resourceFromPath(n(a,t+r))}function $(e,t){if(!e.hasPath())return null;const[a,,r]=h(e.path);return e.portalItem.resourceFromPath(n(a,t+r))}export{F as addOrUpdateResource,x as contentToBlob,q as fetchResources,S as getSiblingOfSameType,$ as getSiblingOfSameTypeI,O as removeAllResources,U as removeResource,h as splitPrefixFileNameAndExtension};
