"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[56345],{579220:(e,t,n)=>{n.d(t,{jN:()=>o,xf:()=>i,Ou:()=>l});var r=n(173436);function o(e){r.Z.dispatch({type:"LAYER_PUSH",component:e})}function i(){r.Z.dispatch({type:"LAYER_POP"})}function l(){r.Z.dispatch({type:"LAYER_POP_ALL"})}},956345:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(675860),o=n(444450),i=n(173436),l=n(381807),c=n(932847),u=n(917870),s=n(283273),a=n(742269),f=n(579220),p=n(461061),d=n(959797);function y(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){y(e,t,n[t])}))}return e}function b(e,t){t=null!=t?t:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}const h={open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{openWithoutBackstack:!1};i.Z.dispatch(O({type:"USER_SETTINGS_MODAL_OPEN",section:e,subsection:t},n));(0,f.jN)(p.S9g.USER_SETTINGS)},init:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0;i.Z.dispatch(O({type:"USER_SETTINGS_MODAL_INIT",section:e,subsection:t},n))},close:function(){
var e=l.Z.onClose;i.Z.dispatch({type:"USER_SETTINGS_MODAL_CLOSE"});null!=e&&e()},setSection:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};i.Z.dispatch(O({type:"USER_SETTINGS_MODAL_SET_SECTION",section:e,subsection:t},n))},clearSubsection:function(e){i.Z.dispatch({type:"USER_SETTINGS_MODAL_CLEAR_SUBSECTION",forSection:e})},clearScrollPosition:function(e){i.Z.dispatch({type:"USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",forSection:e})},updateAccount:function(e){i.Z.dispatch({type:"USER_SETTINGS_MODAL_UPDATE_ACCOUNT",settings:e})},submitComplete:function(){i.Z.dispatch({type:"USER_SETTINGS_MODAL_SUBMIT_COMPLETE"})},reset:function(){i.Z.dispatch({type:"USER_SETTINGS_MODAL_RESET"})},saveAccountChanges:function(e,t){var n=this;i.Z.dispatch({type:"USER_SETTINGS_MODAL_SUBMIT"});var l=e.username,f=e.email,y=e.emailToken,h=e.password,S=e.avatar,v=e.newPassword,m=e.discriminator,_=t.close;return(0,
s.Z)((function(e){var t=b(O({username:l,email:f,email_token:y,password:h,avatar:S,new_password:v},e),{discriminator:null!=m&&""!==m?m:void 0}),n=o.Z.get(p.JkL),i=(0,a.xJ)();if(null!=i&&null!=n){t.push_provider=i;t.push_token=n}var c=o.Z.get(p.scU);if(null!=p.mvA&&null!=c){t.push_voip_provider=p.mvA;t.push_voip_token=c}return r.Z.patch({url:p.ANM.ME,body:t,oldFormErrors:!0})}),{checkEnabled:!1,modalProps:{title:d.Z.Messages.TWO_FA_CHANGE_ACCOUNT},hooks:{onEarlyClose:function(){return i.Z.dispatch({type:"USER_SETTINGS_MODAL_SUBMIT_FAILURE",errors:{}})}}}).then((function(e){var t=e.body,r=t.token;c.default.track(p.rMx.USER_AVATAR_UPDATED,{animated:(0,u.xR)(t.avatar)});delete t.token;i.Z.dispatch({type:"UPDATE_TOKEN",token:r,userId:t.id});i.Z.dispatch({type:"CURRENT_USER_UPDATE",user:t});null!=v&&i.Z.dispatch({type:"USER_PASSWORD_UPDATE",user:t,newPassword:v});null!=h&&null!=v&&i.Z.dispatch({type:"PASSWORD_UPDATED",userId:t.id});_?n.close():n.submitComplete();return e}),(function(e){
i.Z.dispatch({type:"USER_SETTINGS_MODAL_SUBMIT_FAILURE",errors:e.body});return e}))}}},48509:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(785893),o=n(667294),i=n(294184),l=n.n(i),c=n(892472),u=n(191940),s=n(624387),a=n(629590),f=n(48843),p=n(685351),d=n(801593),y=n(983319),O=n(67416),b=n(959797),h=n(949095),S=n.n(h);function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e){m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return m(e)}function _(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e,t){g=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return g(e,t)}var E=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function P(e){var t=function(){
if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&g(e,t)}(n,e);var t=P(n);function n(){v(this,n);var e;(e=t.apply(this,arguments)).state={code:"",errorMessage:"",retrySuccess:!1};e.setRef=function(t){e._input=t};e.getLabelText=function(){var t;return null!==(t=e.props.label)&&void 0!==t?t:e.props.disallowBackupCodes?b.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL:b.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL}
;e.getSupportedCodeTypes=function(){return e.props.disallowBackupCodes?b.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP:b.Z.Messages.TWO_FA_AUTH_CODE};e.getPlaceholder=function(){return e.props.forceNoPlaceholder?null:null!==(t=e.props.placeholder)&&void 0!==t?t:e.getSupportedCodeTypes();var t};e.errorPresent=function(){return null!=e.props.error&&""!==e.props.error||null!=e.state.errorMessage&&""!==e.state.errorMessage};e.handleRetry=function(){var t=e.props.onRetry;null==t||t().then((function(){return e.setState({retrySuccess:!0})}))};e.handleSubmit=function(t){t.preventDefault();var n=e.props,r=n.handleSubmit,o=n.onError;r(e.state.code).catch((function(t){if(null!=t.body){null==o||o(t.body);t.body.message&&e.setState({errorMessage:t.body.message})}}))};e.handleCancel=function(){var t=e.props,n=t.onClose,r=t.handleEarlyClose;n();null==r||r()};e.handleCodeChange=function(t){e.setState({code:t})};return e}n.prototype.render=function(){
var e,t=this.props,n=t.title,i=t.actionText,h=t.children,v=t.error,m=t.isLoading,_=t.maxLength,g=t.transitionState,E=t.helpMessage,P=t.retryPrompt,j=t.retrySuccessMessage,T=this.state,w=T.code,C=T.errorMessage,A=T.retrySuccess,N=o.Children.count(h)>0?(0,r.jsx)(s.Z,{type:s.Z.Types.WARNING,className:S().card,children:(0,r.jsx)(p.x,{variant:"text-md/normal",children:h})}):null,R=null!=P?(0,r.jsxs)(p.x,{className:l()(S().submitText,S().spacing),variant:"text-sm/normal",children:[(0,r.jsx)("br",{}),(0,r.jsx)(a.Z,{className:l()(S().spacing,S().link),onClick:this.handleRetry,children:(0,r.jsx)(c.Z,{children:P})})]}):null,I=A?(0,r.jsx)(s.Z,{type:s.Z.Types.SUCCESS,className:S().card,children:(0,r.jsx)(p.x,{variant:"text-md/normal",children:j})}):null;return(0,r.jsx)(O.Y0,{transitionState:g,children:(0,r.jsxs)("form",{onSubmit:this.handleSubmit,children:[(0,r.jsx)(O.xB,{separator:!1,children:(0,r.jsx)(f.X,{variant:"heading-lg/semibold",children:n})}),(0,r.jsxs)(O.hz,{children:[null!=E?(0,
r.jsx)(p.x,{color:"text-normal",variant:"text-md/normal",className:S().spacing,children:E}):null,N,I,(0,r.jsxs)(y.Z,{title:this.getLabelText(),className:S().spacing,children:[(0,r.jsx)(d.ZP,{inputRef:this.setRef,onChange:this.handleCodeChange,placeholder:null!==(e=this.getPlaceholder())&&void 0!==e?e:void 0,maxLength:null!=_?_:10,value:w,autoComplete:"one-time-code",autoFocus:!0}),this.errorPresent()?(0,r.jsx)(p.x,{color:"text-danger",variant:"text-xs/normal",className:S().error,children:null!=v?v:C}):null,R]})]}),(0,r.jsxs)(O.mz,{children:[(0,r.jsx)(u.Co,{type:"submit",disabled:m,children:null!=i?i:b.Z.Messages.CONFIRM}),(0,r.jsx)(u.Co,{onClick:this.handleCancel,disabled:m,look:u.Co.Looks.LINK,color:u.Co.Colors.PRIMARY,children:b.Z.Messages.CANCEL})]})]})})};return n}(o.PureComponent);j.defaultProps={btnClass:"",isLoading:!1,disallowBackupCodes:!1,error:null,forceNoPlaceholder:!1};const T=j},381807:(e,t,n)=>{n.d(t,{Z:()=>Z})
;var r=n(496486),o=n.n(r),i=n(791462),l=n(173436),c=n(859023),u=n(461061);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function f(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function p(e){p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return p(e)}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){f(e,t,n[t])}))}return e}function y(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e,t){O=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return O(e,t)}var b=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}var S=u.QZA.CLOSED,v=null,m=null,_={},g={},E={},P=null,j=null,T=!1,w=!1,C=null,A=null,N=null,R=[],I=null,U=null;function L(e){var t,n,r,o,i,l,s=c.default.getCurrentUser();if(null==s)return M();m=null!==(t=e.section)&&void 0!==t?t:m;I=null!==(n=e.section)&&void 0!==n?n:m
;null!=e.subsection&&null!=m&&(_[m]=e.subsection);null!=e.scrollPosition&&null!=m&&(g[m]=e.scrollPosition);w=!!e.openWithoutBackstack;S=u.QZA.OPEN;E={};P=f({},u.oAB.ACCOUNT,{userId:s.id,username:s.username,discriminator:s.discriminator,email:s.email,avatar:s.avatar,password:"",newPassword:null,claimed:s.isClaimed()});j=d({},P);A=null!==(r=e.onClose)&&void 0!==r?r:null;N=null!==(o=e.analyticsLocation)&&void 0!==o?o:null;R=null!==(i=e.analyticsLocations)&&void 0!==i?i:[];U=null!==(l=e.impressionSource)&&void 0!==l?l:null}function M(){S=u.QZA.CLOSED;T=!1;P=null;I=null;j=null;v=null;m=null;_={};g={};A=null;N=null;R=[];U=null}function D(){S=u.QZA.OPEN;E={}}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&O(e,t)}(n,e);var t=h(n);function n(){s(this,n);return t.apply(this,arguments)}var r=n.prototype
;r.initialize=function(){this.waitFor(c.default)};r.hasChanges=function(){return null!=j&&null!=P&&(!(!this.isOpen()&&C!==u.cII.USER_SETTINGS)&&!o().isEqual(j,P))};r.isOpen=function(){return T};r.getPreviousSection=function(){return v};r.getSection=function(){return m};r.getSubsection=function(){return null!=m?_[m]:null};r.getScrollPosition=function(){return null!=m?g[m]:null};r.shouldOpenWithoutBackstack=function(){return w};r.getProps=function(){return{submitting:S===u.QZA.SUBMITTING,section:m,subsection:null!=m?_[m]:null,scrollPosition:null!=m?g[m]:null,settings:j,errors:E,hasChanges:this.hasChanges(),openWithoutBackstack:w,analyticsLocation:N,analyticsLocations:R,initialSection:I,impressionSource:U}};r.__getLocalVars=function(){return{formState:S,previousSection:v,section:m,subsections:_,scrollPositions:g,errors:E,originalSettings:P,settings:j,open:T,openWithoutBackstack:w,tab:C,onClose:A,analyticsLocation:N,analyticsLocations:R,initialSection:I,impressionSource:U}}
;!function(e,t,n){t&&a(e.prototype,t);n&&a(e,n)}(n,[{key:"onClose",get:function(){return A}}]);return n}(i.ZP.Store);x.displayName="UserSettingsModalStore";const Z=new x(l.Z,{USER_SETTINGS_MODAL_OPEN:function(e){T=!0;L(e)},USER_SETTINGS_MODAL_INIT:L,USER_SETTINGS_MODAL_CLOSE:M,LOGOUT:M,USER_SETTINGS_MODAL_SUBMIT:function(){S=u.QZA.SUBMITTING},USER_SETTINGS_MODAL_SUBMIT_FAILURE:function(e){if(S!==u.QZA.SUBMITTING)return!1;S=u.QZA.OPEN;m=u.oAB.ACCOUNT;var t;E=null!==(t=e.errors)&&void 0!==t?t:{}},USER_SETTINGS_MODAL_SET_SECTION:function(e){v=m;m=e.section;N=null;var t;R=null!==(t=e.analyticsLocations)&&void 0!==t?t:[];null!=e.subsection&&(_[m]=e.subsection)},USER_SETTINGS_MODAL_CLEAR_SUBSECTION:function(e){var t=e.forSection;null!=t?delete _[t]:null!=m&&delete _[m]},USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION:function(e){var t=e.forSection;null!=t?delete g[t]:null!=m&&delete g[m]},USER_SETTINGS_MODAL_UPDATE_ACCOUNT:function(e){var t=e.settings;null==j&&(j={});var n=j[u.oAB.ACCOUNT]
;j[u.oAB.ACCOUNT]=d({},n,t)},USER_SETTINGS_MODAL_SUBMIT_COMPLETE:D,USER_SETTINGS_MODAL_RESET:function(){var e=c.default.getCurrentUser();D();if(null!=e){P=f({},u.oAB.ACCOUNT,{userId:e.id,username:e.username,discriminator:e.discriminator,email:e.email,avatar:e.avatar,password:"",newPassword:null,claimed:e.isClaimed()});j=d({},P)}},DRAWER_SELECT_TAB:function(e){C=e.tab;return null==m&&C===u.cII.USER_SETTINGS&&L({type:"USER_SETTINGS_MODAL_INIT",section:null,subsection:null,scrollPosition:null,openWithoutBackstack:!1})}})},624387:(e,t,n)=>{n.d(t,{Y:()=>v,Z:()=>_});var r=n(785893),o=n(667294),i=n(294184),l=n.n(i),c=n(511716),u=n(66636),s=n.n(u);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function p(e){p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return p(e)}
function d(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function O(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e,t){b=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return b(e,t)}var h=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}var v={PRIMARY:"cardPrimary",DANGER:"cardDanger",WARNING:"cardWarning",SUCCESS:"cardSuccess",BRAND:"cardBrand",CUSTOM:"card"},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
;e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&b(e,t)}(n,e);var t=S(n);function n(){a(this,n);return t.apply(this,arguments)}n.prototype.render=function(){var e,t=this.props,n=t.children,o=t.editable,i=t.type,u=t.className,a=t.outline,p=y(t,["children","editable","type","className","outline"]);a?e="outline":i===v.PRIMARY&&o&&(e="editable");return(0,r.jsx)("div",d(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){f(e,t,n[t])}))}return e}({className:l()(u,(0,c.l)(s(),i,e))},p),{children:n}))};return n}(o.PureComponent);m.Types=v;m.defaultProps={type:v.PRIMARY,outline:!1,editable:!1};const _=m},983319:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(785893),o=n(667294),i=n(272729),l=n(881186),c=n(962271)
;function u(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){u(e,t,n[t])}))}return e}function a(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{}
;var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}const p=o.forwardRef((function(e,t){var n,o=e.children,u=e.disabled,p=void 0!==u&&u,d=e.className,y=e.titleClassName,O=e.tag,b=void 0===O?"h5":O,h=e.required,S=void 0!==h&&h,v=e.style,m=e.title,_=e.error,g=f(e,["children","disabled","className","titleClassName","tag","required","style","title","error"]),E=(0,i.Dt)(),P=null!==(n=g.titleId)&&void 0!==n?n:E;return(0,r.jsxs)("div",{ref:t,className:null!=d?d:void 0,style:null!=v?v:void 0,children:[null!=m||null!=_?(0,r.jsx)(c.Z,a(s({tag:b,disabled:p,required:S,error:_,className:y,id:P},g),{children:m})):null,(0,r.jsx)(l.ol,{titleId:P,children:o})]})}))},283273:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(859023),o=n(496486),i=function(e){
return"function"==typeof e?e():e};n.n(o)().curry((function(e,t,n){return i(t)?e(n):n({})}));function l(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){l(e,t,n[t])}))}return e}function u(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}
function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}var a,f,p=function(){throw new Error("updateModal has not been implemented.")},d=n(988518);a=d.showModal;p=d.updateModalProps;f=n(897576).Mr;function y(e){var t=e.promiseFn,n=e.resolve,r=e.reject,o=e.modalProps,i=void 0===o?{}:o,l=e.hooks,s=(void 0===l?{}:l).onEarlyClose,d=function(){null==s||s()},y=function(e){f(S);n(e)},b=function(e){f(S);r(e)},h=function(e){var t=e.res;p(S,v,d,u(c({},i),{error:t.body.message}))};if(null!=a)var S=a(v,d,i);else null==s||s();function v(e){p(S,v,d,u(c({},i),{isLoading:!0}));return O({promiseFn:t,resolve:y,reject:b,code:e,mfaCodeHandler:h,isModalOpen:!0})}}function O(e){
var t=e.promiseFn,n=e.resolve,r=e.reject,o=e.code,i=e.mfaCodeHandler,l=void 0===i?y:i,u=e.isModalOpen,a=void 0!==u&&u,f=s(e,["promiseFn","resolve","reject","code","mfaCodeHandler","isModalOpen"]);return t(null!=o?{code:o}:{}).then(n,(function(e){if(function(e,t){return e.body&&60008===e.body.code||t&&429===e.status}(e,a))return l(c({promiseFn:t,resolve:n,reject:r,res:e},f));r(e)}))}function b(e,t){var n,o,l=null!=t?t:{},u=l.checkEnabled,a=void 0===u?null!==(o=null===(n=r.default.getCurrentUser())||void 0===n?void 0:n.mfaEnabled)&&void 0!==o&&o:u,f=s(l,["checkEnabled"]);return new Promise((function(t,n){(i(a)?y:O)(c({promiseFn:e,resolve:t,reject:n},f))}))}},988518:(e,t,n)=>{n.r(t);n.d(t,{showModal:()=>u,updateModalProps:()=>s});var r=n(785893),o=(n(667294),n(48509)),i=n(897576);function l(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}var c=function(e,t,n){return function(i){return(0,r.jsx)(o.Z,function(e){
for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){l(e,t,n[t])}))}return e}({handleSubmit:e,handleEarlyClose:t},n,i))}};function u(e,t,n){return(0,i.h7)(c(e,t,n))}function s(e,t,n,r){return(0,i.o)(e,c(t,n,r))}}}]);
//# sourceMappingURL=61b9df7157da2cb4dfc9.js.map