import{c as D,M as I,O as L,_ as T,d as A}from"./ItemNav-KjmjetCZ.js";import{a as c,i as N,r as V,o as r,d as _,e,f as t,w as a,n as O,g as S,j as B,F as M,b as U,t as E,k as R,m as P}from"./index-K0WYNi0E.js";const z={class:"modal fade",id:"editLinkModal","data-bs-backdrop":"static",tabindex:"-1","aria-labelledby":"editLinkModalLabel","aria-hidden":"true"},G={class:"modal-dialog modal-dialog-centered"},H={class:"modal-content bg-white-box p-2"},J={class:"modal-header border-0"},K={class:"title-word"},Q=e("span",{class:"colr-block"},null,-1),W={class:"mb-0 fw-lighter"},X={key:0},Y={key:1},Z=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),ee={class:"modal-body"},te={class:"row g-3 mb-3"},se={class:"col-12 bg-light-box mb-2 p-3"},oe=e("label",{for:"linkMode",class:"form-label fs-5 fw-lighter"},"連線方式：",-1),le=e("option",{value:"",disabled:""},"請選擇連線方式",-1),ae=e("option",{value:"1"},"1",-1),ne={class:"col-12"},de=e("label",{for:"linkID",class:"form-label fs-5"},"連線ID：",-1),ie={class:"col-12"},ce=e("label",{for:"linkName",class:"form-label fs-5"},"連線名稱：",-1),re={class:"col-12"},_e=e("label",{for:"port",class:"form-label fs-5"},"Port：",-1),ue=e("option",{value:"",disabled:""},"請選擇Port",-1),be=e("option",{value:"1"},"1",-1),me={class:"col-12"},ve=e("label",{for:"baudrate",class:"form-label fs-5"},"Baudrate：",-1),fe={key:0,class:"text-center my-4"},pe=e("button",{type:"submit",class:"fw-semibold btn btn-gray col-4"}," 完成 ",-1),he=[pe],$e={key:1,class:"text-center my-4 d-flex gap-2 justify-content-center"},ye=e("button",{type:"button",class:"fw-semibold btn btn-outline-danger col-4"}," 刪除 ",-1),ke=e("button",{type:"submit",class:"fw-semibold btn btn-primary col-4"}," 儲存 ",-1),we=[ye,ke],ge={__name:"LinkFnEditModal",props:["tempObject","isNew","controlElement"],setup(f){const{swalSuccess:y}=D.setup(),n=f,b=c(null);function v(l){n.isNew?y("已新增"):y("已儲存"),console.log(l),n.controlElement.hide()}return N(()=>n.isNew,l=>{l&&b.value.resetForm()}),(l,$)=>{const i=V("VField"),k=V("VForm");return r(),_("div",z,[e("div",G,[e("div",H,[e("div",J,[e("div",K,[Q,e("h2",W,[f.isNew?(r(),_("span",X,"新增連線方式")):(r(),_("span",Y,"編輯連線方式"))])]),Z]),e("div",ee,[t(k,{ref_key:"addPointForm",ref:b,onSubmit:v},{default:a(()=>[e("div",te,[e("div",se,[oe,t(i,{id:"linkMode",name:"linkMode",as:"select",class:"form-select",required:""},{default:a(()=>[le,ae]),_:1})]),e("div",ne,[de,t(i,{type:"text",class:"form-control",name:"linkID",id:"linkID",placeholder:"請輸入連線ID"})]),e("div",ie,[ce,t(i,{type:"text",class:"form-control",name:"linkName",id:"linkName",placeholder:"請輸入連線名稱"})]),e("div",re,[_e,t(i,{id:"port",name:"port",as:"select",class:"form-select",required:""},{default:a(()=>[ue,be]),_:1})]),e("div",me,[ve,t(i,{type:"text",class:"form-control",name:"baudrate",id:"baudrate",placeholder:"請輸入Baudrate"})])]),f.isNew?(r(),_("div",fe,he)):(r(),_("div",$e,we))]),_:1},512)])])])])}}},xe={class:"modal fade",id:"editPointModal","data-bs-backdrop":"static",tabindex:"-1","aria-labelledby":"editPointModalLabel","aria-hidden":"true"},Ve={class:"modal-dialog modal-dialog-centered"},Fe={class:"modal-content bg-white-box p-2"},Ee=S('<div class="modal-header border-0"><div class="title-word"><span class="colr-block"></span><h2 class="mb-0 fw-semibold">新增節點</h2></div><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>',1),Ce={class:"modal-body"},qe={class:"row g-3 mb-3"},Me={class:"col-sm-6"},Pe=e("label",{for:"point_id",class:"form-label fs-5"},"點位ID：",-1),je={class:"col-sm-6"},Ne=e("label",{for:"modBus",class:"form-label fs-5"},"起始暫存器：",-1),De={class:"col-sm-6"},Ie=e("label",{for:"type",class:"form-label fs-5"},"類型：",-1),Se=e("option",{value:"",disabled:""},"請選擇類型",-1),Be=e("option",{value:"1"},"1",-1),Le={class:"col-sm-6"},Oe=e("label",{for:"swapMode",class:"form-label fs-5"},"Swap Mode：",-1),Te=e("option",{value:"",disabled:""},"請選擇Swap Mode",-1),Ae=e("option",{value:"1"},"1",-1),Ue={class:"col-sm-6"},Re=e("label",{for:"functionCode",class:"form-label fs-5"},"Function Code：",-1),ze=e("option",{value:"",disabled:""},"請選擇Function Code",-1),Ge=e("option",{value:"1"},"1",-1),He={class:"col-sm-6"},Je=e("label",{for:"divisor",class:"form-label fs-5"},"除數：",-1),Ke={class:"col-sm-6"},Qe=e("label",{for:"reverse",class:"form-label fs-5"},"Reverse：",-1),We=e("option",{value:"",disabled:""},"請選擇Reverse",-1),Xe=e("option",{value:"1"},"1",-1),Ye={class:"col-sm-6"},Ze=e("label",{for:"virtualPointType",class:"form-label fs-5"},"虛擬節點類型：",-1),et=e("option",{value:"",disabled:""},"請選擇類型",-1),tt=e("option",{value:"1"},"1",-1),st={class:"col-sm-6"},ot=e("label",{for:"dataLength",class:"form-label fs-5"},"資料長度：",-1),lt=e("option",{value:"",disabled:""},"請選擇資料長度",-1),at=e("option",{value:"1"},"1",-1),nt={class:"col-sm-6"},dt=e("label",{for:"renewTime",class:"form-label fs-5"},"資料刷新時間（ms）：",-1),it={class:"text-center my-4"},ct=["disabled"],rt={__name:"PointEditModal",props:["controlElement"],setup(f){const y=f;function n(b){console.log(b),y.controlElement.hide()}return(b,v)=>{const l=V("VField"),$=V("VForm");return r(),_("div",xe,[e("div",Ve,[e("div",Fe,[Ee,e("div",Ce,[t($,{ref:"editPointForm",onSubmit:n},{default:a(({meta:i})=>[e("div",qe,[e("div",Me,[Pe,t(l,{type:"text",class:"form-control",name:"point_id",id:"point_id",placeholder:"請輸入點位ID"})]),e("div",je,[Ne,t(l,{type:"text",class:"form-control",name:"modBus",id:"modBus",placeholder:"請輸入名稱"})]),e("div",De,[Ie,t(l,{class:"form-select",id:"type",name:"type",as:"select",required:""},{default:a(()=>[Se,Be]),_:1})]),e("div",Le,[Oe,t(l,{class:"form-select",id:"swapMode",name:"swapMode",as:"select",required:""},{default:a(()=>[Te,Ae]),_:1})]),e("div",Ue,[Re,t(l,{class:"form-select",id:"functionCode",name:"functionCode",as:"select",required:""},{default:a(()=>[ze,Ge]),_:1})]),e("div",He,[Je,t(l,{type:"text",class:"form-control",name:"divisor",id:"divisor",placeholder:"請輸入數值"})]),e("div",Ke,[Qe,t(l,{class:"form-select",id:"reverse",name:"reverse",as:"select",required:""},{default:a(()=>[We,Xe]),_:1})]),e("div",Ye,[Ze,t(l,{class:"form-select",id:"virtualPointType",name:"virtualPointType",as:"select",required:""},{default:a(()=>[et,tt]),_:1})]),e("div",st,[ot,t(l,{class:"form-select",id:"dataLength",name:"dataLength",as:"select",required:""},{default:a(()=>[lt,at]),_:1})]),e("div",nt,[dt,t(l,{type:"text",class:"form-control",name:"renewTime",id:"renewTime",placeholder:"請輸入時間"})])]),e("div",it,[e("button",{type:"submit",class:O(["fw-semibold col-4 btn",[i.valid?"btn-primary":"btn-gray"]]),disabled:!i.valid}," 儲存 ",10,ct)])]),_:1},512)])])])])}}},_t={class:"offcanvas offcanvas-end p-3",tabindex:"-1","data-bs-backdrop":"static",id:"deviceToPoint","aria-labelledby":"deviceToPointOffcanvas"},ut=S('<div class="offcanvas-header justify-content-end"><button type="button" class="btn-close rounded-5 bg-gray" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><div class="title-word mt-1"><span class="colr-block"></span><h2 class="mb-0 fw-semibold">編輯裝置</h2></div>',2),bt={class:"offcanvas-body"},mt={class:"d-flex justify-content-between align-items-center mb-3"},vt=e("h3",{class:"fw-semibold"},"對應點位",-1),ft=e("thead",{class:"table-head"},[e("tr",null,[e("th",{scope:"col"},"點位ID"),e("th",{scope:"col"},"點位類型"),e("th",{scope:"col"},"起始暫存器"),e("th",{scope:"col"},"功能碼"),e("th",{scope:"col"},"交換模式"),e("th",{scope:"col"},[e("p",{class:"border-start border-2 ps-2 mb-0"},"操作")])])],-1),pt=e("td",null,"t",-1),ht=e("td",null,"float",-1),$t=e("td",null,"-",-1),yt=e("td",null,"-",-1),kt=e("td",null,"-",-1),wt={class:"offcanvs-footer"},gt={class:"btn-set d-flex flex-column align-items-center"},xt={class:"mt-5 d-flex gap-2 mb-3 w-75"},Vt=e("div",{class:"btn-group w-50",role:"group","aria-label":"Basic outlined"},[e("button",{type:"button",class:"btn btn-outline-black fs-5 border-0"},"匯出設定"),e("button",{type:"button",class:"btn btn-outline-black fs-5 border-0 border-start"},"匯入設定")],-1),Ft={__name:"DeviceToPointOffcanvas",props:["deviceToPointElement","deviceEditElement"],setup(f){const{swalSuccess:y}=D.setup(),n=c(null),b=c(null),v=f;function l(w){n.value.resetForm(),v.deviceToPointElement.hide(),v.deviceEditElement.hide(),y("已完成")}function $(w){console.log(w==="new"?"new":"Notnew"),b.value.show()}function i(){v.deviceToPointElement.hide()}function k(){console.log("edit Click")}function C(){console.log("delete Click")}return B(()=>{b.value=new I(document.querySelector("#editPointModal"),{keyboard:!1})}),(w,o)=>(r(),_(M,null,[e("div",_t,[ut,e("div",bt,[e("div",mt,[vt,e("button",{type:"button",class:"btn btn-outline-primary",onClick:o[0]||(o[0]=q=>$("new"))}," 新增節點 ")]),e("div",{class:"table-responsive"},[e("table",{class:"table table-hover"},[ft,e("tbody",null,[e("tr",null,[pt,ht,$t,yt,kt,e("td",null,[e("div",{class:"ps-2"},[e("button",{class:"btn btn-outline-primary border-0 fw-semibold",type:"button",onClick:k}," 編輯 "),e("button",{class:"btn btn-outline-danger border-0 fw-semibold",type:"button",onClick:C}," 刪除 ")])])])])])])]),e("div",wt,[e("div",gt,[e("div",xt,[e("button",{class:"btn btn-outline-gray text-black w-50",type:"button",onClick:o[1]||(o[1]=q=>i())}," 上一步 "),e("button",{class:"btn btn-primary w-50",type:"button",onClick:o[2]||(o[2]=q=>l(w.value))}," 完成 ")]),Vt])])]),t(rt,{"control-element":b.value},null,8,["control-element"])],64))}},Et={class:"offcanvas offcanvas-end account-offcanvas","data-bs-backdrop":"static",tabindex:"-1",id:"deviceEditOffcanvas","aria-labelledby":"staticBackdropLabel"},Ct={class:"offcanvas-header"},qt={class:"offcanvas-title fw-semibold",id:"staticBackdropLabel"},Mt={class:"title-word mt-1"},Pt=e("span",{class:"colr-block"},null,-1),jt={key:0},Nt={key:1},Dt={class:"offcanvas-body"},It=e("div",{class:"mb-3"},[e("h3",{class:"fw-lighter"},"裝置類型")],-1),St={class:"row g-3"},Bt={class:"col-8"},Lt=e("label",{for:"device-model",class:"form-label fs-5"},"型號：",-1),Ot=e("option",{value:"",disabled:""},"請選擇型號",-1),Tt=e("option",{value:"1"},"1",-1),At=e("div",{class:"separator"},null,-1),Ut={class:"col-8"},Rt=e("label",{for:"device_id",class:"form-label"},"裝置ID：",-1),zt={class:"col-8"},Gt=e("label",{for:"device_name",class:"form-label"},"裝置名稱：",-1),Ht={class:"col-8"},Jt=e("label",{for:"address",class:"form-label"},"Address：",-1),Kt={class:"col-12 d-flex select-lable-aligin gap-1"},Qt={class:"col-8"},Wt=e("label",{for:"department",class:"form-label"},"連線方式：",-1),Xt=e("option",{value:"",disabled:""},"請選擇連線方式",-1),Yt=e("option",{value:"1"},"1",-1),Zt={class:"col-2"},es={class:"col-2"},ts={class:"col-8"},ss=e("label",{for:"statu",class:"form-label"},"狀態：",-1),os=e("option",{value:"",disabled:""},"請選擇狀態",-1),ls=e("option",{value:"1"},"1",-1),as={class:"col-8"},ns=e("label",{for:"baudrate",class:"form-label"},"Baudrate：",-1),ds=e("option",{value:"",disabled:""},"請選擇",-1),is=e("option",{value:"1"},"1",-1),cs={class:"mt-5 text-center"},rs=["disabled"],_s={__name:"DeviceEditOffcanvas",props:["deviceEditElement","isNew","tempObject"],emits:["updateUserObject"],setup(f,{emit:y}){const n=f,b=y,v=c(null),l=c(null),$=c(n.departments),i=c(n.titles),k=c(null),C=c(null),w=c(null),o=U({id:"",account:"",name:"",phone:"",department:"",title:"",systemAccess:"",pageAccess:[{page:"",access:""}]});function q(u){u==="new"?v.value=!0:v.value=!1,C.value.show()}function j(){console.log(o),b("updateUserObject",o),k.value.resetForm(),w.value.show()}function g(){n.deviceEditElement.hide()}function p(u){const{arrayName:s,adjustedArray:h}=u;switch(s){case"title":i.value=h;break;case"department":$.value=h;break;default:console.error(u);break}}return B(()=>{C.value=new I(document.querySelector("#editLinkModal"),{keyboard:!1}),w.value=new L(document.querySelector("#deviceToPoint"),{keyboard:!1})}),N(()=>n.tempObject,u=>{u!==null&&Object.assign(o,u)},{immediate:!0}),N(()=>n.isNew,u=>{u&&k.value.resetForm()}),(u,s)=>{const h=V("VField"),x=V("ErrorMessage"),m=V("VForm");return r(),_(M,null,[e("div",Et,[e("div",Ct,[e("h2",qt,[e("div",Mt,[Pt,f.isNew?(r(),_("span",jt,"新增裝置")):(r(),_("span",Nt,"編輯裝置"))])]),e("button",{type:"button",class:"btn-close rounded-5 bg-gray","aria-label":"Close",onClick:s[0]||(s[0]=F=>g())})]),e("div",Dt,[It,t(m,{ref_key:"editDeviceForm",ref:k,class:"needs-validation"},{default:a(({meta:F})=>[e("div",St,[e("div",Bt,[Lt,t(h,{id:"device-model",name:"device-model",as:"select",class:"form-select",required:"",rules:"required",modelValue:o.model,"onUpdate:modelValue":s[1]||(s[1]=d=>o.model=d)},{default:a(()=>[Ot,Tt]),_:1},8,["modelValue"]),t(x,{as:"p",class:"invalid-feedback d-block mb-0",name:"device-model"})]),At,e("div",Ut,[Rt,t(h,{class:"form-control",id:"device_id",name:"device_id",type:"text",rules:"required",required:"",placeholder:"請輸入裝置ID",modelValue:o.device_id,"onUpdate:modelValue":s[2]||(s[2]=d=>o.device_id=d)},null,8,["modelValue"]),t(x,{as:"p",class:"invalid-feedback d-block mb-0",name:"device_id"})]),e("div",zt,[Gt,t(h,{class:"form-control",id:"device_name",name:"device_name",type:"text",required:"",rules:"required",placeholder:"請輸入裝置名稱",modelValue:o.device_name,"onUpdate:modelValue":s[3]||(s[3]=d=>o.device_name=d)},null,8,["modelValue"]),t(x,{as:"p",class:"invalid-feedback d-block mb-0",name:"device_name"})]),e("div",Ht,[Jt,t(h,{class:"form-control",id:"address",name:"address",type:"text",required:"",rules:"required",placeholder:"請輸入Address",modelValue:o.address,"onUpdate:modelValue":s[4]||(s[4]=d=>o.address=d)},null,8,["modelValue"]),t(x,{as:"p",class:"invalid-feedback d-block mb-0",name:"address"})]),e("div",Kt,[e("div",Qt,[Wt,t(h,{id:"department",name:"department",as:"select",class:"form-select",required:"",rules:"required",modelValue:o.department,"onUpdate:modelValue":s[5]||(s[5]=d=>o.department=d)},{default:a(()=>[Xt,Yt]),_:1},8,["modelValue"]),t(x,{as:"p",class:"invalid-feedback d-block mb-0",name:"department"})]),e("div",Zt,[e("button",{type:"button",class:"btn btn-outline-primary text-nowrap",onClick:s[6]||(s[6]=d=>q("new"))}," 新增 ")]),e("div",es,[e("button",{type:"button",class:"btn btn-outline-primary text-nowrap",onClick:s[7]||(s[7]=d=>q())}," 編輯 ")])]),e("div",ts,[ss,t(h,{id:"statu",name:"statu",as:"select",class:"form-select",required:"",rules:"required",modelValue:o.device_status,"onUpdate:modelValue":s[8]||(s[8]=d=>o.device_status=d)},{default:a(()=>[os,ls]),_:1},8,["modelValue"]),t(x,{as:"p",class:"invalid-feedback d-block mb-0",name:"statu"})]),e("div",as,[ns,t(h,{id:"baudrate",name:"baudrate",as:"select",class:"form-select",required:"",rules:"required",modelValue:o.baudrate,"onUpdate:modelValue":s[9]||(s[9]=d=>o.baudrate=d)},{default:a(()=>[ds,is]),_:1},8,["modelValue"]),t(x,{as:"p",class:"invalid-feedback d-block mb-0",name:"baudrate"})])]),e("div",cs,[e("button",{class:O(["btn btn-primary w-50",[F.valid?"btn-primary":"btn-gray"]]),disabled:!F.valid,type:"button",onClick:s[10]||(s[10]=d=>j())}," 下一步 ",10,rs)])]),_:1},512)])]),t(ge,{"temp-array":l.value,"is-new":v.value,"control-element":C.value,onDataAdjusted:p},null,8,["temp-array","is-new","control-element"]),t(Ft,{"device-to-point-element":w.value,"device-edit-element":f.deviceEditElement},null,8,["device-to-point-element","device-edit-element"])],64)}}},us={class:"container"},bs={class:"bg-white-box mb-2"},ms={class:"d-flex gap-2"},vs={class:""},fs=e("label",{for:"searchInput",class:"form-label"},"裝置ID、裝置名稱",-1),ps={class:""},hs=e("label",{for:"device",class:"form-label"},"裝置",-1),$s=e("option",{value:"",disabled:""},"請選擇裝置類型",-1),ys={class:""},ks=e("label",{for:"enabled-state",class:"form-label"},"啟用狀態",-1),ws=e("option",{value:"",disabled:""},"請選擇啟用狀態",-1),gs=e("option",{value:"up"},"啟用中",-1),xs=e("option",{value:"down"},"停用中",-1),Vs={class:""},Fs=e("label",{for:"link-state",class:"form-label"},"連線狀態",-1),Es=e("option",{value:"",disabled:""},"請選擇連線狀態",-1),Cs=e("option",{value:"",disabled:""},"123",-1),qs={class:"d-flex gap-2"},Ms=e("button",{type:"submit",class:"btn btn-gray fw-semibold text-white"}," 搜尋 ",-1),Ps={class:"d-flex justify-content-between align-items-end mb-2"},js=e("h4",{class:"fw-lighter"},"列表",-1),Ns={class:"d-flex gap-2 align-items-center me-2"},Ds={class:"mb-0 me-2"},Is={class:"bg-white-box"},Ss={class:"table-responsive"},Bs={class:"table table-hover"},Ls=e("thead",{class:"table-head"},[e("tr",null,[e("th",{scope:"col"},"排序"),e("th",{class:"table-img-col",scope:"col"},[e("p",{class:"border-start border-2 ps-2 mb-0"},"裝置ID")]),e("th",{scope:"col"},"裝置名稱"),e("th",{scope:"col"},"裝置類型"),e("th",{scope:"col"},"連線ID"),e("th",{scope:"col"},"站號"),e("th",{scope:"col"},"啟用狀態"),e("th",{scope:"col"},"連線狀態"),e("th",{scope:"col"},[e("p",{class:"border-start border-2 ps-2 mb-0"},"操作")])])],-1),Os={scope:"row",class:"text-center"},Ts={key:0,class:"device-statu device-link"},As={key:1,class:"device-statu"},Us={class:"ps-2"},Rs=["onClick"],zs=["onClick"],Gs={class:"modal fade",id:"delModal","data-bs-backdrop":"static",tabindex:"-1","aria-labelledby":"delModalLabel","aria-hidden":"true"},Hs={class:"modal-dialog modal-dialog-centered"},Js={class:"modal-content bg-white-box"},Ks=S('<div class="modal-header border-0"><div class="title-word"><span class="colr-block"></span><h2 class="mb-0 fw-semibold">刪除裝置</h2></div><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>',1),Qs={class:"modal-body"},Ws={class:"fw-semibold"},Xs={class:"d-flex gap-2 justify-content-center"},Ys=e("button",{type:"submit",class:"fw-semibold btn btn-outline-black w-50","data-bs-dismiss":"modal"}," 取消 ",-1),to={__name:"DeviceMangerView",setup(f){const{swalSuccess:y}=D.setup(),n=c(A.deviceDatas),b=c(null),v=c(null),l=c(null),$=c(null),i=c(null),k=c(null);function C(g){console.log(g)}function w(){k.value.resetForm()}function o(g,p){p==="new"?(l.value=!0,$.value={id:"",device_id:"",device_name:"",device_type:"",connect_id:"",station_id:"",enabled_status:!1,device_status:!1}):(l.value=!1,$.value={...g}),b.value.show()}function q(g){v.value.show(),i.value={...g}}function j(g){n.value=n.value.filter((p,u)=>p.id!==g),i.value=null,v.value.hide(),y("已刪除")}return B(()=>{b.value=new L("#deviceEditOffcanvas",{keyboard:!1}),v.value=new I("#delModal",{keyboard:!1})}),(g,p)=>{var x;const u=V("VField"),s=V("ErrorMessage"),h=V("VForm");return r(),_(M,null,[e("div",us,[t(T,{"nav-where":"devices"}),e("section",bs,[t(h,{class:"d-flex justify-content-between align-items-end",ref_key:"searchForm",ref:k,onSubmit:C},{default:a(()=>[e("div",ms,[e("div",vs,[fs,t(u,{type:"text",class:"form-control",name:"searchInput",id:"searchInput",placeholder:"請輸入ID、名稱"})]),e("div",ps,[hs,t(u,{class:"form-select",id:"device",name:"device",as:"select",required:""},{default:a(()=>[$s]),_:1}),t(s,{as:"p",class:"invalid-feedback d-block mb-0",name:"device"})]),e("div",ys,[ks,t(u,{class:"form-select",id:"enabled-state",name:"enabled-state",as:"select",required:""},{default:a(()=>[ws,gs,xs]),_:1}),t(s,{as:"p",class:"invalid-feedback d-block mb-0",name:"enabled-state"})]),e("div",Vs,[Fs,t(u,{class:"form-select",id:"link-state",name:"link-state",as:"select",required:""},{default:a(()=>[Es,Cs]),_:1}),t(s,{as:"p",class:"invalid-feedback d-block mb-0",name:"link-state"})])]),e("div",qs,[e("button",{type:"button",class:"btn btn-outline-gray fw-semibold",onClick:p[0]||(p[0]=m=>w())}," 清除 "),Ms])]),_:1},512)]),e("section",null,[e("div",Ps,[js,e("div",Ns,[e("p",Ds,"共計："+E(n.value.length)+" 筆",1),e("button",{class:"btn btn-outline-primary fw-lighter",type:"button",onClick:p[1]||(p[1]=m=>o($.value,"new"))}," 新增裝置 ")])]),e("div",Is,[e("div",Ss,[e("table",Bs,[Ls,e("tbody",null,[(r(!0),_(M,null,R(n.value,(m,F)=>(r(),_("tr",{key:m.id},[e("th",Os,E(F+1),1),e("td",null,E(m.device_id),1),e("td",null,E(m.device_name),1),e("td",null,E(m.device_type),1),e("td",null,E(m.connect_id),1),e("td",null,E(m.station_id),1),e("td",null,[m.enabled_status===!0?(r(),_(M,{key:0},[P(" 啟用中 ")],64)):(r(),_(M,{key:1},[P(" 停用中 ")],64))]),e("td",null,[m.device_status?(r(),_("span",Ts,"連線中")):(r(),_("span",As,"斷線中"))]),e("td",null,[e("div",Us,[e("button",{type:"button",class:"btn btn-outline-primary border-0 fw-light",onClick:d=>o(m)}," 編輯 ",8,Rs),e("button",{type:"button",class:"btn btn-outline-danger border-0 fw-light",onClick:d=>q(m)}," 刪除 ",8,zs)])])]))),128))])])])])])]),t(_s,{"is-new":l.value,"temp-object":$.value,"device-edit-element":b.value},null,8,["is-new","temp-object","device-edit-element"]),e("div",Gs,[e("div",Hs,[e("div",Js,[Ks,e("div",Qs,[e("p",null,[P(" 確定要刪除 "),e("span",Ws,E((x=i.value)==null?void 0:x.device_name),1),P(" 裝置嗎？ ")]),e("div",Xs,[e("button",{type:"submit",class:"fw-semibold btn btn-danger w-50",onClick:p[2]||(p[2]=m=>{var F;return j((F=i.value)==null?void 0:F.id)})}," 確定刪除 "),Ys])])])])])],64)}}};export{to as default};