var mo=Object.defineProperty;var go=(n,l,h)=>l in n?mo(n,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):n[l]=h;var Be=(n,l,h)=>(go(n,typeof l!="symbol"?l+"":l,h),h);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))p(m);new MutationObserver(m=>{for(const k of m)if(k.type==="childList")for(const y of k.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&p(y)}).observe(document,{childList:!0,subtree:!0});function h(m){const k={};return m.integrity&&(k.integrity=m.integrity),m.referrerPolicy&&(k.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?k.credentials="include":m.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function p(m){if(m.ep)return;m.ep=!0;const k=h(m);fetch(m.href,k)}})();/*! 'ui.js is part of ReplayWeb.page (https://replayweb.page) Copyright (C) 2020-2023, Webrecorder Software. Licensed under the Affero General Public License v3.' */(()=>{var __webpack_modules__={6274:(n,l,h)=>{h.d(l,{Z:()=>k});var p=h(3645),m=h.n(p)()(function(y){return y[1]});m.push([n.id,`.input::placeholder,.textarea::placeholder,.select select::placeholder{opacity:1}a:focus{color:#363636}.file-label:focus-within .file-cta{background-color:#e8e8e8;color:#363636}.button.is-primary:focus,.button.is-primary:hover,.button.is-primary:active{background-color:#459558 !important;color:white !important}.replay-bar .button{margin:0 1px}.replay-bar .button:focus{box-shadow:none !important;outline:1px dotted #4876ff;outline:-webkit-focus-ring-color auto 1px}.skip-link{border:0;clip:rect(1px, 1px, 1px, 1px);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}.skip-link:focus{background-color:black;border-radius:3px;box-shadow:0 0 2px 2px rgba(0,0,0,0.6);clip:auto !important;clip-path:none;color:white;display:block;font-family:inherit;font-size:1.3em;font-weight:bold;height:auto;left:5px;line-height:normal;padding:15px 23px 14px;text-decoration:none;top:5px;width:auto;z-index:100000}.main-scroll{flex:1;scroll-behavior:smooth;overflow-y:auto;max-height:100vh;height:100%;display:flex;flex-direction:column;overflow-x:hidden}/*! bulma.io v0.9.3 | MIT License | github.com/jgthms/bulma */.button,.input,.textarea,.select select,.file-cta,.file-name,.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis{-moz-appearance:none;-webkit-appearance:none;align-items:center;border:1px solid transparent;border-radius:4px;box-shadow:none;display:inline-flex;font-size:1rem;height:2.5em;justify-content:flex-start;line-height:1.5;padding-bottom:calc(0.5em - 1px);padding-left:calc(0.75em - 1px);padding-right:calc(0.75em - 1px);padding-top:calc(0.5em - 1px);position:relative;vertical-align:top}.button:focus,.input:focus,.textarea:focus,.select select:focus,.file-cta:focus,.file-name:focus,.pagination-previous:focus,.pagination-next:focus,.pagination-link:focus,.pagination-ellipsis:focus,.is-focused.button,.is-focused.input,.is-focused.textarea,.select select.is-focused,.is-focused.file-cta,.is-focused.file-name,.is-focused.pagination-previous,.is-focused.pagination-next,.is-focused.pagination-link,.is-focused.pagination-ellipsis,.button:active,.input:active,.textarea:active,.select select:active,.file-cta:active,.file-name:active,.pagination-previous:active,.pagination-next:active,.pagination-link:active,.pagination-ellipsis:active,.is-active.button,.is-active.input,.is-active.textarea,.select select.is-active,.is-active.file-cta,.is-active.file-name,.is-active.pagination-previous,.is-active.pagination-next,.is-active.pagination-link,.is-active.pagination-ellipsis{outline:none}.button[disabled],.input[disabled],.textarea[disabled],.select select[disabled],.file-cta[disabled],.file-name[disabled],.pagination-previous[disabled],.pagination-next[disabled],.pagination-link[disabled],.pagination-ellipsis[disabled],fieldset[disabled] .button,fieldset[disabled] .input,fieldset[disabled] .textarea,fieldset[disabled] .select select,.select fieldset[disabled] select,fieldset[disabled] .file-cta,fieldset[disabled] .file-name,fieldset[disabled] .pagination-previous,fieldset[disabled] .pagination-next,fieldset[disabled] .pagination-link,fieldset[disabled] .pagination-ellipsis{cursor:not-allowed}.button,.file,.breadcrumb,.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis,.tabs,.is-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select:not(.is-multiple):not(.is-loading)::after,.navbar-link:not(.is-arrowless)::after{border:3px solid rgba(0,0,0,0);border-radius:2px;border-right:0;border-top:0;content:" ";display:block;height:0.625em;margin-top:-0.4375em;pointer-events:none;position:absolute;top:50%;transform:rotate(-45deg);transform-origin:center;width:0.625em}.box:not(:last-child),.content:not(:last-child),.notification:not(:last-child),.progress:not(:last-child),.table:not(:last-child),.table-container:not(:last-child),.title:not(:last-child),.subtitle:not(:last-child),.block:not(:last-child),.breadcrumb:not(:last-child),.level:not(:last-child),.message:not(:last-child),.pagination:not(:last-child),.tabs:not(:last-child){margin-bottom:1.5rem}.delete,.modal-close{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;background-color:rgba(10,10,10,0.2);border:none;border-radius:9999px;cursor:pointer;pointer-events:auto;display:inline-block;flex-grow:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px}.delete::before,.modal-close::before,.delete::after,.modal-close::after{background-color:#fff;content:"";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center}.delete::before,.modal-close::before{height:2px;width:50%}.delete::after,.modal-close::after{height:50%;width:2px}.delete:hover,.modal-close:hover,.delete:focus,.modal-close:focus{background-color:rgba(10,10,10,0.3)}.delete:active,.modal-close:active{background-color:rgba(10,10,10,0.4)}.is-small.delete,.is-small.modal-close{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.is-medium.delete,.is-medium.modal-close{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.is-large.delete,.is-large.modal-close{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.button.is-loading::after,.loader,.select.is-loading::after,.control.is-loading::after{animation:spinAround 500ms infinite linear;border:2px solid #dbdbdb;border-radius:9999px;border-right-color:transparent;border-top-color:transparent;content:"";display:block;height:1em;position:relative;width:1em}.image.is-square img,.image.is-square .has-ratio,.image.is-1by1 img,.image.is-1by1 .has-ratio,.image.is-5by4 img,.image.is-5by4 .has-ratio,.image.is-4by3 img,.image.is-4by3 .has-ratio,.image.is-3by2 img,.image.is-3by2 .has-ratio,.image.is-5by3 img,.image.is-5by3 .has-ratio,.image.is-16by9 img,.image.is-16by9 .has-ratio,.image.is-2by1 img,.image.is-2by1 .has-ratio,.image.is-3by1 img,.image.is-3by1 .has-ratio,.image.is-4by5 img,.image.is-4by5 .has-ratio,.image.is-3by4 img,.image.is-3by4 .has-ratio,.image.is-2by3 img,.image.is-2by3 .has-ratio,.image.is-3by5 img,.image.is-3by5 .has-ratio,.image.is-9by16 img,.image.is-9by16 .has-ratio,.image.is-1by2 img,.image.is-1by2 .has-ratio,.image.is-1by3 img,.image.is-1by3 .has-ratio,.modal,.modal-background,.is-overlay,.hero-video{bottom:0;left:0;position:absolute;right:0;top:0}.navbar-burger{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;color:currentColor;font-family:inherit;font-size:1em;margin:0;padding:0}/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}td:not([align]),th:not([align]){text-align:inherit}html{background-color:#fff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;text-size-adjust:100%}article,aside,figure,footer,header,hgroup,section{display:block}body,button,input,optgroup,select,textarea{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif}code,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:monospace}body{color:#4a4a4a;font-size:1em;font-weight:400;line-height:1.5}a{color:#4876ff;cursor:pointer;text-decoration:none}a strong{color:currentColor}a:hover{color:#363636}code{background-color:#f5f5f5;color:#da1039;font-size:.875em;font-weight:normal;padding:0.25em 0.5em 0.25em}hr{background-color:#f5f5f5;border:none;display:block;height:2px;margin:1.5rem 0}img{height:auto;max-width:100%}input[type="checkbox"],input[type="radio"]{vertical-align:baseline}small{font-size:.875em}span{font-style:inherit;font-weight:inherit}strong{color:#363636;font-weight:700}fieldset{border:none}pre{-webkit-overflow-scrolling:touch;background-color:#f5f5f5;color:#4a4a4a;font-size:.875em;overflow-x:auto;padding:1.25rem 1.5rem;white-space:pre;word-wrap:normal}pre code{background-color:transparent;color:currentColor;font-size:1em;padding:0}table td,table th{vertical-align:top}table td:not([align]),table th:not([align]){text-align:inherit}table th{color:#363636}@keyframes spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.box{background-color:#fff;border-radius:6px;box-shadow:0 0.5em 1em -0.125em rgba(10,10,10,0.1),0 0px 0 1px rgba(10,10,10,0.02);color:#4a4a4a;display:block;padding:1.25rem}a.box:hover,a.box:focus{box-shadow:0 0.5em 1em -0.125em rgba(10,10,10,0.1),0 0 0 1px #4876ff}a.box:active{box-shadow:inset 0 1px 2px rgba(10,10,10,0.2),0 0 0 1px #4876ff}.button{background-color:#fff;border-color:#dbdbdb;border-width:1px;color:#363636;cursor:pointer;justify-content:center;padding-bottom:calc(0.5em - 1px);padding-left:1em;padding-right:1em;padding-top:calc(0.5em - 1px);text-align:center;white-space:nowrap}.button strong{color:inherit}.button .icon,.button .icon.is-small,.button .icon.is-medium,.button .icon.is-large{height:1.5em;width:1.5em}.button .icon:first-child:not(:last-child){margin-left:calc(-0.5em - 1px);margin-right:.25em}.button .icon:last-child:not(:first-child){margin-left:.25em;margin-right:calc(-0.5em - 1px)}.button .icon:first-child:last-child{margin-left:calc(-0.5em - 1px);margin-right:calc(-0.5em - 1px)}.button:hover,.button.is-hovered{border-color:#b5b5b5;color:#363636}.button:focus,.button.is-focused{border-color:#485fc7;color:#363636}.button:focus:not(:active),.button.is-focused:not(:active){box-shadow:0 0 0 0.125em rgba(72,118,255,0.25)}.button:active,.button.is-active{border-color:#4a4a4a;color:#363636}.button.is-text{background-color:transparent;border-color:transparent;color:#4a4a4a;text-decoration:underline}.button.is-text:hover,.button.is-text.is-hovered,.button.is-text:focus,.button.is-text.is-focused{background-color:#f5f5f5;color:#363636}.button.is-text:active,.button.is-text.is-active{background-color:#e8e8e8;color:#363636}.button.is-text[disabled],fieldset[disabled] .button.is-text{background-color:transparent;border-color:transparent;box-shadow:none}.button.is-ghost{background:none;border-color:rgba(0,0,0,0);color:#4876ff;text-decoration:none}.button.is-ghost:hover,.button.is-ghost.is-hovered{color:#4876ff;text-decoration:underline}.button.is-white{background-color:#fff;border-color:transparent;color:#0a0a0a}.button.is-white:hover,.button.is-white.is-hovered{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.button.is-white:focus,.button.is-white.is-focused{border-color:transparent;color:#0a0a0a}.button.is-white:focus:not(:active),.button.is-white.is-focused:not(:active){box-shadow:0 0 0 0.125em rgba(255,255,255,0.25)}.button.is-white:active,.button.is-white.is-active{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.button.is-white[disabled],fieldset[disabled] .button.is-white{background-color:#fff;border-color:transparent;box-shadow:none}.button.is-white.is-inverted{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted:hover,.button.is-white.is-inverted.is-hovered{background-color:#000}.button.is-white.is-inverted[disabled],fieldset[disabled] .button.is-white.is-inverted{background-color:#0a0a0a;border-color:transparent;box-shadow:none;color:#fff}.button.is-white.is-loading::after{border-color:transparent transparent #0a0a0a #0a0a0a !important}.button.is-white.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-white.is-outlined:hover,.button.is-white.is-outlined.is-hovered,.button.is-white.is-outlined:focus,.button.is-white.is-outlined.is-focused{background-color:#fff;border-color:#fff;color:#0a0a0a}.button.is-white.is-outlined.is-loading::after{border-color:transparent transparent #fff #fff !important}.button.is-white.is-outlined.is-loading:hover::after,.button.is-white.is-outlined.is-loading.is-hovered::after,.button.is-white.is-outlined.is-loading:focus::after,.button.is-white.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #0a0a0a #0a0a0a !important}.button.is-white.is-outlined[disabled],fieldset[disabled] .button.is-white.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-white.is-inverted.is-outlined:hover,.button.is-white.is-inverted.is-outlined.is-hovered,.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined.is-focused{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-outlined.is-loading:hover::after,.button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-white.is-inverted.is-outlined.is-loading:focus::after,.button.is-white.is-inverted.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #fff #fff !important}.button.is-white.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black{background-color:#0a0a0a;border-color:transparent;color:#fff}.button.is-black:hover,.button.is-black.is-hovered{background-color:#040404;border-color:transparent;color:#fff}.button.is-black:focus,.button.is-black.is-focused{border-color:transparent;color:#fff}.button.is-black:focus:not(:active),.button.is-black.is-focused:not(:active){box-shadow:0 0 0 0.125em rgba(10,10,10,0.25)}.button.is-black:active,.button.is-black.is-active{background-color:#000;border-color:transparent;color:#fff}.button.is-black[disabled],fieldset[disabled] .button.is-black{background-color:#0a0a0a;border-color:transparent;box-shadow:none}.button.is-black.is-inverted{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted:hover,.button.is-black.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-black.is-inverted[disabled],fieldset[disabled] .button.is-black.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#0a0a0a}.button.is-black.is-loading::after{border-color:transparent transparent #fff #fff !important}.button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-black.is-outlined:hover,.button.is-black.is-outlined.is-hovered,.button.is-black.is-outlined:focus,.button.is-black.is-outlined.is-focused{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.button.is-black.is-outlined.is-loading::after{border-color:transparent transparent #0a0a0a #0a0a0a !important}.button.is-black.is-outlined.is-loading:hover::after,.button.is-black.is-outlined.is-loading.is-hovered::after,.button.is-black.is-outlined.is-loading:focus::after,.button.is-black.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #fff #fff !important}.button.is-black.is-outlined[disabled],fieldset[disabled] .button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-black.is-inverted.is-outlined:hover,.button.is-black.is-inverted.is-outlined.is-hovered,.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined.is-focused{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-outlined.is-loading:hover::after,.button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-black.is-inverted.is-outlined.is-loading:focus::after,.button.is-black.is-inverted.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #0a0a0a #0a0a0a !important}.button.is-black.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-light{background-color:#d2f9d6;border-color:transparent;color:rgba(0,0,0,0.7)}.button.is-light:hover,.button.is-light.is-hovered{background-color:#c7f8cc;border-color:transparent;color:rgba(0,0,0,0.7)}.button.is-light:focus,.button.is-light.is-focused{border-color:transparent;color:rgba(0,0,0,0.7)}.button.is-light:focus:not(:active),.button.is-light.is-focused:not(:active){box-shadow:0 0 0 0.125em rgba(210,249,214,0.25)}.button.is-light:active,.button.is-light.is-active{background-color:#bcf6c2;border-color:transparent;color:rgba(0,0,0,0.7)}.button.is-light[disabled],fieldset[disabled] .button.is-light{background-color:#d2f9d6;border-color:transparent;box-shadow:none}.button.is-light.is-inverted{background-color:rgba(0,0,0,0.7);color:#d2f9d6}.button.is-light.is-inverted:hover,.button.is-light.is-inverted.is-hovered{background-color:rgba(0,0,0,0.7)}.button.is-light.is-inverted[disabled],fieldset[disabled] .button.is-light.is-inverted{background-color:rgba(0,0,0,0.7);border-color:transparent;box-shadow:none;color:#d2f9d6}.button.is-light.is-loading::after{border-color:transparent transparent rgba(0,0,0,0.7) rgba(0,0,0,0.7) !important}.button.is-light.is-outlined{background-color:transparent;border-color:#d2f9d6;color:#d2f9d6}.button.is-light.is-outlined:hover,.button.is-light.is-outlined.is-hovered,.button.is-light.is-outlined:focus,.button.is-light.is-outlined.is-focused{background-color:#d2f9d6;border-color:#d2f9d6;color:rgba(0,0,0,0.7)}.button.is-light.is-outlined.is-loading::after{border-color:transparent transparent #d2f9d6 #d2f9d6 !important}.button.is-light.is-outlined.is-loading:hover::after,.button.is-light.is-outlined.is-loading.is-hovered::after,.button.is-light.is-outlined.is-loading:focus::after,.button.is-light.is-outlined.is-loading.is-focused::after{border-color:transparent transparent rgba(0,0,0,0.7) rgba(0,0,0,0.7) !important}.button.is-light.is-outlined[disabled],fieldset[disabled] .button.is-light.is-outlined{background-color:transparent;border-color:#d2f9d6;box-shadow:none;color:#d2f9d6}.button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,0.7);color:rgba(0,0,0,0.7)}.button.is-light.is-inverted.is-outlined:hover,.button.is-light.is-inverted.is-outlined.is-hovered,.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined.is-focused{background-color:rgba(0,0,0,0.7);color:#d2f9d6}.button.is-light.is-inverted.is-outlined.is-loading:hover::after,.button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-light.is-inverted.is-outlined.is-loading:focus::after,.button.is-light.is-inverted.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #d2f9d6 #d2f9d6 !important}.button.is-light.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,0.7);box-shadow:none;color:rgba(0,0,0,0.7)}.button.is-dark{background-color:#459558;border-color:transparent;color:#fff}.button.is-dark:hover,.button.is-dark.is-hovered{background-color:#418c53;border-color:transparent;color:#fff}.button.is-dark:focus,.button.is-dark.is-focused{border-color:transparent;color:#fff}.button.is-dark:focus:not(:active),.button.is-dark.is-focused:not(:active){box-shadow:0 0 0 0.125em rgba(69,149,88,0.25)}.button.is-dark:active,.button.is-dark.is-active{background-color:#3d844e;border-color:transparent;color:#fff}.button.is-dark[disabled],fieldset[disabled] .button.is-dark{background-color:#459558;border-color:transparent;box-shadow:none}.button.is-dark.is-inverted{background-color:#fff;color:#459558}.button.is-dark.is-inverted:hover,.button.is-dark.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-dark.is-inverted[disabled],fieldset[disabled] .button.is-dark.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#459558}.button.is-dark.is-loading::after{border-color:transparent transparent #fff #fff !important}.button.is-dark.is-outlined{background-color:transparent;border-color:#459558;color:#459558}.button.is-dark.is-outlined:hover,.button.is-dark.is-outlined.is-hovered,.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined.is-focused{background-color:#459558;border-color:#459558;color:#fff}.button.is-dark.is-outlined.is-loading::after{border-color:transparent transparent #459558 #459558 !important}.button.is-dark.is-outlined.is-loading:hover::after,.button.is-dark.is-outlined.is-loading.is-hovered::after,.button.is-dark.is-outlined.is-loading:focus::after,.button.is-dark.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #fff #fff !important}.button.is-dark.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-outlined{background-color:transparent;border-color:#459558;box-shadow:none;color:#459558}.button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-dark.is-inverted.is-outlined:hover,.button.is-dark.is-inverted.is-outlined.is-hovered,.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined.is-focused{background-color:#fff;color:#459558}.button.is-dark.is-inverted.is-outlined.is-loading:hover::after,.button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-dark.is-inverted.is-outlined.is-loading:focus::after,.button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #459558 #459558 !important}.button.is-dark.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-primary{background-color:#55be6f;border-color:transparent;color:#fff}.button.is-primary:hover,.button.is-primary.is-hovered{background-color:#4cba67;border-color:transparent;color:#fff}.button.is-primary:focus,.button.is-primary.is-focused{border-color:transparent;color:#fff}.button.is-primary:focus:not(:active),.button.is-primary.is-focused:not(:active){box-shadow:0 0 0 0.125em rgba(85,190,111,0.25)}.button.is-primary:active,.button.is-primary.is-active{background-color:#45b461;border-color:transparent;color:#fff}.button.is-primary[disabled],fieldset[disabled] .button.is-primary{background-color:#55be6f;border-color:transparent;box-shadow:none}.button.is-primary.is-inverted{background-color:#fff;color:#55be6f}.button.is-primary.is-inverted:hover,.button.is-primary.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-primary.is-inverted[disabled],fieldset[disabled] .button.is-primary.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#55be6f}.button.is-primary.is-loading::after{border-color:transparent transparent #fff #fff !important}.button.is-primary.is-outlined{background-color:transparent;border-color:#55be6f;color:#55be6f}.button.is-primary.is-outlined:hover,.button.is-primary.is-outlined.is-hovered,.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined.is-focused{background-color:#55be6f;border-color:#55be6f;color:#fff}.button.is-primary.is-outlined.is-loading::after{border-color:transparent transparent #55be6f #55be6f !important}.button.is-primary.is-outlined.is-loading:hover::after,.button.is-primary.is-outlined.is-loading.is-hovered::after,.button.is-primary.is-outlined.is-loading:focus::after,.button.is-primary.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #fff #fff !important}.button.is-primary.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-outlined{background-color:transparent;border-color:#55be6f;box-shadow:none;color:#55be6f}.button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-primary.is-inverted.is-outlined:hover,.button.is-primary.is-inverted.is-outlined.is-hovered,.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined.is-focused{background-color:#fff;color:#55be6f}.button.is-primary.is-inverted.is-outlined.is-loading:hover::after,.button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-primary.is-inverted.is-outlined.is-loading:focus::after,.button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #55be6f #55be6f !important}.button.is-primary.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-primary.is-light{background-color:#f0f9f2;color:#2f7a41}.button.is-primary.is-light:hover,.button.is-primary.is-light.is-hovered{background-color:#e7f6eb;border-color:transparent;color:#2f7a41}.button.is-primary.is-light:active,.button.is-primary.is-light.is-active{background-color:#def2e3;border-color:transparent;color:#2f7a41}.button.is-link{background-color:#4876ff;border-color:transparent;color:#fff}.button.is-link:hover,.button.is-link.is-hovered{background-color:#3b6cff;border-color:transparent;color:#fff}.button.is-link:focus,.button.is-link.is-focused{border-color:transparent;color:#fff}.button.is-link:focus:not(:active),.button.is-link.is-focused:not(:active){box-shadow:0 0 0 0.125em rgba(72,118,255,0.25)}.button.is-link:active,.button.is-link.is-active{background-color:#2f63ff;border-color:transparent;color:#fff}.button.is-link[disabled],fieldset[disabled] .button.is-link{background-color:#4876ff;border-color:transparent;box-shadow:none}.button.is-link.is-inverted{background-color:#fff;color:#4876ff}.button.is-link.is-inverted:hover,.button.is-link.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-link.is-inverted[disabled],fieldset[disabled] .button.is-link.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#4876ff}.button.is-link.is-loading::after{border-color:transparent transparent #fff #fff !important}.button.is-link.is-outlined{background-color:transparent;border-color:#4876ff;color:#4876ff}.button.is-link.is-outlined:hover,.button.is-link.is-outlined.is-hovered,.button.is-link.is-outlined:focus,.button.is-link.is-outlined.is-focused{background-color:#4876ff;border-color:#4876ff;color:#fff}.button.is-link.is-outlined.is-loading::after{border-color:transparent transparent #4876ff #4876ff !important}.button.is-link.is-outlined.is-loading:hover::after,.button.is-link.is-outlined.is-loading.is-hovered::after,.button.is-link.is-outlined.is-loading:focus::after,.button.is-link.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #fff #fff !important}.button.is-link.is-outlined[disabled],fieldset[disabled] .button.is-link.is-outlined{background-color:transparent;border-color:#4876ff;box-shadow:none;color:#4876ff}.button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-link.is-inverted.is-outlined:hover,.button.is-link.is-inverted.is-outlined.is-hovered,.button.is-link.is-inverted.is-outlined:focus,.button.is-link.is-inverted.is-outlined.is-focused{background-color:#fff;color:#4876ff}.button.is-link.is-inverted.is-outlined.is-loading:hover::after,.button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-link.is-inverted.is-outlined.is-loading:focus::after,.button.is-link.is-inverted.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #4876ff #4876ff !important}.button.is-link.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-link.is-light{background-color:#ebf0ff;color:#0037db}.button.is-link.is-light:hover,.button.is-link.is-light.is-hovered{background-color:#dee6ff;border-color:transparent;color:#0037db}.button.is-link.is-light:active,.button.is-link.is-light.is-active{background-color:#d1ddff;border-color:transparent;color:#0037db}.button.is-info{background-color:#f0f8ff;border-color:transparent;color:rgba(0,0,0,0.7)}.button.is-info:hover,.button.is-info.is-hovered{background-color:#e3f2ff;border-color:transparent;color:rgba(0,0,0,0.7)}.button.is-info:focus,.button.is-info.is-focused{border-color:transparent;color:rgba(0,0,0,0.7)}.button.is-info:focus:not(:active),.button.is-info.is-focused:not(:active){box-shadow:0 0 0 0.125em rgba(240,248,255,0.25)}.button.is-info:active,.button.is-info.is-active{background-color:#d7ecff;border-color:transparent;color:rgba(0,0,0,0.7)}.button.is-info[disabled],fieldset[disabled] .button.is-info{background-color:#f0f8ff;border-color:transparent;box-shadow:none}.button.is-info.is-inverted{background-color:rgba(0,0,0,0.7);color:#f0f8ff}.button.is-info.is-inverted:hover,.button.is-info.is-inverted.is-hovered{background-color:rgba(0,0,0,0.7)}.button.is-info.is-inverted[disabled],fieldset[disabled] .button.is-info.is-inverted{background-color:rgba(0,0,0,0.7);border-color:transparent;box-shadow:none;color:#f0f8ff}.button.is-info.is-loading::after{border-color:transparent transparent rgba(0,0,0,0.7) rgba(0,0,0,0.7) !important}.button.is-info.is-outlined{background-color:transparent;border-color:#f0f8ff;color:#f0f8ff}.button.is-info.is-outlined:hover,.button.is-info.is-outlined.is-hovered,.button.is-info.is-outlined:focus,.button.is-info.is-outlined.is-focused{background-color:#f0f8ff;border-color:#f0f8ff;color:rgba(0,0,0,0.7)}.button.is-info.is-outlined.is-loading::after{border-color:transparent transparent #f0f8ff #f0f8ff !important}.button.is-info.is-outlined.is-loading:hover::after,.button.is-info.is-outlined.is-loading.is-hovered::after,.button.is-info.is-outlined.is-loading:focus::after,.button.is-info.is-outlined.is-loading.is-focused::after{border-color:transparent transparent rgba(0,0,0,0.7) rgba(0,0,0,0.7) !important}.button.is-info.is-outlined[disabled],fieldset[disabled] .button.is-info.is-outlined{background-color:transparent;border-color:#f0f8ff;box-shadow:none;color:#f0f8ff}.button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,0.7);color:rgba(0,0,0,0.7)}.button.is-info.is-inverted.is-outlined:hover,.button.is-info.is-inverted.is-outlined.is-hovered,.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined.is-focused{background-color:rgba(0,0,0,0.7);color:#f0f8ff}.button.is-info.is-inverted.is-outlined.is-loading:hover::after,.button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-info.is-inverted.is-outlined.is-loading:focus::after,.button.is-info.is-inverted.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #f0f8ff #f0f8ff !important}.button.is-info.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,0.7);box-shadow:none;color:rgba(0,0,0,0.7)}.button.is-info.is-light{background-color:#f0f8ff;color:#004f94}.button.is-info.is-light:hover,.button.is-info.is-light.is-hovered{background-color:#e3f2ff;border-color:transparent;color:#004f94}.button.is-info.is-light:active,.button.is-info.is-light.is-active{background-color:#d7ecff;border-color:transparent;color:#004f94}.button.is-success{background-color:#48c78e;border-color:transparent;color:#fff}.button.is-success:hover,.button.is-success.is-hovered{background-color:#3ec487;border-color:transparent;color:#fff}.button.is-success:focus,.button.is-success.is-focused{border-color:transparent;color:#fff}.button.is-success:focus:not(:active),.button.is-success.is-focused:not(:active){box-shadow:0 0 0 0.125em rgba(72,199,142,0.25)}.button.is-success:active,.button.is-success.is-active{background-color:#3abb81;border-color:transparent;color:#fff}.button.is-success[disabled],fieldset[disabled] .button.is-success{background-color:#48c78e;border-color:transparent;box-shadow:none}.button.is-success.is-inverted{background-color:#fff;color:#48c78e}.button.is-success.is-inverted:hover,.button.is-success.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-success.is-inverted[disabled],fieldset[disabled] .button.is-success.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#48c78e}.button.is-success.is-loading::after{border-color:transparent transparent #fff #fff !important}.button.is-success.is-outlined{background-color:transparent;border-color:#48c78e;color:#48c78e}.button.is-success.is-outlined:hover,.button.is-success.is-outlined.is-hovered,.button.is-success.is-outlined:focus,.button.is-success.is-outlined.is-focused{background-color:#48c78e;border-color:#48c78e;color:#fff}.button.is-success.is-outlined.is-loading::after{border-color:transparent transparent #48c78e #48c78e !important}.button.is-success.is-outlined.is-loading:hover::after,.button.is-success.is-outlined.is-loading.is-hovered::after,.button.is-success.is-outlined.is-loading:focus::after,.button.is-success.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #fff #fff !important}.button.is-success.is-outlined[disabled],fieldset[disabled] .button.is-success.is-outlined{background-color:transparent;border-color:#48c78e;box-shadow:none;color:#48c78e}.button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-success.is-inverted.is-outlined:hover,.button.is-success.is-inverted.is-outlined.is-hovered,.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined.is-focused{background-color:#fff;color:#48c78e}.button.is-success.is-inverted.is-outlined.is-loading:hover::after,.button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-success.is-inverted.is-outlined.is-loading:focus::after,.button.is-success.is-inverted.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #48c78e #48c78e !important}.button.is-success.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-success.is-light{background-color:#effaf5;color:#257953}.button.is-success.is-light:hover,.button.is-success.is-light.is-hovered{background-color:#e6f7ef;border-color:transparent;color:#257953}.button.is-success.is-light:active,.button.is-success.is-light.is-active{background-color:#dcf4e9;border-color:transparent;color:#257953}.button.is-warning{background-color:#ffd975;border-color:transparent;color:rgba(0,0,0,0.7)}.button.is-warning:hover,.button.is-warning.is-hovered{background-color:#ffd568;border-color:transparent;color:rgba(0,0,0,0.7)}.button.is-warning:focus,.button.is-warning.is-focused{border-color:transparent;color:rgba(0,0,0,0.7)}.button.is-warning:focus:not(:active),.button.is-warning.is-focused:not(:active){box-shadow:0 0 0 0.125em rgba(255,217,117,0.25)}.button.is-warning:active,.button.is-warning.is-active{background-color:#ffd25c;border-color:transparent;color:rgba(0,0,0,0.7)}.button.is-warning[disabled],fieldset[disabled] .button.is-warning{background-color:#ffd975;border-color:transparent;box-shadow:none}.button.is-warning.is-inverted{background-color:rgba(0,0,0,0.7);color:#ffd975}.button.is-warning.is-inverted:hover,.button.is-warning.is-inverted.is-hovered{background-color:rgba(0,0,0,0.7)}.button.is-warning.is-inverted[disabled],fieldset[disabled] .button.is-warning.is-inverted{background-color:rgba(0,0,0,0.7);border-color:transparent;box-shadow:none;color:#ffd975}.button.is-warning.is-loading::after{border-color:transparent transparent rgba(0,0,0,0.7) rgba(0,0,0,0.7) !important}.button.is-warning.is-outlined{background-color:transparent;border-color:#ffd975;color:#ffd975}.button.is-warning.is-outlined:hover,.button.is-warning.is-outlined.is-hovered,.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined.is-focused{background-color:#ffd975;border-color:#ffd975;color:rgba(0,0,0,0.7)}.button.is-warning.is-outlined.is-loading::after{border-color:transparent transparent #ffd975 #ffd975 !important}.button.is-warning.is-outlined.is-loading:hover::after,.button.is-warning.is-outlined.is-loading.is-hovered::after,.button.is-warning.is-outlined.is-loading:focus::after,.button.is-warning.is-outlined.is-loading.is-focused::after{border-color:transparent transparent rgba(0,0,0,0.7) rgba(0,0,0,0.7) !important}.button.is-warning.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-outlined{background-color:transparent;border-color:#ffd975;box-shadow:none;color:#ffd975}.button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,0.7);color:rgba(0,0,0,0.7)}.button.is-warning.is-inverted.is-outlined:hover,.button.is-warning.is-inverted.is-outlined.is-hovered,.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined.is-focused{background-color:rgba(0,0,0,0.7);color:#ffd975}.button.is-warning.is-inverted.is-outlined.is-loading:hover::after,.button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-warning.is-inverted.is-outlined.is-loading:focus::after,.button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #ffd975 #ffd975 !important}.button.is-warning.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,0.7);box-shadow:none;color:rgba(0,0,0,0.7)}.button.is-warning.is-light{background-color:#fff9eb;color:#946b00}.button.is-warning.is-light:hover,.button.is-warning.is-light.is-hovered{background-color:#fff6de;border-color:transparent;color:#946b00}.button.is-warning.is-light:active,.button.is-warning.is-light.is-active{background-color:#fff2d1;border-color:transparent;color:#946b00}.button.is-danger{background-color:#f14668;border-color:transparent;color:#fff}.button.is-danger:hover,.button.is-danger.is-hovered{background-color:#f03a5f;border-color:transparent;color:#fff}.button.is-danger:focus,.button.is-danger.is-focused{border-color:transparent;color:#fff}.button.is-danger:focus:not(:active),.button.is-danger.is-focused:not(:active){box-shadow:0 0 0 0.125em rgba(241,70,104,0.25)}.button.is-danger:active,.button.is-danger.is-active{background-color:#ef2e55;border-color:transparent;color:#fff}.button.is-danger[disabled],fieldset[disabled] .button.is-danger{background-color:#f14668;border-color:transparent;box-shadow:none}.button.is-danger.is-inverted{background-color:#fff;color:#f14668}.button.is-danger.is-inverted:hover,.button.is-danger.is-inverted.is-hovered{background-color:#f2f2f2}.button.is-danger.is-inverted[disabled],fieldset[disabled] .button.is-danger.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#f14668}.button.is-danger.is-loading::after{border-color:transparent transparent #fff #fff !important}.button.is-danger.is-outlined{background-color:transparent;border-color:#f14668;color:#f14668}.button.is-danger.is-outlined:hover,.button.is-danger.is-outlined.is-hovered,.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined.is-focused{background-color:#f14668;border-color:#f14668;color:#fff}.button.is-danger.is-outlined.is-loading::after{border-color:transparent transparent #f14668 #f14668 !important}.button.is-danger.is-outlined.is-loading:hover::after,.button.is-danger.is-outlined.is-loading.is-hovered::after,.button.is-danger.is-outlined.is-loading:focus::after,.button.is-danger.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #fff #fff !important}.button.is-danger.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-outlined{background-color:transparent;border-color:#f14668;box-shadow:none;color:#f14668}.button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-danger.is-inverted.is-outlined:hover,.button.is-danger.is-inverted.is-outlined.is-hovered,.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined.is-focused{background-color:#fff;color:#f14668}.button.is-danger.is-inverted.is-outlined.is-loading:hover::after,.button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after,.button.is-danger.is-inverted.is-outlined.is-loading:focus::after,.button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after{border-color:transparent transparent #f14668 #f14668 !important}.button.is-danger.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-danger.is-light{background-color:#feecf0;color:#cc0f35}.button.is-danger.is-light:hover,.button.is-danger.is-light.is-hovered{background-color:#fde0e6;border-color:transparent;color:#cc0f35}.button.is-danger.is-light:active,.button.is-danger.is-light.is-active{background-color:#fcd4dc;border-color:transparent;color:#cc0f35}.button.is-small{font-size:.75rem}.button.is-small:not(.is-rounded){border-radius:2px}.button.is-normal{font-size:1rem}.button.is-medium{font-size:1.25rem}.button.is-large{font-size:1.5rem}.button[disabled],fieldset[disabled] .button{background-color:#fff;border-color:#dbdbdb;box-shadow:none;opacity:.5}.button.is-fullwidth{display:flex;width:100%}.button.is-loading{color:transparent !important;pointer-events:none}.button.is-loading::after{position:absolute;left:calc(50% - (1em * 0.5));top:calc(50% - (1em * 0.5));position:absolute !important}.button.is-static{background-color:#f5f5f5;border-color:#dbdbdb;color:#7a7a7a;box-shadow:none;pointer-events:none}.button.is-rounded{border-radius:9999px;padding-left:calc(1em + 0.25em);padding-right:calc(1em + 0.25em)}.buttons{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.buttons .button{margin-bottom:0.5rem}.buttons .button:not(:last-child):not(.is-fullwidth){margin-right:.5rem}.buttons:last-child{margin-bottom:-0.5rem}.buttons:not(:last-child){margin-bottom:1rem}.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large){font-size:.75rem}.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded){border-radius:2px}.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large){font-size:1.25rem}.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium){font-size:1.5rem}.buttons.has-addons .button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.buttons.has-addons .button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.buttons.has-addons .button:last-child{margin-right:0}.buttons.has-addons .button:hover,.buttons.has-addons .button.is-hovered{z-index:2}.buttons.has-addons .button:focus,.buttons.has-addons .button.is-focused,.buttons.has-addons .button:active,.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-selected{z-index:3}.buttons.has-addons .button:focus:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-selected:hover{z-index:4}.buttons.has-addons .button.is-expanded{flex-grow:1;flex-shrink:1}.buttons.is-centered{justify-content:center}.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth){margin-left:0.25rem;margin-right:0.25rem}.buttons.is-right{justify-content:flex-end}.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth){margin-left:0.25rem;margin-right:0.25rem}.container{flex-grow:1;margin:0 auto;position:relative;width:auto}.container.is-fluid{max-width:none !important;padding-left:32px;padding-right:32px;width:100%}@media screen and (min-width: 1024px){.container{max-width:960px}}@media screen and (max-width: 1215px){.container.is-widescreen:not(.is-max-desktop){max-width:1152px}}@media screen and (max-width: 1407px){.container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen){max-width:1344px}}@media screen and (min-width: 1216px){.container:not(.is-max-desktop){max-width:1152px}}@media screen and (min-width: 1408px){.container:not(.is-max-desktop):not(.is-max-widescreen){max-width:1344px}}.content li+li{margin-top:0.25em}.content p:not(:last-child),.content dl:not(:last-child),.content ol:not(:last-child),.content ul:not(:last-child),.content blockquote:not(:last-child),.content pre:not(:last-child),.content table:not(:last-child){margin-bottom:1em}.content h1,.content h2,.content h3,.content h4,.content h5,.content h6{color:#363636;font-weight:600;line-height:1.125}.content h1{font-size:2em;margin-bottom:0.5em}.content h1:not(:first-child){margin-top:1em}.content h2{font-size:1.75em;margin-bottom:0.5714em}.content h2:not(:first-child){margin-top:1.1428em}.content h3{font-size:1.5em;margin-bottom:0.6666em}.content h3:not(:first-child){margin-top:1.3333em}.content h4{font-size:1.25em;margin-bottom:0.8em}.content h5{font-size:1.125em;margin-bottom:0.8888em}.content h6{font-size:1em;margin-bottom:1em}.content blockquote{background-color:#f5f5f5;border-left:5px solid #dbdbdb;padding:1.25em 1.5em}.content ol{list-style-position:outside;margin-left:2em;margin-top:1em}.content ol:not([type]){list-style-type:decimal}.content ol:not([type]).is-lower-alpha{list-style-type:lower-alpha}.content ol:not([type]).is-lower-roman{list-style-type:lower-roman}.content ol:not([type]).is-upper-alpha{list-style-type:upper-alpha}.content ol:not([type]).is-upper-roman{list-style-type:upper-roman}.content ul{list-style:disc outside;margin-left:2em;margin-top:1em}.content ul ul{list-style-type:circle;margin-top:0.5em}.content ul ul ul{list-style-type:square}.content dd{margin-left:2em}.content figure{margin-left:2em;margin-right:2em;text-align:center}.content figure:not(:first-child){margin-top:2em}.content figure:not(:last-child){margin-bottom:2em}.content figure img{display:inline-block}.content figure figcaption{font-style:italic}.content pre{-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal}.content sup,.content sub{font-size:75%}.content table{width:100%}.content table td,.content table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:0.5em 0.75em;vertical-align:top}.content table th{color:#363636}.content table th:not([align]){text-align:inherit}.content table thead td,.content table thead th{border-width:0 0 2px;color:#363636}.content table tfoot td,.content table tfoot th{border-width:2px 0 0;color:#363636}.content table tbody tr:last-child td,.content table tbody tr:last-child th{border-bottom-width:0}.content .tabs li+li{margin-top:0}.content.is-small{font-size:.75rem}.content.is-normal{font-size:1rem}.content.is-medium{font-size:1.25rem}.content.is-large{font-size:1.5rem}.icon{align-items:center;display:inline-flex;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small{height:1rem;width:1rem}.icon.is-medium{height:2rem;width:2rem}.icon.is-large{height:3rem;width:3rem}.icon-text{align-items:flex-start;color:inherit;display:inline-flex;flex-wrap:wrap;line-height:1.5rem;vertical-align:top}.icon-text .icon{flex-grow:0;flex-shrink:0}.icon-text .icon:not(:last-child){margin-right:.25em}.icon-text .icon:not(:first-child){margin-left:.25em}div.icon-text{display:flex}.image{display:block;position:relative}.image img{display:block;height:auto;width:100%}.image img.is-rounded{border-radius:9999px}.image.is-fullwidth{width:100%}.image.is-square img,.image.is-square .has-ratio,.image.is-1by1 img,.image.is-1by1 .has-ratio,.image.is-5by4 img,.image.is-5by4 .has-ratio,.image.is-4by3 img,.image.is-4by3 .has-ratio,.image.is-3by2 img,.image.is-3by2 .has-ratio,.image.is-5by3 img,.image.is-5by3 .has-ratio,.image.is-16by9 img,.image.is-16by9 .has-ratio,.image.is-2by1 img,.image.is-2by1 .has-ratio,.image.is-3by1 img,.image.is-3by1 .has-ratio,.image.is-4by5 img,.image.is-4by5 .has-ratio,.image.is-3by4 img,.image.is-3by4 .has-ratio,.image.is-2by3 img,.image.is-2by3 .has-ratio,.image.is-3by5 img,.image.is-3by5 .has-ratio,.image.is-9by16 img,.image.is-9by16 .has-ratio,.image.is-1by2 img,.image.is-1by2 .has-ratio,.image.is-1by3 img,.image.is-1by3 .has-ratio{height:100%;width:100%}.image.is-square,.image.is-1by1{padding-top:100%}.image.is-5by4{padding-top:80%}.image.is-4by3{padding-top:75%}.image.is-3by2{padding-top:66.6666%}.image.is-5by3{padding-top:60%}.image.is-16by9{padding-top:56.25%}.image.is-2by1{padding-top:50%}.image.is-3by1{padding-top:33.3333%}.image.is-4by5{padding-top:125%}.image.is-3by4{padding-top:133.3333%}.image.is-2by3{padding-top:150%}.image.is-3by5{padding-top:166.6666%}.image.is-9by16{padding-top:177.7777%}.image.is-1by2{padding-top:200%}.image.is-1by3{padding-top:300%}.image.is-16x16{height:16px;width:16px}.image.is-24x24{height:24px;width:24px}.image.is-32x32{height:32px;width:32px}.image.is-48x48{height:48px;width:48px}.image.is-64x64{height:64px;width:64px}.image.is-96x96{height:96px;width:96px}.image.is-128x128{height:128px;width:128px}.notification{background-color:#f5f5f5;border-radius:4px;position:relative;padding:1.25rem 2.5rem 1.25rem 1.5rem}.notification a:not(.button):not(.dropdown-item){color:currentColor;text-decoration:underline}.notification strong{color:currentColor}.notification code,.notification pre{background:#fff}.notification pre code{background:transparent}.notification>.delete{right:.5rem;position:absolute;top:0.5rem}.notification .title,.notification .subtitle,.notification .content{color:currentColor}.notification.is-white{background-color:#fff;color:#0a0a0a}.notification.is-black{background-color:#0a0a0a;color:#fff}.notification.is-light{background-color:#d2f9d6;color:rgba(0,0,0,0.7)}.notification.is-dark{background-color:#459558;color:#fff}.notification.is-primary{background-color:#55be6f;color:#fff}.notification.is-primary.is-light{background-color:#f0f9f2;color:#2f7a41}.notification.is-link{background-color:#4876ff;color:#fff}.notification.is-link.is-light{background-color:#ebf0ff;color:#0037db}.notification.is-info{background-color:#f0f8ff;color:rgba(0,0,0,0.7)}.notification.is-info.is-light{background-color:#f0f8ff;color:#004f94}.notification.is-success{background-color:#48c78e;color:#fff}.notification.is-success.is-light{background-color:#effaf5;color:#257953}.notification.is-warning{background-color:#ffd975;color:rgba(0,0,0,0.7)}.notification.is-warning.is-light{background-color:#fff9eb;color:#946b00}.notification.is-danger{background-color:#f14668;color:#fff}.notification.is-danger.is-light{background-color:#feecf0;color:#cc0f35}.progress{-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:9999px;display:block;height:1rem;overflow:hidden;padding:0;width:100%}.progress::-webkit-progress-bar{background-color:#ededed}.progress::-webkit-progress-value{background-color:#4a4a4a}.progress::-moz-progress-bar{background-color:#4a4a4a}.progress::-ms-fill{background-color:#4a4a4a;border:none}.progress.is-white::-webkit-progress-value{background-color:#fff}.progress.is-white::-moz-progress-bar{background-color:#fff}.progress.is-white::-ms-fill{background-color:#fff}.progress.is-white:indeterminate{background-image:linear-gradient(to right, #fff 30%, #ededed 30%)}.progress.is-black::-webkit-progress-value{background-color:#0a0a0a}.progress.is-black::-moz-progress-bar{background-color:#0a0a0a}.progress.is-black::-ms-fill{background-color:#0a0a0a}.progress.is-black:indeterminate{background-image:linear-gradient(to right, #0a0a0a 30%, #ededed 30%)}.progress.is-light::-webkit-progress-value{background-color:#d2f9d6}.progress.is-light::-moz-progress-bar{background-color:#d2f9d6}.progress.is-light::-ms-fill{background-color:#d2f9d6}.progress.is-light:indeterminate{background-image:linear-gradient(to right, #d2f9d6 30%, #ededed 30%)}.progress.is-dark::-webkit-progress-value{background-color:#459558}.progress.is-dark::-moz-progress-bar{background-color:#459558}.progress.is-dark::-ms-fill{background-color:#459558}.progress.is-dark:indeterminate{background-image:linear-gradient(to right, #459558 30%, #ededed 30%)}.progress.is-primary::-webkit-progress-value{background-color:#55be6f}.progress.is-primary::-moz-progress-bar{background-color:#55be6f}.progress.is-primary::-ms-fill{background-color:#55be6f}.progress.is-primary:indeterminate{background-image:linear-gradient(to right, #55be6f 30%, #ededed 30%)}.progress.is-link::-webkit-progress-value{background-color:#4876ff}.progress.is-link::-moz-progress-bar{background-color:#4876ff}.progress.is-link::-ms-fill{background-color:#4876ff}.progress.is-link:indeterminate{background-image:linear-gradient(to right, #4876ff 30%, #ededed 30%)}.progress.is-info::-webkit-progress-value{background-color:#f0f8ff}.progress.is-info::-moz-progress-bar{background-color:#f0f8ff}.progress.is-info::-ms-fill{background-color:#f0f8ff}.progress.is-info:indeterminate{background-image:linear-gradient(to right, #f0f8ff 30%, #ededed 30%)}.progress.is-success::-webkit-progress-value{background-color:#48c78e}.progress.is-success::-moz-progress-bar{background-color:#48c78e}.progress.is-success::-ms-fill{background-color:#48c78e}.progress.is-success:indeterminate{background-image:linear-gradient(to right, #48c78e 30%, #ededed 30%)}.progress.is-warning::-webkit-progress-value{background-color:#ffd975}.progress.is-warning::-moz-progress-bar{background-color:#ffd975}.progress.is-warning::-ms-fill{background-color:#ffd975}.progress.is-warning:indeterminate{background-image:linear-gradient(to right, #ffd975 30%, #ededed 30%)}.progress.is-danger::-webkit-progress-value{background-color:#f14668}.progress.is-danger::-moz-progress-bar{background-color:#f14668}.progress.is-danger::-ms-fill{background-color:#f14668}.progress.is-danger:indeterminate{background-image:linear-gradient(to right, #f14668 30%, #ededed 30%)}.progress:indeterminate{animation-duration:1.5s;animation-iteration-count:infinite;animation-name:moveIndeterminate;animation-timing-function:linear;background-color:#ededed;background-image:linear-gradient(to right, #4a4a4a 30%, #ededed 30%);background-position:top left;background-repeat:no-repeat;background-size:150% 150%}.progress:indeterminate::-webkit-progress-bar{background-color:transparent}.progress:indeterminate::-moz-progress-bar{background-color:transparent}.progress:indeterminate::-ms-fill{animation-name:none}.progress.is-small{height:.75rem}.progress.is-medium{height:1.25rem}.progress.is-large{height:1.5rem}@keyframes moveIndeterminate{from{background-position:200% 0}to{background-position:-200% 0}}.table{background-color:#fff;color:#363636}.table td,.table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:0.5em 0.75em;vertical-align:top}.table td.is-white,.table th.is-white{background-color:#fff;border-color:#fff;color:#0a0a0a}.table td.is-black,.table th.is-black{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.table td.is-light,.table th.is-light{background-color:#d2f9d6;border-color:#d2f9d6;color:rgba(0,0,0,0.7)}.table td.is-dark,.table th.is-dark{background-color:#459558;border-color:#459558;color:#fff}.table td.is-primary,.table th.is-primary{background-color:#55be6f;border-color:#55be6f;color:#fff}.table td.is-link,.table th.is-link{background-color:#4876ff;border-color:#4876ff;color:#fff}.table td.is-info,.table th.is-info{background-color:#f0f8ff;border-color:#f0f8ff;color:rgba(0,0,0,0.7)}.table td.is-success,.table th.is-success{background-color:#48c78e;border-color:#48c78e;color:#fff}.table td.is-warning,.table th.is-warning{background-color:#ffd975;border-color:#ffd975;color:rgba(0,0,0,0.7)}.table td.is-danger,.table th.is-danger{background-color:#f14668;border-color:#f14668;color:#fff}.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}.table td.is-selected,.table th.is-selected{background-color:#55be6f;color:#fff}.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}.table td.is-vcentered,.table th.is-vcentered{vertical-align:middle}.table th{color:#363636}.table th:not([align]){text-align:inherit}.table tr.is-selected{background-color:#55be6f;color:#fff}.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}.table tr.is-selected td,.table tr.is-selected th{border-color:#fff;color:currentColor}.table thead{background-color:rgba(0,0,0,0)}.table thead td,.table thead th{border-width:0 0 2px;color:#363636}.table tfoot{background-color:rgba(0,0,0,0)}.table tfoot td,.table tfoot th{border-width:2px 0 0;color:#363636}.table tbody{background-color:rgba(0,0,0,0)}.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}.table.is-bordered td,.table.is-bordered th{border-width:1px}.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}.table.is-fullwidth{width:100%}.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even){background-color:#f5f5f5}.table.is-narrow td,.table.is-narrow th{padding:0.25em 0.5em}.table.is-striped tbody tr:not(.is-selected):nth-child(even){background-color:#fafafa}.table-container{-webkit-overflow-scrolling:touch;overflow:auto;overflow-y:hidden;max-width:100%}.tags{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.tags .tag{margin-bottom:0.5rem}.tags .tag:not(:last-child){margin-right:.5rem}.tags:last-child{margin-bottom:-0.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.are-medium .tag:not(.is-normal):not(.is-large){font-size:1rem}.tags.are-large .tag:not(.is-normal):not(.is-medium){font-size:1.25rem}.tags.is-centered{justify-content:center}.tags.is-centered .tag{margin-right:0.25rem;margin-left:0.25rem}.tags.is-right{justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:0.5rem}.tags.is-right .tag:not(:last-child){margin-right:0}.tags.has-addons .tag{margin-right:0}.tags.has-addons .tag:not(:first-child){margin-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.tags.has-addons .tag:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.tag:not(body){align-items:center;background-color:#f5f5f5;border-radius:4px;color:#4a4a4a;display:inline-flex;font-size:.75rem;height:2em;justify-content:center;line-height:1.5;padding-left:0.75em;padding-right:0.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:.25rem;margin-right:-.375rem}.tag:not(body).is-white{background-color:#fff;color:#0a0a0a}.tag:not(body).is-black{background-color:#0a0a0a;color:#fff}.tag:not(body).is-light{background-color:#d2f9d6;color:rgba(0,0,0,0.7)}.tag:not(body).is-dark{background-color:#459558;color:#fff}.tag:not(body).is-primary{background-color:#55be6f;color:#fff}.tag:not(body).is-primary.is-light{background-color:#f0f9f2;color:#2f7a41}.tag:not(body).is-link{background-color:#4876ff;color:#fff}.tag:not(body).is-link.is-light{background-color:#ebf0ff;color:#0037db}.tag:not(body).is-info{background-color:#f0f8ff;color:rgba(0,0,0,0.7)}.tag:not(body).is-info.is-light{background-color:#f0f8ff;color:#004f94}.tag:not(body).is-success{background-color:#48c78e;color:#fff}.tag:not(body).is-success.is-light{background-color:#effaf5;color:#257953}.tag:not(body).is-warning{background-color:#ffd975;color:rgba(0,0,0,0.7)}.tag:not(body).is-warning.is-light{background-color:#fff9eb;color:#946b00}.tag:not(body).is-danger{background-color:#f14668;color:#fff}.tag:not(body).is-danger.is-light{background-color:#feecf0;color:#cc0f35}.tag:not(body).is-normal{font-size:.75rem}.tag:not(body).is-medium{font-size:1rem}.tag:not(body).is-large{font-size:1.25rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-.375em;margin-right:.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-.375em;margin-right:-.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete::before,.tag:not(body).is-delete::after{background-color:currentColor;content:"";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center}.tag:not(body).is-delete::before{height:1px;width:50%}.tag:not(body).is-delete::after{height:50%;width:1px}.tag:not(body).is-delete:hover,.tag:not(body).is-delete:focus{background-color:#e8e8e8}.tag:not(body).is-delete:active{background-color:#dbdbdb}.tag:not(body).is-rounded{border-radius:9999px}a.tag:hover{text-decoration:underline}.title,.subtitle{word-break:break-word}.title em,.title span,.subtitle em,.subtitle span{font-weight:inherit}.title sub,.subtitle sub{font-size:.75em}.title sup,.subtitle sup{font-size:.75em}.title .tag,.subtitle .tag{vertical-align:middle}.title{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title strong{color:inherit;font-weight:inherit}.title:not(.is-spaced)+.subtitle{margin-top:-1.25rem}.title.is-1{font-size:3rem}.title.is-2{font-size:2.5rem}.title.is-3{font-size:2rem}.title.is-4{font-size:1.5rem}.title.is-5{font-size:1.25rem}.title.is-6{font-size:1rem}.title.is-7{font-size:.75rem}.subtitle{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle strong{color:#363636;font-weight:600}.subtitle:not(.is-spaced)+.title{margin-top:-1.25rem}.subtitle.is-1{font-size:3rem}.subtitle.is-2{font-size:2.5rem}.subtitle.is-3{font-size:2rem}.subtitle.is-4{font-size:1.5rem}.subtitle.is-5{font-size:1.25rem}.subtitle.is-6{font-size:1rem}.subtitle.is-7{font-size:.75rem}.heading{display:block;font-size:11px;letter-spacing:1px;margin-bottom:5px;text-transform:uppercase}.number{align-items:center;background-color:#f5f5f5;border-radius:9999px;display:inline-flex;font-size:1.25rem;height:2em;justify-content:center;margin-right:1.5rem;min-width:2.5em;padding:0.25rem 0.5rem;text-align:center;vertical-align:top}.input,.textarea,.select select{background-color:#fff;border-color:#dbdbdb;border-radius:4px;color:#363636}.input::-moz-placeholder,.textarea::-moz-placeholder,.select select::-moz-placeholder{color:#757575}.input::-webkit-input-placeholder,.textarea::-webkit-input-placeholder,.select select::-webkit-input-placeholder{color:#757575}.input:-moz-placeholder,.textarea:-moz-placeholder,.select select:-moz-placeholder{color:#757575}.input:-ms-input-placeholder,.textarea:-ms-input-placeholder,.select select:-ms-input-placeholder{color:#757575}.input:hover,.textarea:hover,.select select:hover,.is-hovered.input,.is-hovered.textarea,.select select.is-hovered{border-color:#b5b5b5}.input:focus,.textarea:focus,.select select:focus,.is-focused.input,.is-focused.textarea,.select select.is-focused,.input:active,.textarea:active,.select select:active,.is-active.input,.is-active.textarea,.select select.is-active{border-color:#4876ff;box-shadow:0 0 0 0.125em rgba(72,118,255,0.25)}.input[disabled],.textarea[disabled],.select select[disabled],fieldset[disabled] .input,fieldset[disabled] .textarea,fieldset[disabled] .select select,.select fieldset[disabled] select{background-color:#f5f5f5;border-color:#f5f5f5;box-shadow:none;color:#7a7a7a}.input[disabled]::-moz-placeholder,.textarea[disabled]::-moz-placeholder,.select select[disabled]::-moz-placeholder,fieldset[disabled] .input::-moz-placeholder,fieldset[disabled] .textarea::-moz-placeholder,fieldset[disabled] .select select::-moz-placeholder,.select fieldset[disabled] select::-moz-placeholder{color:#707070}.input[disabled]::-webkit-input-placeholder,.textarea[disabled]::-webkit-input-placeholder,.select select[disabled]::-webkit-input-placeholder,fieldset[disabled] .input::-webkit-input-placeholder,fieldset[disabled] .textarea::-webkit-input-placeholder,fieldset[disabled] .select select::-webkit-input-placeholder,.select fieldset[disabled] select::-webkit-input-placeholder{color:#707070}.input[disabled]:-moz-placeholder,.textarea[disabled]:-moz-placeholder,.select select[disabled]:-moz-placeholder,fieldset[disabled] .input:-moz-placeholder,fieldset[disabled] .textarea:-moz-placeholder,fieldset[disabled] .select select:-moz-placeholder,.select fieldset[disabled] select:-moz-placeholder{color:#707070}.input[disabled]:-ms-input-placeholder,.textarea[disabled]:-ms-input-placeholder,.select select[disabled]:-ms-input-placeholder,fieldset[disabled] .input:-ms-input-placeholder,fieldset[disabled] .textarea:-ms-input-placeholder,fieldset[disabled] .select select:-ms-input-placeholder,.select fieldset[disabled] select:-ms-input-placeholder{color:#707070}.input,.textarea{box-shadow:inset 0 0.0625em 0.125em rgba(10,10,10,0.05);max-width:100%;width:100%}.input[readonly],.textarea[readonly]{box-shadow:none}.is-white.input,.is-white.textarea{border-color:#fff}.is-white.input:focus,.is-white.textarea:focus,.is-white.is-focused.input,.is-white.is-focused.textarea,.is-white.input:active,.is-white.textarea:active,.is-white.is-active.input,.is-white.is-active.textarea{box-shadow:0 0 0 0.125em rgba(255,255,255,0.25)}.is-black.input,.is-black.textarea{border-color:#0a0a0a}.is-black.input:focus,.is-black.textarea:focus,.is-black.is-focused.input,.is-black.is-focused.textarea,.is-black.input:active,.is-black.textarea:active,.is-black.is-active.input,.is-black.is-active.textarea{box-shadow:0 0 0 0.125em rgba(10,10,10,0.25)}.is-light.input,.is-light.textarea{border-color:#d2f9d6}.is-light.input:focus,.is-light.textarea:focus,.is-light.is-focused.input,.is-light.is-focused.textarea,.is-light.input:active,.is-light.textarea:active,.is-light.is-active.input,.is-light.is-active.textarea{box-shadow:0 0 0 0.125em rgba(210,249,214,0.25)}.is-dark.input,.is-dark.textarea{border-color:#459558}.is-dark.input:focus,.is-dark.textarea:focus,.is-dark.is-focused.input,.is-dark.is-focused.textarea,.is-dark.input:active,.is-dark.textarea:active,.is-dark.is-active.input,.is-dark.is-active.textarea{box-shadow:0 0 0 0.125em rgba(69,149,88,0.25)}.is-primary.input,.is-primary.textarea{border-color:#55be6f}.is-primary.input:focus,.is-primary.textarea:focus,.is-primary.is-focused.input,.is-primary.is-focused.textarea,.is-primary.input:active,.is-primary.textarea:active,.is-primary.is-active.input,.is-primary.is-active.textarea{box-shadow:0 0 0 0.125em rgba(85,190,111,0.25)}.is-link.input,.is-link.textarea{border-color:#4876ff}.is-link.input:focus,.is-link.textarea:focus,.is-link.is-focused.input,.is-link.is-focused.textarea,.is-link.input:active,.is-link.textarea:active,.is-link.is-active.input,.is-link.is-active.textarea{box-shadow:0 0 0 0.125em rgba(72,118,255,0.25)}.is-info.input,.is-info.textarea{border-color:#f0f8ff}.is-info.input:focus,.is-info.textarea:focus,.is-info.is-focused.input,.is-info.is-focused.textarea,.is-info.input:active,.is-info.textarea:active,.is-info.is-active.input,.is-info.is-active.textarea{box-shadow:0 0 0 0.125em rgba(240,248,255,0.25)}.is-success.input,.is-success.textarea{border-color:#48c78e}.is-success.input:focus,.is-success.textarea:focus,.is-success.is-focused.input,.is-success.is-focused.textarea,.is-success.input:active,.is-success.textarea:active,.is-success.is-active.input,.is-success.is-active.textarea{box-shadow:0 0 0 0.125em rgba(72,199,142,0.25)}.is-warning.input,.is-warning.textarea{border-color:#ffd975}.is-warning.input:focus,.is-warning.textarea:focus,.is-warning.is-focused.input,.is-warning.is-focused.textarea,.is-warning.input:active,.is-warning.textarea:active,.is-warning.is-active.input,.is-warning.is-active.textarea{box-shadow:0 0 0 0.125em rgba(255,217,117,0.25)}.is-danger.input,.is-danger.textarea{border-color:#f14668}.is-danger.input:focus,.is-danger.textarea:focus,.is-danger.is-focused.input,.is-danger.is-focused.textarea,.is-danger.input:active,.is-danger.textarea:active,.is-danger.is-active.input,.is-danger.is-active.textarea{box-shadow:0 0 0 0.125em rgba(241,70,104,0.25)}.is-small.input,.is-small.textarea{border-radius:2px;font-size:.75rem}.is-medium.input,.is-medium.textarea{font-size:1.25rem}.is-large.input,.is-large.textarea{font-size:1.5rem}.is-fullwidth.input,.is-fullwidth.textarea{display:block;width:100%}.is-inline.input,.is-inline.textarea{display:inline;width:auto}.input.is-rounded{border-radius:9999px;padding-left:calc(calc(0.75em - 1px) + 0.375em);padding-right:calc(calc(0.75em - 1px) + 0.375em)}.input.is-static{background-color:transparent;border-color:transparent;box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:calc(0.75em - 1px);resize:vertical}.textarea:not([rows]){max-height:40em;min-height:8em}.textarea[rows]{height:initial}.textarea.has-fixed-size{resize:none}.checkbox,.radio{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.checkbox input,.radio input{cursor:pointer}.checkbox:hover,.radio:hover{color:#363636}.checkbox[disabled],.radio[disabled],fieldset[disabled] .checkbox,fieldset[disabled] .radio,.checkbox input[disabled],.radio input[disabled]{color:#7a7a7a;cursor:not-allowed}.radio+.radio{margin-left:.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:2.5em}.select:not(.is-multiple):not(.is-loading)::after{border-color:#4876ff;right:1.125em;z-index:4}.select.is-rounded select{border-radius:9999px;padding-left:1em}.select select{cursor:pointer;display:block;font-size:1em;max-width:100%;outline:none}.select select::-ms-expand{display:none}.select select[disabled]:hover,fieldset[disabled] .select select:hover{border-color:#f5f5f5}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:auto;padding:0}.select select[multiple] option{padding:0.5em 1em}.select:not(.is-multiple):not(.is-loading):hover::after{border-color:#363636}.select.is-white:not(:hover)::after{border-color:#fff}.select.is-white select{border-color:#fff}.select.is-white select:hover,.select.is-white select.is-hovered{border-color:#f2f2f2}.select.is-white select:focus,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select.is-active{box-shadow:0 0 0 0.125em rgba(255,255,255,0.25)}.select.is-black:not(:hover)::after{border-color:#0a0a0a}.select.is-black select{border-color:#0a0a0a}.select.is-black select:hover,.select.is-black select.is-hovered{border-color:#000}.select.is-black select:focus,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select.is-active{box-shadow:0 0 0 0.125em rgba(10,10,10,0.25)}.select.is-light:not(:hover)::after{border-color:#d2f9d6}.select.is-light select{border-color:#d2f9d6}.select.is-light select:hover,.select.is-light select.is-hovered{border-color:#bcf6c2}.select.is-light select:focus,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select.is-active{box-shadow:0 0 0 0.125em rgba(210,249,214,0.25)}.select.is-dark:not(:hover)::after{border-color:#459558}.select.is-dark select{border-color:#459558}.select.is-dark select:hover,.select.is-dark select.is-hovered{border-color:#3d844e}.select.is-dark select:focus,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select.is-active{box-shadow:0 0 0 0.125em rgba(69,149,88,0.25)}.select.is-primary:not(:hover)::after{border-color:#55be6f}.select.is-primary select{border-color:#55be6f}.select.is-primary select:hover,.select.is-primary select.is-hovered{border-color:#45b461}.select.is-primary select:focus,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select.is-active{box-shadow:0 0 0 0.125em rgba(85,190,111,0.25)}.select.is-link:not(:hover)::after{border-color:#4876ff}.select.is-link select{border-color:#4876ff}.select.is-link select:hover,.select.is-link select.is-hovered{border-color:#2f63ff}.select.is-link select:focus,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select.is-active{box-shadow:0 0 0 0.125em rgba(72,118,255,0.25)}.select.is-info:not(:hover)::after{border-color:#f0f8ff}.select.is-info select{border-color:#f0f8ff}.select.is-info select:hover,.select.is-info select.is-hovered{border-color:#d7ecff}.select.is-info select:focus,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select.is-active{box-shadow:0 0 0 0.125em rgba(240,248,255,0.25)}.select.is-success:not(:hover)::after{border-color:#48c78e}.select.is-success select{border-color:#48c78e}.select.is-success select:hover,.select.is-success select.is-hovered{border-color:#3abb81}.select.is-success select:focus,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select.is-active{box-shadow:0 0 0 0.125em rgba(72,199,142,0.25)}.select.is-warning:not(:hover)::after{border-color:#ffd975}.select.is-warning select{border-color:#ffd975}.select.is-warning select:hover,.select.is-warning select.is-hovered{border-color:#ffd25c}.select.is-warning select:focus,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select.is-active{box-shadow:0 0 0 0.125em rgba(255,217,117,0.25)}.select.is-danger:not(:hover)::after{border-color:#f14668}.select.is-danger select{border-color:#f14668}.select.is-danger select:hover,.select.is-danger select.is-hovered{border-color:#ef2e55}.select.is-danger select:focus,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select.is-active{box-shadow:0 0 0 0.125em rgba(241,70,104,0.25)}.select.is-small{border-radius:2px;font-size:.75rem}.select.is-medium{font-size:1.25rem}.select.is-large{font-size:1.5rem}.select.is-disabled::after{border-color:#7a7a7a}.select.is-fullwidth{width:100%}.select.is-fullwidth select{width:100%}.select.is-loading::after{margin-top:0;position:absolute;right:.625em;top:0.625em;transform:none}.select.is-loading.is-small:after{font-size:.75rem}.select.is-loading.is-medium:after{font-size:1.25rem}.select.is-loading.is-large:after{font-size:1.5rem}.file{align-items:stretch;display:flex;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#fff;border-color:transparent;color:#0a0a0a}.file.is-white:hover .file-cta,.file.is-white.is-hovered .file-cta{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.file.is-white:focus .file-cta,.file.is-white.is-focused .file-cta{border-color:transparent;box-shadow:0 0 0.5em rgba(255,255,255,0.25);color:#0a0a0a}.file.is-white:active .file-cta,.file.is-white.is-active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.file.is-black .file-cta{background-color:#0a0a0a;border-color:transparent;color:#fff}.file.is-black:hover .file-cta,.file.is-black.is-hovered .file-cta{background-color:#040404;border-color:transparent;color:#fff}.file.is-black:focus .file-cta,.file.is-black.is-focused .file-cta{border-color:transparent;box-shadow:0 0 0.5em rgba(10,10,10,0.25);color:#fff}.file.is-black:active .file-cta,.file.is-black.is-active .file-cta{background-color:#000;border-color:transparent;color:#fff}.file.is-light .file-cta{background-color:#d2f9d6;border-color:transparent;color:rgba(0,0,0,0.7)}.file.is-light:hover .file-cta,.file.is-light.is-hovered .file-cta{background-color:#c7f8cc;border-color:transparent;color:rgba(0,0,0,0.7)}.file.is-light:focus .file-cta,.file.is-light.is-focused .file-cta{border-color:transparent;box-shadow:0 0 0.5em rgba(210,249,214,0.25);color:rgba(0,0,0,0.7)}.file.is-light:active .file-cta,.file.is-light.is-active .file-cta{background-color:#bcf6c2;border-color:transparent;color:rgba(0,0,0,0.7)}.file.is-dark .file-cta{background-color:#459558;border-color:transparent;color:#fff}.file.is-dark:hover .file-cta,.file.is-dark.is-hovered .file-cta{background-color:#418c53;border-color:transparent;color:#fff}.file.is-dark:focus .file-cta,.file.is-dark.is-focused .file-cta{border-color:transparent;box-shadow:0 0 0.5em rgba(69,149,88,0.25);color:#fff}.file.is-dark:active .file-cta,.file.is-dark.is-active .file-cta{background-color:#3d844e;border-color:transparent;color:#fff}.file.is-primary .file-cta{background-color:#55be6f;border-color:transparent;color:#fff}.file.is-primary:hover .file-cta,.file.is-primary.is-hovered .file-cta{background-color:#4cba67;border-color:transparent;color:#fff}.file.is-primary:focus .file-cta,.file.is-primary.is-focused .file-cta{border-color:transparent;box-shadow:0 0 0.5em rgba(85,190,111,0.25);color:#fff}.file.is-primary:active .file-cta,.file.is-primary.is-active .file-cta{background-color:#45b461;border-color:transparent;color:#fff}.file.is-link .file-cta{background-color:#4876ff;border-color:transparent;color:#fff}.file.is-link:hover .file-cta,.file.is-link.is-hovered .file-cta{background-color:#3b6cff;border-color:transparent;color:#fff}.file.is-link:focus .file-cta,.file.is-link.is-focused .file-cta{border-color:transparent;box-shadow:0 0 0.5em rgba(72,118,255,0.25);color:#fff}.file.is-link:active .file-cta,.file.is-link.is-active .file-cta{background-color:#2f63ff;border-color:transparent;color:#fff}.file.is-info .file-cta{background-color:#f0f8ff;border-color:transparent;color:rgba(0,0,0,0.7)}.file.is-info:hover .file-cta,.file.is-info.is-hovered .file-cta{background-color:#e3f2ff;border-color:transparent;color:rgba(0,0,0,0.7)}.file.is-info:focus .file-cta,.file.is-info.is-focused .file-cta{border-color:transparent;box-shadow:0 0 0.5em rgba(240,248,255,0.25);color:rgba(0,0,0,0.7)}.file.is-info:active .file-cta,.file.is-info.is-active .file-cta{background-color:#d7ecff;border-color:transparent;color:rgba(0,0,0,0.7)}.file.is-success .file-cta{background-color:#48c78e;border-color:transparent;color:#fff}.file.is-success:hover .file-cta,.file.is-success.is-hovered .file-cta{background-color:#3ec487;border-color:transparent;color:#fff}.file.is-success:focus .file-cta,.file.is-success.is-focused .file-cta{border-color:transparent;box-shadow:0 0 0.5em rgba(72,199,142,0.25);color:#fff}.file.is-success:active .file-cta,.file.is-success.is-active .file-cta{background-color:#3abb81;border-color:transparent;color:#fff}.file.is-warning .file-cta{background-color:#ffd975;border-color:transparent;color:rgba(0,0,0,0.7)}.file.is-warning:hover .file-cta,.file.is-warning.is-hovered .file-cta{background-color:#ffd568;border-color:transparent;color:rgba(0,0,0,0.7)}.file.is-warning:focus .file-cta,.file.is-warning.is-focused .file-cta{border-color:transparent;box-shadow:0 0 0.5em rgba(255,217,117,0.25);color:rgba(0,0,0,0.7)}.file.is-warning:active .file-cta,.file.is-warning.is-active .file-cta{background-color:#ffd25c;border-color:transparent;color:rgba(0,0,0,0.7)}.file.is-danger .file-cta{background-color:#f14668;border-color:transparent;color:#fff}.file.is-danger:hover .file-cta,.file.is-danger.is-hovered .file-cta{background-color:#f03a5f;border-color:transparent;color:#fff}.file.is-danger:focus .file-cta,.file.is-danger.is-focused .file-cta{border-color:transparent;box-shadow:0 0 0.5em rgba(241,70,104,0.25);color:#fff}.file.is-danger:active .file-cta,.file.is-danger.is-active .file-cta{background-color:#ef2e55;border-color:transparent;color:#fff}.file.is-small{font-size:.75rem}.file.is-normal{font-size:1rem}.file.is-medium{font-size:1.25rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.5rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:4px}.file.has-name.is-empty .file-name{display:none}.file.is-boxed .file-label{flex-direction:column}.file.is-boxed .file-cta{flex-direction:column;height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}.file.is-centered{justify-content:center}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{flex-grow:1;max-width:none}.file.is-right{justify-content:flex-end}.file.is-right .file-cta{border-radius:0 4px 4px 0}.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;order:-1}.file-label{align-items:stretch;display:flex;cursor:pointer;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eee;color:#363636}.file-label:hover .file-name{border-color:#d5d5d5}.file-label:active .file-cta{background-color:#e8e8e8;color:#363636}.file-label:active .file-name{border-color:#cfcfcf}.file-input{height:100%;left:0;opacity:0;outline:none;position:absolute;top:0;width:100%}.file-cta,.file-name{border-color:#dbdbdb;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}.file-cta{background-color:#f5f5f5;color:#4a4a4a}.file-name{border-color:#dbdbdb;border-style:solid;border-width:1px 1px 1px 0;display:block;max-width:16em;overflow:hidden;text-align:inherit;text-overflow:ellipsis}.file-icon{align-items:center;display:flex;height:1em;justify-content:center;margin-right:.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#363636;display:block;font-size:1rem;font-weight:700}.label:not(:last-child){margin-bottom:0.5em}.label.is-small{font-size:.75rem}.label.is-medium{font-size:1.25rem}.label.is-large{font-size:1.5rem}.help{display:block;font-size:.75rem;margin-top:0.25rem}.help.is-white{color:#fff}.help.is-black{color:#0a0a0a}.help.is-light{color:#d2f9d6}.help.is-dark{color:#459558}.help.is-primary{color:#55be6f}.help.is-link{color:#4876ff}.help.is-info{color:#f0f8ff}.help.is-success{color:#48c78e}.help.is-warning{color:#ffd975}.help.is-danger{color:#f14668}.field:not(:last-child){margin-bottom:0.75rem}.field.has-addons{display:flex;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:not(:first-child):not(:last-child) .button,.field.has-addons .control:not(:first-child):not(:last-child) .input,.field.has-addons .control:not(:first-child):not(:last-child) .select select{border-radius:0}.field.has-addons .control:first-child:not(:only-child) .button,.field.has-addons .control:first-child:not(:only-child) .input,.field.has-addons .control:first-child:not(:only-child) .select select{border-bottom-right-radius:0;border-top-right-radius:0}.field.has-addons .control:last-child:not(:only-child) .button,.field.has-addons .control:last-child:not(:only-child) .input,.field.has-addons .control:last-child:not(:only-child) .select select{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .control .button:not([disabled]):hover,.field.has-addons .control .button:not([disabled]).is-hovered,.field.has-addons .control .input:not([disabled]):hover,.field.has-addons .control .input:not([disabled]).is-hovered,.field.has-addons .control .select select:not([disabled]):hover,.field.has-addons .control .select select:not([disabled]).is-hovered{z-index:2}.field.has-addons .control .button:not([disabled]):focus,.field.has-addons .control .button:not([disabled]).is-focused,.field.has-addons .control .button:not([disabled]):active,.field.has-addons .control .button:not([disabled]).is-active,.field.has-addons .control .input:not([disabled]):focus,.field.has-addons .control .input:not([disabled]).is-focused,.field.has-addons .control .input:not([disabled]):active,.field.has-addons .control .input:not([disabled]).is-active,.field.has-addons .control .select select:not([disabled]):focus,.field.has-addons .control .select select:not([disabled]).is-focused,.field.has-addons .control .select select:not([disabled]):active,.field.has-addons .control .select select:not([disabled]).is-active{z-index:3}.field.has-addons .control .button:not([disabled]):focus:hover,.field.has-addons .control .button:not([disabled]).is-focused:hover,.field.has-addons .control .button:not([disabled]):active:hover,.field.has-addons .control .button:not([disabled]).is-active:hover,.field.has-addons .control .input:not([disabled]):focus:hover,.field.has-addons .control .input:not([disabled]).is-focused:hover,.field.has-addons .control .input:not([disabled]):active:hover,.field.has-addons .control .input:not([disabled]).is-active:hover,.field.has-addons .control .select select:not([disabled]):focus:hover,.field.has-addons .control .select select:not([disabled]).is-focused:hover,.field.has-addons .control .select select:not([disabled]):active:hover,.field.has-addons .control .select select:not([disabled]).is-active:hover{z-index:4}.field.has-addons .control.is-expanded{flex-grow:1;flex-shrink:1}.field.has-addons.has-addons-centered{justify-content:center}.field.has-addons.has-addons-right{justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{flex-grow:1;flex-shrink:0}.field.is-grouped{display:flex;justify-content:flex-start}.field.is-grouped>.control{flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:.75rem}.field.is-grouped>.control.is-expanded{flex-grow:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{justify-content:center}.field.is-grouped.is-grouped-right{justify-content:flex-end}.field.is-grouped.is-grouped-multiline{flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:0.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-0.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media screen and (min-width: 769px), print{.field.is-horizontal{display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width: 768px){.field-label{margin-bottom:0.5rem}}@media screen and (min-width: 769px), print{.field-label{flex-basis:0;flex-grow:1;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:.75rem;padding-top:0.375em}.field-label.is-normal{padding-top:0.375em}.field-label.is-medium{font-size:1.25rem;padding-top:0.375em}.field-label.is-large{font-size:1.5rem;padding-top:0.375em}}.field-body .field .field{margin-bottom:0}@media screen and (min-width: 769px), print{.field-body{display:flex;flex-basis:0;flex-grow:5;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{flex-shrink:1}.field-body>.field:not(.is-narrow){flex-grow:1}.field-body>.field:not(:last-child){margin-right:.75rem}}.control{box-sizing:border-box;clear:both;font-size:1rem;position:relative;text-align:inherit}.control.has-icons-left .input:focus ~ .icon,.control.has-icons-left .select:focus ~ .icon,.control.has-icons-right .input:focus ~ .icon,.control.has-icons-right .select:focus ~ .icon{color:#4a4a4a}.control.has-icons-left .input.is-small ~ .icon,.control.has-icons-left .select.is-small ~ .icon,.control.has-icons-right .input.is-small ~ .icon,.control.has-icons-right .select.is-small ~ .icon{font-size:.75rem}.control.has-icons-left .input.is-medium ~ .icon,.control.has-icons-left .select.is-medium ~ .icon,.control.has-icons-right .input.is-medium ~ .icon,.control.has-icons-right .select.is-medium ~ .icon{font-size:1.25rem}.control.has-icons-left .input.is-large ~ .icon,.control.has-icons-left .select.is-large ~ .icon,.control.has-icons-right .input.is-large ~ .icon,.control.has-icons-right .select.is-large ~ .icon{font-size:1.5rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#dbdbdb;height:2.5em;pointer-events:none;position:absolute;top:0;width:2.5em;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select{padding-left:2.5em}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:2.5em}.control.has-icons-right .icon.is-right{right:0}.control.is-loading::after{position:absolute !important;right:.625em;top:0.625em;z-index:4}.control.is-loading.is-small:after{font-size:.75rem}.control.is-loading.is-medium:after{font-size:1.25rem}.control.is-loading.is-large:after{font-size:1.5rem}.breadcrumb{font-size:1rem;white-space:nowrap}.breadcrumb a{align-items:center;color:#4876ff;display:flex;justify-content:center;padding:0 .75em}.breadcrumb a:hover{color:#363636}.breadcrumb li{align-items:center;display:flex}.breadcrumb li:first-child a{padding-left:0}.breadcrumb li.is-active a{color:#363636;cursor:default;pointer-events:none}.breadcrumb li+li::before{color:#b5b5b5;content:"\\0002f"}.breadcrumb ul,.breadcrumb ol{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start}.breadcrumb .icon:first-child{margin-right:.5em}.breadcrumb .icon:last-child{margin-left:.5em}.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{justify-content:center}.breadcrumb.is-right ol,.breadcrumb.is-right ul{justify-content:flex-end}.breadcrumb.is-small{font-size:.75rem}.breadcrumb.is-medium{font-size:1.25rem}.breadcrumb.is-large{font-size:1.5rem}.breadcrumb.has-arrow-separator li+li::before{content:"\\02192"}.breadcrumb.has-bullet-separator li+li::before{content:"\\02022"}.breadcrumb.has-dot-separator li+li::before{content:"\\000b7"}.breadcrumb.has-succeeds-separator li+li::before{content:"\\0227B"}.card{background-color:#fff;border-radius:.25rem;box-shadow:0 0.5em 1em -0.125em rgba(10,10,10,0.1),0 0px 0 1px rgba(10,10,10,0.02);color:#4a4a4a;max-width:100%;position:relative}.card-header:first-child,.card-content:first-child,.card-footer:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-header:last-child,.card-content:last-child,.card-footer:last-child{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.card-header{background-color:rgba(0,0,0,0);align-items:stretch;box-shadow:0 0.125em 0.25em rgba(10,10,10,0.1);display:flex}.card-header-title{align-items:center;color:#363636;display:flex;flex-grow:1;font-weight:700;padding:0.75rem 1rem}.card-header-title.is-centered{justify-content:center}.card-header-icon{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;color:currentColor;font-family:inherit;font-size:1em;margin:0;padding:0;align-items:center;cursor:pointer;display:flex;justify-content:center;padding:0.75rem 1rem}.card-image{display:block;position:relative}.card-image:first-child img{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-image:last-child img{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.card-content{background-color:rgba(0,0,0,0);padding:1.5rem}.card-footer{background-color:rgba(0,0,0,0);border-top:1px solid #ededed;align-items:stretch;display:flex}.card-footer-item{align-items:center;display:flex;flex-basis:0;flex-grow:1;flex-shrink:0;justify-content:center;padding:.75rem}.card-footer-item:not(:last-child){border-right:1px solid #ededed}.card .media:not(:last-child){margin-bottom:1.5rem}.dropdown{display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:initial;top:auto}.dropdown-menu{display:none;left:0;min-width:12rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#fff;border-radius:4px;box-shadow:0 0.5em 1em -0.125em rgba(10,10,10,0.1),0 0px 0 1px rgba(10,10,10,0.02);padding-bottom:.5rem;padding-top:.5rem}.dropdown-item{color:#4a4a4a;display:block;font-size:0.875rem;line-height:1.5;padding:0.375rem 1rem;position:relative}a.dropdown-item,button.dropdown-item{padding-right:3rem;text-align:inherit;white-space:nowrap;width:100%}a.dropdown-item:hover,button.dropdown-item:hover{background-color:#f5f5f5;color:#0a0a0a}a.dropdown-item.is-active,button.dropdown-item.is-active{background-color:#4876ff;color:#fff}.dropdown-divider{background-color:#ededed;border:none;display:block;height:1px;margin:0.5rem 0}.level{align-items:center;justify-content:space-between}.level code{border-radius:4px}.level img{display:inline-block;vertical-align:top}.level.is-mobile{display:flex}.level.is-mobile .level-left,.level.is-mobile .level-right{display:flex}.level.is-mobile .level-left+.level-right{margin-top:0}.level.is-mobile .level-item:not(:last-child){margin-bottom:0;margin-right:.75rem}.level.is-mobile .level-item:not(.is-narrow){flex-grow:1}@media screen and (min-width: 769px), print{.level{display:flex}.level>.level-item:not(.is-narrow){flex-grow:1}}.level-item{align-items:center;display:flex;flex-basis:auto;flex-grow:0;flex-shrink:0;justify-content:center}.level-item .title,.level-item .subtitle{margin-bottom:0}@media screen and (max-width: 768px){.level-item:not(:last-child){margin-bottom:.75rem}}.level-left,.level-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.level-left .level-item.is-flexible,.level-right .level-item.is-flexible{flex-grow:1}@media screen and (min-width: 769px), print{.level-left .level-item:not(:last-child),.level-right .level-item:not(:last-child){margin-right:.75rem}}.level-left{align-items:center;justify-content:flex-start}@media screen and (max-width: 768px){.level-left+.level-right{margin-top:1.5rem}}@media screen and (min-width: 769px), print{.level-left{display:flex}}.level-right{align-items:center;justify-content:flex-end}@media screen and (min-width: 769px), print{.level-right{display:flex}}.media{align-items:flex-start;display:flex;text-align:inherit}.media .content:not(:last-child){margin-bottom:.75rem}.media .media{border-top:1px solid rgba(219,219,219,0.5);display:flex;padding-top:.75rem}.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}.media .media .media{padding-top:.5rem}.media .media .media+.media{margin-top:.5rem}.media+.media{border-top:1px solid rgba(219,219,219,0.5);margin-top:1rem;padding-top:1rem}.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}.media-left,.media-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.media-left{margin-right:1rem}.media-right{margin-left:1rem}.media-content{flex-basis:auto;flex-grow:1;flex-shrink:1;text-align:inherit}@media screen and (max-width: 768px){.media-content{overflow-x:auto}}.menu{font-size:1rem}.menu.is-small{font-size:.75rem}.menu.is-medium{font-size:1.25rem}.menu.is-large{font-size:1.5rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:#4a4a4a;display:block;padding:0.5em 0.75em}.menu-list a:hover{background-color:#f5f5f5;color:#363636}.menu-list a.is-active{background-color:#4876ff;color:#fff}.menu-list li ul{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label:not(:first-child){margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}.message{background-color:#f5f5f5;border-radius:4px;font-size:1rem}.message strong{color:currentColor}.message a:not(.button):not(.tag):not(.dropdown-item){color:currentColor;text-decoration:underline}.message.is-small{font-size:.75rem}.message.is-medium{font-size:1.25rem}.message.is-large{font-size:1.5rem}.message.is-white{background-color:#fff}.message.is-white .message-header{background-color:#fff;color:#0a0a0a}.message.is-white .message-body{border-color:#fff}.message.is-black{background-color:#fafafa}.message.is-black .message-header{background-color:#0a0a0a;color:#fff}.message.is-black .message-body{border-color:#0a0a0a}.message.is-light{background-color:#f6fef7}.message.is-light .message-header{background-color:#d2f9d6;color:rgba(0,0,0,0.7)}.message.is-light .message-body{border-color:#d2f9d6}.message.is-dark{background-color:#f8fcf9}.message.is-dark .message-header{background-color:#459558;color:#fff}.message.is-dark .message-body{border-color:#459558}.message.is-primary{background-color:#f0f9f2}.message.is-primary .message-header{background-color:#55be6f;color:#fff}.message.is-primary .message-body{border-color:#55be6f;color:#2f7a41}.message.is-link{background-color:#ebf0ff}.message.is-link .message-header{background-color:#4876ff;color:#fff}.message.is-link .message-body{border-color:#4876ff;color:#0037db}.message.is-info{background-color:#f0f8ff}.message.is-info .message-header{background-color:#f0f8ff;color:rgba(0,0,0,0.7)}.message.is-info .message-body{border-color:#f0f8ff;color:#004f94}.message.is-success{background-color:#effaf5}.message.is-success .message-header{background-color:#48c78e;color:#fff}.message.is-success .message-body{border-color:#48c78e;color:#257953}.message.is-warning{background-color:#fff9eb}.message.is-warning .message-header{background-color:#ffd975;color:rgba(0,0,0,0.7)}.message.is-warning .message-body{border-color:#ffd975;color:#946b00}.message.is-danger{background-color:#feecf0}.message.is-danger .message-header{background-color:#f14668;color:#fff}.message.is-danger .message-body{border-color:#f14668;color:#cc0f35}.message-header{align-items:center;background-color:#4a4a4a;border-radius:4px 4px 0 0;color:#fff;display:flex;font-weight:700;justify-content:space-between;line-height:1.25;padding:0.75em 1em;position:relative}.message-header .delete{flex-grow:0;flex-shrink:0;margin-left:.75em}.message-header+.message-body{border-width:0;border-top-left-radius:0;border-top-right-radius:0}.message-body{border-color:#dbdbdb;border-radius:4px;border-style:solid;border-width:0 0 0 4px;color:#4a4a4a;padding:1.25em 1.5em}.message-body code,.message-body pre{background-color:#fff}.message-body pre code{background-color:rgba(0,0,0,0)}.modal{align-items:center;display:none;flex-direction:column;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal.is-active{display:flex}.modal-background{background-color:rgba(10,10,10,0.86)}.modal-content,.modal-card{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media screen and (min-width: 769px){.modal-content,.modal-card{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{background:none;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-card{display:flex;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden;-ms-overflow-y:visible}.modal-card-head,.modal-card-foot{align-items:center;background-color:#f5f5f5;display:flex;flex-shrink:0;justify-content:flex-start;padding:20px;position:relative}.modal-card-head{border-bottom:1px solid #dbdbdb;border-top-left-radius:6px;border-top-right-radius:6px}.modal-card-title{color:#363636;flex-grow:1;flex-shrink:0;font-size:1.2rem;line-height:1}.modal-card-foot{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #dbdbdb}.modal-card-foot .button:not(:last-child){margin-right:.5em}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#fff;flex-grow:1;flex-shrink:1;overflow:auto;padding:20px}.navbar{background-color:#fff;min-height:2rem;position:relative;z-index:30}.navbar.is-white{background-color:#fff;color:#0a0a0a}.navbar.is-white .navbar-brand>.navbar-item,.navbar.is-white .navbar-brand .navbar-link{color:#0a0a0a}.navbar.is-white .navbar-brand>a.navbar-item:focus,.navbar.is-white .navbar-brand>a.navbar-item:hover,.navbar.is-white .navbar-brand>a.navbar-item.is-active,.navbar.is-white .navbar-brand .navbar-link:focus,.navbar.is-white .navbar-brand .navbar-link:hover,.navbar.is-white .navbar-brand .navbar-link.is-active{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link::after{border-color:#0a0a0a}.navbar.is-white .navbar-burger{color:#0a0a0a}@media screen and (min-width: 840px){.navbar.is-white .navbar-start>.navbar-item,.navbar.is-white .navbar-start .navbar-link,.navbar.is-white .navbar-end>.navbar-item,.navbar.is-white .navbar-end .navbar-link{color:#0a0a0a}.navbar.is-white .navbar-start>a.navbar-item:focus,.navbar.is-white .navbar-start>a.navbar-item:hover,.navbar.is-white .navbar-start>a.navbar-item.is-active,.navbar.is-white .navbar-start .navbar-link:focus,.navbar.is-white .navbar-start .navbar-link:hover,.navbar.is-white .navbar-start .navbar-link.is-active,.navbar.is-white .navbar-end>a.navbar-item:focus,.navbar.is-white .navbar-end>a.navbar-item:hover,.navbar.is-white .navbar-end>a.navbar-item.is-active,.navbar.is-white .navbar-end .navbar-link:focus,.navbar.is-white .navbar-end .navbar-link:hover,.navbar.is-white .navbar-end .navbar-link.is-active{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-start .navbar-link::after,.navbar.is-white .navbar-end .navbar-link::after{border-color:#0a0a0a}.navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-dropdown a.navbar-item.is-active{background-color:#fff;color:#0a0a0a}}.navbar.is-black{background-color:#0a0a0a;color:#fff}.navbar.is-black .navbar-brand>.navbar-item,.navbar.is-black .navbar-brand .navbar-link{color:#fff}.navbar.is-black .navbar-brand>a.navbar-item:focus,.navbar.is-black .navbar-brand>a.navbar-item:hover,.navbar.is-black .navbar-brand>a.navbar-item.is-active,.navbar.is-black .navbar-brand .navbar-link:focus,.navbar.is-black .navbar-brand .navbar-link:hover,.navbar.is-black .navbar-brand .navbar-link.is-active{background-color:#000;color:#fff}.navbar.is-black .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-black .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-black .navbar-start>.navbar-item,.navbar.is-black .navbar-start .navbar-link,.navbar.is-black .navbar-end>.navbar-item,.navbar.is-black .navbar-end .navbar-link{color:#fff}.navbar.is-black .navbar-start>a.navbar-item:focus,.navbar.is-black .navbar-start>a.navbar-item:hover,.navbar.is-black .navbar-start>a.navbar-item.is-active,.navbar.is-black .navbar-start .navbar-link:focus,.navbar.is-black .navbar-start .navbar-link:hover,.navbar.is-black .navbar-start .navbar-link.is-active,.navbar.is-black .navbar-end>a.navbar-item:focus,.navbar.is-black .navbar-end>a.navbar-item:hover,.navbar.is-black .navbar-end>a.navbar-item.is-active,.navbar.is-black .navbar-end .navbar-link:focus,.navbar.is-black .navbar-end .navbar-link:hover,.navbar.is-black .navbar-end .navbar-link.is-active{background-color:#000;color:#fff}.navbar.is-black .navbar-start .navbar-link::after,.navbar.is-black .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link{background-color:#000;color:#fff}.navbar.is-black .navbar-dropdown a.navbar-item.is-active{background-color:#0a0a0a;color:#fff}}.navbar.is-light{background-color:#d2f9d6;color:rgba(0,0,0,0.7)}.navbar.is-light .navbar-brand>.navbar-item,.navbar.is-light .navbar-brand .navbar-link{color:rgba(0,0,0,0.7)}.navbar.is-light .navbar-brand>a.navbar-item:focus,.navbar.is-light .navbar-brand>a.navbar-item:hover,.navbar.is-light .navbar-brand>a.navbar-item.is-active,.navbar.is-light .navbar-brand .navbar-link:focus,.navbar.is-light .navbar-brand .navbar-link:hover,.navbar.is-light .navbar-brand .navbar-link.is-active{background-color:#bcf6c2;color:rgba(0,0,0,0.7)}.navbar.is-light .navbar-brand .navbar-link::after{border-color:rgba(0,0,0,0.7)}.navbar.is-light .navbar-burger{color:rgba(0,0,0,0.7)}@media screen and (min-width: 840px){.navbar.is-light .navbar-start>.navbar-item,.navbar.is-light .navbar-start .navbar-link,.navbar.is-light .navbar-end>.navbar-item,.navbar.is-light .navbar-end .navbar-link{color:rgba(0,0,0,0.7)}.navbar.is-light .navbar-start>a.navbar-item:focus,.navbar.is-light .navbar-start>a.navbar-item:hover,.navbar.is-light .navbar-start>a.navbar-item.is-active,.navbar.is-light .navbar-start .navbar-link:focus,.navbar.is-light .navbar-start .navbar-link:hover,.navbar.is-light .navbar-start .navbar-link.is-active,.navbar.is-light .navbar-end>a.navbar-item:focus,.navbar.is-light .navbar-end>a.navbar-item:hover,.navbar.is-light .navbar-end>a.navbar-item.is-active,.navbar.is-light .navbar-end .navbar-link:focus,.navbar.is-light .navbar-end .navbar-link:hover,.navbar.is-light .navbar-end .navbar-link.is-active{background-color:#bcf6c2;color:rgba(0,0,0,0.7)}.navbar.is-light .navbar-start .navbar-link::after,.navbar.is-light .navbar-end .navbar-link::after{border-color:rgba(0,0,0,0.7)}.navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link{background-color:#bcf6c2;color:rgba(0,0,0,0.7)}.navbar.is-light .navbar-dropdown a.navbar-item.is-active{background-color:#d2f9d6;color:rgba(0,0,0,0.7)}}.navbar.is-dark{background-color:#459558;color:#fff}.navbar.is-dark .navbar-brand>.navbar-item,.navbar.is-dark .navbar-brand .navbar-link{color:#fff}.navbar.is-dark .navbar-brand>a.navbar-item:focus,.navbar.is-dark .navbar-brand>a.navbar-item:hover,.navbar.is-dark .navbar-brand>a.navbar-item.is-active,.navbar.is-dark .navbar-brand .navbar-link:focus,.navbar.is-dark .navbar-brand .navbar-link:hover,.navbar.is-dark .navbar-brand .navbar-link.is-active{background-color:#3d844e;color:#fff}.navbar.is-dark .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-dark .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-dark .navbar-start>.navbar-item,.navbar.is-dark .navbar-start .navbar-link,.navbar.is-dark .navbar-end>.navbar-item,.navbar.is-dark .navbar-end .navbar-link{color:#fff}.navbar.is-dark .navbar-start>a.navbar-item:focus,.navbar.is-dark .navbar-start>a.navbar-item:hover,.navbar.is-dark .navbar-start>a.navbar-item.is-active,.navbar.is-dark .navbar-start .navbar-link:focus,.navbar.is-dark .navbar-start .navbar-link:hover,.navbar.is-dark .navbar-start .navbar-link.is-active,.navbar.is-dark .navbar-end>a.navbar-item:focus,.navbar.is-dark .navbar-end>a.navbar-item:hover,.navbar.is-dark .navbar-end>a.navbar-item.is-active,.navbar.is-dark .navbar-end .navbar-link:focus,.navbar.is-dark .navbar-end .navbar-link:hover,.navbar.is-dark .navbar-end .navbar-link.is-active{background-color:#3d844e;color:#fff}.navbar.is-dark .navbar-start .navbar-link::after,.navbar.is-dark .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link{background-color:#3d844e;color:#fff}.navbar.is-dark .navbar-dropdown a.navbar-item.is-active{background-color:#459558;color:#fff}}.navbar.is-primary{background-color:#55be6f;color:#fff}.navbar.is-primary .navbar-brand>.navbar-item,.navbar.is-primary .navbar-brand .navbar-link{color:#fff}.navbar.is-primary .navbar-brand>a.navbar-item:focus,.navbar.is-primary .navbar-brand>a.navbar-item:hover,.navbar.is-primary .navbar-brand>a.navbar-item.is-active,.navbar.is-primary .navbar-brand .navbar-link:focus,.navbar.is-primary .navbar-brand .navbar-link:hover,.navbar.is-primary .navbar-brand .navbar-link.is-active{background-color:#45b461;color:#fff}.navbar.is-primary .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-primary .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-primary .navbar-start>.navbar-item,.navbar.is-primary .navbar-start .navbar-link,.navbar.is-primary .navbar-end>.navbar-item,.navbar.is-primary .navbar-end .navbar-link{color:#fff}.navbar.is-primary .navbar-start>a.navbar-item:focus,.navbar.is-primary .navbar-start>a.navbar-item:hover,.navbar.is-primary .navbar-start>a.navbar-item.is-active,.navbar.is-primary .navbar-start .navbar-link:focus,.navbar.is-primary .navbar-start .navbar-link:hover,.navbar.is-primary .navbar-start .navbar-link.is-active,.navbar.is-primary .navbar-end>a.navbar-item:focus,.navbar.is-primary .navbar-end>a.navbar-item:hover,.navbar.is-primary .navbar-end>a.navbar-item.is-active,.navbar.is-primary .navbar-end .navbar-link:focus,.navbar.is-primary .navbar-end .navbar-link:hover,.navbar.is-primary .navbar-end .navbar-link.is-active{background-color:#45b461;color:#fff}.navbar.is-primary .navbar-start .navbar-link::after,.navbar.is-primary .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link{background-color:#45b461;color:#fff}.navbar.is-primary .navbar-dropdown a.navbar-item.is-active{background-color:#55be6f;color:#fff}}.navbar.is-link{background-color:#4876ff;color:#fff}.navbar.is-link .navbar-brand>.navbar-item,.navbar.is-link .navbar-brand .navbar-link{color:#fff}.navbar.is-link .navbar-brand>a.navbar-item:focus,.navbar.is-link .navbar-brand>a.navbar-item:hover,.navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand .navbar-link:focus,.navbar.is-link .navbar-brand .navbar-link:hover,.navbar.is-link .navbar-brand .navbar-link.is-active{background-color:#2f63ff;color:#fff}.navbar.is-link .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-link .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-link .navbar-start>.navbar-item,.navbar.is-link .navbar-start .navbar-link,.navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-end .navbar-link{color:#fff}.navbar.is-link .navbar-start>a.navbar-item:focus,.navbar.is-link .navbar-start>a.navbar-item:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start .navbar-link:focus,.navbar.is-link .navbar-start .navbar-link:hover,.navbar.is-link .navbar-start .navbar-link.is-active,.navbar.is-link .navbar-end>a.navbar-item:focus,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end .navbar-link:focus,.navbar.is-link .navbar-end .navbar-link:hover,.navbar.is-link .navbar-end .navbar-link.is-active{background-color:#2f63ff;color:#fff}.navbar.is-link .navbar-start .navbar-link::after,.navbar.is-link .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link{background-color:#2f63ff;color:#fff}.navbar.is-link .navbar-dropdown a.navbar-item.is-active{background-color:#4876ff;color:#fff}}.navbar.is-info{background-color:#f0f8ff;color:rgba(0,0,0,0.7)}.navbar.is-info .navbar-brand>.navbar-item,.navbar.is-info .navbar-brand .navbar-link{color:rgba(0,0,0,0.7)}.navbar.is-info .navbar-brand>a.navbar-item:focus,.navbar.is-info .navbar-brand>a.navbar-item:hover,.navbar.is-info .navbar-brand>a.navbar-item.is-active,.navbar.is-info .navbar-brand .navbar-link:focus,.navbar.is-info .navbar-brand .navbar-link:hover,.navbar.is-info .navbar-brand .navbar-link.is-active{background-color:#d7ecff;color:rgba(0,0,0,0.7)}.navbar.is-info .navbar-brand .navbar-link::after{border-color:rgba(0,0,0,0.7)}.navbar.is-info .navbar-burger{color:rgba(0,0,0,0.7)}@media screen and (min-width: 840px){.navbar.is-info .navbar-start>.navbar-item,.navbar.is-info .navbar-start .navbar-link,.navbar.is-info .navbar-end>.navbar-item,.navbar.is-info .navbar-end .navbar-link{color:rgba(0,0,0,0.7)}.navbar.is-info .navbar-start>a.navbar-item:focus,.navbar.is-info .navbar-start>a.navbar-item:hover,.navbar.is-info .navbar-start>a.navbar-item.is-active,.navbar.is-info .navbar-start .navbar-link:focus,.navbar.is-info .navbar-start .navbar-link:hover,.navbar.is-info .navbar-start .navbar-link.is-active,.navbar.is-info .navbar-end>a.navbar-item:focus,.navbar.is-info .navbar-end>a.navbar-item:hover,.navbar.is-info .navbar-end>a.navbar-item.is-active,.navbar.is-info .navbar-end .navbar-link:focus,.navbar.is-info .navbar-end .navbar-link:hover,.navbar.is-info .navbar-end .navbar-link.is-active{background-color:#d7ecff;color:rgba(0,0,0,0.7)}.navbar.is-info .navbar-start .navbar-link::after,.navbar.is-info .navbar-end .navbar-link::after{border-color:rgba(0,0,0,0.7)}.navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link{background-color:#d7ecff;color:rgba(0,0,0,0.7)}.navbar.is-info .navbar-dropdown a.navbar-item.is-active{background-color:#f0f8ff;color:rgba(0,0,0,0.7)}}.navbar.is-success{background-color:#48c78e;color:#fff}.navbar.is-success .navbar-brand>.navbar-item,.navbar.is-success .navbar-brand .navbar-link{color:#fff}.navbar.is-success .navbar-brand>a.navbar-item:focus,.navbar.is-success .navbar-brand>a.navbar-item:hover,.navbar.is-success .navbar-brand>a.navbar-item.is-active,.navbar.is-success .navbar-brand .navbar-link:focus,.navbar.is-success .navbar-brand .navbar-link:hover,.navbar.is-success .navbar-brand .navbar-link.is-active{background-color:#3abb81;color:#fff}.navbar.is-success .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-success .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-success .navbar-start>.navbar-item,.navbar.is-success .navbar-start .navbar-link,.navbar.is-success .navbar-end>.navbar-item,.navbar.is-success .navbar-end .navbar-link{color:#fff}.navbar.is-success .navbar-start>a.navbar-item:focus,.navbar.is-success .navbar-start>a.navbar-item:hover,.navbar.is-success .navbar-start>a.navbar-item.is-active,.navbar.is-success .navbar-start .navbar-link:focus,.navbar.is-success .navbar-start .navbar-link:hover,.navbar.is-success .navbar-start .navbar-link.is-active,.navbar.is-success .navbar-end>a.navbar-item:focus,.navbar.is-success .navbar-end>a.navbar-item:hover,.navbar.is-success .navbar-end>a.navbar-item.is-active,.navbar.is-success .navbar-end .navbar-link:focus,.navbar.is-success .navbar-end .navbar-link:hover,.navbar.is-success .navbar-end .navbar-link.is-active{background-color:#3abb81;color:#fff}.navbar.is-success .navbar-start .navbar-link::after,.navbar.is-success .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link{background-color:#3abb81;color:#fff}.navbar.is-success .navbar-dropdown a.navbar-item.is-active{background-color:#48c78e;color:#fff}}.navbar.is-warning{background-color:#ffd975;color:rgba(0,0,0,0.7)}.navbar.is-warning .navbar-brand>.navbar-item,.navbar.is-warning .navbar-brand .navbar-link{color:rgba(0,0,0,0.7)}.navbar.is-warning .navbar-brand>a.navbar-item:focus,.navbar.is-warning .navbar-brand>a.navbar-item:hover,.navbar.is-warning .navbar-brand>a.navbar-item.is-active,.navbar.is-warning .navbar-brand .navbar-link:focus,.navbar.is-warning .navbar-brand .navbar-link:hover,.navbar.is-warning .navbar-brand .navbar-link.is-active{background-color:#ffd25c;color:rgba(0,0,0,0.7)}.navbar.is-warning .navbar-brand .navbar-link::after{border-color:rgba(0,0,0,0.7)}.navbar.is-warning .navbar-burger{color:rgba(0,0,0,0.7)}@media screen and (min-width: 840px){.navbar.is-warning .navbar-start>.navbar-item,.navbar.is-warning .navbar-start .navbar-link,.navbar.is-warning .navbar-end>.navbar-item,.navbar.is-warning .navbar-end .navbar-link{color:rgba(0,0,0,0.7)}.navbar.is-warning .navbar-start>a.navbar-item:focus,.navbar.is-warning .navbar-start>a.navbar-item:hover,.navbar.is-warning .navbar-start>a.navbar-item.is-active,.navbar.is-warning .navbar-start .navbar-link:focus,.navbar.is-warning .navbar-start .navbar-link:hover,.navbar.is-warning .navbar-start .navbar-link.is-active,.navbar.is-warning .navbar-end>a.navbar-item:focus,.navbar.is-warning .navbar-end>a.navbar-item:hover,.navbar.is-warning .navbar-end>a.navbar-item.is-active,.navbar.is-warning .navbar-end .navbar-link:focus,.navbar.is-warning .navbar-end .navbar-link:hover,.navbar.is-warning .navbar-end .navbar-link.is-active{background-color:#ffd25c;color:rgba(0,0,0,0.7)}.navbar.is-warning .navbar-start .navbar-link::after,.navbar.is-warning .navbar-end .navbar-link::after{border-color:rgba(0,0,0,0.7)}.navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link{background-color:#ffd25c;color:rgba(0,0,0,0.7)}.navbar.is-warning .navbar-dropdown a.navbar-item.is-active{background-color:#ffd975;color:rgba(0,0,0,0.7)}}.navbar.is-danger{background-color:#f14668;color:#fff}.navbar.is-danger .navbar-brand>.navbar-item,.navbar.is-danger .navbar-brand .navbar-link{color:#fff}.navbar.is-danger .navbar-brand>a.navbar-item:focus,.navbar.is-danger .navbar-brand>a.navbar-item:hover,.navbar.is-danger .navbar-brand>a.navbar-item.is-active,.navbar.is-danger .navbar-brand .navbar-link:focus,.navbar.is-danger .navbar-brand .navbar-link:hover,.navbar.is-danger .navbar-brand .navbar-link.is-active{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-brand .navbar-link::after{border-color:#fff}.navbar.is-danger .navbar-burger{color:#fff}@media screen and (min-width: 840px){.navbar.is-danger .navbar-start>.navbar-item,.navbar.is-danger .navbar-start .navbar-link,.navbar.is-danger .navbar-end>.navbar-item,.navbar.is-danger .navbar-end .navbar-link{color:#fff}.navbar.is-danger .navbar-start>a.navbar-item:focus,.navbar.is-danger .navbar-start>a.navbar-item:hover,.navbar.is-danger .navbar-start>a.navbar-item.is-active,.navbar.is-danger .navbar-start .navbar-link:focus,.navbar.is-danger .navbar-start .navbar-link:hover,.navbar.is-danger .navbar-start .navbar-link.is-active,.navbar.is-danger .navbar-end>a.navbar-item:focus,.navbar.is-danger .navbar-end>a.navbar-item:hover,.navbar.is-danger .navbar-end>a.navbar-item.is-active,.navbar.is-danger .navbar-end .navbar-link:focus,.navbar.is-danger .navbar-end .navbar-link:hover,.navbar.is-danger .navbar-end .navbar-link.is-active{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-start .navbar-link::after,.navbar.is-danger .navbar-end .navbar-link::after{border-color:#fff}.navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-dropdown a.navbar-item.is-active{background-color:#f14668;color:#fff}}.navbar>.container{align-items:stretch;display:flex;min-height:2rem;width:100%}.navbar.has-shadow{box-shadow:0 2px 0 0 #f5f5f5}.navbar.is-fixed-bottom,.navbar.is-fixed-top{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom{bottom:0}.navbar.is-fixed-bottom.has-shadow{box-shadow:0 -2px 0 0 #f5f5f5}.navbar.is-fixed-top{top:0}html.has-navbar-fixed-top,body.has-navbar-fixed-top{padding-top:2rem}html.has-navbar-fixed-bottom,body.has-navbar-fixed-bottom{padding-bottom:2rem}.navbar-brand,.navbar-tabs{align-items:stretch;display:flex;flex-shrink:0;min-height:2rem}.navbar-brand a.navbar-item:focus,.navbar-brand a.navbar-item:hover{background-color:transparent}.navbar-tabs{-webkit-overflow-scrolling:touch;max-width:100vw;overflow-x:auto;overflow-y:hidden}.navbar-burger{color:#4a4a4a;cursor:pointer;display:block;height:2rem;position:relative;width:2rem;margin-left:auto}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;transform-origin:center;transition-duration:86ms;transition-property:background-color, opacity, transform;transition-timing-function:ease-out;width:16px}.navbar-burger span:nth-child(1){top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger:hover{background-color:rgba(0,0,0,0.05)}.navbar-burger.is-active span:nth-child(1){transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){transform:translateY(-5px) rotate(-45deg)}.navbar-menu{display:none}.navbar-item,.navbar-link{color:#4a4a4a;display:block;line-height:1.5;padding:0.5rem 0.75rem;position:relative}.navbar-item .icon:only-child,.navbar-link .icon:only-child{margin-left:-0.25rem;margin-right:-0.25rem}a.navbar-item,.navbar-link{cursor:pointer}a.navbar-item:focus,a.navbar-item:focus-within,a.navbar-item:hover,a.navbar-item.is-active,.navbar-link:focus,.navbar-link:focus-within,.navbar-link:hover,.navbar-link.is-active{background-color:#fafafa;color:#4876ff}.navbar-item{flex-grow:0;flex-shrink:0}.navbar-item img{max-height:1.75rem}.navbar-item.has-dropdown{padding:0}.navbar-item.is-expanded{flex-grow:1;flex-shrink:1}.navbar-item.is-tab{border-bottom:1px solid transparent;min-height:2rem;padding-bottom:calc(0.5rem - 1px)}.navbar-item.is-tab:focus,.navbar-item.is-tab:hover{background-color:rgba(0,0,0,0);border-bottom-color:#4876ff}.navbar-item.is-tab.is-active{background-color:rgba(0,0,0,0);border-bottom-color:#4876ff;border-bottom-style:solid;border-bottom-width:3px;color:#4876ff;padding-bottom:calc(0.5rem - 3px)}.navbar-content{flex-grow:1;flex-shrink:1}.navbar-link:not(.is-arrowless){padding-right:2.5em}.navbar-link:not(.is-arrowless)::after{border-color:#4876ff;margin-top:-0.375em;right:1.125em}.navbar-dropdown{font-size:0.875rem;padding-bottom:0.5rem;padding-top:0.5rem}.navbar-dropdown .navbar-item{padding-left:1.5rem;padding-right:1.5rem}.navbar-divider{background-color:#f5f5f5;border:none;display:none;height:2px;margin:0.5rem 0}@media screen and (max-width: 839px){.navbar>.container{display:block}.navbar-brand .navbar-item,.navbar-tabs .navbar-item{align-items:center;display:flex}.navbar-link::after{display:none}.navbar-menu{background-color:#fff;box-shadow:0 8px 16px rgba(10,10,10,0.1);padding:0.5rem 0}.navbar-menu.is-active{display:block}.navbar.is-fixed-bottom-touch,.navbar.is-fixed-top-touch{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-touch{bottom:0}.navbar.is-fixed-bottom-touch.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,0.1)}.navbar.is-fixed-top-touch{top:0}.navbar.is-fixed-top .navbar-menu,.navbar.is-fixed-top-touch .navbar-menu{-webkit-overflow-scrolling:touch;max-height:calc(100vh - 2rem);overflow:auto}html.has-navbar-fixed-top-touch,body.has-navbar-fixed-top-touch{padding-top:2rem}html.has-navbar-fixed-bottom-touch,body.has-navbar-fixed-bottom-touch{padding-bottom:2rem}}@media screen and (min-width: 840px){.navbar,.navbar-menu,.navbar-start,.navbar-end{align-items:stretch;display:flex}.navbar{min-height:2rem}.navbar.is-spaced{padding:1rem 2rem}.navbar.is-spaced .navbar-start,.navbar.is-spaced .navbar-end{align-items:center}.navbar.is-spaced a.navbar-item,.navbar.is-spaced .navbar-link{border-radius:4px}.navbar.is-transparent a.navbar-item:focus,.navbar.is-transparent a.navbar-item:hover,.navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent .navbar-link:focus,.navbar.is-transparent .navbar-link:hover,.navbar.is-transparent .navbar-link.is-active{background-color:transparent !important}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link{background-color:transparent !important}.navbar.is-transparent .navbar-dropdown a.navbar-item:focus,.navbar.is-transparent .navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#4876ff}.navbar-burger{display:none}.navbar-item,.navbar-link{align-items:center;display:flex}.navbar-item.has-dropdown{align-items:stretch}.navbar-item.has-dropdown-up .navbar-link::after{transform:rotate(135deg) translate(0.25em, -0.25em)}.navbar-item.has-dropdown-up .navbar-dropdown{border-bottom:2px solid #dbdbdb;border-radius:6px 6px 0 0;border-top:none;bottom:100%;box-shadow:0 -8px 8px rgba(10,10,10,0.1);top:auto}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown{display:block}.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed{opacity:1;pointer-events:auto;transform:translateY(0)}.navbar-menu{flex-grow:1;flex-shrink:0}.navbar-start{justify-content:flex-start;margin-right:auto}.navbar-end{justify-content:flex-end;margin-left:auto}.navbar-dropdown{background-color:#fff;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:2px solid #dbdbdb;box-shadow:0 8px 8px rgba(10,10,10,0.1);display:none;font-size:0.875rem;left:0;min-width:100%;position:absolute;top:100%;z-index:20}.navbar-dropdown .navbar-item{padding:0.375rem 1rem;white-space:nowrap}.navbar-dropdown a.navbar-item{padding-right:3rem}.navbar-dropdown a.navbar-item:focus,.navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#4876ff}.navbar.is-spaced .navbar-dropdown,.navbar-dropdown.is-boxed{border-radius:6px;border-top:none;box-shadow:0 8px 8px rgba(10,10,10,0.1),0 0 0 1px rgba(10,10,10,0.1);display:block;opacity:0;pointer-events:none;top:calc(100% + (-4px));transform:translateY(-5px);transition-duration:86ms;transition-property:opacity, transform}.navbar-dropdown.is-right{left:auto;right:0}.navbar-divider{display:block}.navbar>.container .navbar-brand,.container>.navbar .navbar-brand{margin-left:-.75rem}.navbar>.container .navbar-menu,.container>.navbar .navbar-menu{margin-right:-.75rem}.navbar.is-fixed-bottom-desktop,.navbar.is-fixed-top-desktop{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-desktop{bottom:0}.navbar.is-fixed-bottom-desktop.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,0.1)}.navbar.is-fixed-top-desktop{top:0}html.has-navbar-fixed-top-desktop,body.has-navbar-fixed-top-desktop{padding-top:2rem}html.has-navbar-fixed-bottom-desktop,body.has-navbar-fixed-bottom-desktop{padding-bottom:2rem}html.has-spaced-navbar-fixed-top,body.has-spaced-navbar-fixed-top{padding-top:4rem}html.has-spaced-navbar-fixed-bottom,body.has-spaced-navbar-fixed-bottom{padding-bottom:4rem}a.navbar-item.is-active,.navbar-link.is-active{color:#0a0a0a}a.navbar-item.is-active:not(:focus):not(:hover),.navbar-link.is-active:not(:focus):not(:hover){background-color:rgba(0,0,0,0)}.navbar-item.has-dropdown:focus .navbar-link,.navbar-item.has-dropdown:hover .navbar-link,.navbar-item.has-dropdown.is-active .navbar-link{background-color:#fafafa}}.hero.is-fullheight-with-navbar{min-height:calc(100vh - 2rem)}.pagination{font-size:1rem;margin:-.25rem}.pagination.is-small{font-size:.75rem}.pagination.is-medium{font-size:1.25rem}.pagination.is-large{font-size:1.5rem}.pagination.is-rounded .pagination-previous,.pagination.is-rounded .pagination-next{padding-left:1em;padding-right:1em;border-radius:9999px}.pagination.is-rounded .pagination-link{border-radius:9999px}.pagination,.pagination-list{align-items:center;display:flex;justify-content:center;text-align:center}.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis{font-size:1em;justify-content:center;margin:.25rem;padding-left:.5em;padding-right:.5em;text-align:center}.pagination-previous,.pagination-next,.pagination-link{border-color:#dbdbdb;color:#363636;min-width:2.5em}.pagination-previous:hover,.pagination-next:hover,.pagination-link:hover{border-color:#b5b5b5;color:#363636}.pagination-previous:focus,.pagination-next:focus,.pagination-link:focus{border-color:#485fc7}.pagination-previous:active,.pagination-next:active,.pagination-link:active{box-shadow:inset 0 1px 2px rgba(10,10,10,0.2)}.pagination-previous[disabled],.pagination-next[disabled],.pagination-link[disabled]{background-color:#dbdbdb;border-color:#dbdbdb;box-shadow:none;color:#7a7a7a;opacity:0.5}.pagination-previous,.pagination-next{padding-left:.75em;padding-right:.75em;white-space:nowrap}.pagination-link.is-current{background-color:#4876ff;border-color:#4876ff;color:#fff}.pagination-ellipsis{color:#b5b5b5;pointer-events:none}.pagination-list{flex-wrap:wrap}.pagination-list li{list-style:none}@media screen and (max-width: 768px){.pagination{flex-wrap:wrap}.pagination-previous,.pagination-next{flex-grow:1;flex-shrink:1}.pagination-list li{flex-grow:1;flex-shrink:1}}@media screen and (min-width: 769px), print{.pagination-list{flex-grow:1;flex-shrink:1;justify-content:flex-start;order:1}.pagination-previous,.pagination-next,.pagination-link,.pagination-ellipsis{margin-bottom:0;margin-top:0}.pagination-previous{order:2}.pagination-next{order:3}.pagination{justify-content:space-between;margin-bottom:0;margin-top:0}.pagination.is-centered .pagination-previous{order:1}.pagination.is-centered .pagination-list{justify-content:center;order:2}.pagination.is-centered .pagination-next{order:3}.pagination.is-right .pagination-previous{order:1}.pagination.is-right .pagination-next{order:2}.pagination.is-right .pagination-list{justify-content:flex-end;order:3}}.panel{border-radius:6px;box-shadow:0 0.5em 1em -0.125em rgba(10,10,10,0.1),0 0px 0 1px rgba(10,10,10,0.02);font-size:1rem}.panel:not(:last-child){margin-bottom:1.5rem}.panel.is-white .panel-heading{background-color:#fff;color:#0a0a0a}.panel.is-white .panel-tabs a.is-active{border-bottom-color:#fff}.panel.is-white .panel-block.is-active .panel-icon{color:#fff}.panel.is-black .panel-heading{background-color:#0a0a0a;color:#fff}.panel.is-black .panel-tabs a.is-active{border-bottom-color:#0a0a0a}.panel.is-black .panel-block.is-active .panel-icon{color:#0a0a0a}.panel.is-light .panel-heading{background-color:#d2f9d6;color:rgba(0,0,0,0.7)}.panel.is-light .panel-tabs a.is-active{border-bottom-color:#d2f9d6}.panel.is-light .panel-block.is-active .panel-icon{color:#d2f9d6}.panel.is-dark .panel-heading{background-color:#459558;color:#fff}.panel.is-dark .panel-tabs a.is-active{border-bottom-color:#459558}.panel.is-dark .panel-block.is-active .panel-icon{color:#459558}.panel.is-primary .panel-heading{background-color:#55be6f;color:#fff}.panel.is-primary .panel-tabs a.is-active{border-bottom-color:#55be6f}.panel.is-primary .panel-block.is-active .panel-icon{color:#55be6f}.panel.is-link .panel-heading{background-color:#4876ff;color:#fff}.panel.is-link .panel-tabs a.is-active{border-bottom-color:#4876ff}.panel.is-link .panel-block.is-active .panel-icon{color:#4876ff}.panel.is-info .panel-heading{background-color:#f0f8ff;color:rgba(0,0,0,0.7)}.panel.is-info .panel-tabs a.is-active{border-bottom-color:#f0f8ff}.panel.is-info .panel-block.is-active .panel-icon{color:#f0f8ff}.panel.is-success .panel-heading{background-color:#48c78e;color:#fff}.panel.is-success .panel-tabs a.is-active{border-bottom-color:#48c78e}.panel.is-success .panel-block.is-active .panel-icon{color:#48c78e}.panel.is-warning .panel-heading{background-color:#ffd975;color:rgba(0,0,0,0.7)}.panel.is-warning .panel-tabs a.is-active{border-bottom-color:#ffd975}.panel.is-warning .panel-block.is-active .panel-icon{color:#ffd975}.panel.is-danger .panel-heading{background-color:#f14668;color:#fff}.panel.is-danger .panel-tabs a.is-active{border-bottom-color:#f14668}.panel.is-danger .panel-block.is-active .panel-icon{color:#f14668}.panel-tabs:not(:last-child),.panel-block:not(:last-child){border-bottom:1px solid #ededed}.panel-heading{background-color:#ededed;border-radius:6px 6px 0 0;color:#363636;font-size:1.25em;font-weight:700;line-height:1.25;padding:0.75em 1em}.panel-tabs{align-items:flex-end;display:flex;font-size:.875em;justify-content:center}.panel-tabs a{border-bottom:1px solid #dbdbdb;margin-bottom:-1px;padding:0.5em}.panel-tabs a.is-active{border-bottom-color:#4a4a4a;color:#363636}.panel-list a{color:#4a4a4a}.panel-list a:hover{color:#4876ff}.panel-block{align-items:center;color:#363636;display:flex;justify-content:flex-start;padding:0.5em 0.75em}.panel-block input[type="checkbox"]{margin-right:.75em}.panel-block>.control{flex-grow:1;flex-shrink:1;width:100%}.panel-block.is-wrapped{flex-wrap:wrap}.panel-block.is-active{border-left-color:#4876ff;color:#363636}.panel-block.is-active .panel-icon{color:#4876ff}.panel-block:last-child{border-bottom-left-radius:6px;border-bottom-right-radius:6px}a.panel-block,label.panel-block{cursor:pointer}a.panel-block:hover,label.panel-block:hover{background-color:#f5f5f5}.panel-icon{display:inline-block;font-size:14px;height:1em;line-height:1em;text-align:center;vertical-align:top;width:1em;color:#7a7a7a;margin-right:.75em}.panel-icon .fa{font-size:inherit;line-height:inherit}.tabs{-webkit-overflow-scrolling:touch;align-items:stretch;display:flex;font-size:1rem;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs a{align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;color:#4a4a4a;display:flex;justify-content:center;margin-bottom:-1px;padding:0.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:#363636;color:#363636}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:#4876ff;color:#4876ff}.tabs ul{align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;display:flex;flex-grow:1;flex-shrink:0;justify-content:flex-start}.tabs ul.is-left{padding-right:0.75em}.tabs ul.is-center{flex:none;justify-content:center;padding-left:0.75em;padding-right:0.75em}.tabs ul.is-right{justify-content:flex-end;padding-left:0.75em}.tabs .icon:first-child{margin-right:.5em}.tabs .icon:last-child{margin-left:.5em}.tabs.is-centered ul{justify-content:center}.tabs.is-right ul{justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f5;border-bottom-color:#dbdbdb}.tabs.is-boxed li.is-active a{background-color:#fff;border-color:#dbdbdb;border-bottom-color:rgba(0,0,0,0) !important}.tabs.is-fullwidth li{flex-grow:1;flex-shrink:0}.tabs.is-toggle a{border-color:#dbdbdb;border-style:solid;border-width:1px;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f5;border-color:#b5b5b5;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-top-left-radius:4px;border-bottom-left-radius:4px}.tabs.is-toggle li:last-child a{border-top-right-radius:4px;border-bottom-right-radius:4px}.tabs.is-toggle li.is-active a{background-color:#4876ff;border-color:#4876ff;color:#fff;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:9999px;border-top-left-radius:9999px;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:9999px;border-top-right-radius:9999px;padding-right:1.25em}.tabs.is-small{font-size:.75rem}.tabs.is-medium{font-size:1.25rem}.tabs.is-large{font-size:1.5rem}.column{display:block;flex-basis:0;flex-grow:1;flex-shrink:1;padding:.75rem}.columns.is-mobile>.column.is-narrow{flex:none;width:unset}.columns.is-mobile>.column.is-full{flex:none;width:100%}.columns.is-mobile>.column.is-three-quarters{flex:none;width:75%}.columns.is-mobile>.column.is-two-thirds{flex:none;width:66.6666%}.columns.is-mobile>.column.is-half{flex:none;width:50%}.columns.is-mobile>.column.is-one-third{flex:none;width:33.3333%}.columns.is-mobile>.column.is-one-quarter{flex:none;width:25%}.columns.is-mobile>.column.is-one-fifth{flex:none;width:20%}.columns.is-mobile>.column.is-two-fifths{flex:none;width:40%}.columns.is-mobile>.column.is-three-fifths{flex:none;width:60%}.columns.is-mobile>.column.is-four-fifths{flex:none;width:80%}.columns.is-mobile>.column.is-offset-three-quarters{margin-left:75%}.columns.is-mobile>.column.is-offset-two-thirds{margin-left:66.6666%}.columns.is-mobile>.column.is-offset-half{margin-left:50%}.columns.is-mobile>.column.is-offset-one-third{margin-left:33.3333%}.columns.is-mobile>.column.is-offset-one-quarter{margin-left:25%}.columns.is-mobile>.column.is-offset-one-fifth{margin-left:20%}.columns.is-mobile>.column.is-offset-two-fifths{margin-left:40%}.columns.is-mobile>.column.is-offset-three-fifths{margin-left:60%}.columns.is-mobile>.column.is-offset-four-fifths{margin-left:80%}.columns.is-mobile>.column.is-0{flex:none;width:0%}.columns.is-mobile>.column.is-offset-0{margin-left:0%}.columns.is-mobile>.column.is-1{flex:none;width:8.33333%}.columns.is-mobile>.column.is-offset-1{margin-left:8.33333%}.columns.is-mobile>.column.is-2{flex:none;width:16.66667%}.columns.is-mobile>.column.is-offset-2{margin-left:16.66667%}.columns.is-mobile>.column.is-3{flex:none;width:25%}.columns.is-mobile>.column.is-offset-3{margin-left:25%}.columns.is-mobile>.column.is-4{flex:none;width:33.33333%}.columns.is-mobile>.column.is-offset-4{margin-left:33.33333%}.columns.is-mobile>.column.is-5{flex:none;width:41.66667%}.columns.is-mobile>.column.is-offset-5{margin-left:41.66667%}.columns.is-mobile>.column.is-6{flex:none;width:50%}.columns.is-mobile>.column.is-offset-6{margin-left:50%}.columns.is-mobile>.column.is-7{flex:none;width:58.33333%}.columns.is-mobile>.column.is-offset-7{margin-left:58.33333%}.columns.is-mobile>.column.is-8{flex:none;width:66.66667%}.columns.is-mobile>.column.is-offset-8{margin-left:66.66667%}.columns.is-mobile>.column.is-9{flex:none;width:75%}.columns.is-mobile>.column.is-offset-9{margin-left:75%}.columns.is-mobile>.column.is-10{flex:none;width:83.33333%}.columns.is-mobile>.column.is-offset-10{margin-left:83.33333%}.columns.is-mobile>.column.is-11{flex:none;width:91.66667%}.columns.is-mobile>.column.is-offset-11{margin-left:91.66667%}.columns.is-mobile>.column.is-12{flex:none;width:100%}.columns.is-mobile>.column.is-offset-12{margin-left:100%}@media screen and (max-width: 768px){.column.is-narrow-mobile{flex:none;width:unset}.column.is-full-mobile{flex:none;width:100%}.column.is-three-quarters-mobile{flex:none;width:75%}.column.is-two-thirds-mobile{flex:none;width:66.6666%}.column.is-half-mobile{flex:none;width:50%}.column.is-one-third-mobile{flex:none;width:33.3333%}.column.is-one-quarter-mobile{flex:none;width:25%}.column.is-one-fifth-mobile{flex:none;width:20%}.column.is-two-fifths-mobile{flex:none;width:40%}.column.is-three-fifths-mobile{flex:none;width:60%}.column.is-four-fifths-mobile{flex:none;width:80%}.column.is-offset-three-quarters-mobile{margin-left:75%}.column.is-offset-two-thirds-mobile{margin-left:66.6666%}.column.is-offset-half-mobile{margin-left:50%}.column.is-offset-one-third-mobile{margin-left:33.3333%}.column.is-offset-one-quarter-mobile{margin-left:25%}.column.is-offset-one-fifth-mobile{margin-left:20%}.column.is-offset-two-fifths-mobile{margin-left:40%}.column.is-offset-three-fifths-mobile{margin-left:60%}.column.is-offset-four-fifths-mobile{margin-left:80%}.column.is-0-mobile{flex:none;width:0%}.column.is-offset-0-mobile{margin-left:0%}.column.is-1-mobile{flex:none;width:8.33333%}.column.is-offset-1-mobile{margin-left:8.33333%}.column.is-2-mobile{flex:none;width:16.66667%}.column.is-offset-2-mobile{margin-left:16.66667%}.column.is-3-mobile{flex:none;width:25%}.column.is-offset-3-mobile{margin-left:25%}.column.is-4-mobile{flex:none;width:33.33333%}.column.is-offset-4-mobile{margin-left:33.33333%}.column.is-5-mobile{flex:none;width:41.66667%}.column.is-offset-5-mobile{margin-left:41.66667%}.column.is-6-mobile{flex:none;width:50%}.column.is-offset-6-mobile{margin-left:50%}.column.is-7-mobile{flex:none;width:58.33333%}.column.is-offset-7-mobile{margin-left:58.33333%}.column.is-8-mobile{flex:none;width:66.66667%}.column.is-offset-8-mobile{margin-left:66.66667%}.column.is-9-mobile{flex:none;width:75%}.column.is-offset-9-mobile{margin-left:75%}.column.is-10-mobile{flex:none;width:83.33333%}.column.is-offset-10-mobile{margin-left:83.33333%}.column.is-11-mobile{flex:none;width:91.66667%}.column.is-offset-11-mobile{margin-left:91.66667%}.column.is-12-mobile{flex:none;width:100%}.column.is-offset-12-mobile{margin-left:100%}}@media screen and (min-width: 769px), print{.column.is-narrow,.column.is-narrow-tablet{flex:none;width:unset}.column.is-full,.column.is-full-tablet{flex:none;width:100%}.column.is-three-quarters,.column.is-three-quarters-tablet{flex:none;width:75%}.column.is-two-thirds,.column.is-two-thirds-tablet{flex:none;width:66.6666%}.column.is-half,.column.is-half-tablet{flex:none;width:50%}.column.is-one-third,.column.is-one-third-tablet{flex:none;width:33.3333%}.column.is-one-quarter,.column.is-one-quarter-tablet{flex:none;width:25%}.column.is-one-fifth,.column.is-one-fifth-tablet{flex:none;width:20%}.column.is-two-fifths,.column.is-two-fifths-tablet{flex:none;width:40%}.column.is-three-fifths,.column.is-three-fifths-tablet{flex:none;width:60%}.column.is-four-fifths,.column.is-four-fifths-tablet{flex:none;width:80%}.column.is-offset-three-quarters,.column.is-offset-three-quarters-tablet{margin-left:75%}.column.is-offset-two-thirds,.column.is-offset-two-thirds-tablet{margin-left:66.6666%}.column.is-offset-half,.column.is-offset-half-tablet{margin-left:50%}.column.is-offset-one-third,.column.is-offset-one-third-tablet{margin-left:33.3333%}.column.is-offset-one-quarter,.column.is-offset-one-quarter-tablet{margin-left:25%}.column.is-offset-one-fifth,.column.is-offset-one-fifth-tablet{margin-left:20%}.column.is-offset-two-fifths,.column.is-offset-two-fifths-tablet{margin-left:40%}.column.is-offset-three-fifths,.column.is-offset-three-fifths-tablet{margin-left:60%}.column.is-offset-four-fifths,.column.is-offset-four-fifths-tablet{margin-left:80%}.column.is-0,.column.is-0-tablet{flex:none;width:0%}.column.is-offset-0,.column.is-offset-0-tablet{margin-left:0%}.column.is-1,.column.is-1-tablet{flex:none;width:8.33333%}.column.is-offset-1,.column.is-offset-1-tablet{margin-left:8.33333%}.column.is-2,.column.is-2-tablet{flex:none;width:16.66667%}.column.is-offset-2,.column.is-offset-2-tablet{margin-left:16.66667%}.column.is-3,.column.is-3-tablet{flex:none;width:25%}.column.is-offset-3,.column.is-offset-3-tablet{margin-left:25%}.column.is-4,.column.is-4-tablet{flex:none;width:33.33333%}.column.is-offset-4,.column.is-offset-4-tablet{margin-left:33.33333%}.column.is-5,.column.is-5-tablet{flex:none;width:41.66667%}.column.is-offset-5,.column.is-offset-5-tablet{margin-left:41.66667%}.column.is-6,.column.is-6-tablet{flex:none;width:50%}.column.is-offset-6,.column.is-offset-6-tablet{margin-left:50%}.column.is-7,.column.is-7-tablet{flex:none;width:58.33333%}.column.is-offset-7,.column.is-offset-7-tablet{margin-left:58.33333%}.column.is-8,.column.is-8-tablet{flex:none;width:66.66667%}.column.is-offset-8,.column.is-offset-8-tablet{margin-left:66.66667%}.column.is-9,.column.is-9-tablet{flex:none;width:75%}.column.is-offset-9,.column.is-offset-9-tablet{margin-left:75%}.column.is-10,.column.is-10-tablet{flex:none;width:83.33333%}.column.is-offset-10,.column.is-offset-10-tablet{margin-left:83.33333%}.column.is-11,.column.is-11-tablet{flex:none;width:91.66667%}.column.is-offset-11,.column.is-offset-11-tablet{margin-left:91.66667%}.column.is-12,.column.is-12-tablet{flex:none;width:100%}.column.is-offset-12,.column.is-offset-12-tablet{margin-left:100%}}@media screen and (max-width: 1023px){.column.is-narrow-touch{flex:none;width:unset}.column.is-full-touch{flex:none;width:100%}.column.is-three-quarters-touch{flex:none;width:75%}.column.is-two-thirds-touch{flex:none;width:66.6666%}.column.is-half-touch{flex:none;width:50%}.column.is-one-third-touch{flex:none;width:33.3333%}.column.is-one-quarter-touch{flex:none;width:25%}.column.is-one-fifth-touch{flex:none;width:20%}.column.is-two-fifths-touch{flex:none;width:40%}.column.is-three-fifths-touch{flex:none;width:60%}.column.is-four-fifths-touch{flex:none;width:80%}.column.is-offset-three-quarters-touch{margin-left:75%}.column.is-offset-two-thirds-touch{margin-left:66.6666%}.column.is-offset-half-touch{margin-left:50%}.column.is-offset-one-third-touch{margin-left:33.3333%}.column.is-offset-one-quarter-touch{margin-left:25%}.column.is-offset-one-fifth-touch{margin-left:20%}.column.is-offset-two-fifths-touch{margin-left:40%}.column.is-offset-three-fifths-touch{margin-left:60%}.column.is-offset-four-fifths-touch{margin-left:80%}.column.is-0-touch{flex:none;width:0%}.column.is-offset-0-touch{margin-left:0%}.column.is-1-touch{flex:none;width:8.33333%}.column.is-offset-1-touch{margin-left:8.33333%}.column.is-2-touch{flex:none;width:16.66667%}.column.is-offset-2-touch{margin-left:16.66667%}.column.is-3-touch{flex:none;width:25%}.column.is-offset-3-touch{margin-left:25%}.column.is-4-touch{flex:none;width:33.33333%}.column.is-offset-4-touch{margin-left:33.33333%}.column.is-5-touch{flex:none;width:41.66667%}.column.is-offset-5-touch{margin-left:41.66667%}.column.is-6-touch{flex:none;width:50%}.column.is-offset-6-touch{margin-left:50%}.column.is-7-touch{flex:none;width:58.33333%}.column.is-offset-7-touch{margin-left:58.33333%}.column.is-8-touch{flex:none;width:66.66667%}.column.is-offset-8-touch{margin-left:66.66667%}.column.is-9-touch{flex:none;width:75%}.column.is-offset-9-touch{margin-left:75%}.column.is-10-touch{flex:none;width:83.33333%}.column.is-offset-10-touch{margin-left:83.33333%}.column.is-11-touch{flex:none;width:91.66667%}.column.is-offset-11-touch{margin-left:91.66667%}.column.is-12-touch{flex:none;width:100%}.column.is-offset-12-touch{margin-left:100%}}@media screen and (min-width: 1024px){.column.is-narrow-desktop{flex:none;width:unset}.column.is-full-desktop{flex:none;width:100%}.column.is-three-quarters-desktop{flex:none;width:75%}.column.is-two-thirds-desktop{flex:none;width:66.6666%}.column.is-half-desktop{flex:none;width:50%}.column.is-one-third-desktop{flex:none;width:33.3333%}.column.is-one-quarter-desktop{flex:none;width:25%}.column.is-one-fifth-desktop{flex:none;width:20%}.column.is-two-fifths-desktop{flex:none;width:40%}.column.is-three-fifths-desktop{flex:none;width:60%}.column.is-four-fifths-desktop{flex:none;width:80%}.column.is-offset-three-quarters-desktop{margin-left:75%}.column.is-offset-two-thirds-desktop{margin-left:66.6666%}.column.is-offset-half-desktop{margin-left:50%}.column.is-offset-one-third-desktop{margin-left:33.3333%}.column.is-offset-one-quarter-desktop{margin-left:25%}.column.is-offset-one-fifth-desktop{margin-left:20%}.column.is-offset-two-fifths-desktop{margin-left:40%}.column.is-offset-three-fifths-desktop{margin-left:60%}.column.is-offset-four-fifths-desktop{margin-left:80%}.column.is-0-desktop{flex:none;width:0%}.column.is-offset-0-desktop{margin-left:0%}.column.is-1-desktop{flex:none;width:8.33333%}.column.is-offset-1-desktop{margin-left:8.33333%}.column.is-2-desktop{flex:none;width:16.66667%}.column.is-offset-2-desktop{margin-left:16.66667%}.column.is-3-desktop{flex:none;width:25%}.column.is-offset-3-desktop{margin-left:25%}.column.is-4-desktop{flex:none;width:33.33333%}.column.is-offset-4-desktop{margin-left:33.33333%}.column.is-5-desktop{flex:none;width:41.66667%}.column.is-offset-5-desktop{margin-left:41.66667%}.column.is-6-desktop{flex:none;width:50%}.column.is-offset-6-desktop{margin-left:50%}.column.is-7-desktop{flex:none;width:58.33333%}.column.is-offset-7-desktop{margin-left:58.33333%}.column.is-8-desktop{flex:none;width:66.66667%}.column.is-offset-8-desktop{margin-left:66.66667%}.column.is-9-desktop{flex:none;width:75%}.column.is-offset-9-desktop{margin-left:75%}.column.is-10-desktop{flex:none;width:83.33333%}.column.is-offset-10-desktop{margin-left:83.33333%}.column.is-11-desktop{flex:none;width:91.66667%}.column.is-offset-11-desktop{margin-left:91.66667%}.column.is-12-desktop{flex:none;width:100%}.column.is-offset-12-desktop{margin-left:100%}}@media screen and (min-width: 1216px){.column.is-narrow-widescreen{flex:none;width:unset}.column.is-full-widescreen{flex:none;width:100%}.column.is-three-quarters-widescreen{flex:none;width:75%}.column.is-two-thirds-widescreen{flex:none;width:66.6666%}.column.is-half-widescreen{flex:none;width:50%}.column.is-one-third-widescreen{flex:none;width:33.3333%}.column.is-one-quarter-widescreen{flex:none;width:25%}.column.is-one-fifth-widescreen{flex:none;width:20%}.column.is-two-fifths-widescreen{flex:none;width:40%}.column.is-three-fifths-widescreen{flex:none;width:60%}.column.is-four-fifths-widescreen{flex:none;width:80%}.column.is-offset-three-quarters-widescreen{margin-left:75%}.column.is-offset-two-thirds-widescreen{margin-left:66.6666%}.column.is-offset-half-widescreen{margin-left:50%}.column.is-offset-one-third-widescreen{margin-left:33.3333%}.column.is-offset-one-quarter-widescreen{margin-left:25%}.column.is-offset-one-fifth-widescreen{margin-left:20%}.column.is-offset-two-fifths-widescreen{margin-left:40%}.column.is-offset-three-fifths-widescreen{margin-left:60%}.column.is-offset-four-fifths-widescreen{margin-left:80%}.column.is-0-widescreen{flex:none;width:0%}.column.is-offset-0-widescreen{margin-left:0%}.column.is-1-widescreen{flex:none;width:8.33333%}.column.is-offset-1-widescreen{margin-left:8.33333%}.column.is-2-widescreen{flex:none;width:16.66667%}.column.is-offset-2-widescreen{margin-left:16.66667%}.column.is-3-widescreen{flex:none;width:25%}.column.is-offset-3-widescreen{margin-left:25%}.column.is-4-widescreen{flex:none;width:33.33333%}.column.is-offset-4-widescreen{margin-left:33.33333%}.column.is-5-widescreen{flex:none;width:41.66667%}.column.is-offset-5-widescreen{margin-left:41.66667%}.column.is-6-widescreen{flex:none;width:50%}.column.is-offset-6-widescreen{margin-left:50%}.column.is-7-widescreen{flex:none;width:58.33333%}.column.is-offset-7-widescreen{margin-left:58.33333%}.column.is-8-widescreen{flex:none;width:66.66667%}.column.is-offset-8-widescreen{margin-left:66.66667%}.column.is-9-widescreen{flex:none;width:75%}.column.is-offset-9-widescreen{margin-left:75%}.column.is-10-widescreen{flex:none;width:83.33333%}.column.is-offset-10-widescreen{margin-left:83.33333%}.column.is-11-widescreen{flex:none;width:91.66667%}.column.is-offset-11-widescreen{margin-left:91.66667%}.column.is-12-widescreen{flex:none;width:100%}.column.is-offset-12-widescreen{margin-left:100%}}@media screen and (min-width: 1408px){.column.is-narrow-fullhd{flex:none;width:unset}.column.is-full-fullhd{flex:none;width:100%}.column.is-three-quarters-fullhd{flex:none;width:75%}.column.is-two-thirds-fullhd{flex:none;width:66.6666%}.column.is-half-fullhd{flex:none;width:50%}.column.is-one-third-fullhd{flex:none;width:33.3333%}.column.is-one-quarter-fullhd{flex:none;width:25%}.column.is-one-fifth-fullhd{flex:none;width:20%}.column.is-two-fifths-fullhd{flex:none;width:40%}.column.is-three-fifths-fullhd{flex:none;width:60%}.column.is-four-fifths-fullhd{flex:none;width:80%}.column.is-offset-three-quarters-fullhd{margin-left:75%}.column.is-offset-two-thirds-fullhd{margin-left:66.6666%}.column.is-offset-half-fullhd{margin-left:50%}.column.is-offset-one-third-fullhd{margin-left:33.3333%}.column.is-offset-one-quarter-fullhd{margin-left:25%}.column.is-offset-one-fifth-fullhd{margin-left:20%}.column.is-offset-two-fifths-fullhd{margin-left:40%}.column.is-offset-three-fifths-fullhd{margin-left:60%}.column.is-offset-four-fifths-fullhd{margin-left:80%}.column.is-0-fullhd{flex:none;width:0%}.column.is-offset-0-fullhd{margin-left:0%}.column.is-1-fullhd{flex:none;width:8.33333%}.column.is-offset-1-fullhd{margin-left:8.33333%}.column.is-2-fullhd{flex:none;width:16.66667%}.column.is-offset-2-fullhd{margin-left:16.66667%}.column.is-3-fullhd{flex:none;width:25%}.column.is-offset-3-fullhd{margin-left:25%}.column.is-4-fullhd{flex:none;width:33.33333%}.column.is-offset-4-fullhd{margin-left:33.33333%}.column.is-5-fullhd{flex:none;width:41.66667%}.column.is-offset-5-fullhd{margin-left:41.66667%}.column.is-6-fullhd{flex:none;width:50%}.column.is-offset-6-fullhd{margin-left:50%}.column.is-7-fullhd{flex:none;width:58.33333%}.column.is-offset-7-fullhd{margin-left:58.33333%}.column.is-8-fullhd{flex:none;width:66.66667%}.column.is-offset-8-fullhd{margin-left:66.66667%}.column.is-9-fullhd{flex:none;width:75%}.column.is-offset-9-fullhd{margin-left:75%}.column.is-10-fullhd{flex:none;width:83.33333%}.column.is-offset-10-fullhd{margin-left:83.33333%}.column.is-11-fullhd{flex:none;width:91.66667%}.column.is-offset-11-fullhd{margin-left:91.66667%}.column.is-12-fullhd{flex:none;width:100%}.column.is-offset-12-fullhd{margin-left:100%}}.columns{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.columns:last-child{margin-bottom:-.75rem}.columns:not(:last-child){margin-bottom:calc(1.5rem - .75rem)}.columns.is-centered{justify-content:center}.columns.is-gapless{margin-left:0;margin-right:0;margin-top:0}.columns.is-gapless>.column{margin:0;padding:0 !important}.columns.is-gapless:not(:last-child){margin-bottom:1.5rem}.columns.is-gapless:last-child{margin-bottom:0}.columns.is-mobile{display:flex}.columns.is-multiline{flex-wrap:wrap}.columns.is-vcentered{align-items:center}@media screen and (min-width: 769px), print{.columns:not(.is-desktop){display:flex}}@media screen and (min-width: 1024px){.columns.is-desktop{display:flex}}.columns.is-variable{--columnGap: 0.75rem;margin-left:calc(-1 * var(--columnGap));margin-right:calc(-1 * var(--columnGap))}.columns.is-variable>.column{padding-left:var(--columnGap);padding-right:var(--columnGap)}.columns.is-variable.is-0{--columnGap: 0rem}@media screen and (max-width: 768px){.columns.is-variable.is-0-mobile{--columnGap: 0rem}}@media screen and (min-width: 769px), print{.columns.is-variable.is-0-tablet{--columnGap: 0rem}}@media screen and (min-width: 769px) and (max-width: 1023px){.columns.is-variable.is-0-tablet-only{--columnGap: 0rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-0-touch{--columnGap: 0rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-0-desktop{--columnGap: 0rem}}@media screen and (min-width: 1024px) and (max-width: 1215px){.columns.is-variable.is-0-desktop-only{--columnGap: 0rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-0-widescreen{--columnGap: 0rem}}@media screen and (min-width: 1216px) and (max-width: 1407px){.columns.is-variable.is-0-widescreen-only{--columnGap: 0rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-0-fullhd{--columnGap: 0rem}}.columns.is-variable.is-1{--columnGap: .25rem}@media screen and (max-width: 768px){.columns.is-variable.is-1-mobile{--columnGap: .25rem}}@media screen and (min-width: 769px), print{.columns.is-variable.is-1-tablet{--columnGap: .25rem}}@media screen and (min-width: 769px) and (max-width: 1023px){.columns.is-variable.is-1-tablet-only{--columnGap: .25rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-1-touch{--columnGap: .25rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-1-desktop{--columnGap: .25rem}}@media screen and (min-width: 1024px) and (max-width: 1215px){.columns.is-variable.is-1-desktop-only{--columnGap: .25rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-1-widescreen{--columnGap: .25rem}}@media screen and (min-width: 1216px) and (max-width: 1407px){.columns.is-variable.is-1-widescreen-only{--columnGap: .25rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-1-fullhd{--columnGap: .25rem}}.columns.is-variable.is-2{--columnGap: .5rem}@media screen and (max-width: 768px){.columns.is-variable.is-2-mobile{--columnGap: .5rem}}@media screen and (min-width: 769px), print{.columns.is-variable.is-2-tablet{--columnGap: .5rem}}@media screen and (min-width: 769px) and (max-width: 1023px){.columns.is-variable.is-2-tablet-only{--columnGap: .5rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-2-touch{--columnGap: .5rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-2-desktop{--columnGap: .5rem}}@media screen and (min-width: 1024px) and (max-width: 1215px){.columns.is-variable.is-2-desktop-only{--columnGap: .5rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-2-widescreen{--columnGap: .5rem}}@media screen and (min-width: 1216px) and (max-width: 1407px){.columns.is-variable.is-2-widescreen-only{--columnGap: .5rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-2-fullhd{--columnGap: .5rem}}.columns.is-variable.is-3{--columnGap: .75rem}@media screen and (max-width: 768px){.columns.is-variable.is-3-mobile{--columnGap: .75rem}}@media screen and (min-width: 769px), print{.columns.is-variable.is-3-tablet{--columnGap: .75rem}}@media screen and (min-width: 769px) and (max-width: 1023px){.columns.is-variable.is-3-tablet-only{--columnGap: .75rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-3-touch{--columnGap: .75rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-3-desktop{--columnGap: .75rem}}@media screen and (min-width: 1024px) and (max-width: 1215px){.columns.is-variable.is-3-desktop-only{--columnGap: .75rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-3-widescreen{--columnGap: .75rem}}@media screen and (min-width: 1216px) and (max-width: 1407px){.columns.is-variable.is-3-widescreen-only{--columnGap: .75rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-3-fullhd{--columnGap: .75rem}}.columns.is-variable.is-4{--columnGap: 1rem}@media screen and (max-width: 768px){.columns.is-variable.is-4-mobile{--columnGap: 1rem}}@media screen and (min-width: 769px), print{.columns.is-variable.is-4-tablet{--columnGap: 1rem}}@media screen and (min-width: 769px) and (max-width: 1023px){.columns.is-variable.is-4-tablet-only{--columnGap: 1rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-4-touch{--columnGap: 1rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-4-desktop{--columnGap: 1rem}}@media screen and (min-width: 1024px) and (max-width: 1215px){.columns.is-variable.is-4-desktop-only{--columnGap: 1rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-4-widescreen{--columnGap: 1rem}}@media screen and (min-width: 1216px) and (max-width: 1407px){.columns.is-variable.is-4-widescreen-only{--columnGap: 1rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-4-fullhd{--columnGap: 1rem}}.columns.is-variable.is-5{--columnGap: 1.25rem}@media screen and (max-width: 768px){.columns.is-variable.is-5-mobile{--columnGap: 1.25rem}}@media screen and (min-width: 769px), print{.columns.is-variable.is-5-tablet{--columnGap: 1.25rem}}@media screen and (min-width: 769px) and (max-width: 1023px){.columns.is-variable.is-5-tablet-only{--columnGap: 1.25rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-5-touch{--columnGap: 1.25rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-5-desktop{--columnGap: 1.25rem}}@media screen and (min-width: 1024px) and (max-width: 1215px){.columns.is-variable.is-5-desktop-only{--columnGap: 1.25rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-5-widescreen{--columnGap: 1.25rem}}@media screen and (min-width: 1216px) and (max-width: 1407px){.columns.is-variable.is-5-widescreen-only{--columnGap: 1.25rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-5-fullhd{--columnGap: 1.25rem}}.columns.is-variable.is-6{--columnGap: 1.5rem}@media screen and (max-width: 768px){.columns.is-variable.is-6-mobile{--columnGap: 1.5rem}}@media screen and (min-width: 769px), print{.columns.is-variable.is-6-tablet{--columnGap: 1.5rem}}@media screen and (min-width: 769px) and (max-width: 1023px){.columns.is-variable.is-6-tablet-only{--columnGap: 1.5rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-6-touch{--columnGap: 1.5rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-6-desktop{--columnGap: 1.5rem}}@media screen and (min-width: 1024px) and (max-width: 1215px){.columns.is-variable.is-6-desktop-only{--columnGap: 1.5rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-6-widescreen{--columnGap: 1.5rem}}@media screen and (min-width: 1216px) and (max-width: 1407px){.columns.is-variable.is-6-widescreen-only{--columnGap: 1.5rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-6-fullhd{--columnGap: 1.5rem}}.columns.is-variable.is-7{--columnGap: 1.75rem}@media screen and (max-width: 768px){.columns.is-variable.is-7-mobile{--columnGap: 1.75rem}}@media screen and (min-width: 769px), print{.columns.is-variable.is-7-tablet{--columnGap: 1.75rem}}@media screen and (min-width: 769px) and (max-width: 1023px){.columns.is-variable.is-7-tablet-only{--columnGap: 1.75rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-7-touch{--columnGap: 1.75rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-7-desktop{--columnGap: 1.75rem}}@media screen and (min-width: 1024px) and (max-width: 1215px){.columns.is-variable.is-7-desktop-only{--columnGap: 1.75rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-7-widescreen{--columnGap: 1.75rem}}@media screen and (min-width: 1216px) and (max-width: 1407px){.columns.is-variable.is-7-widescreen-only{--columnGap: 1.75rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-7-fullhd{--columnGap: 1.75rem}}.columns.is-variable.is-8{--columnGap: 2rem}@media screen and (max-width: 768px){.columns.is-variable.is-8-mobile{--columnGap: 2rem}}@media screen and (min-width: 769px), print{.columns.is-variable.is-8-tablet{--columnGap: 2rem}}@media screen and (min-width: 769px) and (max-width: 1023px){.columns.is-variable.is-8-tablet-only{--columnGap: 2rem}}@media screen and (max-width: 1023px){.columns.is-variable.is-8-touch{--columnGap: 2rem}}@media screen and (min-width: 1024px){.columns.is-variable.is-8-desktop{--columnGap: 2rem}}@media screen and (min-width: 1024px) and (max-width: 1215px){.columns.is-variable.is-8-desktop-only{--columnGap: 2rem}}@media screen and (min-width: 1216px){.columns.is-variable.is-8-widescreen{--columnGap: 2rem}}@media screen and (min-width: 1216px) and (max-width: 1407px){.columns.is-variable.is-8-widescreen-only{--columnGap: 2rem}}@media screen and (min-width: 1408px){.columns.is-variable.is-8-fullhd{--columnGap: 2rem}}.tile{align-items:stretch;display:block;flex-basis:0;flex-grow:1;flex-shrink:1;min-height:min-content}.tile.is-ancestor{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.tile.is-ancestor:last-child{margin-bottom:-.75rem}.tile.is-ancestor:not(:last-child){margin-bottom:.75rem}.tile.is-child{margin:0 !important}.tile.is-parent{padding:.75rem}.tile.is-vertical{flex-direction:column}.tile.is-vertical>.tile.is-child:not(:last-child){margin-bottom:1.5rem !important}@media screen and (min-width: 769px), print{.tile:not(.is-child){display:flex}.tile.is-1{flex:none;width:8.33333%}.tile.is-2{flex:none;width:16.66667%}.tile.is-3{flex:none;width:25%}.tile.is-4{flex:none;width:33.33333%}.tile.is-5{flex:none;width:41.66667%}.tile.is-6{flex:none;width:50%}.tile.is-7{flex:none;width:58.33333%}.tile.is-8{flex:none;width:66.66667%}.tile.is-9{flex:none;width:75%}.tile.is-10{flex:none;width:83.33333%}.tile.is-11{flex:none;width:91.66667%}.tile.is-12{flex:none;width:100%}}.has-text-white{color:#fff !important}a.has-text-white:hover,a.has-text-white:focus{color:#e6e6e6 !important}.has-background-white{background-color:#fff !important}.has-text-black{color:#0a0a0a !important}a.has-text-black:hover,a.has-text-black:focus{color:#000 !important}.has-background-black{background-color:#0a0a0a !important}.has-text-light{color:#d2f9d6 !important}a.has-text-light:hover,a.has-text-light:focus{color:#a5f3ad !important}.has-background-light{background-color:#d2f9d6 !important}.has-text-dark{color:#459558 !important}a.has-text-dark:hover,a.has-text-dark:focus{color:#357243 !important}.has-background-dark{background-color:#459558 !important}.has-text-primary{color:#55be6f !important}a.has-text-primary:hover,a.has-text-primary:focus{color:#3ea257 !important}.has-background-primary{background-color:#55be6f !important}.has-text-primary-light{color:#f0f9f2 !important}a.has-text-primary-light:hover,a.has-text-primary-light:focus{color:#cbebd3 !important}.has-background-primary-light{background-color:#f0f9f2 !important}.has-text-primary-dark{color:#2f7a41 !important}a.has-text-primary-dark:hover,a.has-text-primary-dark:focus{color:#3d9f55 !important}.has-background-primary-dark{background-color:#2f7a41 !important}.has-text-link{color:#4876ff !important}a.has-text-link:hover,a.has-text-link:focus{color:#1550ff !important}.has-background-link{background-color:#4876ff !important}.has-text-link-light{color:#ebf0ff !important}a.has-text-link-light:hover,a.has-text-link-light:focus{color:#b8caff !important}.has-background-link-light{background-color:#ebf0ff !important}.has-text-link-dark{color:#0037db !important}a.has-text-link-dark:hover,a.has-text-link-dark:focus{color:#0f4cff !important}.has-background-link-dark{background-color:#0037db !important}.has-text-info{color:#f0f8ff !important}a.has-text-info:hover,a.has-text-info:focus{color:#bde0ff !important}.has-background-info{background-color:#f0f8ff !important}.has-text-info-light{color:#f0f8ff !important}a.has-text-info-light:hover,a.has-text-info-light:focus{color:#bde0ff !important}.has-background-info-light{background-color:#f0f8ff !important}.has-text-info-dark{color:#004f94 !important}a.has-text-info-dark:hover,a.has-text-info-dark:focus{color:#006ac7 !important}.has-background-info-dark{background-color:#004f94 !important}.has-text-success{color:#48c78e !important}a.has-text-success:hover,a.has-text-success:focus{color:#34a873 !important}.has-background-success{background-color:#48c78e !important}.has-text-success-light{color:#effaf5 !important}a.has-text-success-light:hover,a.has-text-success-light:focus{color:#c8eedd !important}.has-background-success-light{background-color:#effaf5 !important}.has-text-success-dark{color:#257953 !important}a.has-text-success-dark:hover,a.has-text-success-dark:focus{color:#31a06e !important}.has-background-success-dark{background-color:#257953 !important}.has-text-warning{color:#ffd975 !important}a.has-text-warning:hover,a.has-text-warning:focus{color:#ffcb42 !important}.has-background-warning{background-color:#ffd975 !important}.has-text-warning-light{color:#fff9eb !important}a.has-text-warning-light:hover,a.has-text-warning-light:focus{color:#ffebb8 !important}.has-background-warning-light{background-color:#fff9eb !important}.has-text-warning-dark{color:#946b00 !important}a.has-text-warning-dark:hover,a.has-text-warning-dark:focus{color:#c79000 !important}.has-background-warning-dark{background-color:#946b00 !important}.has-text-danger{color:#f14668 !important}a.has-text-danger:hover,a.has-text-danger:focus{color:#ee1742 !important}.has-background-danger{background-color:#f14668 !important}.has-text-danger-light{color:#feecf0 !important}a.has-text-danger-light:hover,a.has-text-danger-light:focus{color:#fabdc9 !important}.has-background-danger-light{background-color:#feecf0 !important}.has-text-danger-dark{color:#cc0f35 !important}a.has-text-danger-dark:hover,a.has-text-danger-dark:focus{color:#ee2049 !important}.has-background-danger-dark{background-color:#cc0f35 !important}.has-text-black-bis{color:#121212 !important}.has-background-black-bis{background-color:#121212 !important}.has-text-black-ter{color:#242424 !important}.has-background-black-ter{background-color:#242424 !important}.has-text-grey-darker{color:#363636 !important}.has-background-grey-darker{background-color:#363636 !important}.has-text-grey-dark{color:#4a4a4a !important}.has-background-grey-dark{background-color:#4a4a4a !important}.has-text-grey{color:#7a7a7a !important}.has-background-grey{background-color:#7a7a7a !important}.has-text-grey-light{color:#b5b5b5 !important}.has-background-grey-light{background-color:#b5b5b5 !important}.has-text-grey-lighter{color:#dbdbdb !important}.has-background-grey-lighter{background-color:#dbdbdb !important}.has-text-white-ter{color:#f5f5f5 !important}.has-background-white-ter{background-color:#f5f5f5 !important}.has-text-white-bis{color:#fafafa !important}.has-background-white-bis{background-color:#fafafa !important}.is-flex-direction-row{flex-direction:row !important}.is-flex-direction-row-reverse{flex-direction:row-reverse !important}.is-flex-direction-column{flex-direction:column !important}.is-flex-direction-column-reverse{flex-direction:column-reverse !important}.is-flex-wrap-nowrap{flex-wrap:nowrap !important}.is-flex-wrap-wrap{flex-wrap:wrap !important}.is-flex-wrap-wrap-reverse{flex-wrap:wrap-reverse !important}.is-justify-content-flex-start{justify-content:flex-start !important}.is-justify-content-flex-end{justify-content:flex-end !important}.is-justify-content-center{justify-content:center !important}.is-justify-content-space-between{justify-content:space-between !important}.is-justify-content-space-around{justify-content:space-around !important}.is-justify-content-space-evenly{justify-content:space-evenly !important}.is-justify-content-start{justify-content:start !important}.is-justify-content-end{justify-content:end !important}.is-justify-content-left{justify-content:left !important}.is-justify-content-right{justify-content:right !important}.is-align-content-flex-start{align-content:flex-start !important}.is-align-content-flex-end{align-content:flex-end !important}.is-align-content-center{align-content:center !important}.is-align-content-space-between{align-content:space-between !important}.is-align-content-space-around{align-content:space-around !important}.is-align-content-space-evenly{align-content:space-evenly !important}.is-align-content-stretch{align-content:stretch !important}.is-align-content-start{align-content:start !important}.is-align-content-end{align-content:end !important}.is-align-content-baseline{align-content:baseline !important}.is-align-items-stretch{align-items:stretch !important}.is-align-items-flex-start{align-items:flex-start !important}.is-align-items-flex-end{align-items:flex-end !important}.is-align-items-center{align-items:center !important}.is-align-items-baseline{align-items:baseline !important}.is-align-items-start{align-items:start !important}.is-align-items-end{align-items:end !important}.is-align-items-self-start{align-items:self-start !important}.is-align-items-self-end{align-items:self-end !important}.is-align-self-auto{align-self:auto !important}.is-align-self-flex-start{align-self:flex-start !important}.is-align-self-flex-end{align-self:flex-end !important}.is-align-self-center{align-self:center !important}.is-align-self-baseline{align-self:baseline !important}.is-align-self-stretch{align-self:stretch !important}.is-flex-grow-0{flex-grow:0 !important}.is-flex-grow-1{flex-grow:1 !important}.is-flex-grow-2{flex-grow:2 !important}.is-flex-grow-3{flex-grow:3 !important}.is-flex-grow-4{flex-grow:4 !important}.is-flex-grow-5{flex-grow:5 !important}.is-flex-shrink-0{flex-shrink:0 !important}.is-flex-shrink-1{flex-shrink:1 !important}.is-flex-shrink-2{flex-shrink:2 !important}.is-flex-shrink-3{flex-shrink:3 !important}.is-flex-shrink-4{flex-shrink:4 !important}.is-flex-shrink-5{flex-shrink:5 !important}.is-clearfix::after{clear:both;content:" ";display:table}.is-pulled-left{float:left !important}.is-pulled-right{float:right !important}.is-radiusless{border-radius:0 !important}.is-shadowless{box-shadow:none !important}.is-clickable{cursor:pointer !important;pointer-events:all !important}.is-clipped{overflow:hidden !important}.is-relative{position:relative !important}.is-marginless{margin:0 !important}.is-paddingless{padding:0 !important}.m-0{margin:0 !important}.mt-0{margin-top:0 !important}.mr-0{margin-right:0 !important}.mb-0{margin-bottom:0 !important}.ml-0{margin-left:0 !important}.mx-0{margin-left:0 !important;margin-right:0 !important}.my-0{margin-top:0 !important;margin-bottom:0 !important}.m-1{margin:.25rem !important}.mt-1{margin-top:.25rem !important}.mr-1{margin-right:.25rem !important}.mb-1{margin-bottom:.25rem !important}.ml-1{margin-left:.25rem !important}.mx-1{margin-left:.25rem !important;margin-right:.25rem !important}.my-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.m-2{margin:.5rem !important}.mt-2{margin-top:.5rem !important}.mr-2{margin-right:.5rem !important}.mb-2{margin-bottom:.5rem !important}.ml-2{margin-left:.5rem !important}.mx-2{margin-left:.5rem !important;margin-right:.5rem !important}.my-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.m-3{margin:.75rem !important}.mt-3{margin-top:.75rem !important}.mr-3{margin-right:.75rem !important}.mb-3{margin-bottom:.75rem !important}.ml-3{margin-left:.75rem !important}.mx-3{margin-left:.75rem !important;margin-right:.75rem !important}.my-3{margin-top:.75rem !important;margin-bottom:.75rem !important}.m-4{margin:1rem !important}.mt-4{margin-top:1rem !important}.mr-4{margin-right:1rem !important}.mb-4{margin-bottom:1rem !important}.ml-4{margin-left:1rem !important}.mx-4{margin-left:1rem !important;margin-right:1rem !important}.my-4{margin-top:1rem !important;margin-bottom:1rem !important}.m-5{margin:1.5rem !important}.mt-5{margin-top:1.5rem !important}.mr-5{margin-right:1.5rem !important}.mb-5{margin-bottom:1.5rem !important}.ml-5{margin-left:1.5rem !important}.mx-5{margin-left:1.5rem !important;margin-right:1.5rem !important}.my-5{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.m-6{margin:3rem !important}.mt-6{margin-top:3rem !important}.mr-6{margin-right:3rem !important}.mb-6{margin-bottom:3rem !important}.ml-6{margin-left:3rem !important}.mx-6{margin-left:3rem !important;margin-right:3rem !important}.my-6{margin-top:3rem !important;margin-bottom:3rem !important}.m-auto{margin:auto !important}.mt-auto{margin-top:auto !important}.mr-auto{margin-right:auto !important}.mb-auto{margin-bottom:auto !important}.ml-auto{margin-left:auto !important}.mx-auto{margin-left:auto !important;margin-right:auto !important}.my-auto{margin-top:auto !important;margin-bottom:auto !important}.p-0{padding:0 !important}.pt-0{padding-top:0 !important}.pr-0{padding-right:0 !important}.pb-0{padding-bottom:0 !important}.pl-0{padding-left:0 !important}.px-0{padding-left:0 !important;padding-right:0 !important}.py-0{padding-top:0 !important;padding-bottom:0 !important}.p-1{padding:.25rem !important}.pt-1{padding-top:.25rem !important}.pr-1{padding-right:.25rem !important}.pb-1{padding-bottom:.25rem !important}.pl-1{padding-left:.25rem !important}.px-1{padding-left:.25rem !important;padding-right:.25rem !important}.py-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.p-2{padding:.5rem !important}.pt-2{padding-top:.5rem !important}.pr-2{padding-right:.5rem !important}.pb-2{padding-bottom:.5rem !important}.pl-2{padding-left:.5rem !important}.px-2{padding-left:.5rem !important;padding-right:.5rem !important}.py-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.p-3{padding:.75rem !important}.pt-3{padding-top:.75rem !important}.pr-3{padding-right:.75rem !important}.pb-3{padding-bottom:.75rem !important}.pl-3{padding-left:.75rem !important}.px-3{padding-left:.75rem !important;padding-right:.75rem !important}.py-3{padding-top:.75rem !important;padding-bottom:.75rem !important}.p-4{padding:1rem !important}.pt-4{padding-top:1rem !important}.pr-4{padding-right:1rem !important}.pb-4{padding-bottom:1rem !important}.pl-4{padding-left:1rem !important}.px-4{padding-left:1rem !important;padding-right:1rem !important}.py-4{padding-top:1rem !important;padding-bottom:1rem !important}.p-5{padding:1.5rem !important}.pt-5{padding-top:1.5rem !important}.pr-5{padding-right:1.5rem !important}.pb-5{padding-bottom:1.5rem !important}.pl-5{padding-left:1.5rem !important}.px-5{padding-left:1.5rem !important;padding-right:1.5rem !important}.py-5{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.p-6{padding:3rem !important}.pt-6{padding-top:3rem !important}.pr-6{padding-right:3rem !important}.pb-6{padding-bottom:3rem !important}.pl-6{padding-left:3rem !important}.px-6{padding-left:3rem !important;padding-right:3rem !important}.py-6{padding-top:3rem !important;padding-bottom:3rem !important}.p-auto{padding:auto !important}.pt-auto{padding-top:auto !important}.pr-auto{padding-right:auto !important}.pb-auto{padding-bottom:auto !important}.pl-auto{padding-left:auto !important}.px-auto{padding-left:auto !important;padding-right:auto !important}.py-auto{padding-top:auto !important;padding-bottom:auto !important}.is-size-1{font-size:3rem !important}.is-size-2{font-size:2.5rem !important}.is-size-3{font-size:2rem !important}.is-size-4{font-size:1.5rem !important}.is-size-5{font-size:1.25rem !important}.is-size-6{font-size:1rem !important}.is-size-7{font-size:.75rem !important}@media screen and (max-width: 768px){.is-size-1-mobile{font-size:3rem !important}.is-size-2-mobile{font-size:2.5rem !important}.is-size-3-mobile{font-size:2rem !important}.is-size-4-mobile{font-size:1.5rem !important}.is-size-5-mobile{font-size:1.25rem !important}.is-size-6-mobile{font-size:1rem !important}.is-size-7-mobile{font-size:.75rem !important}}@media screen and (min-width: 769px), print{.is-size-1-tablet{font-size:3rem !important}.is-size-2-tablet{font-size:2.5rem !important}.is-size-3-tablet{font-size:2rem !important}.is-size-4-tablet{font-size:1.5rem !important}.is-size-5-tablet{font-size:1.25rem !important}.is-size-6-tablet{font-size:1rem !important}.is-size-7-tablet{font-size:.75rem !important}}@media screen and (max-width: 1023px){.is-size-1-touch{font-size:3rem !important}.is-size-2-touch{font-size:2.5rem !important}.is-size-3-touch{font-size:2rem !important}.is-size-4-touch{font-size:1.5rem !important}.is-size-5-touch{font-size:1.25rem !important}.is-size-6-touch{font-size:1rem !important}.is-size-7-touch{font-size:.75rem !important}}@media screen and (min-width: 1024px){.is-size-1-desktop{font-size:3rem !important}.is-size-2-desktop{font-size:2.5rem !important}.is-size-3-desktop{font-size:2rem !important}.is-size-4-desktop{font-size:1.5rem !important}.is-size-5-desktop{font-size:1.25rem !important}.is-size-6-desktop{font-size:1rem !important}.is-size-7-desktop{font-size:.75rem !important}}@media screen and (min-width: 1216px){.is-size-1-widescreen{font-size:3rem !important}.is-size-2-widescreen{font-size:2.5rem !important}.is-size-3-widescreen{font-size:2rem !important}.is-size-4-widescreen{font-size:1.5rem !important}.is-size-5-widescreen{font-size:1.25rem !important}.is-size-6-widescreen{font-size:1rem !important}.is-size-7-widescreen{font-size:.75rem !important}}@media screen and (min-width: 1408px){.is-size-1-fullhd{font-size:3rem !important}.is-size-2-fullhd{font-size:2.5rem !important}.is-size-3-fullhd{font-size:2rem !important}.is-size-4-fullhd{font-size:1.5rem !important}.is-size-5-fullhd{font-size:1.25rem !important}.is-size-6-fullhd{font-size:1rem !important}.is-size-7-fullhd{font-size:.75rem !important}}.has-text-centered{text-align:center !important}.has-text-justified{text-align:justify !important}.has-text-left{text-align:left !important}.has-text-right{text-align:right !important}@media screen and (max-width: 768px){.has-text-centered-mobile{text-align:center !important}}@media screen and (min-width: 769px), print{.has-text-centered-tablet{text-align:center !important}}@media screen and (min-width: 769px) and (max-width: 1023px){.has-text-centered-tablet-only{text-align:center !important}}@media screen and (max-width: 1023px){.has-text-centered-touch{text-align:center !important}}@media screen and (min-width: 1024px){.has-text-centered-desktop{text-align:center !important}}@media screen and (min-width: 1024px) and (max-width: 1215px){.has-text-centered-desktop-only{text-align:center !important}}@media screen and (min-width: 1216px){.has-text-centered-widescreen{text-align:center !important}}@media screen and (min-width: 1216px) and (max-width: 1407px){.has-text-centered-widescreen-only{text-align:center !important}}@media screen and (min-width: 1408px){.has-text-centered-fullhd{text-align:center !important}}@media screen and (max-width: 768px){.has-text-justified-mobile{text-align:justify !important}}@media screen and (min-width: 769px), print{.has-text-justified-tablet{text-align:justify !important}}@media screen and (min-width: 769px) and (max-width: 1023px){.has-text-justified-tablet-only{text-align:justify !important}}@media screen and (max-width: 1023px){.has-text-justified-touch{text-align:justify !important}}@media screen and (min-width: 1024px){.has-text-justified-desktop{text-align:justify !important}}@media screen and (min-width: 1024px) and (max-width: 1215px){.has-text-justified-desktop-only{text-align:justify !important}}@media screen and (min-width: 1216px){.has-text-justified-widescreen{text-align:justify !important}}@media screen and (min-width: 1216px) and (max-width: 1407px){.has-text-justified-widescreen-only{text-align:justify !important}}@media screen and (min-width: 1408px){.has-text-justified-fullhd{text-align:justify !important}}@media screen and (max-width: 768px){.has-text-left-mobile{text-align:left !important}}@media screen and (min-width: 769px), print{.has-text-left-tablet{text-align:left !important}}@media screen and (min-width: 769px) and (max-width: 1023px){.has-text-left-tablet-only{text-align:left !important}}@media screen and (max-width: 1023px){.has-text-left-touch{text-align:left !important}}@media screen and (min-width: 1024px){.has-text-left-desktop{text-align:left !important}}@media screen and (min-width: 1024px) and (max-width: 1215px){.has-text-left-desktop-only{text-align:left !important}}@media screen and (min-width: 1216px){.has-text-left-widescreen{text-align:left !important}}@media screen and (min-width: 1216px) and (max-width: 1407px){.has-text-left-widescreen-only{text-align:left !important}}@media screen and (min-width: 1408px){.has-text-left-fullhd{text-align:left !important}}@media screen and (max-width: 768px){.has-text-right-mobile{text-align:right !important}}@media screen and (min-width: 769px), print{.has-text-right-tablet{text-align:right !important}}@media screen and (min-width: 769px) and (max-width: 1023px){.has-text-right-tablet-only{text-align:right !important}}@media screen and (max-width: 1023px){.has-text-right-touch{text-align:right !important}}@media screen and (min-width: 1024px){.has-text-right-desktop{text-align:right !important}}@media screen and (min-width: 1024px) and (max-width: 1215px){.has-text-right-desktop-only{text-align:right !important}}@media screen and (min-width: 1216px){.has-text-right-widescreen{text-align:right !important}}@media screen and (min-width: 1216px) and (max-width: 1407px){.has-text-right-widescreen-only{text-align:right !important}}@media screen and (min-width: 1408px){.has-text-right-fullhd{text-align:right !important}}.is-capitalized{text-transform:capitalize !important}.is-lowercase{text-transform:lowercase !important}.is-uppercase{text-transform:uppercase !important}.is-italic{font-style:italic !important}.is-underlined{text-decoration:underline !important}.has-text-weight-light{font-weight:300 !important}.has-text-weight-normal{font-weight:400 !important}.has-text-weight-medium{font-weight:500 !important}.has-text-weight-semibold{font-weight:600 !important}.has-text-weight-bold{font-weight:700 !important}.is-family-primary{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif !important}.is-family-secondary{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif !important}.is-family-sans-serif{font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif !important}.is-family-monospace{font-family:monospace !important}.is-family-code{font-family:monospace !important}.is-block{display:block !important}@media screen and (max-width: 768px){.is-block-mobile{display:block !important}}@media screen and (min-width: 769px), print{.is-block-tablet{display:block !important}}@media screen and (min-width: 769px) and (max-width: 1023px){.is-block-tablet-only{display:block !important}}@media screen and (max-width: 1023px){.is-block-touch{display:block !important}}@media screen and (min-width: 1024px){.is-block-desktop{display:block !important}}@media screen and (min-width: 1024px) and (max-width: 1215px){.is-block-desktop-only{display:block !important}}@media screen and (min-width: 1216px){.is-block-widescreen{display:block !important}}@media screen and (min-width: 1216px) and (max-width: 1407px){.is-block-widescreen-only{display:block !important}}@media screen and (min-width: 1408px){.is-block-fullhd{display:block !important}}.is-flex{display:flex !important}@media screen and (max-width: 768px){.is-flex-mobile{display:flex !important}}@media screen and (min-width: 769px), print{.is-flex-tablet{display:flex !important}}@media screen and (min-width: 769px) and (max-width: 1023px){.is-flex-tablet-only{display:flex !important}}@media screen and (max-width: 1023px){.is-flex-touch{display:flex !important}}@media screen and (min-width: 1024px){.is-flex-desktop{display:flex !important}}@media screen and (min-width: 1024px) and (max-width: 1215px){.is-flex-desktop-only{display:flex !important}}@media screen and (min-width: 1216px){.is-flex-widescreen{display:flex !important}}@media screen and (min-width: 1216px) and (max-width: 1407px){.is-flex-widescreen-only{display:flex !important}}@media screen and (min-width: 1408px){.is-flex-fullhd{display:flex !important}}.is-inline{display:inline !important}@media screen and (max-width: 768px){.is-inline-mobile{display:inline !important}}@media screen and (min-width: 769px), print{.is-inline-tablet{display:inline !important}}@media screen and (min-width: 769px) and (max-width: 1023px){.is-inline-tablet-only{display:inline !important}}@media screen and (max-width: 1023px){.is-inline-touch{display:inline !important}}@media screen and (min-width: 1024px){.is-inline-desktop{display:inline !important}}@media screen and (min-width: 1024px) and (max-width: 1215px){.is-inline-desktop-only{display:inline !important}}@media screen and (min-width: 1216px){.is-inline-widescreen{display:inline !important}}@media screen and (min-width: 1216px) and (max-width: 1407px){.is-inline-widescreen-only{display:inline !important}}@media screen and (min-width: 1408px){.is-inline-fullhd{display:inline !important}}.is-inline-block{display:inline-block !important}@media screen and (max-width: 768px){.is-inline-block-mobile{display:inline-block !important}}@media screen and (min-width: 769px), print{.is-inline-block-tablet{display:inline-block !important}}@media screen and (min-width: 769px) and (max-width: 1023px){.is-inline-block-tablet-only{display:inline-block !important}}@media screen and (max-width: 1023px){.is-inline-block-touch{display:inline-block !important}}@media screen and (min-width: 1024px){.is-inline-block-desktop{display:inline-block !important}}@media screen and (min-width: 1024px) and (max-width: 1215px){.is-inline-block-desktop-only{display:inline-block !important}}@media screen and (min-width: 1216px){.is-inline-block-widescreen{display:inline-block !important}}@media screen and (min-width: 1216px) and (max-width: 1407px){.is-inline-block-widescreen-only{display:inline-block !important}}@media screen and (min-width: 1408px){.is-inline-block-fullhd{display:inline-block !important}}.is-inline-flex{display:inline-flex !important}@media screen and (max-width: 768px){.is-inline-flex-mobile{display:inline-flex !important}}@media screen and (min-width: 769px), print{.is-inline-flex-tablet{display:inline-flex !important}}@media screen and (min-width: 769px) and (max-width: 1023px){.is-inline-flex-tablet-only{display:inline-flex !important}}@media screen and (max-width: 1023px){.is-inline-flex-touch{display:inline-flex !important}}@media screen and (min-width: 1024px){.is-inline-flex-desktop{display:inline-flex !important}}@media screen and (min-width: 1024px) and (max-width: 1215px){.is-inline-flex-desktop-only{display:inline-flex !important}}@media screen and (min-width: 1216px){.is-inline-flex-widescreen{display:inline-flex !important}}@media screen and (min-width: 1216px) and (max-width: 1407px){.is-inline-flex-widescreen-only{display:inline-flex !important}}@media screen and (min-width: 1408px){.is-inline-flex-fullhd{display:inline-flex !important}}.is-hidden{display:none !important}.is-sr-only{border:none !important;clip:rect(0, 0, 0, 0) !important;height:0.01em !important;overflow:hidden !important;padding:0 !important;position:absolute !important;white-space:nowrap !important;width:0.01em !important}@media screen and (max-width: 768px){.is-hidden-mobile{display:none !important}}@media screen and (min-width: 769px), print{.is-hidden-tablet{display:none !important}}@media screen and (min-width: 769px) and (max-width: 1023px){.is-hidden-tablet-only{display:none !important}}@media screen and (max-width: 1023px){.is-hidden-touch{display:none !important}}@media screen and (min-width: 1024px){.is-hidden-desktop{display:none !important}}@media screen and (min-width: 1024px) and (max-width: 1215px){.is-hidden-desktop-only{display:none !important}}@media screen and (min-width: 1216px){.is-hidden-widescreen{display:none !important}}@media screen and (min-width: 1216px) and (max-width: 1407px){.is-hidden-widescreen-only{display:none !important}}@media screen and (min-width: 1408px){.is-hidden-fullhd{display:none !important}}.is-invisible{visibility:hidden !important}@media screen and (max-width: 768px){.is-invisible-mobile{visibility:hidden !important}}@media screen and (min-width: 769px), print{.is-invisible-tablet{visibility:hidden !important}}@media screen and (min-width: 769px) and (max-width: 1023px){.is-invisible-tablet-only{visibility:hidden !important}}@media screen and (max-width: 1023px){.is-invisible-touch{visibility:hidden !important}}@media screen and (min-width: 1024px){.is-invisible-desktop{visibility:hidden !important}}@media screen and (min-width: 1024px) and (max-width: 1215px){.is-invisible-desktop-only{visibility:hidden !important}}@media screen and (min-width: 1216px){.is-invisible-widescreen{visibility:hidden !important}}@media screen and (min-width: 1216px) and (max-width: 1407px){.is-invisible-widescreen-only{visibility:hidden !important}}@media screen and (min-width: 1408px){.is-invisible-fullhd{visibility:hidden !important}}.hero{align-items:stretch;display:flex;flex-direction:column;justify-content:space-between}.hero .navbar{background:none}.hero .tabs ul{border-bottom:none}.hero.is-white{background-color:#fff;color:#0a0a0a}.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-white strong{color:inherit}.hero.is-white .title{color:#0a0a0a}.hero.is-white .subtitle{color:rgba(10,10,10,0.9)}.hero.is-white .subtitle a:not(.button),.hero.is-white .subtitle strong{color:#0a0a0a}@media screen and (max-width: 1023px){.hero.is-white .navbar-menu{background-color:#fff}}.hero.is-white .navbar-item,.hero.is-white .navbar-link{color:rgba(10,10,10,0.7)}.hero.is-white a.navbar-item:hover,.hero.is-white a.navbar-item.is-active,.hero.is-white .navbar-link:hover,.hero.is-white .navbar-link.is-active{background-color:#f2f2f2;color:#0a0a0a}.hero.is-white .tabs a{color:#0a0a0a;opacity:0.9}.hero.is-white .tabs a:hover{opacity:1}.hero.is-white .tabs li.is-active a{color:#fff !important;opacity:1}.hero.is-white .tabs.is-boxed a,.hero.is-white .tabs.is-toggle a{color:#0a0a0a}.hero.is-white .tabs.is-boxed a:hover,.hero.is-white .tabs.is-toggle a:hover{background-color:rgba(10,10,10,0.1)}.hero.is-white .tabs.is-boxed li.is-active a,.hero.is-white .tabs.is-boxed li.is-active a:hover,.hero.is-white .tabs.is-toggle li.is-active a,.hero.is-white .tabs.is-toggle li.is-active a:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.hero.is-white.is-bold{background-image:linear-gradient(141deg, #e6e6e6 0%, #fff 71%, #fff 100%)}@media screen and (max-width: 768px){.hero.is-white.is-bold .navbar-menu{background-image:linear-gradient(141deg, #e6e6e6 0%, #fff 71%, #fff 100%)}}.hero.is-black{background-color:#0a0a0a;color:#fff}.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-black strong{color:inherit}.hero.is-black .title{color:#fff}.hero.is-black .subtitle{color:rgba(255,255,255,0.9)}.hero.is-black .subtitle a:not(.button),.hero.is-black .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-black .navbar-menu{background-color:#0a0a0a}}.hero.is-black .navbar-item,.hero.is-black .navbar-link{color:rgba(255,255,255,0.7)}.hero.is-black a.navbar-item:hover,.hero.is-black a.navbar-item.is-active,.hero.is-black .navbar-link:hover,.hero.is-black .navbar-link.is-active{background-color:#000;color:#fff}.hero.is-black .tabs a{color:#fff;opacity:0.9}.hero.is-black .tabs a:hover{opacity:1}.hero.is-black .tabs li.is-active a{color:#0a0a0a !important;opacity:1}.hero.is-black .tabs.is-boxed a,.hero.is-black .tabs.is-toggle a{color:#fff}.hero.is-black .tabs.is-boxed a:hover,.hero.is-black .tabs.is-toggle a:hover{background-color:rgba(10,10,10,0.1)}.hero.is-black .tabs.is-boxed li.is-active a,.hero.is-black .tabs.is-boxed li.is-active a:hover,.hero.is-black .tabs.is-toggle li.is-active a,.hero.is-black .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.hero.is-black.is-bold{background-image:linear-gradient(141deg, #000 0%, #0a0a0a 71%, #181616 100%)}@media screen and (max-width: 768px){.hero.is-black.is-bold .navbar-menu{background-image:linear-gradient(141deg, #000 0%, #0a0a0a 71%, #181616 100%)}}.hero.is-light{background-color:#d2f9d6;color:rgba(0,0,0,0.7)}.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-light strong{color:inherit}.hero.is-light .title{color:rgba(0,0,0,0.7)}.hero.is-light .subtitle{color:rgba(0,0,0,0.9)}.hero.is-light .subtitle a:not(.button),.hero.is-light .subtitle strong{color:rgba(0,0,0,0.7)}@media screen and (max-width: 1023px){.hero.is-light .navbar-menu{background-color:#d2f9d6}}.hero.is-light .navbar-item,.hero.is-light .navbar-link{color:rgba(0,0,0,0.7)}.hero.is-light a.navbar-item:hover,.hero.is-light a.navbar-item.is-active,.hero.is-light .navbar-link:hover,.hero.is-light .navbar-link.is-active{background-color:#bcf6c2;color:rgba(0,0,0,0.7)}.hero.is-light .tabs a{color:rgba(0,0,0,0.7);opacity:0.9}.hero.is-light .tabs a:hover{opacity:1}.hero.is-light .tabs li.is-active a{color:#d2f9d6 !important;opacity:1}.hero.is-light .tabs.is-boxed a,.hero.is-light .tabs.is-toggle a{color:rgba(0,0,0,0.7)}.hero.is-light .tabs.is-boxed a:hover,.hero.is-light .tabs.is-toggle a:hover{background-color:rgba(10,10,10,0.1)}.hero.is-light .tabs.is-boxed li.is-active a,.hero.is-light .tabs.is-boxed li.is-active a:hover,.hero.is-light .tabs.is-toggle li.is-active a,.hero.is-light .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,0.7);border-color:rgba(0,0,0,0.7);color:#d2f9d6}.hero.is-light.is-bold{background-image:linear-gradient(141deg, #a6f8a0 0%, #d2f9d6 71%, #e8fded 100%)}@media screen and (max-width: 768px){.hero.is-light.is-bold .navbar-menu{background-image:linear-gradient(141deg, #a6f8a0 0%, #d2f9d6 71%, #e8fded 100%)}}.hero.is-dark{background-color:#459558;color:#fff}.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-dark strong{color:inherit}.hero.is-dark .title{color:#fff}.hero.is-dark .subtitle{color:rgba(255,255,255,0.9)}.hero.is-dark .subtitle a:not(.button),.hero.is-dark .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-dark .navbar-menu{background-color:#459558}}.hero.is-dark .navbar-item,.hero.is-dark .navbar-link{color:rgba(255,255,255,0.7)}.hero.is-dark a.navbar-item:hover,.hero.is-dark a.navbar-item.is-active,.hero.is-dark .navbar-link:hover,.hero.is-dark .navbar-link.is-active{background-color:#3d844e;color:#fff}.hero.is-dark .tabs a{color:#fff;opacity:0.9}.hero.is-dark .tabs a:hover{opacity:1}.hero.is-dark .tabs li.is-active a{color:#459558 !important;opacity:1}.hero.is-dark .tabs.is-boxed a,.hero.is-dark .tabs.is-toggle a{color:#fff}.hero.is-dark .tabs.is-boxed a:hover,.hero.is-dark .tabs.is-toggle a:hover{background-color:rgba(10,10,10,0.1)}.hero.is-dark .tabs.is-boxed li.is-active a,.hero.is-dark .tabs.is-boxed li.is-active a:hover,.hero.is-dark .tabs.is-toggle li.is-active a,.hero.is-dark .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#459558}.hero.is-dark.is-bold{background-image:linear-gradient(141deg, #2d7a32 0%, #459558 71%, #47ad70 100%)}@media screen and (max-width: 768px){.hero.is-dark.is-bold .navbar-menu{background-image:linear-gradient(141deg, #2d7a32 0%, #459558 71%, #47ad70 100%)}}.hero.is-primary{background-color:#55be6f;color:#fff}.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-primary strong{color:inherit}.hero.is-primary .title{color:#fff}.hero.is-primary .subtitle{color:rgba(255,255,255,0.9)}.hero.is-primary .subtitle a:not(.button),.hero.is-primary .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-primary .navbar-menu{background-color:#55be6f}}.hero.is-primary .navbar-item,.hero.is-primary .navbar-link{color:rgba(255,255,255,0.7)}.hero.is-primary a.navbar-item:hover,.hero.is-primary a.navbar-item.is-active,.hero.is-primary .navbar-link:hover,.hero.is-primary .navbar-link.is-active{background-color:#45b461;color:#fff}.hero.is-primary .tabs a{color:#fff;opacity:0.9}.hero.is-primary .tabs a:hover{opacity:1}.hero.is-primary .tabs li.is-active a{color:#55be6f !important;opacity:1}.hero.is-primary .tabs.is-boxed a,.hero.is-primary .tabs.is-toggle a{color:#fff}.hero.is-primary .tabs.is-boxed a:hover,.hero.is-primary .tabs.is-toggle a:hover{background-color:rgba(10,10,10,0.1)}.hero.is-primary .tabs.is-boxed li.is-active a,.hero.is-primary .tabs.is-boxed li.is-active a:hover,.hero.is-primary .tabs.is-toggle li.is-active a,.hero.is-primary .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#55be6f}.hero.is-primary.is-bold{background-image:linear-gradient(141deg, #33ad3d 0%, #55be6f 71%, #62ca8d 100%)}@media screen and (max-width: 768px){.hero.is-primary.is-bold .navbar-menu{background-image:linear-gradient(141deg, #33ad3d 0%, #55be6f 71%, #62ca8d 100%)}}.hero.is-link{background-color:#4876ff;color:#fff}.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-link strong{color:inherit}.hero.is-link .title{color:#fff}.hero.is-link .subtitle{color:rgba(255,255,255,0.9)}.hero.is-link .subtitle a:not(.button),.hero.is-link .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-link .navbar-menu{background-color:#4876ff}}.hero.is-link .navbar-item,.hero.is-link .navbar-link{color:rgba(255,255,255,0.7)}.hero.is-link a.navbar-item:hover,.hero.is-link a.navbar-item.is-active,.hero.is-link .navbar-link:hover,.hero.is-link .navbar-link.is-active{background-color:#2f63ff;color:#fff}.hero.is-link .tabs a{color:#fff;opacity:0.9}.hero.is-link .tabs a:hover{opacity:1}.hero.is-link .tabs li.is-active a{color:#4876ff !important;opacity:1}.hero.is-link .tabs.is-boxed a,.hero.is-link .tabs.is-toggle a{color:#fff}.hero.is-link .tabs.is-boxed a:hover,.hero.is-link .tabs.is-toggle a:hover{background-color:rgba(10,10,10,0.1)}.hero.is-link .tabs.is-boxed li.is-active a,.hero.is-link .tabs.is-boxed li.is-active a:hover,.hero.is-link .tabs.is-toggle li.is-active a,.hero.is-link .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#4876ff}.hero.is-link.is-bold{background-image:linear-gradient(141deg, #1577ff 0%, #4876ff 71%, #626fff 100%)}@media screen and (max-width: 768px){.hero.is-link.is-bold .navbar-menu{background-image:linear-gradient(141deg, #1577ff 0%, #4876ff 71%, #626fff 100%)}}.hero.is-info{background-color:#f0f8ff;color:rgba(0,0,0,0.7)}.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-info strong{color:inherit}.hero.is-info .title{color:rgba(0,0,0,0.7)}.hero.is-info .subtitle{color:rgba(0,0,0,0.9)}.hero.is-info .subtitle a:not(.button),.hero.is-info .subtitle strong{color:rgba(0,0,0,0.7)}@media screen and (max-width: 1023px){.hero.is-info .navbar-menu{background-color:#f0f8ff}}.hero.is-info .navbar-item,.hero.is-info .navbar-link{color:rgba(0,0,0,0.7)}.hero.is-info a.navbar-item:hover,.hero.is-info a.navbar-item.is-active,.hero.is-info .navbar-link:hover,.hero.is-info .navbar-link.is-active{background-color:#d7ecff;color:rgba(0,0,0,0.7)}.hero.is-info .tabs a{color:rgba(0,0,0,0.7);opacity:0.9}.hero.is-info .tabs a:hover{opacity:1}.hero.is-info .tabs li.is-active a{color:#f0f8ff !important;opacity:1}.hero.is-info .tabs.is-boxed a,.hero.is-info .tabs.is-toggle a{color:rgba(0,0,0,0.7)}.hero.is-info .tabs.is-boxed a:hover,.hero.is-info .tabs.is-toggle a:hover{background-color:rgba(10,10,10,0.1)}.hero.is-info .tabs.is-boxed li.is-active a,.hero.is-info .tabs.is-boxed li.is-active a:hover,.hero.is-info .tabs.is-toggle li.is-active a,.hero.is-info .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,0.7);border-color:rgba(0,0,0,0.7);color:#f0f8ff}.hero.is-info.is-bold{background-image:linear-gradient(141deg, #bdebff 0%, #f0f8ff 71%, #fff 100%)}@media screen and (max-width: 768px){.hero.is-info.is-bold .navbar-menu{background-image:linear-gradient(141deg, #bdebff 0%, #f0f8ff 71%, #fff 100%)}}.hero.is-success{background-color:#48c78e;color:#fff}.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-success strong{color:inherit}.hero.is-success .title{color:#fff}.hero.is-success .subtitle{color:rgba(255,255,255,0.9)}.hero.is-success .subtitle a:not(.button),.hero.is-success .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-success .navbar-menu{background-color:#48c78e}}.hero.is-success .navbar-item,.hero.is-success .navbar-link{color:rgba(255,255,255,0.7)}.hero.is-success a.navbar-item:hover,.hero.is-success a.navbar-item.is-active,.hero.is-success .navbar-link:hover,.hero.is-success .navbar-link.is-active{background-color:#3abb81;color:#fff}.hero.is-success .tabs a{color:#fff;opacity:0.9}.hero.is-success .tabs a:hover{opacity:1}.hero.is-success .tabs li.is-active a{color:#48c78e !important;opacity:1}.hero.is-success .tabs.is-boxed a,.hero.is-success .tabs.is-toggle a{color:#fff}.hero.is-success .tabs.is-boxed a:hover,.hero.is-success .tabs.is-toggle a:hover{background-color:rgba(10,10,10,0.1)}.hero.is-success .tabs.is-boxed li.is-active a,.hero.is-success .tabs.is-boxed li.is-active a:hover,.hero.is-success .tabs.is-toggle li.is-active a,.hero.is-success .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#48c78e}.hero.is-success.is-bold{background-image:linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%)}@media screen and (max-width: 768px){.hero.is-success.is-bold .navbar-menu{background-image:linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%)}}.hero.is-warning{background-color:#ffd975;color:rgba(0,0,0,0.7)}.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-warning strong{color:inherit}.hero.is-warning .title{color:rgba(0,0,0,0.7)}.hero.is-warning .subtitle{color:rgba(0,0,0,0.9)}.hero.is-warning .subtitle a:not(.button),.hero.is-warning .subtitle strong{color:rgba(0,0,0,0.7)}@media screen and (max-width: 1023px){.hero.is-warning .navbar-menu{background-color:#ffd975}}.hero.is-warning .navbar-item,.hero.is-warning .navbar-link{color:rgba(0,0,0,0.7)}.hero.is-warning a.navbar-item:hover,.hero.is-warning a.navbar-item.is-active,.hero.is-warning .navbar-link:hover,.hero.is-warning .navbar-link.is-active{background-color:#ffd25c;color:rgba(0,0,0,0.7)}.hero.is-warning .tabs a{color:rgba(0,0,0,0.7);opacity:0.9}.hero.is-warning .tabs a:hover{opacity:1}.hero.is-warning .tabs li.is-active a{color:#ffd975 !important;opacity:1}.hero.is-warning .tabs.is-boxed a,.hero.is-warning .tabs.is-toggle a{color:rgba(0,0,0,0.7)}.hero.is-warning .tabs.is-boxed a:hover,.hero.is-warning .tabs.is-toggle a:hover{background-color:rgba(10,10,10,0.1)}.hero.is-warning .tabs.is-boxed li.is-active a,.hero.is-warning .tabs.is-boxed li.is-active a:hover,.hero.is-warning .tabs.is-toggle li.is-active a,.hero.is-warning .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,0.7);border-color:rgba(0,0,0,0.7);color:#ffd975}.hero.is-warning.is-bold{background-image:linear-gradient(141deg, #ffab42 0%, #ffd975 71%, #fff38f 100%)}@media screen and (max-width: 768px){.hero.is-warning.is-bold .navbar-menu{background-image:linear-gradient(141deg, #ffab42 0%, #ffd975 71%, #fff38f 100%)}}.hero.is-danger{background-color:#f14668;color:#fff}.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-danger strong{color:inherit}.hero.is-danger .title{color:#fff}.hero.is-danger .subtitle{color:rgba(255,255,255,0.9)}.hero.is-danger .subtitle a:not(.button),.hero.is-danger .subtitle strong{color:#fff}@media screen and (max-width: 1023px){.hero.is-danger .navbar-menu{background-color:#f14668}}.hero.is-danger .navbar-item,.hero.is-danger .navbar-link{color:rgba(255,255,255,0.7)}.hero.is-danger a.navbar-item:hover,.hero.is-danger a.navbar-item.is-active,.hero.is-danger .navbar-link:hover,.hero.is-danger .navbar-link.is-active{background-color:#ef2e55;color:#fff}.hero.is-danger .tabs a{color:#fff;opacity:0.9}.hero.is-danger .tabs a:hover{opacity:1}.hero.is-danger .tabs li.is-active a{color:#f14668 !important;opacity:1}.hero.is-danger .tabs.is-boxed a,.hero.is-danger .tabs.is-toggle a{color:#fff}.hero.is-danger .tabs.is-boxed a:hover,.hero.is-danger .tabs.is-toggle a:hover{background-color:rgba(10,10,10,0.1)}.hero.is-danger .tabs.is-boxed li.is-active a,.hero.is-danger .tabs.is-boxed li.is-active a:hover,.hero.is-danger .tabs.is-toggle li.is-active a,.hero.is-danger .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#f14668}.hero.is-danger.is-bold{background-image:linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%)}@media screen and (max-width: 768px){.hero.is-danger.is-bold .navbar-menu{background-image:linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%)}}.hero.is-small .hero-body{padding:1.5rem}@media screen and (min-width: 769px), print{.hero.is-medium .hero-body{padding:9rem 4.5rem}}@media screen and (min-width: 769px), print{.hero.is-large .hero-body{padding:18rem 6rem}}.hero.is-halfheight .hero-body,.hero.is-fullheight .hero-body,.hero.is-fullheight-with-navbar .hero-body{align-items:center;display:flex}.hero.is-halfheight .hero-body>.container,.hero.is-fullheight .hero-body>.container,.hero.is-fullheight-with-navbar .hero-body>.container{flex-grow:1;flex-shrink:1}.hero.is-halfheight{min-height:50vh}.hero.is-fullheight{min-height:100vh}.hero-video{overflow:hidden}.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;transform:translate3d(-50%, -50%, 0)}.hero-video.is-transparent{opacity:0.3}@media screen and (max-width: 768px){.hero-video{display:none}}.hero-buttons{margin-top:1.5rem}@media screen and (max-width: 768px){.hero-buttons .button{display:flex}.hero-buttons .button:not(:last-child){margin-bottom:0.75rem}}@media screen and (min-width: 769px), print{.hero-buttons{display:flex;justify-content:center}.hero-buttons .button:not(:last-child){margin-right:1.5rem}}.hero-head,.hero-foot{flex-grow:0;flex-shrink:0}.hero-body{flex-grow:1;flex-shrink:0;padding:3rem 1.5rem}@media screen and (min-width: 769px), print{.hero-body{padding:3rem 3rem}}.section{padding:3rem 1.5rem}@media screen and (min-width: 1024px){.section{padding:3rem 3rem}.section.is-medium{padding:9rem 4.5rem}.section.is-large{padding:18rem 6rem}}.footer{background-color:#fafafa;padding:3rem 1.5rem 6rem}:host{font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;text-size-adjust:100%;font-family:BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif;color:#4a4a4a;font-size:1em;font-weight:400;line-height:1.5;box-sizing:border-box;overflow:hidden}
`,""]);const k=m},3645:n=>{n.exports=function(l){var h=[];return h.toString=function(){return this.map(function(p){var m=l(p);return p[2]?"@media ".concat(p[2]," {").concat(m,"}"):m}).join("")},h.i=function(p,m,k){typeof p=="string"&&(p=[[null,p,""]]);var y={};if(k)for(var _=0;_<this.length;_++){var j=this[_][0];j!=null&&(y[j]=!0)}for(var q=0;q<p.length;q++){var ee=[].concat(p[q]);k&&y[ee[0]]||(m&&(ee[2]?ee[2]="".concat(m," and ").concat(ee[2]):ee[2]=m),h.push(ee))}},h}},9746:function(n,l){var h=this&&this.__await||function(m){return this instanceof h?(this.v=m,this):new h(m)},p=this&&this.__asyncGenerator||function(m,k,y){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var _,j=y.apply(m,k||[]),q=[];return _={},ee("next"),ee("throw"),ee("return"),_[Symbol.asyncIterator]=function(){return this},_;function ee(le){j[le]&&(_[le]=function(we){return new Promise(function(xe,be){q.push([le,we,xe,be])>1||oe(le,we)})})}function oe(le,we){try{(xe=j[le](we)).value instanceof h?Promise.resolve(xe.value.v).then(ne,de):ae(q[0][2],xe)}catch(be){ae(q[0][3],be)}var xe}function ne(le){oe("next",le)}function de(le){oe("throw",le)}function ae(le,we){le(we),q.shift(),q.length&&oe(q[0][0],q[0][1])}};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(m){return p(this,arguments,function*(){const k=/\r?\n/,y=new TextDecoder;let _="",j=m.read();for(;;){const{done:q,value:ee}=yield h(j);if(q)return _.length>0&&(yield yield h(JSON.parse(_))),yield h(void 0);_+=y.decode(ee,{stream:!0});const oe=_.split(k);_=oe.pop();for(const ne of oe)yield yield h(JSON.parse(ne));j=m.read()}})}},6304:function(module,__unused_webpack_exports,__webpack_require__){module=__webpack_require__.nmd(module),function _f(self){try{module&&(self=module)}catch(n){}var t;function u(n){return n===void 0||n}function aa(n){const l=Array(n);for(let h=0;h<n;h++)l[h]=v();return l}function v(){return Object.create(null)}function ba(n,l){return l.length-n.length}function x(n){return typeof n=="string"}function C(n){return typeof n=="object"}function D(n){return typeof n=="function"}function ca(n,l){var h=da;if(n&&(l&&(n=E(n,l)),this.H&&(n=E(n,this.H)),this.J&&1<n.length&&(n=E(n,this.J)),h||h==="")){if(n=n.split(h),this.filter){l=this.filter,h=n.length;const p=[];for(let m=0,k=0;m<h;m++){const y=n[m];y&&!l[y]&&(p[k++]=y)}n=p}return n}return n}self._factory=_f;const da=/[\p{Z}\p{S}\p{P}\p{C}]+/u,ea=/[\u0300-\u036f]/g;function fa(n,l){const h=Object.keys(n),p=h.length,m=[];let k="",y=0;for(let _,j,q=0;q<p;q++)_=h[q],(j=n[_])?(m[y++]=F(l?"(?!\\b)"+_+"(\\b|_)":_),m[y++]=j):k+=(k?"|":"")+_;return k&&(m[y++]=F(l?"(?!\\b)("+k+")(\\b|_)":"("+k+")"),m[y]=""),m}function E(n,l){for(let h=0,p=l.length;h<p&&(n=n.replace(l[h],l[h+1]));h+=2);return n}function F(n){return new RegExp(n,"g")}function ha(n){let l="",h="";for(let p,m=0,k=n.length;m<k;m++)(p=n[m])!==h&&(l+=h=p);return l}var ja={encode:ia,F:!1,G:""};function ia(n){return ca.call(this,(""+n).toLowerCase(),!1)}const ka={},G={};function la(n){I(n,"add"),I(n,"append"),I(n,"search"),I(n,"update"),I(n,"remove")}function I(n,l){n[l+"Async"]=function(){const h=this,p=arguments;var m=p[p.length-1];let k;return D(m)&&(k=m,delete p[p.length-1]),m=new Promise(function(y){setTimeout(function(){h.async=!0;const _=h[l].apply(h,p);h.async=!1,y(_)})}),k?(m.then(k),this):m}}function ma(n,l,h,p){const m=n.length;let k,y,_=[],j=0;p&&(p=[]);for(let q=m-1;0<=q;q--){const ee=n[q],oe=ee.length,ne=v();let de=!k;for(let ae=0;ae<oe;ae++){const le=ee[ae],we=le.length;if(we)for(let xe,be,Le=0;Le<we;Le++)if(be=le[Le],k){if(k[be]){if(!q){if(h)h--;else if(_[j++]=be,j===l)return _}(q||p)&&(ne[be]=1),de=!0}if(p&&(xe=(y[be]||0)+1,y[be]=xe,xe<m)){const Ie=p[xe-2]||(p[xe-2]=[]);Ie[Ie.length]=be}}else ne[be]=1}if(p)k||(y=ne);else if(!de)return[];k=ne}if(p)for(let q,ee,oe=p.length-1;0<=oe;oe--){q=p[oe],ee=q.length;for(let ne,de=0;de<ee;de++)if(ne=q[de],!k[ne]){if(h)h--;else if(_[j++]=ne,j===l)return _;k[ne]=1}}return _}function na(n,l){const h=v(),p=v(),m=[];for(let k=0;k<n.length;k++)h[n[k]]=1;for(let k,y=0;y<l.length;y++){k=l[y];for(let _,j=0;j<k.length;j++)_=k[j],h[_]&&!p[_]&&(p[_]=1,m[m.length]=_)}return m}function J(n){this.l=n!==!0&&n,this.cache=v(),this.h=[]}function oa(n,l,h){C(n)&&(n=n.query);let p=this.cache.get(n);return p||(p=this.search(n,l,h),this.cache.set(n,p)),p}J.prototype.set=function(n,l){if(!this.cache[n]){var h=this.h.length;for(h===this.l?delete this.cache[this.h[h-1]]:h++,--h;0<h;h--)this.h[h]=this.h[h-1];this.h[0]=n}this.cache[n]=l},J.prototype.get=function(n){const l=this.cache[n];if(this.l&&l&&(n=this.h.indexOf(n))){const h=this.h[n-1];this.h[n-1]=this.h[n],this.h[n]=h}return l};const qa={memory:{charset:"latin:extra",D:3,B:4,m:!1},performance:{D:3,B:3,s:!1,context:{depth:2,D:1}},match:{charset:"latin:extra",G:"reverse"},score:{charset:"latin:advanced",D:20,B:3,context:{depth:3,D:9}},default:{}};function ra(n,l,h,p,m,k,y){setTimeout(function(){const _=n(h?h+"."+p:p,JSON.stringify(y));_&&_.then?_.then(function(){l.export(n,l,h,m,k+1)}):l.export(n,l,h,m,k+1)})}function K(n,l){if(!(this instanceof K))return new K(n);var h;if(n){x(n)?n=qa[n]:(h=n.preset)&&(n=Object.assign({},h[h],n)),h=n.charset;var p=n.lang;x(h)&&(h.indexOf(":")===-1&&(h+=":default"),h=G[h]),x(p)&&(p=ka[p])}else n={};let m,k,y=n.context||{};if(this.encode=n.encode||h&&h.encode||ia,this.register=l||v(),this.D=m=n.resolution||9,this.G=l=h&&h.G||n.tokenize||"strict",this.depth=l==="strict"&&y.depth,this.l=u(y.bidirectional),this.s=k=u(n.optimize),this.m=u(n.fastupdate),this.B=n.minlength||1,this.C=n.boost,this.map=k?aa(m):v(),this.A=m=y.resolution||1,this.h=k?aa(m):v(),this.F=h&&h.F||n.rtl,this.H=(l=n.matcher||p&&p.H)&&fa(l,!1),this.J=(l=n.stemmer||p&&p.J)&&fa(l,!0),h=l=n.filter||p&&p.filter){h=l,p=v();for(let _=0,j=h.length;_<j;_++)p[h[_]]=1;h=p}this.filter=h,this.cache=(l=n.cache)&&new J(l)}function L(n,l,h,p,m){return h&&1<n?l+(p||0)<=n?h+(m||0):(n-1)/(l+(p||0))*(h+(m||0))+1|0:0}function M(n,l,h,p,m,k,y){let _=y?n.h:n.map;(!l[h]||y&&!l[h][y])&&(n.s&&(_=_[p]),y?((l=l[h]||(l[h]=v()))[y]=1,_=_[y]||(_[y]=v())):l[h]=1,_=_[h]||(_[h]=[]),n.s||(_=_[p]||(_[p]=[])),k&&_.includes(m)||(_[_.length]=m,n.m&&((n=n.register[m]||(n.register[m]=[]))[n.length]=_)))}function sa(n,l,h,p,m,k,y,_){let j=[],q=_?n.h:n.map;if(n.s||(q=ua(q,y,_,n.l)),q){let ee=0;const oe=Math.min(q.length,_?n.A:n.D);for(let ne,de,ae=0,le=0;ae<oe&&!((ne=q[ae])&&(n.s&&(ne=ua(ne,y,_,n.l)),m&&ne&&k&&(de=ne.length,de<=m?(m-=de,ne=null):(ne=ne.slice(m),m=0)),ne&&(j[ee++]=ne,k&&(le+=ne.length,le>=p))));ae++);if(ee)return k?ta(j,p,0):void(l[l.length]=j)}return!h&&j}function ta(n,l,h){return n=n.length===1?n[0]:[].concat.apply([],n),h||n.length>l?n.slice(h,h+l):n}function ua(n,l,h,p){return h?n=(n=n[(p=p&&l>h)?l:h])&&n[p?h:l]:n=n[l],n}function N(n,l,h,p,m){let k=0;if(n.constructor===Array)if(m)(l=n.indexOf(l))!==-1?1<n.length&&(n.splice(l,1),k++):k++;else{m=Math.min(n.length,h);for(let y,_=0;_<m;_++)(y=n[_])&&(k=N(y,l,h,p,m),p||k||delete n[_])}else for(let y in n)(k=N(n[y],l,h,p,m))||delete n[y];return k}function va(n){n=n.data;var l=self._index;const h=n.args;var p=n.task;p==="init"?(p=n.options||{},n=n.factory,l=p.encode,p.cache=!1,l&&l.indexOf("function")===0&&(p.encode=Function("return "+l)()),n?(Function("return "+n)()(self),self._index=new self.FlexSearch.Index(p),delete self.FlexSearch):self._index=new K(p)):(n=n.id,l=l[p].apply(l,h),postMessage(p==="search"?{id:n,msg:l}:{id:n}))}t=K.prototype,t.append=function(n,l){return this.add(n,l,!0)},t.add=function(n,l,h,p){if(l&&(n||n===0)){if(!p&&!h&&this.register[n])return this.update(n,l);if(p=(l=this.encode(l)).length){const q=v(),ee=v(),oe=this.depth,ne=this.D;for(let de=0;de<p;de++){let ae=l[this.F?p-1-de:de];var m=ae.length;if(ae&&m>=this.B&&(oe||!ee[ae])){var k=L(ne,p,de),y="";switch(this.G){case"full":if(2<m){for(k=0;k<m;k++)for(var _=m;_>k;_--)if(_-k>=this.B){var j=L(ne,p,de,m,k);M(this,ee,y=ae.substring(k,_),j,n,h)}break}case"reverse":if(1<m){for(_=m-1;0<_;_--)(y=ae[_]+y).length>=this.B&&M(this,ee,y,L(ne,p,de,m,_),n,h);y=""}case"forward":if(1<m){for(_=0;_<m;_++)(y+=ae[_]).length>=this.B&&M(this,ee,y,k,n,h);break}default:if(this.C&&(k=Math.min(k/this.C(l,ae,de)|0,ne-1)),M(this,ee,ae,k,n,h),oe&&1<p&&de<p-1){for(m=v(),y=this.A,k=ae,_=Math.min(oe+1,p-de),m[k]=1,j=1;j<_;j++)if((ae=l[this.F?p-1-de-j:de+j])&&ae.length>=this.B&&!m[ae]){m[ae]=1;const le=this.l&&ae>k;M(this,q,le?k:ae,L(y+(p/2>y?0:1),p,de,_-1,j-1),n,h,le?ae:k)}}}}}this.m||(this.register[n]=1)}}return this},t.search=function(n,l,h){h||(!l&&C(n)?n=(h=n).query:C(l)&&(h=l));let p,m,k,y,_,j=[],q=0;if(h){n=h.query||n,l=h.limit,q=h.offset||0;var ee=h.context;m=h.suggest}if(n&&(p=(n=this.encode(""+n)).length,1<p)){h=v();var oe=[];for(let ne,de=0,ae=0;de<p;de++)if((ne=n[de])&&ne.length>=this.B&&!h[ne]){if(!(this.s||m||this.map[ne]))return j;oe[ae++]=ne,h[ne]=1}p=(n=oe).length}if(!p)return j;for(l||(l=100),h=0,(ee=this.depth&&1<p&&ee!==!1)?(k=n[0],h=1):1<p&&n.sort(ba);h<p;h++){if(_=n[h],ee?(y=sa(this,j,m,l,q,p===2,_,k),m&&y===!1&&j.length||(k=_)):y=sa(this,j,m,l,q,p===1,_),y)return y;if(m&&h===p-1){if(!(oe=j.length)){if(ee){ee=0,h=-1;continue}return j}if(oe===1)return ta(j[0],l,q)}}return ma(j,l,q,m)},t.contain=function(n){return!!this.register[n]},t.update=function(n,l){return this.remove(n).add(n,l)},t.remove=function(n,l){const h=this.register[n];if(h){if(this.m)for(let p,m=0;m<h.length;m++)p=h[m],p.splice(p.indexOf(n),1);else N(this.map,n,this.D,this.s),this.depth&&N(this.h,n,this.A,this.s);if(l||delete this.register[n],this.cache){l=this.cache;for(let p,m,k=0;k<l.h.length;k++)m=l.h[k],p=l.cache[m],p.includes(n)&&(l.h.splice(k--,1),delete l.cache[m])}}return this},t.searchCache=oa,t.export=function(n,l,h,p,m){let k,y;switch(m||(m=0)){case 0:if(k="reg",this.m){y=v();for(let _ in this.register)y[_]=1}else y=this.register;break;case 1:k="cfg",y={doc:0,opt:this.s?1:0};break;case 2:k="map",y=this.map;break;case 3:k="ctx",y=this.h;break;default:return}return ra(n,l||this,h,k,p,m,y),!0},t.import=function(n,l){if(l)switch(x(l)&&(l=JSON.parse(l)),n){case"cfg":this.s=!!l.opt;break;case"reg":this.m=!1,this.register=l;break;case"map":this.map=l;break;case"ctx":this.h=l}},la(K.prototype);let wa=0;function O(n){if(!(this instanceof O))return new O(n);var l;n?D(l=n.encode)&&(n.encode=l.toString()):n={},(l=(self||window)._factory)&&(l=l.toString());const h=typeof window>"u"&&self.exports,p=this;this.o=xa(l,h,n.worker),this.h=v(),this.o&&(h?this.o.on("message",function(m){p.h[m.id](m.msg),delete p.h[m.id]}):this.o.onmessage=function(m){m=m.data,p.h[m.id](m.msg),delete p.h[m.id]},this.o.postMessage({task:"init",factory:l,options:n}))}function P(n){O.prototype[n]=O.prototype[n+"Async"]=function(){const l=this,h=[].slice.call(arguments);var p=h[h.length-1];let m;return D(p)&&(m=p,h.splice(h.length-1,1)),p=new Promise(function(k){setTimeout(function(){l.h[++wa]=k,l.o.postMessage({task:n,id:wa,args:h})})}),m?(p.then(m),this):p}}function xa(a,b,c){let d;try{d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+va.toString()],{type:"text/javascript"}))):new Worker(x(c)?c:"worker/worker.js",{type:"module"})}catch(n){}return d}function Q(n){if(!(this instanceof Q))return new Q(n);var l,h=n.document||n.doc||n;this.K=[],this.h=[],this.A=[],this.register=v(),this.key=(l=h.key||h.id)&&S(l,this.A)||"id",this.m=u(n.fastupdate),this.C=(l=h.store)&&l!==!0&&[],this.store=l&&v(),this.I=(l=h.tag)&&S(l,this.A),this.l=l&&v(),this.cache=(l=n.cache)&&new J(l),n.cache=!1,this.o=n.worker,this.async=!1,l=v();let p=h.index||h.field||h;x(p)&&(p=[p]);for(let m,k,y=0;y<p.length;y++)m=p[y],x(m)||(k=m,m=m.field),k=C(k)?Object.assign({},n,k):n,this.o&&(l[m]=new O(k),l[m].o||(this.o=!1)),this.o||(l[m]=new K(k,this.register)),this.K[y]=S(m,this.A),this.h[y]=m;if(this.C)for(x(n=h.store)&&(n=[n]),h=0;h<n.length;h++)this.C[h]=S(n[h],this.A);this.index=l}function S(n,l){const h=n.split(":");let p=0;for(let m=0;m<h.length;m++)0<=(n=h[m]).indexOf("[]")&&(n=n.substring(0,n.length-2))&&(l[p]=!0),n&&(h[p++]=n);return p<h.length&&(h.length=p),1<p?h:h[0]}function T(n,l){if(x(l))n=n[l];else for(let h=0;n&&h<l.length;h++)n=n[l[h]];return n}function U(n,l,h,p,m){if(n=n[m],p===h.length-1)l[m]=n;else if(n)if(n.constructor===Array)for(l=l[m]=Array(n.length),m=0;m<n.length;m++)U(n,l,h,p,m);else l=l[m]||(l[m]=v()),m=h[++p],U(n,l,h,p,m)}function V(n,l,h,p,m,k,y,_){if(n=n[y])if(p===l.length-1){if(n.constructor===Array){if(h[p]){for(l=0;l<n.length;l++)m.add(k,n[l],!0,!0);return}n=n.join(" ")}m.add(k,n,_,!0)}else if(n.constructor===Array)for(y=0;y<n.length;y++)V(n,l,h,p,m,k,y,_);else y=l[++p],V(n,l,h,p,m,k,y,_)}function ya(n,l,h,p){let m=this.l[n],k=m&&m.length-h;if(k&&0<k)return(k>l||h)&&(m=m.slice(h,h+l)),p&&(m=za.call(this,m)),{tag:n,result:m}}function za(n){const l=Array(n.length);for(let h,p=0;p<n.length;p++)h=n[p],l[p]={id:h,doc:this.store[h]};return l}P("add"),P("append"),P("search"),P("update"),P("remove"),t=Q.prototype,t.add=function(n,l,h){if(C(n)&&(n=T(l=n,this.key)),l&&(n||n===0)){if(!h&&this.register[n])return this.update(n,l);for(let p,m,k=0;k<this.h.length;k++)m=this.h[k],p=this.K[k],x(p)&&(p=[p]),V(l,p,this.A,0,this.index[m],n,p[0],h);if(this.I){let p=T(l,this.I),m=v();x(p)&&(p=[p]);for(let k,y,_=0;_<p.length;_++)if(k=p[_],!m[k]&&(m[k]=1,y=this.l[k]||(this.l[k]=[]),!h||!y.includes(n))&&(y[y.length]=n,this.m)){const j=this.register[n]||(this.register[n]=[]);j[j.length]=y}}if(this.store&&(!h||!this.store[n])){let p;if(this.C){p=v();for(let m,k=0;k<this.C.length;k++)m=this.C[k],x(m)?p[m]=l[m]:U(l,p,m,0,m[0])}this.store[n]=p||l}}return this},t.append=function(n,l){return this.add(n,l,!0)},t.update=function(n,l){return this.remove(n).add(n,l)},t.remove=function(n){if(C(n)&&(n=T(n,this.key)),this.register[n]){for(var l=0;l<this.h.length&&(this.index[this.h[l]].remove(n,!this.o),!this.m);l++);if(this.I&&!this.m)for(let h in this.l){const p=(l=this.l[h]).indexOf(n);p!==-1&&(1<l.length?l.splice(p,1):delete this.l[h])}this.store&&delete this.store[n],delete this.register[n]}return this},t.search=function(n,l,h,p){h||(!l&&C(n)?(h=n,n=""):C(l)&&(h=l,l=0));let m,k,y,_,j,q,ee=[],oe=[],ne=0;if(h)if(h.constructor===Array)y=h,h=null;else{if(n=h.query||n,y=(m=h.pluck)||h.index||h.field,_=h.tag,k=this.store&&h.enrich,j=h.bool==="and",l=h.limit||l||100,q=h.offset||0,_&&(x(_)&&(_=[_]),!n)){for(let ae,le=0;le<_.length;le++)(ae=ya.call(this,_[le],l,q,k))&&(ee[ee.length]=ae,ne++);return ne?ee:[]}x(y)&&(y=[y])}y||(y=this.h),j=j&&(1<y.length||_&&1<_.length);const de=!p&&(this.o||this.async)&&[];for(let ae,le,we,xe=0;xe<y.length;xe++){let be;if(le=y[xe],x(le)||(be=le,le=be.field,n=be.query||n,l=be.limit||l),de)de[xe]=this.index[le].searchAsync(n,l,be||h);else{if(ae=p?p[xe]:this.index[le].search(n,l,be||h),we=ae&&ae.length,_&&we){const Le=[];let Ie=0;j&&(Le[0]=[ae]);for(let qe,Se,Me=0;Me<_.length;Me++)qe=_[Me],(we=(Se=this.l[qe])&&Se.length)&&(Ie++,Le[Le.length]=j?[Se]:Se);Ie&&(ae=j?ma(Le,l||100,q||0):na(ae,Le),we=ae.length)}if(we)oe[ne]=le,ee[ne++]=ae;else if(j)return[]}}if(de){const ae=this;return new Promise(function(le){Promise.all(de).then(function(we){le(ae.search(n,l,h,we))})})}if(!ne)return[];if(m&&(!k||!this.store))return ee[0];for(let ae,le=0;le<oe.length;le++){if(ae=ee[le],ae.length&&k&&(ae=za.call(this,ae)),m)return ae;ee[le]={field:oe[le],result:ae}}return ee},t.contain=function(n){return!!this.register[n]},t.get=function(n){return this.store[n]},t.set=function(n,l){return this.store[n]=l,this},t.searchCache=oa,t.export=function(n,l,h,p,m){if(m||(m=0),p||(p=0),p<this.h.length){const k=this.h[p],y=this.index[k];l=this,setTimeout(function(){y.export(n,l,m?k:"",p,m++)||(p++,m=1,l.export(n,l,k,p,m))})}else{let k,y;switch(m){case 1:k="tag",y=this.l;break;case 2:k="store",y=this.store;break;default:return}ra(n,this,h,k,p,m,y)}},t.import=function(n,l){if(l)switch(x(l)&&(l=JSON.parse(l)),n){case"tag":this.l=l;break;case"reg":this.m=!1,this.register=l;for(let p,m=0;m<this.h.length;m++)p=this.index[this.h[m]],p.register=l,p.m=!1;break;case"store":this.store=l;break;default:const h=(n=n.split("."))[0];n=n[1],h&&n&&this.index[h].import(n,l)}},la(Q.prototype);var Ba={encode:Aa,F:!1,G:""};const Ca=[F("[àáâãäå]"),"a",F("[èéêë]"),"e",F("[ìíîï]"),"i",F("[òóôõöő]"),"o",F("[ùúûüű]"),"u",F("[ýŷÿ]"),"y",F("ñ"),"n",F("[çc]"),"k",F("ß"),"s",F(" & ")," and "];function Aa(n){var l=n=""+n;return l.normalize&&(l=l.normalize("NFD").replace(ea,"")),ca.call(this,l.toLowerCase(),!n.normalize&&Ca)}var Ea={encode:Da,F:!1,G:"strict"};const Fa=/[^a-z0-9]+/,Ga={b:"p",v:"f",w:"f",z:"s",x:"s",ß:"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Da(n){const l=[];if(n=Aa.call(this,n).join(" ")){const h=n.split(Fa),p=h.length;for(let m,k=0,y=0;k<p;k++)if((n=h[k])&&(!this.filter||!this.filter[n])){m=n[0];let _=Ga[m]||m,j=_;for(let q=1;q<n.length;q++){m=n[q];const ee=Ga[m]||m;ee&&ee!==j&&(_+=ee,j=ee)}l[y++]=_}}return l}var Ia={encode:Ha,F:!1,G:""};const Ja=[F("ae"),"a",F("oe"),"o",F("sh"),"s",F("th"),"t",F("ph"),"f",F("pf"),"f",F("(?![aeo])h(?![aeo])"),"",F("(?!^[aeo])h(?!^[aeo])"),""];function Ha(n,l){return n&&(2<(n=Da.call(this,n).join(" ")).length&&(n=E(n,Ja)),l||(1<n.length&&(n=ha(n)),n&&(n=n.split(" ")))),n||[]}var La={encode:Ka,F:!1,G:""};const Ma=F("(?!\\b)[aeo]");function Ka(n){return n&&(1<(n=Ha.call(this,n,!0)).length&&(n=n.replace(Ma,"")),1<n.length&&(n=ha(n)),n&&(n=n.split(" "))),n||[]}G["latin:default"]=ja,G["latin:simple"]=Ba,G["latin:balance"]=Ea,G["latin:advanced"]=Ia,G["latin:extra"]=La;const W=self;let Y;const Z={Index:K,Document:Q,Worker:O,registerCharset:function(n,l){G[n]=l},registerLanguage:function(n,l){ka[n]=l}};(Y=W.define)&&Y.amd?Y([],function(){return Z}):W.exports?W.exports=Z:W.FlexSearch=Z}(this)},8600:n=>{const l=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],h=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],p=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],m=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],k=(y,_,j)=>{let q=y;return typeof _=="string"||Array.isArray(_)?q=y.toLocaleString(_,j):_!==!0&&j===void 0||(q=y.toLocaleString(void 0,j)),q};n.exports=(y,_)=>{if(!Number.isFinite(y))throw new TypeError(`Expected a finite number, got ${typeof y}: ${y}`);const j=(_=Object.assign({bits:!1,binary:!1},_)).bits?_.binary?m:p:_.binary?h:l;if(_.signed&&y===0)return` 0 ${j[0]}`;const q=y<0,ee=q?"-":_.signed?"+":"";let oe;if(q&&(y=-y),_.minimumFractionDigits!==void 0&&(oe={minimumFractionDigits:_.minimumFractionDigits}),_.maximumFractionDigits!==void 0&&(oe=Object.assign({maximumFractionDigits:_.maximumFractionDigits},oe)),y<1)return ee+k(y,_.locale,oe)+" "+j[0];const ne=Math.min(Math.floor(_.binary?Math.log(y)/Math.log(1024):Math.log10(y)/3),j.length-1);return y/=Math.pow(_.binary?1024:1e3,ne),oe||(y=y.toPrecision(3)),ee+k(Number(y),_.locale,oe)+" "+j[ne]}},7529:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path><path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg>'},6873:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"></path><path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path></svg>'},1795:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path></svg>'},3029:n=>{n.exports='<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66.712418 66.712418" version="1.1" id="wrlogo"><defs id="defs1341"><linearGradient y2="48.223869" x2="97.913383" y1="48.223869" x1="2.9740067" gradientTransform="matrix(0.70268446,0,0,0.70268446,72.622704,112.65806)" gradientUnits="userSpaceOnUse" id="linearGradient6615" xlink:href="#linearGradient5691"></linearGradient><linearGradient id="linearGradient5691"><stop style="stop-color:#4876ff;stop-opacity:1" offset="0" id="stop5687"></stop><stop style="stop-color:#04cdff;stop-opacity:1" offset="1" id="stop5689"></stop></linearGradient></defs><metadata id="metadata1344"><rdf:RDF><cc:Work rdf:about><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc><dc:title></dc:title></cc:Work></rdf:RDF></metadata><g id="layer1" transform="translate(-72.477124,-114.81046)"><circle transform="rotate(0.86915873)" r="33.356209" cy="146.54422" cx="108.06871" id="path6016-0-7-6-9-11-2-8-67-6-50-4-33" style="fill:url(#linearGradient6615);fill-opacity:1;stroke:none;stroke-width:23.3824;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:normal"></circle><path style="fill:#d2f9d6;fill-opacity:1;stroke-width:0.702683" d="m 119.62552,156.54036 h 5.46953 c 3.81136,0 6.91161,-3.10024 6.91161,-6.9116 0,-3.81136 -3.10025,-6.9116 -6.91161,-6.9116 h -15.59889 c -3.81136,0 -6.9116,3.10024 -6.9116,6.9116 0,1.96682 0.82917,3.73828 2.15161,4.9982 -0.83057,0.55722 -1.82557,0.88678 -2.89857,0.88678 h -2.082056 c -1.042775,-1.72016 -1.654819,-3.73054 -1.654819,-5.88498 0,-6.2834 5.112035,-11.39543 11.395435,-11.39543 h 15.59889 c 6.28341,0 11.39474,5.11132 11.39474,11.39543 0,6.28411 -5.11222,11.50105 -11.39474,11.39543 l -5.45665,0.14787 v -2.17722 z" id="path114-4-0-85-6-0-5-3-6-1-6"></path><path style="fill:#64e986;fill-opacity:1;stroke-width:0.702683" d="m 91.878825,142.66568 -4.893158,0.0515 c -3.811155,0.0401 -6.911605,3.10024 -6.911605,6.91231 0,3.81065 3.100238,6.91089 6.911605,6.91089 h 15.598893 c 3.81136,0 6.9116,-3.10024 6.9116,-6.91089 0,-1.96682 -0.82917,-3.73899 -2.15162,-4.9989 0.83057,-0.55723 1.82557,-0.88609 2.89857,-0.88609 h 2.08066 c 1.04348,1.71947 1.65552,3.72985 1.65552,5.88499 0,6.28269 -5.11132,11.39472 -11.39473,11.39472 H 86.985667 c -6.282704,0 -11.39544,-5.11132 -11.39544,-11.39472 0,-6.28411 5.112828,-11.49617 11.39544,-11.39614 l 4.893158,0.0779 v 2.17722 z" id="path116-9-4-7-0-8-3-2-08-9-1"></path><path style="fill:#64e986;fill-opacity:1;stroke:none;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:normal" id="path3919-5-9-8-6-6-56-0-37-5-8" d="m 73.728819,47.245763 -10.861072,-6.335289 -10.86107,-6.33529 10.917057,-6.238319 10.917057,-6.238318 -0.05599,12.573609 z" transform="matrix(-0.38260367,0,0,0.3986412,118.95441,127.09397)"></path><path style="fill:#d2f9d6;fill-opacity:1;stroke:none;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:normal" id="path3919-3-3-7-5-9-7-2-6-8-7-7" d="m 73.728819,47.245763 -10.861072,-6.335289 -10.86107,-6.33529 10.917057,-6.238319 10.917057,-6.238318 -0.05599,12.573609 z" transform="matrix(0.4122212,0,0,-0.40812,91.057524,172.76152)"></path></g></svg>'},4575:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>'},4199:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"></path></svg>'},1734:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path></svg>'},4636:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"></path></svg>'},8561:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"></path></svg>'},8536:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg>'},6921:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"></path></svg>'},6442:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>'},426:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>'},430:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>'},4878:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>'},4124:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>'},5056:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg>'},9998:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M200 288H88c-21.4 0-32.1 25.8-17 41l32.9 31-99.2 99.3c-6.2 6.2-6.2 16.4 0 22.6l25.4 25.4c6.2 6.2 16.4 6.2 22.6 0L152 408l31.1 33c15.1 15.1 40.9 4.4 40.9-17V312c0-13.3-10.7-24-24-24zm112-64h112c21.4 0 32.1-25.9 17-41l-33-31 99.3-99.3c6.2-6.2 6.2-16.4 0-22.6L481.9 4.7c-6.2-6.2-16.4-6.2-22.6 0L360 104l-31.1-33C313.8 55.9 288 66.6 288 88v112c0 13.3 10.7 24 24 24zm96 136l33-31.1c15.1-15.1 4.4-40.9-17-40.9H312c-13.3 0-24 10.7-24 24v112c0 21.4 25.9 32.1 41 17l31-32.9 99.3 99.3c6.2 6.2 16.4 6.2 22.6 0l25.4-25.4c6.2-6.2 6.2-16.4 0-22.6L408 360zM183 71.1L152 104 52.7 4.7c-6.2-6.2-16.4-6.2-22.6 0L4.7 30.1c-6.2 6.2-6.2 16.4 0 22.6L104 152l-33 31.1C55.9 198.2 66.6 224 88 224h112c13.3 0 24-10.7 24-24V88c0-21.3-25.9-32-41-16.9z"></path></svg>'},9125:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></svg>'},5732:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>'},9638:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg>'},2164:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg>'},1615:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>'},9885:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"></path></svg>'},8200:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg>'},6368:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"></path></svg>'},2804:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>'},8690:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg>'},5761:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"></path></svg>'},2302:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"></path></svg>'},8135:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>'}},__webpack_module_cache__={};function __webpack_require__(n){var l=__webpack_module_cache__[n];if(l!==void 0)return l.exports;var h=__webpack_module_cache__[n]={id:n,loaded:!1,exports:{}};return __webpack_modules__[n].call(h.exports,h,h.exports,__webpack_require__),h.loaded=!0,h.exports}__webpack_require__.n=n=>{var l=n&&n.__esModule?()=>n.default:()=>n;return __webpack_require__.d(l,{a:l}),l},__webpack_require__.d=(n,l)=>{for(var h in l)__webpack_require__.o(l,h)&&!__webpack_require__.o(n,h)&&Object.defineProperty(n,h,{enumerable:!0,get:l[h]})},__webpack_require__.o=(n,l)=>Object.prototype.hasOwnProperty.call(n,l),__webpack_require__.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},__webpack_require__.nmd=n=>(n.paths=[],n.children||(n.children=[]),n);var __webpack_exports__={};(()=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Chooser:()=>$i,Coll:()=>Kt,CollIndex:()=>ai,CollInfo:()=>ri,Embed:()=>Ji,GDrive:()=>Gi,Loader:()=>Ki,PageEntry:()=>Zt,Pages:()=>Ut,Replay:()=>Vi,ReplayWebApp:()=>ii,Sorter:()=>Zi,Story:()=>Vt,URLResources:()=>Qt});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),h=new Map;class p{constructor(e,r){if(this._$cssResult$=!0,r!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=h.get(this.cssText);return n&&e===void 0&&(h.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const m=g=>new p(typeof g=="string"?g:g+"",l),k=(g,...e)=>{const r=g.length===1?g[0]:e.reduce((o,s,f)=>o+(w=>{if(w._$cssResult$===!0)return w.cssText;if(typeof w=="number")return w;throw Error("Value passed to 'css' function must be a 'css' function result: "+w+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+g[f+1],g[0]);return new p(r,l)},y=n?g=>g:g=>g instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return m(r)})(g):g;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _;const j=window.trustedTypes,q=j?j.emptyScript:"",ee=window.reactiveElementPolyfillSupport,oe={toAttribute(g,e){switch(e){case Boolean:g=g?q:null;break;case Object:case Array:g=g==null?g:JSON.stringify(g)}return g},fromAttribute(g,e){let r=g;switch(e){case Boolean:r=g!==null;break;case Number:r=g===null?null:Number(g);break;case Object:case Array:try{r=JSON.parse(g)}catch{r=null}}return r}},ne=(g,e)=>e!==g&&(e==e||g==g),de={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:ne};class ae extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var r;(r=this.l)!==null&&r!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,o)=>{const s=this._$Eh(o,r);s!==void 0&&(this._$Eu.set(s,o),e.push(s))}),e}static createProperty(e,r=de){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const o=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,o,r);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,r,o){return{get(){return this[r]},set(s){const f=this[e];this[r]=s,this.requestUpdate(e,f,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||de}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const s of o)this.createProperty(s,r[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)r.unshift(y(s))}else e!==void 0&&r.push(y(e));return r}static _$Eh(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,o;((r=this._$Eg)!==null&&r!==void 0?r:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var r;(r=this._$Eg)===null||r===void 0||r.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Et.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return((o,s)=>{n?o.adoptedStyleSheets=s.map(f=>f instanceof CSSStyleSheet?f:f.styleSheet):s.forEach(f=>{const w=document.createElement("style"),z=window.litNonce;z!==void 0&&w.setAttribute("nonce",z),w.textContent=f.cssText,o.appendChild(w)})})(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$ES(e,r,o=de){var s,f;const w=this.constructor._$Eh(e,o);if(w!==void 0&&o.reflect===!0){const z=((f=(s=o.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&f!==void 0?f:oe.toAttribute)(r,o.type);this._$Ei=e,z==null?this.removeAttribute(w):this.setAttribute(w,z),this._$Ei=null}}_$AK(e,r){var o,s,f;const w=this.constructor,z=w._$Eu.get(e);if(z!==void 0&&this._$Ei!==z){const A=w.getPropertyOptions(z),R=A.converter,H=(f=(s=(o=R)===null||o===void 0?void 0:o.fromAttribute)!==null&&s!==void 0?s:typeof R=="function"?R:null)!==null&&f!==void 0?f:oe.fromAttribute;this._$Ei=z,this[z]=H(r,A.type),this._$Ei=null}}requestUpdate(e,r,o){let s=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||ne)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Ei!==e&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(e,o))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,f)=>this[f]=s),this._$Et=void 0);let r=!1;const o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var f;return(f=s.hostUpdate)===null||f===void 0?void 0:f.call(s)}),this.update(o)):this._$EU()}catch(s){throw r=!1,this._$EU(),s}r&&this._$AE(o)}willUpdate(e){}_$AE(e){var r;(r=this._$Eg)===null||r===void 0||r.forEach(o=>{var s;return(s=o.hostUpdated)===null||s===void 0?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$E_!==void 0&&(this._$E_.forEach((r,o)=>this._$ES(o,this[o],r)),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var le;ae.finalized=!0,ae.elementProperties=new Map,ae.elementStyles=[],ae.shadowRootOptions={mode:"open"},ee==null||ee({ReactiveElement:ae}),((_=globalThis.reactiveElementVersions)!==null&&_!==void 0?_:globalThis.reactiveElementVersions=[]).push("1.1.1");const we=globalThis.trustedTypes,xe=we?we.createPolicy("lit-html",{createHTML:g=>g}):void 0,be=`lit$${(Math.random()+"").slice(9)}$`,Le="?"+be,Ie=`<${Le}>`,qe=document,Se=(g="")=>qe.createComment(g),Me=g=>g===null||typeof g!="object"&&typeof g!="function",zt=Array.isArray,ct=g=>{var e;return zt(g)||typeof((e=g)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},Ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qt=/-->/g,Ct=/>/g,Fe=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,bt=/'/g,At=/"/g,Ze=/^(?:script|style|textarea)$/i,Mt=g=>(e,...r)=>({_$litType$:g,strings:e,values:r}),$=Mt(1),He=Symbol.for("lit-noChange"),ye=Symbol.for("lit-nothing"),Dt=new WeakMap,Qe=qe.createTreeWalker(qe,129,null,!1),Xe=(g,e)=>{const r=g.length-1,o=[];let s,f=e===2?"<svg>":"",w=Ye;for(let A=0;A<r;A++){const R=g[A];let H,te,X=-1,pe=0;for(;pe<R.length&&(w.lastIndex=pe,te=w.exec(R),te!==null);)pe=w.lastIndex,w===Ye?te[1]==="!--"?w=qt:te[1]!==void 0?w=Ct:te[2]!==void 0?(Ze.test(te[2])&&(s=RegExp("</"+te[2],"g")),w=Fe):te[3]!==void 0&&(w=Fe):w===Fe?te[0]===">"?(w=s??Ye,X=-1):te[1]===void 0?X=-2:(X=w.lastIndex-te[2].length,H=te[1],w=te[3]===void 0?Fe:te[3]==='"'?At:bt):w===At||w===bt?w=Fe:w===qt||w===Ct?w=Ye:(w=Fe,s=void 0);const Ee=w===Fe&&g[A+1].startsWith("/>")?" ":"";f+=w===Ye?R+Ie:X>=0?(o.push(H),R.slice(0,X)+"$lit$"+R.slice(X)+be+Ee):R+be+(X===-2?(o.push(void 0),A):Ee)}const z=f+(g[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(g)||!g.hasOwnProperty("raw"))throw Error("invalid template strings array");return[xe!==void 0?xe.createHTML(z):z,o]};class et{constructor({strings:e,_$litType$:r},o){let s;this.parts=[];let f=0,w=0;const z=e.length-1,A=this.parts,[R,H]=Xe(e,r);if(this.el=et.createElement(R,o),Qe.currentNode=this.el.content,r===2){const te=this.el.content,X=te.firstChild;X.remove(),te.append(...X.childNodes)}for(;(s=Qe.nextNode())!==null&&A.length<z;){if(s.nodeType===1){if(s.hasAttributes()){const te=[];for(const X of s.getAttributeNames())if(X.endsWith("$lit$")||X.startsWith(be)){const pe=H[w++];if(te.push(X),pe!==void 0){const Ee=s.getAttribute(pe.toLowerCase()+"$lit$").split(be),Ce=/([.?@])?(.*)/.exec(pe);A.push({type:1,index:f,name:Ce[2],strings:Ee,ctor:Ce[1]==="."?jt:Ce[1]==="?"?Ot:Ce[1]==="@"?Xt:dt})}else A.push({type:6,index:f})}for(const X of te)s.removeAttribute(X)}if(Ze.test(s.tagName)){const te=s.textContent.split(be),X=te.length-1;if(X>0){s.textContent=we?we.emptyScript:"";for(let pe=0;pe<X;pe++)s.append(te[pe],Se()),Qe.nextNode(),A.push({type:2,index:++f});s.append(te[X],Se())}}}else if(s.nodeType===8)if(s.data===Le)A.push({type:2,index:f});else{let te=-1;for(;(te=s.data.indexOf(be,te+1))!==-1;)A.push({type:7,index:f}),te+=be.length-1}f++}}static createElement(e,r){const o=qe.createElement("template");return o.innerHTML=e,o}}function tt(g,e,r=g,o){var s,f,w,z;if(e===He)return e;let A=o!==void 0?(s=r._$Cl)===null||s===void 0?void 0:s[o]:r._$Cu;const R=Me(e)?void 0:e._$litDirective$;return(A==null?void 0:A.constructor)!==R&&((f=A==null?void 0:A._$AO)===null||f===void 0||f.call(A,!1),R===void 0?A=void 0:(A=new R(g),A._$AT(g,r,o)),o!==void 0?((w=(z=r)._$Cl)!==null&&w!==void 0?w:z._$Cl=[])[o]=A:r._$Cu=A),A!==void 0&&(e=tt(g,A._$AS(g,e.values),A,o)),e}class Yt{constructor(e,r){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var r;const{el:{content:o},parts:s}=this._$AD,f=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:qe).importNode(o,!0);Qe.currentNode=f;let w=Qe.nextNode(),z=0,A=0,R=s[0];for(;R!==void 0;){if(z===R.index){let H;R.type===2?H=new Je(w,w.nextSibling,this,e):R.type===1?H=new R.ctor(w,R.name,R.strings,this,e):R.type===6&&(H=new ei(w,this,e)),this.v.push(H),R=s[++A]}z!==(R==null?void 0:R.index)&&(w=Qe.nextNode(),z++)}return f}m(e){let r=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}class Je{constructor(e,r,o,s){var f;this.type=2,this._$AH=ye,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=s,this._$Cg=(f=s==null?void 0:s.isConnected)===null||f===void 0||f}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=tt(this,e,r),Me(e)?e===ye||e==null||e===""?(this._$AH!==ye&&this._$AR(),this._$AH=ye):e!==this._$AH&&e!==He&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.S(e):ct(e)?this.A(e):this.$(e)}M(e,r=this._$AB){return this._$AA.parentNode.insertBefore(e,r)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==ye&&Me(this._$AH)?this._$AA.nextSibling.data=e:this.S(qe.createTextNode(e)),this._$AH=e}T(e){var r;const{values:o,_$litType$:s}=e,f=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=et.createElement(s.h,this.options)),s);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===f)this._$AH.m(o);else{const w=new Yt(f,this),z=w.p(this.options);w.m(o),this.S(z),this._$AH=w}}_$AC(e){let r=Dt.get(e.strings);return r===void 0&&Dt.set(e.strings,r=new et(e)),r}A(e){zt(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,s=0;for(const f of e)s===r.length?r.push(o=new Je(this.M(Se()),this.M(Se()),this,this.options)):o=r[s],o._$AI(f),s++;s<r.length&&(this._$AR(o&&o._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cg=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}}class dt{constructor(e,r,o,s,f){this.type=1,this._$AH=ye,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=f,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ye}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,o,s){const f=this.strings;let w=!1;if(f===void 0)e=tt(this,e,r,0),w=!Me(e)||e!==this._$AH&&e!==He,w&&(this._$AH=e);else{const z=e;let A,R;for(e=f[0],A=0;A<f.length-1;A++)R=tt(this,z[o+A],r,A),R===He&&(R=this._$AH[A]),w||(w=!Me(R)||R!==this._$AH[A]),R===ye?e=ye:e!==ye&&(e+=(R??"")+f[A+1]),this._$AH[A]=R}w&&!s&&this.k(e)}k(e){e===ye?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class jt extends dt{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===ye?void 0:e}}const it=we?we.emptyScript:"";class Ot extends dt{constructor(){super(...arguments),this.type=4}k(e){e&&e!==ye?this.element.setAttribute(this.name,it):this.element.removeAttribute(this.name)}}class Xt extends dt{constructor(e,r,o,s,f){super(e,r,o,s,f),this.type=5}_$AI(e,r=this){var o;if((e=(o=tt(this,e,r,0))!==null&&o!==void 0?o:ye)===He)return;const s=this._$AH,f=e===ye&&s!==ye||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,w=e!==ye&&(s===ye||f);f&&this.element.removeEventListener(this.name,this,s),w&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}}class ei{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){tt(this,e)}}const ht=window.litHtmlPolyfillSupport;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt,ft;ht==null||ht(et,Je),((le=globalThis.litHtmlVersions)!==null&&le!==void 0?le:globalThis.litHtmlVersions=[]).push("2.1.1");class _e extends ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,r;const o=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=o.firstChild),o}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((o,s,f)=>{var w,z;const A=(w=f==null?void 0:f.renderBefore)!==null&&w!==void 0?w:s;let R=A._$litPart$;if(R===void 0){const H=(z=f==null?void 0:f.renderBefore)!==null&&z!==void 0?z:null;A._$litPart$=R=new Je(s.insertBefore(Se(),H),H,void 0,f??{})}return R._$AI(o),R})(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return He}}_e.finalized=!0,_e._$litElement$=!0,(mt=globalThis.litElementHydrateSupport)===null||mt===void 0||mt.call(globalThis,{LitElement:_e});const gt=globalThis.litElementPolyfillSupport;gt==null||gt({LitElement:_e}),((ft=globalThis.litElementVersions)!==null&&ft!==void 0?ft:globalThis.litElementVersions=[]).push("3.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=1,at=2,vt=g=>(...e)=>({_$litDirective$:g,values:e});class Bt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class wt extends Bt{constructor(e){if(super(e),this.it=ye,e.type!==at)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ye||e==null)return this.vt=void 0,this.it=e;if(e===He)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.vt;this.it=e;const r=[e];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}}wt.directiveName="unsafeHTML",wt.resultType=1;const xt=vt(wt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class kt extends wt{}kt.directiveName="unsafeSVG",kt.resultType=2;const Et=vt(kt),Ft=vt(class extends Bt{constructor(g){var e;if(super(g),g.type!==Nt||g.name!=="style"||((e=g.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(g){return Object.keys(g).reduce((e,r)=>{const o=g[r];return o==null?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(g,[e]){const{style:r}=g.element;if(this.ct===void 0){this.ct=new Set;for(const o in e)this.ct.add(o);return this.render(e)}this.ct.forEach(o=>{e[o]==null&&(this.ct.delete(o),o.includes("-")?r.removeProperty(o):r[o]="")});for(const o in e){const s=e[o];s!=null&&(this.ct.add(o),o.includes("-")?r.setProperty(o,s):r[o]=s)}return He}});var rt=__webpack_require__(6274),Ht=__webpack_require__(3029),ut=__webpack_require__.n(Ht);const ti=m(rt.Z);function De(g){return[ti,g]}const je=window.IS_APP||window.electron&&window.electron.IS_APP||window.matchMedia("(display-mode: standalone)").matches,It="1.8.2";function ge(g){g.key==" "&&(g.preventDefault(),g.target.click())}class Pt extends _e{constructor(){super(),this.size="1.1em",this.width=null,this.height=null}static get properties(){return{svg:{type:String},size:{type:String},width:{type:String},height:{type:String}}}static get styles(){return k`
    :host {
      display: inline-block;
      padding: 0;
      margin: 0;
      line-height: 1.0em;
    }
    :host svg {
      fill: var(--fa-icon-fill-color, currentcolor);
      width: var(--fa-icon-width, 19px);
      height: var(--fa-icon-height, 19px);
    }
    `}render(){if(!this.svg)return $``;const e={};return this.size?(e.width=this.size,e.height=this.size):(this.width&&(e.width=this.width),this.height&&(e.height=this.height)),$`<svg style="${Ft(e)}"><g>${Et(this.svg)}</g></svg>`}}customElements.define("fa-icon",Pt),customElements.define("wr-anim-logo",class extends Pt{constructor(){super(),this.svg=ut()}static get styles(){return k`
    #wrlogo #stop5687 {
      animation: animLeft 7s linear infinite;
    }

    #wrlogo #stop5689 {
      animation: animRight 7s linear infinite;
    }

    @keyframes animLeft {
      0% {stop-color: #4876ff}
      25% {stop-color: #1b0921}
      50% {stop-color: #4876ff}
      75% {stop-color: #04cdff}
      100% {stop-color: #4876ff}
    }

    @keyframes animRight {
      0% {stop-color: #04cdff}
      25% {stop-color: #4876ff}
      50% {stop-color: #1b0921}
      75% {stop-color: #4876ff}
      100% {stop-color: #04cdff}
    }
    `}}),customElements.define("wr-modal",class extends _e{constructor(){super(),this.title="",this.bgClass="",this.noBgClose=!1}static get properties(){return{title:{type:String},bgClass:{type:String},noBgClose:{type:Boolean}}}static get styles(){return De(k`
    .modal-background {
      background-color: rgba(10, 10, 10, 0.50);
    }

    .modal-card-head {
      background-color: var(--background, #97a1ff);
    }

    .modal-card {
      width: 100%;
      max-width: var(--modal-width, 640px)
    }
    `)}render(){return $`
    <div class="modal is-active">
      <div class="modal-background" @click="${()=>!this.noBgClose&&this.onClose()}"></div>
      <div class="modal-card">
        <header class="modal-card-head ${this.bgClass}">
          <p class="modal-card-title is-3">${this.title}</p>
          <button class="delete" aria-label="close" @click="${this.onClose}"></button>
        </header>
        <section class="modal-card-body">
          <slot></slot>
        </section>
      </div>
    </div>`}onClose(){this.dispatchEvent(new CustomEvent("modal-closed"))}});var yt,fe=__webpack_require__(8200),ue=__webpack_require__.n(fe),Sa=__webpack_require__(4878),ui=__webpack_require__.n(Sa),Pa=__webpack_require__(4124),pi=__webpack_require__.n(Pa);function Ta(g,e){e===void 0&&(e={});var r=e.registrationOptions;r===void 0&&(r={}),delete e.registrationOptions;var o=function(s){for(var f=[],w=arguments.length-1;w-- >0;)f[w]=arguments[w+1];e&&e[s]&&e[s].apply(e,f)};"serviceWorker"in navigator&&yt.then(function(){window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)?(function(s,f,w){fetch(s).then(function(z){z.status===404?(f("error",new Error("Service worker not found at "+s)),yi()):z.headers.get("content-type").indexOf("javascript")===-1?(f("error",new Error("Expected "+s+" to have javascript content-type, but received "+z.headers.get("content-type"))),yi()):ki(s,f,w)}).catch(function(z){return Wt(f,z)})}(g,o,r),navigator.serviceWorker.ready.then(function(s){o("ready",s)}).catch(function(s){return Wt(o,s)})):(ki(g,o,r),navigator.serviceWorker.ready.then(function(s){o("ready",s)}).catch(function(s){return Wt(o,s)}))})}function Wt(g,e){navigator.onLine||g("offline"),g("error",e)}function ki(g,e,r){navigator.serviceWorker.register(g,r).then(function(o){e("registered",o),o.waiting?e("updated",o):o.onupdatefound=function(){e("updatefound",o);var s=o.installing;s.onstatechange=function(){s.state==="installed"&&(navigator.serviceWorker.controller?e("updated",o):e("cached",o))}}}).catch(function(o){return Wt(e,o)})}function yi(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(g){g.unregister()}).catch(function(g){return Wt(emit,g)})}typeof window<"u"&&(yt=typeof Promise<"u"?new Promise(function(g){return window.addEventListener("load",g)}):{then:function(g){return window.addEventListener("load",g)}});class _i{constructor({name:e="sw.js",scope:r="./",appName:o="ReplayWeb.page",requireSubdomainIframe:s=!1}={}){this.name=e,this.scope=r,this.appName=o,this.requireSubdomainIframe=s,this.errorMsg=null}setAppName(e){this.appName=e}register(){let e,r;const o=new Promise((f,w)=>{e=f,r=w});this.errorMsg=this.getSWErrorMsg(),this.errorMsg&&(console.error(this.errorMsg),r(this.errorMsg));const s=f=>{console.error("Error during service worker registration:",f),this.errorMsg=this.getCrossOriginIframeMsg(),this.errorMsg||(this.errorMsg=`${this.appName} could not be loaded due to the following error:
${f.toString()}`),r(this.errorMsg)};return Ta(this.scope+this.name,{registrationOptions:{scope:this.scope},registered(){console.log("Service worker is registered"),e()},error(f){s(f)}}),o}getCrossOriginIframeMsg(){return this.isCrossOriginIframe()?`      Sorry, Service Workers can not be used in cross-origin iframes.
      This web archive embed is loaded from ${window.location.origin} but the top page is on a different origin.
      The embed must be loaded from the same origin or a subdomain.`:null}isCrossOriginIframe(){if(window.parent===window)return!1;try{return window.top.location.href===""}catch{return!0}}getSWErrorMsg(){return navigator.serviceWorker?this.requireSubdomainIframe&&!this.isCrossOriginIframe()?`Sorry, due to security settings, this ${this.appName} embed only be viewed within a subdomain iframe.`:null:this.getCrossOriginIframeMsg()||(window.isSecureContext?"MozAppearance"in document.documentElement.style?"Sorry, Service Workers are disabled in Firefox in Private Mode. Please try loading this page in regular mode instead.":`Sorry, ${this.appName} won't work in this browser as Service Workers are not supported in this window.
  Please try a different browser.`:`
      Sorry, the ${this.appName} system must be loaded from an HTTPS URL (or localhost), but was loaded from: ${window.location.host}.
      Please try loading this page from an HTTPS URL`)}renderErrorReport(e,r){const o=this.errorMsg||r;return o?$`
    <section class="is-fullwidth">
    <div class="has-text-centered">
      <fa-icon style="margin: 1em;flex-grow: 1;" id="wrlogo" size="2.5rem" .svg=${e} aria-hidden="true"></fa-icon>
    </div>
    <div style="white-space: pre-wrap; text-align: center" >${o}</div>
  </section>
    `:""}}class ii extends _e{constructor(e="sw.js"){super(),this.sourceUrl=null,this.collTitle=null,this.showAbout=!1,this.showFileDropOverlay=!1,this.pageParams=new URLSearchParams,this.inited=!1,this.navMenuShown=!1,this.collPageUrl="",this.pageTitle="",this.pageReplay=!1,this.loadInfo=null,this.swName=e,this.swmanager=null,this.skipRuffle=!1,this.useRuffle=!1,this.safariKeyframes(),this.addEventListener("dragenter",r=>{this.maybeStartFileDrop(r)}),this.addEventListener("dragover",r=>{this.maybeStartFileDrop(r)}),this.addEventListener("dragleave",()=>{this.showFileDropOverlay=!1}),this.addEventListener("dragend",()=>{this.showFileDropOverlay=!1}),this.addEventListener("drop",r=>{this.droppedFile=r.dataTransfer.files[0],this.showFileDropOverlay=!1,r.preventDefault()}),this.maybeStartFileDrop=r=>{this.sourceUrl||(this.showFileDropOverlay=!0,r.preventDefault())}}get appName(){return"ReplayWeb.page"}get homeUrl(){return window.location.pathname}static get properties(){return{inited:{type:Boolean},pageParams:{type:Object},sourceUrl:{type:String},navMenuShown:{type:Boolean},showAbout:{type:Boolean},showFileDropOverlay:{type:Boolean},collTitle:{type:String},loadInfo:{type:Object},embed:{type:String},collPageUrl:{type:String},pageTitle:{type:String},pageReplay:{type:Boolean},source:{type:String},skipRuffle:{type:Boolean},swErrorMsg:{type:Object}}}static get styles(){return De(ii.appStyles)}static get appStyles(){return k`
    #wrlogo {
      max-height: 1.0rem;
    }
    .navbar {
      height: 1.5rem;
    }
    .navbar-brand {
      height: 1.5rem;
      display: flex;
      align-items: center;
    }
    .wr-logo-item {
      padding: 0 8px 0 0;
    }
    .no-wrap {
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
    .has-allcaps {
      font-variant-caps: small-caps;
    }
    :host {
      position: fixed;
      left: 0px;
      top: 0px;
      bottom: 0px;
      right: 0px;
      display: flex;
      min-width: 0px;
      flex-direction: column;
    }
    wr-coll {
      height: 100%;
    }
    .navbar {
      padding: 0 0.5em;
    }

    div.navbar-menu fa-icon {
      vertical-align: sub;
    }
    .tagline {
      margin-top: 1.0rem;
    }

    .drop-file-overlay {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      inset: 0;
      z-index: 50;
      font-weight: bold;
      font-size: 1.5rem;
      background: rgba(255,255,255,.5);
      backdrop-filter: blur(2px);
    }

    .drop-file-overlay:after {
      pointer-events: none;
      content: " ";
      position: absolute;
      inset: 0;
      border: 5px dashed #aaa;
      margin: 15px;
    }

    @media screen and (min-width: 840px) {
      .menu-only {
        display: none;
      }

      a.arrow-button {
        padding-left: 4px;
        padding-right: 4px;
      }

      .info-menu {
        padding: 0 1.0em;
      }

      .logo-text {
        padding-left: 0px;
        margin-left: 6px;
      }

      a.navbar-item.logo-text:hover {
        background-color: initial;
      }
    }

    @media screen and (max-width: 840px) {
      .wide-only {
        display: none !important;
      }
    }

    `}get mainLogo(){return ut()}renderNavBrand(){return $`
      <span id="home" class="logo-text has-text-weight-bold is-size-6 has-allcaps wide-only">
      <span class="has-text-primary">replay</span>
      <span class="has-text-link">web.page</span>
      <span class="is-sr-only">Home</span>
    </span>`}renderNavBar(){return $`
    <a href="#skip-main-target" @click=${this.skipMenu} class="skip-link">Skip main navigation</a>
    <nav class="navbar has-background-info" aria-label="main">
      <div class="navbar-brand">
        ${this.embed?$`
          <span class="navbar-item wr-logo-item">
            <fa-icon id="wrlogo" size="1.0rem" .svg=${this.mainLogo} aria-hidden="true"></fa-icon>
          </span>
        `:$`
          <a href="${this.homeUrl}" class="navbar-item wr-logo-item" aria-labelledby="home">
            <fa-icon id="wrlogo" size="1.0rem" .svg=${this.mainLogo} aria-hidden="true"></fa-icon>
            ${this.renderNavBrand()}
          </a>
          ${this.collTitle?$`
          <a href="${this.collPageUrl}" class="no-wrap is-size-6 has-text-black">/&nbsp;&nbsp;<i>${this.collTitle}</i></a>
          <span class="no-wrap is-size-6">&nbsp;&nbsp;/&nbsp;
          ${this.pageReplay?$`<i>${this.pageTitle}</i>`:this.pageTitle}
          </span>
          `:""}
          `}
        <a href="#" role="button" id="menu-button" @click="${this.onNavMenu}" @keyup="${ge}"
          class="navbar-burger burger ${this.navMenuShown?"is-active":""}" aria-label="main menu" aria-haspopup="true" aria-expanded="${this.navMenuShown}">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      ${this.sourceUrl?$``:$`
      <div class="navbar-menu ${this.navMenuShown?"is-active":""}">
        <div class="navbar-start">
          ${je?$`
            <a role="button" href="#" class="navbar-item arrow-button" title="Go Back" @click="${()=>window.history.back()}" @keyup="${ge}">
              <fa-icon size="1.0rem" .svg="${ui()}" aria-hidden="true"></fa-icon><span class="menu-only is-size-7">&nbsp;Go Back</span>
            </a>
            <a role="button" href="#" class="navbar-item arrow-button" title="Go Forward" @click="${()=>window.history.forward()}" @keyup="${ge}">
              <fa-icon size="1.0rem" .svg="${pi()}" aria-hidden="true"></fa-icon><span class="menu-only is-size-7">&nbsp;Go Forward</span>
            </a>
          `:""}
        </div>
        ${this.embed?$``:$`
        <div class="navbar-end">
          ${this.renderNavEnd()}
        </div>`}
      </div>`}
    </nav>
    <p id="skip-main-target" tabindex="-1" class="is-sr-only">Skipped</p>`}renderNavEnd(){return $`
      <a href="/docs" target="_blank" class="navbar-item is-size-6">
      <fa-icon .svg="${ue()}" aria-hidden="true"></fa-icon><span>&nbsp;User Docs</span>
    </a>
    <!--
    -- NB: the About modal is currently inaccessible to people using keyboards or screen readers.
    --  Should all the JS and infrastructure for accessible modals be added, or should About be a normal page?
    -->
    <a href="?terms" @click="${e=>{e.preventDefault(),this.showAbout=!0}}"class="navbar-item is-size-6">About
    </a>`}renderColl(){return $`
    <wr-coll .loadInfo="${this.loadInfo}"
    sourceUrl="${this.sourceUrl}"
    embed="${this.embed}"
    appName="${this.appName}"
    swName="${this.swName}"
    .appLogo="${this.mainLogo}"
    @replay-favicons=${this.onFavIcons}
    @update-title=${this.onTitle}
    @coll-loaded=${this.onCollLoaded}
    @about-show=${()=>this.showAbout=!0}></wr-coll>`}renderHomeIndex(){return $`
      <wr-coll-index>
      ${je?"":$`
      <p slot="header" class="tagline is-size-5 has-text-centered">Explore and Replay Interactive Archived Webpages Directly in your Browser. <i><a target="_blank" href="./docs/examples">(See Examples)</a></i></p>
      `}
      <wr-chooser slot="header" .droppedFile=${this.droppedFile} @did-drop-file="${()=>this.droppedFile=null}" @load-start=${this.onStartLoad}></wr-chooser>
    </wr-coll-index>`}render(){return this.inited?this.embed&&this.swErrorMsg?this.swErrorMsg:$`
      ${this.embed&&this.embed!=="full"?"":this.renderNavBar()}

      ${this.sourceUrl?this.renderColl():this.renderHomeIndex()}

      ${this.showAbout?this.renderAbout():""}

      ${this.showFileDropOverlay?this.renderDropFileOverlay():""}
    `:$``}firstUpdated(){this.initRoute();const e=this.swName+(this.useRuffle?"?ruffle=1":"");this.swmanager=new _i({name:e,appName:this.appName}),this.swmanager.register().catch(()=>this.swErrorMsg=this.swmanager.renderErrorReport(this.mainLogo)),window.addEventListener("popstate",()=>{this.initRoute()})}updated(e){e.has("sourceUrl")&&(this.collTitle=null)}onFavIcons(e){const r=document.querySelector("head"),o=document.querySelectorAll("link[rel*='icon']");for(const s of o)r.removeChild(s);for(const s of e.detail.icons){const f=document.createElement("link");f.rel=s.rel,f.href=s.href,r.appendChild(f)}}skipMenu(e){e.preventDefault(),this.renderRoot.querySelector("#skip-main-target").focus()}onNavMenu(e){e.preventDefault(),e.stopPropagation(),this.navMenuShown=!this.navMenuShown,this.navMenuShown&&(document.addEventListener("click",r=>{r.preventDefault(),this.navMenuShown=!1,this.renderRoot.querySelector("#menu-button").focus()},{once:!0}),document.addEventListener("keypress",r=>{r.key=="Escape"&&(r.preventDefault(),this.navMenuShown=!1,this.renderRoot.querySelector("#menu-button").focus())},{once:!0}))}initRoute(){this.inited=!0,this.pageParams=new URLSearchParams(window.location.search);let e=this.pageParams.get("state");if(e)try{if(e=JSON.parse(e),e.ids instanceof Array&&e.userId&&e.action==="open")return this.pageParams.set("source","googledrive://"+e.ids[0]),this.pageParams.delete("state"),void(window.location.search=this.pageParams.toString())}catch(r){console.log(r)}if(this.source){this.pageParams.set("source",this.source);const r=new URL(window.location.href);r.search=this.pageParams.toString(),window.history.replaceState({},document.title,r.href)}if(this.sourceUrl=this.pageParams.get("source")||"",this.embed=this.pageParams.get("embed")||"",this.embed?this.useRuffle=this.pageParams.get("ruffle")==="1":this.useRuffle=!this.skipRuffle,this.pageParams.has("terms")&&(this.showAbout=!0),this.pageParams.has("embed")&&(this.loadInfo||(this.loadInfo={})),this.pageParams.get("config"))try{this.loadInfo.extraConfig=JSON.parse(this.pageParams.get("config"))}catch(r){console.log("invalid config: "+r)}this.pageParams.get("baseUrlSourcePrefix")&&(this.loadInfo.extraConfig=this.loadInfo.extraConfig||{},this.loadInfo.extraConfig.baseUrlSourcePrefix=this.pageParams.get("baseUrlSourcePrefix")),this.pageParams.get("basePageUrl")&&(this.loadInfo.extraConfig=this.loadInfo.extraConfig||{},this.loadInfo.extraConfig.baseUrl=this.pageParams.get("basePageUrl")),this.pageParams.get("customColl")&&(this.loadInfo.customColl=this.pageParams.get("customColl")),this.pageParams.get("noWebWorker")==="1"&&(this.loadInfo.noWebWorker=!0),this.pageParams.get("noCache")==="1"&&(this.loadInfo.noCache=!0),this.pageParams.get("hideOffscreen")==="1"&&(this.loadInfo.hideOffscreen=!0),this.pageParams.get("loading")==="eager"&&(this.loadInfo.loadEager=!0),this.pageParams.get("swName")&&(this.swName=this.pageParams.get("swName")),je&&this.sourceUrl.startsWith("file://")&&(this.loadInfo={sourceUrl:this.sourceUrl,loadUrl:this.sourceUrl.replace("file://","file2://")})}onStartLoad(e){this.pageParams.set("source",e.detail.sourceUrl);const r=new URL(window.location.href);r.search=this.pageParams.toString(),this.collPageUrl=r.toString(),e.detail.isFile?(window.history.pushState({},"",this.collPageUrl),this.sourceUrl=e.detail.sourceUrl,this.loadInfo=e.detail):window.location.search=this.pageParams.toString()}onCollLoaded(e){this.loadInfo=null,e.detail.collInfo&&(this.collTitle=e.detail.collInfo.title),e.detail.alreadyLoaded||e.detail.sourceUrl!==this.sourceUrl&&(this.pageParams.set("source",e.detail.sourceUrl),window.location.search=this.pageParams.toString())}onTitle(e){e.detail.title&&(this.pageTitle=e.detail.title,this.pageReplay=e.detail.replayTitle,document.title=(e.detail.replayTitle?"Archive of ":"")+this.pageTitle+" | "+this.appName)}safariKeyframes(){const e=document.createElement("style");document.head.appendChild(e),e.appendChild(document.createTextNode(`
    @keyframes spinAround {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
    `))}renderAbout(){return $`
      <div class="modal is-active">
        <div class="modal-background" @click="${this.onAboutClose}"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">About ReplayWeb.page ${je?"App":""}</p>
              <button class="delete" aria-label="close" @click="${this.onAboutClose}"></button>
            </header>
            <section class="modal-card-body">
              <div class="container">
                <div class="content">
                  <div style="display: flex">
                    <div class="has-text-centered" style="width: 220px">
                      <wr-anim-logo class="logo" size="48px"></wr-anim-logo>
                      <div style="font-size: smaller; margin-bottom: 1em">${je?"App":""} v${It}</div>
                    </div>

                    ${je?$`
                    <p>ReplayWeb.page App is a standalone app for Mac, Windows and Linux that loads web archive files provided by the user
                    and renders them for replay.</p>

                    `:$`
                    <p><a href="https://replayweb.page" target="_blank">ReplayWeb.page</a> is a browser-based viewer that loads web archive files provided by the user
                    and renders them for replay in the browser.</p>`}
                  </div>

                  <p>Full source code is available at:
                    <a href="https://github.com/webrecorder/replayweb.page" target="_blank">https://github.com/webrecorder/replayweb.page</a>
                  </p>

                  <p>See the <a target="_blank" href="./docs">User Docs</a> or the GitHub README for more info on how it works.</p>

                  <p>ReplayWeb.page is part of the <a href="https://webrecorder.net/" target="_blank">Webrecorder Project</a>.</p>

                  <h3>Privacy</h3>
                  <p><b>No data is uploaded anywhere and no information is collected.</b></p>
                  <p>All content rendered stays directly in your browser.<br/>When loading an archive from Google Drive,
                  the site may ask for account authorization to download the specified file only.</p>

                  <h4>Disclaimer of Warranties</h4>
                  <p>The application is provided "as is" without any guarantees.</p>
                  <details>
                    <summary>Legalese:</summary>
                    <p style="font-size: 0.8rem">DISCLAIMER OF SOFTWARE WARRANTY. WEBRECORDER SOFTWARE PROVIDES THIS SOFTWARE TO YOU "AS AVAILABLE"
                    AND WITHOUT WARRANTY OF ANY KIND, EXPRESS, IMPLIED OR OTHERWISE,
                    INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
                  </details>
                  <div class="has-text-centered">
                    <a class="button is-warning" href="#" @click="${this.onAboutClose}">Close</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>`}onAboutClose(){this.showAbout=!1}renderDropFileOverlay(){return $`
      <div class="drop-file-overlay">Drop to load web archive</div>
    `}}customElements.define("replay-app-main",ii);var Ua=__webpack_require__(8135),Ra=__webpack_require__.n(Ua);class $i extends _e{constructor(){super(),this.fileDisplayName="",this.file=null,this.droppedFile=null,this.hasNativeFS=!!window.showOpenFilePicker&&!je,this.newFullImport=!1,this.noHead=!1,this.showOpenFilePickerOptions={types:[{description:"WARC, WACZ, HAR and WBN Files",accept:{"application/warc":[".warc",".gz"],"application/har":[".har"],"application/wacz":[".wacz"],"application/wbn":[".wbn"],"application/json":[".json"]}}]}}static get properties(){return{fileDisplayName:{type:String},droppedFile:{type:File},newFullImport:{type:Boolean},noHead:{type:Boolean}}}updated(e){e.has("droppedFile")&&this.droppedFile&&this.onDropFile()}onDropFile(){this.showOpenFilePickerOptions.types.map(e=>e.accept).map(Object.values).flat(2).some(e=>this.droppedFile.name.endsWith(e))&&(this.setFile(this.droppedFile),this.dispatchEvent(new CustomEvent("did-drop-file",{bubbles:!0,composed:!0})),this.onStartLoad())}onChooseFile(e){e.currentTarget.files.length!==0&&this.setFile(e.currentTarget.files[0])}setFile(e){this.file=e,this.fileDisplayName="file://"+(this.file.path||this.file.name)}async onChooseNativeFile(){if(!this.hasNativeFS)return;const[e]=await window.showOpenFilePicker(this.showOpenFilePickerOptions);this.fileHandle=e,this.file=await e.getFile(),this.fileDisplayName="file://"+e.name}randomId(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}onStartLoad(e){e&&e.preventDefault();const r={sourceUrl:this.fileDisplayName};return this.file&&(r.isFile=!0,this.file.path?(r.loadUrl="file2://"+this.file.path,r.noCache=!0):this.fileHandle?(r.loadUrl=this.fileDisplayName,r.extra={fileHandle:this.fileHandle},r.noCache=!1):(r.loadUrl=URL.createObjectURL(this.file),r.blob=this.file,r.noCache=!1),r.size=this.file.size,r.name=this.fileDisplayName),r.newFullImport=this.newFullImport,this.dispatchEvent(new CustomEvent("load-start",{bubbles:!0,composed:!0,detail:r})),!1}onInput(e){this.fileDisplayName=e.currentTarget.value,this.file&&this.fileDisplayName&&this.fileDisplayName.startsWith("file://")&&(this.file=null,this.fileDisplayName="")}static get styles(){return De(k`
    :host {
      min-width: 0;
    }
    .extra-padding {
      padding: 1.5em;
    }
    .less-padding {
      padding-top: 1.0em;
      padding-bottom: 1.0em;
    }
    div.field.has-addons {
      flex: auto;
    }
    .panel-heading {
      background-color: #cff3ff;
    }
    .message-header {
      background-color: #cff3ff;
      color: black;
    }
    .heading-size {
      font-size: 0.85rem;
    }
    form {
      flex-grow: 1;
      flex-shrink: 0;
      margin-bottom: 0;
    }
    p.control.is-expanded {
      width: min-content;
    }
    input.input.file-name:invalid {
      border: 1px dashed red;
    }
    input.input.file-name {
      border-width: 1px;
      margin-left: -1px;
      max-width: 100%;
    }
    @media screen and (max-width: 1023px) {
      .file-icon {
        margin-right: 0px;
      }
    }

    @media screen and (max-width: 768px) {
      #filename {
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
      }
    }
  `)}render(){return $`
    <section class="section ${this.noHead?"is-paddingless":"less-padding"}">
      <div class="${this.noHead?"":"panel"}">
        <div class="${this.noHead?"is-hidden":"panel-heading"} heading-size">${this.newFullImport?"Import Existing":"Load"} Web Archive</div>
        <div class="${this.noHead?"":"panel-body extra-padding"} file has-name">
          <form class="is-flex" @submit="${this.onStartLoad}">
            <label class="file-label">
              ${this.hasNativeFS?"":$`
              <input class="file-input"
                @click="${e=>e.currentTarget.value=null}"
                @change=${this.onChooseFile} type="file" id="fileupload" name="fileupload">`}
              <span class="file-cta" @click="${this.onChooseNativeFile}">
                <span class="file-icon">
                  <fa-icon size="0.9em" .svg=${Ra()} aria-hidden="true"></fa-icon>
                </span>
                <span class="file-label is-hidden-touch">
                  Choose File...
                </span>
              </span>
            </label>

            <div class="field has-addons">
              <p class="control is-expanded">
                <input class="file-name input" type="text"
                name="filename" id="filename"
                pattern="((file|http|https|ipfs|s3):\/\/.*\.(warc|warc.gz|zip|wacz|har|wbn|json)([?#].*)?)|(googledrive:\/\/.+)|(ssb:\/\/.+)"
                .value="${this.fileDisplayName}"
                @input="${this.onInput}"
                autocomplete="off"
                placeholder="${this.newFullImport?"Click 'Choose File' to select a local archive to import":"Enter a URL or click 'Choose File' to select a WARC, WACZ, HAR or WBN archive source"}">
              </p>
              <div class="control">
                <button type="submit" class="button is-hidden-mobile is-primary">${this.newFullImport?"Import":"Load"}</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>`}}customElements.define("wr-chooser",$i);var Oa=__webpack_require__(8600),Lt=__webpack_require__.n(Oa),Na=__webpack_require__(1734),Wa=__webpack_require__.n(Na),Va=__webpack_require__(6921),Za=__webpack_require__.n(Va),Qa=__webpack_require__(8536),Ya=__webpack_require__.n(Qa),Xa=__webpack_require__(2804),bi=__webpack_require__.n(Xa);class ai extends _e{constructor(){super(),this.colls=[],this.filteredColls=[],this.sortedColls=null,this.query="",this.hideHeader=localStorage.getItem("index:hideHeader")==="1",this._deleting={},this.dateName="Date Loaded",this.headerName="Loaded Archives",this.typeFilter="",this.indexParams=""}get sortKeys(){return[{key:"title",name:"Title"},{key:"sourceUrl",name:"Source"},{key:"ctime",name:this.dateName},{key:"size",name:"Total Size"}]}static get properties(){return{colls:{type:Array},query:{type:String},filteredColls:{type:Array},sortedColls:{type:Array},hideHeader:{type:Boolean},_deleting:{type:Object},dateName:{type:String},headerName:{type:String}}}firstUpdated(){this.loadColls()}updated(e){e.has("hideHeader")&&localStorage.setItem("index:hideHeader",this.hideHeader?"1":"0"),(e.has("colls")||e.has("query"))&&this.filter()}filter(){if(this.query){this.filteredColls=[];for(const e of this.colls)(e.sourceUrl.indexOf(this.query)>=0||e.filename.indexOf(this.query)>=0||e.loadUrl&&e.loadUrl.indexOf(this.query)>=0||e.title&&e.title.indexOf(this.query)>=0)&&this.filteredColls.push(e)}else this.filteredColls=this.colls}async loadColls(){const e=await fetch(`./w/api/coll-index?${this.indexParams}`);try{if(e.status!==200)throw new Error("Invalid API Response, Retry");const r=await e.json();this.colls=r.colls.map(o=>(o.title=o.title||o.filename,o)),this._deleting={},this.sortedColls=[]}catch{setTimeout(()=>this.loadColls(),500)}}async onDeleteColl(e){if(e.preventDefault(),e.stopPropagation(),!this.sortedColls)return;const r=Number(e.currentTarget.getAttribute("data-coll-index")),o=this.sortedColls[r];if(!o||this._deleting[o.sourceUrl])return;this._deleting[o.sourceUrl]=!0,this.requestUpdate();const s=await fetch(`./w/api/c/${o.id}`,{method:"DELETE"});if(s.status===200){const f=await s.json();this.colls=f.colls}return!1}static get styles(){return De(ai.compStyles)}static get compStyles(){return k`
    :host {
      overflow-y: auto;
      min-width: 0;
    }
    .size {
      margin-right: 20px;
    }
    .extra-padding {
      padding: 2em;
    }
    .no-top-padding {
      padding-top: 1.0em;
    }
    .panel-heading {
      font-size: 0.85rem;
    }
    .is-loading {
      line-height: 1.5em;
      height: 1.5em;
      border: 0px;
      background-color: transparent !important;
      width: auto;
    }
    div.panel.is-light {
      margin-bottom: 2em;
    }

    fa-icon {
      vertical-align: middle;
    }

    .panel-color {
      background-color: rgb(210, 249, 214);
    }

    .copy {
      color: black;
      margin: 0px;
      margin: 0;
      line-height: 0.4em;
      padding: 6px;
      border-radius: 10px;
      display: none;
      position: absolute;
    }
    .copy:active {
      background-color: lightgray;
    }
    .sort-header {
      padding: 0.3rem 0.3rem 0.3rem 0;
      display: flex;
      flex-direction: row;
      flex-flow: row wrap;
    }
    .sort-header .control {
      flex: auto;

      padding-left: 0.3rem;
      width: initial;
    }
    wr-sorter {
      padding: 0.3rem;
    }
    a.button.is-small.collapse {
      border-radius: 6px;
    }
    .icon.is-left {
      margin-left: 0.5rem;
    }
    .coll-block {
      position: relative;
    }
    .delete-button {
      width: 32px;
      position: absolute;
      top: 10px;
      right: 10px;
    }
    #sort-select::after {
      display: none;
    }
    header {
      transform: translate(0px, 0px);
      transition: all 0.5s ease 0s;
      visibility: visible;
      display: flex;
      flex-direction: column;
    }
    header.closed {
      transform: translate(0, -100%);
      transition: all 0.5s ease 0s;
      visibility: visible;
      height: 269px;
      margin-top: -269px;
    }
    `}renderHeader(){return $`<h2 class="panel-heading panel-color"><span>${this.headerName}</span></h2>`}renderSearchHeader(){return""}render(){const e=this.childElementCount>0;return $`
    <header class="${this.hideHeader?"closed":""}">
      <slot name="header"></slot>
    </header>
    <section class="section no-top-padding">
      <div class="sort-header is-small">
        ${e?$`
        <button @click=${()=>this.hideHeader=!this.hideHeader} class="collapse button is-small">
          <span class="icon"><fa-icon .svg=${this.hideHeader?Ya():Za()}></span>
          <span>${this.hideHeader?"Show ":"Hide"} <span class="is-sr-only">Header</span></span>
        </button>`:""}
      </div>
      <div class="panel">
        ${this.renderHeader()}
        ${this.colls.length?$`
        <div class="panel-block sort-header is-small">
        ${this.renderSearchHeader()}
          <div class="control has-icons-left has-addons">
            <input type="text" class="input is-small" @input="${r=>this.query=r.currentTarget.value}" .value="${this.query}" type="text"
            placeholder="Search by Archive Title or Source">
            <span class="icon is-left is-small"><fa-icon .svg="${bi()}"/></span>
          </div>
          <wr-sorter id="index"
          sortKey="ctime"
          ?sortDesc="${!0}"
          .sortKeys="${this.sortKeys}"
          .data="${this.filteredColls}"
          @sort-changed="${r=>this.sortedColls=r.detail.sortedData}">
          </wr-sorter>
        </div>

        <div class="coll-list">
          ${this.sortedColls&&this.sortedColls.map((r,o)=>$`
            <div class="coll-block panel-block">
              ${this.renderCollInfo(r)}
              ${this._deleting[r.sourceUrl]?$`
              <span class="button delete-button is-loading is-static">Deleting</span`:$`
              <button class="delete delete-button" aria-label="Unload Collection" title="Unload Collection" data-coll-index="${o}" @click="${this.onDeleteColl}"></button>
              `}
            </div>
          `)}
        </div>

        `:$`

        <div class="panel-block extra-padding">
        ${this.sortedColls===null?$`<i>Loading Archives...</i>`:this.renderEmpty()}
        </div>
        `}
      </div>
    </section>
    `}renderCollInfo(e){return $`<wr-coll-info .coll=${e}></wr-coll-info>`}renderEmpty(){return $`<i>No Archives so far! Archives loaded in the section above will appear here.</i>`}}class ri extends _e{constructor(){super(),this.detailed=!1,this.canDelete=!1}static get properties(){return{coll:{type:Object},detailed:{type:Boolean},canDelete:{type:Boolean}}}static get styles(){return De(ri.compStyles)}static get compStyles(){return k`
    .columns {
      width: 100%;
    }
    .column {
      word-break: break-word;
      position: relative;
    }

    :host {
      width: 100%;
      height: 100%;
      min-width: 0px;
    }

    :host(.is-list) .columns {
      display: flex !important;
      flex-direction: column;
    }

    :host(.is-list) .column {
      width: 100% !important;
    }

    .col-title:hover {

    }
    .col-title a {
      display: block;
      height: 100%;
    }
    .column:hover > .copy, .source-text:hover + .copy, .copy:hover {
      display: inline;
    }
    .copy {
      color: black;
      margin: 0px;
      margin: 0;
      line-height: 0.4em;
      padding: 6px;
      border-radius: 10px;
      display: none;
      position: absolute;
    }
    .copy:active {
      background-color: lightgray;
    }
    .minihead {
      font-size: 10px;
      font-weight: bold;
    }
    `}renderSource(e){return $`
  <div class="column is-4">
    <span class="source-text"><p class="minihead">Source</p>
    ${e.sourceUrl&&(e.sourceUrl.startsWith("http://")||e.sourceUrl.startsWith("https://"))?$`
    <a href="${e.sourceUrl}">${e.sourceUrl}&nbsp;</a>`:$`
    ${e.sourceUrl}&nbsp;`}
    </span>

    <a @click="${r=>this.onCopy(r,e.sourceUrl)}" class="copy"><fa-icon .svg="${Wa()}"/></a>
    ${e.sourceUrl&&e.sourceUrl.startsWith("googledrive://")?$`
      <p><i>(${e.filename})</i></p>`:""}
  </div>
  <div class="column is-2"><p class="minihead">Date Loaded</p>${e.ctime?new Date(e.ctime).toLocaleString():""}</div>
  <div class="column is-2"><p class="minihead">Total Size</p>${Lt()(Number(e.size||0))}</div>
  `}renderSummaryView(){const e=this.coll;return $`
    <div class="columns">
      <div class="column col-title is-4">
        <span class="subtitle has-text-weight-bold">
          <a href="?source=${encodeURIComponent(e.sourceUrl)}">${e.title||e.filename}</a>
        </span>
      </div>
      ${this.renderSource(e)}
    </div>`}renderDetailed(){const e=this.coll;let{numValid:r,numInvalid:o,domain:s,certFingerprint:f,datapackageHash:w,software:z}=this.coll.verify||{};r=r||0,o=o||0;const A=f?`https://crt.sh/?q=${f}`:"";return $`
      <div class="columns">
        <div class="column col-title is-4">
          <span class="subtitle has-text-weight-bold">
            ${e.title||e.filename}
          </span>
        </div>
        ${e.desc?$`
          <div class="column">
            <p class="minihead">Description</p>
            ${e.desc}
          </div>`:$`
        `}
        <div class="column"><p class="minihead">Filename</p>${e.filename}</div>
        ${this.renderSource(e)}

        ${s?$`
        <div class="column">
          <p class="minihead">Observed By</p>
          <p>${s}</p>
          ${A?$`<span><a target="_blank" href="${A}">View Certificate</a></span>`:""}
        </div>
        `:z?$`
        <div class="column">
          <p class="minihead">Created With</p>
          ${z||"Unknown"}
        </div>
        `:""}

        <div class="column">
          <p class="minihead">Validation</p>
          ${r>0||o>0?$`
          <p>${r} hashes verified${o?$`, ${o} invalid`:""}</p>`:$`
          Not Available`}
        </div>

        <div class="column">
          <p class="minihead">Package Hash</p>
        ${w||"Not Available"}
        </div>

        <div class="column">
          <p class="minihead">Loading Mode</p>
          ${e.onDemand?"Download On-Demand":"Fully Local"}
        </div>
        <div class="column">
          <p class="minihead">Collection id</p>
          ${e.coll}
        </div>
      </div>`}render(){return this.detailed?this.renderDetailed():this.renderSummaryView()}onCopy(e,r){return e.preventDefault(),e.stopPropagation(),navigator.clipboard.writeText(r),!1}onPurge(e){const r={reload:e};this.dispatchEvent(new CustomEvent("coll-purge",{detail:r}))}}function Si(g){if(!g)return"";g.length<14&&(g+="00000101000000".substr(g.length));const e=g.substring(0,4)+"-"+g.substring(4,6)+"-"+g.substring(6,8)+"T"+g.substring(8,10)+":"+g.substring(10,12)+":"+g.substring(12,14)+"-00:00";return new Date(e)}function zi(g){let e=null;try{e=new Date(g.ts||g.date)}catch{}const r=e&&!isNaN(e)?oi(e.toISOString()):"";return{date:e,timestamp:r}}function oi(g){return g.replace(/[-:T]/g,"").slice(0,14)}function mi(g,e,r){const o=new URLSearchParams;return o.set("view",g),o.set("url",e),o.set("ts",r),"#"+o.toString()}async function er(g){try{new URL(g)}catch{g=new URL(g,document.baseURI).href}const e=await async function(r,o){const s=new TextEncoder().encode(r),f=await crypto.subtle.digest(o,s);return Array.from(new Uint8Array(f)).map(z=>z.toString(16).padStart(2,"0")).join("")}(g,"SHA-256");return{url:g,coll:"id-"+e.slice(0,12)}}customElements.define("wr-coll-info",ri),customElements.define("wr-coll-index",ai);var tr=__webpack_require__(5056),ir=__webpack_require__.n(tr),ar=__webpack_require__(5732),Ci=__webpack_require__.n(ar),rr=__webpack_require__(8561),Ai=__webpack_require__.n(rr),or=__webpack_require__(9885),nr=__webpack_require__.n(or),sr=__webpack_require__(4636),lr=__webpack_require__.n(sr),cr=__webpack_require__(1615),dr=__webpack_require__.n(cr),hr=__webpack_require__(2302),fr=__webpack_require__.n(hr),ur=__webpack_require__(6368),Di=__webpack_require__.n(ur),pr=__webpack_require__(9125),Ei=__webpack_require__.n(pr),br=__webpack_require__(9998),Ii=__webpack_require__.n(br),mr=__webpack_require__(2164),gr=__webpack_require__.n(mr),vr=__webpack_require__(426),wr=__webpack_require__.n(vr),xr=__webpack_require__(430),kr=__webpack_require__.n(xr),yr=__webpack_require__(1795),_r=__webpack_require__.n(yr),$r=__webpack_require__(7529),Sr=__webpack_require__.n($r),zr=__webpack_require__(6873),Cr=__webpack_require__.n(zr),Ar=__webpack_require__(4575),Dr=__webpack_require__.n(Ar);class Pi extends _e{constructor(){super(),this.collInfo=null,this.appLogo=null,this.ts=null,this.url=null,this.active=!1}get renderRoot(){return this}static get properties(){return{collInfo:{type:Object},appLogo:{type:Object},url:{type:String},ts:{type:String},active:{type:Boolean}}}static get embedStyles(){return k`
    rwp-embed-receipt {
      display: flex;
      flex-direction: column;
    }

    .icon {
      vertical-align: text-top;
    }

    #embed-dropdown {
      max-height: calc(100vh - 50px);
      padding-top: 0;
      margin-top: -0.5rem;
      display: block;
      z-index: 1;
      pointer-events: none;
      transition: all .3s linear;
      transform-origin: left top;
      transform: scaleY(0);
      transition: all 300ms cubic-bezier(0.15, 0, 0.1, 1);
      filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.15));
    }

    .dropdown.is-active #embed-dropdown {
      transform: scaleY(1);
    }

    .embed-info-container {
      width: 100%;
      display: flex !important;
      justify-content: center;
    }

    button.embed-info {
      padding: 0;
      background-color: white;
      justify-content: space-between;
      max-width: 40rem;
      width: calc(100% - 1rem);
      height: 42px;
      border-color: #D1D5DA;
      border-width: 1px;
      border-style: solid;
      border-radius: 999px;
      display: flex;
      align-items: center;
      text-overflow: ellipsis;
      filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.15));
      transition-duration: 50ms;
      transition-timing-function: ease-out;
      cursor: pointer;
      z-index: 2
    }

    button.embed-info:active {
      color: initial;
    }

    button.embed-info:hover {
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
      transform: scale(1.01);
    }

    button.embed-info:hover:active {
      transform: translateY(0.25rem);
    }

    .embed-info-buttontext {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;  
      flex-grow: 1;
      text-align: start;
      font-size: 13px;
    }

    .embed-info-drop {
      font-size: 14px;
      padding: 1rem;
      padding-top: 2rem;
      max-width: 38rem;
      max-height: 42rem;
      width: calc(100% - 2rem);
      border-top-right-radius: 0px;
      border-top-left-radius: 0px;
      pointer-events: auto;
      overflow-y: auto;
    }

    .embed-info-drop > p {
      font-size: 14px;
      color: black;
    }

    .embed-info-drop > h2 {
      margin-bottom: 0.25rem;
      font-size: 16px;
      font-weight: bold;
      text-transform: none;
      letter-spacing: 0;
      color: #24292E;
    }

    .embed-info-drop-statscontainer > h3 {
      font-size: 12px;
      color: #394146;
    }

    .embed-info-drop-statscontainer > p {
      font-size: 14px;
      color: black;
    }

    .embed-info-drop a {
      word-break: break-all;
    }

    .embed-info-drop .show-hash {
      word-break: break-all;
      font-family: monospace;
    }

    .embed-info-drop .show-key {
      text-overflow: ellipsis;
      overflow: hidden;
      whitespace: nowrap;
      font-family: monospace;
    }

    .embed-globe {
      margin: 0.25rem;
      padding: 7px;
      background-color: #0366D6;
      border-radius: 9999px;
      color: white;
      border-width: 1px;
      border-color: #D1D5DA;
      border-style: solid;
      line-height: 0.5em;
    }`}render(){let{numValid:e,numInvalid:r,domain:o,certFingerprint:s,datapackageHash:f,publicKey:w,software:z}=this.collInfo.verify||{};e=e||0,r=r||0;const A=this.collInfo.sourceUrl,R=s?`https://crt.sh/?q=${s}`:"",H=Si(this.ts).toLocaleString();return $`
    <div class="dropdown mb-4 ${this.active?"is-active":""}">
      <div class="dropdown-trigger embed-info-container">
        <button class="embed-info is-small is-rounded mt-4" aria-haspopup="true" aria-controls="embed-dropdown" @click="${this.onEmbedDrop}">
          <fa-icon class="menu-logo mr-2 embed-globe" size="1rem" aria-hidden="true" .svg=${_r()}></fa-icon>
          <span class="embed-info-buttontext">
            This embed is part of a web archive. Click here to learn more.
          </span>
          <span class="icon is-small mr-4 ml-2">
            <fa-icon title="Toggle" .svg="${this.active?Cr():Sr()}" aria-hidden="true"></fa-icon>
          </span>
        </button>
      </div>
      <div class="dropdown-menu embed-info-container" id="embed-dropdown" role="menu">
        <div class="dropdown-content embed-info-drop">
          <p class="mb-4">
          Even if the original page goes offline or is changed, the content below will remain unchanged as it is loaded from a web archive.
          </p>
          <hr class="dropdown-divider">
          <h2 mt-4">Technical Information</h2>
          <div class="embed-info-drop-statscontainer mb-4">
            <h3>Original URL:</h3>
            <p><a target="_blank" href="${this.url}">${this.url}</a></p>
            <h3 class="mt-2">Archived On:</h3>
            <p>${H}</p>
            ${o?$`
            <h3 class="mt-2">Observed By:</h3>
            <p>${o}</p>
            ${R?$`
            <p><a target="_blank" href="${R}">View Certificate</a></p>`:""}
            `:z?$`
            <h3 class="mt-2">Created With:</h3>
            <p>${z}</p>`:""}
            ${!o&&w?$`
            <h3 class="mt-2">Observer Public Key:</h3>
            <p class="show-key">${w}</p>`:""}
            <h3 class="mt-2">Validation:</h3>
            ${e>0||r>0?$`
            <p>${e} hashes verified${r?$`, ${r} invalid`:""}</p>`:$`
            <p>Not Available</p>
            `}
            <h3 class="mt-2">Package Hash:</h3>
            <p class="show-hash">${f}</p>
            <h3 class="mt-2">Size</h3>
            <p>${Lt()(Number(this.collInfo.size||0))}</p>
          </div>
          ${A?$`
          <hr class="dropdown-divider">
          <h2 mt-4">Get A Copy!</h2>
          <p class="mt-2">After downloading, this web archive can be loaded and viewed directly in your browser via <a style="white-space: nowrap;" target="_blank" href="https://replayweb.page">replayweb.page</a>.</p>
          <a href="${A}" class="button mt-4" @keyup="${ge}">
            <span class="icon is-small">
              <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${Ci()}"></fa-icon>
            </span>
            <span>Download Archive</span>
          </a>
          `:""}
          <p class="is-size-7 is-flex is-justify-content-space-between" style="margin-top: 40px">
            <span>
              <a class="has-text-black" target="_blank" href="https://github.com/webrecorder/replayweb.page">
                <fa-icon class="menu-logo mr-1" size="1.0rem" aria-hidden="true" .svg=${this.appLogo}></fa-icon>
                Powered by ReplayWeb.page
              </a>
            </span>
            <span>
              <a class="has-text-black" target="_blank" href="https://github.com/webrecorder/replayweb.page">Source Code
                <fa-icon class="menu-logo ml-1" size="1.0rem" aria-hidden="true" .svg=${Dr()}></fa-icon>
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
    `}onEmbedDrop(e){e.stopPropagation(),this.active=!this.active}}customElements.define("rwp-embed-receipt",Pi);var Oe=typeof window<"u"?window:null,gi=Oe===null,Gt=gi?void 0:Oe.document,ni="horizontal",We=function(){return!1},Er=gi?"calc":["","-webkit-","-moz-","-o-"].filter(function(g){var e=Gt.createElement("div");return e.style.cssText="width:"+g+"calc(9px)",!!e.style.length}).shift()+"calc",Li=function(g){return typeof g=="string"||g instanceof String},Ti=function(g){if(Li(g)){var e=Gt.querySelector(g);if(!e)throw new Error("Selector "+g+" did not match a DOM element");return e}return g},Te=function(g,e,r){var o=g[e];return o!==void 0?o:r},si=function(g,e,r,o){if(e){if(o==="end")return 0;if(o==="center")return g/2}else if(r){if(o==="start")return 0;if(o==="center")return g/2}return g},Ir=function(g,e){var r=Gt.createElement("div");return r.className="gutter gutter-"+e,r},Pr=function(g,e,r){var o={};return Li(e)?o[g]=e:o[g]=Er+"("+e+"% - "+r+"px)",o},Lr=function(g,e){var r;return(r={})[g]=e+"px",r};const Ui=function(g,e){if(e===void 0&&(e={}),gi)return{};var r,o,s,f,w,z,A=g;Array.from&&(A=Array.from(A));var R=Ti(A[0]).parentNode,H=getComputedStyle?getComputedStyle(R):null,te=H?H.flexDirection:null,X=Te(e,"sizes")||A.map(function(){return 100/A.length}),pe=Te(e,"minSize",100),Ee=Array.isArray(pe)?pe:A.map(function(){return pe}),Ce=Te(e,"maxSize",1/0),Ke=Array.isArray(Ce)?Ce:A.map(function(){return Ce}),ve=Te(e,"expandToMin",!1),Ve=Te(e,"gutterSize",10),st=Te(e,"gutterAlign","center"),Ue=Te(e,"snapOffset",30),lt=Te(e,"dragInterval",1),ze=Te(e,"direction",ni),pt=Te(e,"cursor",ze===ni?"col-resize":"row-resize"),_t=Te(e,"gutter",Ir),hi=Te(e,"elementStyle",Pr),fo=Te(e,"gutterStyle",Lr);function Jt(se,B,ie,me){var Re=hi(r,B,ie,me);Object.keys(Re).forEach(function($e){se.style[$e]=Re[$e]})}function fi(){return z.map(function(se){return se.size})}function Yi(se){return"touches"in se?se.touches[0][o]:se[o]}function Xi(se){var B=z[this.a],ie=z[this.b],me=B.size+ie.size;B.size=se/this.size*me,ie.size=me-se/this.size*me,Jt(B.element,B.size,this._b,B.i),Jt(ie.element,ie.size,this._c,ie.i)}function uo(se){var B,ie=z[this.a],me=z[this.b];this.dragging&&(B=Yi(se)-this.start+(this._b-this.dragOffset),lt>1&&(B=Math.round(B/lt)*lt),B<=ie.minSize+Ue+this._b?B=ie.minSize+this._b:B>=this.size-(me.minSize+Ue+this._c)&&(B=this.size-(me.minSize+this._c)),B>=ie.maxSize-Ue+this._b?B=ie.maxSize+this._b:B<=this.size-(me.maxSize-Ue+this._c)&&(B=this.size-(me.maxSize+this._c)),Xi.call(this,B),Te(e,"onDrag",We)(fi()))}function pa(){var se=z[this.a].element,B=z[this.b].element,ie=se.getBoundingClientRect(),me=B.getBoundingClientRect();this.size=ie[r]+me[r]+this._b+this._c,this.start=ie[s],this.end=ie[f]}function ga(se){var B=function($e){if(!getComputedStyle)return null;var Ae=getComputedStyle($e);if(!Ae)return null;var Ne=$e[w];return Ne===0?null:Ne-=ze===ni?parseFloat(Ae.paddingLeft)+parseFloat(Ae.paddingRight):parseFloat(Ae.paddingTop)+parseFloat(Ae.paddingBottom)}(R);if(B===null||Ee.reduce(function($e,Ae){return $e+Ae},0)>B)return se;var ie=0,me=[],Re=se.map(function($e,Ae){var Ne=B*$e/100,Rt=si(Ve,Ae===0,Ae===se.length-1,st),St=Ee[Ae]+Rt;return Ne<St?(ie+=St-Ne,me.push(0),St):(me.push(Ne-St),Ne)});return ie===0?se:Re.map(function($e,Ae){var Ne=$e;if(ie>0&&me[Ae]-ie>0){var Rt=Math.min(ie,me[Ae]-ie);ie-=Rt,Ne=$e-Rt}return Ne/B*100})}function po(){var se=this,B=z[se.a].element,ie=z[se.b].element;se.dragging&&Te(e,"onDragEnd",We)(fi()),se.dragging=!1,Oe.removeEventListener("mouseup",se.stop),Oe.removeEventListener("touchend",se.stop),Oe.removeEventListener("touchcancel",se.stop),Oe.removeEventListener("mousemove",se.move),Oe.removeEventListener("touchmove",se.move),se.stop=null,se.move=null,B.removeEventListener("selectstart",We),B.removeEventListener("dragstart",We),ie.removeEventListener("selectstart",We),ie.removeEventListener("dragstart",We),B.style.userSelect="",B.style.webkitUserSelect="",B.style.MozUserSelect="",B.style.pointerEvents="",ie.style.userSelect="",ie.style.webkitUserSelect="",ie.style.MozUserSelect="",ie.style.pointerEvents="",se.gutter.style.cursor="",se.parent.style.cursor="",Gt.body.style.cursor=""}function bo(se){if(!("button"in se)||se.button===0){var B=this,ie=z[B.a].element,me=z[B.b].element;B.dragging||Te(e,"onDragStart",We)(fi()),se.preventDefault(),B.dragging=!0,B.move=uo.bind(B),B.stop=po.bind(B),Oe.addEventListener("mouseup",B.stop),Oe.addEventListener("touchend",B.stop),Oe.addEventListener("touchcancel",B.stop),Oe.addEventListener("mousemove",B.move),Oe.addEventListener("touchmove",B.move),ie.addEventListener("selectstart",We),ie.addEventListener("dragstart",We),me.addEventListener("selectstart",We),me.addEventListener("dragstart",We),ie.style.userSelect="none",ie.style.webkitUserSelect="none",ie.style.MozUserSelect="none",ie.style.pointerEvents="none",me.style.userSelect="none",me.style.webkitUserSelect="none",me.style.MozUserSelect="none",me.style.pointerEvents="none",B.gutter.style.cursor=pt,B.parent.style.cursor=pt,Gt.body.style.cursor=pt,pa.call(B),B.dragOffset=Yi(se)-B.end}}ze===ni?(r="width",o="clientX",s="left",f="right",w="clientWidth"):ze==="vertical"&&(r="height",o="clientY",s="top",f="bottom",w="clientHeight"),X=ga(X);var $t=[];function _a(se){var B=se.i===$t.length,ie=B?$t[se.i-1]:$t[se.i];pa.call(ie);var me=B?ie.size-se.minSize-ie._c:se.minSize+ie._b;Xi.call(ie,me)}return z=A.map(function(se,B){var ie,me={element:Ti(se),size:X[B],minSize:Ee[B],maxSize:Ke[B],i:B};if(B>0&&((ie={a:B-1,b:B,dragging:!1,direction:ze,parent:R})._b=si(Ve,B-1==0,!1,st),ie._c=si(Ve,!1,B===A.length-1,st),te==="row-reverse"||te==="column-reverse")){var Re=ie.a;ie.a=ie.b,ie.b=Re}if(B>0){var $e=_t(B,ze,me.element);(function(Ae,Ne,Rt){var St=fo(r,Ne,Rt);Object.keys(St).forEach(function($a){Ae.style[$a]=St[$a]})})($e,Ve,B),ie._a=bo.bind(ie),$e.addEventListener("mousedown",ie._a),$e.addEventListener("touchstart",ie._a),R.insertBefore($e,me.element),ie.gutter=$e}return Jt(me.element,me.size,si(Ve,B===0,B===A.length-1,st),B),B>0&&$t.push(ie),me}),z.forEach(function(se){var B=se.element.getBoundingClientRect()[r];B<se.minSize&&(ve?_a(se):se.minSize=B)}),{setSizes:function(se){var B=ga(se);B.forEach(function(ie,me){if(me>0){var Re=$t[me-1],$e=z[Re.a],Ae=z[Re.b];$e.size=B[me-1],Ae.size=ie,Jt($e.element,$e.size,Re._b,$e.i),Jt(Ae.element,Ae.size,Re._c,Ae.i)}})},getSizes:fi,collapse:function(se){_a(z[se])},destroy:function(se,B){$t.forEach(function(ie){if(B!==!0?ie.parent.removeChild(ie.gutter):(ie.gutter.removeEventListener("mousedown",ie._a),ie.gutter.removeEventListener("touchstart",ie._a)),se!==!0){var me=hi(r,ie.a.size,ie._b);Object.keys(me).forEach(function(Re){z[ie.a].element.style[Re]="",z[ie.b].element.style[Re]=""})}})},parent:R,pairs:$t}},vi="search://";class Kt extends _e{constructor(){super(),this.sourceUrl=null,this.inited=!1,this.isLoading=!1,this.coll="",this.collInfo=null,this._replaceLoc=!1,this._locUpdateNeeded=!1,this._locationHash="",this.tabData={},this.url="",this.ts="",this.tabNames=["pages","story","resources","info"],this.tabLabels={pages:"Pages",story:"Story",resources:"URLs",info:"Archive Info"},this.menuActive=!1,this.embedDropdownActive=!1,this.hasStory=!1,this.editable=!1,this.browsable=!0,this.clearable=!0,this.showSidebar=localStorage.getItem("pages:showSidebar")==="1",this.splitter=null,this.isVisible=!0,this.favIconUrl="",this.autoUpdateInterval=10,this._autoUpdater=null,this.appName="ReplayWeb.page",this.appVersion=It,this.appLogo=ut()}static get properties(){return{inited:{type:Boolean},sourceUrl:{type:String},loadInfo:{type:Object,attribute:!1},showSidebar:{type:Boolean},collInfo:{type:Object,attribute:!1},coll:{type:String},hasStory:{type:Boolean},isLoading:{type:Boolean},tabData:{type:Object,attribute:!1},url:{type:String},ts:{type:String},isFullscreen:{type:Boolean},menuActive:{type:Boolean},embed:{type:String},embedDropdownActive:{type:Boolean},editable:{type:Boolean},browsable:{type:Boolean},clearable:{type:Boolean},isVisible:{type:Boolean},favIconUrl:{type:String},appName:{type:String},appVersion:{type:String},appLogo:{type:String},autoUpdateInterval:{type:Number},swName:{type:String}}}firstUpdated(){this.inited=!0,window.addEventListener("hashchange",e=>this.onHashChange(e)),this.addEventListener("fullscreenchange",()=>{this.isFullscreen=!!document.fullscreenElement}),this.embed&&this.loadInfo&&this.loadInfo.hideOffscreen&&(this.observer=new IntersectionObserver(e=>{this.isVisible=e[0].isIntersecting}),this.observer.observe(this))}async runUpdateLoop(){try{for(;this.editable&&this.autoUpdateInterval&&(!this.collInfo||!this.collInfo.pages||this.collInfo.pages.length<100);)await new Promise(e=>setTimeout(e,1e3*this.autoUpdateInterval)),await this.doUpdateInfo(!0)}finally{this._autoUpdater=null}}updated(e){if(e.has("sourceUrl")&&this.doUpdateInfo(),e.has("editable")&&this.editable&&this.autoUpdateInterval&&!this._autoUpdater&&(this._autoUpdater=this.runUpdateLoop()),e.has("tabData")){if(!this.collInfo||!this.collInfo.coll)return;Object.keys(this.tabData).forEach(o=>!this.tabData[o]&&delete this.tabData[o]);const r="#"+new URLSearchParams(this.tabData).toString();if(this.tabData.url||(this.url=vi+decodeURIComponent(this._paramsToString(this.tabData))),r!==this._locationHash){if(this._locationHash=r,this._replaceLoc||Object.keys(e.get("tabData")).length===0){const o=new URL(window.location.href);o.hash=this._locationHash,window.history.replaceState({},"",o.href),this._replaceLoc=!1}else if(window.location.hash=this._locationHash,!this.showSidebar){const o=this.renderRoot.querySelector("wr-coll-replay");o&&o.focus()}this.embed&&window.parent!==window&&window.parent.postMessage(this.tabData,"*")}this._locUpdateNeeded=!1}e.has("showSidebar")&&(this.embed||localStorage.setItem("pages:showSidebar",this.showSidebar?"1":"0")),(e.has("tabData")||e.has("showSidebar"))&&this.configureSplitter()}configureSplitter(){if(this.tabData.url&&this.showSidebar){const e=this.renderRoot.querySelector("#contents"),r=this.renderRoot.querySelector("wr-coll-replay");if(e&&r&&!this.splitter){const o={sizes:[30,70],minSize:[300,300],gutterSize:4,onDragStart(){r.setDisablePointer(!0)},onDragEnd(){r.setDisablePointer(!1)}};this.splitter=Ui([e,r],o)}}else if(this.splitter){try{this.splitter.destroy()}catch{}this.splitter=null}}async doUpdateInfo(e=!1){if(e&&this.tabData.url&&!this.showSidebar)return;let r=this.loadInfo&&this.loadInfo.customColl;r||(r=(await er(this.sourceUrl)).coll),this.coll=r;const o="./w/api/c/"+r,s="./w/"+r,f=await fetch(o+"?all=1");if(f.status!=200)return void(this.collInfo={});const w=await f.json();if(this.collInfo={apiPrefix:o,replayPrefix:s,coll:r,...w},this.loadInfo&&this.loadInfo.extraConfig&&this.loadInfo.extraConfig.headers){const z=this.loadInfo.extraConfig.headers;await fetch(`${o}/updateAuth`,{method:"POST",body:JSON.stringify({headers:z})})}this.collInfo.title||(this.collInfo.title=this.collInfo.filename),this.embed!=="replayonly"&&this.embed!=="replay-with-info"||(this.showSidebar=!1),this.hasStory=this.collInfo.desc||this.collInfo.lists.length,this.dispatchEvent(new CustomEvent("coll-loaded",{detail:{collInfo:this.collInfo,alreadyLoaded:!0}})),this.onHashChange()}onCollLoaded(e){this.doUpdateInfo(),this.loadInfo=null,e.detail.sourceUrl&&(this.sourceUrl=e.detail.sourceUrl),this.dispatchEvent(new CustomEvent("coll-loaded",{detail:{sourceUrl:this.sourceUrl,collInfo:this.collInfo}}))}onCollUpdate(e){this.editable&&(this.collInfo={...this.collInfo,...e.detail})}onHashChange(){const e=window.location.hash;if(e&&e!==this._locationHash&&(this.tabData=Object.fromEntries(new URLSearchParams(e.slice(1)).entries()),this._locationHash=e),this.collInfo.coll&&!this.tabNames.includes(this.tabData.view)){const r=this.hasStory?"story":this.editable||this.collInfo.pages.length?"pages":"resources";this.tabData={...this.tabData,view:r}}if(this.tabData.url&&this.tabData.url.startsWith("page:")){const r=Number(this.tabData.url.slice(5));if(!isNaN(r)&&r<this.collInfo.pages.length){const o=this.collInfo.pages[r];this.tabData.url=o.url,this.tabData.ts=zi(o).timestamp}}this.hasStory||this.tabData.view!=="story"||(this.tabData.view="pages"),this.tabData.url&&this.tabData.query&&(this.showSidebar=!0)}onTabClick(e){e.preventDefault();const r=e.currentTarget.getAttribute("href");return this.tabData={...this.tabData,view:r.slice(1)},!1}onCollTabNav(e){e.detail.reload?this.onRefresh(null,!0):e.target.id===this.tabData.view||e.target.id==="replay"&&this.tabData.url?this.updateTabData(e.detail.data,e.detail.replaceLoc,!1):this.showSidebar&&this.tabData.url&&this.updateTabData(e.detail.data,e.detail.replaceLoc,!0)}updateTabData(e,r=!1){this.tabData={...this.tabData,...e},this.tabData.url&&(this.url=this.tabData.url||""),this.tabData.ts&&(this.ts=this.tabData.ts||""),this._replaceLoc=!this._locUpdateNeeded&&r,this._locUpdateNeeded=!0}static get styles(){return De(Kt.compStyles)}static get compStyles(){return k`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-width: 0px;
    }

    .icon {
      vertical-align: text-top;
    }

    .back fa-icon {
      width: 1.5em;
      vertical-align: bottom;
      line-height: 0.5em;
    }

    li.is-active {
      font-weight: bold;
    }

    .tab-label {
      display: inline;
    }

    @media screen and (max-width: ${je?k`1163px`:k`1053px`}) {
      .tab-label {
        display: none;
      }

      .main.tabs span.icon {
        margin: 0px;
      }
    }

    .main.tabs {
      display: flex;
      flex-direction: row;
      margin-bottom: 0px;
    }

    .main.tabs ul {
      position: relative;
    }

    .main.tabs li {
      line-height: 1.5;
      padding: 8px 0 6px 0;
    }

    @media screen and (max-width: 319px) {
      .main.tabs li a {
        padding-right: 4px;
        padding-left: 4px;
      }
    }

    .sidebar.main.tabs li a {
      padding-right: 6px;
      padding-left: 6px;
    }

    #contents {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      min-height: 0px;
      flex: auto;
      background-color: white;
    }

    #tabContents {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      min-height: 0px;
      flex: auto;
    }

    rwp-embed-receipt {
      flex-direction: column;
      display: flex;
    }

    ${Pi.embedStyles}

    ${Kt.replayBarStyles}`}static get replayBarStyles(){return k`
    .breadbar {
      display: flex;
      align-items: center;
      height: 35px;
      width: 100%;
      background-color: aliceblue;
      padding: 0.5em;
    }

    .replay-bar {
      padding: 0.5em 0em 0.5em 0.5em;
      max-width: none;
      border-bottom: solid .1rem #97989A;
      width: 100%;
      background-color: white;
    }

    input#url {
      border-radius: 4px;
    }

    .favicon img {
      width: 20px;
      height: 20px;
      margin: 8px;
      /*filter: drop-shadow(1px 1px 2px grey);*/
    }

    #datetime {
      position: absolute;
      right: 1em;
      z-index: 10;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0), #FFF 15%, #FFF);
      margin: -35px 0 0 0px;
      padding-left: 3em;
      line-height: 2;
    }

    .menu-head {
      font-size: 10px;
      font-weight: bold;
      display: block;
    }
    .menu-logo {
      vertical-align: middle;
    }
    .menu-version {
      font-size: 10px;
    }
    .dropdown-item.info {
      font-style: italic;
    }

    input:focus + #datetime {
      display: none;
    }

    .grey-disabled {
      --fa-icon-fill-color: lightgrey;
      color: lightgrey;
    }

    .replay-bar .button:focus {
      box-shadow: none;
    }

    .is-borderless {
      border: 0px;
    }

    .narrow {
      padding: calc(0.5em - 1px) 0.8em;
    }

    form {
      width: 100%;
      margin: 0 0 0 0.5em;
    }

    .gutter.gutter-horizontal {
      cursor: col-resize;
      float: left;
      background-color: rgb(151, 152, 154);
    }

    .gutter.gutter-horizontal:hover {
      cursor: col-resize;
    }

    main, wr-coll-replay {
      width: 100%;
    }

    .info-bg {
      background-color: whitesmoke;
      width: 100%;
      height: 100%;
      display: flex;
    }

    .is-list {
      margin: 1.0em;
      background-color: whitesmoke;
    }

    #contents.full-pages {
      width: 100% !important;
    }

    .sidebar-nav {
      position: absolute;
      vertical-align: middle;
    }

    .sidebar-nav a {
      display: inline-block;
      border-bottom: 0px;
    }

    .sidebar-nav span.nav-hover {
      font-size: smaller;
      display: none;
    }

    .sidebar-nav:hover span.nav-hover,
    .sidebar-nav:focus-within span.nav-hover {
      display: initial;
      color: rgb(72, 118, 255);
    }

    .sidebar-nav fa-icon {
      vertical-align: bottom;
    }

    .sidebar-nav:hover fa-icon {
      color: rgb(72, 118, 255);
    }

    .sidebar-nav.left {
      left: 8px;
    }

    .sidebar-nav.right {
      right: 8px;
    }

    /* Since the replay sometimes programmatically receives keyboard focus,
       and that is visually unexpected for mouse-users, and since this won't
       particularly trip up keyboard users, just remove the focus style. */
    wr-coll-replay:focus {
      outline: none;
    }
    /* Some keyboard-users may see this replacement style */
    wr-coll-replay:focus-visible {
      outline: 1px solid rgb(72, 118, 255);
    }
    `}render(){if(!this.inited)return $``;const e=!!this.tabData.url,r=e&&this.showSidebar;if(!e&&this.tabData&&this.tabData.view){const o={title:this.tabLabels[this.tabData.view],replayTitle:!1};this.dispatchEvent(new CustomEvent("update-title",{bubbles:!0,composed:!0,detail:o}))}return this.collInfo&&!this.collInfo.coll?$`
      <wr-loader .loadInfo="${this.loadInfo}" embed="${this.embed}" swName="${this.swName}"
      .coll="${this.coll}" .sourceUrl="${this.sourceUrl}" @coll-loaded=${this.onCollLoaded}></wr-loader>`:this.collInfo?$`
      ${this.renderLocationBar()}
      ${this.renderVerifyInfo()}
      <div id="tabContents">
        <div id="contents" class="is-light ${r?"sidebar":e?"is-hidden":"full-pages"}"
             role="${r?"complementary":""}" aria-label="${r?"Browse Contents":""}">
          ${this.renderTabHeader(r)}
          ${r||!e?this.renderCollTabs(r):$``}
        </div>

        ${e&&this.isVisible?$`
          <wr-coll-replay
          role="main"
          tabindex="-1"
          .collInfo="${this.collInfo}"
          sourceUrl="${this.sourceUrl}"
          url="${this.tabData.url||""}"
          ts="${this.tabData.ts||""}"
          @coll-tab-nav="${this.onCollTabNav}" id="replay"
          @replay-loading="${o=>this.isLoading=o.detail.loading}"
          @replay-favicons="${this.onFavIcons}"
          >
          </wr-coll-replay>
        `:""}
      </div>
      `:$``}renderTabHeader(e){return $`
      <nav class="main tabs is-centered ${e?"sidebar":""}" aria-label="tabs">
        <ul>
          ${e?$`
          <li class="sidebar-nav left">
            <a role="button" href="#" @click="${this.onHideSidebar}" @keyup="${ge}" class="is-marginless is-size-6 is-paddingless">
              <fa-icon title="Hide" .svg="${wr()}" aria-hidden="true"></fa-icon>
              <span class="nav-hover" aria-hidden="true">Hide</span>
              <span class="is-sr-only">Hide Sidebar</span>
            </a>
          </li>`:""}

          ${this.hasStory?$`
          <li class="${this.tabData.view==="story"?"is-active":""}">
            <a @click="${this.onTabClick}" href="#story" class="is-size-6" aria-label="Story" aria-current="${this.tabData.view==="story"?"location":""}">
              <span class="icon"><fa-icon .svg="${ir()}" aria-hidden="true" title="Story"></fa-icon></span>
              <span class="tab-label ${e?"is-hidden":""}" title="Story">Story</span>
            </a>
          </li>`:""}

          <li class="${this.tabData.view==="pages"?"is-active":""}">
            <a @click="${this.onTabClick}" href="#pages" class="is-size-6" aria-label="Pages" aria-current="${this.tabData.view==="pages"?"location":""}">
              <span class="icon"><fa-icon .svg="${lr()}" aria-hidden="true" title="Pages"></fa-icon></span>
              <span class="tab-label ${e?"is-hidden":""}" title="Pages">Pages</span>
            </a>
          </li>

          <li class="${this.tabData.view==="resources"?"is-active":""}">
            <a @click="${this.onTabClick}" href="#resources" class="is-size-6" aria-label="URLs" aria-current="${this.tabData.view==="resources"?"location":""}">
              <span class="icon"><fa-icon .svg="${nr()}" aria-hidden="true" title="URLs"></fa-icon></span>
              <span class="tab-label ${e?"is-hidden":""}" title="URLs">URLs</span>
            </a>
          </li>

          <li class="${this.tabData.view==="info"?"is-active":""}">
            <a @click="${this.onTabClick}" href="#info" class="is-size-6" aria-label="Archive Info" aria-current="${this.tabData.view==="info"?"location":""}">
              <span class="icon"><fa-icon .svg="${dr()}" aria-hidden="true" title="Archive Info"></fa-icon></span>
              <span class="tab-label ${e?"is-hidden":""}" title="Archive Info">Info</span>
            </a>
          </li>

          ${e?$`
          <li class="sidebar-nav right">
            <a role="button" href="#" @click="${this.onFullPageView}" @keyup="${ge}" class="is-marginless is-size-6 is-paddingless">
              <span class="nav-hover" aria-hidden="true">Expand</span>
              <span class="is-sr-only">Expand Sidebar to Full View</span>
              <fa-icon title="Expand" .svg="${kr()}" aria-hidden="true"></fa-icon>
            </a>
          </li>`:""}
        </ul>
      </nav>`}renderLocationBar(){if(this.embed==="replayonly"||this.embed=="replay-with-info")return"";const e=Si(this.ts).toLocaleString(),r=!!this.tabData.url,o=r&&this.favIconUrl;return $`
    <a class="skip-link" href="#skip-replay-target" @click="${this.skipMenu}">Skip replay navigation</a>
    <nav class="replay-bar" aria-label="replay">
      <div class="field has-addons">
        <a href="#" role="button" class="button narrow is-borderless is-hidden-touch" id="fullscreen" @click="${this.onFullscreenToggle}" @keyup="${ge}"
                title="${this.isFullscreen?"Exit Full Screen":"Full Screen"}" aria-label="${this.isFullscreen?"Exit Fullscreen":"Fullscreen"}">
          <span class="icon is-small">
            <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${this.isFullscreen?Ii():Ei()}"></fa-icon>
          </span>
        </a>
        <a href="#" role="button" class="button narrow is-borderless is-hidden-mobile" @click="${this.onGoBack}" @keyup="${ge}"
                title="Back" aria-label="Back">
          <span class="icon is-small">
            <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${ui()}"></fa-icon>
          </span>
        </a>
        <a href="#" role="button" class="button narrow is-borderless is-hidden-mobile" @click="${this.onGoForward}" @keyup="${ge}"
                title="Forward" aria-label="Forward">
          <span class="icon is-small">
            <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${pi()}"></fa-icon>
          </span>
        </a>
        <a href="#" role="button" class="button narrow is-borderless ${this.isLoading?"is-loading":"is-hidden-mobile"}" id="refresh" @click="${this.onRefresh}" @keyup="${ge}"
                title="Reload" aria-label="Reload">
          <span class="icon is-small">
            ${this.isLoading?"":$`
            <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${Di()}"></fa-icon>
            `}
          </span>
        </a>
        ${this.browsable?$`
        <a href="#" role="button" class="button narrow is-borderless is-hidden-mobile ${r?"":"grey-disabled"}" @click="${this.onShowPages}" @keyup="${ge}"
                ?disabled="${!r}" title="Browse Contents" aria-label="Browse Contents" aria-controls="contents">
          <span class="icon is-small">
            <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${Ai()}"></fa-icon>
          </span>
        </a>`:""}
        ${this.renderExtraToolbar(!1)}
        <form @submit="${this.onSubmit}">
          <div class="control is-expanded ${o?"has-icons-left":""}">
            <input id="url" class="input" type="text" @keydown="${this.onKeyDown}" @blur="${this.onLostFocus}" .value="${this.url}" placeholder="Enter text to search or a URL to replay"/>
            ${r?$`<p id="datetime" class="control is-hidden-mobile">${e}</p>`:$``}
            ${o?$`
            <span class="favicon icon is-small is-left">
              <img src="${this.favIconUrl}"/>
            </span>`:$``}
          </div>
        </form>

        <div class="dropdown is-right ${this.menuActive?"is-active":""}" @click="${()=>this.menuActive=!1}">
          <div class="dropdown-trigger">
            <button class="button is-borderless" aria-haspopup="true" aria-controls="menu-dropdown" aria-expanded="${this.menuActive}" @click="${this.onMenu}"
                    aria-label="more replay controls">
              <span class="icon is-small">
                <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${gr()}"></fa-icon>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="menu-dropdown">
            <div class="dropdown-content">
              <a href="#" role="button" class="dropdown-item is-hidden-desktop" @click="${this.onFullscreenToggle}" @keyup="${ge}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${this.isFullscreen?Ii():Ei()}"></fa-icon>
                </span>
                <span>Full Screen</span>
              </a>
              <a href="#" role="button" class="dropdown-item is-hidden-tablet" @click="${this.onGoBack}" @keyup="${ge}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${ui()}"></fa-icon>
                </span>
                <span>Back</span>
              </a>
              <a href="#" role="button" class="dropdown-item is-hidden-tablet" @click="${this.onGoForward}" @keyup="${ge}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${pi()}"></fa-icon>
                </span>
                <span>Forward</span>
              </a>
              <a href="#" role="button" class="dropdown-item is-hidden-tablet" @click="${this.onRefresh}" @keyup="${ge}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${Di()}"></fa-icon>
                </span>
                <span>Reload</span>
              </a>
              ${this.browsable?$`
              <a href="#" role="button" class="dropdown-item is-hidden-tablet ${r?"":"grey-disabled"}" @click="${this.onShowPages}" @keyup="${ge}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${Ai()}"></fa-icon>
                </span>
                <span>Browse Contents</span>
              </a>`:""}
              ${this.renderExtraToolbar(!0)}
              ${this.clearable?$`
              <hr class="dropdown-divider is-hidden-desktop">
              <a href="#" role="button" class="dropdown-item" @click="${this.onPurgeCache}" @keyup="${ge}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${fr()}"></fa-icon>
                </span>
                <span>Purge Cache + Full Reload</span>
              </a>`:$``}
              ${!this.editable&&this.sourceUrl.startsWith("http://")||this.sourceUrl.startsWith("https://")?$`
              <hr class="dropdown-divider">
              <a href="${this.sourceUrl}" role="button" class="dropdown-item" @keyup="${ge}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${Ci()}"></fa-icon>
                </span>
                <span>Download Archive</span>
              </a>`:$``}
              ${e?$`
              <hr class="dropdown-divider is-hidden-desktop">
              <div class="dropdown-item info is-hidden-desktop">
                <span class="menu-head">Capture Date</span>${e}
              </div>`:""}
              <hr class="dropdown-divider">
              <a href="#" role="button" class="dropdown-item" @click="${this.onAbout}">
                <fa-icon class="menu-logo" size="1.0rem" aria-hidden="true" .svg=${this.appLogo}></fa-icon>
                <span>&nbsp;About ${this.appName}</span>
                <span class="menu-version">(${this.appVersion})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav><p id="skip-replay-target" tabindex="-1" class="is-sr-only">Skipped</p>`}renderVerifyInfo(){return this.embed!=="replay-with-info"?"":$`<rwp-embed-receipt
            .collInfo=${this.collInfo}
            url=${this.url}
            ts=${this.ts}
            .appLogo=${this.appLogo}
            >
            </rwp-embed-receipt>`}dragStart(){const e=this.renderRoot.querySelector("wr-coll-replay");e&&e.setDisablePointer(!0)}dragEnd(){const e=this.renderRoot.querySelector("wr-coll-replay");e&&e.setDisablePointer(!1)}renderCollInfo(){return $`
    <div class="info-bg">
      <wr-coll-info
      class="is-list"
      .coll="${this.collInfo}"
      ?detailed="${!0}"
      ?canDelete="${!this.embed}"
      @coll-purge="${this.onPurgeCache}"
      ></wr-coll-info>
    </div>`}renderExtraToolbar(){return""}renderCollTabs(e){const r=this.hasStory&&this.tabData.view==="story",o=this.tabData.view==="pages",s=this.tabData.view==="resources",f=this.tabData.view==="info";return $`

    ${f?this.renderCollInfo():$``}

    ${r?$`
    <wr-coll-story .collInfo="${this.collInfo}"
    .active="${r}"
    currList="${this.tabData.currList||0}"
    @coll-tab-nav="${this.onCollTabNav}" id="story"
    .isSidebar="${e}"
    class="${r?"":"is-hidden"} ${e?"sidebar":""}"
    role="${e?"":"main"}"
    >
    </wr-coll-story>`:""}

    ${s?$`
    <wr-coll-resources .collInfo="${this.collInfo}"
    .active="${s}"
    query="${this.tabData.query||""}"
    urlSearchType="${this.tabData.urlSearchType||""}"
    .currMime="${this.tabData.currMime||""}"
    @coll-tab-nav="${this.onCollTabNav}" id="resources"
    .isSidebar="${e}"
    class="is-paddingless ${s?"":"is-hidden"} ${e?"sidebar":""}"
    role="${e?"":"main"}"
    >
    </wr-coll-resources>`:""}

    ${o?$`
    <wr-page-view
    .collInfo="${this.collInfo}"
    .active="${o}"
    .editable="${this.editable}"
    .isSidebar="${e}"
    currList="${this.tabData.currList||0}"
    query="${this.tabData.query||""}"
    .url="${this.tabData.url||""}"
    .ts="${this.tabData.ts||""}"
    @coll-tab-nav="${this.onCollTabNav}" id="pages"
    @coll-update="${this.onCollUpdate}"
    class="${o?"":"is-hidden"} ${e?"sidebar":""}"
    role="${e?"":"main"}"
    >
    </wr-page-view>`:""}
    `}skipMenu(e){e.preventDefault(),this.renderRoot.querySelector("#skip-replay-target").focus()}onKeyDown(e){e.key!=="Esc"&&e.key!=="Escape"||(e.preventDefault(),e.currentTarget.value=this.url)}onMenu(e){e.stopPropagation(),this.menuActive=!this.menuActive,this.menuActive&&document.addEventListener("click",()=>{this.menuActive=!1},{once:!0})}onFullscreenToggle(e){e.preventDefault(),this.menuActive=!1,this.isFullscreen?document.exitFullscreen():this.requestFullscreen()}onGoBack(e){e.preventDefault(),this.menuActive=!1,window.history.back()}onGoForward(e){e.preventDefault(),this.menuActive=!1,window.history.forward()}onShowPages(e){e.preventDefault(),this.showSidebar||document.documentElement.clientWidth>=769?this.showSidebar=!this.showSidebar:(this.showSidebar=!1,this.updateTabData({url:"",ts:""}))}onFullPageView(e){e.preventDefault(),this.updateTabData({url:"",ts:""})}onHideSidebar(e){e.preventDefault(),this.showSidebar=!1}async onFavIcons(e){for(const r of e.detail.icons){const o=await fetch(r.href);if(o.status===200){const s=o.headers.get("Content-Type");if(s&&!s.startsWith("text/"))return void(this.favIconUrl=r.href)}}this.favIconUrl=""}onPurgeCache(e){e.preventDefault();const r=!e.detail||e.detail.reload===void 0||e.detail.reload;this.deleteFully(r)}async deleteFully(e=!1){const r=this.collInfo.apiPrefix+(e?"?reload=1":""),o=await fetch(r,{method:"DELETE"});o.status!==200&&console.warn("purge failed: "+o.status),e||this.embed?window.location.reload():window.location.search=""}onSubmit(e){e.preventDefault();const r=this.renderRoot.querySelector("input");return r.value?this.navigateTo(r.value):r.value=this.url,!1}onLostFocus(e){e.currentTarget.value||(e.currentTarget.value=this.url)}navigateTo(e){let r;if(e.startsWith("http://")||e.startsWith("https://")){if(r={url:e},e===this.tabData.url){const o=this.renderRoot.querySelector("wr-coll-replay");return void(o&&o.refresh())}}else r=e.startsWith(vi)?this._stringToParams(e):{query:e,view:"pages"};this.updateTabData(r)}_stringToParams(e){const r=new URLSearchParams(e.slice(vi.length)),o={url:"",ts:""};for(const s of["query","view","currList","currMime","urlSearchType"])r.has(s)&&(o[s]=r.get(s));return o}_paramsToString(e){const r=new URLSearchParams;for(const o of["query","view","currList","currMime","urlSearchType"])o in e&&r.set(o,e[o]);return r.toString()}onRefresh(e,r=!1){if(e&&e.preventDefault(),this.menuActive=!1,this.tabData.url){const o=this.renderRoot.querySelector("wr-coll-replay");o&&o.refresh()}else r||window.location.reload()}onAbout(){this.dispatchEvent(new CustomEvent("about-show"))}}function Tr(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}customElements.define("wr-coll",Kt);let Tt={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Ur=/[&<>"']/,Rr=/[&<>"']/g,qr=/[<>"']|&(?!#?\w+;)/,Mr=/[<>"']|&(?!#?\w+;)/g,jr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ri=g=>jr[g];function Pe(g,e){if(e){if(Ur.test(g))return g.replace(Rr,Ri)}else if(qr.test(g))return g.replace(Mr,Ri);return g}const Or=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function qi(g){return g.replace(Or,(e,r)=>(r=r.toLowerCase())==="colon"?":":r.charAt(0)==="#"?r.charAt(1)==="x"?String.fromCharCode(parseInt(r.substring(2),16)):String.fromCharCode(+r.substring(1)):"")}const Nr=/(^|[^\[])\^/g;function ke(g,e){g=g.source||g,e=e||"";const r={replace:(o,s)=>(s=(s=s.source||s).replace(Nr,"$1"),g=g.replace(o,s),r),getRegex:()=>new RegExp(g,e)};return r}const Br=/[^\w:]/g,Fr=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Mi(g,e,r){if(g){let o;try{o=decodeURIComponent(qi(r)).replace(Br,"").toLowerCase()}catch{return null}if(o.indexOf("javascript:")===0||o.indexOf("vbscript:")===0||o.indexOf("data:")===0)return null}e&&!Fr.test(r)&&(r=function(o,s){li[" "+o]||(Hr.test(o)?li[" "+o]=o+"/":li[" "+o]=di(o,"/",!0));const f=(o=li[" "+o]).indexOf(":")===-1;return s.substring(0,2)==="//"?f?s:o.replace(Wr,"$1")+s:s.charAt(0)==="/"?f?s:o.replace(Gr,"$1")+s:o+s}(e,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const li={},Hr=/^[^:]+:\/*[^/]*$/,Wr=/^([^:]+:)[\s\S]*$/,Gr=/^([^:]+:\/*[^/]*)[\s\S]*$/,ci={exec:function(){}};function Ge(g){let e,r,o=1;for(;o<arguments.length;o++)for(r in e=arguments[o],e)Object.prototype.hasOwnProperty.call(e,r)&&(g[r]=e[r]);return g}function ji(g,e){const r=g.replace(/\|/g,(s,f,w)=>{let z=!1,A=f;for(;--A>=0&&w[A]==="\\";)z=!z;return z?"|":" |"}).split(/ \|/);let o=0;if(r[0].trim()||r.shift(),r[r.length-1].trim()||r.pop(),r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(/\\\|/g,"|");return r}function di(g,e,r){const o=g.length;if(o===0)return"";let s=0;for(;s<o;){const f=g.charAt(o-s-1);if(f!==e||r){if(f===e||!r)break;s++}else s++}return g.substr(0,o-s)}function Oi(g){g&&g.sanitize&&!g.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Ni(g,e){if(e<1)return"";let r="";for(;e>1;)1&e&&(r+=g),e>>=1,g+=g;return r+g}function Bi(g,e,r,o){const s=e.href,f=e.title?Pe(e.title):null,w=g[1].replace(/\\([\[\]])/g,"$1");if(g[0].charAt(0)!=="!"){o.state.inLink=!0;const z={type:"link",raw:r,href:s,title:f,text:w,tokens:o.inlineTokens(w,[])};return o.state.inLink=!1,z}return{type:"image",raw:r,href:s,title:f,text:Pe(w)}}class wi{constructor(e){this.options=e||Tt}space(e){const r=this.rules.block.newline.exec(e);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(e){const r=this.rules.block.code.exec(e);if(r){const o=r[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:this.options.pedantic?o:di(o,`
`)}}}fences(e){const r=this.rules.block.fences.exec(e);if(r){const o=r[0],s=function(f,w){const z=f.match(/^(\s+)(?:```)/);if(z===null)return w;const A=z[1];return w.split(`
`).map(R=>{const H=R.match(/^\s+/);if(H===null)return R;const[te]=H;return te.length>=A.length?R.slice(A.length):R}).join(`
`)}(o,r[3]||"");return{type:"code",raw:o,lang:r[2]?r[2].trim():r[2],text:s}}}heading(e){const r=this.rules.block.heading.exec(e);if(r){let o=r[2].trim();if(/#$/.test(o)){const f=di(o,"#");this.options.pedantic?o=f.trim():f&&!/ $/.test(f)||(o=f.trim())}const s={type:"heading",raw:r[0],depth:r[1].length,text:o,tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}hr(e){const r=this.rules.block.hr.exec(e);if(r)return{type:"hr",raw:r[0]}}blockquote(e){const r=this.rules.block.blockquote.exec(e);if(r){const o=r[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:r[0],tokens:this.lexer.blockTokens(o,[]),text:o}}}list(e){let r=this.rules.block.list.exec(e);if(r){let o,s,f,w,z,A,R,H,te,X,pe,Ee,Ce=r[1].trim();const Ke=Ce.length>1,ve={type:"list",raw:"",ordered:Ke,start:Ke?+Ce.slice(0,-1):"",loose:!1,items:[]};Ce=Ke?`\\d{1,9}\\${Ce.slice(-1)}`:`\\${Ce}`,this.options.pedantic&&(Ce=Ke?Ce:"[*+-]");const Ve=new RegExp(`^( {0,3}${Ce})((?: [^\\n]*)?(?:\\n|$))`);for(;e&&(Ee=!1,r=Ve.exec(e))&&!this.rules.block.hr.test(e);){if(o=r[0],e=e.substring(o.length),H=r[2].split(`
`,1)[0],te=e.split(`
`,1)[0],this.options.pedantic?(w=2,pe=H.trimLeft()):(w=r[2].search(/[^ ]/),w=w>4?1:w,pe=H.slice(w),w+=r[1].length),A=!1,!H&&/^ *$/.test(te)&&(o+=te+`
`,e=e.substring(te.length+1),Ee=!0),!Ee){const Ue=new RegExp(`^ {0,${Math.min(3,w-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(X=e.split(`
`,1)[0],H=X,this.options.pedantic&&(H=H.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!Ue.test(H));){if(H.search(/[^ ]/)>=w||!H.trim())pe+=`
`+H.slice(w);else{if(A)break;pe+=`
`+H}A||H.trim()||(A=!0),o+=X+`
`,e=e.substring(X.length+1)}}ve.loose||(R?ve.loose=!0:/\n *\n *$/.test(o)&&(R=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(pe),s&&(f=s[0]!=="[ ] ",pe=pe.replace(/^\[[ xX]\] +/,""))),ve.items.push({type:"list_item",raw:o,task:!!s,checked:f,loose:!1,text:pe}),ve.raw+=o}ve.items[ve.items.length-1].raw=o.trimRight(),ve.items[ve.items.length-1].text=pe.trimRight(),ve.raw=ve.raw.trimRight();const st=ve.items.length;for(z=0;z<st;z++){this.lexer.state.top=!1,ve.items[z].tokens=this.lexer.blockTokens(ve.items[z].text,[]);const Ue=ve.items[z].tokens.filter(ze=>ze.type==="space"),lt=Ue.every(ze=>{const pt=ze.raw.split("");let _t=0;for(const hi of pt)if(hi===`
`&&(_t+=1),_t>1)return!0;return!1});!ve.loose&&Ue.length&&lt&&(ve.loose=!0,ve.items[z].loose=!0)}return ve}}html(e){const r=this.rules.block.html.exec(e);if(r){const o={type:"html",raw:r[0],pre:!this.options.sanitizer&&(r[1]==="pre"||r[1]==="script"||r[1]==="style"),text:r[0]};return this.options.sanitize&&(o.type="paragraph",o.text=this.options.sanitizer?this.options.sanitizer(r[0]):Pe(r[0]),o.tokens=[],this.lexer.inline(o.text,o.tokens)),o}}def(e){const r=this.rules.block.def.exec(e);if(r)return r[3]&&(r[3]=r[3].substring(1,r[3].length-1)),{type:"def",tag:r[1].toLowerCase().replace(/\s+/g," "),raw:r[0],href:r[2],title:r[3]}}table(e){const r=this.rules.block.table.exec(e);if(r){const o={type:"table",header:ji(r[1]).map(s=>({text:s})),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:r[3]?r[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(o.header.length===o.align.length){o.raw=r[0];let s,f,w,z,A=o.align.length;for(s=0;s<A;s++)/^ *-+: *$/.test(o.align[s])?o.align[s]="right":/^ *:-+: *$/.test(o.align[s])?o.align[s]="center":/^ *:-+ *$/.test(o.align[s])?o.align[s]="left":o.align[s]=null;for(A=o.rows.length,s=0;s<A;s++)o.rows[s]=ji(o.rows[s],o.header.length).map(R=>({text:R}));for(A=o.header.length,f=0;f<A;f++)o.header[f].tokens=[],this.lexer.inlineTokens(o.header[f].text,o.header[f].tokens);for(A=o.rows.length,f=0;f<A;f++)for(z=o.rows[f],w=0;w<z.length;w++)z[w].tokens=[],this.lexer.inlineTokens(z[w].text,z[w].tokens);return o}}}lheading(e){const r=this.rules.block.lheading.exec(e);if(r){const o={type:"heading",raw:r[0],depth:r[2].charAt(0)==="="?1:2,text:r[1],tokens:[]};return this.lexer.inline(o.text,o.tokens),o}}paragraph(e){const r=this.rules.block.paragraph.exec(e);if(r){const o={type:"paragraph",raw:r[0],text:r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1],tokens:[]};return this.lexer.inline(o.text,o.tokens),o}}text(e){const r=this.rules.block.text.exec(e);if(r){const o={type:"text",raw:r[0],text:r[0],tokens:[]};return this.lexer.inline(o.text,o.tokens),o}}escape(e){const r=this.rules.inline.escape.exec(e);if(r)return{type:"escape",raw:r[0],text:Pe(r[1])}}tag(e){const r=this.rules.inline.tag.exec(e);if(r)return!this.lexer.state.inLink&&/^<a /i.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):Pe(r[0]):r[0]}}link(e){const r=this.rules.inline.link.exec(e);if(r){const o=r[2].trim();if(!this.options.pedantic&&/^</.test(o)){if(!/>$/.test(o))return;const w=di(o.slice(0,-1),"\\");if((o.length-w.length)%2==0)return}else{const w=function(z,A){if(z.indexOf(A[1])===-1)return-1;const R=z.length;let H=0,te=0;for(;te<R;te++)if(z[te]==="\\")te++;else if(z[te]===A[0])H++;else if(z[te]===A[1]&&(H--,H<0))return te;return-1}(r[2],"()");if(w>-1){const z=(r[0].indexOf("!")===0?5:4)+r[1].length+w;r[2]=r[2].substring(0,w),r[0]=r[0].substring(0,z).trim(),r[3]=""}}let s=r[2],f="";if(this.options.pedantic){const w=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);w&&(s=w[1],f=w[3])}else f=r[3]?r[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(s=this.options.pedantic&&!/>$/.test(o)?s.slice(1):s.slice(1,-1)),Bi(r,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:f&&f.replace(this.rules.inline._escapes,"$1")},r[0],this.lexer)}}reflink(e,r){let o;if((o=this.rules.inline.reflink.exec(e))||(o=this.rules.inline.nolink.exec(e))){let s=(o[2]||o[1]).replace(/\s+/g," ");if(s=r[s.toLowerCase()],!s||!s.href){const f=o[0].charAt(0);return{type:"text",raw:f,text:f}}return Bi(o,s,o[0],this.lexer)}}emStrong(e,r,o=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&o.match(/[\p{L}\p{N}]/u))return;const f=s[1]||s[2]||"";if(!f||f&&(o===""||this.rules.inline.punctuation.exec(o))){const w=s[0].length-1;let z,A,R=w,H=0;const te=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(te.lastIndex=0,r=r.slice(-1*e.length+w);(s=te.exec(r))!=null;){if(z=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!z)continue;if(A=z.length,s[3]||s[4]){R+=A;continue}if((s[5]||s[6])&&w%3&&!((w+A)%3)){H+=A;continue}if(R-=A,R>0)continue;if(A=Math.min(A,A+R+H),Math.min(w,A)%2){const pe=e.slice(1,w+s.index+A);return{type:"em",raw:e.slice(0,w+s.index+A+1),text:pe,tokens:this.lexer.inlineTokens(pe,[])}}const X=e.slice(2,w+s.index+A-1);return{type:"strong",raw:e.slice(0,w+s.index+A+1),text:X,tokens:this.lexer.inlineTokens(X,[])}}}}codespan(e){const r=this.rules.inline.code.exec(e);if(r){let o=r[2].replace(/\n/g," ");const s=/[^ ]/.test(o),f=/^ /.test(o)&&/ $/.test(o);return s&&f&&(o=o.substring(1,o.length-1)),o=Pe(o,!0),{type:"codespan",raw:r[0],text:o}}}br(e){const r=this.rules.inline.br.exec(e);if(r)return{type:"br",raw:r[0]}}del(e){const r=this.rules.inline.del.exec(e);if(r)return{type:"del",raw:r[0],text:r[2],tokens:this.lexer.inlineTokens(r[2],[])}}autolink(e,r){const o=this.rules.inline.autolink.exec(e);if(o){let s,f;return o[2]==="@"?(s=Pe(this.options.mangle?r(o[1]):o[1]),f="mailto:"+s):(s=Pe(o[1]),f=s),{type:"link",raw:o[0],text:s,href:f,tokens:[{type:"text",raw:s,text:s}]}}}url(e,r){let o;if(o=this.rules.inline.url.exec(e)){let s,f;if(o[2]==="@")s=Pe(this.options.mangle?r(o[0]):o[0]),f="mailto:"+s;else{let w;do w=o[0],o[0]=this.rules.inline._backpedal.exec(o[0])[0];while(w!==o[0]);s=Pe(o[0]),f=o[1]==="www."?"http://"+s:s}return{type:"link",raw:o[0],text:s,href:f,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,r){const o=this.rules.inline.text.exec(e);if(o){let s;return s=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):Pe(o[0]):o[0]:Pe(this.options.smartypants?r(o[0]):o[0]),{type:"text",raw:o[0],text:s}}}}const ce={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:ci,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};ce.def=ke(ce.def).replace("label",ce._label).replace("title",ce._title).getRegex(),ce.bullet=/(?:[*+-]|\d{1,9}[.)])/,ce.listItemStart=ke(/^( *)(bull) */).replace("bull",ce.bullet).getRegex(),ce.list=ke(ce.list).replace(/bull/g,ce.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+ce.def.source+")").getRegex(),ce._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ce._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,ce.html=ke(ce.html,"i").replace("comment",ce._comment).replace("tag",ce._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ce.paragraph=ke(ce._paragraph).replace("hr",ce.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ce._tag).getRegex(),ce.blockquote=ke(ce.blockquote).replace("paragraph",ce.paragraph).getRegex(),ce.normal=Ge({},ce),ce.gfm=Ge({},ce.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),ce.gfm.table=ke(ce.gfm.table).replace("hr",ce.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ce._tag).getRegex(),ce.gfm.paragraph=ke(ce._paragraph).replace("hr",ce.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",ce.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ce._tag).getRegex(),ce.pedantic=Ge({},ce.normal,{html:ke(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ce._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ci,paragraph:ke(ce.normal._paragraph).replace("hr",ce.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ce.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const re={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:ci,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:ci,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Kr(g){return g.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Fi(g){let e,r,o="";const s=g.length;for(e=0;e<s;e++)r=g.charCodeAt(e),Math.random()>.5&&(r="x"+r.toString(16)),o+="&#"+r+";";return o}re._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",re.punctuation=ke(re.punctuation).replace(/punctuation/g,re._punctuation).getRegex(),re.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,re.escapedEmSt=/\\\*|\\_/g,re._comment=ke(ce._comment).replace("(?:-->|$)","-->").getRegex(),re.emStrong.lDelim=ke(re.emStrong.lDelim).replace(/punct/g,re._punctuation).getRegex(),re.emStrong.rDelimAst=ke(re.emStrong.rDelimAst,"g").replace(/punct/g,re._punctuation).getRegex(),re.emStrong.rDelimUnd=ke(re.emStrong.rDelimUnd,"g").replace(/punct/g,re._punctuation).getRegex(),re._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,re._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,re._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,re.autolink=ke(re.autolink).replace("scheme",re._scheme).replace("email",re._email).getRegex(),re._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,re.tag=ke(re.tag).replace("comment",re._comment).replace("attribute",re._attribute).getRegex(),re._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,re._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,re._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,re.link=ke(re.link).replace("label",re._label).replace("href",re._href).replace("title",re._title).getRegex(),re.reflink=ke(re.reflink).replace("label",re._label).replace("ref",ce._label).getRegex(),re.nolink=ke(re.nolink).replace("ref",ce._label).getRegex(),re.reflinkSearch=ke(re.reflinkSearch,"g").replace("reflink",re.reflink).replace("nolink",re.nolink).getRegex(),re.normal=Ge({},re),re.pedantic=Ge({},re.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ke(/^!?\[(label)\]\((.*?)\)/).replace("label",re._label).getRegex(),reflink:ke(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",re._label).getRegex()}),re.gfm=Ge({},re.normal,{escape:ke(re.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),re.gfm.url=ke(re.gfm.url,"i").replace("email",re.gfm._extended_email).getRegex(),re.breaks=Ge({},re.gfm,{br:ke(re.br).replace("{2,}","*").getRegex(),text:ke(re.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class ot{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Tt,this.options.tokenizer=this.options.tokenizer||new wi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const r={block:ce.normal,inline:re.normal};this.options.pedantic?(r.block=ce.pedantic,r.inline=re.pedantic):this.options.gfm&&(r.block=ce.gfm,this.options.breaks?r.inline=re.breaks:r.inline=re.gfm),this.tokenizer.rules=r}static get rules(){return{block:ce,inline:re}}static lex(e,r){return new ot(r).lex(e)}static lexInline(e,r){return new ot(r).inlineTokens(e)}lex(e){let r;for(e=e.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(e,this.tokens);r=this.inlineQueue.shift();)this.inlineTokens(r.src,r.tokens);return this.tokens}blockTokens(e,r=[]){let o,s,f,w;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(z=>!!(o=z.call({lexer:this},e,r))&&(e=e.substring(o.raw.length),r.push(o),!0))))if(o=this.tokenizer.space(e))e=e.substring(o.raw.length),o.raw.length===1&&r.length>0?r[r.length-1].raw+=`
`:r.push(o);else if(o=this.tokenizer.code(e))e=e.substring(o.raw.length),s=r[r.length-1],!s||s.type!=="paragraph"&&s.type!=="text"?r.push(o):(s.raw+=`
`+o.raw,s.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(o=this.tokenizer.fences(e))e=e.substring(o.raw.length),r.push(o);else if(o=this.tokenizer.heading(e))e=e.substring(o.raw.length),r.push(o);else if(o=this.tokenizer.hr(e))e=e.substring(o.raw.length),r.push(o);else if(o=this.tokenizer.blockquote(e))e=e.substring(o.raw.length),r.push(o);else if(o=this.tokenizer.list(e))e=e.substring(o.raw.length),r.push(o);else if(o=this.tokenizer.html(e))e=e.substring(o.raw.length),r.push(o);else if(o=this.tokenizer.def(e))e=e.substring(o.raw.length),s=r[r.length-1],!s||s.type!=="paragraph"&&s.type!=="text"?this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title}):(s.raw+=`
`+o.raw,s.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text);else if(o=this.tokenizer.table(e))e=e.substring(o.raw.length),r.push(o);else if(o=this.tokenizer.lheading(e))e=e.substring(o.raw.length),r.push(o);else{if(f=e,this.options.extensions&&this.options.extensions.startBlock){let z=1/0;const A=e.slice(1);let R;this.options.extensions.startBlock.forEach(function(H){R=H.call({lexer:this},A),typeof R=="number"&&R>=0&&(z=Math.min(z,R))}),z<1/0&&z>=0&&(f=e.substring(0,z+1))}if(this.state.top&&(o=this.tokenizer.paragraph(f)))s=r[r.length-1],w&&s.type==="paragraph"?(s.raw+=`
`+o.raw,s.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):r.push(o),w=f.length!==e.length,e=e.substring(o.raw.length);else if(o=this.tokenizer.text(e))e=e.substring(o.raw.length),s=r[r.length-1],s&&s.type==="text"?(s.raw+=`
`+o.raw,s.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):r.push(o);else if(e){const z="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(z);break}throw new Error(z)}}return this.state.top=!0,r}inline(e,r){this.inlineQueue.push({src:e,tokens:r})}inlineTokens(e,r=[]){let o,s,f,w,z,A,R=e;if(this.tokens.links){const H=Object.keys(this.tokens.links);if(H.length>0)for(;(w=this.tokenizer.rules.inline.reflinkSearch.exec(R))!=null;)H.includes(w[0].slice(w[0].lastIndexOf("[")+1,-1))&&(R=R.slice(0,w.index)+"["+Ni("a",w[0].length-2)+"]"+R.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(w=this.tokenizer.rules.inline.blockSkip.exec(R))!=null;)R=R.slice(0,w.index)+"["+Ni("a",w[0].length-2)+"]"+R.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(w=this.tokenizer.rules.inline.escapedEmSt.exec(R))!=null;)R=R.slice(0,w.index)+"++"+R.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(z||(A=""),z=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(H=>!!(o=H.call({lexer:this},e,r))&&(e=e.substring(o.raw.length),r.push(o),!0))))if(o=this.tokenizer.escape(e))e=e.substring(o.raw.length),r.push(o);else if(o=this.tokenizer.tag(e))e=e.substring(o.raw.length),s=r[r.length-1],s&&o.type==="text"&&s.type==="text"?(s.raw+=o.raw,s.text+=o.text):r.push(o);else if(o=this.tokenizer.link(e))e=e.substring(o.raw.length),r.push(o);else if(o=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(o.raw.length),s=r[r.length-1],s&&o.type==="text"&&s.type==="text"?(s.raw+=o.raw,s.text+=o.text):r.push(o);else if(o=this.tokenizer.emStrong(e,R,A))e=e.substring(o.raw.length),r.push(o);else if(o=this.tokenizer.codespan(e))e=e.substring(o.raw.length),r.push(o);else if(o=this.tokenizer.br(e))e=e.substring(o.raw.length),r.push(o);else if(o=this.tokenizer.del(e))e=e.substring(o.raw.length),r.push(o);else if(o=this.tokenizer.autolink(e,Fi))e=e.substring(o.raw.length),r.push(o);else if(this.state.inLink||!(o=this.tokenizer.url(e,Fi))){if(f=e,this.options.extensions&&this.options.extensions.startInline){let H=1/0;const te=e.slice(1);let X;this.options.extensions.startInline.forEach(function(pe){X=pe.call({lexer:this},te),typeof X=="number"&&X>=0&&(H=Math.min(H,X))}),H<1/0&&H>=0&&(f=e.substring(0,H+1))}if(o=this.tokenizer.inlineText(f,Kr))e=e.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(A=o.raw.slice(-1)),z=!0,s=r[r.length-1],s&&s.type==="text"?(s.raw+=o.raw,s.text+=o.text):r.push(o);else if(e){const H="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(H);break}throw new Error(H)}}else e=e.substring(o.raw.length),r.push(o);return r}}class xi{constructor(e){this.options=e||Tt}code(e,r,o){const s=(r||"").match(/\S*/)[0];if(this.options.highlight){const f=this.options.highlight(e,s);f!=null&&f!==e&&(o=!0,e=f)}return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="'+this.options.langPrefix+Pe(s,!0)+'">'+(o?e:Pe(e,!0))+`</code></pre>
`:"<pre><code>"+(o?e:Pe(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
`+e+`</blockquote>
`}html(e){return e}heading(e,r,o,s){return this.options.headerIds?"<h"+r+' id="'+this.options.headerPrefix+s.slug(o)+'">'+e+"</h"+r+`>
`:"<h"+r+">"+e+"</h"+r+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,r,o){const s=r?"ol":"ul";return"<"+s+(r&&o!==1?' start="'+o+'"':"")+`>
`+e+"</"+s+`>
`}listitem(e){return"<li>"+e+`</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+`</p>
`}table(e,r){return r&&(r="<tbody>"+r+"</tbody>"),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow(e){return`<tr>
`+e+`</tr>
`}tablecell(e,r){const o=r.header?"th":"td";return(r.align?"<"+o+' align="'+r.align+'">':"<"+o+">")+e+"</"+o+`>
`}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,r,o){if((e=Mi(this.options.sanitize,this.options.baseUrl,e))===null)return o;let s='<a href="'+Pe(e)+'"';return r&&(s+=' title="'+r+'"'),s+=">"+o+"</a>",s}image(e,r,o){if((e=Mi(this.options.sanitize,this.options.baseUrl,e))===null)return o;let s='<img src="'+e+'" alt="'+o+'"';return r&&(s+=' title="'+r+'"'),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class Hi{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,r,o){return""+o}image(e,r,o){return""+o}br(){return""}}class Wi{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,r){let o=e,s=0;if(this.seen.hasOwnProperty(o)){s=this.seen[e];do s++,o=e+"-"+s;while(this.seen.hasOwnProperty(o))}return r||(this.seen[e]=s,this.seen[o]=0),o}slug(e,r={}){const o=this.serialize(e);return this.getNextSafeSlug(o,r.dryrun)}}class nt{constructor(e){this.options=e||Tt,this.options.renderer=this.options.renderer||new xi,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Hi,this.slugger=new Wi}static parse(e,r){return new nt(r).parse(e)}static parseInline(e,r){return new nt(r).parseInline(e)}parse(e,r=!0){let o,s,f,w,z,A,R,H,te,X,pe,Ee,Ce,Ke,ve,Ve,st,Ue,lt,ze="";const pt=e.length;for(o=0;o<pt;o++)if(X=e[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[X.type]&&(lt=this.options.extensions.renderers[X.type].call({parser:this},X),lt!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(X.type)))ze+=lt||"";else switch(X.type){case"space":continue;case"hr":ze+=this.renderer.hr();continue;case"heading":ze+=this.renderer.heading(this.parseInline(X.tokens),X.depth,qi(this.parseInline(X.tokens,this.textRenderer)),this.slugger);continue;case"code":ze+=this.renderer.code(X.text,X.lang,X.escaped);continue;case"table":for(H="",R="",w=X.header.length,s=0;s<w;s++)R+=this.renderer.tablecell(this.parseInline(X.header[s].tokens),{header:!0,align:X.align[s]});for(H+=this.renderer.tablerow(R),te="",w=X.rows.length,s=0;s<w;s++){for(A=X.rows[s],R="",z=A.length,f=0;f<z;f++)R+=this.renderer.tablecell(this.parseInline(A[f].tokens),{header:!1,align:X.align[f]});te+=this.renderer.tablerow(R)}ze+=this.renderer.table(H,te);continue;case"blockquote":te=this.parse(X.tokens),ze+=this.renderer.blockquote(te);continue;case"list":for(pe=X.ordered,Ee=X.start,Ce=X.loose,w=X.items.length,te="",s=0;s<w;s++)ve=X.items[s],Ve=ve.checked,st=ve.task,Ke="",ve.task&&(Ue=this.renderer.checkbox(Ve),Ce?ve.tokens.length>0&&ve.tokens[0].type==="paragraph"?(ve.tokens[0].text=Ue+" "+ve.tokens[0].text,ve.tokens[0].tokens&&ve.tokens[0].tokens.length>0&&ve.tokens[0].tokens[0].type==="text"&&(ve.tokens[0].tokens[0].text=Ue+" "+ve.tokens[0].tokens[0].text)):ve.tokens.unshift({type:"text",text:Ue}):Ke+=Ue),Ke+=this.parse(ve.tokens,Ce),te+=this.renderer.listitem(Ke,st,Ve);ze+=this.renderer.list(te,pe,Ee);continue;case"html":ze+=this.renderer.html(X.text);continue;case"paragraph":ze+=this.renderer.paragraph(this.parseInline(X.tokens));continue;case"text":for(te=X.tokens?this.parseInline(X.tokens):X.text;o+1<pt&&e[o+1].type==="text";)X=e[++o],te+=`
`+(X.tokens?this.parseInline(X.tokens):X.text);ze+=r?this.renderer.paragraph(te):te;continue;default:{const _t='Token with "'+X.type+'" type was not found.';if(this.options.silent)return void console.error(_t);throw new Error(_t)}}return ze}parseInline(e,r){r=r||this.renderer;let o,s,f,w="";const z=e.length;for(o=0;o<z;o++)if(s=e[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(f=this.options.extensions.renderers[s.type].call({parser:this},s),f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)))w+=f||"";else switch(s.type){case"escape":w+=r.text(s.text);break;case"html":w+=r.html(s.text);break;case"link":w+=r.link(s.href,s.title,this.parseInline(s.tokens,r));break;case"image":w+=r.image(s.href,s.title,s.text);break;case"strong":w+=r.strong(this.parseInline(s.tokens,r));break;case"em":w+=r.em(this.parseInline(s.tokens,r));break;case"codespan":w+=r.codespan(s.text);break;case"br":w+=r.br();break;case"del":w+=r.del(this.parseInline(s.tokens,r));break;case"text":w+=r.text(s.text);break;default:{const A='Token with "'+s.type+'" type was not found.';if(this.options.silent)return void console.error(A);throw new Error(A)}}return w}}function he(g,e,r){if(g==null)throw new Error("marked(): input parameter is undefined or null");if(typeof g!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(g)+", string expected");if(typeof e=="function"&&(r=e,e=null),Oi(e=Ge({},he.defaults,e||{})),r){const o=e.highlight;let s;try{s=ot.lex(g,e)}catch(z){return r(z)}const f=function(z){let A;if(!z)try{e.walkTokens&&he.walkTokens(s,e.walkTokens),A=nt.parse(s,e)}catch(R){z=R}return e.highlight=o,z?r(z):r(null,A)};if(!o||o.length<3||(delete e.highlight,!s.length))return f();let w=0;return he.walkTokens(s,function(z){z.type==="code"&&(w++,setTimeout(()=>{o(z.text,z.lang,function(A,R){if(A)return f(A);R!=null&&R!==z.text&&(z.text=R,z.escaped=!0),w--,w===0&&f()})},0))}),void(w===0&&f())}try{const o=ot.lex(g,e);return e.walkTokens&&he.walkTokens(o,e.walkTokens),nt.parse(o,e)}catch(o){if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Pe(o.message+"",!0)+"</pre>";throw o}}he.options=he.setOptions=function(g){var e;return Ge(he.defaults,g),e=he.defaults,Tt=e,he},he.getDefaults=Tr,he.defaults=Tt,he.use=function(...g){const e=Ge({},...g),r=he.defaults.extensions||{renderers:{},childTokens:{}};let o;g.forEach(s=>{if(s.extensions&&(o=!0,s.extensions.forEach(f=>{if(!f.name)throw new Error("extension name required");if(f.renderer){const w=r.renderers?r.renderers[f.name]:null;r.renderers[f.name]=w?function(...z){let A=f.renderer.apply(this,z);return A===!1&&(A=w.apply(this,z)),A}:f.renderer}if(f.tokenizer){if(!f.level||f.level!=="block"&&f.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");r[f.level]?r[f.level].unshift(f.tokenizer):r[f.level]=[f.tokenizer],f.start&&(f.level==="block"?r.startBlock?r.startBlock.push(f.start):r.startBlock=[f.start]:f.level==="inline"&&(r.startInline?r.startInline.push(f.start):r.startInline=[f.start]))}f.childTokens&&(r.childTokens[f.name]=f.childTokens)})),s.renderer){const f=he.defaults.renderer||new xi;for(const w in s.renderer){const z=f[w];f[w]=(...A)=>{let R=s.renderer[w].apply(f,A);return R===!1&&(R=z.apply(f,A)),R}}e.renderer=f}if(s.tokenizer){const f=he.defaults.tokenizer||new wi;for(const w in s.tokenizer){const z=f[w];f[w]=(...A)=>{let R=s.tokenizer[w].apply(f,A);return R===!1&&(R=z.apply(f,A)),R}}e.tokenizer=f}if(s.walkTokens){const f=he.defaults.walkTokens;e.walkTokens=function(w){s.walkTokens.call(this,w),f&&f.call(this,w)}}o&&(e.extensions=r),he.setOptions(e)})},he.walkTokens=function(g,e){for(const r of g)switch(e.call(he,r),r.type){case"table":for(const o of r.header)he.walkTokens(o.tokens,e);for(const o of r.rows)for(const s of o)he.walkTokens(s.tokens,e);break;case"list":he.walkTokens(r.items,e);break;default:he.defaults.extensions&&he.defaults.extensions.childTokens&&he.defaults.extensions.childTokens[r.type]?he.defaults.extensions.childTokens[r.type].forEach(function(o){he.walkTokens(r[o],e)}):r.tokens&&he.walkTokens(r.tokens,e)}},he.parseInline=function(g,e){if(g==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof g!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(g)+", string expected");Oi(e=Ge({},he.defaults,e||{}));try{const r=ot.lexInline(g,e);return e.walkTokens&&he.walkTokens(r,e.walkTokens),nt.parseInline(r,e)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Pe(r.message+"",!0)+"</pre>";throw r}},he.Parser=nt,he.parser=nt.parse,he.Renderer=xi,he.TextRenderer=Hi,he.Lexer=ot,he.lexer=ot.lex,he.Tokenizer=wi,he.Slugger=Wi,he.parse=he,he.options,he.setOptions,he.use,he.walkTokens,he.parseInline,nt.parse,ot.lex;class Vt extends _e{constructor(){super(),this.collInfo=null,this.curatedPageMap={},this.currList=0,this.active=!1,this.lastST=0,this.clickTime=0,this.isSidebar=!1,this.splitDirection=!1}static get properties(){return{collInfo:{type:Object},active:{type:Boolean},curatedPageMap:{type:Object},currList:{type:Number},isSidebar:{type:Boolean},splitDirection:{type:Boolean}}}recalcSplitter(e){this.splitDirection=this.isSidebar||e<769?"vertical":"horizontal"}firstUpdated(){this.recalcSplitter(document.documentElement.clientWidth),this.obs=new ResizeObserver(e=>{this.recalcSplitter(e[0].contentRect.width)}),this.obs.observe(this)}updated(e){e.has("collInfo")&&this.doLoadCurated(),(e.has("collInfo")||e.has("isSidebar"))&&this.recalcSplitter(document.documentElement.clientWidth),e.has("splitDirection")&&this.configureSplitter(),e.has("currList")&&this.active&&this.sendChangeEvent({currList:this.currList})}configureSplitter(){const e=this.renderRoot.querySelector(".sidebar"),r=this.renderRoot.querySelector(".main-content");if(this.splitter){try{this.splitter.destroy()}catch{}this.splitter=null}if(e&&r&&!this.splitter){const o={sizes:[20,80],gutterSize:4,direction:this.splitDirection};this.splitter=Ui([e,r],o)}}async doLoadCurated(){this.curatedPageMap={};const e={};for(const r of this.collInfo.pages)e[r.id]=r;for(const r of this.collInfo.curatedPages){this.curatedPageMap[r.list]||(this.curatedPageMap[r.list]=[]);const o=r,s=o.url,f=o.ts,w=o.title||o.url,z=r.desc;this.curatedPageMap[r.list].push({url:s,ts:f,title:w,desc:z})}this.scrollToList()}static get styles(){return De(k`
    :host {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      min-width: 0px;

      justify-content: flex-start;
      align-items: center;
    }

    :host(.sidebar) .columns {
      display: flex !important;
      flex-direction: column;
    }

    :host(.sidebar) .column.sidebar.is-one-fifth {
      width: 100% !important;
    }

    ${Vt.sidebarStyles(m(":host(.sidebar)"))}

    .desc p {
      margin-bottom: 1.0em;
    }

    .columns {
      width: 100%;
      height: 100%;
      justify-self: stretch;
      margin: 1.0em 0 0 0 !important;
      min-height: 0;
    }

    .column.main-content {
      min-height: 0;
      display: flex;
      flex-direction: column;
      padding: 0px;
      margin-left: 0.75em;
    }

    .column.main-content.main-scroll {
      padding-right: 0.75em;
      word-break: break-all;
    }

    ul.menu-list a.is-active {
      background-color: #55be6f;
    }
    ol {
      margin-left: 30px;
    }

    @media screen and (min-width: 769px) {
      .columns {
        margin-top: 0.75em;
      }

      .column.sidebar {
        max-height: 100%;
        overflow-y: auto;
      }
    }

    @media screen and (max-width: 768px) {
      ${Vt.sidebarStyles()}
    }

    .gutter.gutter-vertical:hover {
      cursor: row-resize;
    }

    .gutter.gutter-horizontal:hover {
      cursor: col-resize;
    }

    `)}static sidebarStyles(e=k``){return k`
    ${e} .columns {
      position: relative;
    }

    ${e} .column.sidebar {
      overflow-y: auto;
      margin-top: 0.75em;
    }

    ${e} .column.main-content {
      position: relative;
      overflow-y: auto;

      border-top: 1px solid black;

      height: 100%;
    }

    ${e} .menu {
      font-size: 0.80rem;
    }`}render(){const e=this.currList;return $`
    <div class="is-sr-only" role="heading" aria-level="${this.isSidebar?"2":"1"}">
      Story for ${this.collInfo.title}
    </div>
    <div class="columns">
      <div class="column sidebar is-one-fifth">
        <aside class="menu">
          <ul class="menu-list">
            <li>
              <a href="#list-0" data-list="0" class="${e===0?"is-active":""} menu-label is-size-4"
                @click=${this.onClickScroll}>${this.collInfo.title}</a>
              <ul class="menu-list">${this.collInfo.lists.map(r=>$`
                <li>
                  <a @click=${this.onClickScroll} href="#list-${r.id}"
                  data-list="${r.id}" 
                  class="${e===r.id?"is-active":""}">${r.title}</a>
                </li>`)}
              </ul>
            </li>
          </ul>
        </aside>
      </div>
      <div @scroll=${this.onScroll} class="column main-content main-scroll">
        <section id="list-0" class="desc">
          <h2 class="has-text-centered title is-3">${this.collInfo.title}</h2>
          ${this.collInfo.desc?xt(he(this.collInfo.desc)):""}
        </section>
        ${this.renderLists()}
      </div>
    </div>
  `}renderLists(){return $`
    ${this.collInfo.lists.map(e=>$`
    <article id="list-${e.id}">
      <div class="content">
        <hr/>
        <h3>${e.title}</h3>
        <p>${e.desc}</p>
        <ol>
          ${this.curatedPageMap[e.id]?this.curatedPageMap[e.id].map(r=>this.renderCPage(r)):$``}
        </ol>
      </div>
    </article>
    `)}`}renderCPage(e){const r=new Date(e.ts),o=oi(r.toISOString());return $`
    <li>
      <div class="content">
        <a @click="${this.onReplay}" data-url="${e.url}" data-ts="${o}"
          href="${mi("story",e.url,o)}">
          <p class="is-size-6 has-text-weight-bold has-text-link">${e.title}</p>
          <p class="has-text-dark">${e.url}</p>
        </a>
        <p>${r.toLocaleString()}</p>
        <p>${e.desc}</p>
      </div>
      <hr/>
    </li>`}onReplay(e){e.preventDefault();const r={url:e.currentTarget.getAttribute("data-url"),ts:e.currentTarget.getAttribute("data-ts")};return this.sendChangeEvent(r),!1}sendChangeEvent(e){this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{data:e}}))}onClickScroll(e){return e.preventDefault(),this.currList=Number(e.currentTarget.getAttribute("data-list")),this.scrollToList(),!1}scrollToList(){this.currList>this.collInfo.lists.length&&(this.currList=0);const e={behavior:"smooth",block:"nearest",inline:"nearest"};this.clickTime=new Date().getTime();const r=this.renderRoot.getElementById("list-"+this.currList);r&&r.scrollIntoView(e)}onScroll(e){const r=e.currentTarget,o=this.renderRoot.getElementById("list-"+this.currList);if(!o)return;let s=o;const f=r.offsetTop,w=r.scrollTop;if(w>this.lastST)for(;s.nextElementSibling&&s.nextElementSibling.getBoundingClientRect().top<f;)s=s.nextElementSibling;else for(;s.previousElementSibling&&s.previousElementSibling.getBoundingClientRect().bottom>=f;)s=s.previousElementSibling;if(this.lastST=w,s&&s!=o&&s.id.startsWith("list-")&&(this.currList=Number(s.id.slice(5))),new Date().getTime()-this.clickTime<1e3)return;const z=this.renderRoot.querySelector(`a[data-list="${this.currList}"]`);if(z){const A={behavior:"smooth",block:"nearest",inline:"nearest"};z.scrollIntoView(A)}}}customElements.define("wr-coll-story",Vt);var Vr=__webpack_require__(4199),Zr=__webpack_require__.n(Vr);class Gi extends _e{constructor(){super(),this.state="trypublic",this.sourceUrl="",this.scriptLoaded=!1,this.error=!1}static get properties(){return{state:{type:String},sourceUrl:{type:String},error:{type:Boolean},reauth:{type:Boolean}}}updated(e){e.has("sourceUrl")&&(this.error=!1,this.state="trypublic",this.tryPublicAccess().then(r=>{r||(this.state="tryauto",this.requestUpdate())}))}async tryPublicAccess(){try{const e=this.sourceUrl,r=`https://helper-proxy.webrecorder.workers.dev/g/${e.slice(14)}`;let o=null;try{o=await fetch(r)}catch{return!1}const s=await o.json();if(!s.url||!s.name||!s.size||s.size>15e6)return!1;const f=s.url;try{const R=new AbortController,H=R.signal;if(o=await fetch(f,{signal:H}),R.abort(),o.status!=200)return!1}catch{return!1}const w=s.name,z={publicUrl:f},A=Number(s.size);return this.dispatchEvent(new CustomEvent("load-ready",{detail:{name:w,extra:z,size:A,sourceUrl:e}})),!0}catch{return!1}}onLoad(){this.scriptLoaded=!0,this.gauth("none",e=>{e.error?this.state!=="implicitonly"&&(this.state="trymanual"):this.authed(e)})}onClickAuth(){this.gauth("select_account",e=>{e.error||this.authed(e)})}async authed(e){const r=this.sourceUrl,o=`https://www.googleapis.com/drive/v3/files/${r.slice(14)}`,s={Authorization:`Bearer ${e.access_token}`},f=await fetch(o+"?fields=name,size&supportsAllDrives=true",{headers:s});if(f.status===404||f.status==403)return this.state!=="implicitonly"&&(this.state="trymanual"),void(this.error=!0);this.error=!1;const w=await f.json(),z=w.name,A=Number(w.size);this.dispatchEvent(new CustomEvent("load-ready",{detail:{sourceUrl:r,headers:s,size:A,name:z}}))}static get styles(){return De(k``)}render(){return $`
    ${this.script()}
    ${this.state!=="trymanual"?$`
    <p>Connecting to Google Drive...</p>
    `:$`
    ${this.error?$`
    <div class="error has-text-danger">
      <p>${this.reauth?"Some resources are loaded on demand from Google Drive, which requires reauthorization.":"Could not access this file with the current Google Drive account."}</p>
      <p>If you have multiple Google Drive accounts, be sure to select the correct one.</p>
    </div>
    <br/>
    `:""}
    <button class="button is-warning is-rounded" @click="${this.onClickAuth}">
    <span class="icon"><fa-icon .svg="${Zr()}"></fa-icon></span>
    <span>Authorize Google Drive</span>
    </button>
    `}`}script(){if(this.state==="trypublic"||this.scriptLoaded)return $``;const e=document.createElement("script");return e.onload=()=>this.onLoad(),e.src="https://apis.google.com/js/platform.js",e}gauth(e,r){self.gapi.load("auth2",()=>{self.gapi.auth2.authorize({client_id:"160798412227-tko4c82uopud11q105b2lvbogsj77hlg.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/drive.file",response_type:"token",prompt:e},r)})}}customElements.define("wr-gdrive",Gi);class Ki extends _e{constructor(){super(),this.progress=0,this.total=0,this.percent=0,this.coll="",this.state="waiting",this.loadInfo=null,this.currentSize=0,this.totalSize=0,this.tryFileHandle=!!window.showOpenFilePicker,this.fileHandle=null,this.errorAllowRetry=!1,this.pingInterval=0,this.noWebWorker=!1}static get properties(){return{sourceUrl:{type:String},loadInfo:{type:Object},state:{type:String},progress:{type:Number},percent:{type:Number},currentSize:{type:Number},totalSize:{type:Number},error:{type:String},total:{type:Number},status:{type:String},coll:{type:String},embed:{type:String},tryFileHandle:{type:Boolean},errorAllowRetry:{type:Boolean},extraMsg:{type:String},swName:{type:String}}}firstUpdated(){this.initMessages()}initMessages(){if(this.noWebWorker=this.loadInfo&&this.loadInfo.noWebWorker,this.noWebWorker){if(!navigator.serviceWorker)return;this.worker=navigator.serviceWorker}else this.worker=new Worker(this.swName);this.worker.addEventListener("message",e=>{switch(e.data.msg_type){case"collProgress":if(e.data.name===this.coll){if(this.percent=e.data.percent,e.data.error){if(this.error=e.data.error,this.state="errored",this.errorAllowRetry=!0,this.fileHandle=e.data.fileHandle,this.error==="missing_local_file")this.tryFileHandle=!1;else if(this.error==="permission_needed"&&e.data.fileHandle){this.state="permission_needed";break}}e.data.currentSize&&e.data.totalSize&&(this.currentSize=e.data.currentSize,this.totalSize=e.data.totalSize),this.extraMsg=e.data.extraMsg}break;case"collAdded":e.data.name===this.coll&&(this.total||(this.total=100),this.progress=this.total,this.percent=100,this.dispatchEvent(new CustomEvent("coll-loaded",{detail:e.data})),this.noWebWorker?this.pingInterval&&clearInterval(this.pingInterval):this.worker.terminate(),this.worker=null)}})}async doLoad(){let e,r,o=this.sourceUrl,s=null;if(this.percent=this.currentSize=this.totalSize=0,this.loadInfo&&this.loadInfo.swError)return this.state="errored",this.error=this.loadInfo.swError,void(this.errorAllowRetry=!1);try{const{scheme:w,host:z,path:A}=function(R){let H=R.indexOf("://"),te=0,X="",pe="",Ee="";return H>=0?(X=R.slice(0,H),H+=3):(H++,R.startsWith("//")&&(H+=2)),te=R.indexOf("/",H),te>0?(pe=R.slice(H,te),Ee=R.slice(te)):(pe=R.slice(H),Ee=""),{scheme:X,host:pe,path:Ee}}(o);switch(w){case"googledrive":this.state="googledrive",s=await this.googledriveInit();break;case"s3":s={sourceUrl:o,loadUrl:`https://${z}.s3.amazonaws.com${A}`,name:this.sourceUrl};break;case"file":if(!this.loadInfo&&!this.tryFileHandle)return this.state="errored",this.error=`File URLs can not be entered directly or shared.
You can select a file to upload from the main page by clicking the 'Choose File...' button.`,void(this.errorAllowRetry=!1);s=this.loadInfo;break;case"proxy":o="proxy:"+o.slice(8)}}catch(w){console.log(w)}s||(s={sourceUrl:o}),this.state="started",this.loadInfo&&(s.newFullImport=this.loadInfo.newFullImport,s.loadEager=this.loadInfo.loadEager,s.noCache=this.loadInfo.noCache,this.loadInfo.extraConfig&&(r=this.loadInfo.extraConfig),o.startsWith("proxy:")&&r&&r.recording&&(e="recordingproxy"));const f={msg_type:"addColl",name:this.coll,extraConfig:r,type:e,skipExisting:!0,file:s};navigator.serviceWorker.controller||await new Promise(w=>{navigator.serviceWorker.addEventListener("controllerchange",()=>w())}),this.worker&&(this.noWebWorker?(navigator.serviceWorker.controller.postMessage(f),this.pingInterval=setInterval(()=>{navigator.serviceWorker.controller.postMessage({msg_type:"ping"})},15e3)):this.worker.postMessage(f))}googledriveInit(){return this._gdWait=new Promise(e=>this._gdResolve=e),this._gdWait}async onLoadReady(e){this._gdResolve&&this._gdResolve(e.detail)}onCancel(){if(!this.worker)return;const e={msg_type:"cancelLoad",name:this.coll};this.noWebWorker?navigator.serviceWorker&&navigator.serviceWorker.controller&&(navigator.serviceWorker.controller.postMessage(e),this.pingInterval&&clearInterval(this.pingInterval)):this.worker.postMessage(e)}updated(e){(this.sourceUrl&&e.has("sourceUrl")||e.has("tryFileHandle"))&&this.doLoad()}static get styles(){return De(k`
      :host {
        height: 100%;
        display: flex;
      }

      .logo {
        width: 96px;
        height: 96px;
        margin: 1em;
        flex-grow: 1;
      }

      .progress-div {
        position: relative;
        width: 400px !important;
      }

      .progress-label {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: calc(1.5rem / 1.5);
        line-height: 1.5rem;
      }

      .loaded-prog {
        margin-bottom: 1em;
      }

      .error {
        white-space: pre-wrap;
        margin-bottom: 2em;
      }

      section.container {
        margin: auto;
      }

      .extra-msg {
        font-size: 0.8rem;
      }
    `)}render(){return $`
    <section class="container">
      <div class="has-text-centered is-flex">
        <wr-anim-logo class="logo" size="96px"/>
      </div>
      ${this.embed?"":$`
      <div class="level">
        <p class="level-item">Loading&nbsp;<b>${this.sourceUrl}</b>...</p>
      </div>`}
      <div class="level">
        <div class="level-item has-text-centered">
        ${this.renderContent()}
        </div>
      </div>
    </section>
    `}renderContent(){switch(this.state){case"googledrive":return $`<wr-gdrive .sourceUrl=${this.sourceUrl} @load-ready=${this.onLoadReady}/>`;case"started":return $`
          <div class="progress-div">
            <progress id="progress" class="progress is-primary is-large" 
            value="${this.percent}" max="100"></progress>
            <label class="progress-label" for="progress">${this.percent}%</label>
            ${this.currentSize&&this.totalSize?$`
              <div class="loaded-prog">Loaded <b>${Lt()(this.currentSize)}</b> of <b>${Lt()(this.totalSize)}</b>
              ${this.extraMsg&&$`
              <p class="extra-msg">(${this.extraMsg})</p>
              `}
              </div>`:$``}

            ${this.embed?"":$`
            <button @click="${this.onCancel}" class="button is-danger">Cancel</button>`}
          </div>`;case"errored":return $`
          <div class="has-text-left">
          <div class="error has-text-danger">${this.error}</div>
          <div>
          ${this.errorAllowRetry?$`
          <a class="button is-warning" @click=${()=>window.parent.location.reload()}>Try Again</a>`:""}
          ${this.embed?$``:$`
          <a href="/" class="button is-warning">Back</a>`}
          </div>`;case"permission_needed":return $`
        <div class="has-text-left">
          <div class="">Permission is needed to reload the archive file. (Click <i>Cancel</i> to cancel loading this archive.)</div>
          <button @click="${this.onAskPermission}" class="button is-primary">Show Permission</button>
          <a href="/" class="button is-danger">Cancel</a>
        </div>`;default:return $`<progress class="progress is-primary is-large" style="max-width: 400px"/>`}}async onAskPermission(){await this.fileHandle.requestPermission({mode:"read"})==="granted"&&this.doLoad()}}customElements.define("wr-loader",Ki);var Qr=__webpack_require__(9746),Jr=__webpack_require__.n(Qr),Yr=__webpack_require__(6304),Xr=__webpack_require__(6442),eo=__webpack_require__.n(Xr),to=__webpack_require__(9638),io=__webpack_require__.n(to);class Ut extends _e{constructor(){super(),this.filteredPages=[],this.sortedPages=[],this.query="",this.flex=null,this.textPages=null,this.newQuery=null,this.loading=!1,this.updatingSearch=!1,this.showAllPages=!1,this.hasExtraPages=!1,this.currList=0,this.active=!1,this.editable=!1,this.changeNeeded=!1,this.selectedPages=new Set,this.menuActive=!1,this.sortKey="date",this.sortDesc=!0,this.isSidebar=!1,this.url="",this.ts="",this.editing=!1,this.toDeletePages=null,this.toDeletePage=null}static get sortKeys(){return[{key:"",name:"Best Match"},{key:"title",name:"Title"},{key:"date",name:"Date"}]}static get properties(){return{active:{type:Boolean},collInfo:{type:Object},currList:{type:Number},filteredPages:{type:Array},sortedPages:{type:Array},showAllPages:{type:Boolean},query:{type:String},defaultKey:{type:String},loading:{type:Boolean},updatingSearch:{type:Boolean},editable:{type:Boolean},selectedPages:{type:Set},allSelected:{type:Boolean},menuActive:{type:Boolean},sortKey:{type:String},sortDesc:{type:Boolean},isSidebar:{type:Boolean},url:{type:String},ts:{type:String},editing:{type:Boolean},toDeletePages:{type:Object},toDeletePage:{type:Object}}}_timedUpdate(){this.newQuery!==null&&(this.query=this.newQuery,this.newQuery=null,this.filter())}async updated(e){if(e.has("collInfo")?this.updateTextSearch():(e.has("query")||e.has("currList")||e.has("showAllPages"))&&this.filter(),e.has("active")&&this.active&&this.changeNeeded&&this.filter(),e.has("query")){this.query?(this.sortKey="",this.sortDesc=!1):(this.sortKey="date",this.sortDesc=!0);const r=this.renderRoot.querySelector("wr-sorter");r&&(r.sortKey=this.sortKey,r.sortDesc=this.sortDesc)}if(e.has("sortedPages")&&this.isSidebar){const r=this.renderRoot.querySelector(".current");if(r){const o={behavior:"smooth",block:"nearest",inline:"nearest"};setTimeout(()=>r.scrollIntoView(o),100)}}}onChangeQuery(e){this.newQuery=e.currentTarget.value,this._ival&&window.clearTimeout(this._ival),this._ival=window.setTimeout(()=>this._timedUpdate(),250)}async filter(){if(this.loading)return;if(this.active||(this.changeNeeded=!0),this.loading=!0,this.flex&&this.query&&this.textPages){const r=await this.flex.searchAsync(this.query,25);this.filteredPages=r.map(o=>this.textPages[o])}else this.showAllPages&&this.hasExtraPages?this.filteredPages=[...this.textPages]:this.filteredPages=[...this.collInfo.pages];this.currList!==0&&await this.filterCurated();for(const r of this.filteredPages){const{timestamp:o,date:s}=zi(r);r.timestamp=o,r.date=s}this.loading=!1,this.changeNeeded=!1;const e={query:this.query,currList:this.currList};this.sendChangeEvent(e)}async filterCurated(){const e=await fetch(`${this.collInfo.apiPrefix}/curated/${this.currList}`),r=(await e.json()).curated;this.filteredPages=r}sendChangeEvent(e){this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{data:e}}))}addPages(e){const r=new Yr.Index;return this.flex=r,this.textPages=e,this.hasExtraPages=this.textPages&&this.collInfo&&this.collInfo.pages&&this.textPages.length>this.collInfo.pages.length,Promise.all(e.map((o,s)=>{let f=o.url;return o.title&&(f+=" "+o.title),o.text&&(f+=" "+o.text),r.addAsync(s,f)}))}async updateTextSearch(){if(this.updatingSearch)return;this.updatingSearch=!0;let e=0;try{const r=await caches.open("cache:"+this.collInfo.coll),o=`${this.collInfo.apiPrefix}/textIndex`;let s=await r.match(o);s&&Number(s.headers.get("Content-Length"))||(s=await fetch(`${this.collInfo.apiPrefix}/textIndex`),s.status===200&&Number(s.headers.get("Content-Length"))&&r.put(o,s.clone()));const f=[];for await(const w of Jr()(s.body.getReader()))w.text&&(w.id=++e,f.push(w));await this.addPages(f)}catch(r){console.warn(r)}finally{e===0&&await this.addPages(this.collInfo.pages),this.updatingSearch=!1}await this.filter()}static get styles(){return De(k`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        min-width: 0px;
        flex-direction: column;
        box-sizing: border-box !important;
      }

      div[role="main"], #contents div[role="complementary"] {
        height: 100%;
      }

      .main.columns {
        width: 100%;
        justify-self: stretch;
        min-height: 0px;
        margin: 0px;
      }

      .header.columns {
        width: 100%;
        margin-bottom: 0px;
      }
      .header a {
        color: black;
      }

      .header .column.pagetitle {
        margin-left: 2.5em;
      }

      .column.main-content {
        min-height: 0px;
        display: flex;
        flex-direction: column;
        padding: 0px;
        margin-top: 0.5em;
        margin-left: 0.75em;
      }

      .index-bar {
        display: flex;
        flex-direction: column;
        border-right: 3px solid rgb(237, 237, 237);
        background-color: whitesmoke;
        padding-right: 0px;
        position: relative;
      }

      .index-bar-title {
        font-size: 1.25rem;
        text-transform: uppercase;
        margin-bottom: 1.0rem;
        word-break: break-word;
      }

      .index-bar-title:hover + .editIcon {
        display: block;
      }

      .editIcon {
        display: none;
        position: absolute;
        right: 8px;
        top: 8px;
      }

      .index-bar-status {
        display: flex;
        flex-direction: row;
        margin-bottom: 0.5rem;
        padding-right: 0.75em;
      }

      .index-bar-menu {
        margin-top: 1.0rem;
      }

      #filter-label {
        margin-bottom: 0px;
      }

      .num-results {
        font-style: italic;
        font-weight: normal;
        line-height: 2.5;
      }

      .asc:after {
        content: "▼";
        font-size: 0.75em;
      }
      .desc:after {
        content: "▲";
        font-size: 0.75em;
      }

      @media screen and (min-width: 769px) {
        .main.columns {
          max-height: 100%;
          height: 100%;
        }
        .index-bar-menu {
          max-height: 100%;
          overflow-y: auto;
        }
      }

      @media screen and (max-width: 768px) {
        ${Ut.sidebarStyles()}
      }

      ${Ut.sidebarStyles(m`:host(.sidebar)`)}

      .mobile-lists {
        display: block !important;
      }

      :host(.sidebar) .columns.is-hidden-mobile, :host(.sidebar) .is-hidden-mobile {
        display: none !important;
      }

      :host(.sidebar) .mobile-header {
        display: flex !important;
      }

      :host(.sidebar) .columns {
        display: flex !important;
      }

      .scroller {
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        flex: auto;

        padding-bottom: 1.0em;
        min-height: 0px;
      }

      .page-entry {
        padding-bottom: 1.5rem;
      }

      .selected {
        background-color: rgb(207, 243, 255);
      }

      .is-disabled {
        pointer-events: none;
        opacity: .65;
      }

      .page-header {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        width: 100%;
        min-height: fit-content;

        margin-bottom: 1.0em;
        border-bottom: 3px solid rgb(237, 237, 237);
      }

      .check-select {
        padding: 0 1.0em 0 0.5em;
      }

      .search-bar {
        width: auto;
        display: flex;
        flex-direction: column;
      }
      .flex-auto {
        flex: auto;
      }
    `)}static sidebarStyles(e=k``){return k`
    ${e} .main.columns {
      position: relative;
      max-height: 100%;
      height: 100%;
    }

    ${e} .index-bar-menu {
      max-height: 75px;
      overflow-y: auto;
      margin-top: 0.75em;
    }

    ${e} .column.main-content {
      position: relative;
      overflow-y: auto;

      width: 100%;
      min-height: 0px;
      height: 100%;
      padding: 0px;
      margin: 0px;
    }

    ${e} .mobile-header {
      margin: 0.5rem;
      margin-left: 1.0rem;
      align-items: center;
      display: flex;
      justify-content: space-between;
      flex-flow: row wrap;
      min-height: 24px;
      width: 100%;
    }

    ${e} .menu {
      font-size: 0.80rem;
    }`}onSelectList(e){e.preventDefault(),this.currList=Number(e.currentTarget.getAttribute("data-list"))}onSelectListDrop(e){e.preventDefault(),this.currList=Number(e.currentTarget.value)}render(){const e=this.currList;return $`
    <div class="is-sr-only" role="heading" aria-level="${this.isSidebar?"2":"1"}">
      Pages in ${this.collInfo.title}
    </div>
    <div class="search-bar notification is-marginless">
      ${this.isSidebar?$`<h3 class="is-sr-only">Search and Filter Pages</h3>`:""}
      <div class="field flex-auto">
        <div class="control has-icons-left ${this.loading?"is-loading":""}">
          <input type="search" class="input" @input="${this.onChangeQuery}" .value="${this.query}" type="text"
          placeholder="Search by Page URL, Title or Text">
          <span class="icon is-left"><fa-icon .svg="${bi()}" aria-hidden="true"></fa-icon></span>
        </div>
      </div>
    </div>
    <div class="main columns">
      <div class="column index-bar is-one-fifth ${this.isSidebar?"is-hidden-mobile":""}">

        ${this.editable&&this.editing?$`
        <form @submit="${this.onUpdateTitle}"><input id="titleEdit" class="input" value="${this.collInfo.title}" @blur="${this.onUpdateTitle}"></form>
        `:$`
        <div class="index-bar-title" @dblclick="${()=>this.editing=!0}">${this.collInfo.title}</div>`}

        ${this.editable?$`<fa-icon class="editIcon" .svg="${io()}"></fa-icon>`:$``}

        ${this.hasExtraPages?$`
        <span class="check-select">
          <label class="checkbox">
          <input @change=${r=>this.showAllPages=r.currentTarget.checked} type="checkbox" .checked="${this.showAllPages}">
          Show Non-Seed Pages
          </label>
        </span>`:""}

        <span class="num-results is-hidden-mobile" aria-live="polite" aria-atomic="true">${this.formatResults()}</span>

        ${this.editable?$`
        <div class="index-bar-actions">
          ${this.renderDownloadMenu()}
        </div>`:""}

        ${this.collInfo.lists.length?$`
        <p id="filter-label" class="menu-label">Filter By List:</p>
        <div class="index-bar-menu menu">
          <ul class="menu-list">
            <li>
              <a href="#list-0" data-list="0" class="${e===0?"is-active":""}"
                @click=${this.onSelectList}><i>All Pages</i></a>
            </li>
            ${this.collInfo.lists.map(r=>$`
              <li>
                <a @click=${this.onSelectList} href="#list-${r.id}"
                data-list="${r.id}"
                class="${e===r.id?"is-active":""}">${r.title}</a>
              </li>`)}
          </ul>
        </div>
        `:""}
      </div>
      <div class="column main-content">
        <div class="is-sr-only" role="heading" aria-level="${this.isSidebar?"3":"2"}">Page List</div>
        ${this.renderPages()}
      </div>
    </div>
    ${this.renderDeleteModal()}
    `}renderDownloadMenu(){return $`
      <div class="dropdown ${this.menuActive?"is-active":""}">
        <div class="dropdown-trigger">
          <button @click="${this.onMenu}" class="button is-small" aria-haspopup="true" aria-expanded="${this.menuActive}" aria-controls="dropdown-menu">
            <span>Download</span>
            <span class="icon is-small">
              <fa-icon .svg="${eo()} aria-hidden="true"></fa-icon>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu">
          <div class="dropdown-content">
            <a role="button" href="#"
             @click="${e=>this.onDownload(e,"wacz")}"
             @keyup="${ge}"
             class="dropdown-item">
              Download ${this.selectedPages.size===0?"All":"Selected"} as WACZ (Web Archive Collection Zip)
            </a>
            <a role="button" href="#"
             @click="${e=>this.onDownload(e,"warc")}"
             @keyup="${ge}"
             class="dropdown-item">
              Download ${this.selectedPages.size===0?"All":"Selected"} as WARC 1.1 Only
            </a>
            <a role="button" href="#"
              @click="${e=>this.onDownload(e,"warc1.0")}"
              @keyup="${ge}"
              class="dropdown-item">
              Download ${this.selectedPages.size===0?"All":"Selected"} as WARC 1.0 Only
            </a>
          </div>
        </div>
      </div>`}renderPageHeader(){return $`
    ${!this.isSidebar&&this.editable&&this.filteredPages.length?$`
    <div class="check-select">
      <label class="checkbox">
      <input @change=${this.onSelectAll} type="checkbox" .checked="${this.allSelected}">
      </label>
    </div>`:$``}

    <div class="header columns is-hidden-mobile">
      ${this.query?$`
      <a role="button" href="#" @click="${this.onSort}" @keyup="${ge}" data-key="" class="column is-1 ${this.sortKey===""?this.sortDesc?"desc":"asc":""}">Match</a>`:""}

      <a role="button" href="#" @click="${this.onSort}" @keyup="${ge}" data-key="date" class="column is-2 ${this.sortKey==="date"?this.sortDesc?"desc":"asc":""}">Date</a>
      <a role="button" href="#" @click="${this.onSort}" @keyup="${ge}" data-key="title" class="column is-6 pagetitle ${this.sortKey==="title"?this.sortDesc?"desc":"asc":""}">Page Title</a>
    </div>

    <div class="is-hidden-tablet mobile-header">
      <div class="num-results" aria-live="polite" aria-atomic="true">${this.formatResults()}</div>
      <wr-sorter id="pages"
      .sortKey="${this.sortKey}"
      .sortDesc="${this.sortDesc}"
      .sortKeys="${Ut.sortKeys}"
      .data="${this.filteredPages}"
      pageResults="100"
      @sort-changed="${this.onSortChanged}"
      class="${this.filteredPages.length?"":"is-hidden"}">
      </wr-sorter>
    </div>
    `}renderDeleteModal(){return this.toDeletePages?$`
    <wr-modal bgClass="has-background-grey-lighter" @modal-closed="${()=>this.toDeletePages=this.toDeletePage=null}" title="Confirm Delete">
      ${this.toDeletePage?$`
      <p>Are you sure you want to delete the page <b>${this.toDeletePage.title}</b>?
      (Size: <b>${Lt()(this.toDeletePage.size)}</b>)</p>`:$`
      <p>Are you sure you want to delete the <b>${this.toDeletePages.size}</b> selected pages?
      `}
      <p>This operation can not be undone.</p>

      <button @click="${this.onDeletePages}"class="button is-danger">Delete</button>
      <button @click="${()=>this.toDeletePages=this.toDeletePage=null}" class="button">Cancel</button>
    </wr-modal>`:$``}isCurrPage(e){if(this.isSidebar&&e.url===this.url){let r=e.timestamp;return!r&&e.date?r=oi(e.date):typeof e.ts=="string"&&(r=oi(e.ts)),r===this.ts}return!1}renderPages(){return $`
      <div class="page-header has-text-weight-bold">
      ${this.renderPageHeader()}
      </div>
      <ul class="scroller" @scroll="${this.onScroll}">
        ${this.sortedPages.length?$`
          ${this.sortedPages.map((e,r)=>{const o=this.selectedPages.has(e.id);return $`
          <li class="page-entry ${o?"selected":""}">
            <wr-page-entry
            .index="${this.query||this.isSidebar?r+1:0}"
            .editable="${this.editable}"
            .selected="${o}"
            .isCurrent="${this.isCurrPage(e)}"
            .isSidebar="${this.isSidebar}"
            .page="${e}"
            pid="${e.id}"
            @sel-page="${this.onSelectToggle}"
            @delete-page="${this.onDeleteConfirm}"
            replayPrefix="${this.collInfo.replayPrefix}"
            query="${this.query}"
            class="${this.isSidebar?"sidebar":""}"
            >
            </wr-page-entry>
          </li>`})}`:$`<p class="mobile-header">${this.getNoResultsMessage()}</p>`}
      </ul>
    `}onUpdateTitle(e){if(e.preventDefault(),this.editing=!1,!this.editable)return;const r=this.renderRoot.querySelector("#titleEdit");if(!r||!r.value.trim())return;const o=r.value,s=JSON.stringify({title:o});fetch(`${this.collInfo.apiPrefix}/metadata`,{method:"POST",body:s}).then(f=>{f.status===200&&this.dispatchEvent(new CustomEvent("coll-update",{detail:{title:o}}))})}onMenu(e){e.stopPropagation(),this.menuActive=!this.menuActive,this.menuActive&&document.addEventListener("click",()=>{this.menuActive=!1},{once:!0})}onSort(e){e.preventDefault();const r=e.currentTarget.getAttribute("data-key")||"";r===this.sortKey?this.sortDesc=!this.sortDesc:(this.sortDesc=!1,this.sortKey=r)}onSortChanged(e){this.sortedPages=e.detail.sortedData,this.sortKey=e.detail.sortKey,this.sortDesc=e.detail.sortDesc}onSelectToggle(e){const{page:r,selected:o}=e.detail;o?this.selectedPages.add(r):this.selectedPages.delete(r),this.allSelected=this.selectedPages.size===this.sortedPages.length,this.requestUpdate()}onSelectAll(e){this.allSelected=e.currentTarget.checked,this.allSelected?this.sortedPages.forEach(r=>{this.selectedPages.add(r.id)}):this.selectedPages.clear(),this.requestUpdate()}async onDownload(e,r){e.preventDefault();const o=this.selectedPages.size>0,s=new URLSearchParams;s.set("pages",o?Array.from(this.selectedPages.keys()).join(","):"all"),s.set("format",r),this.collInfo.filename&&s.set("filename",this.collInfo.filename),window.location.href=`${this.collInfo.apiPrefix}/dl?`+s.toString()}onDeleteConfirm(e){const r=e.currentTarget.page;this.selectedPages.has(r.id)?(this.toDeletePages=this.selectedPages,this.toDeletePage=null):(this.toDeletePages=[r.id],this.toDeletePage=r)}async onDeletePages(){const e={};for(const r of this.toDeletePages){const o=this.renderRoot.querySelector(`wr-page-entry[pid="${r}"]`);o&&(o.deleting=!0,e[r]=o)}for(const r of this.toDeletePages){const o=await fetch(`${this.collInfo.apiPrefix}/page/${r}`,{method:"DELETE"}),s=await o.json();if(s.error){console.warn(s.error);continue}const f=e[r];if(!f)continue;const w=this.collInfo.pages.indexOf(f);w<0||this.collInfo.pages.splice(w,1)}this.toDeletePages=null,this.toDeletePage=null,this.updateTextSearch(),this.requestUpdate()}formatResults(){if(!this.query){const e=this.filteredPages.length;return e===this.sortedPages.length?`${e} Page${e!==1?"s":""}`:`${this.sortedPages.length} of ${e} Pages Shown`}return this.sortedPages.length===1?"1 Page":`${this.sortedPages.length} Pages`}getNoResultsMessage(){return this.collInfo&&this.collInfo.pages.length?this.updatingSearch?"Initializing Search...":this.loading?"Searching...":this.query?$`<span class="fix-text-wrapping">No matching pages found. Try changing the search query, or <a href="#view=resources">browse by URL</a>.</span>`:"No Pages Found":$`<span class="fix-text-wrapping">No Pages are defined in this archive. The archive may be empty. <a href="#view=resources">Try browsing by URL</a>.</span>`}onScroll(e){const r=e.currentTarget;if(r.scrollHeight-r.scrollTop-r.clientHeight<40){const o=this.renderRoot.querySelector("wr-sorter");o&&o.getMore()}}}customElements.define("wr-page-view",Ut);const ao=new RegExp(`[${["-","[","]","/","{","}","(",")","*","+","?",".","\\","^","$","|"].join("\\")}]`,"g"),ro=g=>g.replace(ao,"\\$&");class oo extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["keywords","delimiter"]}get keywords(){var e;return(e=this.getAttribute("keywords"))!==null&&e!==void 0?e:""}set keywords(e){this.setAttribute("keywords",e)}get delimiter(){var e;return(e=this.getAttribute("delimiter"))!==null&&e!==void 0?e:""}set delimiter(e){this.setAttribute("delimiter",e)}attributeChangedCallback(e,r,o){e!=="keywords"&&e!=="delimiter"||o!==r&&this._render()}connectedCallback(){this._render(),this.__observer=new MutationObserver(()=>{this._render()}),this.__observer.observe(this,{childList:!0,characterData:!0,subtree:!0})}disconnectedCallback(){this.__observer&&(this.__observer.disconnect(),this.__observer=void 0)}_render(){if(!this.shadowRoot)return;const e=this.textContent||"",r=this.getAttribute("keywords"),o=this.getAttribute("delimiter")||/\s+/;if(!r)return void(this.shadowRoot.textContent=e);const s=e.toLowerCase(),f=r.toLowerCase().split(o).sort((H,te)=>te.length-H.length),w=new RegExp(`${f.map(ro).join("|")}`,"gi"),z=e.split(w),A=document.createElement("div");let R=0;for(const H of z)if(A.appendChild(document.createTextNode(H)),R+=H.length,R<s.length){const te=s.substring(R),X=f.find(pe=>te.startsWith(pe));if(X){const pe=document.createElement("mark");pe.textContent=e.substr(R,X.length),A.appendChild(pe),R+=X.length}}this.shadowRoot.innerHTML=`
      <style>
        mark {
          color: var(--keyword-mark-color);
          background: var(--keyword-mark-background, yellow);
        }
      </style>
      ${A.innerHTML}
    `}}customElements.define("keyword-mark",oo);class Zt extends _e{constructor(){super(),this.query="",this.textSnippet="",this.page=null,this.replayPrefix="",this.deleting=!1,this.editable=!1,this.iconValid=!1,this.index=0,this.isCurrent=!1,this.isSidebar=!1}static get properties(){return{query:{type:String},textSnippet:{type:String},page:{type:Object},replayPrefix:{type:String},deleting:{type:Boolean},selected:{type:Boolean},editable:{type:Boolean},iconValid:{type:Boolean},index:{type:Number},isCurrent:{type:Boolean},isSidebar:{type:Boolean}}}static get styles(){return De(k`
      :host {
        min-height: min-content;
        width: 100%;
        word-break: break-all;
        position: relative;
        display: flex;
        flex-direction: row;
        background: transparent;
      }

      :host(.sidebar) .column {
        width: unset !important;
      }

      :host(.sidebar) {
        width: 100%;
      }

      .check-select {
        padding: 0 1.0em 0 0.5em;
        height: 100%;
        margin: auto 0 auto 0;
      }

      .columns {
        width: 100%;
      }

      /* Overrde Bulma to add the tiniest margin, so the focus indicator isn't obscured */
      .columns {
        margin-top: calc(-0.75rem + 2px);
      }
      .columns:last-child {
        margin-bottom: calc(-0.75rem + 2px);
      }


      .favicon {
        width: 24px !important;
        height: 24px !important;
        display: inline-block;
        vertical-align: text-bottom;
      }
      img.favicon {
        filter: drop-shadow(1px 1px 2px grey);
      }

      .media-left {
        align-self: center;
      }

      .delete-button {
        position: absolute;
        top: 8px;
        right: 8px;
      }

      .delete:hover {
        background-color: rgb(241, 70, 104);
      }

      .is-loading {
        line-height: 1.5em;
        height: 1.5em;
        border: 0px;
        background-color: transparent !important;
        width: auto;
      }

      @media screen and (max-width: 768px) {
        ${Zt.sidebarStyles()}
      }

      ${Zt.sidebarStyles(m`:host(.sidebar)`)}

      .current a {
        background-color: rgb(207, 243, 255);
        font-style: italic;
        display: block;
      }

      .current .curr-page {
        font-style: italic;
        font-size: 9px;
        color: black;
      }

      .is-inline-date {
        display: none;
      }

      .media-content a {
        display: block;
      }
    `)}static sidebarStyles(e=k``){return k`
    ${e} .col-date {
      margin-left: calc(24px + 1rem);
      display: none;
    }
    ${e} .col-date div {
      display: inline;
    }
    ${e} .col-index {
      position: absolute;
      top: 0px;
      left: 0px;
      margin-top: -0.75em;
    }
    ${e} .columns {
      display: flex;
      flex-direction: column-reverse;
    }
    ${e} .is-inline-date {
      display: initial !important;
      font-style: italic;
    }
    `}updated(e){(e.has("page")||e.has("query"))&&(this.updateSnippet(),this.iconValid=!!this.page.favIconUrl,this.deleting=!1)}render(){const e=this.page,r=this.page.date,o=typeof e.size=="number",s=this.editable&&!this.isSidebar;return $`
    ${s?$`
    <div class="check-select">
      <label class="checkbox">
      <input @change=${this.onSendSelToggle} type="checkbox" .checked="${this.selected}">
      </label>
    </div>`:""}

    <div class="columns">
      ${this.index?$`
      <div class="column col-index is-1 is-size-7">${this.index}.</div>
      `:""}
      <div class="column col-date is-2">
        <div>${r?r.toLocaleDateString():""}</div>
        <div>${r?r.toLocaleTimeString():""}</div>
      </div>
      <div class="column">
        <div class="media">
          <figure class="media-left">
            <p class="">
            ${this.iconValid?$`
              <img class="favicon" @error="${()=>this.iconValid=!1}" src="${this.replayPrefix}/${this.page.timestamp}id_/${e.favIconUrl}"/>`:$`
              <span class="favicon"></span>`}
            </p>
          </figure>
          <div class="media-content ${this.isCurrent?"current":""}">
            <div role="heading" aria-level="${this.isSidebar?"4":"3"}">
              <a @dblclick="${this.onReload}" @click="${this.onReplay}" href="${mi("pages",this.page.url,this.page.timestamp)}">
              <p class="is-size-6 has-text-weight-bold has-text-link text">
              <keyword-mark keywords="${this.query}">${e.title||e.url}</keyword-mark>
              </p>
              <p class="has-text-dark text"><keyword-mark keywords="${this.query}">${e.url}</keyword-mark></p>
              <p class="has-text-grey-dark text is-inline-date">
                ${r?r.toLocaleString():""}
              </p>
            </a>
            ${this.textSnippet?$`
              <div class="text"><keyword-mark keywords="${this.query}">${this.textSnippet}</keyword-mark></div>`:$``}
          </div>
          ${o?$`
          <div class="media-right" style="margin-right: 2em">
            ${Lt()(e.size)}
          </div>`:""}
        </div>
      </div>
    </div>

    ${s?$`
      ${this.deleting?$`
      <button class="button is-loading delete-button is-static"></button>
      `:$`
      <button @click="${this.onSendDeletePage}" class="delete delete-button"></button>`}`:""}
    `}async updateFavIcon(){if(!this.page.favIconUrl)return void(this.favIconData=null);const e=await fetch(`${this.replayPrefix}/${this.page.timestamp}id_/${this.page.favIconUrl}`);if(e.status!=200)return void(this.favIconData=null);const r=await e.arrayBuffer(),o=e.headers.get("content-type");try{this.favIconData=`data:${o};base64,${btoa(String.fromCharCode.apply(null,r))}`}catch(s){console.log(s),this.favIconData=null}}updateSnippet(){const e=this.textSnippet;if(!this.query||!this.page.text)return this.textSnippet=null,void this.requestUpdate("textSnippet",e);let r=this.page.text,o=this.query,s=r.indexOf(this.query);if(s<0){let w=r.toLowerCase(),z=o.toLowerCase();if(s=w.indexOf(z),s<0)return this.textSnippet=null,void this.requestUpdate("textSnippet",e);r=w,o=z}let f=s;s=Math.max(s-100,0),f=Math.min(f+200,r.length),s===0&&f===r.length?this.textSnippet=r:this.textSnippet="..."+r.slice(s,f)+"...",this.requestUpdate("textSnippet",e)}onReplay(e,r=!1){e.preventDefault();const o={url:this.page.url,ts:this.page.timestamp};return this.sendChangeEvent(o,r),!1}onReload(e){return this.onReplay(e,!0)}sendChangeEvent(e,r){this.dispatchEvent(new CustomEvent("coll-tab-nav",{bubbles:!0,composed:!0,detail:{data:e,reload:r}}))}onSendDeletePage(){const e=this.page;this.dispatchEvent(new CustomEvent("delete-page",{detail:{page:e}}))}onSendSelToggle(e){const r=this.page.id,o=e.currentTarget.checked;this.dispatchEvent(new CustomEvent("sel-page",{detail:{page:r,selected:o}}))}}customElements.define("wr-page-entry",Zt);class Vi extends _e{constructor(){super(),this.replayUrl="",this.replayTS="",this.actualTS="",this.url="",this.ts="",this.title="",this.collInfo=null,this.showAuth=!1,this.reauthWait=null,this.authFileHandle=null}static get properties(){return{collInfo:{type:Object},sourceUrl:{type:String},url:{type:String},ts:{type:String},replayUrl:{type:String},replayTS:{type:String},actualTS:{type:String},title:{type:String},iframeUrl:{type:String},showAuth:{type:Boolean},authFileHandle:{type:Object}}}firstUpdated(){window.addEventListener("message",e=>this.onReplayMessage(e)),navigator.serviceWorker.addEventListener("message",e=>this.handleAuthMessage(e))}async handleAuthMessage(e){if(e.data.type==="authneeded"&&this.collInfo&&e.data.coll===this.collInfo.coll){if(e.data.fileHandle){this.authFileHandle=e.data.fileHandle;try{if(await this.authFileHandle.requestPermission({mode:"read"})==="granted")return this.showAuth=!1,this.reauthWait=null,void this.refresh()}catch(r){console.warn(r)}}else this.authFileHandle=null;this.reauthWait?await this.reauthWait:this.showAuth=!0}}doSetIframeUrl(){this.iframeUrl=this.url?`${this.collInfo.replayPrefix}/${this.ts||""}mp_/${this.url}`:""}updated(e){if((e.has("sourceUrl")||e.has("collInfo"))&&(this.reauthWait=null),!this.url||this.replayUrl==this.url&&this.replayTS==this.ts||!e.has("url")&&!e.has("ts")||(this.replayUrl=this.url,this.replayTS=this.ts,this.showAuth=!1,this.reauthWait=null,this.doSetIframeUrl()),this.iframeUrl&&e.has("iframeUrl")){this.waitForLoad();const r={title:"Archived Page",replayTitle:!1};this.dispatchEvent(new CustomEvent("update-title",{bubbles:!0,composed:!0,detail:r}))}if(this.replayUrl&&e.has("replayUrl")||this.replayTS&&e.has("replayTS")){const r={url:this.replayUrl,ts:this.replayTS};this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{replaceLoc:!0,data:r}}))}if(this.title&&(e.has("title")||e.has("actualTS"))){const r={title:this.title,url:this.replayUrl,ts:this.actualTS,replayTitle:!0};this.dispatchEvent(new CustomEvent("update-title",{bubbles:!0,composed:!0,detail:r}))}}setDisablePointer(e){const r=this.renderRoot.querySelector("iframe");r&&(r.style.pointerEvents=e?"none":"all")}onReplayMessage(e){const r=this.renderRoot.querySelector("iframe");if(r&&e.source===r.contentWindow)if(e.data.wb_type==="load"||e.data.wb_type==="replace-url"){if(this.replayTS=e.data.is_live?"":e.data.ts,this.actualTS=e.data.ts,this.replayUrl=e.data.url,this.title=e.data.title||this.title,this.clearLoading(r.contentWindow),e.data.icons){const o=e.data.icons;this.dispatchEvent(new CustomEvent("replay-favicons",{bubbles:!0,composed:!0,detail:{icons:o}}))}}else e.data.wb_type==="title"&&(this.title=e.data.title)}onReAuthed(e){this.reauthWait=(async()=>{if(this.authFileHandle){if(await this.authFileHandle.requestPermission({mode:"read"})!=="granted")return void(this.reauthWait=null);this.authFileHandle=null}else{const r=e.detail.headers;await fetch(`${this.collInfo.apiPrefix}/updateAuth`,{method:"POST",body:JSON.stringify({headers:r})})}this.showAuth&&(this.showAuth=!1,this.reauthWait=null),this.refresh()})()}waitForLoad(){this.setLoading(),this._loadPoll=window.setInterval(()=>{const e=this.renderRoot.querySelector("iframe");e&&e.contentDocument&&e.contentWindow&&(e.contentDocument.readyState!=="complete"||e.contentWindow._WBWombat)||this.clearLoading(e&&e.contentWindow)},5e3)}clearLoading(e){this.dispatchEvent(new CustomEvent("replay-loading",{detail:{loading:!1}})),this._loadPoll&&(window.clearInterval(this._loadPoll),this._loadPoll=null),e&&e.addEventListener("beforeunload",()=>{this.setLoading()})}setLoading(){this.dispatchEvent(new CustomEvent("replay-loading",{detail:{loading:!0}}))}refresh(){const e=this.renderRoot.querySelector("iframe");if(!e)return;const r=this.iframeUrl;this.doSetIframeUrl(),r!==this.iframeUrl&&this.url!==this.replayUrl||(this.waitForLoad(),e.contentWindow.location.reload())}static get styles(){return De(k`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .iframe-container {
        position: relative;
        width: 100%;
        height: 100%;
        border: 0px;
      }

      .iframe-main {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        width: 100%;
        height: 100%;
      }

      .intro-panel .panel-heading {
        font-size: 1.0em;
        display: inline-block;
      }

      .iframe-main.modal-bg {
        z-index: 200;
        background-color: rgba(10, 10, 10, 0.70)
      }

      #wrlogo {
        vertical-align: middle;
      }

      .intro-panel .panel-block {
        padding: 1.0em;
        flex-direction: column;
        line-height: 2.5em;
      }

      div.intro-panel.panel {
        min-width: 40%;
        display: flex;
        flex-direction: column;
        margin: 3em;
        background-color: white;
      }
    `)}render(){const e=`Replay of ${this.title?`${this.title}:`:""} ${this.url}`;return $`

    <h1 id="replay-heading" class="is-sr-only">${e}</h1>

    ${this.iframeUrl?$`

      <div class="iframe-container">
        <iframe class="iframe-main" name="___wb_replay_top_frame" @message="${this.onReplayMessage}" allow="autoplay 'self'; fullscreen" allowfullscreen
        src="${this.iframeUrl}" title="${e}"></iframe>

        ${this.showAuth?$`
        <div class="iframe-main modal-bg">
          <div class="panel intro-panel">
            <p class="panel-heading">
              <fa-icon id="wrlogo" size="1.5rem" .svg=${ut()} aria-hidden="true"></fa-icon>
              Authorization Needed
            </p>
            <div class="panel-block">
              ${this.authFileHandle?$`
              <p>This archive is loaded from a local file: <b>${this.authFileHandle.name}</b></p>
              <p>The browser needs to confirm your permission to continue loading from this file.</p>
              <button class="button is-warning is-rounded" @click="${this.onReAuthed}">Show Confirmation</button>
              `:$`
              <wr-gdrive
                .sourceUrl="${this.sourceUrl}"
                .state="trymanual"
                .reauth="${!0}"
                @load-ready="${this.onReAuthed}"/>`}
            </div>
          </div>
        </div>
        `:""}
      </div>
    `:$`
      <div class="panel intro-panel">
        <p class="panel-heading">Replay Web Page</p>
        <div class="panel-block">
          <p>Enter a URL above to replay it from the web archive!</p>
          <p>(Or, check out <a href="#view=pages">Pages</a> or <a href="#view=resources">URLs</a> to explore the contents of this archive.)</p>
        </div>
      </div>`}`}}customElements.define("wr-coll-replay",Vi);var no=__webpack_require__(8690),so=__webpack_require__.n(no),lo=__webpack_require__(5761),co=__webpack_require__.n(lo);class Zi extends _e{constructor(){super(),this.sortedData=[],this.data=[],this.pageResults=0,this.numResults=0,this.sortKey=null,this.sortDesc=null}static get properties(){return{id:{type:String},pageResults:{type:Number},data:{type:Array},sortedData:{type:Array},sortKey:{type:String},sortDesc:{type:Boolean}}}firstUpdated(){if(this.id){const e=localStorage.getItem(`${this.id}:sortKey`);e!==null&&(this.sortKey=e);const r=localStorage.getItem(`${this.id}:sortDesc`);r!==null&&(this.sortDesc=r==="1")}}updated(e){const r=e.has("sortKey"),o=e.has("sortDesc"),s=e.has("data");r&&this.sortKey!==null&&localStorage.setItem(`${this.id}:sortKey`,this.sortKey),o&&this.sortDesc!==null&&localStorage.setItem(`${this.id}:sortDesc`,this.sortDesc?"1":"0"),(r||o||s)&&this.sortData()}sortData(){this.sortedData=[...this.data],this.numResults=this.pageResults,this.sortKey===""?this.sortDesc&&this.sortedData.reverse():this.sortedData.sort((e,r)=>e[this.sortKey]===r[this.sortKey]?0:this.sortDesc==e[this.sortKey]<r[this.sortKey]?1:-1),this.sendSortChanged()}sendSortChanged(){const e={sortKey:this.sortKey,sortDesc:this.sortDesc,sortedData:this.numResults?this.sortedData.slice(0,this.numResults):this.sortedData};this.dispatchEvent(new CustomEvent("sort-changed",{detail:e}))}getMore(e=100){this.pageResults&&this.numResults>=this.sortedData.length||(this.numResults+=e,this.sendSortChanged())}static get styles(){return De(k`
      :host {
        min-width: 100px;
        box-sizing: border-box !important;
      }
      button.button.is-small {
        border-radius: 4px;
      }
    `)}render(){return $`
    <div class="select is-small">
      <select id="sort-select" @change=${e=>this.sortKey=e.currentTarget.value}>
      ${this.sortKeys.map(e=>$`
        <option value="${e.key}" ?selected="${e.key===this.sortKey}">Sort By: ${e.name}
        </option>
      `)}
      </select>
    </div>
    <button @click=${()=>this.sortDesc=!this.sortDesc} class="button is-small">
      <span>Order:</span>
      <span class="is-sr-only">${this.sortDesc?"Ascending":"Descending"}</span>
      <span class="icon"><fa-icon aria-hidden="true" .svg=${this.sortDesc?co():so()}></span>
    </button>`}}customElements.define("wr-sorter",Zi);class Qt extends _e{static get filters(){return[{name:"HTML",filter:"text/html,text/xhtml"},{name:"Images",filter:"image/"},{name:"Audio/Video",filter:"audio/,video/"},{name:"PDF",filter:"application/pdf"},{name:"Javascript",filter:"application/javascript,application/x-javascript"},{name:"CSS",filter:"text/css"},{name:"Fonts",filter:"font/,application/font-woff"},{name:"Plain Text",filter:"text/plain"},{name:"JSON",filter:"application/json"},{name:"DASH/HLS",filter:"application/dash+xml,application/x-mpegURL,application/vnd.apple.mpegurl"},{name:"All URLs",filter:""}]}static get sortKeys(){return[{key:"url",name:"URL"},{key:"ts",name:"Date"},{key:"mime",name:"Mime Type"},{key:"status",name:"Status"}]}constructor(){super(),this.collInfo=null,this.isSidebar=!1,this.currMime="",this.query="",this.urlSearchType="",this.filteredResults=[],this.sortedResults=[],this.results=[],this.newQuery=null,this.tryMore=!1,this.loading=!1,this.sortKey="url",this.sortDesc=!1}static get properties(){return{collInfo:{type:Object},isSidebar:{type:Boolean},currMime:{type:String},query:{type:String},urlSearchType:{type:String},filteredResults:{type:Array},sortedResults:{type:Array},loading:{type:Boolean},sortKey:{type:String},sortDesc:{type:Boolean}}}firstUpdated(){this.urlSearchType===""&&(this.urlSearchType="prefix")}_timedUpdate(){this.newQuery!==null&&(this.query=this.newQuery,this.newQuery=null)}updated(e){if(e.has("query")||e.has("urlSearchType")||e.has("currMime")){this.doLoadResources();const r={query:this.query,urlSearchType:this.urlSearchType,currMime:this.currMime},o=!e.has("currMime")&&!e.has("urlSearchType");this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{replaceLoc:o,data:r}}))}(e.has("sortKey")||e.has("sortDesc"))&&this.filter()}async doLoadResources(e=!1){if(e&&(!this.tryMore||!this.results.length)||this.loading)return;this.loading=!0;let r=this.urlSearchType!=="contains"?this.query:"";const o=r&&this.urlSearchType==="prefix"?1:0;r&&!r.startsWith("http")&&(r="https://"+r);const s=this.currMime,f=new URLSearchParams({mime:s,url:r,prefix:o,count:100});if(e){const z=this.results[this.results.length-1];f.set("fromMime",z.mime),f.set("fromUrl",z.url),f.set("fromStatus",z.status),f.set("fromTs",new Date(z.date).getTime())}let w=await fetch(`${this.collInfo.apiPrefix}/urls?${f.toString()}`);w=await w.json(),this.results=e?this.results.concat(w.urls):w.urls,this.tryMore=w.urls.length>=100,this.filter(),this.loading=!1}onChangeTypeSearch(e){this.currMime=e.currentTarget.value}onChangeQuery(e){this.newQuery=e.currentTarget.value,this._ival&&window.clearTimeout(this._ival),this._ival=window.setTimeout(()=>this._timedUpdate(),250)}onClickUrlType(e){this.urlSearchType=e.currentTarget.value}filter(){const e=[],r=this.urlSearchType==="contains"?this.query:"";for(const o of this.results)(!r||o.url.indexOf(r)>=0)&&e.push(o);this.filteredResults=e}onScroll(e){const r=e.currentTarget,o=r.scrollHeight-r.scrollTop-r.clientHeight;this.tryMore&&o<40&&this.doLoadResources(!0)}static get styles(){return De(k`
    :host {
      width: 100%;
      height: 100%;
      display: flex;
      min-width: 0px;
      flex-direction: column;
    }
    :host(.sidebar) .is-hidden-tablet {
      display: flex !important;
    }

    :host(.sidebar) .is-hidden-mobile {
      display: none !important;
    }

    :host(.sidebar) .level, :host(.sidebar) .level-left, :host(.sidebar) .level-right {
      display: block !important;
    }

    :host(.sidebar) .columns {
      display: flex !important;
      flex-direction: column;
    }

    :host(.sidebar) .column {
      width: 100% !important;
    }

    .notification {
      width: 100%;
    }
    .all-results {
      margin: 0 0 0 0.5em;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }
    .main-scroll {
      flex-grow: 1;
    }
    .minihead {
      font-size: 10px;
      font-weight: bold;
    }
    .columns {
      margin: 0px;
    }
    thead {
      margin-bottom: 24px;
    }
    table th:not([align]) {
      text-align: left;
    }
    .result {
      border-bottom: 1px #dbdbdb solid;
      min-height: fit-content;
    }
    .results-head {
      border-bottom: 2px #dbdbdb solid;
      margin-right: 16px;
      min-height: fit-content;
      display: block;
      width: 100%;
    }
    .results-head a {
      color: black;
    }
    .all-results .column {
      word-break: break-word;
    }
    div.sort-header {
      padding: 10px;
      margin-bottom: 0px !important;
      min-height: fit-content;
    }
    .flex-auto {
      flex: auto;
    }
    .asc:after {
      content: "▼";
      font-size: 0.75em;
    }
    .desc:after {
      content: "▲";
      font-size: 0.75em;
    }
    .num-results {
      margin-left: 1em;
      font-style: italic;
    }
    `)}render(){return $`
    <div role="heading" aria-level="${this.isSidebar?"2":"1"}" class="is-sr-only">URLs in ${this.collInfo.title}</div>

    <div role="heading" aria-level="${this.isSidebar?"3":"2"}" class="is-sr-only">Search and Filter</div>
    <div class="notification level is-marginless">
      <div class="level-left flex-auto">
        <div class="level-item flex-auto">
          <span class="is-hidden-mobile">Search:&nbsp;&nbsp;</span>
          <div class="select">
            <select @change="${this.onChangeTypeSearch}">
            ${Qt.filters.map(e=>$`
            <option value="${e.filter}"
            ?selected="${e.filter===this.currMime}">
            ${e.name}
            </option>
            `)}
            </select>
          </div>
          <div class="field flex-auto">
            <div class="control has-icons-left ${this.loading?"is-loading":""}">
              <input type="text" class="input" @input="${this.onChangeQuery}" .value="${this.query}" type="text" placeholder="Enter URL to Search">
              <span class="icon is-left"><fa-icon .svg="${bi()}"/></span>
            </div>
          </div>
        </div>
      </div>
      <div class="control level-right">
        <div style="margin-left: 1em" class="control">
          <label class="radio has-text-left"><input type="radio" name="urltype" value="contains" ?checked="${this.urlSearchType==="contains"}" @click="${this.onClickUrlType}">&nbsp;Contains</label>
          <label class="radio has-text-left"><input type="radio" name="urltype" value="prefix" ?checked="${this.urlSearchType==="prefix"}" @click="${this.onClickUrlType}">&nbsp;Prefix</label>
          <label class="radio has-text-left"><input type="radio" name="urltype" value="exact" ?checked="${this.urlSearchType==="exact"}" @click="${this.onClickUrlType}">&nbsp;Exact</label>
          <span id="num-results" class="num-results" is-pulled-right" aria-live="polite" aria-atomic="true">${this.filteredResults.length} Result(s)</span>
        </div>
      </div>
    </div>

    <div class="sort-header is-hidden-tablet">
      <wr-sorter id="urls"
        .sortKey="${this.sortKey}"
        .sortDesc="${this.sortDesc}"
        .sortKeys="${Qt.sortKeys}"
        .data="${this.filteredResults}"
        @sort-changed="${this.onSortChanged}">
      </wr-sorter>
    </div>

    <div role="heading" aria-level="${this.isSidebar?"3":"2"}" id="results-heading" class="is-sr-only">Results</div>

    <table class="all-results" aria-labelledby="results-heading num-results">
      <thead>
        <tr class="columns results-head has-text-weight-bold">
          <th scope="col" class="column col-url is-6 is-hidden-mobile"><a role="button" href="#" @click="${this.onSort}" @keyup="${ge}" data-key="url" class="${this.sortKey==="url"?this.sortDesc?"desc":"asc":""}">URL</a></th>
          <th scope="col" class="column col-ts is-2 is-hidden-mobile"><a role="button" href="#" @click="${this.onSort}" @keyup="${ge}" data-key="ts" class="${this.sortKey==="ts"?this.sortDesc?"desc":"asc":""}">Date</a></th>
          <th scope="col" class="column col-mime is-3 is-hidden-mobile"><a role="button" href="#" @click="${this.onSort}" @keyup="${ge}" data-key="mime" class="${this.sortKey==="mime"?this.sortDesc?"desc":"asc":""}">Mime Type</a></th>
          <th scope="col" class="column col-status is-1 is-hidden-mobile"><a role="button" href="#" @click="${this.onSort}" @keyup="${ge}" data-key="status" class="${this.sortKey==="status"?this.sortDesc?"desc":"asc":""}">Status</a></th>
        </tr>
      </thead>

      <tbody class="main-scroll" @scroll="${this.onScroll}">
      ${this.sortedResults.length?this.sortedResults.map(e=>$`
          <tr class="columns result">
            <td class="column col-url is-6"><p class="minihead is-hidden-tablet">URL</p><a @click="${this.onReplay}" data-url="${e.url}" data-ts="${e.ts}" href="${mi("resources",e.url,e.ts)}">
            <keyword-mark keywords="${this.query}">${e.url}</keyword-mark>
            </a></td>
            <td class="column col-ts is-2"><p class="minihead is-hidden-tablet">Date</p>${new Date(e.date).toLocaleString()}</td>
            <td class="column col-mime is-3"><p class="minihead is-hidden-tablet">Mime Type</p>${e.mime}</td>
            <td class="column col-status is-1"><p class="minihead is-hidden-tablet">Status</p>${e.status}</td>
          </tr>
        `):$`<tr class="section"><td colspan="4"><i>No Results Found.</i></td></tr>`}
      </tbody>
    </table>
      `}onSort(e){e.preventDefault();const r=e.currentTarget.getAttribute("data-key");r===this.sortKey?this.sortDesc=!this.sortDesc:(this.sortDesc=!1,this.sortKey=r)}onSortChanged(e){this.sortedResults=e.detail.sortedData,this.sortKey=e.detail.sortKey,this.sortDesc=e.detail.sortDesc}onReplay(e){e.preventDefault();const r={url:e.currentTarget.getAttribute("data-url"),ts:e.currentTarget.getAttribute("data-ts")};return this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{data:r}})),!1}}customElements.define("wr-coll-resources",Qt);var ho=document.currentScript&&document.currentScript.src,Qi="";class Ji extends _e{constructor(){super(),this.replaybase="./replay/",this.replayfile=Qi,this.swName="sw.js",this.mainElementName="replay-app-main",this.appName="ReplayWeb.page",this.view="replay",this.ts="",this.url="",this.query="",this.config="",this.customConfig=null,this.coll="",this.paramString=null,this.deepLink=!1,this.newWindowBase="",this.inited=!1,this.embed=null,this.reloadCount=0,this.sandbox=!1,this.noWebWorker=!1,this.noCache=!1,this.noSandbox=null,this.logo=ut(),this.loading="",this.useRuffle=!1}static setDefaultReplayFile(e){Qi=e}static get properties(){return{url:{type:String},ts:{type:String},query:{type:String},source:{type:String},src:{type:String},view:{type:String},embed:{type:String},replaybase:{type:String},swName:{type:String},title:{type:String},coll:{type:String},config:{type:String},inited:{type:Boolean},paramString:{type:String},hashString:{type:String},deepLink:{type:Boolean},sandbox:{type:Boolean},noSandbox:{type:Boolean},noWebWorker:{type:Boolean},noCache:{type:Boolean},hideOffscreen:{type:Boolean},newWindowBase:{type:String},errorMessage:{type:String},requireSubdomainIframe:{type:Boolean},loading:{type:String},useRuffle:{type:Boolean}}}async doRegister(){const e=new URL(this.replaybase,window.location.href);if(this.isCrossOrigin=e.origin!==window.location.origin,this.isCrossOrigin)return void(this.inited=!0);const r=this.swName,o=this.appName,s=this.replaybase,f=this.requireSubdomainIframe;this.swmanager=new _i({name:r,scope:s,requireSubdomainIframe:f,appName:o});try{await this.swmanager.register(),this.inited=!0}catch{this.errorMessage=this.swmanager.renderErrorReport(this.logo)}}handleMessage(e){const r=this.renderRoot.querySelector("iframe");if(r&&e.source===r.contentWindow){if(!e.data.view||(e.data.title&&(this.title=e.data.title),!this.deepLink))return;const o=new URLSearchParams(e.data),s=new URL(window.location.href);s.hash="#"+o.toString(),window.history.replaceState({},"",s)}}firstUpdated(){this.noSandbox&&console.warn("The noSandbox flag is deprecated. ReplayWeb.page does not add a sandbox by default. To enable sandboxing, use 'sandbox' flag instead. This may result in PDFs not loading and pages opening in new windows, but may be more secure in some situations"),this.doRegister(),window.addEventListener("message",e=>this.handleMessage(e)),this.deepLink&&(this.updateFromHash(),window.addEventListener("hashchange",()=>this.updateFromHash())),this.loadBrowserDefaults()}loadBrowserDefaults(){window.GestureEvent!==void 0&&window.SharedWorker===void 0&&(this.noWebWorker=!0),navigator.storage&&navigator.storage.estimate||(this.noCache=!0)}updateFromHash(){const e=new URLSearchParams(window.location.hash.slice(1));e.has("url")&&(this.url=e.get("url")),e.has("ts")&&(this.ts=e.get("ts")),e.has("query")&&(this.query=e.get("query")),e.has("view")&&(this.view=e.get("view"))}mergeConfigs(){if(!this.customConfig)return this.config;if(this.config){const e={...this.customConfig,...JSON.parse(this.config)};return JSON.stringify(e)}return JSON.stringify(this.customConfig)}updated(e){if(e.has("url")||e.has("ts")||e.has("query")||e.has("view")||e.has("source")||e.has("src")){this.embed=this.embed||"default",this.src&&(this.source=this.src);const r=new URL(this.source,document.baseURI),o=this.mergeConfigs(),s={source:r,customColl:this.coll,config:o,basePageUrl:window.location.href.split("#")[0],baseUrlSourcePrefix:this.newWindowBase,embed:this.embed};this.deepLink||s.baseUrlSourcePrefix||(s.baseUrlSourcePrefix="https://replayweb.page/"),this.noWebWorker&&(s.noWebWorker="1"),this.noCache&&(s.noCache="1"),this.hideOffscreen&&(s.hideOffscreen="1"),this.loading==="eager"&&(s.loading="eager"),this.swName!=="sw.js"&&(s.swName=this.swName),this.useRuffle&&(s.ruffle="1"),this.paramString=new URLSearchParams(s).toString(),this.hashString=new URLSearchParams({url:this.url,ts:this.ts,query:this.query,view:this.view}).toString()}}static get styles(){return De(k`
      .logo {
        margin: 1em;
        flex-grow: 1;
      }
      .error {
        white-space: pre-wrap;
        text-align: center;
      }
      .full-width {
        width: 100%;
      }
      iframe {
        width: 100%;
        height: 100%;
        border: 0px;
        padding: 0px;
        margin: 0px;
      }
      :host {
        width: 100%;
        height: 100%;
        display: block;
      }
    `)}render(){return $`
    ${this.paramString&&this.hashString&&this.inited?$`
      <iframe sandbox="${(e=>e??ye)(this.sandbox?"allow-downloads allow-modals allow-orientation-lock allow-pointer-lock         allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts         allow-same-origin allow-forms":void 0)}"

      @load="${this.onLoad}" src="${this.replaybase}${this.replayfile}?${this.paramString}#${this.hashString}" allow="autoplay *; fullscreen"
      title="Replay of ${this.title?`${this.title}:`:""} ${this.url}"></iframe>

      `:$``}

    ${this.errorMessage}
    `}onLoad(e){if(this.isCrossOrigin)return;const r=e.target.contentWindow,o=e.target.contentDocument;if(r.navigator.serviceWorker&&!r.navigator.serviceWorker.controller&&this.reloadCount<=2)return this.reloadCount++,void setTimeout(()=>r.location.reload(),100);if(this.reloadCount=0,r.customElements.get(this.mainElementName))return;const s=o.createElement("script");s.src=ho,o.head.appendChild(s)}}(async function(){customElements.define("replay-web-page",Ji)})()})();var __webpack_export_target__=self;for(var i in __webpack_exports__)__webpack_export_target__[i]=__webpack_exports__[i];__webpack_exports__.__esModule&&Object.defineProperty(__webpack_export_target__,"__esModule",{value:!0})})();const app="";function noop(){}function run(n){return n()}function blank_object(){return Object.create(null)}function run_all(n){n.forEach(run)}function is_function(n){return typeof n=="function"}function safe_not_equal(n,l){return n!=n?l==l:n!==l||n&&typeof n=="object"||typeof n=="function"}function is_empty(n){return Object.keys(n).length===0}function append(n,l){n.appendChild(l)}function append_styles(n,l,h){const p=get_root_for_style(n);if(!p.getElementById(l)){const m=element("style");m.id=l,m.textContent=h,append_stylesheet(p,m)}}function get_root_for_style(n){if(!n)return document;const l=n.getRootNode?n.getRootNode():n.ownerDocument;return l&&l.host?l:n.ownerDocument}function append_stylesheet(n,l){return append(n.head||n,l),l.sheet}function insert(n,l,h){n.insertBefore(l,h||null)}function detach(n){n.parentNode&&n.parentNode.removeChild(n)}function element(n){return document.createElement(n)}function text(n){return document.createTextNode(n)}function space(){return text(" ")}function attr(n,l,h){h==null?n.removeAttribute(l):n.getAttribute(l)!==h&&n.setAttribute(l,h)}function set_custom_element_data(n,l,h){l in n?n[l]=typeof n[l]=="boolean"&&h===""?!0:h:attr(n,l,h)}function children(n){return Array.from(n.childNodes)}function set_data(n,l){l=""+l,n.data!==l&&(n.data=l)}function get_custom_elements_slots(n){const l={};return n.childNodes.forEach(h=>{l[h.slot||"default"]=!0}),l}let current_component;function set_current_component(n){current_component=n}const dirty_components=[],binding_callbacks=[];let render_callbacks=[];const flush_callbacks=[],resolved_promise=Promise.resolve();let update_scheduled=!1;function schedule_update(){update_scheduled||(update_scheduled=!0,resolved_promise.then(flush))}function add_render_callback(n){render_callbacks.push(n)}const seen_callbacks=new Set;let flushidx=0;function flush(){if(flushidx!==0)return;const n=current_component;do{try{for(;flushidx<dirty_components.length;){const l=dirty_components[flushidx];flushidx++,set_current_component(l),update(l.$$)}}catch(l){throw dirty_components.length=0,flushidx=0,l}for(set_current_component(null),dirty_components.length=0,flushidx=0;binding_callbacks.length;)binding_callbacks.pop()();for(let l=0;l<render_callbacks.length;l+=1){const h=render_callbacks[l];seen_callbacks.has(h)||(seen_callbacks.add(h),h())}render_callbacks.length=0}while(dirty_components.length);for(;flush_callbacks.length;)flush_callbacks.pop()();update_scheduled=!1,seen_callbacks.clear(),set_current_component(n)}function update(n){if(n.fragment!==null){n.update(),run_all(n.before_update);const l=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,l),n.after_update.forEach(add_render_callback)}}function flush_render_callbacks(n){const l=[],h=[];render_callbacks.forEach(p=>n.indexOf(p)===-1?l.push(p):h.push(p)),h.forEach(p=>p()),render_callbacks=l}const outroing=new Set;function transition_in(n,l){n&&n.i&&(outroing.delete(n),n.i(l))}function mount_component(n,l,h){const{fragment:p,after_update:m}=n.$$;p&&p.m(l,h),add_render_callback(()=>{const k=n.$$.on_mount.map(run).filter(is_function);n.$$.on_destroy?n.$$.on_destroy.push(...k):run_all(k),n.$$.on_mount=[]}),m.forEach(add_render_callback)}function destroy_component(n,l){const h=n.$$;h.fragment!==null&&(flush_render_callbacks(h.after_update),run_all(h.on_destroy),h.fragment&&h.fragment.d(l),h.on_destroy=h.fragment=null,h.ctx=[])}function make_dirty(n,l){n.$$.dirty[0]===-1&&(dirty_components.push(n),schedule_update(),n.$$.dirty.fill(0)),n.$$.dirty[l/31|0]|=1<<l%31}function init(n,l,h,p,m,k,y,_=[-1]){const j=current_component;set_current_component(n);const q=n.$$={fragment:null,ctx:[],props:k,update:noop,not_equal:m,bound:blank_object(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(j?j.$$.context:[])),callbacks:blank_object(),dirty:_,skip_bound:!1,root:l.target||j.$$.root};y&&y(q.root);let ee=!1;if(q.ctx=h?h(n,l.props||{},(oe,ne,...de)=>{const ae=de.length?de[0]:ne;return q.ctx&&m(q.ctx[oe],q.ctx[oe]=ae)&&(!q.skip_bound&&q.bound[oe]&&q.bound[oe](ae),ee&&make_dirty(n,oe)),ne}):[],q.update(),ee=!0,run_all(q.before_update),q.fragment=p?p(q.ctx):!1,l.target){if(l.hydrate){const oe=children(l.target);q.fragment&&q.fragment.l(oe),oe.forEach(detach)}else q.fragment&&q.fragment.c();l.intro&&transition_in(n.$$.fragment),mount_component(n,l.target,l.anchor),flush()}set_current_component(j)}let SvelteElement;typeof HTMLElement=="function"&&(SvelteElement=class extends HTMLElement{constructor(l,h,p){super();Be(this,"$$ctor");Be(this,"$$s");Be(this,"$$c");Be(this,"$$cn",!1);Be(this,"$$d",{});Be(this,"$$r",!1);Be(this,"$$p_d",{});Be(this,"$$l",{});Be(this,"$$l_u",new Map);this.$$ctor=l,this.$$s=h,p&&this.attachShadow({mode:"open"})}addEventListener(l,h,p){if(this.$$l[l]=this.$$l[l]||[],this.$$l[l].push(h),this.$$c){const m=this.$$c.$on(l,h);this.$$l_u.set(h,m)}super.addEventListener(l,h,p)}removeEventListener(l,h,p){if(super.removeEventListener(l,h,p),this.$$c){const m=this.$$l_u.get(h);m&&(m(),this.$$l_u.delete(h))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let h=function(y){return()=>{let _;return{c:function(){_=element("slot"),y!=="default"&&attr(_,"name",y)},m:function(ee,oe){insert(ee,_,oe)},d:function(ee){ee&&detach(_)}}}};var l=h;if(await Promise.resolve(),!this.$$cn)return;const p={},m=get_custom_elements_slots(this);for(const y of this.$$s)y in m&&(p[y]=[h(y)]);for(const y of this.attributes){const _=this.$$g_p(y.name);_ in this.$$d||(this.$$d[_]=get_custom_element_value(_,y.value,this.$$p_d,"toProp"))}this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:p,$$scope:{ctx:[]}}});const k=()=>{this.$$r=!0;for(const y in this.$$p_d)if(this.$$d[y]=this.$$c.$$.ctx[this.$$c.$$.props[y]],this.$$p_d[y].reflect){const _=get_custom_element_value(y,this.$$d[y],this.$$p_d,"toAttribute");_==null?this.removeAttribute(y):this.setAttribute(this.$$p_d[y].attribute||y,_)}this.$$r=!1};this.$$c.$$.after_update.push(k),k();for(const y in this.$$l)for(const _ of this.$$l[y]){const j=this.$$c.$on(y,_);this.$$l_u.set(_,j)}this.$$l={}}}attributeChangedCallback(l,h,p){var m;this.$$r||(l=this.$$g_p(l),this.$$d[l]=get_custom_element_value(l,p,this.$$p_d,"toProp"),(m=this.$$c)==null||m.$set({[l]:this.$$d[l]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(l){return Object.keys(this.$$p_d).find(h=>this.$$p_d[h].attribute===l||!this.$$p_d[h].attribute&&h.toLowerCase()===l)||l}});function get_custom_element_value(n,l,h,p){var k;const m=(k=h[n])==null?void 0:k.type;if(l=m==="Boolean"&&typeof l!="boolean"?l!=null:l,!p||!h[n])return l;if(p==="toAttribute")switch(m){case"Object":case"Array":return l==null?null:JSON.stringify(l);case"Boolean":return l?"":null;case"Number":return l??null;default:return l}else switch(m){case"Object":case"Array":return l&&JSON.parse(l);case"Boolean":return l;case"Number":return l!=null?+l:l;default:return l}}function create_custom_element(n,l,h,p,m){const k=class extends SvelteElement{constructor(){super(n,h,m),this.$$p_d=l}static get observedAttributes(){return Object.keys(l).map(y=>(l[y].attribute||y).toLowerCase())}};return Object.keys(l).forEach(y=>{Object.defineProperty(k.prototype,y,{get(){return this.$$c&&y in this.$$c?this.$$c[y]:this.$$d[y]},set(_){var j;_=get_custom_element_value(y,_,l),this.$$d[y]=_,(j=this.$$c)==null||j.$set({[y]:_})}})}),p.forEach(y=>{Object.defineProperty(k.prototype,y,{get(){var _;return(_=this.$$c)==null?void 0:_[y]}})}),n.element=k,k}class SvelteComponent{constructor(){Be(this,"$$");Be(this,"$$set")}$destroy(){destroy_component(this,1),this.$destroy=noop}$on(l,h){if(!is_function(h))return noop;const p=this.$$.callbacks[l]||(this.$$.callbacks[l]=[]);return p.push(h),()=>{const m=p.indexOf(h);m!==-1&&p.splice(m,1)}}$set(l){this.$$set&&!is_empty(l)&&(this.$$.skip_bound=!0,this.$$set(l),this.$$.skip_bound=!1)}}const PUBLIC_VERSION="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(PUBLIC_VERSION);function add_css(n){append_styles(n,"svelte-1wd42jh",".popup-container.svelte-1wd42jh{display:block;height:100%;width:100%}#wacz-popup.svelte-1wd42jh{height:100%;width:100%;position:absolute;background-color:#eeeef4}#info.svelte-1wd42jh,replay-web-page.svelte-1wd42jh{float:left;width:calc(50% - 10px)}#info.svelte-1wd42jh{margin:10px}.info-title.svelte-1wd42jh{font-size:18px;font-weight:700}")}function create_if_block(n){let l,h,p,m,k,y,_,j,q,ee,oe,ne,de,ae,le,we,xe,be,Le,Ie,qe,Se=n[5].slice(0,100)+"",Me,zt,ct,Ye,qt,Ct,Fe,bt,At,Ze,Mt,$,He,ye,Dt,Qe,Xe,et,tt,Yt,Je,dt,jt,it,Ot,Xt,ei,ht,mt,ft,_e,gt,Nt,at,vt,Bt,wt,xt,kt,Et,Ft,rt,Ht,ut,ti,De,je,It,ge,Pt,yt;return{c(){l=element("p"),h=element("strong"),h.textContent="Archive name",p=element("br"),m=text(n[2]),k=space(),y=element("p"),_=element("strong"),_.textContent="Webpage",j=element("br"),q=element("a"),ee=text(n[1]),oe=space(),ne=element("p"),de=element("strong"),de.textContent="Archived on",ae=element("br"),le=text(n[3]),we=space(),xe=element("p"),be=element("strong"),be.textContent="Observed by",Le=element("br"),Ie=text(n[4]),qe=element("br"),Me=text(Se),zt=space(),ct=element("p"),Ye=element("strong"),Ye.textContent="Package hash",qt=element("br"),Ct=text(n[6]),Fe=space(),bt=element("p"),bt.innerHTML="<strong>Blockchain registration</strong>",At=space(),Ze=element("p"),Mt=element("strong"),Mt.textContent="ISCN on Likecoin",$=element("br"),He=text("Transaction ID: "),ye=element("a"),Dt=text(n[7]),Qe=space(),Xe=element("p"),et=element("strong"),et.textContent="Numbers Protocol on Numbers",tt=element("br"),Yt=text("Transaction ID: "),Je=element("a"),dt=text(n[8]),jt=space(),it=element("p"),Ot=element("strong"),Ot.textContent="Numbers Protocol on Avalanche",Xt=element("br"),ei=text("Transaction ID: "),ht=element("a"),mt=text(n[9]),_e=space(),gt=element("p"),gt.innerHTML="<strong>Storage and archiving</strong>",Nt=space(),at=element("p"),vt=element("strong"),vt.textContent="IPFS",Bt=element("br"),wt=text("CID: "),xt=element("a"),kt=text(n[10]),Ft=space(),rt=element("p"),Ht=element("strong"),Ht.textContent="Filecoin",ut=element("br"),ti=text("Piece Content ID: "),De=element("a"),je=text(n[11]),It=space(),ge=element("a"),Pt=element("strong"),Pt.textContent="Download archive",attr(q,"href",n[1]),attr(ye,"href","https://app.like.co/"),attr(Je,"href","https://mainnet.num.network/overview"),attr(ht,"href",ft="https://snowtrace.io/search?f=0&q="+n[9]),attr(xt,"href",Et="http://ipfs.io/ipfs/"+n[10]),attr(De,"href","https://filecoin.tools"),attr(ge,"href",yt="http://ipfs.io/ipfs/"+n[10]),attr(ge,"class","button")},m(fe,ue){insert(fe,l,ue),append(l,h),append(l,p),append(l,m),insert(fe,k,ue),insert(fe,y,ue),append(y,_),append(y,j),append(y,q),append(q,ee),insert(fe,oe,ue),insert(fe,ne,ue),append(ne,de),append(ne,ae),append(ne,le),insert(fe,we,ue),insert(fe,xe,ue),append(xe,be),append(xe,Le),append(xe,Ie),append(xe,qe),append(xe,Me),insert(fe,zt,ue),insert(fe,ct,ue),append(ct,Ye),append(ct,qt),append(ct,Ct),insert(fe,Fe,ue),insert(fe,bt,ue),insert(fe,At,ue),insert(fe,Ze,ue),append(Ze,Mt),append(Ze,$),append(Ze,He),append(Ze,ye),append(ye,Dt),insert(fe,Qe,ue),insert(fe,Xe,ue),append(Xe,et),append(Xe,tt),append(Xe,Yt),append(Xe,Je),append(Je,dt),insert(fe,jt,ue),insert(fe,it,ue),append(it,Ot),append(it,Xt),append(it,ei),append(it,ht),append(ht,mt),insert(fe,_e,ue),insert(fe,gt,ue),insert(fe,Nt,ue),insert(fe,at,ue),append(at,vt),append(at,Bt),append(at,wt),append(at,xt),append(xt,kt),insert(fe,Ft,ue),insert(fe,rt,ue),append(rt,Ht),append(rt,ut),append(rt,ti),append(rt,De),append(De,je),insert(fe,It,ue),insert(fe,ge,ue),append(ge,Pt)},p(fe,ue){ue&4&&set_data(m,fe[2]),ue&2&&set_data(ee,fe[1]),ue&2&&attr(q,"href",fe[1]),ue&8&&set_data(le,fe[3]),ue&16&&set_data(Ie,fe[4]),ue&32&&Se!==(Se=fe[5].slice(0,100)+"")&&set_data(Me,Se),ue&64&&set_data(Ct,fe[6]),ue&128&&set_data(Dt,fe[7]),ue&256&&set_data(dt,fe[8]),ue&512&&set_data(mt,fe[9]),ue&512&&ft!==(ft="https://snowtrace.io/search?f=0&q="+fe[9])&&attr(ht,"href",ft),ue&1024&&set_data(kt,fe[10]),ue&1024&&Et!==(Et="http://ipfs.io/ipfs/"+fe[10])&&attr(xt,"href",Et),ue&2048&&set_data(je,fe[11]),ue&1024&&yt!==(yt="http://ipfs.io/ipfs/"+fe[10])&&attr(ge,"href",yt)},d(fe){fe&&(detach(l),detach(k),detach(y),detach(oe),detach(ne),detach(we),detach(xe),detach(zt),detach(ct),detach(Fe),detach(bt),detach(At),detach(Ze),detach(Qe),detach(Xe),detach(jt),detach(it),detach(_e),detach(gt),detach(Nt),detach(at),detach(Ft),detach(rt),detach(It),detach(ge))}}}function create_fragment(n){let l,h,p,m,k,y,_,j,q=n[12]&&create_if_block(n);return{c(){l=element("div"),h=element("div"),p=element("p"),p.textContent="Mono County",m=space(),k=element("replay-web-page"),_=space(),j=element("div"),q&&q.c(),attr(p,"class","info-title svelte-1wd42jh"),set_custom_element_data(k,"id","embed"),set_custom_element_data(k,"source",y="assets/"+n[0]),set_custom_element_data(k,"embed","replay-only"),set_custom_element_data(k,"url",n[1]),set_custom_element_data(k,"class","svelte-1wd42jh"),attr(j,"id","info"),attr(j,"class","svelte-1wd42jh"),attr(h,"id","wacz-popup"),attr(h,"class","svelte-1wd42jh"),attr(l,"class","popup-container svelte-1wd42jh")},m(ee,oe){insert(ee,l,oe),append(l,h),append(h,p),append(h,m),append(h,k),append(h,_),append(h,j),q&&q.m(j,null)},p(ee,[oe]){oe&1&&y!==(y="assets/"+ee[0])&&set_custom_element_data(k,"source",y),oe&2&&set_custom_element_data(k,"url",ee[1]),ee[12]?q?q.p(ee,oe):(q=create_if_block(ee),q.c(),q.m(j,null)):q&&(q.d(1),q=null)},i:noop,o:noop,d(ee){ee&&detach(l),q&&q.d()}}}function instance(n,l,h){let{filename:p="mono-county-pdf-01-2023-08-25T15-57-33.wacz"}=l,{https_link:m="https://giacomobg.github.io/wacz-component/dist/assets/"}=l,k,y,_,j,q,ee,oe,ne,de,ae,le,we=!1;async function xe(){const Ie=(await(await fetch(m+p+".content.json")).json()).contentMetadata;console.log(Ie);const Se=await(await fetch(m+p+".json")).json();h(1,k=Ie.private.crawl_config.config.seeds[0].url),console.log(Se),h(2,y=Se.sourceId.value),h(3,_=Ie.extras.wacz.dateCrawled),h(4,j=Ie.validatedSignatures[0].custom.domain),h(5,q="To be hashed:"+Ie.validatedSignatures[0].custom.domainCert),h(6,ee=Ie.validatedSignatures[0].custom.hash),h(7,oe=Se.registrationRecords.iscn.txHash),h(8,ne=Se.registrationRecords.numbersProtocol.numbers.txHash),h(9,de=Se.registrationRecords.numbersProtocol.avalanche.txHash),h(10,ae=Se.content.cid),h(11,le="Will come later"),h(12,we=!0)}return xe(),n.$$set=be=>{"filename"in be&&h(0,p=be.filename),"https_link"in be&&h(13,m=be.https_link)},[p,k,y,_,j,q,ee,oe,ne,de,ae,le,we,m]}class App extends SvelteComponent{constructor(l){super(),init(this,l,instance,create_fragment,safe_not_equal,{filename:0,https_link:13},add_css)}get filename(){return this.$$.ctx[0]}set filename(l){this.$$set({filename:l}),flush()}get https_link(){return this.$$.ctx[13]}set https_link(l){this.$$set({https_link:l}),flush()}}customElements.define("wacz-lightbox",create_custom_element(App,{filename:{},https_link:{}},[],[],!0));
