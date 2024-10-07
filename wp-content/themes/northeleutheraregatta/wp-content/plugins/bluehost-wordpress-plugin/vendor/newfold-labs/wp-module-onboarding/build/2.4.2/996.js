"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[996],{8053:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(1609),i=a(5573);const o=(0,n.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(i.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},6999:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(1609),i=a(6942),o=a.n(i),r=a(148),s=a(7143),l=a(6427),d=a(7677),g=a(6655),c=a(7675);const u=({text:e,className:t,callback:a=null,disabled:i=!1,showChevronRight:u=!0})=>{const m=(0,r.Zp)(),{nextStep:_}=(0,s.useSelect)((e=>({nextStep:e(c.M).getNextStep()})));return(0,n.createElement)(l.Button,{className:o()("nfd-onboarding-button--site-gen-next",{"nfd-onboarding-button--site-gen-next--disabled":i},t),onClick:()=>{i||(a&&"function"==typeof a&&a(),_&&m(_.path))}},(0,n.createElement)("p",{className:"nfd-onboarding-button--site-gen-next--text"},e),u&&(0,n.createElement)(d.A,{className:"nfd-onboarding-button--site-gen-next--icon",icon:g.A}))}},513:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(1609),i=a(8468),o=a(7673);const r=(0,i.memo)((({title:e})=>(0,n.createElement)("div",{className:"ai-heading"},(0,n.createElement)(o.A,{height:"40px"}),(0,n.createElement)("div",{className:"ai-heading--title"},e))))},2607:(e,t,a)=>{a.d(t,{A:()=>b});var n=a(1609),i=a(7723),o=a(8468),r=a(6427),s=a(7143),l=a(148),d=a(4371),g=a(6079),c=a(7675),u=a(2014),m=a(8969),_=a(2202),p=a(6942),f=a.n(p);const b=(0,o.memo)((({callback:e=!1,className:t,text:a})=>{const o=(0,l.Zp)(),p=(0,l.zy)(),{nextStep:b,currentData:h,socialData:w}=(0,s.useSelect)((e=>({nextStep:e(c.M).getNextStep(),currentData:e(c.M).getCurrentOnboardingData(),socialData:e(c.M).getOnboardingSocialData()})),[]),v=null===b||!1===b,{setOnboardingSocialData:x}=(0,s.useDispatch)(c.M);return(0,n.createElement)(r.Button,{className:f()("skip-button",t),onClick:v?()=>async function(e){if(h){if(h.isComplete=(new Date).getTime(),e?.includes("basic-info")){const e=await async function(){const e=await(0,u.mt)(),t=await(0,u.oc)(w);return null!==t?.error?e?.body:t?.body}();e&&x(e),await d.y.dispatchEvents(_.XJ)}(0,g.V1)(h)}window.location.replace(m.R0)}(p.pathname):()=>("function"==typeof e&&e(),void o(b.path))},a||(0,i.__)("Skip this Step","wp-module-onboarding"))}))},9996:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(1609),i=a(9491),o=a(8468),r=a(7143),s=a(3582),l=a(7723);var d=a(1056),g=a(2607),c=a(513),u=a(3988),m=a(6999),_=a(7677),p=a(8053),f=a(6942),b=a.n(f),h=a(5508),w=a.n(h),v=a(9645),x=a(8969),E=a(9269),N=a(4097);const S=(0,o.memo)((({image:e,imageSetter:t,onFailure:a})=>{const i=(0,o.useRef)(null),{theme:r}=(0,o.useContext)(E.D),[s,d]=(0,o.useState)(!0),[g,c]=(0,o.useState)(!1),[u,m]=(0,o.useState)(!1),[f,h]=(0,o.useState)("");async function S(e){if(e){c(!0);const a=await(0,v.V)(e);if(!a?.body)return c(!1),y(),!1;const n=a.body?.id,i=a.body?.source_url;e&&"image/png"===e.type&&((e,t)=>{const a=new Image;a.crossOrigin="Anonymous",a.onload=()=>{const e=document.createElement("canvas"),t=e.getContext("2d");e.width=a.width,e.height=a.height,t.drawImage(a,0,0);const n=t.getImageData(0,0,e.width,e.height).data;let i=0,o=0,r=0,s=0;for(let e=0;e<n.length;e+=4)n[e+3]>0&&(i+=n[e],o+=n[e+1],r+=n[e+2],s++);s>0&&(i=Math.floor(i/s),o=Math.floor(o/s),r=Math.floor(r/s)),(e=>{const t=(e=>{const[t,a,n]=e.match(/\d+/g).map(Number);return.2126*t+.7152*a+.0722*n>160?x.fS:x.Vw})(e);h(t)})(`rgb(${i}, ${o}, ${r})`)},a.src=e})(i),t({id:n,url:i,fileName:e?.name,fileSize:e?.size})}c(!1)}const y=()=>{if("function"==typeof a)return a()},D=!g&&0!==e?.id&&void 0!==e?.id,k=b()("nfd-onboarding-image-uploader--with-text",{"nfd-onboarding-image-uploader--with-text--on-drag":u,"nfd-onboarding-image-uploader--with-text--not-dashed":D,"nfd-onboarding-image-uploader--with-text--not-dashed__dark":D&&f===x.fS,"nfd-onboarding-image-uploader--with-text--not-dashed__light":D&&f===x.Vw});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:k,onDrop:e=>(e=>{e.preventDefault(),e.stopPropagation(),m(!1),e?.dataTransfer?.files&&e?.dataTransfer?.files.length>0&&("image"===e?.dataTransfer?.files[0]?.type.split("/")[0]?(d(!0),S(e?.dataTransfer?.files[0])):d(!1))})(e),onDragOver:e=>(e=>{e.preventDefault(),e.stopPropagation(),m(!0)})(e),onDragEnter:e=>(e=>{e.preventDefault(),e.stopPropagation(),m(!0)})(e),onDragLeave:e=>(e=>{e.preventDefault(),e.stopPropagation(),m(!1)})(e)},g?(0,n.createElement)(N.A,null):(0,n.createElement)(n.Fragment,null,!D&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__heading"},(0,n.createElement)("div",{className:b()("nfd-onboarding-image-uploader--with-text__heading__icon",r===x.Vw?"nfd-onboarding-image-uploader--with-text__heading__icon--light":null)}),(0,n.createElement)("p",{className:"nfd-onboarding-image-uploader--with-text__heading__text"},(0,n.createElement)("span",{className:"nfd-onboarding-image-uploader--with-text__heading__text__drop"},(0,l.__)("Drop your logo here, or ","wp-module-onboarding")),(0,n.createElement)("button",{onClick:()=>{i?.current.click()},className:"nfd-onboarding-image-uploader--with-text__heading__text__modal"},(0,l.__)("browse","wp-module-onboarding")),(0,n.createElement)("input",{className:"nfd-onboarding-image-uploader--with-text__heading__text__input",accept:"image/*",type:"file",ref:i,onChange:e=>{e?.target?.files&&e?.target?.files.length>0&&(d(!0),S(e?.target?.files[0]))}}))),(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__subheading"},(0,n.createElement)("p",{className:"nfd-onboarding-image-uploader--with-text__subheading__text"},(0,l.__)("supports .jpg, .png, .gif","wp-module-onboarding")))),D&&(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview"},(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__wrapper"},(0,n.createElement)("img",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__image",src:e.url,alt:(0,l.__)("Site Logo Preview","wp-module-onboarding")})),(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__details"},(0,n.createElement)("p",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__details__filename"},e.fileName),(0,n.createElement)("p",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__details__filesize"},w()(e.fileSize))),(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__reset"},(0,n.createElement)("button",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__reset__button",onClick:()=>{d(!0),h(""),t({id:0,url:"",fileName:"",fileSize:0}),i?.current?.files.length>0&&(i.current.value="")}},(0,n.createElement)(_.A,{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__reset__button__icon",icon:p.A})))))),!s&&(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text--invalid"},(0,l.__)("This is not a valid Image Type","wp-module-onboarding")))}));var y=a(7675),D=a(2202),k=a(8744),C=a(1032);const A=()=>{const[e,t]=(0,o.useState)(),a=(0,i.useViewportMatch)("small"),{currentData:_}=(0,r.useSelect)((e=>({currentData:e(y.M).getCurrentOnboardingData()}))),{getEditedEntityRecord:p}=(0,r.useSelect)((e=>e(s.store)),[]),{editEntityRecord:f}=(0,r.useDispatch)(s.store),{setIsFooterNavAllowed:b,setIsHeaderEnabled:h,setSidebarActiveView:w,setHeaderActiveView:v,setDrawerActiveView:E,setHideFooterNav:N,setCurrentOnboardingData:A,setIsHeaderNavigationEnabled:L,updateSiteGenErrorStatus:M}=(0,r.useDispatch)(y.M);(0,o.useEffect)((()=>{if(N(!1),h(!0),w(!1),L(!0),v(x.Ix),E(!1),0!==_.sitegen.siteLogo?.id)return b(!0),t(_.sitegen.siteLogo);b(!1),p("root","site")}),[]);const B={heading:(0,l.__)("Do you have a logo you would like to use for this site?","wp-module-onboarding"),imageUploader:{subHeading:(0,l.__)("supports .jpg, .png, .svg","wp-module-onboarding")},buttons:{skip:(0,l.__)("Skip for now","wp-module-onboarding"),next:(0,l.__)("Next","wp-module-onboarding")}};return(0,n.createElement)(C.tR,null,(0,n.createElement)(u.A,{isCentered:!0,className:"nfd-onboarding-step--site-gen__site-logo"},(0,n.createElement)("div",{className:"nfd-onboarding-step--site-gen__site-logo__container"},(0,n.createElement)(c.A,{title:B.heading}),(0,n.createElement)(S,{image:e,imageSetter:e=>{const a={..._};a.sitegen.siteLogo.id=e.id,a.sitegen.siteLogo.url=e.url,a.sitegen.siteLogo.fileName=e.fileName,a.sitegen.siteLogo.fileSize=e.fileSize,A(a),b(0!==e.id),f("root","site",void 0,{site_logo:e.id}),t(e)},onFailure:()=>{(0,d.v)(new d.iC(D.cW,"site-logo",{source:k.d0})),M(!0)}}),(0,n.createElement)("div",{className:"nfd-onboarding-step--site-gen__site-logo__container__buttons"},(0,n.createElement)(g.A,{callback:()=>(()=>{const e={..._};e.sitegen.siteLogo={id:0,url:"",fileName:"",fileSize:0},A(e),t(void 0),b(!1),(0,d.v)(new d.iC(D.Qp,void 0,{source:k.d0}))})(),className:"nfd-onboarding-step--site-gen__site-logo__container__buttons__skip",text:B.buttons.skip}),a&&(0,n.createElement)(m.A,{callback:()=>{e&&(0,d.v)(new d.iC(D.WT,void 0,{source:k.d0}))},text:B.buttons.next,disabled:void 0===e||0===e?.id})))))}},9645:(e,t,a)=>{a.d(t,{V:()=>s});var n=a(5435),i=a(8674),o=a(1455),r=a.n(o);async function s(e){const t=await function(e){return new Promise(((t,a)=>{const n=new FileReader;n.addEventListener("loadend",(e=>t(e.target.result))),n.addEventListener("error",a),n.readAsArrayBuffer(e)}))}(e),a={"Content-Type":"image/png"};return a["Content-Disposition"]="attachment; filename="+e.name,await(0,n.h)(r()({url:(0,i.zV)("media"),method:"POST",headers:a,body:t}))}},5508:e=>{e.exports=function(e,t){return"string"==typeof e?r(e):"number"==typeof e?o(e,t):null},e.exports.format=o,e.exports.parse=r;var t=/\B(?=(\d{3})+(?!\d))/g,a=/(?:\.0*|(\.[^0]+)0+)$/,n={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:Math.pow(1024,4),pb:Math.pow(1024,5)},i=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;function o(e,i){if(!Number.isFinite(e))return null;var o=Math.abs(e),r=i&&i.thousandsSeparator||"",s=i&&i.unitSeparator||"",l=i&&void 0!==i.decimalPlaces?i.decimalPlaces:2,d=Boolean(i&&i.fixedDecimals),g=i&&i.unit||"";g&&n[g.toLowerCase()]||(g=o>=n.pb?"PB":o>=n.tb?"TB":o>=n.gb?"GB":o>=n.mb?"MB":o>=n.kb?"KB":"B");var c=(e/n[g.toLowerCase()]).toFixed(l);return d||(c=c.replace(a,"$1")),r&&(c=c.split(".").map((function(e,a){return 0===a?e.replace(t,r):e})).join(".")),c+s+g}function r(e){if("number"==typeof e&&!isNaN(e))return e;if("string"!=typeof e)return null;var t,a=i.exec(e),o="b";return a?(t=parseFloat(a[1]),o=a[4].toLowerCase()):(t=parseInt(e,10),o="b"),isNaN(t)?null:Math.floor(n[o]*t)}}}]);