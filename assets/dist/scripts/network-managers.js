!function(t){function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var e={};r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=9)}({9:function(t,r,e){t.exports=e("WUwd")},WUwd:function(t,r){jQuery(function(t){t(document).ready(function(){t("div.row-actions .restrict a, div.row-actions .unrestrict a").on("click",function(){var r=t(this),e=r.parent("span"),a=e.parent("div").parent("td").parent("tr"),n=a.attr("id"),o=r.attr("data-restrict-text"),c=r.attr("data-unrestrict-text"),i=r.attr("data-restrict");t.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_admin_status",admin_id:n,status:i,_ajax_nonce:PB_NetworkManagerToken.networkManagerNonce},success:function(){a.toggleClass("restricted"),"0"===i?(e.removeClass("unrestrict").addClass("restrict"),r.attr("data-restrict","1"),r.text(o)):"1"===i&&(e.removeClass("restrict").addClass("unrestrict"),r.attr("data-restrict","0"),r.text(c))},error:function(t,r,e){alert(t+" :: "+r+" :: "+e)}})})})})}});