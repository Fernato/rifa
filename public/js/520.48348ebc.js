"use strict";(self["webpackChunkrifa_vue"]=self["webpackChunkrifa_vue"]||[]).push([[520],{8520:function(l,e,t){t.r(e),t.d(e,{default:function(){return z}});var n=t(3396),i=t(7139);const d={class:"table table-striped table-hover"},u=(0,n._)("th",null,"#",-1),a=(0,n._)("th",null,"Ver",-1),r=(0,n._)("th",null,"Cedula",-1),s=(0,n._)("th",null,"Nombre",-1),o=(0,n._)("th",null,"Apellidos",-1),c=(0,n._)("th",null,"Celular",-1),_=(0,n._)("th",null,"Direccion",-1),b=(0,n._)("th",null,"Cobro",-1),h=(0,n._)("th",null,"Editar",-1),g={key:0},f=["onClick","disabled"],k=["disabled","onClick"];function w(l,e,t,w,C,p){const m=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("table",d,[(0,n._)("thead",null,[(0,n._)("tr",null,[u,a,r,s,o,c,_,b,h,"admin"===l.getPerfil?((0,n.wg)(),(0,n.iD)("th",g,"Eliminar")):(0,n.kq)("",!0)])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.getClientesAll,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:e._id},[(0,n._)("td",null,(0,i.zw)(t+1),1),(0,n._)("td",null,[(0,n.Wm)(m,{class:"btn btn-info",to:{name:"rifa-panel",params:{id:e._id}}},{default:(0,n.w5)((()=>[(0,n.Uk)(" VER ")])),_:2},1032,["to"])]),(0,n._)("td",null,(0,i.zw)(e.cedula),1),(0,n._)("td",null,(0,i.zw)(e.nombre),1),(0,n._)("td",null,(0,i.zw)(e.apellidos),1),(0,n._)("td",null,(0,i.zw)(e.celular),1),(0,n._)("td",null,(0,i.zw)(e.direccion),1),(0,n._)("td",null,(0,i.zw)(e.diacobro),1),(0,n._)("td",null,[(0,n._)("button",{class:"btn btn-secondary",onClick:t=>l.setEdit(e),disabled:l.getIsLoading}," Editar ",8,f)]),(0,n._)("td",null,["admin"===l.getPerfil?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"btn btn-danger",disabled:l.getIsLoading,onClick:t=>l.deleteCliente(e._id)}," Eliminar ",8,k)):(0,n.kq)("",!0)])])))),128))])])])}t(7658);var C=t(65),p={computed:{...(0,C.Se)("cliente",["getClientesAll","getIsLoading"]),...(0,C.Se)("auth",["getPerfil"])},methods:{...(0,C.nv)("cliente",["getClientes","deleteCliente"]),...(0,C.OI)("cliente",["setEdit"]),ver(){this.$router.push("rifa-panel")}},created(){this.getClientes()}},m=t(89);const v=(0,m.Z)(p,[["render",w]]);var z=v}}]);
//# sourceMappingURL=520.48348ebc.js.map