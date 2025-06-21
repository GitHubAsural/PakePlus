const N='<object id="WebBrowser" classid="clsid:8856F961-340A-11D0-A96B-00C04FD705A2" width="0" height="0"></object>',H="ele-printer-frame",D="ele-printer-style",E="ele-printer-set",$="ele-printer-loading",h="ele-printer-printing",m="ele-printer-hide",w="ele-printer-hide-none";function j(e=8){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let n="p_";for(let l=0;l<e;l++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function b(){return!!window.ActiveXObject||"ActiveXObject"in window}function C(){const e=document.getElementById(H);e&&e.parentNode&&e.parentNode.removeChild(e);const t=document.createElement("iframe");return t.id=H,t.style.width="0px",t.style.height="0px",t.style.position="fixed",t.style.visibility="hidden",document.body.appendChild(t),t.focus(),t}function P(e=!1){return`
    @media print {
      html, body {
        padding: 0;
        margin: 0;
      }
    }

    /* 打印时不显示的元素 */
    .${m}.${h} {
      visibility: hidden !important;
    }
    .${m} {
      ${e?"visibility: hidden !important;":""}
    }
    .${m}.${h}.${w},
    .${m}.${w}${e?"":"-no"} {
      display: none !important;
    }

    /* 表格样式 */
    .ele-printer-table {
      width: 100%;
      border-collapse: collapse;
      border: none;
    }
    .ele-printer-table td, .ele-printer-table th {
      color: #333;
      padding: 9px 15px;
      border: 1px solid #333;
      word-break: break-all;
    }

    /* loading 样式 */
    #${$} {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: hsla(0, 0%, 100%, .9);
      z-index: 19000000;
    }
    #${$}:after {
      content: "";
      width: 40px;
      height: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -20px auto auto -20px;
      border: 2px solid #3296FA;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-radius: 50%;
      animation: ele-printer-loading-anim .8s linear infinite;
    }
    @keyframes ele-printer-loading-anim {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    /* 带页眉页脚页面样式 */
    .ele-printer-table-page {
      width: 100%;
      border-collapse: collapse;
      border: none;
    }
    .ele-printer-table-page td {
      padding: 0;
      border: none;
    }
  `}function F(e,t,n){return`
    <style>
      body {
        margin: 0 !important;
      }

      /* 自定义边距及宽高样式 */
      .ele-printer-page .ele-printer-page-item {
        width: ${t!=null?t:"auto"};
        height: ${n!=null?n:"auto"};
        padding: ${e!=null?e:"0"};
        page-break-after: always !important;
        box-sizing: border-box !important;
        border: none !important;
        position: relative;
      }

      /* 调试模式样式 */
      .ele-printer-page.ele-printer-debug .ele-printer-page-item {
        border: 1px solid red !important;
      }

      /* 全局样式 */
      ${P(!0)}
    </style>
  `}function T(e){const{beforeJs:t,doneJs:n}=M(e.before,e.done),r=(e.blank||e.iePreview!==!1&&b())&&e.close!==!1?"window.close();":"",o="parent.hideElePrinterLoading&&parent.hideElePrinterLoading();",i=[];return i.push(`<style type="text/css" media="print" id="${E}">`),i.push("@page {"),typeof e.horizontal<"u"&&i.push(`size: ${e.horizontal?"landscape":"portrait"};`),e.margin!=null&&i.push(`margin: ${e.margin};`),i.push("}"),i.push("</style>"),e.iePreview!==!1&&b()?(i.push(N),e.print!==!1&&i.push(`
        <script>
          window.onload = function() {
            ${t}
            try {
              window.WebBrowser.ExecWB(7, 1);
            } catch(e) {
              console.error(e);
              window.print();
            }
            ${o}
            ${n}
            ${r}
          }
        <\/script>
      `)):e.print!==!1&&i.push(`
      <script>
        window.onload = function() {
          ${t}
          window.print();
          ${o}
          ${n}
          ${r}
        }
      <\/script>
    `),i.join("")}function I(){if(!document.getElementById(D)){const e=document.createElement("style");e.id=D,e.setAttribute("type","text/css"),e.innerHTML=P(),document.body.appendChild(e)}}function O(e,t,n){if(!t&&!n)return e!=null?e:"";let l='<table class="ele-printer-table-page">';return t&&(l+=`<thead><tr><td>${t}</td></tr></thead>`),l+=`<tbody><tr><td>${e!=null?e:""}</td></tr></tbody>`,n&&(l+=`<tfoot><tr><td>${n}</td></tr></tfoot>`),l+"</table>"}function M(e,t){const n="p"+j();window.elePrinterBefore||(window.elePrinterBefore={}),window.elePrinterDone||(window.elePrinterDone={}),e&&(window.elePrinterBefore[n]=e),t&&(window.elePrinterDone[n]=t);const l=`;parent.elePrinterBefore&&parent.elePrinterBefore.${n}&&parent.elePrinterBefore.${n}();`,r=`;parent.elePrinterDone&&parent.elePrinterDone.${n}&&parent.elePrinterDone.${n}();`;return{taskId:n,beforeJs:l,doneJs:r}}function _(e,t){var n,l;if(Array.prototype.forEach.call(document.getElementsByClassName(m),o=>{o!=null&&o.classList&&o.classList.add(h)}),!e)return;const r=(Array==null?void 0:Array.isArray(e))||((n=NodeList==null?void 0:NodeList.prototype)==null?void 0:n.isPrototypeOf(e))||((l=HTMLCollection==null?void 0:HTMLCollection.prototype)==null?void 0:l.isPrototypeOf(e));Array.prototype.forEach.call(r?e:[e],o=>{typeof o=="string"?Array.prototype.forEach.call(document.querySelectorAll(o),i=>{i!=null&&i.classList&&(i.classList.add(m),i.classList.add(h),t&&i.classList.add(w))}):o!=null&&o.classList&&(o.classList.add(m),o.classList.add(h),t&&o.classList.add(w))})}function k(e){var t,n;if(Array.prototype.forEach.call(document.getElementsByClassName(m),r=>{r!=null&&r.classList&&r.classList.remove(h)}),!e)return;const l=(Array==null?void 0:Array.isArray(e))||((t=NodeList==null?void 0:NodeList.prototype)==null?void 0:t.isPrototypeOf(e))||((n=HTMLCollection==null?void 0:HTMLCollection.prototype)==null?void 0:n.isPrototypeOf(e));Array.prototype.forEach.call(l?e:[e],r=>{typeof r=="string"?Array.prototype.forEach.call(document.querySelectorAll(r),o=>{o!=null&&o.classList&&(o.classList.remove(m),o.classList.remove(h),o.classList.remove(w))}):r!=null&&r.classList&&(r.classList.remove(m),r.classList.remove(h),r.classList.remove(w))})}function B(){I();let e=document.getElementById($);return e||(e=document.createElement("div"),e.id=$,document.body.appendChild(e)),e.style.display="block",window.hideElePrinterLoading=()=>{A()},e}function A(){const e=document.getElementById($);e&&(e.style.display="none")}function R(e={}){var t;window.focus(),I();const n=document.getElementById(E);n&&n.parentNode&&n.parentNode.removeChild(n);const l=[];if(typeof e.horizontal=="boolean"&&l.push(`size: ${e.horizontal?"landscape":"portrait"};`),e.margin!=null&&l.push(`margin: ${e.margin};`),l){const i=document.createElement("style");i.id=E,i.setAttribute("type","text/css"),i.setAttribute("media","print"),i.innerHTML=`@page { ${l.join("")} }`,document.body.appendChild(i)}_(e.hide,e.isHideNone);const r=document.title;e.title&&(document.title=e.title);let o;if(e.blank){if(o=window.open("","_blank"),o){o.focus();const i=o.document;if(i){i.open();let p="<!DOCTYPE html>"+((t=document.getElementsByTagName("html")[0])==null?void 0:t.outerHTML);p=p.replace(/<script/g,'<div style="display:none;" ').replace(/<\/script>/g,"</div>");const g=function(v){p=p.replace(/<\/html>/,`${v}</html>`)};e.iePreview!==!1&&b()?(document.getElementById("WebBrowser")||g(N),g(`
          <script>
            window.onload = function() {
              try {
                window.WebBrowser.ExecWB(7,1);
              } catch(e) {
                console.error(e);
                window.print();
              }
              ${e.close!==!1?"window.close();":""}
            }
          <\/script>
          `)):g(`
          <script>
            window.onload = function() {
              window.print();
              ${e.close!==!1?"window.close();":""}
            }
          <\/script>
          `),i.write(p),i.close()}}}else if(o=window,e.iePreview!==!1&&b()){if(!document.getElementById("WebBrowser")){const i=document.createElement("object");i.id="WebBrowser",i.setAttribute("classid","clsid:8856F961-340A-11D0-A96B-00C04FD705A2"),i.style.display="none",document.body.appendChild(i)}try{window.WebBrowser.ExecWB(7,1)}catch(i){console.error(i),o.print()}}else o.print();return e.title&&(document.title=r),k(e.hide),o}function z(e){var l,r;e.loading!==!1&&e.blank!==!0&&B();let t,n;if(e.blank||e.iePreview!==!1&&b())t=window.open("","_blank"),n=t==null?void 0:t.document;else{const o=C();t=o.contentWindow,n=o.contentDocument||(t==null?void 0:t.document)}return t&&(t.focus(),n&&e.html&&(n.open(),n.write(`
        <!DOCTYPE html>
        <head>
          <meta charset="UTF-8"/>
          <title>${(l=e.title)!=null?l:""}</title>
          <style>
            ${P(!0)}
          </style>
          ${(r=e.style)!=null?r:""}
        </head>
        <html>
        <body>
          ${O(e.html,e.header,e.footer)}
          ${T(e)}
        </body>
        </html>
      `),n.close())),t}function G(e){var r,o,i;var t;e.loading!==!1&&e.blank!==!0&&B();let n,l;if(e.blank||e.iePreview!==!1&&b())n=window.open("","_blank"),l=n==null?void 0:n.document;else{const p=C();n=p.contentWindow,l=p.contentDocument||(n==null?void 0:n.document)}if(n&&l){n.focus();const p=(r=(t=e.pages)==null?void 0:t.map(x=>`<div class="ele-printer-page-item">${x}</div>`).join(""))!=null?r:"",v=`<div class="${"ele-printer-page"+(e.isDebug?" ele-printer-debug":"")}">${p}</div>`;l.open(),l.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8"/>
          <title>${(o=e.title)!=null?o:""}</title>
          ${F(e.padding,e.width,e.height)}
          ${(i=e.style)!=null?i:""}
        </head>
        <body>
        ${O(v,e.header,e.footer)}
        ${T(e)}
        </body>
      </html>
    `),l.close()}return n}function J(e){e.loading!==!1&&B();const t=C(),n=t.contentWindow;t.onload=()=>{t.getAttribute("src")&&(t.focus(),e.before&&e.before(),n==null||n.print(),A(),e.done&&e.done())};function l(r){const o=new window.Blob([r],{type:"application/pdf"});window.navigator&&window.navigator.msSaveOrOpenBlob?(window.navigator.msSaveOrOpenBlob(o,"print.pdf"),A()):t.setAttribute("src",window.URL.createObjectURL(o))}if(e.arraybuffer)l(e.arraybuffer);else if(e.url){const r=new window.XMLHttpRequest;r.open("GET",e.url,!0),r.responseType="arraybuffer",r.onload=()=>{if([200,201].indexOf(r.status)===-1)return e.error&&e.error(r.status,r.statusText);l(r.response)},r.send()}return n}function X(e,t){t.forEach(a=>{a.forEach(s=>{s.INIT_OK=void 0,s.key=void 0,s.colGroup=void 0,s.HAS_PARENT=void 0,s.parentKey=void 0,s.PARENT_COL_INDEX=void 0})});const n=[];let l=0;for(let a=0;a<t.length;a++){const s=t[a];for(let d=0;d<s.length;d++){const c=s[d];if(!c){s.splice(d,1);continue}c.key=a+"-"+d;let L;if(c.colGroup||c.colspan&&c.colspan>1){c.colGroup=!0,L=[],l++;let f=0;for(let y=0;y<t[a+1].length;y++){const u={...t[a+1][y]};if(u.HAS_PARENT||f>1&&f==c.colspan){t[a+1][y]=u;continue}u.HAS_PARENT=!0,u.parentKey=a+"-"+d,u.key=a+1+"-"+y,u.PARENT_COL_INDEX=l,L.push(u),f=f+Number(u.colspan&&u.colspan>1?u.colspan:1),t[a+1][y]=u}}c.CHILD_COLS=L,c.PARENT_COL_INDEX||n.push(c),t[a][d]=c}}const r=function(a,s){s||(s=n);for(let d=0;d<s.length;d++){const c=s[d];a&&a(d,c),c.CHILD_COLS&&r(a,c.CHILD_COLS)}};let o=1,i=!0;const p=[];r((a,s)=>{s.colGroup||(p.push("<col"),s.width&&p.push(` width="${s.width}"`),p.push("/>"),s.width&&!/\d+%$/.test(String(s.width))?o+=s.width+1:i=!1)});const v="<thead>"+t.map(a=>"<tr>"+a.map(d=>`<th
                    colspan="${d.colspan||1}"
                    rowspan="${d.rowspan||1}"
                    align="${d.thAlign||d.align||"left"}"
                    style="${d.thStyle}">${d.title||""}
                  </th>`).join("")+"</tr>").join("")+"</thead>",W="<tbody>"+e.map((a,s)=>{const d=["<tr>"];let c=0;return r((L,f)=>{if(!f.colGroup){const y=f.field?a[f.field]:"",u=f.templet?f.templet(a,s,c):y,S=f.align||"left";d.push(`<td align="${S}" style="${f.style}">${u}</td>`),c++}}),d.push("</tr>"),d.join("")}).join("")+"</tbody>";return`<table
            style="width: ${i?o+"px":"100%"};"
            class="ele-printer-table">
            <colgroup>${p.join("")}</colgroup>
            ${v} ${W}
          </table>`}function q(e,t){if(!e)return null;const n=Array.prototype.filter.call(document.body.children,i=>!(typeof(i==null?void 0:i.tagName)=="string"&&["style","script","link"].includes(i.tagName.toLowerCase())));_(n,!0);const l=e.parentNode,r=e.nextElementSibling;document.body.append(e);const o=R(t);return r?l==null||l.insertBefore(e,r):l==null||l.append(e),k(n),o}export{R as a,z as b,G as c,J as d,X as m,q as p};
