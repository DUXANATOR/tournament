(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80],{82530:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tournaments",function(){return a(57084)}])},57084:function(t,e,a){"use strict";a.r(e),a.d(e,{__N_SSP:function(){return m}});var n=a(85893),i=a(67294),s=a(24119),r=a(34404),l=a(22132),o=a(97963),u=a.n(o),m=!0;e.default=function(){var t=(0,s.y5)().getValue,e=(0,s.iP)(),a=(0,i.useState)(t("tournaments")),o=a[0],m=a[1],d=(0,s.Z3)({method:{name:"tournament/getAll"},data:{setDataFunc:m,emptyText:"\u0422\u0443\u0440\u043d\u0438\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"},pagination:{limit:t("defaultParams.limit"),defaultTotal:t("tournamentsTotal"),defaultPage:t("urlParams.page")},search:{emptyText:"\u0422\u0443\u0440\u043d\u0438\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b",defaultValue:t("urlParams.search")},filters:{time:{title:"\u0417\u0430 \u043a\u0430\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f",options:[{value:"30_days",caption:"\u0411\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0435 30 \u0434\u043d\u0435\u0439"},{value:"3_months",caption:"\u0411\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0435 3 \u043c\u0435\u0441\u044f\u0446\u0430"},{value:"all_planned",caption:"\u0412\u0441\u0435 \u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435"},{value:"finished",caption:"\u0421\u043e\u0441\u0442\u043e\u044f\u0432\u0448\u0438\u0435\u0441\u044f"},{value:"all",caption:"\u0412\u0441\u0435"}],defaultValue:t("defaultParams.time"),defaultSelected:t("urlParams.time"),componentParamsCallback:function(){return e.width<=900?{minWidth:150,icon:"time",isHideArrow:!0,isCentered:!0}:{minWidth:230,icon:"time",isHideArrow:!0}}},fsm:{title:"\u0422\u0438\u043f \u0442\u0443\u0440\u043d\u0438\u0440\u0430",options:[{value:"yes",caption:"\u0412 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0435 \u0424\u0421\u041c"},{value:"no",caption:"\u0412\u043d\u0435 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0430 \u0424\u0421\u041c"},{value:"all",caption:"\u0412\u0441\u0435"}],defaultValue:t("defaultParams.fsm"),defaultSelected:t("urlParams.fsm"),componentParamsCallback:function(){return e.width<=900?{minWidth:150,icon:"list",isHideArrow:!0,isCentered:!0}:{minWidth:210,icon:"list",isHideArrow:!0}}},type:{title:"\u0422\u0438\u043f \u0438\u0433\u0440\u044b",options:[{value:"individual",caption:"\u041b\u0438\u0447\u043d\u044b\u0435"},{value:"team",caption:"\u041a\u043e\u043c\u0430\u043d\u0434\u043d\u044b\u0435"},{value:"all",caption:"\u0412\u0441\u0435"}],defaultValue:t("defaultParams.type"),defaultSelected:t("urlParams.type"),componentParamsCallback:function(){return e.width<=900?{minWidth:150,icon:"list",isHideArrow:!0,isCentered:!0}:{minWidth:150,icon:"list",isHideArrow:!0}}}}}),c=d.isEmptyResult,_=d.renderEmptyResult,f=d.renderLoader,p=d.renderSearch,h=d.renderPagination,v=d.renderFilter;return(0,n.jsxs)(l._z,{className:u().tournaments,children:[(0,n.jsxs)(l.xW,{size:"full",isLargePadding:!0,children:[(0,n.jsx)(l.xv,{mode:3,marginBottom:8,block:!0,center:!0,children:"\u0422\u0443\u0440\u043d\u0438\u0440\u044b"}),(0,n.jsxs)(l.xv,{mode:5,marginBottom:0,color:"secondary",block:!0,center:!0,weight:100,children:["\u0417\u0434\u0435\u0441\u044c \u0441\u043e\u0431\u0440\u0430\u043d\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",(0,n.jsx)("br",{}),"\u043f\u043e \u0442\u0443\u0440\u043d\u0438\u0440\u0430\u043c"]}),e.width<=900&&(0,n.jsxs)("div",{className:u()["tournaments__filters-mobile"],children:[v("time"),(0,n.jsxs)("div",{className:u()["tournaments__filters-mobile-middle"],children:[v("type"),v("fsm")]}),p()]})]}),(0,n.jsxs)(l.xW,{size:"full",children:[e.width>900&&(0,n.jsxs)("div",{className:u().tournaments__filters,children:[(0,n.jsxs)("div",{className:u()["tournaments__filters-left"],children:[v("time"),v("type"),v("fsm")]}),p()]}),o&&(0,n.jsxs)(n.Fragment,{children:[!c&&(0,n.jsxs)("div",{className:u().tournaments__table,children:[(0,n.jsx)(l.PZ,{children:o.map((function(t,e){return(0,n.jsx)(l.Fj,{tournamentId:t.id,name:t.title,city:"".concat(t.country_translate,", ").concat(t.city_translate),date:"".concat((0,r.u4)(t.date_start)," \u2013 ").concat((0,r.u4)(t.date_end)),type:t.type,typeTranslate:t.type_translate,status:t.status,statusTranslate:t.status_translate,chatLink:t.chat_link,vkLink:t.vk_group_link,registerLink:t.registration_discussion_link,star:t.star,elo:t.elo_average},t.title+t.date_start+t.date_end+e)}))}),f(),h()]}),_()]})]})]})}},97963:function(t){t.exports={tournaments__filters:"tournaments_tournaments__filters__09iZt","tournaments__filters-left":"tournaments_tournaments__filters-left__UDd80","tournaments__filters-mobile":"tournaments_tournaments__filters-mobile__Qvl3e","tournaments__filters-mobile-middle":"tournaments_tournaments__filters-mobile-middle__kshH8",tournaments__table:"tournaments_tournaments__table__OjWML"}}},function(t){t.O(0,[774,888,179],(function(){return e=82530,t(t.s=e);var e}));var e=t.O();_N_E=e}]);