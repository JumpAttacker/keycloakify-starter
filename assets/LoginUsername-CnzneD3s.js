import{r as O,u as N,j as s}from"./index-Cs09ugHT.js";import{c as r}from"./useGetClassName-i9-qN2nK.js";import{u as F}from"./useGetClassName-DekBsaJA.js";function L(j){const{kcContext:l,i18n:d,doUseDefaultCss:m,Template:x,classes:u}=j,{getClassName:e}=F({doUseDefaultCss:m,classes:u}),{social:n,realm:i,url:p,usernameHidden:b,login:g,registrationDisabled:k}=l,{msg:c,msgStr:h}=d,[C,f]=O.useState(!1),v=N(a=>{var o;a.preventDefault(),f(!0);const t=a.target;(o=t.querySelector("input[name='email']"))===null||o===void 0||o.setAttribute("name","username"),t.submit()});return s.jsx(x,Object.assign({},{kcContext:l,i18n:d,doUseDefaultCss:m,classes:u},{displayInfo:n.displayInfo,displayWide:i.password&&n.providers!==void 0,headerNode:c("doLogIn"),infoNode:i.password&&i.registrationAllowed&&!k&&s.jsx("div",Object.assign({id:"kc-registration"},{children:s.jsxs("span",{children:[c("noAccount"),s.jsx("a",Object.assign({tabIndex:6,href:p.registrationUrl},{children:c("doRegister")}))]})}))},{children:s.jsxs("div",Object.assign({id:"kc-form",className:r(i.password&&n.providers!==void 0&&e("kcContentWrapperClass"))},{children:[s.jsx("div",Object.assign({id:"kc-form-wrapper",className:r(i.password&&n.providers&&[e("kcFormSocialAccountContentClass"),e("kcFormSocialAccountClass")])},{children:i.password&&s.jsxs("form",Object.assign({id:"kc-form-login",onSubmit:v,action:p.loginAction,method:"post"},{children:[s.jsx("div",Object.assign({className:e("kcFormGroupClass")},{children:!b&&(()=>{var a;const o=i.loginWithEmailAllowed?i.registrationEmailAsUsername?"email":"usernameOrEmail":"username",t=o==="usernameOrEmail"?"username":o;return s.jsxs(s.Fragment,{children:[s.jsx("label",Object.assign({htmlFor:t,className:e("kcLabelClass")},{children:c(o)})),s.jsx("input",{tabIndex:1,id:t,className:e("kcInputClass"),name:t,defaultValue:(a=g.username)!==null&&a!==void 0?a:"",type:"text",autoFocus:!0,autoComplete:"off"})]})})()})),s.jsx("div",Object.assign({className:r(e("kcFormGroupClass"),e("kcFormSettingClass"))},{children:s.jsx("div",Object.assign({id:"kc-form-options"},{children:i.rememberMe&&!b&&s.jsx("div",Object.assign({className:"checkbox"},{children:s.jsxs("label",{children:[s.jsx("input",Object.assign({tabIndex:3,id:"rememberMe",name:"rememberMe",type:"checkbox"},g.rememberMe==="on"?{checked:!0}:{})),c("rememberMe")]})}))}))})),s.jsx("div",Object.assign({id:"kc-form-buttons",className:e("kcFormGroupClass")},{children:s.jsx("input",{tabIndex:4,className:r(e("kcButtonClass"),e("kcButtonPrimaryClass"),e("kcButtonBlockClass"),e("kcButtonLargeClass")),name:"login",id:"kc-login",type:"submit",value:h("doLogIn"),disabled:C})}))]}))})),i.password&&n.providers!==void 0&&s.jsx("div",Object.assign({id:"kc-social-providers",className:r(e("kcFormSocialAccountContentClass"),e("kcFormSocialAccountClass"))},{children:s.jsx("ul",Object.assign({className:r(e("kcFormSocialAccountListClass"),n.providers.length>4&&e("kcFormSocialAccountDoubleListClass"))},{children:n.providers.map(a=>s.jsx("li",Object.assign({className:e("kcFormSocialAccountListLinkClass")},{children:s.jsx("a",Object.assign({href:a.loginUrl,id:`zocial-${a.alias}`,className:r("zocial",a.providerId)},{children:s.jsx("span",{children:a.displayName})}))}),a.providerId))}))}))]}))}))}export{L as default};
//# sourceMappingURL=LoginUsername-CnzneD3s.js.map
