import{a as h}from"./chunk-R5CAU7TC.js";import{$ as d,A as s,B as l,D as n,E as i,F as o,J as x,K as w,L as a,S as p,_ as g,ba as C,ca as M,ea as y,fa as u,ga as O,ha as P,m as _,w as c,x as f}from"./chunk-WAWHM7R6.js";function T(e,b){e&1&&(n(0,"div",9),o(1,"img",10),n(2,"span",11),a(3,"Home"),i()())}function j(e,b){if(e&1&&(n(0,"div",4),s(1,T,4,0,"div",5),n(2,"div",6),o(3,"img",7),n(4,"span",8),a(5,"Favorites"),i()()()),e&2){let r=w();c(),l("ngIf",r.isHomeComponent)}}var S=(()=>{class e{constructor(r){this.homeService=r,this.isHomeComponent=!0,this.isMenuActive=!1,this.homeService.isHomeComponent$.subscribe(t=>this.isHomeComponent=t)}toggleMenu(){this.isMenuActive=!this.isMenuActive}static{this.\u0275fac=function(t){return new(t||e)(f(h))}}static{this.\u0275cmp=_({type:e,selectors:[["app-burger-menu"]],standalone:!0,features:[p],decls:4,vars:1,consts:[[1,"burger"],[1,"burger__button",3,"click"],["src","./browser/assets/menu.png","alt","menu",1,"burger__button__image"],["class","burger__content",4,"ngIf"],[1,"burger__content"],["class","burger__content__home","routerLink","/home",4,"ngIf"],["routerLink","/home/favorites",1,"burger__content__favorites"],["src","./browser/assets/bookmark-header.png","alt","favorites",1,"burger__content__favorites__image"],[1,"burger__content__favorites__name"],["routerLink","/home",1,"burger__content__home"],["src","./browser/assets/home.png","alt","home",1,"burger__content__home__image"],[1,"burger__content__home__name"]],template:function(t,m){t&1&&(n(0,"div",0)(1,"button",1),x("click",function(){return m.toggleMenu()}),o(2,"img",2),i(),s(3,j,6,1,"div",3),i()),t&2&&(c(3),l("ngIf",m.isMenuActive))},dependencies:[d,g,u],styles:[".burger[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;width:140px;position:relative;z-index:999}.burger__button[_ngcontent-%COMP%]{cursor:pointer;border:none;background-color:#0000;color:#fff}.burger__button__image[_ngcontent-%COMP%]{max-width:48px;max-height:48px}.burger__content[_ngcontent-%COMP%]{color:#fff;background-color:#323232;width:140px;height:100vh;margin-top:8px;position:absolute;top:100%;left:0;display:flex;flex-direction:column}.burger__content__home[_ngcontent-%COMP%]{cursor:pointer;display:flex;flex-direction:row;align-items:center;border-bottom:1px solid white;padding-left:3px}.burger__content__home__image[_ngcontent-%COMP%]{max-width:20px;max-height:30px}.burger__content__home__name[_ngcontent-%COMP%]{padding-left:5px}.burger__content__home__name[_ngcontent-%COMP%]:hover{color:#9e9e9e}.burger__content__favorites[_ngcontent-%COMP%]{cursor:pointer;display:flex;flex-direction:row;align-items:center;border-bottom:1px solid white}.burger__content__favorites__image[_ngcontent-%COMP%]{max-width:25px;max-height:30px}.burger__content__favorites__name[_ngcontent-%COMP%]:hover{color:#9e9e9e}"]})}}return e})();function L(e,b){e&1&&(n(0,"div",12),o(1,"img",13),n(2,"span",14),a(3,"Home"),i()())}var k=(()=>{class e{constructor(r){this.homeService=r,this.isHomeComponent=!0,this.homeService.isHomeComponent$.subscribe(t=>this.isHomeComponent=t)}static{this.\u0275fac=function(t){return new(t||e)(f(h))}}static{this.\u0275cmp=_({type:e,selectors:[["app-header"]],standalone:!0,features:[p],decls:15,vars:1,consts:[[1,"nav-bar"],[1,"nav-bar__content-wrapper"],[1,"nav-bar__content-wrapper__left"],["src","./browser/assets/museum.png","alt","museum",1,"nav-bar__content-wrapper__left__image"],[1,"nav-bar__content-wrapper__left__name"],[1,"nav-bar__left__name__art"],[1,"nav-bar__content-wrapper__right"],["class","nav-bar__content-wrapper__right__home","routerLink","/home",4,"ngIf"],["routerLink","/home/favorites",1,"nav-bar__content-wrapper__right__favorites"],["alt","favorite","src","./browser/assets/bookmark-header.png",1,"nav-bar__content-wrapper__right__favorites__image"],[1,"nav-bar__content-wrapper__right__favorites__name"],[1,"nav-bar__content-wrapper__burger-menu"],["routerLink","/home",1,"nav-bar__content-wrapper__right__home"],["alt","home","src","./browser/assets/home.png",1,"nav-bar__content-wrapper__right__home__image"],[1,"nav-bar__content-wrapper__right__home__name"]],template:function(t,m){t&1&&(n(0,"nav",0)(1,"div",1)(2,"div",2),o(3,"img",3),n(4,"span",4),a(5,"Museum of "),n(6,"span",5),a(7,"Art"),i()()(),n(8,"div",6),s(9,L,4,0,"div",7),n(10,"div",8),o(11,"img",9),n(12,"span",10),a(13,"Your favorites"),i()()(),o(14,"app-burger-menu",11),i()()),t&2&&(c(9),l("ngIf",m.isHomeComponent))},dependencies:[d,g,u,S],styles:[".nav-bar[_ngcontent-%COMP%]{width:100%;flex:1;background:linear-gradient(50deg,#343333,#474747,#343333);height:70px;display:flex;flex-direction:row;justify-content:center;top:0;position:sticky;z-index:999}.nav-bar__content-wrapper[_ngcontent-%COMP%]{width:70%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}@media (max-width: 768px){.nav-bar__content-wrapper[_ngcontent-%COMP%]{margin-left:2em;width:100%}}.nav-bar__content-wrapper__left[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:.5em}.nav-bar__content-wrapper__left__image[_ngcontent-%COMP%]{height:40px;width:40px}.nav-bar__content-wrapper__left__name[_ngcontent-%COMP%]{margin-top:auto;color:#fff;font-size:1rem}.nav-bar__content-wrapper__left__name__art[_ngcontent-%COMP%]{color:#d49c47;font-weight:700}.nav-bar__content-wrapper__right[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;gap:.5em}@media (max-width: 768px){.nav-bar__content-wrapper__right[_ngcontent-%COMP%]{display:none}}.nav-bar__content-wrapper__right__home[_ngcontent-%COMP%]{cursor:pointer;color:#fff;display:flex;flex-direction:row;align-items:center;gap:.5em}.nav-bar__content-wrapper__right__home__image[_ngcontent-%COMP%]{width:18px;height:20px}.nav-bar__content-wrapper__right__home__name[_ngcontent-%COMP%]{text-decoration:none}.nav-bar__content-wrapper__right__favorites[_ngcontent-%COMP%]{cursor:pointer;color:#fff;display:flex;flex-direction:row;align-items:center;gap:.5em}.nav-bar__content-wrapper__right__favorites__image[_ngcontent-%COMP%]{width:24px;height:24px}.nav-bar__content-wrapper__right__favorites__name[_ngcontent-%COMP%]{text-decoration:none}.nav-bar__content-wrapper__right__home[_ngcontent-%COMP%]:hover, .nav-bar__content-wrapper__right__favorites[_ngcontent-%COMP%]:hover{color:#cccbcb}@media (min-width: 769px){.nav-bar__content-wrapper__burger-menu[_ngcontent-%COMP%]{display:none}}"]})}}return e})();var H=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=_({type:e,selectors:[["app-footer"]],standalone:!0,features:[p],decls:9,vars:0,consts:[[1,"content-wrapper"],[1,"content-wrapper__footer-bar"],[1,"content-wrapper__footer-bar__left"],["src","./browser/assets/museum.png","alt","museum",1,"content-wrapper__footer-bar__left__image"],[1,"content-wrapper__footer-bar__left__name"],[1,"content-wrapper__footer-bar__left__name__art"],["src","./browser/assets/logo.png","alt","logo",1,"content-wrapper__footer-bar__right-image"]],template:function(t,m){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),o(3,"img",3),n(4,"span",4),a(5,"Museum of "),n(6,"span",5),a(7,"Art"),i()()(),o(8,"img",6),i()())},styles:[".content-wrapper[_ngcontent-%COMP%]{margin-top:1em;background-color:#fff;height:90px;width:100%;display:flex;flex-direction:row;justify-content:center}.content-wrapper__footer-bar[_ngcontent-%COMP%]{width:70%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}@media (max-width: 768px){.content-wrapper__footer-bar[_ngcontent-%COMP%]{margin-left:2em;width:100%}}.content-wrapper__footer-bar__left[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:.5em}.content-wrapper__footer-bar__left__image[_ngcontent-%COMP%]{height:40px;width:40px}.content-wrapper__footer-bar__left__name[_ngcontent-%COMP%]{margin-top:auto;color:#000;font-size:1rem}.content-wrapper__footer-bar__left__name__art[_ngcontent-%COMP%]{color:#d49c47;font-weight:700}"]})}}return e})();var F=(()=>{class e{constructor(){this.title="modsen-museum-front-end"}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=_({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:3,vars:0,template:function(t,m){t&1&&o(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[k,H,P,y]})}}return e})();var I=[{path:"home",loadComponent:()=>import("./chunk-MTVRYKT7.js").then(e=>e.HomeComponent)},{path:"home/detail-info",loadComponent:()=>import("./chunk-36UUNLR7.js").then(e=>e.DetailInfoComponent)},{path:"home/favorites",loadComponent:()=>import("./chunk-AOEN2GUB.js").then(e=>e.FavoritesComponent)},{path:"**",pathMatch:"full",redirectTo:"home"}];var A={providers:[O(I),C()]};M(F,A);
