import{O as m,d as h}from"./bootstrap.esm-Rs7Aj1ey.js";import{a as y,h as _,b as t,d as e,e as d,w as n,t as l,u as r,F as b,i as g,f as p,r as x,o as a,j as v}from"./index-vbB4Mj9z.js";const k={class:"container"},w={class:"list-unstyled d-flex page-box mb-4"},q={class:"page-item"},F={class:"page-item"},C=p('<section class="bg-white-box mb-2"><form class="d-flex justify-content-between align-items-end"><div class="d-flex gap-2"><div class=""><label for="exampleFormControlInput1" class="form-label">點位ID、點位名稱</label><input type="text" class="form-control" id="exampleFormControlInput1" placeholder="請輸入ID、名稱"></div><div class=""><label for="country" class="form-label">裝置</label><select class="form-select" id="country" required=""><option value="">請選擇裝置</option><option>United States</option></select><div class="invalid-feedback">Please select a valid country.</div></div><div class=""><label for="country2" class="form-label">點位類型</label><select class="form-select" id="country2" required=""><option value="">請選擇狀態</option><option>United States</option></select><div class="invalid-feedback">Please select a valid country.</div></div><div class=""><label for="country2" class="form-label">狀態</label><select class="form-select" id="country2" required=""><option value="">請選擇狀態</option><option>United States</option></select><div class="invalid-feedback">Please select a valid country.</div></div></div><div class="d-flex gap-2"><button type="submit" class="btn btn-outline-gray fw-semibold"> 清除 </button><button type="submit" class="btn btn-gray fw-semibold text-white"> 搜尋 </button></div></form></section>',1),M={class:"d-flex justify-content-between align-items-end mb-2"},S=e("h4",{class:"fw-lighter"},"列表",-1),E={class:"d-flex gap-2 align-items-center me-2 mt-1 mb-2"},D={class:"mb-0 me-2 fw-lighter"},I={class:"bg-white-box"},L={class:"table-responsive"},N={class:"table table-hover"},O=e("thead",{class:"table-head"},[e("tr",null,[e("th",{scope:"col"},"排序"),e("th",{class:"table-img-col",scope:"col"},[e("p",{class:"border-start border-2 ps-2 mb-0"},"點位ID")]),e("th",{scope:"col"},"點位名稱"),e("th",{scope:"col"},"點位類型"),e("th",{scope:"col"},"Reg"),e("th",{scope:"col"},"方法"),e("th",{scope:"col"},"狀態"),e("th",{scope:"col"},"數值"),e("th",{scope:"col"},[e("p",{class:"border-start border-2 ps-2 mb-0"},"操作")])])],-1),V={scope:"row",class:"text-center"},j={key:0,class:"device-statu device-link"},B={key:1,class:"device-statu"},U=p('<div class="offcanvas offcanvas-end account-offcanvas" tabindex="-1" data-bs-backdrop="staticSS" id="locationEditOffcanvas" aria-labelledby="locationEditOffcanvasLabel"><div class="offcanvas-header justify-content-end"><button type="button" class="btn-close rounded-5 bg-gray" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><div class="title-word mt-1"><span class="colr-block"></span><h2 class="mb-0 fw-lighter">編輯點位 </h2></div><div class="offcanvas-body"><h3 class="fw-lighter">點位基本資料</h3><form class="needs-validation" novalidate=""><div class="row g-3"><div class="col-8"><label for="account" class="form-label">點位類型：</label><input type="text" class="form-control" id="account" value="" required="" placeholder="請輸入點位類型"><div class="invalid-feedback">Account is required.</div></div><div class="col-8"><label for="system-access" class="form-label">點位節點：</label><select class="form-select" id="system-access" required=""><option value="">請選擇點位節點</option><option>1</option></select><div class="invalid-feedback">Please select a valid country.</div></div><div class="col-8"><label for="name" class="form-label">點位名稱：</label><input type="text" class="form-control" id="name" placeholder="請輸入點位名稱"><div class="invalid-feedback">Name is required.</div></div><div class="col-8"><label for="tel" class="form-label">資料數值： </label><input type="text" class="form-control" id="tel" placeholder="請輸入資料數值"><div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div></div><div class="col-12 d-flex align-items-end gap-2"><div class="col-8"><label for="department" class="form-label">設定數值： </label><select class="form-select" id="department" required=""><option value="">請輸入設定數值</option><option>1</option></select><div class="invalid-feedback"> Please select a valid department. </div></div><div class="col-4"><button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> 點位復歸 </button></div></div><div class="col-8"><label for="system-access" class="form-label">緊急通知：</label><select class="form-select" id="system-access" required=""><option value="">請選擇是否需要緊急通知</option><option>1</option></select><div class="invalid-feedback">Please select a valid country.</div></div><div class="col-8"><label for="system-access" class="form-label">連動攝影機：</label><select class="form-select" id="system-access" required=""><option value="">請選擇攝影機</option><option>1</option></select><div class="invalid-feedback">Please select a valid country.</div></div></div><div class="mt-5 text-center"><button class="btn btn-primary w-50" type="submit">儲存</button></div></form></div></div><div class="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content bg-white-box"><div class="modal-header border-0"><div class="title-word"><span class="colr-block"></span><h2 class="mb-0 fw-semibold">新增節點</h2></div><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div class="mb-3"><div class="col-6"><label for="inputField" class="form-label fs-5">單位名稱：</label><input type="text" class="form-control" id="inputField" placeholder="請輸入單位名稱"></div><div class="col-6"><label for="inputField" class="form-label fs-5">單位名稱：</label><input type="text" class="form-control" id="inputField" placeholder="請輸入單位名稱"></div></div><div class="text-center"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> 儲存 </button></div></div></div></div></div>',2),G={__name:"LocationMangerView",setup(P){const{locationPointDatas:o}=h;function u(){i.value.show()}const i=y(null);return _(()=>{i.value=new m("#locationEditOffcanvas",{keyboard:!1})}),(A,R)=>{const c=x("router-link");return a(),t(b,null,[e("div",k,[e("ul",w,[e("li",q,[d(c,{to:"/devices/devicesManger",class:"page-link fs-4"},{default:n(()=>[v("裝置列表")]),_:1})]),e("li",F,[d(c,{to:"/devices/locationManger",class:"page-link fs-4"},{default:n(()=>[v("點位列表")]),_:1})])]),C,e("section",null,[e("div",M,[S,e("div",E,[e("p",D,"共計："+l(r(o).length)+" 筆",1)])]),e("div",I,[e("div",L,[e("table",N,[O,e("tbody",null,[(a(!0),t(b,null,g(r(o),(s,f)=>(a(),t("tr",{key:s.id},[e("th",V,l(f+1),1),e("td",null,l(s.point_id),1),e("td",null,l(s.point_name),1),e("td",null,l(s.point_type),1),e("td",null,l(s.reg),1),e("td",null,l(s.method),1),e("td",null,[s.status?(a(),t("span",j,"連線中")):(a(),t("span",B,"斷線中"))]),e("td",null,l(s.value),1),e("td",null,[e("div",{class:"ps-2"},[e("button",{class:"btn btn-outline-primary border-0 fw-lighter",type:"button",onClick:u}," 編輯 ")])])]))),128))])])])])])]),U],64)}}};export{G as default};
