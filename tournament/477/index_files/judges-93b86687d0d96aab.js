(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[767],{21793:function(e,t,r){!function(e){"use strict";function t(e,t){var r=e.split("_");return t%10===1&&t%100!==11?r[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?r[1]:r[2]}function r(e,r,s){return"m"===s?r?"\u043c\u0438\u043d\u0443\u0442\u0430":"\u043c\u0438\u043d\u0443\u0442\u0443":e+" "+t({ss:r?"\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434":"\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",mm:r?"\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442":"\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442",hh:"\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432",dd:"\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439",ww:"\u043d\u0435\u0434\u0435\u043b\u044f_\u043d\u0435\u0434\u0435\u043b\u0438_\u043d\u0435\u0434\u0435\u043b\u044c",MM:"\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432",yy:"\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442"}[s],+e)}var s=[/^\u044f\u043d\u0432/i,/^\u0444\u0435\u0432/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f\u0440/i,/^\u043c\u0430[\u0439\u044f]/i,/^\u0438\u044e\u043d/i,/^\u0438\u044e\u043b/i,/^\u0430\u0432\u0433/i,/^\u0441\u0435\u043d/i,/^\u043e\u043a\u0442/i,/^\u043d\u043e\u044f/i,/^\u0434\u0435\u043a/i];e.defineLocale("ru",{months:{format:"\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"),standalone:"\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_")},monthsShort:{format:"\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"),standalone:"\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_")},weekdays:{standalone:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),format:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_"),isFormat:/\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?] ?dddd/},weekdaysShort:"\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),monthsParse:s,longMonthsParse:s,shortMonthsParse:s,monthsRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,monthsShortRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,monthsStrictRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,monthsShortStrictRegex:/^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0433.",LLL:"D MMMM YYYY \u0433., H:mm",LLLL:"dddd, D MMMM YYYY \u0433., H:mm"},calendar:{sameDay:"[\u0421\u0435\u0433\u043e\u0434\u043d\u044f, \u0432] LT",nextDay:"[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430, \u0432] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[\u0412\u043e] dddd, [\u0432] LT":"[\u0412] dddd, [\u0432] LT";switch(this.day()){case 0:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd, [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd, [\u0432] LT";case 3:case 5:case 6:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd, [\u0432] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[\u0412\u043e] dddd, [\u0432] LT":"[\u0412] dddd, [\u0432] LT";switch(this.day()){case 0:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd, [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd, [\u0432] LT";case 3:case 5:case 6:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd, [\u0432] LT"}},sameElse:"L"},relativeTime:{future:"\u0447\u0435\u0440\u0435\u0437 %s",past:"%s \u043d\u0430\u0437\u0430\u0434",s:"\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",ss:r,m:r,mm:r,h:"\u0447\u0430\u0441",hh:r,d:"\u0434\u0435\u043d\u044c",dd:r,w:"\u043d\u0435\u0434\u0435\u043b\u044f",ww:r,M:"\u043c\u0435\u0441\u044f\u0446",MM:r,y:"\u0433\u043e\u0434",yy:r},meridiemParse:/\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,isPM:function(e){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e)},meridiem:function(e,t,r){return e<4?"\u043d\u043e\u0447\u0438":e<12?"\u0443\u0442\u0440\u0430":e<17?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u0435\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":return e+"-\u0439";case"D":return e+"-\u0433\u043e";case"w":case"W":return e+"-\u044f";default:return e}},week:{dow:1,doy:4}})}(r(30381))},47742:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/judges",function(){return r(51472)}])},51472:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return m}});var s=r(85893),a=r(67294),i=r(30381),l=r.n(i),n=(r(21793),r(24119)),d=r(22132),o=r(53040),u=r.n(o);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var s,a,i=[],l=!0,n=!1;try{for(r=r.call(e);!(l=(s=r.next()).done)&&(i.push(s.value),!t||i.length!==t);l=!0);}catch(d){n=!0,a=d}finally{try{l||null==r.return||r.return()}finally{if(n)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=!0;t.default=function(){var e=(0,n.iP)(),t=(0,n.y5)().getValue,r=_((0,n.bA)("tab",t("tab")),2),i=r[0],o=r[1],c=(0,a.useState)(t("judgesPremium")),m=c[0],f=c[1],g=(0,a.useState)(t("judges")),h=g[0],p=g[1],x=(0,n.Z3)({method:{name:"user/getJudges",params:{isPremium:1,rating:"all"}},data:{setDataFunc:f,emptyText:"\u0421\u0443\u0434\u044c\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b",sort:{default:{sortType:t("defaultParamsJudgesPremium.sortType"),sortOrder:t("defaultParamsJudgesPremium.sortOrder")},selected:{sortType:t("urlParamsJudgesPremium.sortType"),sortOrder:t("urlParamsJudgesPremium.sortOrder")}}},pagination:{limit:t("defaultParamsJudgesPremium.limit"),defaultTotal:t("judgesPremiumTotal"),defaultPage:t("urlParamsJudgesPremium.page")},search:{emptyText:"\u0421\u0443\u0434\u044c\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b",defaultValue:t("urlParamsJudgesPremium.search")},url:{paramsSuffix:"Premium"},table:{columns:[{title:"\u0421\u0443\u0434\u044c\u044f",sortType:"login",sortOrder:"asc"},{title:"",width:"100%"},{title:"\u0421\u0443\u0434\u0435\u0439\u0441\u043a\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",sortType:"referee_category",sortOrder:"desc",className:"f-justify-end text-right",maxWidth:"100px",minWidth:"100px"},{title:"\u041c\u043e\u0436\u0435\u0442<br />\u0431\u044b\u0442\u044c \u0413\u0421",sortType:"main_referee",sortOrder:"desc",className:"f-justify-end text-right ws-normal",maxWidth:"80px",minWidth:"75px"},{title:"\u041c\u043e\u0436\u0435\u0442<br />\u0441\u0443\u0434\u0438\u0442\u044c \u0444\u0438\u043d\u0430\u043b",sortType:"referee_final_games",sortOrder:"desc",className:"f-justify-end text-right",maxWidth:"105px"},{title:"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c<br />\u0441\u0442\u043e\u043b\u043e\u0432 \u0432 \u0440\u043e\u043b\u0438 \u0413\u0421",sortType:"max_tables_as_main",sortOrder:"desc",className:"f-justify-end text-right",maxWidth:"125px"},{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",sortType:"referee_rating",sortOrder:"desc",className:"f-justify-end text-right"},{title:"\u0418\u0433\u0440 \u043e\u0442\u0441\u0443\u0434\u0438\u043b",sortType:"referee_total_games",sortOrder:"desc",className:"text-right",maxWidth:"60px"},{title:"\u0414\u0430\u0442\u0430<br />\u0430\u043a\u043a\u0440\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u0438",sortType:"referee_license_date",sortOrder:"desc",className:"text-right ws-normal f-justify-end"},{title:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043e\u0442 \u0421\u041a \u0424\u0421\u041c",sortType:"referee_license_by_fio",sortOrder:"asc",className:"text-end text-right"}]},filters:{category:{title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",options:[{caption:"\u0412\u0441\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",value:"all"},{caption:"\u0412\u044b\u0441\u0448\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:"10"},{caption:"1 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:"1"},{caption:"2 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:"2"}],defaultValue:t("defaultParamsJudgesPremium.category"),defaultSelected:t("urlParamsJudgesPremium.category"),componentParamsCallback:function(){return e.width<=600?{minWidth:190,icon:"time",isHideArrow:!0,isCentered:!0}:{minWidth:200,maxWidth:200,icon:"list",isHideArrow:!0}}}}}),y=x.isEmptyResult,j=x.renderLoader,T=x.renderSearch,w=x.renderPagination,b=x.renderFilter,v=x.renderTableHead,P=x.renderEmptyResult,N=(0,n.Z3)({method:{name:"user/getJudges",params:{isPremium:0}},data:{setDataFunc:p,emptyText:"\u0421\u0443\u0434\u044c\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b",sort:{default:{sortType:t("defaultParamsJudges.sortType"),sortOrder:t("defaultParamsJudges.sortOrder")},selected:{sortType:t("urlParamsJudges.sortType"),sortOrder:t("urlParamsJudges.sortOrder")}}},pagination:{limit:t("defaultParamsJudges.limit"),defaultTotal:t("judgesTotal"),defaultPage:t("urlParamsJudges.page")},search:{emptyText:"\u0421\u0443\u0434\u044c\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b",defaultValue:t("urlParamsJudges.search")},url:{paramsSuffix:"Judges"},table:{columns:[{title:"\u0421\u0443\u0434\u044c\u044f",sortType:"login",sortOrder:"asc"},{title:"",width:"100%"},{title:"\u0421\u0443\u0434\u0435\u0439\u0441\u043a\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",sortType:"referee_category",sortOrder:"desc",className:"f-justify-end text-right",maxWidth:"100px",minWidth:"100px"},{title:"\u041c\u043e\u0436\u0435\u0442<br />\u0431\u044b\u0442\u044c \u0413\u0421",sortType:"main_referee",sortOrder:"desc",className:"f-justify-end text-right ws-normal",maxWidth:"80px",minWidth:"75px"},{title:"\u041c\u043e\u0436\u0435\u0442<br />\u0441\u0443\u0434\u0438\u0442\u044c \u0444\u0438\u043d\u0430\u043b",sortType:"referee_final_games",sortOrder:"desc",className:"f-justify-end text-right",maxWidth:"105px"},{title:"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c<br />\u0441\u0442\u043e\u043b\u043e\u0432 \u0432 \u0440\u043e\u043b\u0438 \u0413\u0421",sortType:"max_tables_as_main",sortOrder:"desc",className:"f-justify-end text-right",maxWidth:"125px"},{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",sortType:"referee_rating",sortOrder:"desc",className:"f-justify-end text-right"},{title:"\u0418\u0433\u0440 \u043e\u0442\u0441\u0443\u0434\u0438\u043b",sortType:"referee_total_games",sortOrder:"desc",className:"text-right",maxWidth:"60px"},{title:"\u0414\u0430\u0442\u0430<br />\u0430\u043a\u043a\u0440\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u0438",sortType:"referee_license_date",sortOrder:"desc",className:"text-right ws-normal f-justify-end"},{title:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043e\u0442 \u0421\u041a \u0424\u0421\u041c",sortType:"referee_license_by_fio",sortOrder:"asc",className:"text-end text-right"}]},filters:{category:{title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",options:[{caption:"\u0412\u0441\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",value:"all"},{caption:"\u0412\u044b\u0441\u0448\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:"10"},{caption:"1 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:"1"},{caption:"2 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:"2"},{caption:"3 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:"3"},{caption:"4 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:"4"}],defaultValue:t("defaultParamsJudges.category"),defaultSelected:t("urlParamsJudges.category"),componentParamsCallback:function(){return e.width<=600?{minWidth:160,icon:"list",isHideArrow:!0,isCentered:!0}:{minWidth:200,maxWidth:200,icon:"list",isHideArrow:!0}}},rating:{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",options:[{caption:"\u0412\u0441\u0435",value:"all"},{caption:"1 \u0437\u0432\u0435\u0437\u0434\u0430",value:"0"},{caption:"2 \u0437\u0432\u0435\u0437\u0434\u044b",value:"1"},{caption:"3 \u0437\u0432\u0435\u0437\u0434\u044b",value:"2"},{caption:"4 \u0437\u0432\u0435\u0437\u0434\u044b",value:"3"},{caption:"5 \u0437\u0432\u0435\u0437\u0434",value:"4"}],defaultValue:t("defaultParamsJudges.rating"),defaultSelected:t("urlParamsJudges.rating"),componentParamsCallback:function(){return e.width<=600?{minWidth:90,maxWidth:180,icon:"list",isHideArrow:!0,isCentered:!0}:{minWidth:130,maxWidth:130,icon:"list",isHideArrow:!0}}}}}),O=N.isEmptyResult,L=N.renderLoader,S=N.renderSearch,W=N.renderPagination,k=N.renderFilter,J=N.renderTableHead,M=N.renderEmptyResult,C=function(e){return function(){o(e)}},Y=function(e){return+e?(0,s.jsx)(d.JO,{name:"check-solid",mode:"success",size:18}):(0,s.jsx)(d.JO,{name:"xmark-solid",mode:"secondary",size:18})},D=function(e){return(0,s.jsxs)("div",{className:"d-flex f-justify-end f-align-center",children:[(0,s.jsx)(d.JO,{name:"star",mode:"warning",size:18,className:"mr-025"}),e]})};return(0,s.jsxs)(d._z,{className:u().judges,children:[(0,s.jsxs)(d.xW,{size:"full",isLargePadding:!0,children:[(0,s.jsx)(d.xv,{mode:3,marginBottom:8,block:!0,center:!0,children:"\u0421\u0443\u0434\u0435\u0439\u0441\u043a\u0438\u0439 \u0441\u043e\u0441\u0442\u0430\u0432"}),(0,s.jsxs)(d.xv,{mode:5,marginBottom:20,color:"secondary",block:!0,center:!0,weight:100,children:["\u0417\u0434\u0435\u0441\u044c \u0441\u043e\u0431\u0440\u0430\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",(0,s.jsx)("br",{}),"\u043f\u043e \u0441\u0443\u0434\u044c\u044f\u043c"]}),(0,s.jsx)("div",{className:u().judges__category,children:(0,s.jsx)(d.mQ,{children:(0,s.jsxs)(d.gB,{center:!0,isLikeButtons:!0,isColumn:e.width<=845,children:[(0,s.jsx)(d.n5,{onSelect:C("premium"),isSelectControl:!0,isSelected:"premium"===i,children:"\u0421 \u043f\u0440\u0430\u0432\u043e\u043c \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0432\u043d\u0443\u0442\u0440\u0438\u043a\u043b\u0443\u0431\u043d\u044b\u0445 \u0442\u0443\u0440\u043d\u0438\u0440\u043e\u0432"}),(0,s.jsx)(d.n5,{onSelect:C("all"),isSelectControl:!0,isSelected:"all"===i,children:"\u0412\u0441\u0435 \u0441\u0443\u0434\u044c\u0438 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u043e\u0439 \u041c\u0430\u0444\u0438\u0438"})]})})}),"premium"===i&&e.width<=600&&(0,s.jsxs)("div",{className:u()["judges__filters-premium-mobile"],children:[b("category"),T()]}),"all"===i&&e.width<=600&&(0,s.jsxs)("div",{className:u()["judges__filters-all-mobile"],children:[(0,s.jsxs)("div",{className:u()["judges__filters-all-mobile-top"],children:[k("category"),k("rating")]}),S()]})]}),(0,s.jsxs)(d.xW,{size:"full",children:["premium"===i&&(0,s.jsxs)(s.Fragment,{children:[e.width>600&&(0,s.jsxs)("div",{className:u()["judges__filters-premium"],children:[b("category"),T()]}),!y&&(0,s.jsxs)("div",{className:u().judges__table,children:[v(m.map((function(e){return(0,s.jsx)(d.gr,{position:-1,avatar:e.avatar_link,avatarType:"user",icon:(0,s.jsx)(d.gT,{isPaid:!!+e.is_paid,iconType:e.icon_type,iconName:e.icon,className:"mt-025 ml-05"}),title:e.login,isCheck:!!+e.paid_account,description:e.fio,link:"/stats/".concat(e.id),columnsClasses:["text-right","","","text-right","text-right","text-right","text-right ws-nowrap","text-right"],columns:["".concat(10===+e.referee_category?"\u0412\u044b\u0441\u0448\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f":"".concat(e.referee_category," \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f")),(0,s.jsx)("div",{className:"d-flex f-justify-end",children:Y(e.main_referee)}),(0,s.jsx)("div",{className:"d-flex f-justify-end",children:Y(e.referee_final_games)}),e.max_tables_as_main,D(+e.referee_rating+1),e.referee_total_games,"0000-00-00 00:00:00"!==e.referee_license_date?l()(e.referee_license_date).locale("ru").format("LL"):"\u2013",e.referee_license_by_fio]},e.login)}))),j(),w()]}),P()]}),"all"===i&&h&&(0,s.jsxs)(s.Fragment,{children:[e.width>600&&(0,s.jsxs)("div",{className:u()["judges__filters-all"],children:[(0,s.jsxs)("div",{className:u()["judges__filters-all-left"],children:[k("category"),k("rating")]}),S()]}),!O&&(0,s.jsxs)("div",{className:u().judges__table,children:[J(h.map((function(e){return(0,s.jsx)(d.gr,{position:-1,avatar:e.avatar_link,avatarType:"user",icon:(0,s.jsx)(d.gT,{isPaid:!!+e.is_paid,iconType:e.icon_type,iconName:e.icon,className:"mt-025 ml-05"}),title:e.login,isCheck:!!+e.paid_account,description:e.fio,link:"/stats/".concat(e.id),columnsClasses:["text-right","","","text-right","text-right","text-right","text-right ws-nowrap","text-right"],columns:["".concat(10===+e.referee_category?"\u0412\u044b\u0441\u0448\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f":"".concat(e.referee_category," \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f")),(0,s.jsx)("div",{className:"d-flex f-justify-end",children:Y(e.main_referee)}),(0,s.jsx)("div",{className:"d-flex f-justify-end",children:Y(e.referee_final_games)}),e.max_tables_as_main,D(+e.referee_rating+1),e.referee_total_games,"0000-00-00 00:00:00"!==e.referee_license_date?l()(e.referee_license_date).locale("ru").format("LL"):"\u2013",e.referee_license_by_fio]},e.login)}))),W(),L()]}),M()]})]})]})}},53040:function(e){e.exports={judges__category:"judges_judges__category__ZCYNu","judges__filters-premium":"judges_judges__filters-premium__evc3Q","judges__filters-premium-mobile":"judges_judges__filters-premium-mobile__iiOHU","judges__filters-all":"judges_judges__filters-all__s5KJS","judges__filters-all-left":"judges_judges__filters-all-left__frix_","judges__filters-all-mobile":"judges_judges__filters-all-mobile__Z02rC","judges__filters-all-mobile-top":"judges_judges__filters-all-mobile-top__jg51q",judges__table:"judges_judges__table__iAxUg",judges__bw:"judges_judges__bw__0so0d"}}},function(e){e.O(0,[774,888,179],(function(){return t=47742,e(e.s=t);var t}));var t=e.O();_N_E=t}]);