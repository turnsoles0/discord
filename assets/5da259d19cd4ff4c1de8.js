(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[91352],{698242:(e,r,n)=>{e.exports=n.p+"f3767d455e70dcdd1c8a3102e42c6d34.svg"},634737:(e,r,n)=>{e.exports=n.p+"8d224aa39e763dff664f330fdadeda3e.svg"},395951:(e,r,n)=>{"use strict";n.d(r,{FD:()=>_,Zy:()=>b,ss:()=>v,S2:()=>y,Mn:()=>A,ol:()=>g,V3:()=>N,I5:()=>C,cV:()=>T,b9:()=>R,si:()=>j,W3:()=>S,P6:()=>x,_V:()=>F});var t=n(675860),o=n(444450),i=n(173436),s=n(838478),a=n(655695),l=n(932847),u=n(917870),c=n(283273),d=n(742269),f=n(461061),I=n(959797);function p(e,r,n,t,o,i,s){try{var a=e[i](s),l=a.value}catch(e){n(e);return}a.done?r(l):Promise.resolve(l).then(t,o)}function E(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function s(e){p(i,t,o,s,a,"next",e)}function a(e){p(i,t,o,s,a,"throw",e)}s(void 0)}))}}function m(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;return e}function O(e){
for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));t.forEach((function(r){m(e,r,n[r])}))}return e}var h=function(e,r){var n,t,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;(t=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:s.label++;return{value:i[1],done:!1};case 5:s.label++;t=i[1];i=[0];continue;case 7:i=s.ops.pop();s.trys.pop();continue;default:if(!(o=s.trys,
o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1];o=i;break}if(o&&s.label<o[2]){s.label=o[2];s.ops.push(i);break}o[2]&&s.ops.pop();s.trys.pop();continue}i=r.call(e,s)}catch(e){i=[6,e];t=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function _(){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_INIT"})}function b(){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_CLOSE"})}function v(e,r){var n=r?I.Z.Messages.DELETE_ACCOUNT:I.Z.Messages.DISABLE_ACCOUNT,o=r?f.ANM.DELETE_ACCOUNT:f.ANM.DISABLE_ACCOUNT;return(0,c.Z)((function(r){return t.Z.post({url:o,body:O({password:e},r),oldFormErrors:!0})}),{modalProps:{title:n},checkEnabled:!1}).then((function(){i.Z.dispatch({type:"LOGOUT"});(0,a.uL)(f.Z5c.DEFAULT_LOGGED_OUT)}))}function y(e){return M.apply(this,arguments)}function M(){return(M=E((function(e){var r,n,o;return h(this,(function(s){switch(s.label){
case 0:return[4,t.Z.patch({url:f.ANM.ME,body:e,oldFormErrors:!0})];case 1:r=s.sent();if((n=r.body).token){o=n.token;delete n.token;i.Z.dispatch({type:"UPDATE_TOKEN",token:o,userId:n.id});null!=(null==e?void 0:e.password)&&null!=(null==e?void 0:e.new_password)&&i.Z.dispatch({type:"PASSWORD_UPDATED",userId:n.id})}i.Z.dispatch({type:"CURRENT_USER_UPDATE",user:n});return[2,r]}}))}))).apply(this,arguments)}function A(e){var r=e.username,n=e.discriminator,t=e.email,s=e.emailToken,a=e.password,p=e.avatar,E=e.avatarDecoration,m=e.newPassword;i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SUBMIT"});return(0,c.Z)((function(e){var i=O({username:r,email:t,email_token:s,password:a,avatar:p,discriminator:n,new_password:m},e);void 0!==E&&(null==E?i.avatar_decoration_preset=null:E.isCustom?i.avatar_decoration=E.data:i.avatar_decoration_preset=E.name);var l=o.Z.get(f.JkL),u=(0,d.xJ)();if(null!=u&&null!=l){i.push_provider=u;i.push_token=l}var c=o.Z.get(f.scU);if(null!=f.mvA&&null!=c){
i.push_voip_provider=f.mvA;i.push_voip_token=c}return y(i)}),{checkEnabled:!1,modalProps:{title:I.Z.Messages.TWO_FA_CHANGE_ACCOUNT},hooks:{onEarlyClose:function(){return i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",errors:{}})}}}).then((function(e){var r=e.body;l.default.track(f.rMx.USER_AVATAR_UPDATED,{animated:(0,u.xR)(r.avatar)});i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"});return e}),(function(e){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",errors:e.body});return e}))}function g(){return t.Z.get({url:f.ANM.USER_HARVEST,oldFormErrors:!0})}function N(){return t.Z.post({url:f.ANM.USER_HARVEST,oldFormErrors:!0})}function C(e){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",avatar:e});null==e?s.Z.announce(I.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE):s.Z.announce(I.Z.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)}function T(e){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",avatarDecoration:e})}function R(){
i.Z.dispatch({type:"USER_SETTINGS_CLEAR_ERRORS"})}function j(){i.Z.dispatch({type:"USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"})}function S(){i.Z.dispatch({type:"USER_SETTINGS_RESET_ALL_PENDING"})}function x(){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"})}function F(e){i.Z.dispatch({type:"USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",disable:e})}},291352:(e,r,n)=>{"use strict";n.d(r,{Z:()=>We});var t=n(785893),o=n(667294),i=n(294184),s=n.n(i),a=n(791462),l=n(822567),u=n(395951),c=n(730189),d=n(40188),f=n(989232),I=n(392115),p=n(95350),E=n(212218),m=n(653772),O=n(859023),h=n(191940),_=n(487502),b=n(969225),v=n(48843),y=n(304546),M=n(685351),A=n(801593),g=n(757987),N=n(562181),C=n(962271),T=n(67416),R=n(932847),j=n(917870),S=n(377305),x=n(448536),F=n(124264),w=n(570239),Z=n(830426),P=n(123113),L=n(461061);function U(e){var r=e.guildId,n=(0,a.e7)([x.Z],(function(){return x.Z.get(r)})),t=null==n?void 0:n.guild;return(0,a.e7)([m.Z],(function(){
var e,n=null===(e=m.Z.getGuild(r))||void 0===e?void 0:e.verificationLevel,o=null==t?void 0:t.verification_level;return(null!=n?n:o)===L.sFg.VERY_HIGH}),[r,t])}var V=n(855209),D=n(847072),k=n(959797),B=n(732231),G=n.n(B);function H(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function z(e,r,n,t,o,i,s){try{var a=e[i](s),l=a.value}catch(e){n(e);return}a.done?r(l):Promise.resolve(l).then(t,o)}function Y(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;return e}function J(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){
Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}));return e}function X(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(t=n.next()).done);s=!0){i.push(t.value);if(r&&i.length===r)break}}catch(e){a=!0;o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return H(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Q=function(e,r){var n,t,o,i,s={label:0,
sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;(t=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:s.label++;return{value:i[1],done:!1};case 5:s.label++;t=i[1];i=[0];continue;case 7:i=s.ops.pop();s.trys.pop();continue;default:if(!(o=s.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1];o=i;break}if(o&&s.label<o[2]){s.label=o[2];s.ops.push(i);break}o[2]&&s.ops.pop();s.trys.pop();continue}i=r.call(e,s)}catch(e){i=[6,e];t=0}finally{n=o=0}if(5&i[0])throw i[1];return{
value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function W(){var e=X(o.useState(!1),2),r=e[0],n=e[1],i=X(o.useState(!1),2),s=i[0],a=i[1],u=X(o.useState(!1),2),c=u[0],d=u[1];o.useEffect((function(){var e;s&&(e=setTimeout((function(){a(!1)}),2e3));return function(){null!=e&&clearTimeout(e)}}),[s]);var f,I,p=(I=(f=function(){return Q(this,(function(e){switch(e.label){case 0:if(r)return[2];n(!0);e.label=1;case 1:e.trys.push([1,3,4,5]);return[4,l.Z.verifyResend()];case 2:e.sent();a(!0);d(!0);return[3,5];case 3:e.sent();return[3,5];case 4:n(!1);return[7];case 5:return[2]}}))},function(){var e=this,r=arguments;return new Promise((function(n,t){var o=f.apply(e,r);function i(e){z(o,n,t,i,s,"next",e)}function s(e){z(o,n,t,i,s,"throw",e)}i(void 0)}))}),function(){return I.apply(this,arguments)});return s?(0,t.jsx)(M.x,{className:G().verifyConfirmText,variant:"text-sm/normal",color:"text-positive",children:k.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT}):(0,t.jsx)(h.Co,{
size:h.Co.Sizes.SMALL,submitting:r,onClick:p,children:c?k.Z.Messages.RESEND_EMAIL_SHORT:k.Z.Messages.VERIFY})}function q(){return(0,t.jsx)(D.PU,{icon:V.Z,text:k.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL,footnote:k.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,meetsRequirement:!1,children:(0,t.jsx)(g.ZP,{text:k.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,children:function(e){return(0,t.jsx)(h.Co,J(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));t.forEach((function(r){Y(e,r,n[r])}))}return e}({},e),{size:h.Co.Sizes.SMALL,disabled:!0,children:k.Z.Messages.VERIFY}))}})})}function K(e){
var r=e.isUserVerified,n=r?k.Z.Messages.MEMBER_VERIFICATION_EMAIL_VERIFIED:k.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL;return(0,t.jsx)(D.PU,{icon:V.Z,text:n,footnote:k.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,meetsRequirement:r,children:(0,t.jsx)(W,{})})}var $=n(464497),ee=n(928575),re=n(99918),ne=n(526066),te=n(897576),oe=n(330665);function ie(e,r,n,t,o,i,s){try{var a=e[i](s),l=a.value}catch(e){n(e);return}a.done?r(l):Promise.resolve(l).then(t,o)}function se(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function s(e){ie(i,t,o,s,a,"next",e)}function a(e){ie(i,t,o,s,a,"throw",e)}s(void 0)}))}}function ae(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;return e}function le(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n)
;"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));t.forEach((function(r){ae(e,r,n[r])}))}return e}function ue(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}));return e}var ce=function(e,r){var n,t,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){
if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;(t=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:s.label++;return{value:i[1],done:!1};case 5:s.label++;t=i[1];i=[0];continue;case 7:i=s.ops.pop();s.trys.pop();continue;default:if(!(o=s.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1];o=i;break}if(o&&s.label<o[2]){s.label=o[2];s.ops.push(i);break}o[2]&&s.ops.pop();s.trys.pop();continue}i=r.call(e,s)}catch(e){i=[6,e];t=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function de(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(D.PU,{icon:ne.Z,text:k.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL,
footnote:k.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,meetsRequirement:!1,children:(0,t.jsx)(g.ZP,{text:k.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,children:function(e){return(0,t.jsx)(h.Co,ue(le({},e),{size:h.Co.Sizes.SMALL,disabled:!0,children:k.Z.Messages.VERIFY}))}})})})}function fe(e){var r=e.isUserVerified,o=r?k.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED:k.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(D.PU,{icon:ne.Z,text:o,footnote:k.Z.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,meetsRequirement:r,children:(0,t.jsx)(h.Co,{size:h.Co.Sizes.SMALL,onClick:function(){(0,te.ZD)(se((function(){var e,r;return ce(this,(function(o){switch(o.label){case 0:return[4,Promise.all([n.e(40532),n.e(71784),n.e(45692),n.e(97846),n.e(11228)]).then(n.bind(n,997846))];case 1:e=o.sent(),r=e.default;return[2,function(e){return(0,t.jsx)(r,le({reason:re.L.GUILD_PHONE_REQUIRED},e))}]}}))
})),{modalKey:oe.M})},children:k.Z.Messages.VERIFY})})})}var Ie=n(678050),pe=n(404102);function Ee(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function me(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;return e}function Oe(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));t.forEach((function(r){me(e,r,n[r])}))}return e}function he(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));n.push.apply(n,t)}return n
}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}));return e}function _e(e){return function(e){if(Array.isArray(e))return Ee(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return Ee(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ee(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e){var r=e.guildId,n=e.formFields,o=e.updateFormFields,i=(0,a.e7)([m.Z],(function(){var e;return null===(e=m.Z.getGuild(r))||void 0===e?void 0:e.rulesChannelId})),s=function(e,r){var t=n[e]
;o(_e(n.slice(0,e)).concat([he(Oe({},t),{response:r})],_e(n.slice(e+1))))},l=function(e,r){switch(e.field_type){case w.QJ.TERMS:return(0,t.jsx)(Ie.dd,{channelId:i,formField:e,onChange:function(e,t){return function(e,r){var t=n[e];o(_e(n.slice(0,e)).concat([he(Oe({},t),{response:r})],_e(n.slice(e+1))))}(r,t)}},r);case w.QJ.TEXT_INPUT:return(0,t.jsx)(pe.zY,{formField:e,onChange:function(e){return s(r,e)}},r);case w.QJ.PARAGRAPH:return(0,t.jsx)(ee.lX,{formField:e,onChange:function(e){return s(r,e)}},r);case w.QJ.MULTIPLE_CHOICE:return(0,t.jsx)($.sp,{formField:e,onChange:function(e){return function(e,r){var t=r.value,i=n[e];o(_e(n.slice(0,e)).concat([he(Oe({},i),{response:t})],_e(n.slice(e+1))))}(r,e)}},r)}};return(0,t.jsx)(t.Fragment,{children:n.map((function(e,r){return l(e,r)}))})}function ve(e){var r=e.guildId,n=e.formFields,o=e.updateFormFields,i=(0,a.e7)([O.default],(function(){return O.default.getCurrentUser()})),s=U({guildId:r})?de:q;return null==i?null:(0,t.jsxs)(t.Fragment,{
children:[(0,t.jsx)(s,{}),(0,t.jsx)(be,{guildId:r,formFields:n,updateFormFields:o})]})}function ye(e){var r=e.guildId,n=e.formFields,i=e.updateFormFields,s=(0,a.e7)([O.default],(function(){return O.default.getCurrentUser()})),l=function(e){var r=e.guildId,n=(0,a.e7)([O.default],(function(){return O.default.getCurrentUser()})),t=U({guildId:r}),o=(null==n?void 0:n.isPhoneVerified())||(null==n?void 0:n.isStaff()),i=(null==n?void 0:n.verified)||o;return{isPhoneVerificationLevel:t,isCurrentUserVerified:!!(t?o:i)}}({guildId:r}),u=l.isPhoneVerificationLevel,c=l.isCurrentUserVerified,d=o.useRef(c),f=u?fe:K;return null==s?null:(0,t.jsxs)(t.Fragment,{children:[!d.current&&(0,t.jsx)(f,{isUserVerified:c}),(0,t.jsx)(be,{guildId:r,formFields:n,updateFormFields:i})]})}var Me=n(580946),Ae=n(133766),ge=n.n(Ae),Ne=n(698242),Ce=n.n(Ne),Te=n(483683),Re=n.n(Te),je=n(63685),Se=n.n(je),xe=n(634737),Fe=n.n(xe);function we(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n]
;return t}function Ze(e,r,n,t,o,i,s){try{var a=e[i](s),l=a.value}catch(e){n(e);return}a.done?r(l):Promise.resolve(l).then(t,o)}function Pe(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function s(e){Ze(i,t,o,s,a,"next",e)}function a(e){Ze(i,t,o,s,a,"throw",e)}s(void 0)}))}}function Le(e,r,n){r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n;return e}function Ue(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));t.forEach((function(r){Le(e,r,n[r])}))}return e}function Ve(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){
var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}));return e}function De(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(t=n.next()).done);s=!0){i.push(t.value);if(r&&i.length===r)break}}catch(e){a=!0;o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,r)||Be(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ke(e){return function(e){if(Array.isArray(e))return we(e)}(e)||function(e){
if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Be(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Be(e,r){if(e){if("string"==typeof e)return we(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);return"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?we(e,r):void 0}}var Ge,He=function(e,r){var n,t,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),
0):t.next)&&!(o=o.call(t,i[1])).done)return o;(t=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:s.label++;return{value:i[1],done:!1};case 5:s.label++;t=i[1];i=[0];continue;case 7:i=s.ops.pop();s.trys.pop();continue;default:if(!(o=s.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1];o=i;break}if(o&&s.label<o[2]){s.label=o[2];s.ops.push(i);break}o[2]&&s.ops.pop();s.trys.pop();continue}i=r.call(e,s)}catch(e){i=[6,e];t=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};!function(e){e[e.CLAIM_ACCOUNT=0]="CLAIM_ACCOUNT";e[e.EMAIL_CONFIRMATION=1]="EMAIL_CONFIRMATION";e[e.VERIFICATION_FORM=2]="VERIFICATION_FORM"}(Ge||(Ge={}));var ze=function(e){var r=e.headerId,n=e.email,o=e.password,i=e.setEmail,s=e.setPassword,a=e.emailError,l=e.passwordError;return(0,t.jsxs)("div",{className:ge().content,children:[(0,t.jsx)("img",{
alt:k.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_ICON,src:Ce(),className:ge().applicationIcon}),(0,t.jsx)(v.X,{id:r,variant:"heading-xl/semibold",className:ge().header,children:k.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_TITLE}),(0,t.jsx)(M.x,{variant:"text-sm/normal",color:"header-secondary",children:k.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_SUBTITLE}),(0,t.jsx)("hr",{className:ge().divider}),(0,t.jsx)(N.xJ,{title:k.Z.Messages.FORM_LABEL_EMAIL,className:ge().formItem,children:(0,t.jsx)(A.ZP,{value:n,error:a,onChange:i,autoFocus:!0})}),(0,t.jsx)(N.xJ,{title:k.Z.Messages.FORM_LABEL_PASSWORD,className:ge().formItem,children:(0,t.jsx)(A.ZP,{type:"password",value:o,error:l,onChange:s})})]})},Ye=function(e){var r=e.headerId,n=e.email;return(0,t.jsxs)("div",{className:ge().content,children:[(0,t.jsx)("img",{alt:k.Z.Messages.MEMBER_VERIFICATION_VERIFY_EMAIL_ICON,src:Fe(),className:ge().applicationIcon}),(0,t.jsx)(v.X,{id:r,variant:"heading-xl/semibold",className:ge().header,
children:k.Z.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_TITLE.format({email:n})}),(0,t.jsx)(M.x,{variant:"text-sm/normal",color:"header-secondary",children:k.Z.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_SUBTITLE}),(0,t.jsx)(h.Co,{className:ge().resendButton,size:h.Co.Sizes.NONE,look:h.Co.Looks.LINK,onClick:function(){return l.Z.verifyResend()},children:k.Z.Messages.MEMBER_VERIFICATION_EMAIL_RESEND})]})},Je=function(e){var r,n=e.guildId,o=e.formState,i=e.updateFormState,s=e.isPreview,l=void 0!==s&&s,u=(0,a.e7)([x.Z],(function(){return x.Z.get(n)}));if(null==u)return null;var c=null!==(r=null!=o?o:null==u?void 0:u.formFields)&&void 0!==r?r:[],d=l?ve:ye;return(0,t.jsx)(d,{guildId:n,formFields:c,updateFormFields:i})},Xe=function(){return n.e(61029).then(n.t.bind(n,640002,19)).then((function(e){return e.default}))},Qe=function(e){var r=e.headerId,n=e.guildId,o=e.formState,i=e.updateFormState,a=e.useReducedMotion,l=e.isPreview,u=void 0!==l&&l;return(0,t.jsxs)("div",{
className:ge().content,children:[(0,t.jsxs)("div",{className:ge().animationAndSparklesContainer,children:[(0,t.jsx)("img",{alt:k.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,src:Se(),className:s()(ge().sparkleIcon,ge().sparkleBottom)}),(0,t.jsx)(y.Z,{importData:Xe,shouldAnimate:!a,className:ge().animation}),(0,t.jsx)("img",{alt:k.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,src:Re(),className:s()(ge().sparkleIcon,ge().sparkleTop)})]}),(0,t.jsx)(v.X,{id:r,variant:"heading-xl/semibold",className:ge().header,children:k.Z.Messages.MEMBER_VERIFICATION_MODAL_TITLE}),(0,t.jsx)(M.x,{variant:"text-sm/normal",color:"header-secondary",className:ge().subheader,children:k.Z.Messages.MEMBER_VERIFICATION_MODAL_SUBTITLE}),(0,t.jsx)("hr",{className:ge().divider}),(0,t.jsx)(Je,{guildId:n,formState:o,updateFormState:i,isPreview:u})]})};const We=function(e){var r,n=e.headerId,i=e.guildId,l=e.onClose,y=e.onComplete,A=e.inviteCode,N=e.isPreview,U=void 0!==N&&N,V=(0,P.rb)((function(e){
return e.hasUnsubmittedChanges})),D=(0,a.e7)([m.Z],(function(){return m.Z.getGuild(i)})),B=(0,a.e7)([x.Z],(function(){return x.Z.get(i)})),G=(0,a.e7)([O.default],(function(){return O.default.getCurrentUser()})),H=!(null==G?void 0:G.isClaimed()),z=null==G?void 0:G.verified,Y=null==G?void 0:G.isPhoneVerified(),J=(0,a.e7)([I.Z],(function(){return I.Z.getGuildEmoji(i)})),X=(0,a.cj)([p.Z],(function(){return{storeMemberCount:p.Z.getMemberCount(i),storeOnlineCount:p.Z.getOnlineCount(i)}})),Q=X.storeMemberCount,W=X.storeOnlineCount,q=De(o.useState(null!==(r=null==B?void 0:B.formFields)&&void 0!==r?r:[]),2),K=q[0],$=q[1],ee=De(o.useState(!1),2),re=ee[0],ne=ee[1],te=De(o.useState(null),2),oe=te[0],ie=te[1],se=De(o.useState(H?Ge.CLAIM_ACCOUNT:Ge.VERIFICATION_FORM),2),ae=se[0],le=se[1],ue=De(o.useState(""),2),ce=ue[0],de=ue[1],fe=De(o.useState(""),2),Ie=fe[0],pe=fe[1],Ee=De(o.useState(null),2),me=Ee[0],Oe=Ee[1],he=De(o.useState(null),2),_e=he[0],be=he[1],ve=(0,
F.e)(i),ye=null==B?void 0:B.guild,Ae=o.useMemo((function(){return null!=D?D:null!=ye?new f.Z(ye):null}),[D,ye]),Ne=o.useMemo((function(){var e,r=ke(null!==(e=0===J.length?null==ye?void 0:ye.emojis:J)&&void 0!==e?e:[]).reverse(),n=0,t=r.length;if(t>12&&null!=r){r=r.slice(0,11);n=Math.min(t-r.length,99)}return{emojisToRender:r,remainingEmojis:n,numGuildEmoji:t}}),[ye,J]),Ce=Ne.emojisToRender,Te=Ne.remainingEmojis,Re=Ne.numGuildEmoji,je=null!=Q?Q:null==ye?void 0:ye.approximate_member_count,Se=null!=W?W:null==ye?void 0:ye.approximate_presence_count;o.useEffect((function(){(0,P.a5)(!1);return function(){(0,P.a5)(!1)}}),[]);o.useEffect((function(){S.Z.fetchVerificationForm(i,A)}),[i,A]);o.useEffect((function(){null!=B&&$(B.formFields)}),[B]);o.useEffect((function(){null!=G&&G.isClaimed()&&le(Ge.VERIFICATION_FORM)}),[G]);o.useEffect((function(){ae===Ge.EMAIL_CONFIRMATION&&z&&le(Ge.VERIFICATION_FORM)}),[ae,z]);o.useEffect((function(){null!=i&&R.default.track(L.rMx.OPEN_MODAL,{type:Me.N4,
guild_id:i})}),[i]);o.useEffect((function(){var e=K.some((function(e){return e.field_type!==w.QJ.TERMS&&(0,Z.OA)(e)}));e&&!V?(0,P.a5)(!0):!e&&V&&(0,P.a5)(!1)}),[K,V]);var xe=o.useMemo((function(){return!(((null==Ae?void 0:Ae.verificationLevel)!==L.sFg.VERY_HIGH||(null==G?void 0:G.isStaff()))&&z||Y)||K.some((function(e){return!(0,Z.OA)(e)}))}),[K,Ae,Y,z,G]),Fe=(0,a.e7)([c.Z],(function(){return c.Z.useReducedMotion}));if(null==Ae)return null;var we,Ze=(we=Pe((function(){var e,r,n;return He(this,(function(t){switch(t.label){case 0:ne(!0);Oe(null);be(null);t.label=1;case 1:t.trys.push([1,3,4,5]);return[4,(0,u.S2)({email:ce,password:Ie})];case 2:t.sent();ne(!1);le(Ge.EMAIL_CONFIRMATION);return[3,5];case 3:e=t.sent();Oe(null==e||null===(r=e.body)||void 0===r?void 0:r.email);be(null==e||null===(n=e.body)||void 0===n?void 0:n.password);return[3,5];case 4:ne(!1);return[7];case 5:return[2]}}))})),function(){return we.apply(this,arguments)}),Be=function(){var e=Pe((function(){var e,r,n,t,o
;return He(this,(function(s){switch(s.label){case 0:ne(!0);ie(null);if(null!=(e=null!=G?E.ZP.getMember(i,G.id):null)&&!e.isPending){null==l||l(!0);return[2]}s.label=1;case 1:s.trys.push([1,3,,4]);return[4,null==y?void 0:y(Ve(Ue({},null!=B?B:x.t),{formFields:K}))];case 2:s.sent();null==l||l(!0);return[3,4];case 3:r=s.sent();null!=(null==(o=null==r?void 0:r.body)||null===(n=o.errors)||void 0===n?void 0:n.version)||null!=(null==o||null===(t=o.errors)||void 0===t?void 0:t.form_fields)?ie(k.Z.Messages.MEMBER_VERIFICATION_VERSION_MISMATCH_ERROR):ie(null==o?void 0:o.message);ne(!1);return[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(_.Z,{direction:_.Z.Direction.VERTICAL,justify:_.Z.Justify.BETWEEN,className:ge().guildSidebar,shrink:0,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(b.Z,{guild:Ae,active:!0,className:s()(ge().guildIcon,Le({},ge().guildIconNoIcon,null==Ae.icon))}),(0,t.jsx)(v.X,{
variant:"heading-lg/semibold",className:ge().guildName,children:null==Ae?void 0:Ae.name}),(0,t.jsx)(M.x,{className:ge().guildDescription,variant:"text-sm/normal",color:"header-secondary",children:null==B?void 0:B.description}),null!=Ce&&Ce.length>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("hr",{className:ge().divider}),(0,t.jsx)(C.Z,{children:k.Z.Messages.MEMBER_VERIFICATION_NUM_EMOJIS.format({emojis:Re})}),(0,t.jsxs)("div",{className:ge().emojisContainer,children:[Ce.map((function(e){var r=j.ZP.getEmojiURL({id:e.id,animated:!1,size:24});return(0,t.jsx)(g.ZP,{text:":".concat(e.name,":"),children:function(e){return(0,t.jsx)("img",Ve(Ue({},e),{width:24,height:24,src:r,className:ge().emoji,alt:""}))}},e.id)})),null!=Te&&Te>0?(0,t.jsx)(v.X,{variant:"heading-deprecated-12/semibold",className:ge().emoji,color:"header-secondary",children:"+".concat(Te)}):null]})]}):null]}),(0,t.jsxs)("div",{children:[null!=Se&&(0,t.jsxs)(_.Z,{align:_.Z.Align.CENTER,className:ge().onlineCount,children:[(0,
t.jsx)("div",{className:ge().dotOnline}),(0,t.jsx)(M.x,{variant:"text-sm/normal",children:k.Z.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({membersOnline:Se})})]}),null!=je&&(0,t.jsxs)(_.Z,{align:_.Z.Align.CENTER,children:[(0,t.jsx)("div",{className:ge().dotMembers}),(0,t.jsx)(M.x,{variant:"text-sm/normal",children:k.Z.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({members:je})})]})]})]}),(0,t.jsxs)("div",{className:ge().modal,children:[(0,t.jsx)(T.hz,{className:ge().modalContent,children:(0,t.jsx)(d.Z,{className:s()(ge().sequencer,Le({},ge().centerContent,ae!==Ge.VERIFICATION_FORM)),steps:[Ge.CLAIM_ACCOUNT,Ge.EMAIL_CONFIRMATION,Ge.VERIFICATION_FORM],step:ae,children:function(){switch(ae){case Ge.CLAIM_ACCOUNT:return(0,t.jsx)(ze,{headerId:n,email:ce,password:Ie,setEmail:de,setPassword:pe,emailError:me,passwordError:_e});case Ge.EMAIL_CONFIRMATION:return(0,t.jsx)(Ye,{headerId:n,email:ce});case Ge.VERIFICATION_FORM:return(0,t.jsx)(Qe,{headerId:n,guildId:i,formState:K,
updateFormState:$,isPreview:U,useReducedMotion:Fe})}}()})}),function(){switch(ae){case Ge.CLAIM_ACCOUNT:return(0,t.jsxs)(T.mz,{className:ge().footer,children:[(0,t.jsx)(h.Co,{className:ge().submitButton,type:"submit",submitting:re,onClick:Ze,disabled:0===ce.length||0===Ie.length,children:k.Z.Messages.NEXT}),(0,t.jsx)(M.x,{variant:"text-xs/normal",color:"header-secondary",children:k.Z.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_INFO})]});case Ge.EMAIL_CONFIRMATION:return null;case Ge.VERIFICATION_FORM:return(0,t.jsxs)(T.mz,{className:ge().footer,children:[(0,t.jsx)(h.Co,{className:ge().submitButton,type:"submit",submitting:re,onClick:Be,color:h.Co.Colors.GREEN,disabled:null==y||xe,children:k.Z.Messages.SUBMIT}),null!=oe&&(0,t.jsx)(M.x,{variant:"text-xs/normal",color:"text-danger",children:oe}),null==oe&&ve&&(0,t.jsx)(M.x,{color:"header-secondary",variant:"text-xs/normal",children:k.Z.Messages.MEMBER_VERIFICATION_WARNING})]})}}()]})]})}}}]);
//# sourceMappingURL=5da259d19cd4ff4c1de8.js.map