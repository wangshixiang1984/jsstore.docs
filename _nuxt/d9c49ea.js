(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{198:function(e,n,t){"use strict";t.r(n);var o={components:{Layout:t(172).a}},c=t(14),component=Object(c.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Layout",{attrs:{title:"keyPath",description:"learn how to use keypath for querying faster in indexeddb",keywords:"keypath, column, indexing, indexeddb, jsstore",contentSrc:"/home/runner/work/jsstore.docs/jsstore.docs/content/tutorial/keypath.md"}},[t("p",[t("code",[e._v("keyPath")]),e._v(" is a option in column. It is used to add multiple index, so that query execution can be made faster. It takes an array of type string.")]),e._v(" "),t("p",[e._v("It can be used to increase speed of "),t("code",[e._v("select")]),e._v(" query.")]),e._v(" "),t("p",[e._v("e.g - Lets take a table name with cities having column pinCodes & name")]),e._v(" "),t("pre",[t("code",[e._v("var table = {\n    name: 'cities',\n    columns: {\n        cityName:{},\n        pincCodes:{}\n    }\n}\n")])]),e._v(" "),t("p",[e._v("We want to query on pincodes & name so a select query will be like this - ")]),e._v(" "),t("pre",[t("code",[e._v("connection.select({\n    from: 'cities',\n    where: {\n        pinCodes: 12345,\n        name: 'london'\n    }\n})\n")])]),e._v(" "),t("p",[e._v("Now lets define the table using keyPath ")]),e._v(" "),t("pre",[t("code",[e._v("var table = {\n    name: 'cities',\n    columns: {\n        cityName:{},\n        pincCodes:{},\n        cityPincodes:{keyPath:['cityName','pinCodes']}\n    }\n}\n")])]),e._v(" "),t("h3",{attrs:{id:"insertdataafterkeypath"}},[e._v("Insert Data after keypath")]),e._v(" "),t("p",[e._v("The inserted data should contains all column mentioned in keypath i.e - "),t("code",[e._v("cityName")]),e._v(" & "),t("code",[e._v("pinCodes")]),e._v(" as was it before.")]),e._v(" "),t("pre",[t("code",[e._v("const value = {\n    cityName:'Bangalore',\n    pinCodes:'12345'\n}\ninsert({\n    into:'cities',\n    values:[value]\n})\n")])]),e._v(" "),t("h3",{attrs:{id:"selectusingkeypath"}},[e._v("Select using keypath")]),e._v(" "),t("p",[e._v("and now new query can be written as - ")]),e._v(" "),t("pre",[t("code",[e._v("connection.select({\n    from: 'cities',\n    where: {\n        cityPincodes: ['london',12345] // order of values should be same as what has been defined in keyPath\n    }\n})\n")])]),e._v(" "),t("p",[e._v("Note :- Please compare between query execution time if there is no difference or very less then don't use keyPath. Adding multiple index will increase the db size which is limited for users.")])])}),[],!1,null,null,null);n.default=component.exports}}]);