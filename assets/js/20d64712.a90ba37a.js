"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7539],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a=r.p+"assets/images/dreamstudio-38c4d5d4eed57f801ec43957b0201ae6.png",o={sidebar_position:19},s="Dream Studio",u={unversionedId:"IDEs/dream_studio",id:"IDEs/dream_studio",title:"Dream Studio",description:"Dream Studio is a website for generating images with Stable Diffusion,",source:"@site/docs/IDEs/dream_studio.md",sourceDirName:"IDEs",slug:"/IDEs/dream_studio",permalink:"/docs/IDEs/dream_studio",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v0.0.2/docs/IDEs/dream_studio.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"OpenAI DALLE IDE",permalink:"/docs/IDEs/DALLE"},next:{title:"Patience",permalink:"/docs/IDEs/patience"}},c={},p=[{value:"Features",id:"features",level:2}],l={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dream-studio"},"Dream Studio"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://beta.dreamstudio.ai/dream"},"Dream Studio")," is a website for generating images with Stable Diffusion,\na text to image model."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a,style:{width:"750px"}})),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"Dream studio's main feature is the ability to adjust various configuration parameters\nof the model, such as height/width of the generated image and steps/sampling algorithm. It allows\nallows for in/outpainting."),(0,i.kt)("p",null,"It currently has an underdeveloped history view (it appears to save pixelated versions of the images to a browser cache, but there is no way to view them)."))}d.isMDXComponent=!0}}]);