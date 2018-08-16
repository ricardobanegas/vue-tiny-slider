!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-tiny-slider",[],e):"object"==typeof exports?exports["vue-tiny-slider"]=e():t["vue-tiny-slider"]=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var i=n(1),a={props:{mode:[String],autoInit:{type:[Boolean],default:!0},axis:{type:[String],validator:function(t){return"horizontal"===t||"vertical"===t}},items:{type:[String,Number],default:1},gutter:{type:[String,Number],default:0},edgePadding:{type:[String,Number],default:0},fixedWidth:{type:[String,Boolean,Number],default:!1},swipeAngle:{type:[Boolean,Number],default:15},slideBy:{type:[String,Number],default:1},controls:{type:[String,Boolean],default:!0},controlsText:{type:[Array],default:function(){return["prev","next"]}},controlsContainer:{type:[Boolean,Node,String],default:!1},nav:{type:[Boolean],default:!1},navContainer:{type:[Boolean,Node,String],default:!1},arrowKeys:{type:[Boolean],default:!1},speed:{type:[String,Number],default:300},autoplay:{type:[Boolean],default:!1},autoplayTimeout:{type:[Number],default:5e3},autoplayDirection:{type:[String],default:"forward",validator:function(t){return"forward"===t||"backward"===t}},autoplayText:{type:[Array],default:function(){return["start","stop"]}},autoplayHoverPause:{type:[Boolean],default:!1},autoplayButton:{type:[Boolean,Node,String],default:!1},autoplayButtonOutput:{type:[Boolean],default:!0},autoplayResetOnVisibility:{type:[Boolean],default:!0},animateIn:{type:[String],default:"tns-fadeIn"},animateOut:{type:[String],default:"tns-fadeOut"},animateNormal:{type:[String],default:"tns-normal"},animateDelay:{type:[String,Number,Boolean],default:!1},loop:{type:[Boolean],default:!0},rewind:{type:[Boolean],default:!1},autoHeight:{type:[Boolean],default:!1},responsive:{type:[Boolean,Object],default:!1},lazyload:{type:[Boolean],default:!1},touch:{type:[Boolean],default:!0},mouseDrag:{type:[Boolean],default:!1},nested:{type:[String,Boolean],default:!1,validator:function(t){return"inner"===t||"outer"===t||!1===t}},freezable:{type:[Boolean],default:!0},disable:{type:[Boolean],default:!1},startIndex:{type:[Number],default:0},onInit:{type:[Function,Boolean],default:!1}},mounted:function(){this.autoInit&&this.init()},beforeDestroy:function(){this.slider&&this.slider.destroy()},methods:{goTo:function(t){this.slider.goTo(t)},rebuild:function(){this.slider=this.slider.rebuild()},getInfo:function(){this.$emit("getInfo",this.slider.getInfo(),this.slider)},destroy:function(){this.slider.destroy()},init:function(){var t={container:this.$el,axis:this.axis,items:parseInt(this.items),mode:this.mode,gutter:this.gutter,edgePadding:this.edgePadding,fixedWidth:this.fixedWidth?parseInt(this.fixedWidth,10):this.fixedWidth,slideBy:this.slideBy,controls:this.controls,controlsText:this.controlsText,controlsContainer:this.controlsContainer,nav:this.nav,navContainer:this.navContainer,arrowKeys:this.arrowKeys,speed:this.speed,autoplay:this.autoplay,autoplayTimeout:this.autoplayTimeout,autoplayDirection:this.autoplayDirection,autoplayText:this.autoplayText,autoplayHoverPause:this.autoplayHoverPause,autoplayButton:this.autoplayButton,autoplayButtonOutput:this.autoplayButtonOutput,autoplayResetOnVisibility:this.autoplayResetOnVisibility,animateIn:this.animateIn,animateOut:this.animateOut,animateNormal:this.animateNormal,animateDelay:this.animateDelay,loop:this.loop,rewind:this.rewind,autoHeight:this.autoHeight,responsive:this.responsive,lazyload:this.lazyload,touch:this.touch,mouseDrag:this.mouseDrag,nested:this.nested,freezable:this.freezable,disable:this.disable,onInit:this.onInit,swipeAngle:this.swipeAngle,startIndex:this.startIndex};!function(t){for(var e in t)t.hasOwnProperty(e)&&void 0===t[e]&&delete t[e]}(t),this.slider=(0,i.tns)(t)}},render:function(t){return t("div",this.$slots.default)}};t.exports=a},function(t,e,n){"use strict";n.r(e);var i=window,a=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.msRequestAnimationFrame||function(t){return setTimeout(t,16)},r=window,o=r.cancelAnimationFrame||r.mozCancelAnimationFrame||function(t){clearTimeout(t)};function u(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function s(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function l(t,e,n,i){return i&&t.setItem(e,n),n}function d(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var f=document.documentElement;function c(t){var e="";return t.fake&&(e=f.style.overflow,t.style.background="",t.style.overflow=f.style.overflow="hidden",f.appendChild(t)),e}function p(t,e){t.fake&&(t.remove(),f.style.overflow=e,f.offsetHeight)}function h(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function v(t){return("insertRule"in t?t.cssRules:t.rules).length}function m(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var y="classList"in document.createElement("_"),g=y?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},b=y?function(t,e){g(t,e)||t.classList.add(e)}:function(t,e){g(t,e)||(t.className+=" "+e)},x=y?function(t,e){g(t,e)&&t.classList.remove(e)}:function(t,e){g(t,e)&&(t.className=t.className.replace(e,""))};function w(t,e){return t.hasAttribute(e)}function C(t,e){return t.getAttribute(e)}function T(t){return void 0!==t.item}function A(t,e){if(t=T(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function B(t,e){t=T(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function M(t){w(t,"hidden")||A(t,{hidden:""})}function N(t){w(t,"hidden")&&B(t,"hidden")}function E(t){return t.offsetWidth>0&&t.offsetHeight>0}function O(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach(function(i){"ms"===i&&"transform"!==t||e.push(i+n)}),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function I(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var S=!1;try{var D=Object.defineProperty({},"passive",{get:function(){S=!0}});window.addEventListener("test",null,D)}catch(t){}var P=!!S&&{passive:!0};function k(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&P;t.addEventListener(n,e[n],i)}}function L(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&P;t.removeEventListener(n,e[n],i)}}n.d(e,"tns",function(){return H}),Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var H=function(t){t=u({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},t||{});var e=document,n=window,i={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},r={},f=t.useLocalStorage;if(f){var y=navigator.userAgent,T=new Date;try{(r=n.localStorage)?(r.setItem(T,T),f=r.getItem(T)==T,r.removeItem(T)):f=!1,f||(r={})}catch(t){f=!1}f&&(r.tnsApp&&r.tnsApp!==y&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){r.removeItem(t)}),localStorage.tnsApp=y)}for(var S=r.tC?s(r.tC):l(r,"tC",function(){var t=document,e=d(),n=c(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],s=0;s<3;s++)if(r=u[s],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?p(e,n):i.remove(),a}(),f),D=r.tPL?s(r.tPL):l(r,"tPL",function(){var t,e=document,n=d(),i=c(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?p(n,i):a.remove(),t}(),f),P=r.tMQ?s(r.tMQ):l(r,"tMQ",function(){var t,e=document,n=d(),i=c(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?p(n,i):a.remove(),"absolute"===t}(),f),R=r.tTf?s(r.tTf):l(r,"tTf",O("transform"),f),W=r.t3D?s(r.t3D):l(r,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=d(),a=c(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?p(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(R),f),z=r.tTDu?s(r.tTDu):l(r,"tTDu",O("transitionDuration"),f),j=r.tTDe?s(r.tTDe):l(r,"tTDe",O("transitionDelay"),f),F=r.tADu?s(r.tADu):l(r,"tADu",O("animationDuration"),f),q=r.tADe?s(r.tADe):l(r,"tADe",O("animationDelay"),f),G=r.tTE?s(r.tTE):l(r,"tTE",I(z,"Transition"),f),V=r.tAE?s(r.tAE):l(r,"tAE",I(F,"Animation"),f),U=n.console&&"function"==typeof n.console.warn,_=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],K={},Q=_.length;Q--;){var X=_[Q];if("string"==typeof t[X]){var Y=t[X],$=e.querySelector(Y);if(K[X]=Y,!$||!$.nodeName)return void(U&&console.warn("Can't find",t[X]));t[X]=$}}if(!(t.container.children.length<1)){var J=t.responsive,Z=t.nested,tt="carousel"===t.mode;if(J){0 in J&&(t=u(t,J[0]),delete J[0]);var et={};for(var nt in J){var it=J[nt];it="number"==typeof it?{items:it}:it,et[nt]=it}J=et,et=null}if(tt&&"outer"!==Z||function t(e){for(var n in e)tt||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1)),"outer"===Z&&"autoHeight"===n&&(e[n]=!0),"responsive"===n&&t(e[n])}(t),!tt){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var at=t.animateIn,rt=t.animateOut,ot=t.animateDelay,ut=t.animateNormal}var st,lt,dt="horizontal"===t.axis,ft=e.createElement("div"),ct=e.createElement("div"),pt=t.container,ht=pt.parentNode,vt=pt.outerHTML,mt=pt.children,yt=mt.length,gt=gn();J&&Ln();var bt,xt,wt=t.autoWidth,Ct=wn("fixedWidth"),Tt=wn("edgePadding"),At=wn("gutter"),Bt=bn(),Mt=wt?1:Math.floor(wn("items")),Nt=wn("slideBy"),Et=t.viewportMax||t.fixedWidthViewportWidth,Ot=wn("arrowKeys"),It=wn("speed"),St=t.rewind,Dt=!St&&t.loop,Pt=wn("autoHeight"),kt=wn("controls"),Lt=wn("controlsText"),Ht=wn("nav"),Rt=wn("touch"),Wt=wn("mouseDrag"),zt=wn("autoplay"),jt=wn("autoplayTimeout"),Ft=wn("autoplayText"),qt=wn("autoplayHoverPause"),Gt=wn("autoplayResetOnVisibility"),Vt=function(t){var e=document.createElement("style");return t&&e.setAttribute("media",t),document.querySelector("head").appendChild(e),e.sheet?e.sheet:e.styleSheet}(),Ut=t.lazyload,_t=[],Kt=Dt?function(){var e=function(){if(wt||Ct&&!Et)return yt-1;var e=Ct?"fixedWidth":"items",n=[];if((Ct||t[e]<yt)&&n.push(t[e]),J)for(var i in J){var a=J[i][e];a&&(Ct||a<yt)&&n.push(a)}return n.length||n.push(0),Math.ceil(Ct?Et/Math.min.apply(null,n):Math.max.apply(null,n))}(),n=tt?Math.ceil((5*e-yt)/2):4*e-yt;return n=Math.max(e,n),xn("edgePadding")?n+1:n}():0,Qt=tt?yt+2*Kt:yt+Kt,Xt=!(!Ct&&!wt||Dt),Yt=Ct?ni():null,$t=!tt||!Dt,Jt=dt?"left":"top",Zt="",te="",ee=Ct?function(){return Math.floor(-Yt/(Ct+At))+1}:wt?function(){for(var t=Qt,e=t-1;t--;)bt[t]>-Yt&&(e=t);return e}:function(){return Dt||tt?Math.max(0,Qt-Math.ceil(Mt)):Qt-1},ne=mn(wn("startIndex")),ie=ne,ae=0,re=wt?null:ee(),oe=t.swipeAngle,ue=!oe||"?",se=!1,le=t.onInit,de=new function(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}},fe=" tns-slider tns-"+t.mode,ce=pt.id||function(){var t=window.tnsId;return window.tnsId=t?t+1:1,"tns"+window.tnsId}(),pe=wn("disable"),he=!1,ve=t.freezable,me=!(!ve||wt)&&kn(),ye=!1,ge={click:fi,keydown:function(t){switch((t=bi(t)).keyCode){case i.LEFT:case i.UP:case i.PAGEUP:We.disabled||fi(t,-1);break;case i.RIGHT:case i.DOWN:case i.PAGEDOWN:ze.disabled||fi(t,1);break;case i.HOME:di("first",t);break;case i.END:di("last",t)}}},be={click:function(t){se&&li();var e=(t=bi(t)).target||t.srcElement;for(;e!==Ge&&!w(e,"data-nav");)e=e.parentNode;w(e,"data-nav")&&di(Ke=[].indexOf.call(qe,e),t)},keydown:function(n){var a=e.activeElement;if(!w(a,"data-nav"))return;var r=(n=bi(n)).keyCode,o=[].indexOf.call(qe,a),u=Ue.length,s=Ue.indexOf(o);t.navContainer&&(u=yt,s=o);function l(e){return t.navContainer?e:Ue[e]}switch(r){case i.LEFT:case i.PAGEUP:s>0&&gi(qe[l(s-1)]);break;case i.UP:case i.HOME:s>0&&gi(qe[l(0)]);break;case i.RIGHT:case i.PAGEDOWN:s<u-1&&gi(qe[l(s+1)]);break;case i.DOWN:case i.END:s<u-1&&gi(qe[l(u-1)]);break;case i.ENTER:case i.SPACE:Ke=o,di(o,n)}}},xe={mouseover:function(){Je&&(pi(),Ze=!0)},mouseout:function(){Ze&&(ci(),Ze=!1)}},we={visibilitychange:function(){e.hidden?Je&&(pi(),en=!0):en&&(ci(),en=!1)}},Ce={keydown:function(t){switch((t=bi(t)).keyCode){case i.LEFT:fi(t,-1);break;case i.RIGHT:fi(t,1)}}},Te={touchstart:Ti,touchmove:Ai,touchend:Mi,touchcancel:Mi},Ae={mousedown:Ti,mousemove:Ai,mouseup:Mi,mouseleave:Mi},Be=xn("controls"),Me=xn("nav"),Ne=!!wt||t.navAsThumbnails,Ee=xn("autoplay"),Oe=xn("touch"),Ie=xn("mouseDrag"),Se="tns-slide-active",De="tns-complete",Pe={load:Fn,error:Fn};if(Be)var ke,Le,He=t.controlsContainer,Re=t.controlsContainer?t.controlsContainer.outerHTML:"",We=t.prevButton,ze=t.nextButton,je=t.prevButton?t.prevButton.outerHTML:"",Fe=t.nextButton?t.nextButton.outerHTML:"";if(Me)var qe,Ge=t.navContainer,Ve=t.navContainer?t.navContainer.outerHTML:"",Ue=[],_e=Ue,Ke=-1,Qe=yn(),Xe=Qe,Ye="tns-nav-active";if(Ee)var $e,Je,Ze,tn,en,nn="forward"===t.autoplayDirection?1:-1,an=t.autoplayButton,rn=t.autoplayButton?t.autoplayButton.outerHTML:"",on=["<span class='tns-visually-hidden'>"," animation</span>"];if(Oe||Ie)var un,sn={},ln={},dn=!1,fn=0,cn=dt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};wt||vn(pe||me),R&&(Jt=R,Zt="translate",W?(Zt+=dt?"3d(":"3d(0px, ",te=dt?", 0px, 0px)":", 0px)"):(Zt+=dt?"X(":"Y(",te=")")),function(){J&&Ln();!function(){xn("gutter");ft.className="tns-outer",ct.className="tns-inner",ft.id=ce+"-ow",ct.id=ce+"-iw",Pt&&(ct.className+=" tns-ah");""===pt.id&&(pt.id=ce);fe+=D||wt?" tns-subpixel":" tns-no-subpixel",fe+=S?" tns-calc":" tns-no-calc",tt&&(fe+=" tns-"+t.axis);if(pt.className+=fe,tt){var n=e.createElement("div");n.className="tns-ovh",ft.appendChild(n),n.appendChild(ct)}else ft.appendChild(ct);ht.insertBefore(ft,pt),ct.appendChild(pt)}();for(var i=0;i<yt;i++){var a=mt[i];a.id||(a.id=ce+"-item"+i),b(a,"tns-item"),!tt&&ut&&b(a,ut),A(a,{"aria-hidden":"true",tabindex:"-1"})}if(Kt){for(var r=e.createDocumentFragment(),o=e.createDocumentFragment(),u=Kt;u--;){var s=u%yt,l=mt[s].cloneNode(!0);if(B(l,"id"),o.insertBefore(l,o.firstChild),tt){var d=mt[yt-1-s].cloneNode(!0);B(d,"id"),r.appendChild(d)}}pt.insertBefore(r,pt.firstChild),pt.appendChild(o),mt=pt.children}(function(){for(var e=ne,i=ne+Math.min(yt,Mt);e<i;e++){var a=mt[e];A(a,{"aria-hidden":"false"}),B(a,["tabindex"]),b(a,Se),tt||(a.style.left=100*(e-ne)/Mt+"%",b(a,at),x(a,ut))}if(tt&&dt&&(D||wt?(h(Vt,"#"+ce+" > .tns-item","font-size:"+n.getComputedStyle(mt[0]).fontSize+";",v(Vt)),h(Vt,"#"+ce,"font-size:0;",v(Vt))):m(mt,function(t,e){t.style.marginLeft=function(t){return S?S+"("+100*t+"% / "+Qt+")":100*t/Qt+"%"}(e)})),P){var r=Cn(t.edgePadding,t.gutter,t.fixedWidth,t.speed);h(Vt,"#"+ce+"-iw",r,v(Vt)),tt&&(r=dt&&!wt?"width:"+Tn(t.fixedWidth,t.gutter,t.items)+";":"",z&&(r+=Nn(It)),h(Vt,"#"+ce,r,v(Vt))),r=dt&&!wt?An(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(r+=Bn(t.gutter)),tt||(z&&(r+=Nn(It)),F&&(r+=En(It))),r&&h(Vt,"#"+ce+" > .tns-item",r,v(Vt))}else{ct.style.cssText=Cn(Tt,At,Ct),tt&&dt&&!wt&&(pt.style.width=Tn(Ct,At,Mt));var r=dt&&!wt?An(Ct,At,Mt):"";At&&(r+=Bn(At)),r&&h(Vt,"#"+ce+" > .tns-item",r,v(Vt))}if(J&&P)for(var o in J){o=parseInt(o);var u=J[o],r="",s="",l="",d="",f=wt?null:wn("items",o),c=wn("fixedWidth",o),p=wn("speed",o),y=wn("edgePadding",o),g=wn("gutter",o);("edgePadding"in u||"gutter"in u)&&(s="#"+ce+"-iw{"+Cn(y,g,c,p)+"}"),tt&&dt&&!wt&&("fixedWidth"in u||"items"in u||Ct&&"gutter"in u)&&(l="width:"+Tn(c,g,f)+";"),z&&"speed"in u&&(l+=Nn(p)),l&&(l="#"+ce+"{"+l+"}"),("fixedWidth"in u||Ct&&"gutter"in u||!tt&&"items"in u)&&(d+=An(c,g,f)),"gutter"in u&&(d+=Bn(g)),!tt&&"speed"in u&&(z&&(d+=Nn(p)),F&&(d+=En(p))),d&&(d="#"+ce+" > .tns-item{"+d+"}"),(r=s+l+d)&&Vt.insertRule("@media (min-width: "+o/16+"em) {"+r+"}",Vt.cssRules.length)}})(),On(),wt||(In(),Sn())}();var pn=Dt?tt?function(){var t=ae,e=re;t+=Nt,e-=Nt,Tt?(t+=1,e-=1):Ct&&Bt%(Ct+At)&&(e-=1),Kt&&(ne>e?ne-=yt:ne<t&&(ne+=yt))}:function(){if(ne>re)for(;ne>=ae+yt;)ne-=yt;else if(ne<ae)for(;ne<=re-yt;)ne+=yt}:function(){ne=Math.max(ae,Math.min(re,ne))},hn=tt?function(){ti(pt,""),z||!It?(ri(),It&&E(pt)||li()):function(t,e,n,i,a,r,o){var u=Math.min(r,10),s=a.indexOf("%")>=0?"%":"px",l=(a=a.replace(s,""),Number(t.style[e].replace(n,"").replace(i,"").replace(s,""))),d=(a-l)/r*u;setTimeout(function a(){r-=u,l+=d,t.style[e]=n+l+s+i,r>0?setTimeout(a,u):o()},u)}(pt,Jt,Zt,te,ii(),It,li),dt||Ni()}:function(){_t=[];var t={};t[G]=t[V]=li,L(mt[ie],t),k(mt[ne],t),oi(ie,at,rt,!0),oi(ne,ut,at),G&&V&&It&&E(pt)||li()};return{version:"2.8.5",getInfo:Oi,events:de,goTo:di,play:function(){zt&&!Je&&(vi(),tn=!1)},pause:function(){Je&&(mi(),tn=!0)},isOn:lt,updateSliderHeight:Kn,refresh:On,destroy:function(){if(Vt.disabled=!0,Vt.ownerNode&&Vt.ownerNode.remove(),L(n,{resize:Dn}),Ot&&L(e,Ce),He&&L(He,ge),Ge&&L(Ge,be),L(pt,xe),L(pt,we),an&&L(an,{click:yi}),zt&&clearInterval($e),tt&&G){var i={};i[G]=li,L(pt,i)}Rt&&L(pt,Te),Wt&&L(pt,Ae);var a=[vt,Re,je,Fe,Ve,rn];_.forEach(function(e,n){var i="container"===e?ft:t[e];if("object"==typeof i){var r=!!i.previousElementSibling&&i.previousElementSibling;i.outerHTML=a[n],t[e]=r?r.nextElementSibling:i.parentNode.firstElementChild}}),_=at=rt=ot=ut=dt=ft=ct=pt=ht=vt=mt=yt=st=gt=wt=Ct=Tt=At=Bt=Mt=Nt=Et=Ot=It=St=Dt=Pt=Vt=Ut=bt=_t=Kt=Qt=Xt=Yt=$t=Jt=Zt=te=ee=ne=ie=ae=re=oe=ue=se=le=de=fe=ce=pe=he=ve=me=ye=ge=be=xe=we=Ce=Te=Ae=Be=Me=Ne=Ee=Oe=Ie=Se=De=Pe=xt=kt=Lt=He=Re=We=ze=ke=Le=Ht=Ge=Ve=qe=Ue=_e=Ke=Qe=Xe=Ye=zt=jt=nn=Ft=qt=an=rn=Gt=on=$e=Je=Ze=tn=en=sn=ln=un=dn=fn=cn=Rt=Wt=null,this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=lt=!1},rebuild:function(){return H(u(t,K))}}}function vn(t){t&&(kt=Ht=Rt=Wt=Ot=zt=qt=Gt=!1)}function mn(t){return t=t?Math.max(0,Math.min(Dt?yt-1:yt-Mt,t)):0,tt?t+Kt:t}function yn(t){for(null==t&&(t=ne),tt&&(t-=Kt);t<0;)t+=yt;return Math.floor(t%yt)}function gn(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function bn(){return function t(e){return e.clientWidth||t(e.parentNode)}(ht)-(2*Tt-At)}function xn(e){if(t[e])return!0;if(J)for(var n in J)if(J[n][e])return!0;return!1}function wn(e,n){if(null==n&&(n=gt),"items"===e&&Ct)return Math.floor(Bt/(Ct+At))||1;var i=t[e];if(J)for(var a in J)n>=parseInt(a)&&e in J[a]&&(i=J[a][e]);return"slideBy"===e&&"page"===i&&(i=wn("items")),tt||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Cn(t,e,n,i){var a="";if(t){var r=t;e&&(r-=e),a=dt?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+(dt?o+" 0 0":"0 "+o+" 0")+";"}return z&&i&&(a+=Nn(i)),a}function Tn(t,e,n){return t?(t+e)*Qt+"px":S?S+"("+100*Qt+"% / "+n+")":100*Qt/n+"%"}function An(t,e,n){var i;if(t)i=t+e+"px";else{tt||(n=Math.floor(n));var a=tt?Qt:n;i=S?S+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==Z?i+";":i+" !important;"}function Bn(t){var e="";!1!==t&&(e=(dt?"padding-":"margin-")+(dt?"right":"bottom")+": "+t+"px;");return e}function Mn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Nn(t){return Mn(z,18)+"transition-duration:"+t/1e3+"s;"}function En(t){return Mn(F,17)+"animation-duration:"+t/1e3+"s;"}function On(){if(xn("autoHeight")||wt||!dt){var t=pt.querySelectorAll("img");m(t,function(t){var e=t.src;e.indexOf("data:image")<0?(k(t,Pe),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e):b(t,De)}),a(function(){Vn(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(t),function(){if(xt=!0,wt){var t=Dt?ne:yt-1;!function n(){mt[t-1].getBoundingClientRect().right.toFixed(2)===mt[t].getBoundingClientRect().left.toFixed(2)?e():setTimeout(function(){n()},16)}()}else e();function e(){dt&&!wt||(Qn(),wt?(Yt=ni(),ve&&(me=kn()),re=ee(),vn(pe||me)):Ni()),tt&&ai(),In(),Sn()}})})}else tt&&ai()}function In(){if(Ee){var e=zt?"stop":"start";an?A(an,{"data-action":e}):t.autoplayButtonOutput&&(ft.insertAdjacentHTML("afterbegin",'<button data-action="'+e+'" type="button">'+on[0]+e+on[1]+Ft[0]+"</button>"),an=ft.querySelector("[data-action]")),an&&k(an,{click:yi}),zt&&(vi(),qt&&k(pt,xe),Gt&&k(pt,we))}if(Me){var n=tt?Kt:0;if(Ge){A(Ge,{"aria-label":"Carousel Pagination"}),qe=Ge.children;for(var i=0;i<yt;i++){var a=qe[i];a&&A(a,{"data-nav":i,tabindex:"-1","aria-selected":"false","aria-controls":mt[n+i].id})}}else{var r="",o=Ne?"":"hidden";for(i=0;i<yt;i++)r+='<button data-nav="'+i+'" tabindex="-1" aria-selected="false" aria-controls="'+mt[n+i].id+'" '+o+' type="button"></button>';r='<div class="tns-nav" aria-label="Carousel Pagination">'+r+"</div>",ft.insertAdjacentHTML("afterbegin",r),Ge=ft.querySelector(".tns-nav"),qe=Ge.children}if(Ei(),z){var u=z.substring(0,z.length-18).toLowerCase(),s="transition: all "+It/1e3+"s";u&&(s="-"+u+"-"+s),h(Vt,"[aria-controls^="+ce+"-item]",s,v(Vt))}A(qe[Qe],{tabindex:"0","aria-selected":"true"}),b(qe[Qe],Ye),k(Ge,be)}Be&&(He||We&&ze?(He&&(We=He.children[0],ze=He.children[1],A(He,{"aria-label":"Carousel Navigation",tabindex:"0"}),A(He.children,{"aria-controls":ce,tabindex:"-1"})),A(We,{"data-controls":"prev"}),A(ze,{"data-controls":"next"})):(ft.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+ce+'" type="button">'+Lt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+ce+'" type="button">'+Lt[1]+"</button></div>"),He=ft.querySelector(".tns-controls"),We=He.children[0],ze=He.children[1]),ke=Yn(We),Le=Yn(ze),Zn(),He?k(He,ge):(k(We,ge),k(ze,ge))),Hn()}function Sn(){if(tt&&G){var t={};t[G]=li,k(pt,t)}Rt&&k(pt,Te),Wt&&k(pt,Ae),Ot&&k(e,Ce),"inner"===Z?de.on("outerResized",function(){Pn(),de.emit("innerLoaded",Oi())}):(J||Ct||wt||!dt)&&k(n,{resize:Dn}),"outer"===Z?de.on("innerLoaded",Gn):!Pt&&tt||pe||Gn(),jn(),pe?zn():me&&Wn(),de.on("indexChanged",Un),"function"==typeof le&&le(Oi()),"inner"===Z&&de.emit("innerLoaded",Oi()),lt=!0}function Dn(t){a(function(){Pn(bi(t))})}function Pn(t){if(lt){"outer"===Z&&de.emit("outerResized",Oi(t)),gt=gn();var n,i=st,a=!1;J&&(Ln(),(n=i!==st)&&de.emit("newBreakpointStart",Oi(t)));var r,o,u=Mt,s=pe,l=me,d=Ot,f=kt,c=Ht,p=Rt,y=Wt,g=zt,w=qt,C=Gt,T=ne;if(n){var A=Ct,B=Pt,E=Lt,O=Ft;if(!P)var I=At,S=Tt}if(Ot=wn("arrowKeys"),kt=wn("controls"),Ht=wn("nav"),Rt=wn("touch"),Wt=wn("mouseDrag"),zt=wn("autoplay"),qt=wn("autoplayHoverPause"),Gt=wn("autoplayResetOnVisibility"),n&&(pe=wn("disable"),Ct=wn("fixedWidth"),It=wn("speed"),Pt=wn("autoHeight"),Lt=wn("controlsText"),Ft=wn("autoplayText"),jt=wn("autoplayTimeout"),P||(Tt=wn("edgePadding"),At=wn("gutter"))),vn(pe),Bt=bn(),dt&&!wt||pe||(Qn(),dt||(Ni(),a=!0)),(Ct||wt)&&(Yt=ni(),re=ee()),(n||Ct)&&(Mt=wn("items"),Nt=wn("slideBy"),(o=Mt!==u)&&(Ct||wt||(re=ee()),pn())),n&&pe!==s&&(pe?zn():function(){if(!he)return;if(Vt.disabled=!1,pt.className+=fe,ai(),Dt)for(var t=Kt;t--;)tt&&N(mt[t]),N(mt[Qt-t-1]);if(!tt)for(var e=ne,n=ne+yt;e<n;e++){var i=mt[e],a=e<ne+Mt?at:ut;i.style.left=100*(e-ne)/Mt+"%",b(i,a)}Rn(),he=!1}()),ve&&(n||Ct||wt)&&(me=kn())!==l&&(me?(ri(ii(mn(0))),Wn()):(!function(){if(!ye)return;Tt&&P&&(ct.style.margin="");if(Kt)for(var t="tns-transparent",e=Kt;e--;)tt&&x(mt[e],t),x(mt[Qt-e-1],t);Rn(),ye=!1}(),a=!0)),vn(pe||me),zt||(qt=Gt=!1),Ot!==d&&(Ot?k(e,Ce):L(e,Ce)),kt!==f&&(kt?N(He):M(He)),Ht!==c&&(Ht?(N(Ge),Ei()):M(Ge)),Rt!==p&&(Rt?k(pt,Te):L(pt,Te)),Wt!==y&&(Wt?k(pt,Ae):L(pt,Ae)),zt!==g&&(zt?(an&&N(an),Je||tn||vi()):(an&&M(an),Je&&mi())),qt!==w&&(qt?k(pt,xe):L(pt,xe)),Gt!==C&&(Gt?k(e,we):L(e,we)),n&&(Ct!==A&&(a=!0),Pt!==B&&(Pt||(ct.style.height="")),kt&&Lt!==E&&(We.innerHTML=Lt[0],ze.innerHTML=Lt[1]),an&&Ft!==O)){var D=zt?1:0,H=an.innerHTML,R=H.length-O[D].length;H.substring(R)===O[D]&&(an.innerHTML=H.substring(0,R)+Ft[D])}if((r=ne!==T)&&(de.emit("indexChanged",Oi()),a=!0),o&&(r||Un(),tt||function(){for(var t=ne+Math.min(yt,Mt),e=Qt;e--;){var n=mt[e];e>=ne&&e<t?(b(n,"tns-moving"),n.style.left=100*(e-ne)/Mt+"%",b(n,at),x(n,ut)):n.style.left&&(n.style.left="",b(n,ut),x(n,at)),x(n,rt)}setTimeout(function(){m(mt,function(t){x(t,"tns-moving")})},300)}()),!pe&&!me){if(n&&!P&&(Tt===S&&At===I||(ct.style.cssText=Cn(Tt,At,Ct)),dt)){tt&&(pt.style.width=Tn(Ct,At,Mt));var W=An(Ct,At,Mt)+Bn(At);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Vt,v(Vt)-1),h(Vt,"#"+ce+" > .tns-item",W,v(Vt))}!Pt&&tt||Gn(),a&&(ai(),ie=ne)}n&&de.emit("newBreakpointEnd",Oi(t))}}function kn(){return Ct||wt?Ct?(Ct+At)*yt<=Bt+2*Tt:(Dt?bt[yt]:ei())<=Bt+2*Tt:yt<=Mt}function Ln(){for(var t in st=0,J)t=parseInt(t),gt>=t&&(st=t)}function Hn(){!zt&&an&&M(an),!Ht&&Ge&&M(Ge),!kt&&He&&M(He)}function Rn(){zt&&an&&N(an),Ht&&Ge&&N(Ge),kt&&He&&N(He)}function Wn(){if(!ye){if(Tt&&(ct.style.margin="0px"),Kt)for(var t="tns-transparent",e=Kt;e--;)tt&&b(mt[e],t),b(mt[Qt-e-1],t);Hn(),ye=!0}}function zn(){if(!he){if(Vt.disabled=!0,pt.className=pt.className.replace(fe.substring(1),""),B(pt,["style"]),Dt)for(var t=Kt;t--;)tt&&M(mt[t]),M(mt[Qt-t-1]);if(dt&&tt||B(ct,["style"]),!tt)for(var e=ne,n=ne+yt;e<n;e++){var i=mt[e];B(i,["style"]),x(i,at),x(i,ut)}Hn(),he=!0}}function jn(){if(Ut&&!pe){var t=ne;if(wt)for(var e=ne+1,n=e,i=bt[ne]+Bt+Tt-At;bt[e]<i;)n=++e;else n=ne+Mt;for(Tt&&(t-=1,wt||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,Qt));t<n;t++)m(mt[t].querySelectorAll(".tns-lazy-img"),function(t){var e={};e[G]=function(t){t.stopPropagation()},k(t,e),g(t,"loaded")||(t.src=C(t,"data-src"),b(t,"loaded"))})}}function Fn(t){var e=xi(t);b(e,De),L(e,Pe)}function qn(t,e){for(var n=[],i=t,a=Math.min(t+e,Qt);i<a;i++)m(mt[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Gn(){var t=Pt?qn(ne,Mt):qn(Kt,yt);a(function(){Vn(t,Kn)})}function Vn(t,e){return xt?e():(t.forEach(function(e,n){g(e,De)&&t.splice(n,1)}),t.length?void a(function(){Vn(t,e)}):e())}function Un(){jn(),function(){for(var t=ne+Math.min(yt,Mt),e=Qt;e--;){var n=mt[e];e>=ne&&e<t?w(n,"tabindex")&&(A(n,{"aria-hidden":"false"}),B(n,["tabindex"]),b(n,Se)):(w(n,"tabindex")||A(n,{"aria-hidden":"true",tabindex:"-1"}),g(n,Se)&&x(n,Se))}}(),Zn(),Ei(),function(){if(Ht&&(Qe=-1!==Ke?Ke:yn(),Ke=-1,Qe!==Xe)){var t=qe[Xe],e=qe[Qe];A(t,{tabindex:"-1","aria-selected":"false"}),A(e,{tabindex:"0","aria-selected":"true"}),x(t,Ye),b(e,Ye),Xe=Qe}}()}function _n(t,e){for(var n=[],i=t,a=Math.min(t+e,Qt);i<a;i++)n.push(mt[i].offsetHeight);return Math.max.apply(null,n)}function Kn(){var t=Pt?_n(ne,Mt):_n(Kt,yt);ct.style.height!==t&&(ct.style.height=t+"px")}function Qn(){bt=[0];for(var t,e=dt?"left":"top",n=mt[0].getBoundingClientRect()[e],i=1;i<Qt;i++)t=mt[i].getBoundingClientRect()[e],bt.push(t-n)}function Xn(t){return t.nodeName.toLowerCase()}function Yn(t){return"button"===Xn(t)}function $n(t){return"true"===t.getAttribute("aria-disabled")}function Jn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Zn(){if(kt&&!St&&!Dt){var t=ke?We.disabled:$n(We),e=Le?ze.disabled:$n(ze),n=ne<=ae,i=!St&&ne>=re;n&&!t&&Jn(ke,We,!0),!n&&t&&Jn(ke,We,!1),i&&!e&&Jn(Le,ze,!0),!i&&e&&Jn(Le,ze,!1)}}function ti(t,e){z&&(t.style[z]=e)}function ei(){return Ct?(Ct+At)*Qt:bt[Qt-1]+mt[Qt-1].getBoundingClientRect().width}function ni(){var t=Bt-(ei()-At);return Tt&&(t+=Tt-At),t>0&&(t=0),t}function ii(t){var e;(null==t&&(t=ne),dt&&!wt)?e=Ct?-(Ct+At)*t:100*-t/(R?Qt:Mt):e=-bt[t];return Xt&&(e=Math.max(e,Yt)),e+=!dt||wt||Ct?"px":"%"}function ai(t){ti(pt,"0s"),ri(t)}function ri(t){null==t&&(t=ii()),pt.style[Jt]=Zt+t+te}function oi(t,e,n,i){var a=t+Mt;Dt||(a=Math.min(a,Qt));for(var r=t;r<a;r++){var o=mt[r];i||(o.style.left=100*(r-ne)/Mt+"%"),ot&&j&&(o.style[j]=o.style[q]=ot*(r-t)/1e3+"s"),x(o,e),b(o,n),i&&_t.push(o)}}function ui(t,e){$t&&pn(),(ne!==ie||e)&&(de.emit("indexChanged",Oi()),de.emit("transitionStart",Oi()),Pt&&Gn(),Je&&t&&["click","keydown"].indexOf(t.type)>=0&&mi(),se=!0,hn())}function si(t){return t.toLowerCase().replace(/-/g,"")}function li(t){if(tt||se){if(de.emit("transitionEnd",Oi(t)),!tt&&_t.length>0)for(var e=0;e<_t.length;e++){var n=_t[e];n.style.left="",q&&j&&(n.style[q]="",n.style[j]=""),x(n,rt),b(n,ut)}if(!t||!tt&&t.target.parentNode===pt||t.target===pt&&si(t.propertyName)===si(Jt)){if(!$t){var i=ne;pn(),ne!==i&&(de.emit("indexChanged",Oi()),ai())}"inner"===Z&&de.emit("innerLoaded",Oi()),se=!1,ie=ne}}}function di(t,e){if(!me)if("prev"===t)fi(e,-1);else if("next"===t)fi(e,1);else{se&&li();var n=yn(),i=0;if("first"===t?i=-n:"last"===t?i=tt?yt-Mt-n:yt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(yt-1,t))),i=t-n)),!tt&&i&&Math.abs(i)<Mt){var a=i>0?1:-1;i+=ne+i-yt>=ae?yt*a:2*yt*a*-1}ne+=i,tt&&Dt&&(ne<ae&&(ne+=yt),ne>re&&(ne-=yt)),yn(ne)!==yn(ie)&&ui(e)}}function fi(t,e){var n;if(se&&li(),!e){for(var i=(t=bi(t)).target||t.srcElement;i!==He&&[We,ze].indexOf(i)<0;)i=i.parentNode;var a=[We,ze].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(St){if(ne===ae&&-1===e)return void di("last",t);if(ne===re&&1===e)return void di("first",t)}e&&(ne+=Nt*e,wt&&(ne=Math.floor(ne)),ui(n||t&&"keydown"===t.type?t:null))}function ci(){$e=setInterval(function(){fi(null,nn)},jt),Je=!0}function pi(){clearInterval($e),Je=!1}function hi(t,e){A(an,{"data-action":t}),an.innerHTML=on[0]+t+on[1]+e}function vi(){ci(),an&&hi("stop",Ft[1])}function mi(){pi(),an&&hi("start",Ft[0])}function yi(){Je?(mi(),tn=!0):(vi(),tn=!1)}function gi(t){t.focus()}function bi(t){return wi(t=t||n.event)?t.changedTouches[0]:t}function xi(t){return t.target||n.event.srcElement}function wi(t){return t.type.indexOf("touch")>=0}function Ci(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ti(t){se&&li(),dn=!0,tt&&(o(fn),fn=0);var e=bi(t);de.emit(wi(t)?"touchStart":"dragStart",Oi(t)),!wi(t)&&["img","a"].indexOf(Xn(xi(t)))>=0&&Ci(t),ln.x=sn.x=parseInt(e.clientX),ln.y=sn.y=parseInt(e.clientY),tt&&(un=parseFloat(pt.style[Jt].replace(Zt,"").replace(te,"")),ti(pt,"0s"))}function Ai(t){if(dn){var e=bi(t);ln.x=parseInt(e.clientX),ln.y=parseInt(e.clientY),tt&&!fn&&(fn=a(function(){!function t(e){if(!ue)return void(dn=!1);o(fn);dn&&(fn=a(function(){t(e)}));Bi();if(ue){try{e.type&&de.emit(wi(e)?"touchMove":"dragMove",Oi(e))}catch(t){}var n=un,i=cn(ln,sn);if(!dt||Ct||wt)n+=i,n+="px";else{var r=R?i*Mt*100/(Bt*Qt):100*i/Bt;n+=r,n+="%"}pt.style[Jt]=Zt+n+te}}(t)}))}}function Bi(){"?"===ue&&ln.x!==sn.x&&ln.y!==sn.y&&(ue=function(t,e){var n=!1,i=Math.abs(90-Math.abs(t));return i>=90-e?n="horizontal":i<=e&&(n="vertical"),n}(function(t,e){return Math.atan2(t,e)*(180/Math.PI)}(ln.y-sn.y,ln.x-sn.x),oe)===t.axis)}function Mi(t){if(dn){tt&&(o(fn),ti(pt,"")),dn=!1;var e=bi(t);ln.x=parseInt(e.clientX),ln.y=parseInt(e.clientY);var n=cn(ln,sn);if(Math.abs(n)>=5){if(!wi(t)){var i=xi(t);k(i,{click:function t(e){Ci(e),L(i,{click:t})}})}tt?fn=a(function(){if(dt&&!wt){var e=-n*Mt/Bt;e=n>0?Math.floor(e):Math.ceil(e),ne+=e}else{var i=-(un+n);if(i<=0)ne=ae;else if(i>=bt[bt.length-1])ne=re;else for(var a=0;a<Qt&&i>=bt[a];)ne=a,i>bt[a]&&n<0&&(ne+=1),a++}ui(t,n),de.emit(wi(t)?"touchEnd":"dragEnd",Oi(t))}):(Bi(),ue&&fi(t,n>0?-1:1))}}oe&&(ue="?")}function Ni(){ct.style.height=bt[ne+Mt]-bt[ne]+"px"}function Ei(){Ht&&!Ne&&(!function(){Ue=[];for(var t=yn()%Mt;t<yt;)tt&&!Dt&&t+Mt>yt&&(t=yt-Mt),Ue.push(t),t+=Mt;(Dt&&Ue.length*Mt<yt||!Dt&&Ue[0]>0)&&Ue.unshift(0)}(),Ue!==_e&&(m(qe,function(t,e){Ue.indexOf(e)<0?M(t):N(t)}),_e=Ue))}function Oi(t){return{container:pt,slideItems:mt,navContainer:Ge,navItems:qe,controlsContainer:He,hasControls:Be,prevButton:We,nextButton:ze,items:Mt,slideBy:Nt,cloneCount:Kt,slideCount:yt,slideCountNew:Qt,index:ne,indexCached:ie,navCurrentIndex:Qe,navCurrentIndexCached:Xe,visibleNavIndexes:Ue,visibleNavIndexesCached:_e,sheet:Vt,event:t||{}}}U&&console.warn("No slides found in",t.container)}}])});
//# sourceMappingURL=index.js.map