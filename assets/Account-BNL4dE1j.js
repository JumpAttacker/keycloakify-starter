import{j as s}from"./index-Cs09ugHT.js";import{c as a}from"./useGetClassName-i9-qN2nK.js";import{u as p}from"./useGetClassName-CeVpWQJ0.js";function k(h){var r,m,o,d;const{kcContext:u,i18n:b,doUseDefaultCss:x,Template:N,classes:c}=h,{getClassName:l}=p({doUseDefaultCss:x,classes:Object.assign(Object.assign({},c),{kcBodyClass:a(c==null?void 0:c.kcBodyClass,"user")})}),{url:g,realm:j,messagesPerField:t,stateChecker:f,account:i,referrer:n}=u,{msg:e}=b;return s.jsxs(N,Object.assign({},{kcContext:u,i18n:b,doUseDefaultCss:x,classes:c},{active:"account"},{children:[s.jsxs("div",Object.assign({className:"row"},{children:[s.jsx("div",Object.assign({className:"col-md-10"},{children:s.jsx("h2",{children:e("editAccountHtmlTitle")})})),s.jsx("div",Object.assign({className:"col-md-2 subtitle"},{children:s.jsxs("span",Object.assign({className:"subtitle"},{children:[s.jsx("span",Object.assign({className:"required"},{children:"*"}))," ",e("requiredFields")]}))}))]})),s.jsxs("form",Object.assign({action:g.accountUrl,className:"form-horizontal",method:"post"},{children:[s.jsx("input",{type:"hidden",id:"stateChecker",name:"stateChecker",value:f}),!j.registrationEmailAsUsername&&s.jsxs("div",Object.assign({className:a("form-group",t.printIfExists("username","has-error"))},{children:[s.jsxs("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[s.jsx("label",Object.assign({htmlFor:"username",className:"control-label"},{children:e("username")})),j.editUsernameAllowed&&s.jsx("span",Object.assign({className:"required"},{children:"*"}))]})),s.jsx("div",Object.assign({className:"col-sm-10 col-md-10"},{children:s.jsx("input",{type:"text",className:"form-control",id:"username",name:"username",disabled:!j.editUsernameAllowed,defaultValue:(r=i.username)!==null&&r!==void 0?r:""})}))]})),s.jsxs("div",Object.assign({className:a("form-group",t.printIfExists("email","has-error"))},{children:[s.jsxs("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[s.jsx("label",Object.assign({htmlFor:"email",className:"control-label"},{children:e("email")}))," ",s.jsx("span",Object.assign({className:"required"},{children:"*"}))]})),s.jsx("div",Object.assign({className:"col-sm-10 col-md-10"},{children:s.jsx("input",{type:"text",className:"form-control",id:"email",name:"email",autoFocus:!0,defaultValue:(m=i.email)!==null&&m!==void 0?m:""})}))]})),s.jsxs("div",Object.assign({className:a("form-group",t.printIfExists("firstName","has-error"))},{children:[s.jsxs("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[s.jsx("label",Object.assign({htmlFor:"firstName",className:"control-label"},{children:e("firstName")}))," ",s.jsx("span",Object.assign({className:"required"},{children:"*"}))]})),s.jsx("div",Object.assign({className:"col-sm-10 col-md-10"},{children:s.jsx("input",{type:"text",className:"form-control",id:"firstName",name:"firstName",defaultValue:(o=i.firstName)!==null&&o!==void 0?o:""})}))]})),s.jsxs("div",Object.assign({className:a("form-group",t.printIfExists("lastName","has-error"))},{children:[s.jsxs("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[s.jsx("label",Object.assign({htmlFor:"lastName",className:"control-label"},{children:e("lastName")}))," ",s.jsx("span",Object.assign({className:"required"},{children:"*"}))]})),s.jsx("div",Object.assign({className:"col-sm-10 col-md-10"},{children:s.jsx("input",{type:"text",className:"form-control",id:"lastName",name:"lastName",defaultValue:(d=i.lastName)!==null&&d!==void 0?d:""})}))]})),s.jsx("div",Object.assign({className:"form-group"},{children:s.jsx("div",Object.assign({id:"kc-form-buttons",className:"col-md-offset-2 col-md-10 submit"},{children:s.jsxs("div",{children:[n!==void 0&&s.jsx("a",Object.assign({href:n==null?void 0:n.url},{children:e("backToApplication")})),s.jsx("button",Object.assign({type:"submit",className:a(l("kcButtonClass"),l("kcButtonPrimaryClass"),l("kcButtonLargeClass")),name:"submitAction",value:"Save"},{children:e("doSave")})),s.jsx("button",Object.assign({type:"submit",className:a(l("kcButtonClass"),l("kcButtonDefaultClass"),l("kcButtonLargeClass")),name:"submitAction",value:"Cancel"},{children:e("doCancel")}))]})}))}))]}))]}))}export{k as default};
//# sourceMappingURL=Account-BNL4dE1j.js.map
