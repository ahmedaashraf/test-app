(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t(1),a=t.n(c),s=t(3),i=t.n(s),l=(t(15),t(16),t(4)),u=t.n(l),r=t(5),d=t(6),g=t(9),f=t(8),p=t(7),b=t.n(p),h=function(e){Object(g.a)(t,e);var n=Object(f.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=n.call(this,e)).state={},o}return Object(d.a)(t,[{key:"responseFacebook",value:function(e){console.log(e)}},{key:"loadFbLoginApi",value:function(){window.fbAsyncInit=function(){window.FB.init({appId:325286625361086,cookie:!0,xfbml:!0,version:"v9.0"})},console.log("Loading fb api"),function(e,n,t){var o,c=e.getElementsByTagName(n)[0];e.getElementById(t)||((o=e.createElement(n)).id=t,o.src="//connect.facebook.net/en_US/sdk.js",c.parentNode.insertBefore(o,c))}(document,"script","facebook-jssdk")}},{key:"componentDidMount",value:function(){this.loadFbLoginApi()}},{key:"testAPI",value:function(){console.log("Welcome!  Fetching your information.... "),window.FB.api("/me",(function(e){console.log("Successful login for: "+e.name),document.getElementById("status").innerHTML="Thanks for logging in, "+e.name+"!"}))}},{key:"statusChangeCallback",value:function(e){console.log("statusChangeCallback"),console.log(e),"connected"===e.status?this.testAPI():"not_authorized"===e.status?console.log("Please log into this app."):console.log("Please log into this facebook.")}},{key:"checkLoginState",value:function(){window.FB.getLoginStatus(function(e){this.statusChangeCallback(e)}.bind(this))}},{key:"handleFBLogin",value:function(){window.FB.login(this.checkLoginState())}},{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)(b.a,{appId:"1088597931155576",autoLoad:!0,fields:"name,email,picture",scope:"public_profile,user_friends,user_actions.books",callback:this.responseFacebook})})}}]),t}(a.a.Component);var j=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("h6",{children:"Ahmed Ashraf's Test Page"}),Object(o.jsxs)("div",{children:[Object(o.jsx)(u.a,{pageId:"1210758752321211",appId:"232520608490022"}),Object(o.jsx)(h,{})]}),Object(o.jsx)("div",{class:"fb-customerchat",page_id:"1210758752321211"})]})})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),o(e),c(e),a(e),s(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),k()}},[[21,1,2]]]);
//# sourceMappingURL=main.4ed43aeb.chunk.js.map