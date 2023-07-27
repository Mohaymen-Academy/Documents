"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[1854],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2241:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Re-renders",description:"rendering details"},i=void 0,c={unversionedId:"frontend/react/react-re-renders",id:"frontend/react/react-re-renders",title:"Re-renders",description:"rendering details",source:"@site/docs/frontend/07-react/11-react-re-renders.md",sourceDirName:"frontend/07-react",slug:"/frontend/react/react-re-renders",permalink:"/Documents/docs/frontend/react/react-re-renders",draft:!1,editUrl:"https://github.com/Mohaymen-Academy/Documents/tree/main/docs/frontend/07-react/11-react-re-renders.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Re-renders",description:"rendering details"},sidebar:"tutorialSidebar",previous:{title:"React Forms",permalink:"/Documents/docs/frontend/react/react-forms"},next:{title:"Authentication",permalink:"/Documents/docs/frontend/authentication"}},d={},s=[{value:"\u0686\u0631\u0627 \u0628\u0627\u06cc\u062f \u062c\u0632\u0626\u06cc\u0627\u062a \u0631\u0646\u062f\u0631 \u0647\u0627 \u0631\u0627 \u0628\u062f\u0627\u0646\u06cc\u0645 \u061f",id:"\u0686\u0631\u0627-\u0628\u0627\u06cc\u062f-\u062c\u0632\u0626\u06cc\u0627\u062a-\u0631\u0646\u062f\u0631-\u0647\u0627-\u0631\u0627-\u0628\u062f\u0627\u0646\u06cc\u0645-",level:2},{value:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627 \u06a9\u06cc \u0631\u06cc \u0631\u0646\u062f\u0631 \u0645\u06cc \u0634\u0648\u0646\u062f \u061f",id:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a-\u0647\u0627-\u06a9\u06cc-\u0631\u06cc-\u0631\u0646\u062f\u0631-\u0645\u06cc-\u0634\u0648\u0646\u062f-",level:3},{value:"\u062f\u0644\u0627\u06cc\u0644 \u0631\u06cc \u0631\u0646\u062f\u0631",id:"\u062f\u0644\u0627\u06cc\u0644-\u0631\u06cc-\u0631\u0646\u062f\u0631",level:2},{value:"\u062a\u063a\u06cc\u06cc\u0631 state",id:"\u062a\u063a\u06cc\u06cc\u0631-state",level:3},{value:"\u0631\u06cc \u0631\u0646\u062f\u0631 parent",id:"\u0631\u06cc-\u0631\u0646\u062f\u0631-parent",level:3},{value:"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a context",id:"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a-context",level:3},{value:"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a hook",id:"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a-hook",level:3}],l={toc:s};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2341).Z,width:"1024",height:"575"})),(0,a.kt)("h2",{id:"\u0686\u0631\u0627-\u0628\u0627\u06cc\u062f-\u062c\u0632\u0626\u06cc\u0627\u062a-\u0631\u0646\u062f\u0631-\u0647\u0627-\u0631\u0627-\u0628\u062f\u0627\u0646\u06cc\u0645-"},"\u0686\u0631\u0627 \u0628\u0627\u06cc\u062f \u062c\u0632\u0626\u06cc\u0627\u062a \u0631\u0646\u062f\u0631 \u0647\u0627 \u0631\u0627 \u0628\u062f\u0627\u0646\u06cc\u0645 \u061f"),(0,a.kt)("p",null,"\u0628\u0647 \u062a\u0628\u062f\u06cc\u0644 \u06a9\u062f \u0628\u0647 \u062a\u0635\u0648\u06cc\u0631\u06cc \u06a9\u0647 \u062f\u0631 \u0646\u0647\u0627\u06cc\u062a \u062f\u0631 \u0635\u0641\u062d\u0647 \u062f\u06cc\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f \u0631\u0646\u062f\u0631 \u06af\u0641\u062a\u0647 \u0645\u06cc \u0634\u0648\u062f. \u0627\u06af\u0631 \u0628\u062e\u0634\u06cc \u062f\u0631 \u0635\u0641\u062d\u0647 \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0646\u062f \u0628\u0647 \u0622\u0646 \u0631\u0646\u062f\u0631 \u062f\u0648\u0628\u0627\u0631\u0647 (\u0631\u06cc \u0631\u0646\u062f\u0631) \u06af\u0641\u062a\u0647 \u0645\u06cc \u0634\u0648\u062f.",(0,a.kt)("br",{parentName:"p"}),"\n","\u0631\u06cc \u0627\u06a9\u062a \u062f\u0631 \u0631\u0646\u062f\u0631 \u0633\u0631\u06cc\u0639 \u0646\u06cc\u0633\u062a. \u0628\u0647 \u0647\u0645\u06cc\u0646 \u062f\u0644\u06cc\u0644 \u0645\u0647\u0645 \u062a\u0631\u06cc\u0646 \u0627\u0628\u0632\u0627\u0631 \u0645\u0627 \u0628\u0631\u0627\u06cc \u0633\u0631\u0639\u062a \u0628\u062e\u0634\u06cc\u062f\u0646 \u0628\u0647 \u0645\u062d\u0635\u0648\u0644\u0627\u062a\u06cc \u06a9\u0647 \u0628\u0627 \u0631\u06cc \u0627\u06a9\u062a \u0637\u0631\u0627\u062d\u06cc \u0645\u06cc \u0634\u0648\u0646\u062f \u06a9\u0645 \u06a9\u0631\u062f\u0646 \u062a\u0639\u062f\u0627\u062f \u0631\u0646\u062f\u0631 \u0647\u0627\u0633\u062a."),(0,a.kt)("h3",{id:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a-\u0647\u0627-\u06a9\u06cc-\u0631\u06cc-\u0631\u0646\u062f\u0631-\u0645\u06cc-\u0634\u0648\u0646\u062f-"},"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627 \u06a9\u06cc \u0631\u06cc \u0631\u0646\u062f\u0631 \u0645\u06cc \u0634\u0648\u0646\u062f \u061f"),(0,a.kt)("p",null,"\u0631\u06cc \u0627\u06a9\u062a \u0628\u0647 \u0637\u0648\u0631 \u062e\u0648\u062f\u06a9\u0627\u0631 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0631\u06cc \u0631\u0646\u062f\u0631 \u06cc\u06a9 \u0628\u062e\u0634 \u0627\u0632 \u0635\u0641\u062d\u0647 \u0631\u0627 \u062a\u0634\u062e\u06cc\u0635 \u0645\u06cc \u062f\u0647\u062f. \u062f\u0631 \u0639\u0645\u0644 \u062e\u06cc\u0644\u06cc \u0627\u0648\u0642\u0627\u062a \u0627\u06cc\u0646 \u062a\u0634\u062e\u06cc\u0635 \u062f\u0642\u06cc\u0642 \u0646\u06cc\u0633\u062a \u0648 \u0628\u062e\u0634 \u0647\u0627\u06cc\u06cc \u0631\u06cc \u0631\u0646\u062f\u0631 \u0645\u06cc \u0634\u0648\u0646\u062f \u06a9\u0647 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0631\u06cc \u0631\u0646\u062f\u0631 \u0646\u062f\u0627\u0631\u0646\u062f."),(0,a.kt)("h2",{id:"\u062f\u0644\u0627\u06cc\u0644-\u0631\u06cc-\u0631\u0646\u062f\u0631"},"\u062f\u0644\u0627\u06cc\u0644 \u0631\u06cc \u0631\u0646\u062f\u0631"),(0,a.kt)("h3",{id:"\u062a\u063a\u06cc\u06cc\u0631-state"},"\u062a\u063a\u06cc\u06cc\u0631 state"),(0,a.kt)("p",null,"\u0627\u06af\u0631 state \u0627\u06cc \u062f\u0631 \u06cc\u06a9 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0646\u062f \u0622\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0631\u06cc \u0631\u0646\u062f\u0631 \u062e\u0648\u0627\u0647\u062f \u0634\u062f.",(0,a.kt)("br",{parentName:"p"}),"\n","\u062a\u063a\u06cc\u06cc\u0631 state \u062f\u0644\u06cc\u0644 \u0627\u0635\u0644\u06cc \u0631\u06cc \u0631\u0646\u062f\u0631 \u0647\u0627 \u062f\u0631 \u0631\u06cc \u0627\u06a9\u062a \u0627\u0633\u062a\n",(0,a.kt)("img",{src:r(3129).Z,width:"800",height:"426"})),(0,a.kt)("h3",{id:"\u0631\u06cc-\u0631\u0646\u062f\u0631-parent"},"\u0631\u06cc \u0631\u0646\u062f\u0631 parent"),(0,a.kt)("p",null,"\u0627\u06af\u0631 parent \u06cc\u06a9 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0631\u06cc \u0631\u0646\u062f\u0631 \u0634\u0648\u062f \u0622\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0646\u06cc\u0632 \u0631\u06cc \u0631\u0646\u062f\u0631 \u062e\u0648\u0627\u0647\u0646\u062f \u0634\u062f.\n",(0,a.kt)("img",{src:r(73).Z,width:"800",height:"425"})),(0,a.kt)("h3",{id:"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a-context"},"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a context"),(0,a.kt)("p",null,"\u0627\u06af\u0631 \u0645\u0642\u062f\u0627\u0631\u06cc \u062f\u0631 \u06cc\u06a9 ContextProvider \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0646\u062f \u062a\u0645\u0627\u0645 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0627\u0632 \u0622\u0646 context \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u0646\u062f \u0631\u06cc \u0631\u0646\u062f\u0631 \u062e\u0648\u0627\u0647\u0646\u062f \u0634\u062f. \u062d\u062a\u06cc \u0627\u06af\u0631 \u0627\u0632 \u0645\u0642\u062f\u0627\u0631\u06cc \u06a9\u0647 \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0646\u06a9\u0646\u0646\u062f",(0,a.kt)("br",{parentName:"p"}),"\n","!",(0,a.kt)("img",{src:r(9461).Z,width:"800",height:"423"})),(0,a.kt)("h3",{id:"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a-hook"},"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a hook"),(0,a.kt)("p",null,"\u0647\u0648\u06a9\u06cc \u06a9\u0647 \u062f\u0631 \u06cc\u06a9 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u0648\u062f \xab\u0645\u062a\u0639\u0644\u0642\xbb \u0628\u0647 \u0627\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u0633\u062a. \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u0627\u06af\u0631 \u0642\u0648\u0627\u0646\u06cc\u0646 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0631\u06cc \u0631\u0646\u062f\u0631 \u0628\u0631\u0627\u06cc state \u0648 context \u0627\u06cc\u0646\u062c\u0627 \u0647\u0645 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u0646\u062f \u0648 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0627\u06cc\u0646 \u062f\u0648 \u062f\u0631\u0648\u0646 \u0647\u0648\u06a9 \u0645\u06cc \u062a\u0648\u0627\u0646\u0646\u062f \u0645\u0646\u062c\u0631 \u0628\u0647 \u0631\u06cc \u0631\u0646\u062f\u0631 \u0634\u0648\u0646\u062f",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{src:r(7187).Z,width:"800",height:"424"})),(0,a.kt)("admonition",{title:"\u0645\u0637\u0627\u0644\u0639\u0647",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react.dev/learn/preserving-and-resetting-state"},"New react docs: Preserving and Resetting State")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://legacy.reactjs.org/docs/reconciliation.html"},"Old react docs: reconcilation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.to/adevnadia/react-re-renders-guide-why-components-re-render-4ml"},"React re-renders guide: why React components re-render")))))}p.isMDXComponent=!0},2341:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rerender-72808a57ea949a788c875aa28df8041f.png"},3129:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rerender1-d3a053fc8e9f0707341eeed7e9ac0048.png"},73:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rerender2-eb0742317092d22eb8d3e08dd57521d3.png"},9461:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rerender3-4af2e6ad8a1715776623be82cdeae72d.png"},7187:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rerender4-c1a9babd6dda6ef3d9215c5861d8c320.png"}}]);