"use strict";(self["webpackChunkrifa_vue"]=self["webpackChunkrifa_vue"]||[]).push([[793],{3793:function(l,e,t){t.r(e),t.d(e,{default:function(){return v}});var n=t(3396),i=t(7139);const d={class:"table table-striped table-hover"},a=(0,n._)("th",null,"#",-1),u=(0,n._)("th",null,"Ver",-1),r=(0,n._)("th",null,"Cedula",-1),s=(0,n._)("th",null,"Nombre",-1),o=(0,n._)("th",null,"Apellidos",-1),c=(0,n._)("th",null,"Celular",-1),_=(0,n._)("th",null,"Direccion",-1),b=(0,n._)("th",null,"Editar",-1),g={key:0},h=["onClick","disabled"],f=["disabled","onClick"];function k(l,e,t,k,w,C){const p=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("table",d,[(0,n._)("thead",null,[(0,n._)("tr",null,[a,u,r,s,o,c,_,b,"admin"===l.getPerfil?((0,n.wg)(),(0,n.iD)("th",g,"Eliminar")):(0,n.kq)("",!0)])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.getClientesAll,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:e._id},[(0,n._)("td",null,(0,i.zw)(t+1),1),(0,n._)("td",null,[(0,n.Wm)(p,{class:"btn btn-info",to:{name:"rifa-panel",params:{id:e._id}}},{default:(0,n.w5)((()=>[(0,n.Uk)(" VER ")])),_:2},1032,["to"])]),(0,n._)("td",null,(0,i.zw)(e.cedula),1),(0,n._)("td",null,(0,i.zw)(e.nombre),1),(0,n._)("td",null,(0,i.zw)(e.apellidos),1),(0,n._)("td",null,(0,i.zw)(e.celular),1),(0,n._)("td",null,(0,i.zw)(e.direccion),1),(0,n._)("td",null,[(0,n._)("button",{class:"btn btn-secondary",onClick:t=>l.setEdit(e),disabled:l.getIsLoading}," Editar ",8,h)]),(0,n._)("td",null,["admin"===l.getPerfil?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"btn btn-danger",disabled:l.getIsLoading,onClick:t=>l.deleteCliente(e._id)}," Eliminar ",8,f)):(0,n.kq)("",!0)])])))),128))])])])}t(7658);var w=t(65),C={computed:{...(0,w.Se)("cliente",["getClientesAll","getIsLoading"]),...(0,w.Se)("auth",["getPerfil"])},methods:{...(0,w.nv)("cliente",["getClientes","deleteCliente"]),...(0,w.OI)("cliente",["setEdit"]),ver(){this.$router.push("rifa-panel")}},created(){this.getClientes()}},p=t(89);const m=(0,p.Z)(C,[["render",k]]);var v=m}}]);
//# sourceMappingURL=793.4a6261d1.js.map