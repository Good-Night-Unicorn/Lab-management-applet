(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"16da":function(e,n,t){"use strict";(function(e){t("bd28");i(t("66fd"));var n=i(t("2fc1"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"24a9":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,i,r,u,a){try{var o=e[u](a),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(i,r)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var a=e.apply(n,t);function o(e){u(a,i,r,o,c,"next",e)}function c(e){u(a,i,r,o,c,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxinxixingbieOptions:[],yonghuxinxixingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var n=this;return a(i.default.mark((function t(){var r;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],r=e.getStorageSync("loginTable"),n.tableName=r,"yonghuxinxi"==n.tableName&&(n.yonghuxinxixingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yonghuxinxixingbieOptions[0]),n.styleChange();case 5:case"end":return t.stop()}}),t)})))()},methods:{yonghuxinxixingbieChange:function(e){this.yonghuxinxixingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxinxixingbieOptions[this.yonghuxinxixingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return a(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.zhanghao||"yonghuxinxi"!=e.tableName){n.next=3;break}return e.$utils.msg("账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"yonghuxinxi"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(e.ruleForm.shouji||"yonghuxinxi"!=e.tableName){n.next=9;break}return e.$utils.msg("手机不能为空"),n.abrupt("return");case 9:if("yonghuxinxi"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=12;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 12:if("yonghuxinxi"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=15;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 15:return n.next=17,e.$api.register("".concat(e.tableName),e.ruleForm);case 17:e.$utils.msgBack("注册成功");case 19:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,t("543d")["default"])},"2fc1":function(e,n,t){"use strict";t.r(n);var i=t("4f5b"),r=t("ba9b");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("ce64");var a,o=t("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"7064305c",null,!1,i["a"],a);n["default"]=c.exports},"4f5b":function(e,n,t){"use strict";var i;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return i}));var r=function(){var e=this,n=e.$createElement;e._self._c},u=[]},ba9b:function(e,n,t){"use strict";t.r(n);var i=t("24a9"),r=t.n(i);for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);n["default"]=r.a},ce64:function(e,n,t){"use strict";var i=t("ec2c"),r=t.n(i);r.a},ec2c:function(e,n,t){}},[["16da","common/runtime","common/vendor"]]]);