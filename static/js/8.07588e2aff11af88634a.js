webpackJsonp([8],{"5A2w":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("vMJZ"),l={data:function(){return{list:null,listLoading:!0,currentPage:1,totalNum:1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(a.a)({page:this.currentPage-1,size:10},"student").then(function(e){t.list=e.data.data.content,t.totalNum=e.data.data.totalElements,t.listLoading=!1})},handleCurrentChange:function(t){this.currentPage=t,this.fetchData()}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"id"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.id)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"昵称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.nickName||"--")+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"手机号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.phone||"--"))])]}}])}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"small"}},[t._v("查看")])]}}])})],1),t._v(" "),t.totalNum/10>1?n("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:t.totalNum},on:{"current-change":t.handleCurrentChange}}):t._e()],1)},staticRenderFns:[]},i=n("VU/8")(l,r,!1,null,null,null);e.default=i.exports},vMJZ:function(t,e,n){"use strict";e.a=function(t,e){return Object(a.a)({url:"/api/user/list?type="+e,method:"get",params:t})};var a=n("vLgD")}});