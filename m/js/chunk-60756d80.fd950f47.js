(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60756d80"],{"5bff":function(t,e,i){},"968f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-nav-bar",{attrs:{title:this.$route.params.title,"left-text":"返回","right-text":"主页","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),i("van-row",{attrs:{type:"flex"}},[i("van-col",{style:{display:t.isshowsidebar},attrs:{span:"12"}},[i("van-list",t._l(t.items,(function(e){return i("van-cell",{key:e.name,attrs:{title:e.name},on:{click:function(i){return t.selectChapter(e.url)}}})})),1)],1),i("van-col",{attrs:{span:t.contextWidth}},[i("div",{attrs:{id:"readerid"},on:{click:t.hiddenSidebar}},[i("span",{domProps:{innerHTML:t._s(t.bookhtml)}})])])],1),i("van-tabbar",{staticStyle:{"z-index":"2"},on:{change:t.readerset},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tabbar-item",{on:{click:t.showOrHiddenSidebar}},[t._v("目录")]),i("van-tabbar-item",[t._v("模式")]),i("van-tabbar-item",[t._v("字体")])],1)],1)},a=[],o=(i("d3b7"),{name:"reader",data:function(){return{bookhtml:null,activeKey:0,isshowsidebar:"none",items:[],contextWidth:24,active:""}},mounted:function(){var t="https://cbdata.dila.edu.tw/v1.2/download/html/"+this.$route.params.work+"_001.html";this.requestChapter(t),this.$emit("isshow",!1);for(var e=1;e<=this.$route.params.juan;e++)this.items.push(e+"卷"),this.items.push({name:e+"卷",url:"https://cbdata.dila.edu.tw/v1.2/download/html/"+this.$route.params.work+"_"+this.PrefixInteger(e,3)+".html"})},methods:{hiddenSidebar:function(){this.isshowsidebar="none",this.contextWidth=24},showSidebar:function(){this.isshowsidebar="inline",this.contextWidth=12},showOrHiddenSidebar:function(){"none"===this.isshowsidebar?this.showSidebar():this.hiddenSidebar()},readerset:function(t){console.log(t),console.log(this.active)},selectChapter:function(t){this.requestChapter(t),this.hiddenSidebar()},requestChapter:function(t){var e=this,n=i("2427");n.get(t).then((function(t){e.bookhtml=t.data,document.body.scrollTop=document.documentElement.scrollTop=0})).catch((function(t){console.log(t)})).finally((function(){}))},onClickLeft:function(){console.log("back")},onClickRight:function(){this.$router.push({name:"home"})}}}),s=o,r=(i("d207"),i("2877")),c=Object(r["a"])(s,n,a,!1,null,null,null);e["default"]=c.exports},d207:function(t,e,i){"use strict";var n=i("5bff"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-60756d80.fd950f47.js.map