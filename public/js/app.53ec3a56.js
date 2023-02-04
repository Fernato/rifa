(function(){"use strict";var t={6404:function(t,e,n){var r={};n.r(r),n.d(r,{startLogin:function(){return D}});var o={};n.r(o),n.d(o,{getChecking:function(){return H},getPerfil:function(){return U}});var i={};n.r(i),n.d(i,{checkingFinish:function(){return G},setLogin:function(){return z}});var a={};n.r(a),n.d(a,{addCliente:function(){return Q},deleteCliente:function(){return W},getCliente:function(){return Z},getClientes:function(){return J},getClientesDiaCobro:function(){return K},updateCliente:function(){return V}});var c={};n.r(c),n.d(c,{categorias:function(){return nt},getClient:function(){return Y},getClientesAll:function(){return X},getIsLoading:function(){return tt},panel:function(){return et}});var s={};n.r(s),n.d(s,{addCliente:function(){return gt},closeEdit:function(){return ct},closeEditPanel:function(){return st},deleteCliente:function(){return mt},restaurarCliente:function(){return rt},setCategorias:function(){return pt},setCliente:function(){return ft},setClientes:function(){return ut},setEdit:function(){return it},setEditPanel:function(){return at},setLoading:function(){return ot},setPanel:function(){return dt},updateCliente:function(){return lt}});var u={};n.r(u),n.d(u,{deseleccionarNumero:function(){return Lt},getNumero:function(){return Ct},getNumeros:function(){return yt},getNumerosCliente:function(){return Et},updateNumero:function(){return wt}});var d={};n.r(d),n.d(d,{getIsLoading:function(){return kt},getNum:function(){return Tt},getNumerosAll:function(){return xt},getNumerosCli:function(){return jt}});var f={};n.r(f),n.d(f,{addNumero:function(){return Ft},deseleccionarNumero:function(){return _t},setLoading:function(){return Nt},setNumero:function(){return St},setNumeros:function(){return Bt},setNumerosCliente:function(){return Ot}});var l={};n.r(l),n.d(l,{addFactura:function(){return Dt},deleteFactura:function(){return Ut},getFacturas:function(){return At},updateFactura:function(){return Ht}});var m={};n.r(m),n.d(m,{getEditFactura:function(){return Rt},getFactura:function(){return Gt},getFacturasAll:function(){return zt},getId:function(){return Jt},getIsLoading:function(){return qt},getSuma:function(){return Mt}});var g={};n.r(g),n.d(g,{addFactura:function(){return Wt},deleteFactura:function(){return Yt},salirEdit:function(){return te},setFactura:function(){return Vt},setFacturas:function(){return Zt},setIdNumero:function(){return ee},setIsLoading:function(){return Kt},setSuma:function(){return Qt},updateFactura:function(){return Xt}});var p={};n.r(p),n.d(p,{getIngresos:function(){return ie}});var h={};n.r(h),n.d(h,{getIsLoading:function(){return ae},ingresos:function(){return ce}});var v={};n.r(v),n.d(v,{setIngresos:function(){return ue},setLoading:function(){return se}});var b=n(9242),y=n(3396);function C(t,e){const n=(0,y.up)("router-view");return(0,y.wg)(),(0,y.j4)(n)}var w=n(89);const L={},E=(0,w.Z)(L,[["render",C]]);var k=E,x=n(2483),T={name:"auth",component:()=>n.e(818).then(n.bind(n,1587)),children:[{path:"",name:"auth-home",component:()=>n.e(268).then(n.bind(n,2051))},{path:"/login",name:"auth-login",component:()=>n.e(535).then(n.bind(n,3864))},{path:"/numeros",name:"auth-numeros",component:()=>n.e(259).then(n.bind(n,6190))}]},j={name:"rifa",component:()=>n.e(818).then(n.bind(n,6701)),children:[{path:"",name:"rifa-cliente",component:()=>n.e(353).then(n.bind(n,7962))},{path:"/home",name:"rifa-home",component:()=>n.e(268).then(n.bind(n,2051))},{path:"/numerosprivado",name:"rifa-numerosprivado",component:()=>n.e(670).then(n.bind(n,3025))},{path:"cliente/:id",name:"rifa-panel",component:()=>n.e(70).then(n.bind(n,3648)),props:t=>{var{id:e}=t.params;return{id:e}}},{path:"facturar/:id",name:"rifa-facturar",component:()=>n.e(777).then(n.bind(n,7352)),props:t=>{const{id:e}=t.params;return{id:e}}},{path:"/caja",name:"rifa-caja",component:()=>n.e(611).then(n.bind(n,2589))},{path:"/cobro",name:"rifa-cobro",component:()=>n.e(688).then(n.bind(n,8206))}]};const N=[{path:"/",...T},{path:"/rifa",...j}],B=(0,x.p7)({history:(0,x.r5)(),routes:N});var S=B,O=n(65),F=()=>({checking:!1,uid:"",perfil:!1});const _="https://rifa-apartamento.herokuapp.com/api",P=(t,e,n="GET")=>{const r=`${_}/${t}/`;return"GET"===n?fetch(r):fetch(r,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(e)})},$=(t,e,n="GET")=>{const r=`${_}/${t}/`,o=localStorage.getItem("token")||"";return"GET"===n?fetch(r,{method:n,headers:{"x-token":o}}):fetch(r,{method:n,headers:{"Content-type":"application/json","x-token":o},body:JSON.stringify(e)})};var I=n(2492),A=n.n(I);const D=async({commit:t},e)=>{const{usuario:n,password:r}=e;try{const e=await P("usuario/login",{usuario:n,password:r},"POST"),o=await e.json();o.ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t("setLogin",{uid:o.uid,perfil:o.perfil})):A().fire("Error",o.msg,"error")}catch(o){console.log(o)}},H=t=>t.checking,U=t=>t.perfil,z=(t,e)=>{t.uid=e.uid,t.perfil=e.perfil,t.checking=!0},G=t=>{t.uid={},t.perfil={},t.checking=!1},M={namespaced:!0,actions:r,getters:o,mutations:i,state:F};var R=M,q=()=>({isLoading:!1,clientes:[],cliente:{},edit:!1,panel:!1,categorias:[]});const J=async({commit:t})=>{try{t("setLoading",!0);const e=await $("cliente"),n=await e.json();n.ok&&(t("setClientes",n.clientes),t("setLoading",!1))}catch(e){console.log(e),t("setLoading",!1)}},K=async({commit:t})=>{try{t("setLoading",!0);const e=await $("cliente/diacobro"),n=await e.json();n.ok&&(t("setCategorias",n.categorias),t("setLoading",!1))}catch(e){console.log(e),t("setLoading",!1)}},Z=async({commit:t},e)=>{try{t("setLoading",!0);const n=await $(`cliente/get/${e}`),r=await n.json();r.ok&&(t("setCliente",r.cliente),t("setLoading",!1))}catch(n){console.log(n),t("setLoading",!1)}},Q=async({commit:t},e)=>{try{const n=await $("cliente/new",e,"POST"),r=await n.json();if(r.ok){e._id=r.cliente._id;const n=A().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",A().stopTimer),t.addEventListener("mouseleave",A().resumeTimer)}});n.fire({icon:"success",title:"Registro Exitoso"}),t("addCliente",e)}else A().fire({title:"Error!",text:`${r.msg}`,icon:"error",confirmButtonText:"Cool"})}catch(n){console.log(n)}},V=async({commit:t},e)=>{try{const n=await $(`cliente/put/${e._id}`,e,"PUT"),r=await n.json();r.ok&&(t("updateCliente",e),A().fire({position:"center",icon:"success",title:"Ha sido actualizado",showConfirmButton:!1,timer:1e3}))}catch(n){A().fire({title:"Error!",text:`${n}`,icon:"error",confirmButtonText:"Cool"})}},W=async({commit:t},e)=>{const n=A().mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});n.fire({title:"¿ Estas seguro?",text:"Si eliminas no podras recuperar la informacion!",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, Eliminar!",cancelButtonText:"No, cancelar!",reverseButtons:!0}).then((async r=>{if(r.isConfirmed){const r=await $(`cliente/delete/${e}`,{},"DELETE"),o=await r.json();o.ok&&(n.fire("Eliminado!","Su registro ha sido eliminado","success"),t("deleteCliente",e))}else r.dismiss===A().DismissReason.cancel&&n.fire("Cancelado","Sus registros siguen intactos :)","error")}))},X=t=>t.clientes,Y=t=>t.cliente,tt=t=>t.isLoading,et=t=>t.panel,nt=t=>t.categorias,rt=t=>{t.cliente={}},ot=(t,e)=>{t.isLoading=e},it=(t,e)=>{t.edit?(t.edit=!1,t.cliente={}):(t.edit=!0,t.cliente=e)},at=(t,e)=>{t.edit?t.edit=!1:(t.edit=!0,t.cliente=e)},ct=t=>{t.cliente={},t.edit=!1},st=t=>{t.edit=!1},ut=(t,e)=>{t.clientes=e},dt=(t,e)=>{t.panel=e},ft=(t,e)=>{t.cliente=e},lt=(t,e)=>{const n=t.clientes.map((t=>t._id)).indexOf(e._id);t.clientes[n]=e},mt=(t,e)=>{const n=t.clientes.map((t=>t._id)).indexOf(e);t.clientes.splice(n,1)},gt=(t,e)=>{t.clientes=[e,...t.clientes]},pt=(t,e)=>{t.categorias=e},ht={namespaced:!0,actions:a,getters:c,mutations:s,state:q};var vt=ht,bt=()=>({isLoading:!1,numeros:[],numero:{},numerosCliente:[]});const yt=async({commit:t})=>{try{t("setLoading",!0);const e=await $("numero"),n=await e.json();n.ok&&(t("setNumeros",n.numeros),t("setLoading",!1))}catch(e){console.log(e),t("setLoading",!1)}},Ct=async({commit:t},e)=>{try{t("setLoading",!0);const n=await $(`numero/${e}`),r=await n.json();r.ok?(t("setNumero",r.numero),t("setLoading",!1)):A().fire({position:"center",icon:"error",title:"Numero no existe",showConfirmButton:!1,timer:1e3})}catch(n){console.log(n),t("setLoading",!1)}},wt=async({commit:t},e)=>{try{const n=await $(`numero/${e.id}`,e,"PUT"),r=await n.json();r.ok&&(t("addNumero",r.numero),A().fire({position:"center",icon:"success",title:"Ha sido actualizado",showConfirmButton:!1,timer:1e3}))}catch(n){A().fire({title:"Error!",text:`${n}`,icon:"error",confirmButtonText:"Cool"})}},Lt=async({commit:t},e)=>{try{const n=await $(`numero/${e.id}`,e,"PUT"),r=await n.json();r.ok&&(t("deseleccionarNumero",r.numero._id),A().fire({position:"center",icon:"success",title:"Ha sido actualizado",showConfirmButton:!1,timer:1e3}))}catch(n){A().fire({title:"Error!",text:`${n}`,icon:"error",confirmButtonText:"Cool"})}},Et=async({commit:t},e)=>{try{t("setLoading",!0);const n=await $(`numero/numeroscliente/${e}`),r=await n.json();r.ok&&(t("setNumerosCliente",r.numeros),t("setLoading",!1))}catch(n){console.log(n),t("setLoading",!1)}},kt=t=>t.isLoading,xt=t=>t.numeros,Tt=t=>t.numero,jt=t=>t.numerosCliente,Nt=(t,e)=>{t.isLoading=e},Bt=(t,e)=>{t.numeros=e},St=(t,e)=>{t.numero=e},Ot=(t,e)=>{t.numerosCliente=e},Ft=(t,e)=>{t.numerosCliente=[e,...t.numerosCliente]},_t=(t,e)=>{const n=t.numerosCliente.map((t=>t._id)).indexOf(e);t.numerosCliente.splice(n,1)},Pt={namespaced:!0,actions:u,getters:d,mutations:f,state:bt};var $t=Pt,It=()=>({isLoading:!1,facturas:[],factura:{},suma:0,editFactura:!1,idNumero:""});const At=async({commit:t},e)=>{try{t("setIsLoading",!0);const n=await $(`factura/numero/${e}`),r=await n.json();r.ok&&(t("setFacturas",r.facturas),t("setIsLoading",!1))}catch(n){console.log(n)}},Dt=async({commit:t},e)=>{try{const n=await $("factura/new",e,"POST"),r=await n.json();if(r.ok){t("addFactura",r.factura);const e=A().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",A().stopTimer),t.addEventListener("mouseleave",A().resumeTimer)}});e.fire({icon:"success",title:"Registro Exitoso"})}else A().fire({title:"Error!",text:`${r.msg}`,icon:"error",confirmButtonText:"Cool"})}catch(n){console.log(n)}},Ht=async({commit:t},e)=>{try{const n=await $(`factura/${e._id}`,e,"PUT"),r=await n.json();r.ok&&(t("updateFactura",e),t("salirEdit"),A().fire({position:"center",icon:"success",title:"Ha sido actualizado",showConfirmButton:!1,timer:1e3}))}catch(n){A().fire({title:"Error!",text:`${n}`,icon:"error",confirmButtonText:"Cool"})}},Ut=async({commit:t},e)=>{const n=A().mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});n.fire({title:"¿ Estas seguro?",text:"Si eliminas no podras recuperar la informacion!",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, Eliminar!",cancelButtonText:"No, cancelar!",reverseButtons:!0}).then((async r=>{if(r.isConfirmed){const r=await $(`factura/${e._id}`,e,"DELETE"),o=await r.json();o.ok&&(n.fire("Eliminado!","Su registro ha sido eliminado","success"),t("deleteFactura",e._id))}else r.dismiss===A().DismissReason.cancel&&n.fire("Cancelado","Sus registros siguen intactos :)","error")}))},zt=t=>t.facturas,Gt=t=>t.factura,Mt=t=>t.suma,Rt=t=>t.editFactura,qt=t=>t.isLoading,Jt=t=>t.idNumero,Kt=(t,e)=>{t.isLoading=e},Zt=(t,e)=>{t.facturas=e},Qt=(t,e)=>{t.suma=e},Vt=(t,e)=>{t.factura=e,t.editFactura=!0},Wt=(t,e)=>{t.facturas=[e,...t.facturas]},Xt=(t,e)=>{const n=t.facturas.map((t=>t._id)).indexOf(e._id);t.facturas[n]=e},Yt=(t,e)=>{const n=t.facturas.map((t=>t._id)).indexOf(e);t.facturas.splice(n,1)},te=t=>{t.editFactura=!1,t.factura={}},ee=(t,e)=>{t.idNumero=e},ne={namespaced:!0,actions:l,getters:m,mutations:g,state:It};var re=ne,oe=()=>({isLoading:!1,ingresos:0});const ie=async({commit:t})=>{try{t("setLoading",!0);const e=await $("factura/facturatotal"),n=await e.json();n.ok&&(t("setIngresos",n.total),t("setLoading",!1))}catch(e){console.log(e),t("setLoading",!1)}},ae=t=>t.isLoading,ce=t=>t.ingresos,se=(t,e)=>{t.isLoading=e},ue=(t,e)=>{t.ingresos=e},de={namespaced:!0,actions:p,getters:h,mutations:v,state:oe};var fe=de;const le=(0,O.MT)({modules:{auth:R,cliente:vt,numeros:$t,facturar:re,caja:fe}});var me=le;(0,b.ri)(k).use(me).use(S).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(d=0;d<t.length;d++){r=t[d][0],o=t[d][1],i=t[d][2];for(var c=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(c=!1,i<a&&(a=i));if(c){t.splice(d--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+({70:"rifa-panel",259:"Numeros",268:"Home",353:"rifa-cliente",535:"login",611:"rifa-caja",670:"rifa-numerosPrivado",688:"rifa-cobro",777:"rifa-facturar",818:"auth"}[t]||t)+"."+{46:"502e7aaa",70:"1ae7678e",125:"495aadcb",152:"5ce20087",187:"a75ffc5a",259:"9d180b8e",268:"64ff16df",270:"f59fc848",301:"2f42505d",353:"c2b74fb2",454:"c7ee86e7",463:"e583191c",493:"98a16d5f",520:"48348ebc",535:"b6bab689",584:"172e022f",611:"d64a1ed9",668:"aab5c2cb",670:"edbb1ddc",688:"f9705770",729:"0eed14b9",777:"71c4676a",818:"d686d63b",827:"a02ff184",880:"3aada443",894:"128ced0e",913:"a84a55b4",931:"509713af"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+({268:"Home",535:"login",688:"rifa-cobro",818:"auth"}[t]||t)+"."+{187:"0283c939",268:"348d8e80",270:"c812e98b",301:"49bf2b75",463:"f9819014",535:"9aefce24",688:"7868a930",818:"6726e3f7",880:"ae3c3698",913:"fe4ecc50",931:"a6c17b5b"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="rifa-vue:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var c,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){c=f;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+i),c.src=r),t[r]=[o];var l=function(e,n){c.onerror=c.onload=null,clearTimeout(m);var o=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=a,i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),c=n.p+a;if(e(a,c))return o();t(r,c,null,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={187:1,268:1,270:1,301:1,463:1,535:1,688:1,818:1,880:1,913:1,931:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),c=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};n.l(a,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],c=r[1],s=r[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var d=s(n)}for(e&&e(r);u<a.length;u++)i=a[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(d)},r=self["webpackChunkrifa_vue"]=self["webpackChunkrifa_vue"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6404)}));r=n.O(r)})();
//# sourceMappingURL=app.53ec3a56.js.map