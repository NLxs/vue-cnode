(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)i=o[p],s[i]&&d.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-cnode/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"0931":function(t,e,a){"use strict";var n=a("ddb5"),s=a.n(n);s.a},2989:function(t,e,a){"use strict";var n=a("ec86"),s=a.n(n);s.a},"2a5c":function(t,e,a){"use strict";var n=a("a5c8"),s=a.n(n);s.a},"2c2b":function(t,e,a){"use strict";var n=a("a0ee"),s=a.n(n);s.a},"2e03":function(t,e,a){"use strict";var n=a("6671"),s=a.n(n);s.a},"494e":function(t,e,a){"use strict";var n=a("abbf"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("672e"),a("450d");var n=a("101e"),s=a.n(n),r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"app_main"},[a("router-view",{attrs:{name:"main"}}),a("router-view",{attrs:{name:"slidebar"}})],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"navbar_wrapper"},[n("div",{staticClass:"navbar"},[n("div",{staticClass:"brand"},[n("router-link",{attrs:{to:{name:"root"}}},[n("img",{attrs:{src:a("d686"),alt:""}})])],1),n("ul",{staticClass:"nav"},[n("li",[n("router-link",{attrs:{to:{name:"root"}}},[n("span",[t._v("首页")])])],1),n("li",[n("router-link",{attrs:{to:{name:"get_start"}}},[n("span",[t._v("新手入门")])])],1),t._m(0),t._m(1),t._m(2),t._m(3)])])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("API")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("关于")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("注册")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("登录")])])}],u={name:"Header"},p=u,d=(a("2a5c"),a("2877")),_=Object(d["a"])(p,c,l,!1,null,"746786ec",null),f=_.exports,v={name:"App",components:{Header:f}},h=v,m=(a("034f"),Object(d["a"])(h,i,o,!1,null,null,null)),g=m.exports,b=a("bc3a"),C=a.n(b),y=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article"},[a("div",{staticClass:"article_content_wrapper"},[a("div",{staticClass:"article_content"},[t.isLoading?a("div",{staticClass:"loading"},[a("Loader")],1):a("div",[a("div",{staticClass:"topic_header"},[a("div",{staticClass:"topic_title"},[t._v(t._s(t.post.title))]),a("ul",[a("li",[a("span",{staticClass:"spot"},[t._v("•")]),t._v("发布于 "+t._s(t._f("formatDate")(t.post.create_at)))]),a("li",[a("span",{staticClass:"spot"},[t._v("•")]),t._v("作者 "+t._s(t.post.author.loginname))]),a("li",[a("span",{staticClass:"spot"},[t._v("•")]),t._v(t._s(t.post.visit_count)+" 次浏览")]),a("li",[a("span",{staticClass:"spot"},[t._v("•")]),t._v("来自 "+t._s(t._f("tabFormatter")(t.post)))])]),a("div",{staticClass:"topic_content markdown-body",domProps:{innerHTML:t._s(t.post.content)}})]),a("div",{attrs:{id:"reply"}},[a("div",{staticClass:"topbar"},[t._v("回复")]),t._l(t.post.replies,function(e,n){return a("div",{key:n,staticClass:"replySec"},[a("div",{staticClass:"replyUp"},[a("router-link",{attrs:{to:{name:"user_info",params:{name:e.author.loginname}}}},[a("img",{attrs:{src:e.author.avatar_url,alt:""}})]),a("router-link",{attrs:{to:{name:"user_info",params:{name:e.author.loginname}}}},[a("span",[t._v(t._s(e.author.loginname))])]),a("span",[t._v("\n                                "+t._s(n+1)+"楼\n                            ")]),e.ups.length>0?a("span",[t._v(" ☝ "+t._s(e.ups.length)+"\n                            ")]):a("span")],1),a("p",{staticClass:"reply_content",domProps:{innerHTML:t._s(e.content)}})])})],2)])])])])},j=[],w={name:"Article",data:function(){return{isLoading:!1,post:{}}},methods:{getArticleData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topic/".concat(this.$route.params.id)).then(function(e){t.post=e.data.data,t.isLoading=!1}).catch(function(t){console.log(t)})}},beforeMount:function(){this.isLoading=!0,this.getArticleData()},watch:{$route:function(t,e){this.getArticleData()}}},$=w,L=(a("2e03"),Object(d["a"])($,k,j,!1,null,"a271dc1a",null)),E=L.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_panel"},[t.isLoading?a("div",{staticClass:"loading"},[a("Loader")],1):a("div",{staticClass:"topic_panel"},[a("ul",[t._m(0),t._l(t.posts,function(e){return a("li",{key:e.id,staticClass:"topic_list"},[a("img",{attrs:{src:e.author.avatar_url,alt:""}}),a("span",{staticClass:"reply_count_wrapper"},[a("span",{staticClass:"reply_count"},[t._v(t._s(e.reply_count))]),t._v("/"),a("span",{staticClass:"count_of_visits"},[t._v(t._s(e.visit_count))])]),a("span",{class:[{put_good:1==e.good,put_top:1==e.top,topic_list_tab:1!=e.good&&1!=e.top}]},[a("span",[t._v("\n                        "+t._s(t._f("tabFormatter")(e))+"\n                    ")])]),a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[a("span",[t._v(t._s(e.title))])]),a("span",{staticClass:"last_reply"},[t._v("\n                    "+t._s(t._f("formatDate")(e.last_reply_at))+"\n                ")])],1)}),a("li",[a("Pagination",{attrs:{current:this.currentPage},on:{handleList:t.renderList}})],1)],2)])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"topic_tab"},[a("span",[t._v("全部")]),a("span",[t._v("精华")]),a("span",[t._v("分享")]),a("span",[t._v("问答")]),a("span",[t._v("招聘")])])}],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":t.current,"page-size":20,"page-count":51},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.current=e},"update:current-page":function(e){t.current=e}}})],1)},O=[],M={name:"Pagination",props:["current"],data:function(){return{}},methods:{handleCurrentChange:function(t){this.$emit("handleList",t)}}},N=M,A=(a("2c2b"),Object(d["a"])(N,D,O,!1,null,"66dde802",null)),S=A.exports,I={name:"MainPanel",data:function(){return{isLoading:!0,posts:[],currentPage:1}},components:{Pagination:S},methods:{getPostsData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topics",{params:{page:this.currentPage,limit:20}}).then(function(e){t.posts=e.data.data,t.isLoading=!1}).catch(function(t){console.log(t)})},renderList:function(t){this.currentPage=t,this.isLoading=!0,this.getPostsData()}},mounted:function(){this.getPostsData()}},T=I,H=(a("c22e"),Object(d["a"])(T,x,P,!1,null,"60a3b3d3",null)),B=H.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user_info"},[t.isLoading?a("div",{staticClass:"loading"},[a("Loader")],1):a("div",{staticClass:"user_information"},[a("section",[a("div",{staticClass:"avatar_wrapper"},[a("img",{attrs:{src:t.userinfo.avatar_url,alt:""}}),a("span",[t._v(t._s(t.userinfo.loginname))])]),a("p",[t._v(t._s(t.userinfo.score)+"积分")]),a("p",[t._v("注册时间："+t._s(t._f("formatDate")(t.userinfo.create_at)))])]),a("div",{staticClass:"replies"},[a("p",[t._v("最近参与的话题")]),a("ul",t._l(t.userinfo.recent_replies,function(e){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id}}}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])],1)}),0)]),a("div",{staticClass:"topics"},[a("p",[t._v("最近创建的话题")]),a("ul",t._l(t.userinfo.recent_topics,function(e){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id}}}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])],1)}),0)])])])},F=[],J={name:"UserInfo",data:function(){return{isLoading:!1,userinfo:{}}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then(function(e){t.isLoading=!1,t.userinfo=e.data.data}).catch(function(){console.log("err")})}},beforeMount:function(){this.isLoading=!0,this.getData()}},q=J,U=(a("0931"),Object(d["a"])(q,z,F,!1,null,"1abb57a7",null)),G=U.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slide_bar"},[a("div",{staticClass:"author_info"},[a("div",{staticClass:"author_summary"},[a("div",{staticClass:"topbar"},[t._v("个人信息")]),a("div",{staticClass:"inner"},[a("div",{staticClass:"user_avatar"},[a("router-link",{attrs:{to:{name:"user_info",params:{name:this.userinfo.loginname}}}},[a("img",{attrs:{src:this.userinfo.avatar_url,alt:""}})]),a("router-link",{attrs:{to:{name:"user_info",params:{name:this.userinfo.loginname}}}},[a("span",[t._v(t._s(this.userinfo.loginname))])])],1),a("div",{staticClass:"floor"},[a("span",[t._v("积分: "+t._s(this.userinfo.score))])]),a("span",{staticClass:"signature"},[t._v("账号创建于: "+t._s(t._f("formatDate")(this.userinfo.create_at)))])])]),a("div",{staticClass:"recent_topics"},[a("div",{staticClass:"topbar"},[t._v("作者最近主题")]),a("ul",t._l(t.topcilimitby5,function(e){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])],1)}),0)]),a("div",{staticClass:"recent_replies"},[a("div",{staticClass:"topbar"},[t._v("作者最近回复")]),a("ul",t._l(t.replylimitby5,function(e){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])],1)}),0)])])])},Q=[],R={name:"SlideBar",data:function(){return{isLoading:!1,userinfo:{}}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then(function(e){t.isLoading=!1,t.userinfo=e.data.data}).catch(function(t){console.log(t)})}},computed:{topcilimitby5:function(){if(this.userinfo.recent_topics)return this.userinfo.recent_topics.slice(0,5)},replylimitby5:function(){if(this.userinfo.recent_replies)return this.userinfo.recent_replies.slice(0,5)}},beforeMount:function(){this.isLoading=!0,this.getData()}},V=R,W=(a("66c2"),Object(d["a"])(V,K,Q,!1,null,"54b689b5",null)),X=W.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"get_start"},[a("div",{staticClass:"header"},[a("router-link",{attrs:{to:{name:"root"}}},[a("span",{staticClass:"main"},[t._v("主页")])]),t._v("\n        ⁄"),a("span",[t._v("Node.js 新手入门")])],1),t._m(0)])},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inner"},[a("h2",[t._v("Node.js 入门")]),a("ul",[a("li",[a("span",[t._v("《快速搭建 Node.js 开发环境以及加速 npm》")]),a("span",[a("a",{attrs:{href:"http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html",target:"_blank"}},[t._v("http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html")])])]),a("li",[a("span",[t._v("《Node.js 包教不包会》")]),a("span",[a("a",{attrs:{href:"https://github.com/alsotang/node-lessons",target:"_blank"}},[t._v("https://github.com/alsotang/node-lessons")])])]),a("li",[a("span",[t._v("《ECMAScript 6入门》")]),a("span",[a("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank"}},[t._v("http://es6.ruanyifeng.com/")])])]),a("li",[a("span",[t._v("《七天学会NodeJS》")]),a("span",[a("a",{attrs:{href:"https://github.com/nqdeng/7-days-nodejs",target:"_blank"}},[t._v("https://github.com/nqdeng/7-days-nodejs")])])])]),a("h2",[t._v("Node.js 资源")]),a("ul",[a("li",[a("span",[t._v("《前端资源教程》")]),a("span",[a("a",{attrs:{href:"https://cnodejs.org/topic/56ef3edd532839c33a99d00e",target:"_blank"}},[t._v("https://cnodejs.org/topic/56ef3edd532839c33a99d00e")])])]),a("li",[a("span",[t._v("《国内的 npm 镜像源》")]),a("span",[a("a",{attrs:{href:"http://cnpmjs.org/",target:"_blank"}},[t._v("http://cnpmjs.org/")])])]),a("li",[a("span",[t._v("《node weekly》")]),a("span",[a("a",{attrs:{href:"http://nodeweekly.com/issues",target:"_blank"}},[t._v("http://nodeweekly.com/issues")])])]),a("li",[a("span",[t._v("《node123-node.js中文资料导航》")]),a("span",[a("a",{attrs:{href:"https://github.com/youyudehexie/node123",target:"_blank"}},[t._v("https://github.com/youyudehexie/node123")])])]),a("li",[a("span",[t._v("《A curated list of delightful Node.js packages and resources》")]),a("span",[a("a",{attrs:{href:"https://github.com/sindresorhus/awesome-nodejs",target:"_blank"}},[t._v("https://github.com/sindresorhus/awesome-nodejs")])])]),a("li",[a("span",[t._v("《Node.js Books》")]),a("span",[a("a",{attrs:{href:"https://github.com/pana/node-books",target:"_blank"}},[t._v("https://github.com/pana/node-books")])])])]),a("h2",[t._v("Node.js 名人")]),a("ul",[a("li",[a("span",[t._v("《名人堂》")]),a("span",[a("a",{attrs:{href:"https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82",target:"_blank"}},[t._v("https://github.com/cnodejs/nodeclub/wiki/名人堂")])])])]),a("h2",[t._v("Node.js 服务器")]),a("span",[t._v("新手搭建 Node.js 服务器，推荐使用无需备案的")]),t._v(" "),a("span",[a("a",{attrs:{href:"https://www.digitalocean.com/?refcode=eba02656eeb3",target:"_blank"}},[t._v("DigitalOcean(https://www.digitalocean.com/)")])])])}],tt={name:"GetStart"},et=tt,at=(a("2989"),Object(d["a"])(et,Y,Z,!1,null,"1167e484",null)),nt=at.exports;r["default"].use(y["a"]);var st=new y["a"]({routes:[{name:"root",path:"/",components:{main:B}},{name:"post_content",path:"/topic/:id&:name",components:{main:E,slidebar:X}},{name:"user_info",path:"/user_info/:name",components:{main:G}},{name:"get_start",path:"/getstart/",components:{main:nt}}]}),rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("img",{attrs:{src:a("fa5e"),alt:""}})])}],ot={name:"Loader"},ct=ot,lt=(a("494e"),Object(d["a"])(ct,rt,it,!1,null,"4480ab10",null)),ut=lt.exports;r["default"].prototype.$http=C.a,r["default"].config.productionTip=!1,r["default"].component("Loader",ut),r["default"].prototype.$ELEMENT={size:"small",zIndex:3e3},r["default"].use(s.a),new r["default"]({router:st,render:function(t){return t(g)}}).$mount("#app"),r["default"].filter("formatDate",function(t){if(!t)return"";var e=new Date(t),a=(new Date).getTime()-e.getTime();return a<0?"":a/1e3<30?"刚刚":a/1e3<60?parseInt(a/1e3)+"秒前":a/6e4<60?parseInt(a/6e4)+"分钟前":a/36e5<24?parseInt(a/36e5)+"小时前":a/864e5<31?parseInt(a/864e5)+"天前":a/2592e6<12?parseInt(a/2592e6)+"月前":parseInt(a/31536e6)+"年前"}),r["default"].filter("tabFormatter",function(t){return 1==t.good?"精华":1==t.top?"置顶":"ask"==t.tab?"问答":"share"==t.tab?"分享":"招聘"})},"64a9":function(t,e,a){},6671:function(t,e,a){},"66c2":function(t,e,a){"use strict";var n=a("c7e8"),s=a.n(n);s.a},"9e5f":function(t,e,a){},a0ee:function(t,e,a){},a5c8:function(t,e,a){},abbf:function(t,e,a){},c22e:function(t,e,a){"use strict";var n=a("9e5f"),s=a.n(n);s.a},c7e8:function(t,e,a){},d686:function(t,e,a){t.exports=a.p+"img/cnodejs_light.86f6a7c2.svg"},ddb5:function(t,e,a){},ec86:function(t,e,a){},fa5e:function(t,e,a){t.exports=a.p+"img/loader.332eebde.gif"}});
//# sourceMappingURL=app.47a56356.js.map