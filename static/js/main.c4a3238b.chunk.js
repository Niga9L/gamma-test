(this["webpackJsonpgamma-test"]=this["webpackJsonpgamma-test"]||[]).push([[0],{47:function(e,t,n){e.exports=n(58)},52:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a,o=n(0),c=n.n(o),r=n(4),i=n.n(r),s=(n(52),n(18)),d=n(10),u=Object(o.createContext)(),l=n(16),m=n(13),p=(a={},Object(l.a)(a,"ADD_NUMBER",(function(e,t){return Object(m.a)(Object(m.a)({},e),{},{widgetState:t.widgetState})})),Object(l.a)(a,"CHANGE_NAME",(function(e,t){return Object(m.a)(Object(m.a)({},e),{},{desktopState:t.desktopState})})),Object(l.a)(a,"ADD_DESKTOP",(function(e,t){return Object(m.a)(Object(m.a)({},e),{},{desktopState:t.desktopState})})),Object(l.a)(a,"CHANGE_DESKTOP",(function(e,t){return Object(m.a)(Object(m.a)({},e),{},{currentDesktop:t.id})})),Object(l.a)(a,"DEFAULT",(function(e){return e})),a),k=function(e,t){return(p[t.type]||p.DEFAULT)(e,t)},h=function(e){return(new Date).getTime().toString()+Math.floor(Math.random()*Math.floor(e))},g=function(e){var t=e.children,n={desktopState:[{desktopId:(new Date).getTime().toString(),name:"\u041c\u043e\u0439 \u0440\u0430\u0431\u043e\u0447\u0438\u0439 \u0441\u0442\u043e\u043b"},{desktopId:h(20),name:"\u0420\u0430\u0431\u043e\u0447\u0438\u0439 \u0441\u0442\u043e\u043b 2"}],widgetState:[{objectId:h(100),desktopPosition:(new Date).getTime().toString(),width:650,height:380,x:100,y:250},{objectId:h(100),desktopPosition:(new Date).getTime().toString(),width:550,height:300,x:1e3,y:150}],currentDesktop:(new Date).getTime().toString()},a=Object(o.useReducer)(k,n),r=Object(d.a)(a,2),i=r[0],l=r[1];return c.a.createElement(u.Provider,{value:{state:i,changeDesktop:function(e,t){var n=Object(s.a)(i.widgetState).map((function(n){return n.objectId===t&&(n.desktopPosition=e),n}));l({ADD_NUMBER:"ADD_NUMBER",widgetState:n})},changePosition:function(e,t){var n=Object(s.a)(i.widgetState).map((function(n){return n.objectId===e&&(n.x=t.x,n.y=t.y),n}));l({type:"ADD_NUMBER",widgetState:n})},changeSize:function(e,t,n){var a=Object(s.a)(i.widgetState).map((function(a){return a.objectId===e&&(a.width=t.width,a.height=t.height,a.x=n.x,a.y=n.y),a}));l({type:"ADD_NUMBER",widgetState:a})},changeDesktopName:function(e,t){var n=Object(s.a)(i.desktopState).map((function(n){return n.desktopId===t&&(n.name=e),n}));l({type:"CHANGE_NAME",desktopState:n})},addNewDesktop:function(){var e=[].concat(Object(s.a)(i.desktopState),[{desktopId:h(20),name:"\u041d\u043e\u0432\u044b\u0439 \u0440\u0430\u0431\u043e\u0447\u0438\u0439 \u0441\u0442\u043e\u043b"}]);l({type:"ADD_DESKTOP",desktopState:e})},changeCurrentDesktop:function(e){l({type:"CHANGE_DESKTOP",id:e})},deleteDesktop:function(e){var t=Object(s.a)(i.desktopState).filter((function(t){return t.desktopId!==e}));l({type:"ADD_DESKTOP",desktopState:t})}}},t)},f=n(41),b=n(82),E=function(){var e=Object(o.useContext)(u),t=e.state,n=e.changeCurrentDesktop,a=e.addNewDesktop,r=e.deleteDesktop,i=e.changeDesktopName,s=Object(o.useState)(t.desktopState),l=Object(d.a)(s,2),m=l[0],p=l[1],k=Object(o.useState)(!0),h=Object(d.a)(k,2),g=h[0],E=h[1],S=Object(o.useState)(""),j=Object(d.a)(S,2),D=j[0],O=j[1],v=t.currentDesktop,w=function(e){window.confirm("\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0440\u0430\u0431\u043e\u0447\u0438\u0439 \u0441\u0442\u043e\u043b?")&&r(e)},y=function(e){"Enter"===e.key&&(i(D,v),e.target.value="",g||E(!g))};return Object(o.useEffect)((function(){p(t.desktopState)}),[t.desktopState]),c.a.createElement("div",{className:"navbar-nav"},c.a.createElement(f.a,{list:m,setList:p,className:"navbar-nav"},m.map((function(e){return e.desktopId===v?g?c.a.createElement("div",{className:"nav-items",key:e.desktopId},c.a.createElement("span",{className:"nav-item","data-id":e.desktopId,onDoubleClick:function(e){return E(!g)}},e.name),c.a.createElement(b.a,{className:"icon close",onClick:function(t){return w(e.desktopId)}},"highlight_off")):c.a.createElement("input",{key:e.desktopId,type:"text",onChange:function(e){return O(e.target.value)},onKeyPress:y}):c.a.createElement("div",{className:"nav-items",key:e.desktopId},c.a.createElement("span",{className:"nav-item","data-id":e.desktopId,onClick:function(e){return function(e){g||E(!g);var t=e.target.getAttribute("data-id");n(t)}(e)}},e.name),c.a.createElement(b.a,{className:"icon close",onClick:function(t){return w(e.desktopId)}},"highlight_off"))}))),c.a.createElement(b.a,{className:"icon",onClick:a},"add_circle"))},S=function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement(E,null))},j=n(38),D={border:"solid 1px #ddd",background:"#D6FF79"},O=function(e){var t=Object(o.useContext)(u),n=t.changePosition,a=t.changeSize;return c.a.createElement(j.a,{style:D,onDragStop:function(t,a){var o={x:a.x,y:a.y};n(e.id,o)},onResizeStop:function(t,n,o,c,r){var i={width:o.style.width,height:o.style.height};a(e.id,i,r)},default:{x:e.x,y:e.y,width:e.width,height:e.height},bounds:".container"},e.children)},v=n(85),w=n(86),y=n(87),N=function(e){var t=Object(o.useState)(null),n=Object(d.a)(t,2),a=n[0],r=n[1],i=Object(o.useContext)(u).state.desktopState,s=function(){r(null)};return c.a.createElement("div",{className:"rnd-menu"},c.a.createElement("div",{className:"menu-changer"},c.a.createElement(v.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)}},c.a.createElement(b.a,{className:"changer"},"swap_horiz")),c.a.createElement(w.a,{id:"simple",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:s},i.map((function(t){return c.a.createElement(y.a,{key:t.desktopId,"data-id":t.desktopId,onClick:function(n){e.onSwapHandler(t.desktopId,e.id),s()}},t.name)})))))},I=function(){var e=Object(o.useContext)(u),t=e.state,n=e.changeDesktop,a=Object(o.useState)(!0),r=Object(d.a)(a,2),i=r[0],s=r[1],l=t.widgetState,m=t.currentDesktop,p=function(e,t){n(e,t),s(!i)};return c.a.createElement(c.a.Fragment,null,l.map((function(e){if(e.desktopPosition===m)return c.a.createElement(O,{width:e.width,height:e.height,x:e.x,y:e.y,id:e.objectId,key:e.objectId},c.a.createElement(N,{id:e.objectId,onSwapHandler:p}))})))},x=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(S,null),c.a.createElement("div",{className:"container"},c.a.createElement(I,null)))};var C=function(){return c.a.createElement(g,null,c.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.c4a3238b.chunk.js.map