(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(7),r=c.n(n),s=c(2),a=c(1),i=(c(12),c(13),c(14),c(6)),o=c.n(i),l=c(0),u=function(e){var t=e.todoList,c=e.handleSelectUser,n=e.selectedUserId,r=Object(a.useState)([]),i=Object(s.a)(r,2),u=i[0],d=i[1],j=Object(a.useState)(""),b=Object(s.a)(j,2),h=b[0],p=b[1],f=Object(a.useState)("all"),O=Object(s.a)(f,2),m=O[0],v=O[1],x=Object(a.useState)(0),_=Object(s.a)(x,2),N=_[0],U=_[1];return Object(a.useEffect)((function(){d(t.filter((function(e){if(e.title.includes(h))switch(m){case"completed":return e.completed;case"active":return!e.completed;default:return!0}return!1})))}),[h,m]),Object(a.useEffect)((function(){0===n&&U(0)}),[n]),Object(l.jsxs)("div",{className:"TodoList",children:[Object(l.jsx)("h2",{children:"Todos:"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"title-filter",children:"Filter by title: "}),Object(l.jsx)("input",{id:"title-filter",type:"text",value:h,onChange:function(e){return p(e.target.value)}}),Object(l.jsxs)("select",{onChange:function(e){v(e.target.value)},children:[Object(l.jsx)("option",{value:"all",children:"All"}),Object(l.jsx)("option",{value:"completed",children:"Completed"}),Object(l.jsx)("option",{value:"active",children:"Active"})]})]}),Object(l.jsx)("div",{className:"TodoList__list-container",children:Object(l.jsx)("ul",{className:"TodoList__list",children:u.map((function(e){return Object(l.jsxs)("li",{className:o()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{checked:e.completed,type:"checkbox",readOnly:!0}),Object(l.jsx)("p",{children:e.title})]}),Object(l.jsx)("button",{onClick:function(){c(e.userId),U(e.id)},className:o()("TodoList__user-button","button",{"TodoList__user-button--selected":N===e.id}),type:"button",children:"User: ".concat(e.userId)})]},e.id)}))})})]})},d=c(4),j=c(3),b=c.n(j),h=function(e){return fetch("".concat("https://mate.academy/students-api/").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," ").concat(e.statusText));return e.json()}))},p=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/todos");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/users/".concat(t));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(c(17),function(e){var t=e.selectedUserId,c=e.handleSelectUser,n=Object(a.useState)(null),r=Object(s.a)(n,2),i=r[0],o=r[1],u=Object(a.useCallback)(function(){var e=Object(d.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:(c=e.sent).id&&o(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(a.useEffect)((function(){u(t)}),[t]),Object(l.jsxs)("div",{className:"CurrentUser",children:[Object(l.jsx)("h2",{className:"CurrentUser__title",children:Object(l.jsx)("span",{children:"User #".concat(null===i||void 0===i?void 0:i.id)})}),Object(l.jsx)("h3",{className:"CurrentUser__name",children:null===i||void 0===i?void 0:i.name}),Object(l.jsx)("p",{className:"CurrentUser__email",children:null===i||void 0===i?void 0:i.email}),Object(l.jsx)("p",{className:"CurrentUser__phone",children:null===i||void 0===i?void 0:i.phone}),Object(l.jsx)("button",{className:"CurrentUser__clear",type:"button",onClick:function(){return c(0)},children:"Clear"})]})}),m=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),i=Object(s.a)(r,2),o=i[0],d=i[1];Object(a.useEffect)((function(){p().then((function(e){return d(e)}))}),[]);var j=function(e){n(e)};return Object(l.jsxs)("div",{className:"App",children:[o.length&&Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(u,{todoList:o,handleSelectUser:j,selectedUserId:c})}),Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)("div",{className:"App__content-container",children:c?Object(l.jsx)(O,{selectedUserId:c,handleSelectUser:j}):"No user selected"})})]})};r.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.1cbb2e32.chunk.js.map