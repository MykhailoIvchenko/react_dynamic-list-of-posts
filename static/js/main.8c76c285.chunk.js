(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),a=n(3),s=n(4),o=n(1),i=n.n(o),u=n(2),l=(n(12),n(13),n(14),n(0)),j=function(e){var t=e.posts,n=e.selectedId,c=e.openPost;return Object(l.jsxs)("div",{className:"PostsList",children:[Object(l.jsx)("h2",{children:"Posts:"}),Object(l.jsx)("ul",{className:"PostsList__list",children:t.map((function(e){return Object(l.jsxs)("li",{className:"PostsList__item",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"[User #".concat(e.userId,"]: ")}),e.title]}),Object(l.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){c(e.id)},children:e.id===n?"Close":"Open"})]},e.id)}))})]})},p="https://mate.academy/students-api",b=function(){var e=Object(a.a)(i.a.mark((function e(t,n){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=6;break}return e.next=3,fetch("".concat(p).concat(t),n);case 3:c=e.sent,e.next=9;break;case 6:return e.next=8,fetch("".concat(p).concat(t));case 8:c=e.sent;case 9:if(c.ok){e.next=11;break}throw new Error("".concat(c.status," - ").concat(c.statusText));case 11:return e.abrupt("return",c.json());case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/comments?postId=".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/comments/".concat(t),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(i.a.mark((function e(t,n,c,r){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({postId:t,name:n,email:c,body:r})},e.prev=1,e.next=4,b("/comments",a);case 4:return s=e.sent,e.abrupt("return",s);case 8:throw e.prev=8,e.t0=e.catch(1),new Error;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c,r){return e.apply(this,arguments)}}(),h=(n(16),function(e){var t=e.currentPostId,n=e.addNewComment,c=Object(u.useState)(""),r=Object(s.a)(c,2),a=r[0],o=r[1],i=Object(u.useState)(""),j=Object(s.a)(i,2),p=j[0],b=j[1],d=Object(u.useState)(""),m=Object(s.a)(d,2),f=m[0],h=m[1];return Object(l.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){n(e,t,a,p,f),o(""),b(""),h("")},children:[Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{value:a,type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",onChange:function(e){o(e.target.value)},required:!0})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{value:p,type:"email",name:"email",placeholder:"Your email",className:"NewCommentForm__input",onChange:function(e){b(e.target.value)},required:!0})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("textarea",{value:f,name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",onChange:function(e){h(e.target.value)},required:!0})}),Object(l.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),O=function(){var e=Object(a.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/posts");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/posts/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=(n(17),function(e){var t=e.postId,n=Object(u.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],j=Object(u.useState)(!0),p=Object(s.a)(j,2),b=p[0],O=p[1],v=Object(u.useState)([]),_=Object(s.a)(v,2),w=_[0],N=_[1],y=function(){var e=Object(a.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:n=e.sent,N(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(a.a)(i.a.mark((function e(t,n,c,r,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f(n,c,r,a);case 3:y();case 4:case"end":return e.stop()}}),e)})));return function(t,n,c,r,a){return e.apply(this,arguments)}}(),P=function(){var e=Object(a.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:y();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(a.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:n=e.sent,o(n.body);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){C(),y()}),[t]),Object(l.jsxs)("div",{className:"PostDetails",children:[Object(l.jsx)("h2",{children:"Post details:"}),Object(l.jsx)("section",{className:"PostDetails__post",children:Object(l.jsx)("p",{children:r})}),Object(l.jsxs)("section",{className:"PostDetails__comments",children:[w.length>0&&Object(l.jsx)("button",{type:"button",className:"button",onClick:function(){O((function(e){return!e}))},children:b?" Hide ".concat(w.length," comments"):" Show ".concat(w.length," comments")}),b&&Object(l.jsx)("ul",{className:"PostDetails__list",children:w.map((function(e){return Object(l.jsxs)("li",{className:"PostDetails__list-item",children:[Object(l.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){P(e.id)},children:"X"}),Object(l.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:t<1?"PostDetails__form-wrapper Hidden":"PostDetails__form-wrapper",children:Object(l.jsx)(h,{currentPostId:t,addNewComment:k})})})]})}),_=(n(18),function(){return Object(l.jsx)("div",{className:"Loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),w=function(){var e=Object(u.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(u.useState)(-1),o=Object(s.a)(r,2),p=o[0],b=o[1],d=Object(u.useState)(0),m=Object(s.a)(d,2),f=m[0],h=m[1],x=Object(u.useState)(!1),w=Object(s.a)(x,2),N=w[0],y=w[1],k=function(){var e=Object(a.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==p){e.next=3;break}return b(-1),e.abrupt("return");case 3:b(t),y(!0),y(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){O().then((function(e){c(e)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App__header",children:Object(l.jsxs)("label",{children:["Select a user: \xa0",Object(l.jsxs)("select",{className:"App__user-selector",onChange:function(e){h(+e.target.value)},children:[Object(l.jsx)("option",{value:"0",children:"All users"}),Object(l.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(l.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(l.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(l.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(l.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(l.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(l.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(l.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(l.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(l.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(l.jsxs)("main",{className:"App__main",children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(j,{posts:0===f?n:n.filter((function(e){return e.userId===f})),selectedId:p,openPost:k})}),Object(l.jsx)("div",{className:"App__content",children:p>0&&(N?Object(l.jsx)(_,{}):Object(l.jsx)(v,{postId:p}))})]})]})};r.a.render(Object(l.jsx)(w,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.8c76c285.chunk.js.map