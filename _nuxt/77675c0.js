(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{172:function(t,e,r){var content=r(176);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("05ad5426",content,!0,{sourceMap:!1})},173:function(t,e,r){"use strict";var n=r(4),l=r(83)(6),o="findIndex",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),n(n.P+n.F*c,"Array",{findIndex:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),r(82)(o)},174:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Select",url:"select",children:[{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Case",url:"case"},{text:"Join",url:"join"},{text:"Flatten",url:"flatten"}]},{text:"Where",url:"where",children:[{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Regex",url:"regex"},{text:"Or",url:"or"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Ignore Case (Deprecated)",url:"ignore-case"}]},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Union",url:"union"},{text:"Intersect",url:"intersect"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Schema",url:"change-table-design"},{text:"Helpers",url:"helpers"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Import scripts",url:"import-scripts"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Middleware",url:"middleware"},{text:"Plugin",url:"plugin"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}]},175:function(t,e,r){"use strict";r(172)},176:function(t,e,r){var n=r(32)(!1);n.push([t.i,".b-tutorial[data-v-0e0752c2]{padding:10px 10px 0}.b-tutorial__links[data-v-0e0752c2]{padding-right:30px;border-right:1px solid #e9ecef}.b-tutorial__links__item[data-v-0e0752c2],.b-tutorial__links__item-children[data-v-0e0752c2]{cursor:pointer;padding:10px;color:var(--link-color);font-size:1.1rem}.b-tutorial__links__item-children[data-v-0e0752c2]:hover,.b-tutorial__links__item[data-v-0e0752c2]:hover{background-color:rgba(0,0,0,.05)}.b-tutorial__links__item-children .fas[data-v-0e0752c2],.b-tutorial__links__item .fas[data-v-0e0752c2]{margin-right:5px}.b-tutorial__links__item-children[data-v-0e0752c2]{margin-left:20px;font-size:1rem}.b-tutorial__links__item--active[data-v-0e0752c2]{border:1px solid;border-radius:3px;text-align:center;color:var(--secondary-color);justify-content:center}.b-tutorial__content[data-v-0e0752c2]{padding-left:40px}.b-tutorial__content__btns[data-v-0e0752c2]{display:flex;justify-content:space-between;font-size:2rem;margin-top:30px;margin-bottom:20px}.b-tutorial__content__btns i[data-v-0e0752c2]{cursor:pointer}.b-tutorial__sticky-btn[data-v-0e0752c2]{position:fixed;right:0;bottom:20px;display:flex;flex-direction:column;z-index:1000}.b-tutorial__sticky-btn a[data-v-0e0752c2]{width:56px;height:56px;border-radius:50%;margin-bottom:10px;padding:0}.ad-container[data-v-0e0752c2]{text-align:center;border:1px solid;display:flex;flex-direction:column;padding:5px;cursor:pointer}",""]),t.exports=n},177:function(t,e,r){"use strict";r(119),r(173);var n={created:function(){this.ads=["Component based framework for nodejs"]},head:function(){return{title:"JsStore - ".concat(this.title),meta:[{hid:"keywords",name:"keywords",content:this.keywords},{hid:"description",name:"description",content:this.description}]}},props:{contentSrc:String,title:String,description:String,keywords:String},computed:{currentUrl:function(){return this.$route.path},activeUrlIndex:function(){var t=this,e=this.$route.path.split("/"),r=e[e.length-1];return this.links.findIndex((function(e){if(e.url===r)return t.childActiveUrlIndex=-1,!0;var n=e.children;if(n)for(var i=0,l=n.length;i<l;i++)if(n[i].url===r)return t.childActiveUrlIndex=i,!0}))}},data:function(){return{links:[],childActiveUrlIndex:-1}},fetch:function(){var t=r(174);this.links=t},mounted:function(){console.log("comp",this),window.comp=this,hljs.highlightAll();var t='Copy <i class="margin-left-10px far fa-copy"></i>';document.querySelectorAll("pre code").forEach((function(e){var div=document.createElement("div");div.className="code-copy ripple",div.innerHTML=t,e.parentNode.prepend(div),div.onclick=function(){!function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}(e.innerText),div.innerHTML='Copied <i class="margin-left-10px fas fa-check"></i>',setTimeout((function(){div.innerHTML=t}),1e3)}}))},methods:{url:function(t){return"/tutorial/"+t},goto:function(t){var path,e=this.childActiveUrlIndex,r=this.links[this.activeUrlIndex];if(e>=0){var n=r.children[e+t];n&&(path=n.url)}return path||(path=this.links[this.activeUrlIndex+t].url),this.$router.push({path:this.url(path)})}}},l=(r(175),r(14)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row b-tutorial"},[r("div",{staticClass:"col-sm-4 col-md-3 col-lg-2 b-tutorial__links"},t._l(t.links,(function(link,e){return r("div",{key:link.text},[r("a",{staticClass:"row content-v-center b-tutorial__links__item ripple",class:{"b-tutorial__links__item--active":e===(!link.children&&t.activeUrlIndex)},attrs:{href:t.url(link.url)}},[link.children?[e===t.activeUrlIndex?r("i",{staticClass:"fas fa-chevron-down"}):r("i",{staticClass:"fas fa-chevron-right"})]:t._e(),t._v("\n        "+t._s(link.text)+"\n      ")],2),t._v(" "),e===t.activeUrlIndex?t._l(link.children,(function(e,n){return r("a",{key:e.url,staticClass:"row content-v-center b-tutorial__links__item-children ripple",class:{"b-tutorial__links__item--active":n===t.childActiveUrlIndex},attrs:{href:t.url(link.url+"/"+e.url)}},[t._v("\n          "+t._s(e.text)+"\n        ")])})):t._e()],2)})),0),t._v(" "),r("div",{staticClass:"b-tutorial__content col-sm-8 col-md-9 col-lg-8"},[t._t("default"),t._v(" "),r("div",{staticClass:"b-tutorial__content__btns"},[r("i",{staticClass:"fas fa-chevron-left",on:{click:function(e){return t.goto(-1)}}}),t._v(" "),r("i",{staticClass:"fas fa-chevron-right",on:{click:function(e){return t.goto(1)}}})])],2),t._v(" "),r("div",{staticClass:"col-lg-2 width-full pl-10px pr-5px"},[r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://fortjs.info/"}},[r("h6",[t._v("FortJs")]),t._v(" "),r("img",{staticClass:"mt-5px",attrs:{src:"//fortjs.info/img/fort_js_logo_200_137.png"}}),t._v(" "),r("div",[t._v(t._s(t.ads[0]))])])]),t._v(" "),r("div",{staticClass:"b-tutorial__sticky-btn"},[t._m(0),t._v(" "),r("a",{staticClass:"btn secondary",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/content"+t.currentUrl+".md",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"far fa-edit"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn rounded secondary margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby"}},[e("i",{staticClass:"fab fa-gitter"})])}],!1,null,"0e0752c2",null);e.a=component.exports},218:function(t,e,r){"use strict";r.r(e);var n={components:{Layout:r(177).a}},l=r(14),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"Installation",description:"jsstore installation guidelines",keywords:"installation, npm, cdn, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/installation.md"}},[r("p",[t._v("In order to set up jsstore - you need two files - ")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("jsstore - It contains all api and your code interact with this.")])]),t._v(" "),r("li",[r("p",[t._v("jsstore.worker.js - It contains all logic and can be used as worker or without worker.")])])]),t._v(" "),r("p",[t._v("JsStore can be installed from multiple sources -")]),t._v(" "),r("h5",{attrs:{id:"cdn"}},[t._v("Cdn -")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Latest")]),t._v(" - https://cdn.jsdelivr.net/npm/jsstore/dist\ne.g - "),r("ol",[r("li",[t._v("jsstore -   https://cdn.jsdelivr.net/npm/jsstore/dist/jsstore.min.js")]),t._v(" "),r("li",[t._v("jsstore.worker - https://cdn.jsdelivr.net/npm/jsstore/dist/jsstore.worker.min.js")])])]),t._v(" "),r("li",[r("strong",[t._v("Version")]),t._v(" - https://cdn.jsdelivr.net/npm/jsstore@version"),r("br"),t._v("\ne.g - "),r("ol",[r("li",[t._v("jsstore - https://cdn.jsdelivr.net/npm/jsstore@3.0.0/dist/jsstore.min.js")]),t._v(" "),r("li",[t._v("jsstore.worker - https://cdn.jsdelivr.net/npm/jsstore@3.0.0/dist/jsstore.worker.min.js")])])])]),t._v(" "),r("h5",{attrs:{id:"npm"}},[t._v("Npm -")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Latest")]),t._v(" - npm install jsstore")]),t._v(" "),r("li",[r("strong",[t._v("Version")]),t._v(" - npm install jsstore@version"),r("br"),t._v("\ne.g - npm install jsstore@3.0.0")])]),t._v(" "),r("p",[r("br")]),t._v(" "),r("h5",{attrs:{id:"distributionfile"}},[t._v("Distribution file -")]),t._v(" "),r("p",[t._v("You can get the distribution file from "),r("a",{attrs:{href:"https://github.com/ujjwalguptaofficial/JsStore/releases/latest"}},[t._v("jsstore release")]),t._v(".")]),t._v(" "),r("p",{staticClass:"margin-top-40px text-center"},[r("button",{staticClass:"btn info btnNext"},[t._v("Next")])])])}),[],!1,null,null,null);e.default=component.exports}}]);