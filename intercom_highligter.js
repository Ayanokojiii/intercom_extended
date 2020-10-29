// ==UserScript==
// @name         Highlight Intercom ULTIMATE
// @namespace    Pontica solutions
// @version      0.1
// @description  See the world in color — Allows you to distinguish the the on going chats
// @downloadURL  https://rawcdn.githack.com/Ayanokojiii/intercom_extended/7163e3f0ee94491599e3ab1903713f1355709b3b/intercom_highligter.js
// @updateURL    https://rawcdn.githack.com/Ayanokojiii/intercom_extended/7163e3f0ee94491599e3ab1903713f1355709b3b/intercom_highligter.js
// @author       Florian Chague
// @icon         https://ibb.co/6Hckhy0
// @match        https://app.intercom.com/a/apps/*
// @resource      IMPORTED_CSS https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery.address/1.6/jquery.address.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.js
// @grant      GM_getResourceText
// @grant      GM_addStyle
// @noframes
// ==/UserScript==

!function(){"use strict";window.location;function e(t,o){var i,a;$(".submenu__header").length&&$(t).length>0?(o(),i={cursor:"pointer","background-color":"rgba(224, 245,220,0.8)"},a={cursor:"auto","background-color":"rgba(255, 255,255,0.8)"},$(".submenu__header").append('<div class="trashbean">    <img id="tbicon" src="https://www.iconfinder.com/data/icons/miscellaneous-71/46/trash_bean_trashbean_garbage-512.png"/>    <img id="tbvalidate" src="https://img.pngio.com/checkmark-icons-free-download-png-and-svg-check-icon-png-256_256.png"/>  </div>'),$(".trashbean").css({"z-index":"9",width:"30px",height:"30px","background-color":"rgba(255,255,255,0.8)",border:"3px solid #fff","border-radius":"50%",display:"flex","justify-content":"center","align-items":"center",transition:"all 0.5s"}),$(".trashbean").hover(()=>{$(".trashbean").css(i)}),$(".trashbean").mouseout(()=>{$(".trashbean").css(a)}),$(".trashbean img").css({width:"30px"}),$(".trashbean img").hover(()=>{$(".trashbean").css({cursor:"pointer"})}),$("#tbvalidate").css({position:"absolute",width:"40px",display:"none"}),$(".trashbean").click(()=>{localStorage.removeItem("onGoingChats"),$("#tbicon").fadeOut(500).promise().done(function(){$("#tbicon").fadeIn(500)}),$("#tbvalidate").fadeIn(500).promise().done(function(){$("#tbvalidate").fadeOut(500)})}),function(){const e=GM_getResourceText("IMPORTED_CSS");GM_addStyle(e),$(".submenu__header").append("<input id='colorpicker' />"),$("#colorpicker").spectrum({preferredFormat:"hex",color:localStorage.getItem("bgColor"),togglePaletteOnly:!0,change:function(e){localStorage.setItem("bgColor",e),c()}}),$(".sp-replacer.sp-light").css({position:"relative",top:"0px",border:"none"})}()):setTimeout(function(){e(".nav__link__text__inbox-name",n)},2e3)}null==localStorage.getItem("onGoingChats")&&localStorage.setItem("onGoingChats","1"),null==localStorage.getItem("bgColor")&&localStorage.setItem("bgColor","#dfecc9");setTimeout(function(){e(".nav__link__text__inbox-name",n)},2e3);function n(){!function(e){var n=[];t(),e.each((e,o)=>{var i="https://app.intercom.com/"+$(o).attr("href"),a=i.match(/inbox\/inbox\/(\d{7}|view:486)/),c=$(o).find("span.nav__link__text__inbox-name").text().trim(),r=t();n.push({channelName:c,channelLink:i,channelId:a}),localStorage.setItem("intercom",JSON.stringify({channelName:c,channelLink:i,channelId:a,userId:r}))})}($("div.submenu__sections__section__items__inner > div > div > div > span div.nav-vertical__link div[data-popover-opener] div a:not(.c__deemphasized-text)")),t()}function t(){return(""+$("a.nav__link__inbox-link")[0]).match(/(\d{7})/)[0]}function o(){return window.location.href.match(/conversations\/(\d+)/)[1]}function i(){var e=$("div.submenu__sections__section__items__inner > div > div > div > span div.nav-vertical__link div[data-popover-opener] div a:not(.c__deemphasized-text)"),n=!1;return $(e).each((e,t)=>{window.location.href.includes(t)&&(n=!0)}),n}function a(){var e;i()&&(e=!1,$(".ember-view.conversation__stream .o__for-admin a").each((n,o)=>{o.href.match(/admins\/(\d+)/)[1]==t()&&(e=!0)}),e)&&function(e){var n=localStorage.getItem("onGoingChats"),t=localStorage.getItem("onGoingChats").split(",");t.includes(e)||(t.push(e),n=t.join(",")),localStorage.setItem("onGoingChats",n)}(o())}function c(){var e=$(".inbox__conversation-list-item a"),n=localStorage.getItem("onGoingChats").split(",");e.each((e,t)=>{n.includes($(t).attr("href").match(/conversations\/(\d+)/)[1])&&$(t).css({"background-color":localStorage.getItem("bgColor")})})}var r=[],s=100;$(document).on("hashchange, click",function(e){function n(){null!=document&&$(".inbox__conversation-list-item a").length>0?(clearTimeout(t),a(),c()):t()}var t=setTimeout(function(){n()},2e3)}),$(document).ready(function(e){function n(){if(null!=document&&$(".inbox__conversation-list-item a").length>0)a(),c();else{var e=setTimeout(function(){n()},s);clearTimeout(e)}}var t=setTimeout(function(){n()},s);clearTimeout(t)}),$(document).keydown(function(e){function n(){if(null!=document&&$(".inbox__conversation-list-item a").length>0)a(),c();else{var e=setTimeout(function(){n()},s);clearTimeout(e)}}if(r.push(e.keyWhich),r.length>2&&(1==r.includes(17)||r.includes(91))){var t=setTimeout(function(){n()},s);clearTimeout(t)}}),$(document).keyup(function(){key=[]})}();
