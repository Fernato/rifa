"use strict";(self["webpackChunkrifa_vue"]=self["webpackChunkrifa_vue"]||[]).push([[454],{7454:function(a,t,e){e.r(t),e.d(t,{default:function(){return m}});var r=e(3396),o=e(9242);const n=["disabled"];function u(a,t,e,u,c,d){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:t[2]||(t[2]=(0,o.iM)(((...a)=>d.AddFactura&&d.AddFactura(...a)),["prevent"]))},[(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"date",name:"fecha",class:"form-control mt-3",placeholder:"Fecha",autoComplete:"off","onUpdate:modelValue":t[0]||(t[0]=a=>c.factura.fecha=a)},null,512),[[o.nr,c.factura.fecha]]),(0,r.wy)((0,r._)("input",{type:"number",name:"monto",class:"form-control mt-3",placeholder:"Monto",autoComplete:"off","onUpdate:modelValue":t[1]||(t[1]=a=>c.factura.monto=a)},null,512),[[o.nr,c.factura.monto]]),(0,r._)("button",{class:"btn btn-primary form-control mt-2",type:"submit",disabled:a.getIsLoading}," Guardar ",8,n)])],32)}var c=e(65),d={data(){return{factura:{}}},computed:{...(0,c.Se)("facturar",["getId","getIsLoading"])},methods:{...(0,c.nv)("facturar",["addFactura"]),async AddFactura(){var a={fecha:this.factura.fecha,monto:this.factura.monto,numero:this.getId};await this.addFactura(a)}}},f=e(89);const l=(0,f.Z)(d,[["render",u]]);var m=l}}]);
//# sourceMappingURL=454.c7ee86e7.js.map