(this.webpackJsonpr6=this.webpackJsonpr6||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"a":"http://34.64.75.208:8080/api"}')},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(20),c=n.n(a),s=n(4),o=n(3),i=n.n(o),u=n(5),l=n(22),d=function(){return Object(r.useContext)(l.a)},p=n(1),j=function(){var e=new URLSearchParams(Object(s.f)().search),t=d().stores.TokenStore.handleToken,n=Object(r.useCallback)(Object(u.a)(i.a.mark((function n(){var r,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===(r=String(e.get("code")))&&window.location.replace("/"),n.prev=2,n.next=5,t(r);case 5:return a=n.sent,console.log(2),n.next=9,localStorage.setItem("access-token",a);case 9:window.location.replace("/"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),window.location.replace("/");case 15:window.location.replace("/");case 16:case"end":return n.stop()}}),n,null,[[2,12]])}))),[]);return Object(r.useEffect)((function(){n()}),[n]),Object(p.jsx)(p.Fragment,{})},b=n(13),h=(n(50),function(){return Object(p.jsx)("div",{className:"header",children:Object(p.jsxs)("div",{className:"header-title",children:[Object(p.jsx)("div",{className:"header-title-big",children:"DDR6"}),Object(p.jsxs)("div",{className:"header-title-small",children:["Dgsw Dictionary R6S ",Object(p.jsx)("br",{}),"\ub300\uad6c\uc18c\ud504\ud2b8\uc6e8\uc5b4\uace0\ub4f1\ud559\uad50\uc758 \ub808\uc778\ubcf4\uc6b0 \uc2dd\uc2a4 \uc2dc\uc988 \uc720\uc800 \uc815\ubcf4\ub97c \uae30\ub85d\ud569\ub2c8\ub2e4"]})]})})}),O=(n(51),function(e){var t=e.isRequest,n=e.setIsModalOpen,r=e.generationGroup,a=e.nameGroup,c=e.nickNameGroup,s=e.requestUser,o=r.setGeneration,i=c.nickName,u=c.setNickName,l=a.name,d=a.setName;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"modal"}),Object(p.jsxs)("div",{className:"modal-container",children:[Object(p.jsx)("div",{className:"modal-container-close",onClick:function(){return n(!1)},children:"x"}),Object(p.jsxs)("div",{className:"modal-container-dropbox",children:["\uae30\uc218\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694 ",Object(p.jsx)("br",{}),Object(p.jsxs)("select",{className:"modal-container-dropbox-box",onChange:function(e){return o(e.target.value)},children:[Object(p.jsx)("option",{selected:!0,disabled:!0,hidden:!0,children:"\uae30\uc218\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),Object(p.jsx)("option",{value:"1\uae30",children:"1\uae30"}),Object(p.jsx)("option",{value:"2\uae30",children:"2\uae30"}),Object(p.jsx)("option",{value:"3\uae30",children:"3\uae30"}),Object(p.jsx)("option",{value:"4\uae30",children:"4\uae30"}),Object(p.jsx)("option",{value:"5\uae30",children:"5\uae30"}),Object(p.jsx)("option",{value:"6\uae30",children:"6\uae30"})]})]}),Object(p.jsxs)("div",{className:"modal-container-dropbox",children:["\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694  ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:l,onChange:function(e){return d(e.target.value)},className:"modal-container-dropbox-box"})]}),Object(p.jsxs)("div",{className:"modal-container-dropbox",children:["\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694  ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",placeholder:"R6 \ub2c9\ub124\uc784\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:i,onChange:function(e){return u(e.target.value)},className:"modal-container-dropbox-box"})]}),Object(p.jsx)("div",{className:"modal-containter-button",onClick:function(){return s()},children:t?"\uc804\uc1a1\uc911\uc785\ub2c8\ub2e4":"\ub4f1\ub85d"})]})]})}),v=(n(52),function(e){e.isLogin;var t=e.modalOpenGroup,n=(e.logout,t.setIsModalOpen);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"navButtons",children:Object(p.jsx)("div",{className:"navButtons-login",onClick:function(){return n(!0)},children:"\ub4f1\ub85d"})}),Object(p.jsxs)("div",{className:"navContainer",children:[Object(p.jsx)("div",{className:"navContainer-profile",children:"\ud504\ub85c\ud544"}),Object(p.jsx)("div",{className:"navContainer-name",children:"\uc774\ub984(\uae30\uc218)"}),Object(p.jsx)("div",{className:"navContainer-level",children:"\ub808\ubca8"}),Object(p.jsx)("div",{className:"navContainer-rank",children:"\ub7ad\ud06c"}),Object(p.jsx)("div",{className:"navContainer-KD",children:"KD(\ud0ac/\ub370\uc2a4)"}),Object(p.jsx)("div",{className:"navContainer-WL",children:"WL (\uc2b9\ub960)"})]})]})}),f=function(e){var t=e.isLogin,n=e.isRequest,r=e.modalOpenGroup,a=e.generationGroup,c=e.nameGroup,s=e.nickNameGroup,o=e.userInfo,i=e.requestUser,u=e.logout,l=r.isModalOpen,d=r.setIsModalOpen;return Object(p.jsxs)(p.Fragment,{children:[l?Object(p.jsx)(O,{isRequest:n,setIsModalOpen:d,generationGroup:a,nameGroup:c,nickNameGroup:s,requestUser:i}):null,Object(p.jsx)(h,{}),Object(p.jsx)(v,{isLogin:t,modalOpenGroup:r,logout:u}),o]})},x=(n(53),function(e){var t=e.generation,n=e.name,r=e.userName,a=e.profileImage,c=e.level,s=e.rank,o=e.rankImage,i=e.wl,u=e.wins,l=e.losses,d=e.kd;return Object(p.jsxs)("div",{className:"userContainer",children:[Object(p.jsx)("div",{className:"userContainer-img",children:Object(p.jsx)("img",{src:a,className:"userCenter-profile",alt:"profile"})}),Object(p.jsx)("div",{className:"userContainer-name",children:r}),Object(p.jsxs)("div",{className:"userContainer-generation",children:[n,"(",t,")"]}),Object(p.jsxs)("div",{className:"userContainer-level",children:["Lv.",c]}),Object(p.jsx)("div",{className:"userContainer-rank",children:Object(p.jsx)("img",{src:o,className:"userContainer-rank-img",alt:"rank"})}),Object(p.jsx)("div",{className:"usercontainer-rank-text",children:s}),Object(p.jsxs)("div",{className:"usercontainer-kd",children:["KD : ",d]}),Object(p.jsx)("div",{className:"usercontainer-con",children:Object(p.jsxs)("div",{className:"usercontainer-con-graph",children:[Object(p.jsx)("div",{className:"usercontainer-con-graph-okay",children:u}),Object(p.jsx)("div",{className:"usercontainer-con-graph-okay-loose",children:l})]})}),Object(p.jsxs)("div",{children:[i,"%"]})]})}),m=function(e,t,n){var r="set"+(e.charAt(0).toUpperCase()+e.slice(1)),a=new Object;return a["".concat(e)]=t,a["".concat(r)]=n,a},k=n(11),g=n(19),w=n.n(g),N=new function e(){Object(k.a)(this,e),this.simpleAlert=function(e,t,n,r){return w.a.fire(e,t,n).then((function(){void 0!==r&&r()}))},this.confirmAlert=function(e,t,n,r){return w.a.fire({title:e,text:t,icon:n,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\ud655\uc778",cancelButtonText:"\ucde8\uc18c"}).then((function(e){e.value&&r()}))},this.Toast=function(e,t){return w.a.fire({icon:e,title:t,toast:!0,showConfirmButton:!1,timer:4500,timerProgressBar:!1,position:"top-end",width:450,background:"#fff",showClass:{popup:""}})}},y=function(){var e=Object(r.useState)(!0),t=Object(b.a)(e,2),n=(t[0],t[1]),a=Object(r.useState)(!0),c=Object(b.a)(a,2),s=c[0],o=c[1],l=Object(r.useState)(!1),j=Object(b.a)(l,2),h=j[0],O=j[1],v=Object(r.useState)(!1),k=Object(b.a)(v,2),g=k[0],w=k[1],y=Object(r.useState)(),C=Object(b.a)(y,2),U=C[0],G=C[1],T=Object(r.useState)(),S=Object(b.a)(T,2),I=S[0],A=S[1],D=Object(r.useState)(),B=Object(b.a)(D,2),L=B[0],q=B[1],F=d().stores.MainStore,M=F.users,P=F.hadleGetUser,R=F.handleAddUser,E=F.handleAddUserNot,J=Object(r.useCallback)(Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("access-token");case 2:o(!1);case 3:case"end":return e.stop()}}),e)}))),[]),K=Object(r.useCallback)(Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("access-token");case 2:if(null!==e.sent){e.next=6;break}return o(!1),e.abrupt("return");case 6:o(!0);case 7:case"end":return e.stop()}}),e)}))),[o]),W=Object(r.useCallback)(Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==U){e.next=3;break}return N.Toast("warning","\uae30\uc218\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"),e.abrupt("return");case 3:if(void 0!==I&&""!==I){e.next=6;break}return N.Toast("warning","\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),e.abrupt("return");case 6:if(void 0!==L&&""!==L){e.next=9;break}return N.Toast("warning","\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),e.abrupt("return");case 9:return t={generation:U,name:I,userName:L},e.prev=10,w(!0),e.next=14,E(t);case 14:w(!1),e.next=39;break;case 17:if(e.prev=17,e.t0=e.catch(10),!e.t0.response){e.next=37;break}w(!1),e.t1=e.t0.response.status,e.next=401===e.t1?24:403===e.t1?27:410===e.t1?30:33;break;case 24:return N.Toast("warning","\ub85c\uadf8\uc778 \ud6c4 \ub2e4\uc2dc \uc774\uc6a9\ud574\uc8fc\uc138\uc694"),O(!0),e.abrupt("return");case 27:return N.Toast("warning","\uc774\ubbf8 \uac00\uc785\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4"),O(!0),e.abrupt("return");case 30:return N.Toast("warning","\uc798\ubabb\ub41c \ub2c9\ub124\uc784\uc785\ub2c8\ub2e4"),O(!0),e.abrupt("return");case 33:return N.Toast("warning","\uc11c\ubc84 \uc624\ub958"),e.abrupt("return");case 35:e.next=39;break;case 37:return N.Toast("warning","\uc5f0\uacb0 \uc624\ub958"),e.abrupt("return");case 39:N.Toast("success","\ub4f1\ub85d \uc131\uacf5"),G(void 0),q(void 0),A(void 0),O(!1),window.location.reload();case 45:case"end":return e.stop()}}),e,null,[[10,17]])}))),[U,L,R,g]),z=Object(r.useCallback)(Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,K();case 4:return e.next=6,P();case 6:n(!1),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])}))),[P,K]);Object(r.useEffect)((function(){z()}),[z]);var H=M.map((function(e){var t=e.uniqueId,n=e.generation,r=e.name,a=e.userName,c=e.profileImage,s=e.level,o=e.rank,i=e.rankImage,u=e.wl,l=e.wins,d=e.losses,j=e.kd;return Object(p.jsx)(x,{generation:n,name:r,userName:a,profileImage:c,level:s,rank:o,rankImage:i,wl:u,wins:l,losses:d,kd:j},t)}));return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(f,{isLogin:s,isRequest:g,modalOpenGroup:m("isModalOpen",h,O),generationGroup:m("generation",U,G),nameGroup:m("name",I,A),nickNameGroup:m("nickName",L,q),userInfo:H,requestUser:W,logout:J})})},C=function(){return Object(p.jsx)(y,{})};var U,G,T,S,I,A=function(){return Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{exact:!0,path:"/",render:function(){return Object(p.jsx)(C,{})}}),Object(p.jsx)(s.a,{exact:!0,path:"/redirect",render:function(){return Object(p.jsx)(j,{})}})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},B=n(39),L=n(38),q=n(12),F=n(15),M=(n(54),n(21)),P=n(2),R=n(16),E=n.n(R),J=n(17),K=new(function(){function e(){Object(k.a)(this,e)}return Object(q.a)(e,[{key:"handleAddUser",value:function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("".concat(J.a,"/user"),t,{headers:{"access-token":n}});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleAddUserNot",value:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("".concat(J.a,"/user/not"),t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleGetUser",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(J.a,"/user/all"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()}]),e}()),W=Object(M.a)()((G=function(){function e(){Object(k.a)(this,e),Object(L.a)(this,"users",T,this)}return Object(q.a)(e,[{key:"handleAddUser",value:function(){var e=Object(u.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.handleAddUser(t,n);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleAddUserNot",value:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.handleAddUserNot(t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},{key:"hadleGetUser",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.handleGetUser();case 3:t=e.sent,n=t.data,Object(P.o)((function(){r.users=n})),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),T=Object(F.a)(G.prototype,"users",[P.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(F.a)(G.prototype,"handleAddUser",[P.f],Object.getOwnPropertyDescriptor(G.prototype,"handleAddUser"),G.prototype),Object(F.a)(G.prototype,"handleAddUserNot",[P.f],Object.getOwnPropertyDescriptor(G.prototype,"handleAddUserNot"),G.prototype),Object(F.a)(G.prototype,"hadleGetUser",[P.f],Object.getOwnPropertyDescriptor(G.prototype,"hadleGetUser"),G.prototype),U=G))||U,z=new(function(){function e(){Object(k.a)(this,e)}return Object(q.a)(e,[{key:"handleToken",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,E.a.get("".concat(J.a,"/token?code=").concat(t));case 4:return n=e.sent,r=n.data,console.log(2),e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),H=Object(M.a)()((I=function(){function e(){Object(k.a)(this,e)}return Object(q.a)(e,[{key:"handleToken",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(1),e.next=4,z.handleToken(t);case 4:return n=e.sent,r=n.data,e.abrupt("return",r.token);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),Object(F.a)(I.prototype,"handleToken",[P.f],Object.getOwnPropertyDescriptor(I.prototype,"handleToken"),I.prototype),S=I))||S,Q={MainStore:new W,TokenStore:new H};n(73);c.a.render(Object(p.jsx)(l.b,{stores:Q,children:Object(p.jsx)(B.a,{children:Object(p.jsx)(A,{})})}),document.getElementById("root")),D()}},[[74,1,2]]]);
//# sourceMappingURL=main.626b4208.chunk.js.map