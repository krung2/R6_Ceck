(this.webpackJsonpr6=this.webpackJsonpr6||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"a":"http://34.64.75.208:8080/api"}')},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/AppleSDGothicNeoM.88c00162.ttf"},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n(22),s=n.n(c),o=n(4),i=n(3),u=n.n(i),l=n(5),d=n(24),p=function(){return Object(a.useContext)(d.a)},j=n(1),b=function(){var e=new URLSearchParams(Object(o.f)().search),t=p().stores.TokenStore.handleToken,n=Object(a.useCallback)(Object(l.a)(u.a.mark((function n(){var r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===(r=String(e.get("code")))&&window.location.replace("/"),n.prev=2,n.next=5,t(r);case 5:return a=n.sent,console.log(2),n.next=9,localStorage.setItem("access-token",a);case 9:window.location.replace("/"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),window.location.replace("/");case 15:window.location.replace("/");case 16:case"end":return n.stop()}}),n,null,[[2,12]])}))),[]);return Object(a.useEffect)((function(){n()}),[n]),Object(j.jsx)(j.Fragment,{})},h=n(40),f=n(12),O=(n(57),function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)("div",{className:"header-title",children:[Object(j.jsx)("div",{className:"header-title-big",children:"DDR6"}),Object(j.jsxs)("div",{className:"header-title-small",children:["Dgsw Dictionary R6S ",Object(j.jsx)("br",{}),"\ub300\uad6c\uc18c\ud504\ud2b8\uc6e8\uc5b4\uace0\ub4f1\ud559\uad50\uc758 \ub808\uc778\ubcf4\uc6b0 \uc2dd\uc2a4 \uc2dc\uc988 \uc720\uc800 \uc815\ubcf4\ub97c \uae30\ub85d\ud569\ub2c8\ub2e4"]})]})})}),v=(n(58),function(e){var t=e.isRequest,n=e.setIsModalOpen,r=e.generationGroup,a=e.nameGroup,c=e.nickNameGroup,s=e.requestUser,o=r.setGeneration,i=c.nickName,u=c.setNickName,l=a.name,d=a.setName;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"modal"}),Object(j.jsxs)("div",{className:"modal-container",children:[Object(j.jsx)("div",{className:"modal-container-close",onClick:function(){return n(!1)},children:"x"}),Object(j.jsxs)("div",{className:"modal-container-dropbox",children:["\uae30\uc218\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694 ",Object(j.jsx)("br",{}),Object(j.jsxs)("select",{className:"modal-container-dropbox-box",onChange:function(e){return o(e.target.value)},children:[Object(j.jsx)("option",{selected:!0,disabled:!0,hidden:!0,children:"\uae30\uc218\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),Object(j.jsx)("option",{value:"1\uae30",children:"1\uae30"}),Object(j.jsx)("option",{value:"2\uae30",children:"2\uae30"}),Object(j.jsx)("option",{value:"3\uae30",children:"3\uae30"}),Object(j.jsx)("option",{value:"4\uae30",children:"4\uae30"}),Object(j.jsx)("option",{value:"5\uae30",children:"5\uae30"}),Object(j.jsx)("option",{value:"6\uae30",children:"6\uae30"})]})]}),Object(j.jsxs)("div",{className:"modal-container-dropbox",children:["\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694  ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:l,onChange:function(e){return d(e.target.value)},className:"modal-container-dropbox-box"})]}),Object(j.jsxs)("div",{className:"modal-container-dropbox",children:["\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694  ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",placeholder:"R6 \ub2c9\ub124\uc784\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:i,onChange:function(e){return u(e.target.value)},className:"modal-container-dropbox-box"})]}),Object(j.jsx)("div",{className:"modal-containter-button",onClick:function(){return s()},children:t?"\uc804\uc1a1\uc911\uc785\ub2c8\ub2e4":"\ub4f1\ub85d"})]})]})}),x=(n(59),function(e){e.isLogin;var t=e.checkGenerationGroup,n=e.modalOpenGroup,r=e.generationTypeArr,a=(e.logout,n.setIsModalOpen),c=t.checkGeneration,s=t.setCheckGeneration;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"navButtons",children:[r.map((function(e){return Object(j.jsx)("div",{className:c===e?"navButtons-select":"navButtons-filter",onClick:function(){return s(e)},children:"all"===e?"\uc804\uccb4":e})})),Object(j.jsx)("div",{className:"navButtons-login",onClick:function(){return a(!0)},children:"\ub4f1\ub85d"})]}),Object(j.jsxs)("div",{className:"navContainer",children:[Object(j.jsx)("div",{className:"navContainer-profile",children:"\ud504\ub85c\ud544"}),Object(j.jsx)("div",{className:"navContainer-name",children:"\uc774\ub984(\uae30\uc218)"}),Object(j.jsx)("div",{className:"navContainer-level",children:"\ub808\ubca8"}),Object(j.jsx)("div",{className:"navContainer-rank",children:"\ub7ad\ud06c"}),Object(j.jsx)("div",{className:"navContainer-KD",children:"KD(\ud0ac/\ub370\uc2a4)"}),Object(j.jsx)("div",{className:"navContainer-WL",children:"WL (\uc2b9\ub960)"})]})]})}),m=function(e){var t=e.isLogin,n=e.isRequest,r=e.checkGenerationGroup,a=e.modalOpenGroup,c=e.generationGroup,s=e.nameGroup,o=e.nickNameGroup,i=e.userInfo,u=e.generationTypeArr,l=e.requestUser,d=e.logout,p=a.isModalOpen,b=a.setIsModalOpen;return Object(j.jsxs)(j.Fragment,{children:[p?Object(j.jsx)(v,{isRequest:n,setIsModalOpen:b,generationGroup:c,nameGroup:s,nickNameGroup:o,requestUser:l}):null,Object(j.jsx)(O,{}),Object(j.jsx)(x,{isLogin:t,checkGenerationGroup:r,modalOpenGroup:a,generationTypeArr:u,logout:d}),i]})},k=(n(60),function(e){var t=e.uplayId,n=e.generation,r=e.name,a=e.userName,c=e.profileImage,s=e.level,o=e.rank,i=e.rankImage,u=e.wl,l=e.wins,d=e.losses,p=e.kd;return Object(j.jsx)("div",{className:"hover",children:Object(j.jsxs)("div",{className:"userContainer",onClick:function(){window.location.href="https://r6stats.com/stats/".concat(t)},children:[Object(j.jsx)("div",{className:"userContainer-img",children:Object(j.jsx)("img",{src:c,className:"userCenter-profile",alt:"profile"})}),Object(j.jsx)("div",{className:"userContainer-name",children:a}),Object(j.jsxs)("div",{className:"userContainer-generation",children:[r,"(",n,")"]}),Object(j.jsxs)("div",{className:"userContainer-level",children:["Lv.",s]}),Object(j.jsx)("div",{className:"userContainer-rank",children:Object(j.jsx)("img",{src:i,className:"userContainer-rank-img",alt:"rank"})}),Object(j.jsx)("div",{className:"usercontainer-rank-text",children:o}),Object(j.jsxs)("div",{className:"usercontainer-kd",children:["KD : ",p]}),Object(j.jsx)("div",{className:"usercontainer-con",children:Object(j.jsxs)("div",{className:"usercontainer-con-graph",children:[Object(j.jsx)("div",{className:"usercontainer-con-graph-okay",children:l}),Object(j.jsx)("div",{className:"usercontainer-con-graph-okay-loose",children:d})]})}),Object(j.jsxs)("div",{children:[u,"%"]})]})})}),g=function(e,t,n){var r="set"+(e.charAt(0).toUpperCase()+e.slice(1)),a=new Object;return a["".concat(e)]=t,a["".concat(r)]=n,a},w=n(11),N=n(21),y=n.n(N),C=new function e(){Object(w.a)(this,e),this.simpleAlert=function(e,t,n,r){return y.a.fire(e,t,n).then((function(){void 0!==r&&r()}))},this.confirmAlert=function(e,t,n,r){return y.a.fire({title:e,text:t,icon:n,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\ud655\uc778",cancelButtonText:"\ucde8\uc18c"}).then((function(e){e.value&&r()}))},this.Toast=function(e,t){return y.a.fire({icon:e,title:t,toast:!0,showConfirmButton:!1,timer:4500,timerProgressBar:!1,position:"top-end",width:450,background:"#fff",showClass:{popup:""}})}},G=function(){var e=Object(a.useState)(!0),t=Object(f.a)(e,2),n=(t[0],t[1]),r=Object(a.useState)(!0),c=Object(f.a)(r,2),s=c[0],o=c[1],i=Object(a.useState)(!1),d=Object(f.a)(i,2),b=d[0],h=d[1],O=Object(a.useState)(!1),v=Object(f.a)(O,2),x=v[0],w=v[1],N=Object(a.useState)("all"),y=Object(f.a)(N,2),G=y[0],A=y[1],T=Object(a.useState)(),U=Object(f.a)(T,2),S=U[0],I=U[1],D=Object(a.useState)(),B=Object(f.a)(D,2),M=B[0],F=B[1],L=Object(a.useState)(),q=Object(f.a)(L,2),P=q[0],R=q[1],E=p().stores.MainStore,J=E.users,K=E.hadleGetUser,W=(E.handleAddUser,E.handleAddUserNot),z=Object(a.useCallback)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("access-token");case 2:o(!1);case 3:case"end":return e.stop()}}),e)}))),[]),H=Object(a.useCallback)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("access-token");case 2:if(null!==e.sent){e.next=6;break}return o(!1),e.abrupt("return");case 6:o(!0);case 7:case"end":return e.stop()}}),e)}))),[o]),Q=Object(a.useCallback)(Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==S){e.next=3;break}return C.Toast("warning","\uae30\uc218\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"),e.abrupt("return");case 3:if(void 0!==M&&""!==M){e.next=6;break}return C.Toast("warning","\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),e.abrupt("return");case 6:if(void 0!==P&&""!==P){e.next=9;break}return C.Toast("warning","\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),e.abrupt("return");case 9:return t={generation:S,name:M,userName:P},e.prev=10,w(!0),e.next=14,W(t);case 14:w(!1),e.next=39;break;case 17:if(e.prev=17,e.t0=e.catch(10),!e.t0.response){e.next=37;break}w(!1),e.t1=e.t0.response.status,e.next=401===e.t1?24:403===e.t1?27:410===e.t1?30:33;break;case 24:return C.Toast("warning","\ub85c\uadf8\uc778 \ud6c4 \ub2e4\uc2dc \uc774\uc6a9\ud574\uc8fc\uc138\uc694"),h(!0),e.abrupt("return");case 27:return C.Toast("warning","\uc774\ubbf8 \uac00\uc785\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4"),h(!0),e.abrupt("return");case 30:return C.Toast("warning","\uc798\ubabb\ub41c \ub2c9\ub124\uc784\uc785\ub2c8\ub2e4"),h(!0),e.abrupt("return");case 33:return C.Toast("warning","\uc11c\ubc84 \uc624\ub958"),e.abrupt("return");case 35:e.next=39;break;case 37:return C.Toast("warning","\uc5f0\uacb0 \uc624\ub958"),e.abrupt("return");case 39:C.Toast("success","\ub4f1\ub85d \uc131\uacf5"),I(void 0),R(void 0),F(void 0),h(!1),window.location.reload();case 45:case"end":return e.stop()}}),e,null,[[10,17]])}))),[S,P,W,M]),V=Object(a.useCallback)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,H();case 4:return e.next=6,K();case 6:n(!1),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])}))),[K,H]);Object(a.useEffect)((function(){V()}),[V]);var X=J.filter((function(e){return"all"===G||G===e.generation})).map((function(e){var t=e.uniqueId,n=e.uplayId,r=e.generation,a=e.name,c=e.userName,s=e.profileImage,o=e.level,i=e.rank,u=e.rankImage,l=e.wl,d=e.wins,p=e.losses,b=e.kd;return Object(j.jsx)(k,{uplayId:n,generation:r,name:a,userName:c,profileImage:s,level:o,rank:i,rankImage:u,wl:l,wins:d,losses:p,kd:b},t)}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(m,{isLogin:s,isRequest:x,checkGenerationGroup:g("checkGeneration",G,A),modalOpenGroup:g("isModalOpen",b,h),generationGroup:g("generation",S,I),nameGroup:g("name",M,F),nickNameGroup:g("nickName",P,R),generationTypeArr:["all","1\uae30","2\uae30","3\uae30","4\uae30","5\uae30","6\uae30"],userInfo:X,requestUser:Q,logout:z})})},A=n(41),T=Object(A.a)(r||(r=Object(h.a)(["\n  @font-face {\n    font-family:'AppleSDGothicNeoM';\n    src: url(",");\n  }\n  body {\n    font-family: 'AppleSDGothicNeoM', sans-serif;\n  }\n"])),n(61)),U=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(T,{}),Object(j.jsx)(G,{})]})};var S,I,D,B,M,F=function(){return Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(U,{})}}),Object(j.jsx)(o.a,{exact:!0,path:"/redirect",render:function(){return Object(j.jsx)(b,{})}})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},q=n(46),P=n(45),R=n(13),E=n(15),J=(n(62),n(23)),K=n(2),W=n(16),z=n.n(W),H=n(17),Q=new(function(){function e(){Object(w.a)(this,e)}return Object(R.a)(e,[{key:"handleAddUser",value:function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("".concat(H.a,"/user"),t,{headers:{"access-token":n}});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleAddUserNot",value:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("".concat(H.a,"/user/not"),t,{headers:{"Access-Control-Allow-Origin":"*"}});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleGetUser",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get("".concat(H.a,"/user/all"),{headers:{"Access-Control-Allow-Origin":"*"}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()}]),e}()),V=Object(J.a)()((I=function(){function e(){Object(w.a)(this,e),Object(P.a)(this,"users",D,this)}return Object(R.a)(e,[{key:"handleAddUser",value:function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.handleAddUser(t,n);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleAddUserNot",value:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.handleAddUserNot(t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},{key:"hadleGetUser",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,r=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.handleGetUser();case 3:t=e.sent,n=t.data,Object(K.o)((function(){r.users=n})),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),D=Object(E.a)(I.prototype,"users",[K.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(E.a)(I.prototype,"handleAddUser",[K.f],Object.getOwnPropertyDescriptor(I.prototype,"handleAddUser"),I.prototype),Object(E.a)(I.prototype,"handleAddUserNot",[K.f],Object.getOwnPropertyDescriptor(I.prototype,"handleAddUserNot"),I.prototype),Object(E.a)(I.prototype,"hadleGetUser",[K.f],Object.getOwnPropertyDescriptor(I.prototype,"hadleGetUser"),I.prototype),S=I))||S,X=new(function(){function e(){Object(w.a)(this,e)}return Object(R.a)(e,[{key:"handleToken",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,z.a.get("".concat(H.a,"/token?code=").concat(t));case 4:return n=e.sent,r=n.data,console.log(2),e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),Y=Object(J.a)()((M=function(){function e(){Object(w.a)(this,e)}return Object(R.a)(e,[{key:"handleToken",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(1),e.next=4,X.handleToken(t);case 4:return n=e.sent,r=n.data,e.abrupt("return",r.token);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),Object(E.a)(M.prototype,"handleToken",[K.f],Object.getOwnPropertyDescriptor(M.prototype,"handleToken"),M.prototype),B=M))||B,Z={MainStore:new V,TokenStore:new Y};n(80);s.a.render(Object(j.jsx)(d.b,{stores:Z,children:Object(j.jsx)(q.a,{children:Object(j.jsx)(F,{})})}),document.getElementById("root")),L()}},[[81,1,2]]]);
//# sourceMappingURL=main.49259b48.chunk.js.map