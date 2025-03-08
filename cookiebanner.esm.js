/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/cookies-eu-banner@2.0.1/dist/cookies-eu-banner.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var e,t,o={exports:{}};
/**
 * Cookies EU banner v2.0.1 - Manage display of banner to accept/reject cookies from tracking services like Google Analytics
 * ------------------------
 * @link http://alex-d.github.io/Cookies-EU-banner/
 * @license MIT
 * @author Alex-D
 *         Twitter : @AlexandreDemode
 *         Website : alex-d.fr
 */window;var i=o.exports=(t=window.document,(e=function(t,o,i,n){if(!(this instanceof e))return new e(t);this.cookieTimeout=33696e6,this.bots=/bot|crawler|spider|crawling/i,this.cookieName="hasConsent",this.trackingCookiesNames=["__utma","__utmb","__utmc","__utmt","__utmv","__utmz","_ga","_gat","_gid"],this.launchFunction=t,this.waitAccept=o||!1,this.useLocalStorage=i||!1,this.init()}).prototype={init:function(){var e=this.bots.test(navigator.userAgent),t=navigator.doNotTrack||navigator.msDoNotTrack||window.doNotTrack;return e||!(null==t||t&&"yes"!==t&&1!==t&&"1"!==t)||!1===this.hasConsent()?(this.removeBanner(0),!1):!0===this.hasConsent()?(this.launchFunction(),!0):(this.showBanner(),void(this.waitAccept||this.setConsent(!0)))},showBanner:function(){var e=this,o=t.getElementById.bind(t),i=o("cookies-eu-banner"),n=o("cookies-eu-reject"),a=o("cookies-eu-accept"),s=o("cookies-eu-more"),c=void 0===i.dataset.waitRemove?0:parseInt(i.dataset.waitRemove),r=this.addClickListener,u=e.removeBanner.bind(e,c);i.style.display="block",s&&r(s,(function(){e.deleteCookie(e.cookieName)})),a&&r(a,(function(){u(),e.setConsent(!0),e.launchFunction()})),n&&r(n,(function(){u(),e.setConsent(!1),e.trackingCookiesNames.map(e.deleteCookie)}))},setConsent:function(e){if(this.useLocalStorage)return localStorage.setItem(this.cookieName,e);this.setCookie(this.cookieName,e)},hasConsent:function(){var e=this.cookieName,o=function(o){return t.cookie.indexOf(e+"="+o)>-1||localStorage.getItem(e)===o};return!!o("true")||!o("false")&&null},setCookie:function(e,o){var i=new Date;i.setTime(i.getTime()+this.cookieTimeout),t.cookie=e+"="+o+";expires="+i.toGMTString()+";path=/"},deleteCookie:function(e){var o=t.location.hostname.replace(/^www\./,""),i="; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/";t.cookie=e+"=; domain=."+o+i,t.cookie=e+"="+i},addClickListener:function(e,t){if(e.attachEvent)return e.attachEvent("onclick",t);e.addEventListener("click",t)},removeBanner:function(e){setTimeout((function(){var e=t.getElementById("cookies-eu-banner");e&&e.parentNode&&e.parentNode.removeChild(e)}),e)}},e);export{i as default};
//# sourceMappingURL=/sm/4e210fa5fa54cc0c19111b7f5b84260e6e580d992be7d86dd53aa2d44bd8ca11.map