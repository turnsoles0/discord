(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[31628],{148114:(e,t,r)=>{e.exports=r.p+"bb5595916df24bd8cbb6d55ffee02ff9.svg"},346712:(e,t,r)=>{e.exports=r.p+"8a7e2e357f5e4ba425acb8cb55727b92.svg"},271265:(e,t,r)=>{"use strict";r.d(t,{P:()=>u});var n=r(675860),o=r(173436),i=r(461061);function l(e,t,r,n,o,i,l){try{var a=e[i](l),c=a.value}catch(e){r(e);return}a.done?t(c):Promise.resolve(c).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){l(i,n,o,a,c,"next",e)}function c(e){l(i,n,o,a,c,"throw",e)}a(void 0)}))}}var c=function(e,t){var r,n,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,
n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;(n=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:l.label++;return{value:i[1],done:!1};case 5:l.label++;n=i[1];i=[0];continue;case 7:i=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1];o=i;break}if(o&&l.label<o[2]){l.label=o[2];l.ops.push(i);break}o[2]&&l.ops.pop();l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e];n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function u(e){return s.apply(this,arguments)}function s(){return(s=a((function(e){var t;return c(this,(function(r){switch(r.label){case 0:o.Z.dispatch({type:"GUILD_POPOUT_FETCH_START",guildId:e});r.label=1;case 1:r.trys.push([1,3,,4]);return[4,n.Z.get({url:i.ANM.GUILD_PREVIEW(e),
oldFormErrors:!0})];case 2:t=r.sent();o.Z.dispatch({type:"GUILD_POPOUT_FETCH_SUCCESS",guildId:e,guild:t.body});return[3,4];case 3:r.sent();o.Z.dispatch({type:"GUILD_POPOUT_FETCH_FAILURE",guildId:e});return[3,4];case 4:return[2]}}))}))).apply(this,arguments)}},312220:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(791462),o=r(173436),i=r(631134),l=r(390174);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function u(e){u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return u(e)}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))))
;n.forEach((function(t){c(e,t,r[t])}))}return e}function f(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function d(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){p=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return p(e,t)}var b,h=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}!function(e){e.UNSET="unset";e.FETCHING="fetching";e.FAILED="failed";e.SUCCEEDED="succeeded"}(b||(b={}));var g={guilds:{}};var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&p(e,t)}(r,e);var t=y(r);function r(){a(this,r);return t.apply(this,arguments)}var n=r.prototype;n.initialize=function(){this.waitFor(i.default)};n.isFetchingGuild=function(e){var t=g.guilds[e];return null!=t&&t.fetchState===b.FETCHING};n.getGuild=function(e){var t=g.guilds[e];return null!=t?t.guild:null}
;n.hasFetchFailed=function(e){var t=g.guilds[e];return null!=t&&t.fetchState===b.FAILED};n.__getLocalVars=function(){return{GuildPopoutFetchStates:b,guildPopoutsState:g}};return r}(n.ZP.Store);m.displayName="GuildPopoutStore";const O=new m(o.Z,{GUILD_POPOUT_FETCH_START:function(e){var t=e.guildId;g.guilds[t]=f(s({},g.guilds[t]),{fetchState:b.FETCHING})},GUILD_POPOUT_FETCH_SUCCESS:function(e){var t=e.guildId,r=e.guild,n=(0,l.PP)(r);g.guilds[t]=f(s({},g.guilds[t]),{guild:n,fetchState:b.SUCCEEDED})},GUILD_POPOUT_FETCH_FAILURE:function(e){var t=e.guildId;g.guilds[t]=f(s({},g.guilds[t]),{fetchState:b.FAILED})}})},130832:(e,t,r)=>{"use strict";r.d(t,{SK:()=>F,sK:()=>G,ZP:()=>H})
;var n=r(785893),o=r(667294),i=r(294184),l=r.n(i),a=r(791462),c=r(952013),u=r(832010),s=r(769002),f=r(655695),d=r(631134),p=r(212218),b=r(191940),h=r(629590),y=r(851994),g=r(709990),m=r(48843),O=r(685351),j=r(757987),v=r(440455),P=r(917870),w=r(390174),x=r(271265),I=r(312220),S=r(461061),E=r(959797),Z=r(609561),N=r.n(Z),C=r(148114),L=r.n(C),_=r(346712),D=r.n(_);function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function A(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function U(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){
Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],l=!0,a=!1;try{for(r=r.call(e);!(l=(n=r.next()).done);l=!0){i.push(n.value);if(t&&i.length===t)break}}catch(e){a=!0;o=e}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=80;function M(){return(0,n.jsxs)(n.Fragment,{
children:[(0,n.jsx)("div",{className:N().splashPlaceholder}),(0,n.jsxs)("div",{className:l()(N().body,N().hasSplash),children:[(0,n.jsx)("div",{className:N().iconPlaceholder}),(0,n.jsx)("div",{className:N().headerText,children:(0,n.jsx)("div",{className:N().namePlaceholder})}),(0,n.jsxs)("div",{className:N().memberInfo,children:[(0,n.jsx)("div",{className:N().memberCount,children:(0,n.jsx)("div",{className:N().memberInfoPlaceholder})}),(0,n.jsx)("div",{className:N().memberCount,children:(0,n.jsx)("div",{className:N().memberInfoPlaceholder})})]}),(0,n.jsx)("div",{className:N().viewButtonPlaceholder})]})]})}function F(){var e=(0,c.ZP)();return(0,n.jsx)(y.Z,{"aria-label":E.Z.Messages.GUILD_UNAVAILABLE_HEADER,className:N().guildPopout,children:(0,n.jsxs)("div",{className:N().body,children:[(0,n.jsx)("img",{src:e===S.BRd.DARK?L():D(),className:N().unavailableIcon,width:k,height:k,alt:""}),(0,n.jsx)(m.X,{className:N().unavailableHeader,variant:"heading-md/semibold",
children:E.Z.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER}),(0,n.jsx)(O.x,{variant:"text-sm/normal",children:E.Z.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR})]})})}function G(e){var t,r=e.guild,i=e.channelId,c=e.messageId,x=r.name,I=r.id,Z=r.discoverySplash,C=r.icon,L=r.description,_=r.presenceCount,D=r.memberCount,T=r.emojis,M=I,F=(0,a.e7)([d.default],(function(){return d.default.getId()})),G=(0,a.e7)([p.ZP],(function(){return p.ZP.isMember(M,F)}),[M,F]),H=R(o.useState(!1),2),V=H[0],B=H[1],z=function(e){e.stopPropagation();if(G)(0,f.XU)(M,i,c);else{var t={page:S.ZY5.GUILD_CHANNEL,section:S.jXE.GUILD_POPOUT,object:S.qAy.CARD};(0,w.Ub)(M,t)}B(!0)},K=P.ZP.getGuildDiscoverySplashURL({id:I,splash:Z,size:250*(0,s.x_)()}),X=null!==(t=P.ZP.getGuildIconURL({id:I,icon:C,size:k}))&&void 0!==t?t:void 0,q=T,Q=null;if(null!=q&&q.length>6&&null!=T){var W;q=null!==(W=null==T?void 0:T.slice(Math.max((null==T?void 0:T.length)-6,0)))&&void 0!==W?W:[];Q=T.length-6}return(0,n.jsxs)(y.Z,{"aria-label":x,
className:N().guildPopout,children:[null!=K?(0,n.jsx)("img",{src:K,alt:"",className:N().splashImage}):null,(0,n.jsxs)("div",{className:l()(N().body,A({},N().hasSplash,null!=K)),children:[(0,n.jsx)("div",{className:l()(A({},N().iconWithSplash,null!=K)),children:(0,n.jsx)(h.Z,{onClick:z,children:(0,n.jsx)(v.ZP,{mask:v.ZP.Masks.SQUIRCLE,width:88,height:88,children:(0,n.jsx)("div",{className:N().iconMask,children:(0,n.jsx)(v.ZP,{mask:v.ZP.Masks.SQUIRCLE,width:k,height:k,children:(0,n.jsx)("img",{src:X,alt:"",className:N().avatar})})})})})}),null!=x?(0,n.jsxs)("div",{className:N().guildNameWrapper,children:[(0,n.jsx)(g.Z,{className:N().badge,guild:r,tooltipPosition:j.ZP.Positions.TOP,tooltipColor:j.ZP.Colors.PRIMARY,badgeColor:(0,u.Lq)(S.Ilk.PRIMARY_DARK_500)}),(0,n.jsx)(O.x,{variant:"text-md/semibold",className:N().guildName,children:x})]}):null,null!=L?(0,n.jsx)(O.x,{color:"header-secondary",className:N().description,variant:"text-sm/normal",children:L}):null,(0,n.jsxs)("div",{
className:N().memberInfo,children:[null!=_?(0,n.jsxs)("div",{className:N().memberCount,children:[(0,n.jsx)("div",{className:N().dotOnline}),(0,n.jsx)(O.x,{variant:"text-xs/normal",className:N().memberText,children:E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({membersOnline:_})})]}):null,null!=D?(0,n.jsxs)("div",{className:N().memberCount,children:[(0,n.jsx)("div",{className:N().dotOffline}),(0,n.jsx)(O.x,{variant:"text-xs/normal",className:N().memberText,children:E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({count:D})})]}):null]})]}),(0,n.jsxs)("div",{className:N().footer,children:[null!=q&&q.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.X,{variant:"heading-deprecated-12/semibold",className:N().emojiHeader,color:"header-secondary",children:E.Z.Messages.SERVER_EMOJI}),(0,n.jsxs)("div",{className:l()(N().emojiContainer,A({},N().withCounter,null!=Q)),children:[q.map((function(e){var t=P.ZP.getEmojiURL({id:e.id,animated:!1,size:24});return(0,n.jsx)(j.ZP,{
text:":".concat(e.name,":"),children:function(e){return(0,n.jsx)("img",U(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){A(e,t,r[t])}))}return e}({},e),{width:24,height:24,src:t,className:l()(A({},N().emoji,null==Q)),alt:""}))}},e.id)})),null!=Q?(0,n.jsx)(m.X,{variant:"heading-deprecated-12/semibold",className:N().emojiCounter,color:"header-secondary",children:"+".concat(Q)}):null]})]}):null,(0,n.jsx)(b.Co,{look:b.Co.Looks.FILLED,color:b.Co.Colors.BRAND,size:b.Co.Sizes.SMALL,onClick:z,submitting:V,autoFocus:!0,children:E.Z.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON})]})]})}function H(e){var t=e.guildId,r=e.channelId,i=e.messageId,l=(0,a.cj)([I.Z],(function(){return{guild:I.Z.getGuild(t),loading:I.Z.isFetchingGuild(t),
unavailable:I.Z.hasFetchFailed(t)}}),[t]),c=l.loading,u=l.unavailable,s=l.guild;o.useEffect((function(){null!=s||c||u||(0,x.P)(t)}),[s,t,c,u]);return c?(0,n.jsx)(y.Z,{"aria-label":E.Z.Messages.LOADING,className:N().guildPopout,children:(0,n.jsx)(M,{})}):null==s||u?(0,n.jsx)(F,{}):(0,n.jsx)(G,{guild:s,channelId:r,messageId:i})}},174013:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(785893),o=r(667294),i=r(791462),l=r(761434),a=r(271265),c=r(312220),u=r(130832);function s(e,t,r,n,o,i,l){try{var a=e[i](l),c=a.value}catch(e){r(e);return}a.done?t(c):Promise.resolve(c).then(n,o)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function l(e){s(i,n,o,l,a,"next",e)}function a(e){s(i,n,o,l,a,"throw",e)}l(void 0)}))}}function d(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function p(e){for(var t=1;t<arguments.length;t++){
var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){d(e,t,r[t])}))}return e}function b(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function h(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
;for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}var y=function(e,t){var r,n,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;(n=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:l.label++;return{value:i[1],done:!1};case 5:l.label++;n=i[1];i=[0];continue;case 7:i=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1];o=i;break}if(o&&l.label<o[2]){
l.label=o[2];l.ops.push(i);break}o[2]&&l.ops.pop();l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e];n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function g(e){var t=e.guildId,r=e.channelId,s=e.messageId,d=h(e,["guildId","channelId","messageId"]),g=(0,i.cj)([c.Z],(function(){return{guild:c.Z.getGuild(t),unavailable:c.Z.hasFetchFailed(t)}}),[t]),m=g.unavailable,O=g.guild,j=o.useCallback(f((function(){return y(this,(function(e){switch(e.label){case 0:e.trys.push([0,2,,3]);return[4,(0,a.P)(t)];case 1:e.sent();return[3,3];case 2:e.sent();return[3,3];case 3:return[2]}}))})),[t]);return m?(0,n.jsx)(l.ZP,p({position:l.ZP.Positions.RIGHT,renderPopout:function(e){return(0,n.jsx)(u.SK,{})}},d)):(0,n.jsx)(l.ZP,p({position:l.ZP.Positions.RIGHT,preload:j,renderPopout:function(e){return null==O?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(u.sK,b(p({},e),{guild:O,channelId:r,messageId:s}))}},d))}},594743:(e,t,r)=>{"use strict";r.d(t,{w8:()=>u,Rk:()=>s,Fd:()=>f,
Io:()=>d});var n=r(791462),o=r(820498),i=r(312855),l=r(204369);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],l=!0,a=!1;try{for(r=r.call(e);!(l=(n=r.next()).done);l=!0){i.push(n.value);if(t&&i.length===t)break}}catch(e){a=!0;o=e}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){return c((0,n.e7)([o.Z],(function(){return[o.Z.getMutableParticipants(e,t),o.Z.getParticipantsVersion(e)]}),[e,t],l.QF),1)[0]}function s(e,t){return(0,n.e7)([o.Z],(function(){return o.Z.getParticipantCount(e,t)}),[e,t])}function f(e){return c((0,n.e7)([o.Z],(function(){return[o.Z.getMutableRequestToSpeakParticipants(e),o.Z.getRequestToSpeakParticipantsVersion(e)]}),[e],l.QF),1)[0]}function d(e){return(0,n.e7)([o.Z],(function(){return o.Z.getMutableParticipants(e,i.pV.SPEAKER).filter((function(e){return e.type===i.Ui.VOICE})).length}),[e])}},922237:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(785893),o=(r(667294),r(240243));function i(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function l(e,t){t=null!=t?t:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}function c(e){
var t=e.width,r=void 0===t?24:t,c=e.height,u=void 0===c?24:c,s=e.color,f=void 0===s?"currentColor":s,d=e.className,p=e.foreground,b=a(e,["width","height","color","className","foreground"]);return(0,n.jsx)("svg",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){i(e,t,r[t])}))}return e}({},(0,o.Z)(b)),{className:d,width:r,height:u,viewBox:"0 0 24 24",children:(0,n.jsx)("path",{className:p,fill:f,d:"M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"})}))}},940096:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c})
;var n=r(785893),o=(r(667294),r(240243));function i(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function l(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){r=i[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}
function c(e){var t=e.width,r=void 0===t?16:t,c=e.height,u=void 0===c?16:c,s=e.color,f=void 0===s?"currentColor":s,d=e.foreground,p=a(e,["width","height","color","foreground"]);return(0,n.jsx)("svg",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){i(e,t,r[t])}))}return e}({},(0,o.Z)(p)),{width:r,height:u,viewBox:"0 0 24 24",children:(0,n.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,n.jsx)("path",{fill:f,className:d,fillRule:"nonzero",d:"M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
transform:"translate(2 4)"}),(0,n.jsx)("path",{d:"M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"})]})}))}}}]);
//# sourceMappingURL=5c8fa9af557cc60c7b59.js.map