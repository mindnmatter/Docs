(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{247:function(t,c,o){var content=o(265);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("59f850b2",content,!0,{sourceMap:!1})},264:function(t,c,o){"use strict";o(247)},265:function(t,c,o){(c=o(50)(!1)).push([t.i,".list-primary{--text-opacity:1;color:#1abc9c;color:rgba(26,188,156,var(--text-opacity))}.list-info{--text-opacity:1;color:#4299e1;color:rgba(66,153,225,var(--text-opacity))}.list-success{--text-opacity:1;color:#48bb78;color:rgba(72,187,120,var(--text-opacity))}.list-warning{--text-opacity:1;color:#ed8936;color:rgba(237,137,54,var(--text-opacity))}.list-danger{--text-opacity:1;color:#f56565;color:rgba(245,101,101,var(--text-opacity))}",""]),t.exports=c},287:function(t,c,o){"use strict";o.r(c);o(32),o(42);var r={props:{items:{type:Array,default:function(){return[]}},icon:{type:String,default:null},type:{type:String,default:"primary",validator:function(t){return["primary","info","success","warning","danger"].includes(t)}}},computed:{iconName:function(){return this.icon||{primary:"IconBadgeCheck",info:"IconInformationCircle",success:"IconCheckCircle",warning:"IconExclamationCircle",danger:"IconXCircle"}[this.type]}}},e=(o(264),o(3)),component=Object(e.a)(r,(function(){var t=this,c=t.$createElement,o=t._self._c||c;return o("div",t._l(t.items,(function(c,i){return o("div",{key:i,staticClass:"mt-3 flex"},[o("span",{staticClass:"mt-px mr-3 flex-shrink-0",class:"list-"+t.type},[o(t.iconName,{tag:"component",staticClass:"h-6 w-6"})],1),t._v("\n    "+t._s(c)+"\n  ")])})),0)}),[],!1,null,null,null);c.default=component.exports}}]);