(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"065e":function(t,n,e){"use strict";var a=e("0a27"),i=e.n(a);i.a},"0a27":function(t,n,e){var a=e("ccba");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("c09d7500",a,!0,{sourceMap:!1,shadowMode:!1})},"1f21":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"newsbox"},[e("v-uni-view",{staticClass:"pic"},[e("v-uni-image",{attrs:{src:t.item.picurl,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.item.title))]),t.item.looktime?e("v-uni-view",{staticClass:"info"},[e("v-uni-text",[t._v("浏览时间:"+t._s(t.item.looktime))])],1):e("v-uni-view",{staticClass:"info"},[e("v-uni-text",[t._v(t._s(t.item.author))]),e("v-uni-text",[t._v(t._s(t.item.hits)+"浏览")])],1)],1)],1)},i=[]},2909:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return(0,a.default)(t)||(0,i.default)(t)||(0,o.default)(t)||(0,s.default)()};var a=r(e("6005")),i=r(e("db90")),o=r(e("06c5")),s=r(e("3427"));function r(t){return t&&t.__esModule?t:{default:t}}},"2a49":function(t,n,e){"use strict";e.r(n);var a=e("ebac"),i=e("cd67");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("dd3f");var s=e("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"05881c82",null,!1,a["a"],void 0);n["default"]=r.exports},3427:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e("d9e2"),e("d401")},"37fc":function(t,n,e){t.exports=e.p+"static/img/nodata.56986da7.png"},"584d":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.navscroll[data-v-05881c82]{height:%?100?%;background:#f7f8fa;white-space:nowrap;position:fixed;top:var(--window-top);left:0;z-index:10}.navscroll[data-v-05881c82] ::-webkit-scrollbar{width:4px!important;height:1px!important;overflow:auto!important;background:transparent!important;-webkit-appearance:auto!important;display:block}.navscroll .item[data-v-05881c82]{font-size:%?40?%;display:inline-block;line-height:%?100?%;padding:0 %?30?%;color:#333}.navscroll .item.active[data-v-05881c82]{color:#31c27c}.content[data-v-05881c82]{padding:%?30?%;padding-top:%?130?%}.content .row[data-v-05881c82]{border-bottom:1px dotted #efefef;padding:%?20?% 0}.nodata[data-v-05881c82]{display:flex;justify-content:center}.nodata uni-image[data-v-05881c82]{width:%?360?%}.loading[data-v-05881c82]{text-align:center;font-size:%?26?%;color:#888;line-height:2em}',""]),t.exports=n},5925:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"newsbox",props:{item:{type:Object,default:function(){return{title:"组件内默认标题",author:"张三",hits:668,picurl:"../../static/images/nopic.jpg",looktime:"2023-5-11 12:12:22"}}}},data:function(){return{}}};n.default=a},6005:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){if(Array.isArray(t))return(0,a.default)(t)};var a=function(t){return t&&t.__esModule?t:{default:t}}(e("6b75"))},"66bb":function(t,n,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("2909"));e("99af");var o={data:function(){return{navIndex:0,navArr:[],newsArr:[],currentPage:1,loading:0}},onLoad:function(){this.getNavData(),this.getNewsData()},onReachBottom:function(){2!=this.loading&&(this.currentPage++,this.loading=1,this.getNewsData())},methods:{clickNav:function(t,n){this.navIndex=t,this.currentPage=1,this.loading=0,this.newsArr=[],this.getNewsData(n)},goDetail:function(t){uni.navigateTo({url:"/pages/detail/detail?cid=".concat(t.classid,"&id=").concat(t.id)})},getNavData:function(){var t=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/navlist.php",success:function(n){t.navArr=n.data}})},getNewsData:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;uni.request({url:"https://ku.qingnian8.com/dataApi/news/newslist.php",data:{cid:n,page:this.currentPage},success:function(n){0==n.data.length&&(t.loading=2),t.newsArr=[].concat((0,i.default)(t.newsArr),(0,i.default)(n.data))}})}}};n.default=o},a3be:function(t,n,e){"use strict";e.r(n);var a=e("5925"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},c60a:function(t,n,e){var a=e("584d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("499b4659",a,!0,{sourceMap:!1,shadowMode:!1})},ccba:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.newsbox[data-v-1ddd346b]{display:flex}.newsbox .pic[data-v-1ddd346b]{width:%?230?%;height:%?160?%}.newsbox .pic uni-image[data-v-1ddd346b]{width:100%;height:100%}.newsbox .text[data-v-1ddd346b]{flex:1;padding-left:%?20?%;display:flex;flex-direction:column;justify-content:space-between}.newsbox .text .title[data-v-1ddd346b]{font-size:%?36?%;color:#333;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.newsbox .text .info[data-v-1ddd346b]{font-size:%?26?%;color:#999}.newsbox .text .info uni-text[data-v-1ddd346b]{padding-right:%?30?%}',""]),t.exports=n},cd67:function(t,n,e){"use strict";e.r(n);var a=e("66bb"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},db90:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630")},dd3f:function(t,n,e){"use strict";var a=e("c60a"),i=e.n(a);i.a},e3d2:function(t,n,e){"use strict";e.r(n);var a=e("1f21"),i=e("a3be");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("065e");var s=e("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"1ddd346b",null,!1,a["a"],void 0);n["default"]=r.exports},ebac:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var a={newsbox:e("e3d2").default},i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"home"},[a("v-uni-scroll-view",{staticClass:"navscroll",attrs:{"scroll-x":!0}},t._l(t.navArr,(function(n,e){return a("v-uni-view",{key:n.id,staticClass:"item",class:e==t.navIndex?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickNav(e,n.id)}}},[t._v(t._s(n.classname))])})),1),a("v-uni-view",{staticClass:"content"},t._l(t.newsArr,(function(n){return a("v-uni-view",{key:n.id,staticClass:"row"},[a("newsbox",{attrs:{item:n},nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail(n)}}})],1)})),1),t.newsArr.length?t._e():a("v-uni-view",{staticClass:"nodata"},[a("v-uni-image",{attrs:{src:e("37fc"),mode:"widthFix"}})],1),t.newsArr.length?a("v-uni-view",{staticClass:"loading"},[1==t.loading?a("v-uni-view",[t._v("数据加载中...")]):t._e(),2==t.loading?a("v-uni-view",[t._v("没有更多了~~")]):t._e()],1):t._e()],1)},o=[]}}]);