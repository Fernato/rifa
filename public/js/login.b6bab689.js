"use strict";(self["webpackChunkrifa_vue"]=self["webpackChunkrifa_vue"]||[]).push([[535],{3864:function(r,o,a){a.r(o),a.d(o,{default:function(){return y}});var s=a(3396);function n(r,o,a,n,u,i){const t=(0,s.up)("FormLogin");return(0,s.wg)(),(0,s.j4)(t)}var u=a(9242);const i=r=>((0,s.dD)("data-v-3ece8fa8"),r=r(),(0,s.Cn)(),r),t={class:"container login-container"},e={class:"row"},l={class:"login-form-1"},c=i((()=>(0,s._)("h3",null,"Ingreso",-1))),d={class:"form-group"},p={class:"form-group"},g=i((()=>(0,s._)("div",{class:"form-group"},[(0,s._)("input",{type:"submit",class:"btnSubmit",value:"Login"})],-1)));function f(r,o,a,n,i,f){return(0,s.wg)(),(0,s.iD)("div",t,[(0,s._)("div",e,[(0,s._)("div",l,[c,(0,s._)("form",{onSubmit:o[2]||(o[2]=(0,u.iM)(((...r)=>f.login&&f.login(...r)),["prevent"]))},[(0,s._)("div",d,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"Usuario",name:"usuario","onUpdate:modelValue":o[0]||(o[0]=r=>i.usuario.usuario=r)},null,512),[[u.nr,i.usuario.usuario]])]),(0,s._)("div",p,[(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",placeholder:"Contraseña",name:"password","onUpdate:modelValue":o[1]||(o[1]=r=>i.usuario.password=r)},null,512),[[u.nr,i.usuario.password]])]),g],32)])])])}a(7658);var m=a(65),v={data(){return{usuario:{}}},computed:{...(0,m.Se)("auth",["getChecking","getPerfil"])},methods:{...(0,m.nv)("auth",["startLogin"]),async login(){var r={usuario:this.usuario.usuario,password:this.usuario.password};await this.startLogin(r),this.getChecking&&"admin"===this.getPerfil&&this.$router.push("rifa")}}},h=a(89);const w=(0,h.Z)(v,[["render",f],["__scopeId","data-v-3ece8fa8"]]);var _=w,b={components:{FormLogin:_}};const k=(0,h.Z)(b,[["render",n]]);var y=k}}]);
//# sourceMappingURL=login.b6bab689.js.map