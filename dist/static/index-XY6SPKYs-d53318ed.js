import{S as Ie,E as we,x as be,y as _e,r as x,z as U,F as J,G as Y,e as A,H as je,u as pe,v as L,j as i,L as K,I as F,J as Se,K as ke,M as fe,N as Ce,O as Re,Q as Ee,R as z,T as Te,U as W,V as De,W as ze,X as Le,l as Me,Y as Oe,Z as Ne,h as Ve,$ as Ae,a0 as Be,a1 as he,a2 as We,a3 as T,a4 as q,a5 as Q,a6 as $,a7 as N,a8 as me,a9 as $e,aa as H,ab as R,ac as te,k as V,ad as xe,B as Ge,ae as Ke,P as Fe,f as He,o as Ue,af as ne,ag as ae,ah as Je,ai as Ye,aj as re,ak as X,al as qe,am as Qe,an as Xe,ao as Ze,ap as et,aq as tt,ar as nt,as as at,at as M,au as rt,av as st,aw as ot,ax as it,ay as lt}from"./sanity-dc2588e0.js";function ye(e,n){var t=typeof n=="object";return new Promise(function(r,c){var u=new Ie({next:function(l){r(l),u.unsubscribe()},error:c,complete:function(){t?r(n.defaultValue):c(new we)}});e.subscribe(u)})}function ct(){return be(function(e,n){var t,r=!1;e.subscribe(_e(n,function(c){var u=t;t=c,r&&n.next([u,c]),r=!0}))})}const ut=[];function dt(e){const{children:n,flatIndex:t,index:r,params:c,payload:u,siblingIndex:l}=e,{navigate:o,navigateIntent:a,resolvePathFromState:s}=U(),d=J(),{panes:p,expand:P}=Me(),h=x.useMemo(()=>(d==null?void 0:d.panes)||ut,[d==null?void 0:d.panes]),y=x.useMemo(()=>p==null?void 0:p[p.length-2],[p]),g=r-1,j=x.useCallback(m=>{const f=h[g]||[],I=f[l],k=m(f,I),E=[...h.slice(0,g),k,...h.slice(g+1)];return{...d||{},panes:E}},[g,h,d,l]),v=x.useCallback(m=>{const f=j(m);return setTimeout(()=>o(f),0),f},[j,o]),w=x.useCallback(m=>{const f=j((I,k)=>[...I.slice(0,l),{...k,params:m},...I.slice(l+1)]);return s(f)},[j,s,l]),S=x.useCallback(m=>{v((f,I)=>[...f.slice(0,l),{...I,payload:m},...f.slice(l+1)])},[v,l]),b=x.useCallback(m=>{v((f,I)=>[...f.slice(0,l),{...I,params:m},...f.slice(l+1)])},[v,l]),_=x.useCallback(m=>{let{id:f,parentRefPath:I,type:k,template:E}=m;o({panes:[...h.slice(0,g+1),[{id:f,params:{template:E.id,parentRefPath:Oe(I),type:k},payload:E.params}]]})},[g,o,h]),C=x.useMemo(()=>({index:t,groupIndex:g,siblingIndex:l,payload:u,params:c,hasGroupSiblings:h[g]?h[g].length>1:!1,groupLength:h[g]?h[g].length:0,routerPanesState:h,ChildLink:Ne,BackLink:Ve,ReferenceChildLink:Ae,handleEditReference:_,ParameterizedLink:Be,replaceCurrent:function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};v(()=>[{id:m.id||"",payload:m.payload,params:m.params||{}}])},closeCurrent:()=>{v((m,f)=>m.length>1?m.filter(I=>I!==f):m)},closeCurrentAndAfter:function(){(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0)&&y&&P(y.element),o({panes:[...h.slice(0,g)]},{replace:!0})},duplicateCurrent:m=>{v((f,I)=>{const k={...I,payload:(m==null?void 0:m.payload)||I.payload,params:(m==null?void 0:m.params)||I.params};return[...f.slice(0,l),k,...f.slice(l)]})},setView:m=>{const f=he(c,"view");return b(m?{...f,view:m}:f)},setParams:b,setPayload:S,createPathWithParams:w,navigateIntent:a}),[t,g,l,u,c,h,_,b,S,w,a,v,y,o,P]);return i.jsx(We.Provider,{value:C,children:n})}class D extends Error{constructor(n){let{message:t,context:r,helpId:c,cause:u}=n;super(t),this.context=r,this.helpId=c,this.cause=u}}const se=new WeakMap;function B(e){const n=se.get(e);if(n)return n;const t=ot();return se.set(e,t),t}const oe=new WeakMap;function ge(e,n){const t=oe.get(e)||new Map;if(t){const u=t.get(n);if(u)return u}const r=e[n];if(typeof r!="function")throw new Error("Expected property `".concat(n,"` to be a function but got ").concat(typeof r," instead."));const c=r.bind(e);return t.set(n,c),oe.set(e,t),c}const pt=e=>!!e&&typeof(e==null?void 0:e.then)=="function",ft=e=>Y(e)?typeof e.serialize=="function":!1,ht=e=>(n,t,r)=>{try{return e(n,t,r)}catch(c){throw c instanceof D?c:new D({message:typeof(c==null?void 0:c.message)=="string"?c.message:"",context:t,cause:c})}},mt=e=>function(){return e(...arguments).pipe(it(1),lt())};function ve(e){const n=ht(mt(e((t,r,c)=>{if(!t)throw new D({message:"Pane returned no child",context:r,helpId:"structure-item-returned-no-child"});return pt(t)||nt(t)?at(t).pipe(X(u=>n(u,r,c))):ft(t)?n(t.serialize(r),r,c):typeof t=="function"?n(t(r.id,r),r,c):M(t)})));return n}async function xt(e){const n=new Map,r=ve(a=>(s,d,p)=>{const P=s&&"".concat(B(s),"-").concat(d.path.join("__")),h=P&&n.get(P);if(h)return h;const y=a(s,d,p);return P&&n.set(P,y),y}),c=[[{id:"__edit__".concat(e.params.id),params:{...he(e.params,["id"]),type:e.params.type},payload:e.payload}]];async function u(a){let{currentId:s,flatIndex:d,intent:p,params:P,parent:h,path:y,payload:g,unresolvedPane:j,levelIndex:v,structureContext:w}=a;var S;if(!j)return[];const{id:b,type:_,...C}=P,f=await ye(r(j,{id:s,splitIndex:0,parent:h,path:y,index:d,params:{},payload:void 0,structureContext:w},d));return f.type==="document"&&f.id===b?[{panes:[...y.slice(0,y.length-1).map(I=>[{id:I}]),[{id:b,params:C,payload:g}]],depthIndex:y.length,levelIndex:v}]:(S=f.canHandleIntent)!=null&&S.call(f,p,P,{pane:f,index:d})||f.type==="documentList"&&f.schemaTypeName===_&&f.options.filter==="_type == $type"?[{panes:[...y.map(I=>[{id:I}]),[{id:P.id,params:C,payload:g}]],depthIndex:y.length,levelIndex:v}]:f.type==="list"&&f.child&&f.items?(await Promise.all(f.items.map((I,k)=>I.type==="divider"?Promise.resolve([]):u({currentId:I._id||I.id,flatIndex:d+1,intent:p,params:P,parent:f,path:[...y,I.id],payload:g,unresolvedPane:typeof f.child=="function"?ge(f,"child"):f.child,levelIndex:k,structureContext:w})))).flat():[]}const o=(await u({currentId:"root",flatIndex:0,levelIndex:0,intent:e.intent,params:e.params,parent:null,path:[],payload:e.payload,unresolvedPane:e.rootPaneNode,structureContext:e.structureContext})).sort((a,s)=>a.depthIndex===s.depthIndex?a.levelIndex-s.levelIndex:a.depthIndex-s.depthIndex)[0];return o?o.panes:c}const yt=(e,n)=>{const t=e.replace(/^__edit__/,""),{params:r,payload:c,structureContext:{resolveDocumentNode:u}}=n,{type:l,template:o}=r;if(!l)throw new Error("Document type for document with ID ".concat(t," was not provided in the router params."));let a=u({schemaType:l,documentId:t}).id("editor");return o&&(a=a.initialValueTemplate(o,c)),a.serialize()};function gt(e){var n,t;return"contextHash(".concat(JSON.stringify({id:e.id,parentId:parent&&B(parent),path:e.path,index:e.index,splitIndex:e.splitIndex,serializeOptionsIndex:(n=e.serializeOptions)==null?void 0:n.index,serializeOptionsPath:(t=e.serializeOptions)==null?void 0:t.path}),")")}const ie=e=>{const n={type:e.type,id:e.routerPaneSibling.id,params:e.routerPaneSibling.params||{},payload:e.routerPaneSibling.payload||null,flatIndex:e.flatIndex,groupIndex:e.groupIndex,siblingIndex:e.siblingIndex,path:e.path,paneNode:e.type==="resolvedMeta"?B(e.paneNode):null};return"metaHash(".concat(JSON.stringify(n),")")};function O(e){let{unresolvedPane:n,flattenedRouterPanes:t,parent:r,path:c,resolvePane:u,structureContext:l}=e;const[o,...a]=t,s=a[0],d={id:o.routerPaneSibling.id,splitIndex:o.siblingIndex,parent:r,path:[...c,o.routerPaneSibling.id],index:o.flatIndex,params:o.routerPaneSibling.params||{},payload:o.routerPaneSibling.payload,structureContext:l};try{return u(n,d,o.flatIndex).pipe(X(p=>{const P={type:"resolvedMeta",...o,paneNode:p,path:d.path},h=a.map((g,j)=>({type:"loading",path:[...d.path,...a.slice(j).map((S,b)=>"[".concat(g.flatIndex+b,"]"))],paneNode:null,...g}));if(!a.length)return M([P]);let y;return s!=null&&s.routerPaneSibling.id.startsWith("__edit__")?y=O({unresolvedPane:yt,flattenedRouterPanes:a,parent:r,path:d.path,resolvePane:u,structureContext:l}):o.groupIndex===(s==null?void 0:s.groupIndex)?y=O({unresolvedPane:n,flattenedRouterPanes:a,parent:r,path:c,resolvePane:u,structureContext:l}):y=O({unresolvedPane:typeof p.child=="function"?ge(p,"child"):p.child,flattenedRouterPanes:a,parent:p,path:d.path,resolvePane:u,structureContext:l}),rt(M([P,...h]),y.pipe(T(g=>[P,...g])))}))}catch(p){if(p instanceof D&&(p.context&&console.warn("Pane resolution error at index ".concat(p.context.index).concat(p.context.splitIndex>0?" for split pane index ".concat(p.context.splitIndex):"",": ").concat(p.message).concat(p.helpId?" - see ".concat(xe(p.helpId)):""),p),p.helpId==="structure-item-returned-no-child"))return M([]);throw p}}function vt(e){let{routerPanesStream:n,rootPaneNode:t,initialCacheState:r={cacheKeysByFlatIndex:[],flattenedRouterPanes:[],resolvedPaneCache:new Map,resolvePane:()=>st},structureContext:c}=e;return n.pipe(T(l=>[[{id:"root"}],...l]),T(l=>l.flatMap((a,s)=>a.map((d,p)=>({routerPaneSibling:d,groupIndex:s,siblingIndex:p}))).map((a,s)=>({...a,flatIndex:s}))),Ye([]),ct(),T(l=>{let[o,a]=l;for(let s=0;s<a.length;s++){const d=o[s],p=a[s];if(!F(d,p))return{flattenedRouterPanes:a,diffIndex:s}}return{flattenedRouterPanes:a,diffIndex:a.length}}),re((l,o)=>{const{cacheKeysByFlatIndex:a,resolvedPaneCache:s}=l,{flattenedRouterPanes:d,diffIndex:p}=o,P=a.slice(0,p+1),h=a.slice(p+1),y=new Set(P.flatMap(v=>Array.from(v))),g=h.flatMap(v=>Array.from(v)).filter(v=>!y.has(v));for(const v of g)s.delete(v);return{flattenedRouterPanes:d,cacheKeysByFlatIndex:a,resolvedPaneCache:s,resolvePane:ve(v=>(w,S,b)=>{const _=w&&"".concat(B(w),"-").concat(gt(S)),C=_&&s.get(_);if(C)return C;const m=v(w,S,b);if(!_)return m;const f=a[b]||new Set;return f.add(_),a[b]=f,s.set(_,m),m})}},r),X(l=>{let{flattenedRouterPanes:o,resolvePane:a}=l;return O({unresolvedPane:t,flattenedRouterPanes:o,parent:null,path:[],resolvePane:a,structureContext:c})})).pipe(re((l,o)=>o.map((a,s)=>{const d=l[s];return!d||a.type!=="loading"?a:d.routerPaneSibling.id===a.routerPaneSibling.id?d:a}),[]),qe((l,o)=>{if(l.length!==o.length)return!1;for(let a=0;a<o.length;a++){const s=l[a],d=o[a];if(ie(s)!==ie(d))return!1}return!0}))}function Pt(){const e=x.useMemo(()=>new Qe(1),[]),n=x.useMemo(()=>e.asObservable().pipe(T(r=>(r==null?void 0:r.panes)||[])),[e]),{state:t}=U();return x.useEffect(()=>{e.next(t)},[t,e]),n}function It(){const[e,n]=x.useState();if(e)throw e;const{structureContext:t,rootPaneNode:r}=A(),[c,u]=x.useState({paneDataItems:[],resolvedPanes:[],routerPanes:[]}),l=Pt();return x.useEffect(()=>{const a=vt({rootPaneNode:r,routerPanesStream:l,structureContext:t}).pipe(T(s=>{const d=s.reduce((h,y)=>{const g=h[y.groupIndex]||[];return g[y.siblingIndex]=y.routerPaneSibling,h[y.groupIndex]=g,h},[]),p=d.length,P=s.map(h=>{var y;const{groupIndex:g,flatIndex:j,siblingIndex:v,routerPaneSibling:w,path:S}=h,b=w.id,_=d[g+1];return{active:g===p-2,childItemId:(y=_==null?void 0:_[0].id)!=null?y:null,index:j,itemId:w.id,groupIndex:g,key:"".concat(h.type==="loading"?"unknown":h.paneNode.id,"-").concat(b,"-").concat(v),pane:h.type==="loading"?z:h.paneNode,params:w.params||{},path:S.join(";"),payload:w.payload,selected:j===s.length-1,siblingIndex:v}});return{paneDataItems:P,routerPanes:d,resolvedPanes:P.map(h=>h.pane)}})).subscribe({next:s=>u(s),error:s=>n(s)});return()=>a.unsubscribe()},[r,l,t]),c}async function wt(e,n,t){if(n&&t)return{id:n,type:t};if(!n&&t)return{id:Xe(),type:t};if(n&&!t){const r=await ye(e.resolveTypeForDocument(n));return{id:n,type:r}}throw new D({message:"Neither document `id` or `type` was provided when trying to resolve intent."})}const bt={},_t=x.memo(function(){const{navigate:n}=U(),t=J(x.useCallback(a=>{const s=typeof a.intent=="string"?a.intent:void 0;return s?{intent:s,params:Y(a.params)?a.params:bt,payload:a.payload}:void 0},[])),{rootPaneNode:r,structureContext:c}=A(),u=je(),[l,o]=x.useState(null);if(l)throw l;return x.useEffect(()=>{if(t){const{intent:a,params:s,payload:d}=t;let p=!1;async function P(){const{id:h,type:y}=await wt(u,typeof s.id=="string"?s.id:void 0,typeof s.type=="string"?s.type:void 0);if(p)return;const g=await xt({intent:a,params:{...s,id:h,type:y},payload:d,rootPaneNode:r,structureContext:c});p||n({panes:g},{replace:!0})}return P().catch(o),()=>{p=!0}}},[u,t,n,r,c]),null});var le=Object.freeze,jt=Object.defineProperty,St=(e,n)=>le(jt(e,"raw",{value:le(n||e.slice())})),ce;const kt=pe.span(ce||(ce=St([`
  &:not(:last-child)::after {
    content: ' ➝ ';
    opacity: 0.5;
  }
`])));function Ct(e){return e.replace(/\(\.\.\.\)\./g,`(...)
  .`).replace(/__WEBPACK_IMPORTED_MODULE_\d+_+/g,"").replace(/___default\./g,".").replace(new RegExp(" \\(https?:\\/\\/".concat(window.location.host),"g")," (")}function Rt(e){let{error:n}=e;if(!(n instanceof D))throw n;const{cause:t}=n,{t:r}=q(Q),c=(t==null?void 0:t.stack)||n.stack,u=c&&!(t instanceof $)&&!n.message.includes("Module build failed:"),l=t instanceof $?t.path:[],o=t instanceof $&&t.helpId||n.helpId,a=x.useCallback(()=>{window.location.reload()},[]);return i.jsx(N,{height:"fill",overflow:"auto",padding:4,sizing:"border",tone:"critical",children:i.jsxs(me,{children:[i.jsx($e,{as:"h2",children:r("structure-error.header.text")}),i.jsxs(N,{marginTop:4,padding:4,radius:2,overflow:"auto",shadow:1,tone:"inherit",children:[l.length>0&&i.jsxs(H,{space:2,children:[i.jsx(R,{size:1,weight:"medium",children:r("structure-error.structure-path.label")}),i.jsx(te,{children:l.slice(1).map((s,d)=>i.jsx(kt,{children:s},"".concat(s,"-").concat(d)))})]}),i.jsxs(H,{marginTop:4,space:2,children:[i.jsx(R,{size:1,weight:"medium",children:r("structure-error.error.label")}),i.jsx(te,{children:u?Ct(c):n.message})]}),o&&i.jsx(V,{marginTop:4,children:i.jsx(R,{children:i.jsx("a",{href:xe(o),rel:"noopener noreferrer",target:"_blank",children:r("structure-error.docs-link.text")})})}),i.jsx(V,{marginTop:4,children:i.jsx(Ge,{text:r("structure-error.reload-button.text"),icon:Ke,tone:"primary",onClick:a})})]})]})})}function Et(e){const{isSelected:n,pane:t,paneKey:r}=e,c=Y(t)&&t.type||null,{t:u}=q(Q);return i.jsxs(Fe,{id:r,selected:n,children:[i.jsx(He,{title:u("panes.unknown-pane-type.title")}),i.jsx(Ue,{children:i.jsx(V,{padding:4,children:typeof c=="string"?i.jsx(R,{as:"p",muted:!0,children:i.jsx(ne,{t:u,i18nKey:"panes.unknown-pane-type.unknown-type.text",values:{type:c}})}):i.jsx(R,{as:"p",muted:!0,children:i.jsx(ne,{t:u,i18nKey:"panes.unknown-pane-type.missing-type.text"})})})})]})}const Tt={component:x.lazy(()=>L(()=>import("./index-zIcnC3Fm-d88fb9ad.js"),["static/index-zIcnC3Fm-d88fb9ad.js","static/sanity-dc2588e0.js"])),document:x.lazy(()=>L(()=>import("./pane-TEq-dCXX-442a1183.js"),["static/pane-TEq-dCXX-442a1183.js","static/sanity-dc2588e0.js"])),documentList:x.lazy(()=>L(()=>import("./pane-7ppGEuIX-45508985.js"),["static/pane-7ppGEuIX-45508985.js","static/sanity-dc2588e0.js"])),list:x.lazy(()=>L(()=>import("./index-Vf-P_8IU-0dd536f5.js"),["static/index-Vf-P_8IU-0dd536f5.js","static/sanity-dc2588e0.js"]))},Dt=x.memo(function(n){const{active:t,childItemId:r,groupIndex:c,index:u,itemId:l,pane:o,paneKey:a,params:s,payload:d,path:p,selected:P,siblingIndex:h}=n,y=Tt[o.type]||Et;return i.jsx(dt,{flatIndex:u,index:c,params:s,payload:d,siblingIndex:h,children:i.jsx(x.Suspense,{fallback:i.jsx(K,{paneKey:a,path:p,selected:P}),children:i.jsx(y,{childItemId:r||"",index:u,itemId:l,isActive:t,isSelected:P,paneKey:a,pane:o})})})},(e,n)=>{let{params:t={},payload:r=null,...c}=e,{params:u={},payload:l=null,...o}=n;if(!F(t,u)||!F(r,l))return!1;const a=new Set([...Object.keys(c),...Object.keys(o)]);for(const s of a)if(c[s]!==o[s])return!1;return!0});function zt(){const{t:e}=q(Q);return i.jsx(N,{height:"fill",children:i.jsx(ae,{align:"center",height:"fill",justify:"center",padding:4,sizing:"border",children:i.jsx(me,{width:0,children:i.jsx(N,{padding:4,radius:2,shadow:1,tone:"caution",children:i.jsxs(ae,{children:[i.jsx(V,{children:i.jsx(R,{size:1,children:i.jsx(Je,{})})}),i.jsxs(H,{flex:1,marginLeft:3,space:3,children:[i.jsx(R,{as:"h1",size:1,weight:"medium",children:e("no-document-types-screen.title")}),i.jsx(R,{as:"p",muted:!0,size:1,children:e("no-document-types-screen.subtitle")}),i.jsx(R,{as:"p",muted:!0,size:1,children:i.jsx("a",{href:"https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio",target:"_blank",rel:"noreferrer",children:e("no-document-types-screen.link-text")})})]})]})})})})})}const Lt=e=>{const{documentId:n,documentType:t}=e,r=Ze(n,t),c=fe(),u=!(r!=null&&r.published)&&!(r!=null&&r.draft),l=(r==null?void 0:r.draft)||(r==null?void 0:r.published),o=c.get(t),{value:a,isLoading:s}=et({enabled:!0,schemaType:o,value:l}),d=u?"New ".concat((o==null?void 0:o.title)||(o==null?void 0:o.name)):(a==null?void 0:a.title)||"Untitled",p=r.ready&&!s,P=Pe(d);return x.useEffect(()=>{p&&(document.title=P)},[d,p,P]),null},G=e=>{const{title:n}=e,t=Pe(n);return x.useEffect(()=>{document.title=t},[t,n]),null},Mt=e=>{const{resolvedPanes:n}=e;if(!(n!=null&&n.length))return null;const t=n[n.length-1];return Nt(t)?i.jsx(G,{}):Ot(t)?t!=null&&t.title?i.jsx(G,{title:t.title}):i.jsx(Lt,{documentId:t.options.id,documentType:t.options.type}):i.jsx(G,{title:t==null?void 0:t.title})};function Pe(e){const n=A().structureContext.title;return[e,n].filter(t=>t).join(" | ")}function Ot(e){return e!==z&&e.type==="document"}function Nt(e){return e===z}var ue=Object.freeze,Vt=Object.defineProperty,At=(e,n)=>ue(Vt(e,"raw",{value:ue(n||e.slice())})),de;const Bt=pe(tt)(de||(de=At([`
  min-height: 100%;
  min-width: 320px;
`]))),Wt=Se("mod+s"),$t=x.memo(function(n){let{onPaneChange:t}=n;var r;const{push:c}=ke(),u=fe(),{layoutCollapsed:l,setLayoutCollapsed:o}=A(),{paneDataItems:a,resolvedPanes:s}=It(),d=J(x.useCallback(v=>typeof v.intent=="string",[])),{sanity:{media:p}}=Ce(),[P,h]=x.useState(null),y=x.useCallback(()=>o(!0),[o]),g=x.useCallback(()=>o(!1),[o]);return x.useEffect(()=>{s.length&&t(s)},[t,s]),x.useEffect(()=>{const v=w=>{Wt(w)&&(w.preventDefault(),c({closable:!0,id:"auto-save-message",status:"info",title:"Your work is automatically saved!",duration:4e3}))};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[c]),((r=u._original)==null?void 0:r.types.some(Re))?i.jsxs(Ee,{element:P||null,children:[i.jsxs(Bt,{flex:1,height:l?void 0:"fill",minWidth:p[1],onCollapse:y,onExpand:g,children:[a.map(v=>{let{active:w,childItemId:S,groupIndex:b,itemId:_,key:C,pane:m,index:f,params:I,path:k,payload:E,siblingIndex:Z,selected:ee}=v;return i.jsx(x.Fragment,{children:m===z?i.jsx(K,{paneKey:C,path:k,selected:ee}):i.jsx(Dt,{active:w,groupIndex:b,index:f,pane:m,childItemId:S,itemId:_,paneKey:C,params:I,payload:E,path:k,selected:ee,siblingIndex:Z})},"".concat(m===z?"loading":m.type,"-").concat(f))}),a.length<=1&&d&&i.jsx(K,{paneKey:"intent-resolver"})]}),i.jsx(Mt,{resolvedPanes:s}),i.jsx("div",{"data-portal":"",ref:h})]}):i.jsx(zt,{})});function Kt(e){let{tool:{options:n}}=e;const{unstable_sources:t}=Te(),[r]=t,{source:c,defaultDocumentNode:u,structure:l}=n||{};x.useEffect(()=>(W([]),()=>W([])),[]);const[{error:o},a]=x.useState({error:null});return o?i.jsx(Rt,{error:o}):i.jsx(De,{onCatch:a,children:i.jsx(ze,{name:c||r.name,children:i.jsxs(Le,{defaultDocumentNode:u,structure:l,children:[i.jsx($t,{onPaneChange:W}),i.jsx(_t,{})]})})})}export{Kt as default};
