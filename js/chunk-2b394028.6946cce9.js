(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b394028"],{"0bd5":function(t,e,n){"use strict";n("db9d")},"205f":function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var r=n("2b0e"),c=n("b42e"),a=n("c637"),i=n("a723"),o=n("9b76"),s=n("8690"),l=n("365c"),b=n("d82f"),d=n("cf75"),u=n("d580"),f=n("6197"),h=n("b885"),g=n("670f"),p=n("4918");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(d["d"])(Object(b["m"])(j(j({},Object(b["k"])(p["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(d["c"])(i["g"],!1),end:Object(d["c"])(i["g"],!1),start:Object(d["c"])(i["g"],!1),top:Object(d["c"])(i["g"],!1)})),a["s"]),w=r["default"].extend({name:a["s"],functional:!0,props:v,render:function(t,e){var n=e.props,r=e.data,a=n.src,i=n.alt,o=n.width,s=n.height,l="card-img";return n.top?l+="-top":n.right||n.end?l+="-right":n.bottom?l+="-bottom":(n.left||n.start)&&(l+="-left"),t("img",Object(c["a"])(r,{class:l,attrs:{src:a,alt:i,width:o,height:s}}))}});function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){C(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=Object(d["a"])(v,d["f"].bind(null,"img"));_.imgSrc.required=!1;var P=Object(d["d"])(Object(b["m"])(x(x(x(x(x(x({},f["b"]),h["b"]),g["b"]),_),u["a"]),{},{align:Object(d["c"])(i["u"]),noBody:Object(d["c"])(i["g"],!1)})),a["n"]),k=r["default"].extend({name:a["n"],functional:!0,props:P,render:function(t,e){var n,r=e.props,a=e.data,i=e.slots,b=e.scopedSlots,u=r.imgSrc,p=r.imgLeft,O=r.imgRight,j=r.imgStart,m=r.imgEnd,v=r.imgBottom,y=r.header,x=r.headerHtml,P=r.footer,k=r.footerHtml,D=r.align,T=r.textVariant,S=r.bgVariant,V=r.borderVariant,I=b||{},z=i(),B={},E=t(),R=t();if(u){var $=t(w,{props:Object(d["e"])(_,r,d["h"].bind(null,"img"))});v?R=$:E=$}var H=t(),F=Object(l["a"])(o["t"],I,z);(F||y||x)&&(H=t(h["a"],{props:Object(d["e"])(h["b"],r),domProps:F?{}:Object(s["a"])(x,y)},Object(l["b"])(o["t"],B,I,z)));var G=Object(l["b"])(o["i"],B,I,z);r.noBody||(G=t(f["a"],{props:Object(d["e"])(f["b"],r)},G),r.overlay&&u&&(G=t("div",{staticClass:"position-relative"},[E,G,R]),E=t(),R=t()));var L=t(),U=Object(l["a"])(o["s"],I,z);return(U||P||k)&&(L=t(g["a"],{props:Object(d["e"])(g["b"],r),domProps:F?{}:Object(s["a"])(k,P)},Object(l["b"])(o["s"],B,I,z))),t(r.tag,Object(c["a"])(a,{staticClass:"card",class:(n={"flex-row":p||j,"flex-row-reverse":(O||m)&&!(p||j)},C(n,"text-".concat(D),D),C(n,"bg-".concat(S),S),C(n,"border-".concat(V),V),C(n,"text-".concat(T),T),n)}),[E,H,G,L,R])}})},4918:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return O}));var r=n("2b0e"),c=n("b42e"),a=n("c637"),i=n("a723"),o=n("2326"),s=n("6c06"),l=n("7b1e"),b=n("3a58"),d=n("cf75"),u=n("fa73");function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',g=function(t,e,n){var r=encodeURIComponent(h.replace("%{w}",Object(u["g"])(t)).replace("%{h}",Object(u["g"])(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(r)},p=Object(d["d"])({alt:Object(d["c"])(i["u"]),blank:Object(d["c"])(i["g"],!1),blankColor:Object(d["c"])(i["u"],"transparent"),block:Object(d["c"])(i["g"],!1),center:Object(d["c"])(i["g"],!1),fluid:Object(d["c"])(i["g"],!1),fluidGrow:Object(d["c"])(i["g"],!1),height:Object(d["c"])(i["p"]),left:Object(d["c"])(i["g"],!1),right:Object(d["c"])(i["g"],!1),rounded:Object(d["c"])(i["j"],!1),sizes:Object(d["c"])(i["f"]),src:Object(d["c"])(i["u"]),srcset:Object(d["c"])(i["f"]),thumbnail:Object(d["c"])(i["g"],!1),width:Object(d["c"])(i["p"])},a["kb"]),O=r["default"].extend({name:a["kb"],functional:!0,props:p,render:function(t,e){var n,r=e.props,a=e.data,i=r.alt,d=r.src,h=r.block,p=r.fluidGrow,O=r.rounded,j=Object(b["c"])(r.width)||null,m=Object(b["c"])(r.height)||null,v=null,w=Object(o["b"])(r.srcset).filter(s["a"]).join(","),y=Object(o["b"])(r.sizes).filter(s["a"]).join(",");return r.blank&&(!m&&j?m=j:!j&&m&&(j=m),j||m||(j=1,m=1),d=g(j,m,r.blankColor||"transparent"),w=null,y=null),r.left?v="float-left":r.right?v="float-right":r.center&&(v="mx-auto",h=!0),t("img",Object(c["a"])(a,{attrs:{src:d,alt:i,width:j?Object(u["g"])(j):null,height:m?Object(u["g"])(m):null,srcset:w||null,sizes:y||null},class:(n={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||p,"w-100":p,rounded:""===O||!0===O},f(n,"rounded-".concat(O),Object(l["n"])(O)&&""!==O),f(n,v,v),f(n,"d-block",h),n)}))}})},4968:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return b}));var r=n("2b0e"),c=n("b42e"),a=n("c637"),i=n("a723"),o=n("cf75"),s=n("fa73"),l=Object(o["d"])({title:Object(o["c"])(i["u"]),titleTag:Object(o["c"])(i["u"],"h4")},a["v"]),b=r["default"].extend({name:a["v"],functional:!0,props:l,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t(n.titleTag,Object(c["a"])(r,{staticClass:"card-title"}),a||Object(s["g"])(n.title))}})},"5fda":function(t,e,n){"use strict";n.d(e,"a",(function(){return S}));var r,c=n("2b0e"),a=n("2f79"),i=n("c637"),o=n("0056"),s=n("a723"),l=n("9b76"),b=n("906c"),d=n("7b1e"),u=n("58f2"),f=n("3a58"),h=n("d82f"),g=n("cf75"),p=n("8c18"),O=n("f29e"),j=n("ce2a");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=Object(u["a"])("show",{type:s["i"],defaultValue:!1}),x=y.mixin,C=y.props,_=y.prop,P=y.event,k=function(t){return""===t||Object(d["b"])(t)?0:(t=Object(f["c"])(t,0),t>0?t:0)},D=function(t){return""===t||!0===t||!(Object(f["c"])(t,0)<1)&&!!t},T=Object(g["d"])(Object(h["m"])(v(v({},C),{},{dismissLabel:Object(g["c"])(s["u"],"Close"),dismissible:Object(g["c"])(s["g"],!1),fade:Object(g["c"])(s["g"],!1),variant:Object(g["c"])(s["u"],"info")})),i["a"]),S=c["default"].extend({name:i["a"],mixins:[x,p["a"]],props:T,data:function(){return{countDown:0,localShow:D(this[_])}},watch:(r={},w(r,_,(function(t){this.countDown=k(t),this.localShow=D(t)})),w(r,"countDown",(function(t){var e=this;this.clearCountDownInterval();var n=this[_];Object(d["i"])(n)&&(this.$emit(o["n"],t),n!==t&&this.$emit(P,t),t>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){e.countDown--}),1e3)):this.$nextTick((function(){Object(b["B"])((function(){e.localShow=!1}))})))})),w(r,"localShow",(function(t){var e=this[_];t||!this.dismissible&&!Object(d["i"])(e)||this.$emit(o["m"]),Object(d["i"])(e)||e===t||this.$emit(P,t)})),r),created:function(){this.$_filterTimer=null;var t=this[_];this.countDown=k(t),this.localShow=D(t)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(t){var e=t();if(this.localShow){var n=this.dismissible,r=this.variant,c=t();n&&(c=t(O["a"],{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(l["k"])])),e=t("div",{staticClass:"alert",class:w({"alert-dismissible":n},"alert-".concat(r),r),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[a["a"]]},[c,this.normalizeSlot()])}return t(j["a"],{props:{noFade:!this.fade}},[e])}})},6197:function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"a",(function(){return p}));var r=n("2b0e"),c=n("b42e"),a=n("c637"),i=n("a723"),o=n("d82f"),s=n("cf75"),l=n("d580"),b=n("4968"),d=n("ba06");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=Object(s["d"])(Object(o["m"])(f(f(f(f({},b["b"]),d["b"]),Object(s["a"])(l["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(i["e"]),overlay:Object(s["c"])(i["g"],!1)})),a["o"]),p=r["default"].extend({name:a["o"],functional:!0,props:g,render:function(t,e){var n,r=e.props,a=e.data,i=e.children,o=r.bodyBgVariant,l=r.bodyBorderVariant,u=r.bodyTextVariant,f=t();r.title&&(f=t(b["a"],{props:Object(s["e"])(b["b"],r)}));var g=t();return r.subTitle&&(g=t(d["a"],{props:Object(s["e"])(d["b"],r),class:["mb-2"]})),t(r.bodyTag,Object(c["a"])(a,{staticClass:"card-body",class:[(n={"card-img-overlay":r.overlay},h(n,"bg-".concat(o),o),h(n,"border-".concat(l),l),h(n,"text-".concat(u),u),n),r.bodyClass]}),[f,g,i])}})},"670f":function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return g}));var r=n("2b0e"),c=n("b42e"),a=n("c637"),i=n("a723"),o=n("8690"),s=n("d82f"),l=n("cf75"),b=n("d580");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=Object(l["d"])(Object(s["m"])(u(u({},Object(l["a"])(b["a"],l["f"].bind(null,"footer"))),{},{footer:Object(l["c"])(i["u"]),footerClass:Object(l["c"])(i["e"]),footerHtml:Object(l["c"])(i["u"])})),a["p"]),g=r["default"].extend({name:a["p"],functional:!0,props:h,render:function(t,e){var n,r=e.props,a=e.data,i=e.children,s=r.footerBgVariant,l=r.footerBorderVariant,b=r.footerTextVariant;return t(r.footerTag,Object(c["a"])(a,{staticClass:"card-footer",class:[r.footerClass,(n={},f(n,"bg-".concat(s),s),f(n,"border-".concat(l),l),f(n,"text-".concat(b),b),n)],domProps:i?{}:Object(o["a"])(r.footerHtml,r.footer)}),i)}})},a15b:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var r=n("b42e"),c=n("c637"),a=n("a723"),i=n("2326"),o=n("228e"),s=n("6c06"),l=n("b508"),b=n("d82f"),d=n("cf75"),u=n("fa73");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=["start","end","center"],O=Object(l["a"])((function(t,e){return e=Object(u["h"])(Object(u["g"])(e)),e?Object(u["c"])(["row-cols",t,e].filter(s["a"]).join("-")):null})),j=Object(l["a"])((function(t){return Object(u["c"])(t.replace("cols",""))})),m=[],v=function(){var t=Object(o["b"])().reduce((function(t,e){return t[Object(d["g"])(e,"cols")]=Object(d["c"])(a["p"]),t}),Object(b["c"])(null));return m=Object(b["h"])(t),Object(d["d"])(Object(b["m"])(h(h({},t),{},{alignContent:Object(d["c"])(a["u"],null,(function(t){return Object(i["a"])(Object(i["b"])(p,"between","around","stretch"),t)})),alignH:Object(d["c"])(a["u"],null,(function(t){return Object(i["a"])(Object(i["b"])(p,"between","around"),t)})),alignV:Object(d["c"])(a["u"],null,(function(t){return Object(i["a"])(Object(i["b"])(p,"baseline","stretch"),t)})),noGutters:Object(d["c"])(a["g"],!1),tag:Object(d["c"])(a["u"],"div")})),c["Ob"])},w={name:c["Ob"],functional:!0,get props(){return delete this.props,this.props=v(),this.props},render:function(t,e){var n,c=e.props,a=e.data,i=e.children,o=c.alignV,s=c.alignH,l=c.alignContent,b=[];return m.forEach((function(t){var e=O(j(t),c[t]);e&&b.push(e)})),b.push((n={"no-gutters":c.noGutters},g(n,"align-items-".concat(o),o),g(n,"justify-content-".concat(s),s),g(n,"align-content-".concat(l),l),n)),t(c.tag,Object(r["a"])(a,{staticClass:"row",class:b}),i)}}},a98a:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-card",{staticClass:"background-color",attrs:{title:"Default Colors"}},[n("b-alert",{attrs:{variant:"primary",show:""}},[n("div",{staticClass:"alert-body"},[t._v(" For more color classes options please read the "),n("b-link",{staticClass:"alert-link",attrs:{href:"https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/documentation-colors.html",target:"_blank"}},[t._v(" documentation. ")])],1)]),n("b-card-text",{staticClass:"mb-0"},[t._v(" We have a series of colors that are used by default. They include: ")]),n("ul",{staticClass:"colors-list list-unstyled mb-0"},[n("li",[n("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),n("span",[t._v("Primary")])],1),n("li",[n("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),n("span",[t._v("Secondary")])],1),n("li",[n("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),n("span",[t._v("Success")])],1),n("li",[n("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),n("span",[t._v("Warning")])],1),n("li",[n("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),n("span",[t._v("Danger")])],1),n("li",[n("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),n("span",[t._v("Info")])],1)]),n("b-card-text",[t._v(" For each color, we think has its functionality in the application as alerts of errors "),n("b",[t._v("(danger)")]),t._v(", warnings to the user "),n("b",[t._v("(warning)")]),t._v(", communications of approval "),n("b",[t._v("(success)")]),t._v(", or main color of the application "),n("b",[t._v("(primary)")]),t._v(". ")]),n("div",{staticClass:"d-flex justify-content-start flex-wrap"},[n("div",{staticClass:"text-center bg-primary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("primary")])]),n("div",{staticClass:"text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("secondary")])]),n("div",{staticClass:"text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("success")])]),n("div",{staticClass:"text-center bg-warning colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("warning")])]),n("div",{staticClass:"text-center bg-danger colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("danger")])]),n("div",{staticClass:"text-center bg-info colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow"},[n("span",[t._v("info")])])]),n("h6",{staticClass:"mt-1"},[t._v(" Lighten Variant ")]),n("b-card-text",{staticClass:"mb-0"},[t._v(" Use "),n("code",[t._v(".bg-{color}.bg-lighten-{1 | 2 | 3 | 4 | 5}")]),t._v(" classes for lighten background color. ")]),n("div",{staticClass:"d-flex justify-content-start flex-wrap"},[n("div",{staticClass:"text-center bg-primary bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("lighten-2")])]),n("div",{staticClass:"text-center bg-secondary bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("lighten-2")])]),n("div",{staticClass:"text-center bg-success bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("lighten-2")])]),n("div",{staticClass:"text-center bg-warning bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("lighten-2")])]),n("div",{staticClass:"text-center bg-danger bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("lighten-2")])]),n("div",{staticClass:"text-center bg-info bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow"},[n("span",[t._v("lighten-2")])])]),n("h6",{staticClass:"mt-1"},[t._v(" Darken Variant ")]),n("b-card-text",{staticClass:"mb-0"},[t._v(" Use "),n("code",[t._v(".bg-{color}.bg-darken-{1 | 2 | 3 | 4}")]),t._v(" classes for darken background color. ")]),n("div",{staticClass:"d-flex justify-content-start flex-wrap"},[n("div",{staticClass:"text-center bg-primary bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("darken-2")])]),n("div",{staticClass:"text-center bg-secondary bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("darken-2")])]),n("div",{staticClass:"text-center bg-success bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("darken-2")])]),n("div",{staticClass:"text-center bg-warning bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("darken-2")])]),n("div",{staticClass:"text-center bg-danger bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("darken-2")])]),n("div",{staticClass:"text-center bg-info bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow"},[n("span",[t._v("darken-2")])])])],1),n("b-card",{attrs:{title:"Gradient Colors"}},[n("b-card-text",{staticClass:"mb-0"},[t._v(" We have make gradient color based on our default color: ")]),n("ul",{staticClass:"colors-list list-unstyled mb-0"},[n("li",[n("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),n("span",[t._v("bg-gradient-primary")])],1),n("li",[n("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),n("span",[t._v("bg-gradient-secondary")])],1),n("li",[n("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),n("span",[t._v("bg-gradient-success")])],1),n("li",[n("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),n("span",[t._v("bg-gradient-warning")])],1),n("li",[n("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),n("span",[t._v("bg-gradient-danger")])],1),n("li",[n("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),n("span",[t._v("bg-gradient-info")])],1)]),n("b-card-text",[t._v(" For each color, we think has its functionality in the application as alerts of errors "),n("b",[t._v("(danger)")]),t._v(", warnings to the user "),n("b",[t._v("(warning)")]),t._v(", communications of approval "),n("b",[t._v("(success)")]),t._v(", or main color of the application "),n("b",[t._v("(primary)")]),t._v(". ")]),n("div",{staticClass:"d-flex justify-content-start flex-wrap"},[n("div",{staticClass:"text-center colors-container bg-gradient-primary rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("primary gradient")])]),n("div",{staticClass:"text-center colors-container bg-gradient-secondary rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("secondary gradient")])]),n("div",{staticClass:"text-center colors-container bg-gradient-success rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("success gradient")])]),n("div",{staticClass:"text-center colors-container bg-gradient-warning rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("warning gradient")])]),n("div",{staticClass:"text-center colors-container bg-gradient-danger rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[n("span",[t._v("danger gradient")])]),n("div",{staticClass:"text-center colors-container bg-gradient-info rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow px-1"},[n("span",[t._v("info gradient")])])])],1)],1)],1)},c=[],a=n("205f"),i=n("5fda"),o=n("aa59"),s=n("a15b"),l=n("b28b"),b=n("d6e4"),d={components:{BCard:a["a"],BAlert:i["a"],BLink:o["a"],BRow:s["a"],BCol:l["a"],BCardText:b["a"]}},u=d,f=(n("0bd5"),n("2877")),h=Object(f["a"])(u,r,c,!1,null,null,null);e["default"]=h.exports},b885:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return g}));var r=n("2b0e"),c=n("b42e"),a=n("c637"),i=n("a723"),o=n("8690"),s=n("d82f"),l=n("cf75"),b=n("d580");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=Object(l["d"])(Object(s["m"])(u(u({},Object(l["a"])(b["a"],l["f"].bind(null,"header"))),{},{header:Object(l["c"])(i["u"]),headerClass:Object(l["c"])(i["e"]),headerHtml:Object(l["c"])(i["u"])})),a["r"]),g=r["default"].extend({name:a["r"],functional:!0,props:h,render:function(t,e){var n,r=e.props,a=e.data,i=e.children,s=r.headerBgVariant,l=r.headerBorderVariant,b=r.headerTextVariant;return t(r.headerTag,Object(c["a"])(a,{staticClass:"card-header",class:[r.headerClass,(n={},f(n,"bg-".concat(s),s),f(n,"border-".concat(l),l),f(n,"text-".concat(b),b),n)],domProps:i?{}:Object(o["a"])(r.headerHtml,r.header)}),i)}})},ba06:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return b}));var r=n("2b0e"),c=n("b42e"),a=n("c637"),i=n("a723"),o=n("cf75"),s=n("fa73"),l=Object(o["d"])({subTitle:Object(o["c"])(i["u"]),subTitleTag:Object(o["c"])(i["u"],"h6"),subTitleTextVariant:Object(o["c"])(i["u"],"muted")},a["t"]),b=r["default"].extend({name:a["t"],functional:!0,props:l,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t(n.subTitleTag,Object(c["a"])(r,{staticClass:"card-subtitle",class:[n.subTitleTextVariant?"text-".concat(n.subTitleTextVariant):null]}),a||Object(s["g"])(n.subTitle))}})},d580:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("2b0e"),c=n("c637"),a=n("a723"),i=n("cf75"),o=Object(i["d"])({bgVariant:Object(i["c"])(a["u"]),borderVariant:Object(i["c"])(a["u"]),tag:Object(i["c"])(a["u"],"div"),textVariant:Object(i["c"])(a["u"])},c["n"]);r["default"].extend({props:o})},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("2b0e"),c=n("b42e"),a=n("c637"),i=n("a723"),o=n("cf75"),s=Object(o["d"])({textTag:Object(o["c"])(i["u"],"p")},a["u"]),l=r["default"].extend({name:a["u"],functional:!0,props:s,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t(n.textTag,Object(c["a"])(r,{staticClass:"card-text"}),a)}})},db9d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2b394028.6946cce9.js.map