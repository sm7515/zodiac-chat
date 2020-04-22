(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{121:function(e,t){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),s=a.n(o),c=(a(70),a(71),a(62)),i=a(8),l=a(24);var u=a(12),m=a.n(u);function p(e){var t=e.setError,a=e.error;return r.a.createElement("div",{className:"register"},r.a.createElement("form",{onSubmit:function(e){return function(e){var a=e.currentTarget.name.value,n=e.currentTarget.password.value,r=e.currentTarget.dob.value;e.preventDefault(),m.a.post("http://linserv1.cims.nyu.edu:23203/register",{name:a,pwd:n,dob:r}).then((function(){window.location="/login"})).catch((function(e){console.log(e.response.data),t(e.response.data)}))}(e)},className:"register-form"},r.a.createElement("label",{htmlFor:"name"},"username: "),r.a.createElement("input",{type:"text",name:"name",required:!0}),r.a.createElement("label",{htmlFor:"dob"},"Date of Birth"),r.a.createElement("input",{type:"date",name:"dob",max:(new Date).toJSON().slice(0,10),required:!0}),r.a.createElement("label",{htmlFor:"password"},"password"),r.a.createElement("input",{type:"password",name:"password",minlength:"6",required:!0}),r.a.createElement("button",{type:"submit"},"Register"),r.a.createElement("button",{onClick:function(){window.location="/login"}},"Login")),""!==a.error&&r.a.createElement("p",{className:"error"},a.error))}function g(e){var t=e.setError,a=e.error,n=e.setLogin,o=e.setName,s=e.setId,c=e.user;return r.a.createElement("div",{className:"login"},r.a.createElement("form",{onSubmit:function(e){return function(e){var a=e.currentTarget.name.value,r=e.currentTarget.password.value;e.preventDefault(),m.a.post("http://linserv1.cims.nyu.edu:23203/login",{name:a,pwd:r}).then((function(e){localStorage.setItem("uid",e.data.id),o(e.data.name),s(e.data.id),n(c.id===localStorage.getItem("uid")),t("")})).catch((function(e){console.log(e),e.response&&t(e.response.data)}))}(e)},className:"login-form"},r.a.createElement("label",{htmlFor:"name"},"username: "),r.a.createElement("input",{type:"text",name:"name",required:!0}),r.a.createElement("label",{htmlFor:"password"},"password"),r.a.createElement("input",{type:"password",name:"password",required:!0}),r.a.createElement("button",{type:"submit"},"Login"),r.a.createElement("button",{onClick:function(){window.location="/"}},"Register")),""!==a.error&&r.a.createElement("p",{className:"error"},a.error))}var d=a(64),f=a(13),E=a(14),b=a(15),h=a(16),v=a(17),y=a(61),S=a.n(y),N={Aries:"#ff5353",Taurus:"#80c181",Gemini:"#ffe153",Cancer:"#c8c8c8",Leo:"#ffa359",Virgo:"#b08266",Libra:"#fdbebc",Scorpio:"#242424",Sagittarius:"#c0adef",Capricorn:"#666b66",Aquarius:"#80bfea",Pisces:"#a1e2c4"},w=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){var e="10px solid"+N[this.props.sign],t={alignSelf:this.props.myName?"flex-end":"flex-start",flexDirection:this.props.myName?"row-reverse":"row",borderLeft:this.props.myName?"none":e,borderRight:this.props.myName?e:"none"},a=N[this.props.sign],n=new Date(this.props.timestamp);return r.a.createElement("div",{className:"Message",style:t},r.a.createElement("div",{className:"profile-img",style:{backgroundColor:"".concat(a)}},r.a.createElement("img",{src:this.props.img,alt:"zodiac-sign"})),r.a.createElement("p",null,this.props.text),r.a.createElement("span",{className:"timestamp"},r.a.createElement("span",null,this.props.name),n.getHours()+":"+n.getMinutes()+":"+n.getSeconds()))}}]),a}(n.Component),O=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).submit=n.submit.bind(Object(b.a)(n)),n}return Object(E.a)(a,[{key:"submit",value:function(e){e.preventDefault(),this.props.socket.emit("new message",[e.target.text.value,this.props.user]),e.target.text.value=""}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submit,className:"composer-container"},r.a.createElement("input",{autoComplete:"off",name:"text",className:"composer",autoFocus:!0}))}}]),a}(n.Component),k=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={messages:[]},n.logout=n.logout.bind(Object(b.a)(n)),n}return Object(E.a)(a,[{key:"logout",value:function(){localStorage.setItem("uid",""),this.props.setLogin(!1),this.socket.disconnect()}},{key:"componentDidMount",value:function(){var e=this;this.socket=S.a.connect("http://linserv1.cims.nyu.edu:23203/"),this.socket.on("connect",(function(){console.log(e.props.user),e.socket.emit("request sign",[e.props.user.sign,e.props.user.name,e.props.user.img])})),this.socket.on("new message",(function(t){var a=e.state.messages.slice();a.push(t),e.setState({messages:a})}))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.messages.map((function(t,a){return console.log(t),r.a.createElement(w,{myName:t.name===e.props.user.name,text:t.text,sign:t.sign,timestamp:t.timestamp,img:t.img,name:t.name,key:a})})).reverse();return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.logout},"logout"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"messages"},t)),r.a.createElement("div",{className:"text-area"},r.a.createElement(O,{socket:this.socket,user:this.props.user})))}}]),a}(n.Component);function I(e){var t=e.setLogin,a=e.user,o=e.setImg,s=e.setSign,c=e.setName,i=localStorage.getItem("uid"),l=Object(n.useState)(!1),u=Object(d.a)(l,2),p=u[0],g=u[1];return Object(n.useEffect)((function(){i=localStorage.getItem("uid"),a.id=i,""!==i&&m.a.get("http://linserv1.cims.nyu.edu:23203/user?id=".concat(i)).then((function(e){a.name=e.data.name,a.sign=e.data.sign,a.img=e.data.img,o(a.img),s(a.sign),c(a.name),console.log(a),g(p=!0)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"home"},""!==a.sign&&""!==a.img&&p&&r.a.createElement(k,{user:a,setLogin:t}))}var j=Object(l.b)((function(e){return{user:e.userReducer,error:e.errorReducer}}),(function(e){return{setName:function(t){e(function(e){return{type:"SET_NAME",payload:e}}(t))},setId:function(t){e(function(e){return{type:"SET_ID",payload:e}}(t))},setSign:function(t){e(function(e){return{type:"SET_SIGN",payload:e}}(t))},setImg:function(t){e(function(e){return{type:"SET_IMG",payload:e}}(t))},setLogin:function(t){e({type:"SET_LOGIN",payload:t})},setError:function(t){e(function(e){return{type:"SET_ERROR",payload:e}}(t))}}}))((function(e){var t=localStorage.getItem("uid");return Object(n.useEffect)((function(){t=localStorage.getItem("uid")}),[t]),r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(i.b,{exact:!0,path:"/"},localStorage.getItem("uid")!==e.user.id?r.a.createElement(p,{setError:e.setError,error:e.error}):r.a.createElement(i.a,{to:"/home"})),r.a.createElement(i.b,{exact:!0,path:"/login"},localStorage.getItem("uid")!==e.user.id?r.a.createElement(g,{setError:e.setError,error:e.error,setLogin:e.setLogin,setName:e.setName,setId:e.setId,user:e.user}):r.a.createElement(i.a,{to:"/home"})),r.a.createElement(i.b,{exact:!0,path:"/home"},t?r.a.createElement(I,{setLogin:e.setLogin,user:e.user,setSign:e.setSign,setImg:e.setImg,setId:e.setId,setName:e.setName}):r.a.createElement(i.a,{to:"/login"}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(19),T=a(9),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"",sign:"",img:"",id:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NAME":e=Object(T.a)({},e,{name:t.payload});break;case"SET_ID":e=Object(T.a)({},e,{id:t.payload});break;case"SET_SIGN":e=Object(T.a)({},e,{sign:t.payload});break;case"SET_IMG":e=Object(T.a)({},e,{img:t.payload});break;case"SET_LOGIN":e=Object(T.a)({},e,{loggedin:t.payload})}return e},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{error:""},t=arguments.length>1?arguments[1]:void 0;return"SET_ERROR"===t.type&&(e=Object(T.a)({},e,{error:t.payload})),e},_=Object(x.c)(Object(x.b)({userReducer:L,errorReducer:R}));s.a.render(r.a.createElement(l.a,{store:_},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){e.exports=a(125)},70:function(e,t,a){},71:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.ed3712f4.chunk.js.map