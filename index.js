!function(e){var t={};function o(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n=[];function s(e){n.push(e)}var r,a;!function(){console.log("hookFetch");const e=unsafeWindow.fetch;unsafeWindow.fetch=function(t,o){console.log("fetch called");const s=e.apply(null,arguments);return s.then((function(e){return e.text().then((function(s){return n.forEach(n=>{n(o.method||"GET",t,s,e.status)}),new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})}))}))}}(),r=unsafeWindow.XMLHttpRequest,(a=function(){function e(e){Object.defineProperty(this,e,{get:function(){return this.xhr[e]},set:function(e){this.xhr.timeout=e}})}this.xhr=new r,e.call(this,"timeout"),e.call(this,"responseType"),e.call(this,"withCredentials"),e.call(this,"onerror"),e.call(this,"onabort"),e.call(this,"onloadstart"),e.call(this,"onloadend"),e.call(this,"onprogress")}).prototype.open=function(e,t,o,s,r){var a=this;function i(o){a.responseText=a.xhr.responseText;for(var s=0;s<n.length;s++)try{n[s](e,t,a.responseText,a.xhr.status)}catch(e){console.error(e.stack)}}function c(){a.readyState=a.xhr.readyState,a.responseText=a.xhr.responseText,a.responseURL=a.xhr.responseURL,a.responseXML=a.xhr.responseXML,a.status=a.xhr.status,a.statusText=a.xhr.statusText}this.xhr.open(e,t,o,s,r),this.xhr.onload=function(e){if(a.onload)return c(),4===a.xhr.readyState&&i(),a.onload(e)},this.xhr.onreadystatechange=function(e){if(a.onreadystatechange)return c(),4===a.xhr.readyState&&i(),a.onreadystatechange(e)}},a.prototype.addEventListener=function(e,t){return this.xhr.addEventListener(e,t)},a.prototype.send=function(e){return this.xhr.send(e)},a.prototype.abort=function(){return this.xhr.abort()},a.prototype.getAllResponseHeaders=function(){return this.xhr.getAllResponseHeaders()},a.prototype.getResponseHeader=function(e){return this.xhr.getResponseHeader(e)},a.prototype.setRequestHeader=function(e,t){return this.xhr.setRequestHeader(e,t)},a.prototype.overrideMimeType=function(e){return this.xhr.overrideMimeType(e)},unsafeWindow.XMLHttpRequest=a;const i=".c_left_box .angular-ui-tree-node .dep-tree-pos-btn .iconfont.icon-collapsed",c=".c_left_box .angular-ui-tree-node .dep-name",l="/dingtalk/web/query/dashboard",d="/dingtalk/web/query/oaDesigner",u="/contacts.htm",f={getMgrProcessList:"/dingtalk/web/query/process/getMgrProcessList.json",getFormAndProcessConfigV2:"/dingtalk/web/query/form/getFormAndProcessConfigV2.json",getProcessManagerList:"/dingtalk/web/query/process/getProcessManagerList.json",getProcessVisible:"/dingtalk/web/query/process/getProcessVisible.json",getProcessDataVisible:"/dingtalk/web/query/process/getProcessDataVisible.json",getNoticeSetting:"/dingtalk/web/query/paasForm/getNoticeSetting.json",getProcessConf:"/dingtalk/web/query/process/getProcessConf.json",getDeptChainInfo:"/omp/dept/get_dept_chain_info",getDeptStaff:"/omp/emp/dept_staff"},p="https://aflow.dingtalk.com/dingtalk/web/query/dashboard#/aflowSetting",g=e=>`https://aflow.dingtalk.com/dingtalk/web/query/oaDesigner?from=oaAdminHomeWeb&processCode=${e}#/`,h="https://oa.dingtalk.com/contacts.htm#/contacts";function m(e){return new Promise((t,o)=>{s((function o(s,r,a,i){e(s,r,a,i)&&(!function(e){const t=n.indexOf(e);t>=0&&n.splice(t,1)}(o),t())}))})}async function y(e,t,o){const n=GM_openInTab(e,o),s=await function(e){return new Promise((t,o)=>{function n(){GM_removeValueChangeListener(e,n),GM_removeValueChangeListener("errMsg",s);const o=GM_getValue(e);GM_deleteValue(o),t(JSON.parse(o))}function s(){GM_removeValueChangeListener(e,n),GM_removeValueChangeListener("errMsg",s),o(new Error(GM_getValue("errMsg")))}GM_addValueChangeListener(e,n),GM_addValueChangeListener("errMsg",s)})}(t);return await w(300),n.close(),s}function w(e){return new Promise(t=>setTimeout(t,e))}const b="1"===GM_getValue("exporting","0");function x(e){GM_setValue("errMsg",e||"导出失败。")}if(console.log(location.pathname),b)if(console.log("Exporting..."),location.pathname===l)s(async(e,t,o,n)=>{if(console.log(t,n),200!==n)return console.error("network request error."),void x();if(t===f.getMgrProcessList){const e=JSON.parse(o).data.sortedDirProcessList;GM_setValue("mgrProcessList",JSON.stringify(e))}});else if(location.pathname===d){const e={getFormAndProcessConfigV2:null,getProcessManagerList:null,getProcessVisible:null,getProcessDataVisible:null,getNoticeSetting:null,getProcessConf:null};s(async(t,o,n,s)=>{if(console.log(o,s),200!==s)return console.error("network request error."),void x();let r=!0;for(const t of Object.keys(e))o===f[t]?(console.log(t),e[t]=JSON.parse(n).data):e[t]||(r=!1);r&&GM_setValue("mgrProcessData",JSON.stringify(e))})}else location.pathname===u&&async function(){const e={},t={};async function o(){let t="";return await m((o,n,s,r)=>{n.startsWith("/")&&(n=location.origin+n),n=new URL(n);const a=new URLSearchParams(n.search);if(n.pathname===f.getDeptChainInfo)return t=a.get("deptIds"),console.log("getDeptChainInfo",t),e[t]=JSON.parse(s).result,!0}),t}async function n(){let e="";const o=[];let n=!1;for(await m((t,s,r,a)=>{s.startsWith("/")&&(s=location.origin+s),s=new URL(s);const i=new URLSearchParams(s.search);if(s.pathname===f.getDeptStaff){e=i.get("deptId"),console.log("getDeptStaff",e);const t=JSON.parse(r).result;n=t.hasMore;for(const e of t.orgEmpExtVOList)o.push(e);return!0}});n;)console.log("hasMore"),await w(500),window.scrollBy(0,1e4),await m((t,s,r,a)=>{s.startsWith("/")&&(s=location.origin+s),s=new URL(s);const i=new URLSearchParams(s.search);if(s.pathname===f.getDeptStaff){if(i.get("deptId")!==e)return;const t=JSON.parse(r).result;n=t.hasMore;for(const e of t.orgEmpExtVOList)o.push(e);return!0}});return t[e]=o,e}async function s(){await Promise.all([o(),n()])}for(await s(),await function(e){return new Promise(t=>{const o=new MutationObserver(()=>{const n=document.querySelector(e);n&&(t(n),o.disconnect())});o.observe(document.body,{attributes:!0,childList:!0,characterData:!0,subtree:!0})})}(i);;){const e=document.querySelectorAll(i);let t=!1;for(const o of e)58901===o.textContent.charCodeAt(0)&&(o.parentElement.click(),await w(200),t=!0);if(!t)break}for(await w(2e3);;){window.scrollTo(0,0),await w(500);let e=!1,t=!1;for(const o of document.querySelectorAll(c))if(o.classList.contains("dep-name-hl"))e=!0;else if(e){console.log("click",o),o.click(),await s(),t=!0;break}if(!t)break}console.log(e,t),GM_setValue("contactsData",JSON.stringify({deptChainInfo:e,deptStaff:t})),window.close()}();function v(e,t,o,n){return{id:t.getFormAndProcessConfigV2.processCode,name:e.flowTitle,description:e.description,managers:t.getProcessManagerList.map(e=>o[e.staffId]),visibleUsers:t.getProcessVisible.filter(e=>1===e.visibleType).map(e=>o[e.visibleValue]),visibleDepartments:t.getProcessVisible.filter(e=>0===e.visibleType).map(e=>n[e.visibleValue]),icon:e.iconUrl,form:t.getFormAndProcessConfigV2.formVo.content}}window.location.pathname===l&&GM_registerMenuCommand("导出",(async function(){if(!confirm("确定要导出吗？导出开始后，请静候片刻，暂时不要操作浏览器，直到导出完成。"))return;GM_listValues().forEach(e=>{GM_deleteValue(e)}),GM_setValue("exporting","1");const e=function(){const e=document.createElement("div");e.className="ant-modal-root",e.innerHTML='\n  <div class="ant-modal-mask"></div>\n  <div tabindex="-1" class="ant-modal-wrap " role="dialog" aria-labelledby="rcDialogTitle0" style=""><div role="document" class="ant-modal" style="width: 520px; transform-origin: 164px 282px;"><div tabindex="0" aria-hidden="true" style="width: 0px; height: 0px; overflow: hidden; outline: none;"></div><div class="ant-modal-content" style="padding: 100px; width: 520px; height: 240px">\n\n    <div class="ant-progress ant-progress-line ant-progress-status-normal ant-progress-show-info ant-progress-default"><div class="ant-progress-outer"><div class="ant-progress-inner"><div class="ant-progress-bg" style="width: 0%; height: 8px;"></div></div></div><span class="ant-progress-text" title="0%">0%</span></div>\n\n  </div><div tabindex="0" aria-hidden="true" style="width: 0px; height: 0px; overflow: hidden; outline: none;"></div></div></div>\n',document.body.appendChild(e);const t=e.querySelector(".ant-progress-bg"),o=e.querySelector(".ant-progress-text");return{update:function(e){const n=100*e+"%",s=Math.floor(100*e)+"%";t.style.width=n,o.setAttribute("title",s),o.textContent=s},destroy:function(){e.parentElement.removeChild(e)}}}();try{const t=await y(p,"mgrProcessList"),o=t.map(e=>e.sortedProcessAndFormVoList.filter(e=>e.canManage).length).reduce((e,t)=>e+t,0)+1;let n=1;e.update(n/o);const s={};console.log(t);for(const r of t)for(const t of r.sortedProcessAndFormVoList){if(!t.canManage)continue;const r=await y(g(t.processCode),"mgrProcessData");s[t.processCode]=r,e.update(++n/o),console.log(r)}const r=await y(h,"contactsData",{active:!0});console.log(r),GM_setValue("exporting","0"),await function(e,t){"object"==typeof e&&(e=JSON.stringify(e,void 0,4));var o=new Blob([e],{type:"text/json"});const n=window.URL.createObjectURL(o);var s=document.createElement("a");s.setAttribute("href",n),s.setAttribute("download",t),document.body.appendChild(s),s.click(),document.body.removeChild(s)}(function({mgrProcessList:e,itemDetail:t,contacts:o}){const n=[],s={},r={};for(const e of Object.keys(o.deptChainInfo)){const t=o.deptChainInfo[e].map(e=>e.name),n=t.pop();r[e]={name:n,parentDepartments:t}}for(const e of Object.keys(o.deptStaff))for(const t of o.deptStaff[e])s[t.staffId]?s[t.staffId].departments.push(r[e]):s[t.staffId]={name:t.name,departments:[r[e]]};for(const o of e){const e={name:o.dirName,approvals:o.sortedProcessAndFormVoList.filter(e=>e.canManage).map(e=>v(e,t[e.processCode],s,r))};n.push(e)}return{groups:n}}({mgrProcessList:t,itemDetail:s,contacts:r}),`dingtalk_approval_data_v2_${Date.now()}.json`),alert("导出成功")}catch(e){alert(e.message)}finally{e.destroy()}})),console.log("Page reloaded.")}]);
