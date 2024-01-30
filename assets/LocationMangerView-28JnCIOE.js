import{c as C,O,_ as E,d as j}from"./ItemNav-KjmjetCZ.js";import{b as N,i as L,o as r,d as _,e,f as t,w as i,g as q,r as b,a as g,j as I,t as c,u as w,F as k,k as x}from"./index-K0WYNi0E.js";const D={class:"offcanvas offcanvas-end account-offcanvas",tabindex:"-1","data-bs-backdrop":"static",id:"locationEditOffcanvas","aria-labelledby":"locationEditOffcanvasLabel"},M=q('<div class="offcanvas-header justify-content-end"><button type="button" class="btn-close rounded-5 bg-gray" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><div class="title-word mt-1"><span class="colr-block"></span><h2 class="mb-0 fw-lighter">編輯點位 </h2></div>',2),S={class:"offcanvas-body"},B=e("h3",{class:"fw-lighter"},"點位基本資料",-1),T={class:"row g-3"},U={class:"col-8"},R=e("label",{for:"pointType",class:"form-label"},"點位類型：",-1),z={class:"col-8"},A=e("label",{for:"locationPoint",class:"form-label"},"點位節點：",-1),G=e("option",{value:"",disabled:""},"請選擇點位節點",-1),H=e("option",{value:"1"},"1",-1),J={class:"col-8"},K=e("label",{for:"pointName",class:"form-label"},"點位名稱：",-1),Q={class:"col-8"},W=e("label",{for:"reg",class:"form-label"},"資料數值： ",-1),X={class:"col-12 d-flex align-items-end gap-2"},Y={class:"col-8"},Z=e("label",{for:"value",class:"form-label"},"設定數值：",-1),P=e("option",{value:"",disabled:""},"請輸入設定數值",-1),ee=e("option",{value:"1"},"1",-1),te=e("div",{class:"col-4"},[e("button",{type:"button",class:"btn btn-outline-primary"}," 點位復歸 ")],-1),se={class:"col-8"},oe=e("label",{for:"emegencyNotify",class:"form-label"},"緊急通知：",-1),ae=e("option",{value:"",disabled:""},"請選擇是否需要緊急通知",-1),le=e("option",{value:"yes"},"是",-1),ne=e("option",{value:"no"},"否",-1),ce={class:"col-8"},ie=e("label",{for:"linkCamera",class:"form-label"},"連動攝影機：",-1),de=e("option",{value:"",disabled:""},"請選擇攝影機",-1),re=e("option",{value:"testCamera"},"test Data",-1),_e=e("div",{class:"mt-5 text-center"},[e("button",{class:"btn btn-primary w-50",type:"submit"},"儲存")],-1),me={__name:"LocationEditOffcanvas",props:["tempObject","elementControl"],setup($){const{swalSuccess:f}=C.setup(),u=$,a=N({id:"",point_id:"",point_name:"",point_type:!0,reg:"",method:"",status:!0,value:0});L(()=>u.tempObject,m=>{m!==null&&Object.assign(a,m)},{immediate:!0});function y(m){console.log(m),u.elementControl.hide(),f("修改成功")}return(m,d)=>{const l=b("VField"),p=b("ErrorMessage"),n=b("VForm");return r(),_("div",D,[M,e("div",S,[B,t(n,{class:"needs-validation",ref:"editLocationForm",onSubmit:y},{default:i(()=>[e("div",T,[t(l,{type:"hidden",class:"form-control",name:"id",id:"id",modelValue:a.id,"onUpdate:modelValue":d[0]||(d[0]=o=>a.id=o),disabled:""},null,8,["modelValue"]),e("div",U,[R,t(l,{type:"text",class:"form-control",name:"pointType",id:"pointType",placeholder:"請輸入點位類型"})]),e("div",z,[A,t(l,{class:"form-select",id:"locationPoint",name:"locationPoint",as:"select",required:""},{default:i(()=>[G,H]),_:1}),t(p,{as:"p",class:"invalid-feedback d-block mb-0",name:"locationPoint"})]),e("div",J,[K,t(l,{type:"text",class:"form-control",name:"pointName",id:"pointName",placeholder:"請輸入點位名稱",modelValue:a.point_name,"onUpdate:modelValue":d[1]||(d[1]=o=>a.point_name=o)},null,8,["modelValue"])]),e("div",Q,[W,t(l,{type:"text",class:"form-control",name:"reg",id:"reg",placeholder:"請輸入資料數值",modelValue:a.reg,"onUpdate:modelValue":d[2]||(d[2]=o=>a.reg=o)},null,8,["modelValue"])]),e("div",X,[e("div",Y,[Z,t(l,{class:"form-select",id:"value",name:"value",as:"select",required:""},{default:i(()=>[P,ee]),_:1}),t(p,{as:"p",class:"invalid-feedback d-block mb-0",name:"value"})]),te]),e("div",se,[oe,t(l,{class:"form-select",id:"emegencyNotify",name:"emegencyNotify",as:"select",required:""},{default:i(()=>[ae,le,ne]),_:1}),t(p,{as:"p",class:"invalid-feedback d-block mb-0",name:"emegencyNotify"})]),e("div",ce,[ie,t(l,{class:"form-select",id:"linkCamera",name:"linkCamera",as:"select",required:""},{default:i(()=>[de,re]),_:1}),t(p,{as:"p",class:"invalid-feedback d-block mb-0",name:"linkCamera"})])]),_e]),_:1},512)])])}}},ue={class:"container"},pe={class:"bg-white-box mb-2"},be={class:"d-flex gap-2"},fe={class:""},he=e("label",{for:"searchInput",class:"form-label"},"點位ID、點位名稱",-1),ve={class:""},ye=e("label",{for:"device",class:"form-label"},"裝置",-1),ge=e("option",{value:"",disabled:""},"請選擇裝置",-1),ke=e("option",{value:"test"},"測試",-1),$e={class:""},we=e("label",{for:"point-type",class:"form-label"},"點位類型",-1),xe=e("option",{value:"",disabled:""},"請選擇狀態",-1),Ve=["value"],Fe={class:""},Ce=e("label",{for:"status",class:"form-label"},"狀態",-1),Oe=e("option",{value:"",disabled:""},"請選擇狀態",-1),Ee=e("option",{value:"link"},"連線中",-1),je=e("option",{value:"unLink"},"斷線中",-1),Ne={class:"d-flex gap-2"},Le=e("button",{type:"submit",class:"btn btn-gray fw-semibold text-white"}," 搜尋 ",-1),qe={class:"d-flex justify-content-between align-items-end mb-2"},Ie=e("h4",{class:"fw-lighter"},"列表",-1),De={class:"d-flex gap-2 align-items-center me-2 mt-1 mb-2"},Me={class:"mb-0 me-2 fw-lighter"},Se={class:"bg-white-box"},Be={class:"table-responsive"},Te={class:"table table-hover"},Ue=e("thead",{class:"table-head"},[e("tr",null,[e("th",{scope:"col"},"排序"),e("th",{class:"table-img-col",scope:"col"},[e("p",{class:"border-start border-2 ps-2 mb-0"},"點位ID")]),e("th",{scope:"col"},"點位名稱"),e("th",{scope:"col"},"點位類型"),e("th",{scope:"col"},"Reg"),e("th",{scope:"col"},"方法"),e("th",{scope:"col"},"狀態"),e("th",{scope:"col"},"數值"),e("th",{scope:"col"},[e("p",{class:"border-start border-2 ps-2 mb-0"},"操作")])])],-1),Re={scope:"row",class:"text-center"},ze={key:0,class:"device-statu device-link"},Ae={key:1,class:"device-statu"},Ge={class:"ps-2"},He=["onClick"],We={__name:"LocationMangerView",setup($){const{locationPointDatas:f}=j,u=g(null),a=g(null),y=g(null);function m(n){y.value={...n},u.value.show()}function d(n){console.log(n)}function l(){a.value.resetForm()}function p(){const n=[];return f.forEach(o=>{n.findIndex(v=>v===o.point_type)&&n.push(o.point_type)}),n}return I(()=>{u.value=new O("#locationEditOffcanvas",{keyboard:!1})}),(n,o)=>{const h=b("VField"),v=b("ErrorMessage"),V=b("VForm");return r(),_(k,null,[e("div",ue,[t(E,{"nav-where":"devices"}),e("section",pe,[t(V,{class:"d-flex justify-content-between align-items-end",ref_key:"searchForm",ref:a,onSubmit:d},{default:i(()=>[e("div",be,[e("div",fe,[he,t(h,{type:"text",class:"form-control",name:"searchInput",id:"searchInput",placeholder:"請輸入ID、名稱"})]),e("div",ve,[ye,t(h,{class:"form-select",id:"device",name:"device",as:"select",required:""},{default:i(()=>[ge,ke]),_:1}),t(v,{as:"p",class:"invalid-feedback d-block mb-0",name:"device"})]),e("div",$e,[we,t(h,{class:"form-select",id:"point-type",name:"point-type",as:"select",required:""},{default:i(()=>[xe,(r(!0),_(k,null,x(p(),s=>(r(),_("option",{key:s,value:s},c(s),9,Ve))),128))]),_:1}),t(v,{as:"p",class:"invalid-feedback d-block mb-0",name:"location-type"})]),e("div",Fe,[Ce,t(h,{class:"form-select",id:"status",name:"status",as:"select",required:""},{default:i(()=>[Oe,Ee,je]),_:1}),t(v,{as:"p",class:"invalid-feedback d-block mb-0",name:"status"})])]),e("div",Ne,[e("button",{type:"button",class:"btn btn-outline-gray fw-semibold",onClick:o[0]||(o[0]=s=>l())}," 清除 "),Le])]),_:1},512)]),e("section",null,[e("div",qe,[Ie,e("div",De,[e("p",Me,"共計："+c(w(f).length)+" 筆",1)])]),e("div",Se,[e("div",Be,[e("table",Te,[Ue,e("tbody",null,[(r(!0),_(k,null,x(w(f),(s,F)=>(r(),_("tr",{key:s.id},[e("th",Re,c(F+1),1),e("td",null,c(s.point_id),1),e("td",null,c(s.point_name),1),e("td",null,c(s.point_type),1),e("td",null,c(s.reg),1),e("td",null,c(s.method),1),e("td",null,[s.status?(r(),_("span",ze,"連線中")):(r(),_("span",Ae,"斷線中"))]),e("td",null,c(s.value),1),e("td",null,[e("div",Ge,[e("button",{class:"btn btn-outline-primary border-0 fw-lighter",type:"button",onClick:Je=>m(s)}," 編輯 ",8,He)])])]))),128))])])])])])]),t(me,{tempObject:y.value,"element-control":u.value},null,8,["tempObject","element-control"])],64)}}};export{We as default};