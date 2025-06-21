import{a as H,o as v,c as x,w as e,b as t,e as n,d as _,aB as B,aC as P,aw as j,ax as T,az as $,ar as g,g as w,_ as U,r as E,p as I,i as J,f as N,j as D}from"./index-08ed677d.js";import{C as y}from"./index-7b650976.js";import{a as S,p as R,b as h,c as A,m as L,d as M}from"./printer-8b2ccc2a.js";import{i as V}from"./index-6201b7a4.js";/* empty css              */import"./index-5353e7c4.js";import{R as X,_ as F}from"./Group-db28a0f9.js";import"./RadioButton-b1164875.js";const O=_("div",{style:{"margin-top":"16px"}},[_("span",{class:"ele-text-primary ele-printer-hide"}," 此段内容在所有打印时隐藏, 打印完复原。 "),_("span",{class:"ele-text-danger demo-hide-1"}," 此段内容在指定打印时才隐藏。 ")],-1),Q={__name:"print-this",setup(r){const o=H({horizontal:void 0,margin:void 0,title:""}),s=()=>{S(o)},p=()=>{S({...o,hide:[".demo-hide-1"]})},u=i=>{o.horizontal={1:!0,0:!1}[String(i)]};return(i,a)=>{const l=B,d=P,c=j,m=T,f=$,b=g,k=w,z=y;return v(),x(z,{title:"打印当前页面",bordered:!1},{default:e(()=>[t(f,{"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"320px"}},{default:e(()=>[t(c,{label:"纸张方向"},{default:e(()=>[t(d,{"allow-clear":"",value:{true:1,false:0}[String(o.horizontal)],placeholder:"不设置","onUpdate:value":u},{default:e(()=>[t(l,{value:1},{default:e(()=>[n("横向")]),_:1}),t(l,{value:0},{default:e(()=>[n("纵向")]),_:1})]),_:1},8,["value"])]),_:1}),t(c,{label:"页面间距"},{default:e(()=>[t(d,{"allow-clear":"",value:o.margin,"onUpdate:value":a[0]||(a[0]=C=>o.margin=C),placeholder:"不设置"},{default:e(()=>[t(l,{value:"0px"},{default:e(()=>[n("0px")]),_:1}),t(l,{value:"50px"},{default:e(()=>[n("50px")]),_:1}),t(l,{value:"100px"},{default:e(()=>[n("100px")]),_:1})]),_:1},8,["value"])]),_:1}),t(c,{label:"页面标题"},{default:e(()=>[t(m,{"allow-clear":"",value:o.title,"onUpdate:value":a[1]||(a[1]=C=>o.title=C),placeholder:"不设置"},null,8,["value"])]),_:1})]),_:1}),t(k,null,{default:e(()=>[t(b,{onClick:s},{default:e(()=>[n("打印")]),_:1}),t(b,{class:"ele-btn-icon",onClick:p},{default:e(()=>[n(" 打印隐藏指定内容 ")]),_:1})]),_:1}),O]),_:1})}}};const q=r=>(I("data-v-0435538a"),r=r(),J(),r),W=q(()=>_("div",{class:"demo-print-div"},"示例示例示例示例示例",-1)),Z={class:"demo-print-right"},G={style:{"margin-top":"12px"}},K={style:{"margin-top":"20px"}},Y={__name:"print-div",setup(r){const o=E(null),s=()=>{R(o.value)},p=E("示例示例示例");return(u,i)=>{const a=V,l=T,d=g,c=y;return v(),x(c,{title:"打印指定区域",bordered:!1},{default:e(()=>[_("div",{ref_key:"printRef",ref:o,class:"demo-print-group"},[W,_("div",Z,[_("div",null,[t(a,{size:"mini",color:"blue"},{default:e(()=>[n("示例")]),_:1}),t(a,{size:"mini",color:"green"},{default:e(()=>[n("示例")]),_:1}),t(a,{size:"mini",color:"orange"},{default:e(()=>[n("示例")]),_:1})]),_("div",G,[t(l,{value:p.value,"onUpdate:value":i[0]||(i[0]=m=>p.value=m)},null,8,["value"])])])],512),_("div",K,[t(d,{onClick:s},{default:e(()=>[n("打印")]),_:1})])]),_:1})}}},tt=U(Y,[["__scopeId","data-v-0435538a"]]),et={__name:"print-html",setup(r){const o=H({loading:!1}),s=()=>{h({...o,html:['<h1 style="color: #1890ff;">EleAdmin 后台管理模板</h1>','<div style="color: #F51D2C;">通用型后台管理模板，界面美观、开箱即用</div>'].join("")})},p=()=>{h({...o,margin:0,html:['<div style="padding: 0 60px;">',Array(38).join("<h3>EleAdmin 后台管理模板</h3>"),"</div>"].join(""),header:`
        <div style="display: flex;font-size: 12px;padding: 15px 30px 25px;">
          <div>我是页眉左侧</div>
          <div style="flex: 1;text-align: center;">我是页眉</div>
          <div>我是页眉右侧</div>
        </div>`,footer:`
        <div style="display: flex;font-size: 12px;padding: 15px 30px 25px;">
          <div>我是页脚左侧</div>
          <div style="flex: 1;text-align: center;">我是页脚</div>
          <div>我是页脚右侧</div>
        </div>`,style:"<style> h3 { color: red; } </style>"})},u=()=>{h({...o,margin:0,html:'<img src="https://cdn.eleadmin.com/20200610/LrCTN2j94lo9N7wEql7cBr1Ux4rHMvmZ.jpg" style="width: 100%;"/>'})};return(i,a)=>{const l=X,d=F,c=j,m=$,f=g,b=w,k=y;return v(),x(k,{title:"打印任意内容",bordered:!1},{default:e(()=>[t(m,{"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"320px"}},{default:e(()=>[t(c,{label:"loading"},{default:e(()=>[t(d,{value:o.loading,"onUpdate:value":a[0]||(a[0]=z=>o.loading=z)},{default:e(()=>[t(l,{value:!1},{default:e(()=>[n("不显示")]),_:1}),t(l,{value:!0},{default:e(()=>[n("显示")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),t(b,{style:{"flex-wrap":"wrap"}},{default:e(()=>[t(f,{class:"ele-btn-icon",onClick:s},{default:e(()=>[n(" 打印任意内容 ")]),_:1}),t(f,{class:"ele-btn-icon",onClick:p},{default:e(()=>[n(" 设置页眉页脚 ")]),_:1}),t(f,{class:"ele-btn-icon",onClick:u},{default:e(()=>[n("打印图片")]),_:1})]),_:1})]),_:1})}}},ot={__name:"print-page",setup(r){const o=()=>{A({pages:["<h3>我是第一页</h3>","<h3>我是第二页</h3>","<h3>我是第三页</h3>","<h3>我是第四页</h3>","<h3>我是第五页</h3>"],style:"<style> h3 { color: red; } </style>",loading:!1})},s=()=>{A({pages:["<h3>我是第一页</h3>","<h3>我是第二页</h3>","<h3>我是第三页</h3>","<h3>我是第四页</h3>","<h3>我是第五页</h3>"],margin:0,padding:"20px 60px",header:`
        <div style="display: flex;font-size: 12px;padding: 15px 30px;">
          <div>我是页眉左侧</div>
          <div style="flex: 1;text-align: center;">我是页眉</div>
          <div>我是页眉右侧</div>
        </div>`,footer:`
        <div style="display: flex;font-size: 12px;padding: 15px 30px;">
          <div>我是页脚左侧</div>
          <div style="flex: 1;text-align: center;">我是页脚</div>
          <div>我是页脚右侧</div>
        </div>`,style:"<style> h3 { color: red; } </style>",loading:!1})};return(p,u)=>{const i=g,a=w,l=y;return v(),x(l,{title:"分页打印",bordered:!1},{default:e(()=>[t(a,null,{default:e(()=>[t(i,{class:"ele-btn-icon",onClick:o},{default:e(()=>[n("分页打印")]),_:1}),t(i,{class:"ele-btn-icon",onClick:s},{default:e(()=>[n(" 分页打印设置页眉页脚 ")]),_:1})]),_:1})]),_:1})}}},nt={__name:"print-advanced",setup(r){const o=E([{key:1,username:"张小三",amount:18,province:"浙江",city:"杭州",zone:"西湖区",street:"西溪街道",address:"西溪花园30栋1单元"},{key:2,username:"李小四",amount:39,province:"江苏",city:"苏州",zone:"姑苏区",street:"丝绸路",address:"天墅之城9幢2单元"},{key:3,username:"王小五",amount:8,province:"江西",city:"南昌",zone:"青山湖区",street:"艾溪湖办事处",address:"中兴和园1幢3单元"},{key:4,username:"赵小六",amount:16,province:"福建",city:"泉州",zone:"丰泽区",street:"南洋街道",address:"南洋村6幢1单元"},{key:5,username:"孙小七",amount:12,province:"湖北",city:"武汉",zone:"武昌区",street:"武昌大道",address:"两湖花园16幢2单元"},{key:6,username:"周小八",amount:11,province:"安徽",city:"黄山",zone:"黄山区",street:"汤口镇",address:"温泉村21号"}]),s=()=>{const a=L(o.value,[[{field:"username",width:150,rowspan:2,title:"联系人"},{align:"center",colspan:3,title:"地址"},{field:"amount",width:120,rowspan:2,title:"金额",align:"center"}],[{field:"province",width:120,title:"省"},{field:"city",width:120,title:"市"},{width:200,title:"区",templet:l=>`<span style="color: red;">${l.zone}</span>`}]]);h({html:"<p>提供数据和cols配置自动生成复杂表格，非常的方便</p>"+a,loading:!1})},p=()=>{M({url:"https://cdn.eleadmin.com/20200610/20200708224450.pdf"})},u=()=>{h({html:`
      <div class="code-group">
        <div class="code-group-title">EasyWeb授权凭证</div>
        <div class="code-group-body">
          <p>手机扫描右侧二维码，或登录</p>
          <p>网站https://easyweb.vip</p>
          <p>查询产品真伪</p>
          <img src="https://cdn.eleadmin.com/20200610/20200708230820.png" width="70px" height="70px"/>
          <span>515AE3X1</span>
        </div>
      </div>
      <style>
        .code-group {
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #fff;
        }
        .code-group-title {
          border-bottom: 1px solid #ccc;
          padding: 10px 15px;
          text-align: center;
          font-size: 18px;
        }
        .code-group-body {
          text-align: center;
          position: relative;
          padding: 15px 115px 0 25px;
          min-height: 90px;
        }
        .code-group-body > p {
          margin: 0 0 13px 0;
          font-size: 15px;
          font-family: 幼圆;
          color: #333;
          font-weight: 600;
        }
        .code-group-body > img, .code-group-body > span {
          position: absolute;
          right: 25px;
          top: 15px;
        }
        .code-group-body > span {
          top: 90px;
        }
      </style>
    `,loading:!1})},i=()=>{h({html:`
      <h2 style="text-align: center;color: #333;">XxxXx班课程表</h2>
      <table class="ele-printer-table">
        <colgroup>
          <col width="130px"/>
        </colgroup>
        <tr>
          <th style="position: relative;">
            <div style="position: absolute;right: 20px;top: 10px;line-height: normal;">星期</div>
            <div style="position: absolute;left: 20px;bottom: 10px;line-height: normal;">时间</div>
            <div
              style="border-top: 1px solid #000;width:141px;height: 0;position: absolute;left: 0;top: 0;transform: rotate(22deg);transform-origin: 0 0;">
            </div>
          </th>
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
        </tr>
        <tr>
          <td>8:00-10:00</td>
          <td>HTML5网页设计<br/>曲丽丽 - 441教室</td>
          <td>数据库原理及应用<br/>严良 - 716机房</td>
          <td>JavaSE初级程序设计<br/>肖萧 - 715机房</td>
          <td></td>
          <td>JavaScript程序设计<br/>董娜 - 733机房</td>
        </tr>
        <tr>
          <td>10:30-12:30</td>
          <td></td>
          <td>JavaScript程序设计<br/>董娜 - 733机房</td>
          <td></td>
          <td>锋利的jQuery<br/>程咏 - 303教室</td>
          <td>JavaEE应用开发<br/>周星 - 303教室</td>
        </tr>
        <tr>
          <td colspan="6" style="height: auto;">午休</td>
        </tr>
        <tr>
          <td>13:30-15:30</td>
          <td>JavaSE初级程序设计<br/>肖萧 - 715机房</td>
          <td></td>
          <td>HTML5网页设计<br/>曲丽丽 - 441教室</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>16:00-18:00</td>
          <td></td>
          <td>JavaEE应用开发<br/>周星 - 303教室</td>
          <td></td>
          <td>数据库原理及应用<br/>严良 - 716机房</td>
          <td></td>
        </tr>
      </table>
      <style>
        th, td {
          text-align: center;
          line-height: 35px;
        }
        td {
          height: 100px;
        }
      </style>
    `,horizontal:!0,title:".",loading:!1})};return(a,l)=>{const d=g,c=N,m=w,f=y;return v(),x(f,{title:"进阶示例",bordered:!1},{default:e(()=>[t(m,{style:{"flex-wrap":"wrap"}},{default:e(()=>[t(d,{class:"ele-btn-icon",onClick:s},{default:e(()=>[n(" 打印数据表格 ")]),_:1}),t(c,{title:"对于复杂的打印需求，可以后端生成pdf给前端打印"},{default:e(()=>[t(d,{class:"ele-btn-icon",onClick:p},{default:e(()=>[n("打印pdf")]),_:1})]),_:1}),t(d,{class:"ele-btn-icon",onClick:u},{default:e(()=>[n("打印条码")]),_:1}),t(d,{class:"ele-btn-icon",onClick:i},{default:e(()=>[n(" 打印自定义表格 ")]),_:1})]),_:1})]),_:1})}}},at={class:"ele-body ele-body-card"},lt={name:"ExtensionPrinter"},mt=Object.assign(lt,{setup(r){return(o,s)=>(v(),D("div",at,[t(Q),t(tt),t(et),t(ot),t(nt)]))}});export{mt as default};
