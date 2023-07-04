"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[5056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"Authentication",description:"Well, we haven't exactly met, we just stayed up all night talking on the internet."},o=void 0,i={unversionedId:"frontend/phase08-authentication",id:"frontend/phase08-authentication",title:"Authentication",description:"Well, we haven't exactly met, we just stayed up all night talking on the internet.",source:"@site/docs/frontend/phase08-authentication.md",sourceDirName:"frontend",slug:"/frontend/phase08-authentication",permalink:"/Documents/docs/frontend/phase08-authentication",draft:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/frontend/phase08-authentication.md",tags:[],version:"current",frontMatter:{title:"Authentication",description:"Well, we haven't exactly met, we just stayed up all night talking on the internet."},sidebar:"tutorialSidebar",previous:{title:"CI/CD",permalink:"/Documents/docs/frontend/phase07-ci-cd"},next:{title:"Unit Testing",permalink:"/Documents/docs/frontend/phase09-unit-testing"}},p={},s=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc",id:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc",level:2},{value:"Storages",id:"storages",level:3},{value:"Document.cookie",id:"documentcookie",level:4},{value:"Window.sessionStorage",id:"windowsessionstorage",level:4},{value:"Window.localStorage",id:"windowlocalstorage",level:4},{value:"JSON",id:"json",level:3},{value:"HTTP",id:"http",level:3},{value:"HTTP vs HTTPS",id:"http-vs-https",level:3},{value:"RESTful API",id:"restful-api",level:3},{value:"Fetch API",id:"fetch-api",level:3},{value:"JWT",id:"jwt",level:3},{value:"\u067e\u0631\u0648\u0698\u0647",id:"\u067e\u0631\u0648\u0698\u0647",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,r.kt)("p",null,"\u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u06cc\u06a9\u06cc \u0627\u0632 \u0645\u0647\u0645\u200c\u062a\u0631\u06cc\u0646 \u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0633\u062a\u0646\u062f\n\u06a9\u0647 \u0628\u0627\u0639\u062b \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0627\u0632 \u062d\u0627\u0644\u062a \u06cc\u06a9\u0646\u0648\u0627\u062e\u062a \u062e\u0627\u0631\u062c \u0634\u0648\u062f \u0648 \u0628\u062a\u0648\u0627\u0646 \u0622\u0646 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0647\u0631 \u06a9\u0627\u0631\u0628\u0631 \u0634\u062e\u0635\u06cc\u200c\u0633\u0627\u0632\u06cc \u06a9\u0631\u062f\u061b\n\u0628\u0646\u0627\u0628\u0631\u0627\u06cc\u0646 \u0628\u0627\u06cc\u062f \u0628\u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u06cc\u0646 \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u062f\u0631 \u062c\u0627\u06cc\u06cc \u0630\u062e\u06cc\u0631\u0647\u200c\u0633\u0627\u0632\u06cc \u06a9\u0646\u06cc\u0645 \u0648 \u0628\u0639\u062f\u0627\u064b \u062f\u0631 \u0635\u0648\u0631\u062a \u0646\u06cc\u0627\u0632 \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u06a9\u0646\u06cc\u0645."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0686\u06af\u0648\u0646\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0631\u0627 \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0631\u062f\u061f"),(0,r.kt)("li",{parentName:"ul"},"\u0686\u06af\u0648\u0646\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0633\u0631\u0648\u0631 \u0641\u0631\u0633\u062a\u0627\u062f \u06cc\u0627 \u0627\u0632 \u0622\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0631\u062f\u061f"),(0,r.kt)("li",{parentName:"ul"},"\u0686\u06af\u0648\u0646\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u06a9\u0627\u0631\u0628\u0631 \u0631\u0627 \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u06a9\u0631\u062f\u061f")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc"},"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc"),(0,r.kt)("h3",{id:"storages"},"Storages"),(0,r.kt)("h4",{id:"documentcookie"},"Document.cookie"),(0,r.kt)("p",null,"\u06a9\u0648\u06a9\u06cc\u200c\u0647\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u0647\u0645 \u062f\u0631 \u0633\u0645\u062a \u0633\u0631\u0648\u0631 \u0648 \u0647\u0645 \u062f\u0631 \u0633\u0645\u062a \u06a9\u0644\u0627\u06cc\u0646\u062a \u0630\u062e\u06cc\u0631\u0647\u200c\u0633\u0627\u0632\u06cc \u0634\u0648\u0646\u062f\u061b\n\u0628\u0631\u0627\u06cc \u062a\u063a\u06cc\u06cc\u0631 \u0645\u0642\u062f\u0627\u0631\u06cc \u06a9\u0647 \u062f\u0631 \u06a9\u0648\u06a9\u06cc \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f\u0647\u060c \u06a9\u0627\u0641\u06cc \u0627\u0633\u062a ",(0,r.kt)("inlineCode",{parentName:"p"},"document.cookie")," \u0631\u0627 \u0645\u0642\u062f\u0627\u0631\u200c\u062f\u0647\u06cc \u06a9\u0646\u06cc\u0645.\n\u0645\u0642\u0627\u062f\u06cc\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"document.cookie")," \u062a\u0646\u0647\u0627 \u0645\u062e\u062a\u0635 \u0628\u0647 \u0647\u0645\u0627\u0646 \u0635\u0641\u062d\u0647 \u0647\u0633\u062a\u0646\u062f \u0648 \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0628\u0647 \u0635\u0641\u062d\u0647\u200c\u06cc \u062f\u06cc\u06af\u0631\u06cc \u0627\u0632 \u0648\u0628 \u0628\u0631\u0648\u06cc\u0645\u060c\n\u062f\u06cc\u06af\u0631 \u0646\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u0645\u0648\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0642\u0631\u0627\u0631 \u0628\u06af\u06cc\u0631\u0646\u062f."),(0,r.kt)("p",null,"\u06a9\u0648\u06a9\u06cc\u200c\u0647\u0627 \u0631\u0627 \u062a\u0646\u0647\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u0645 \u0628\u0647\u200c\u0635\u0648\u0631\u062a ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," \u0630\u062e\u06cc\u0631\u0647\u200c\u0633\u0627\u0632\u06cc \u06a9\u0646\u06cc\u0645\u061b\n\u0647\u0645\u0686\u0646\u06cc\u0646 \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0634\u06a9\u0644\n",(0,r.kt)("inlineCode",{parentName:"p"},"key=value"),"\n\u0645\u06cc\u200c\u0646\u0648\u06cc\u0633\u06cc\u0645 \u0648 \u0628\u06cc\u0646\u0650 \u0647\u0631 \u0632\u0648\u062c\u060c \u0627\u0632 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631\n",(0,r.kt)("inlineCode",{parentName:"p"},";"),"\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"document.cookies = 'username=codestar; password=1234; expires=Wed, 25 Aug 2021 21:08:53 GMT; path=/link.html';\n")),(0,r.kt)("p",null,"\u0645\u0642\u062f\u0627\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"expires")," \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f \u06a9\u0647 \u06a9\u0648\u06a9\u06cc\u200c\u0647\u0627 \u062f\u0631 \u0686\u0647 \u0632\u0645\u0627\u0646\u06cc \u0645\u0646\u0642\u0636\u06cc \u0634\u0648\u0646\u062f.\n\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u0645 \u0645\u0642\u062f\u0627\u0631 \u06a9\u0648\u06a9\u06cc\u200c\u0647\u0627\u06cc \u06cc\u06a9 \u0635\u0641\u062d\u0647 \u062f\u06cc\u06af\u0631 \u0631\u0627 \u0639\u0648\u0636 \u06a9\u0646\u06cc\u0645\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u0632 ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/"},"MDN - Document.cookie"))),(0,r.kt)("h4",{id:"windowsessionstorage"},"Window.sessionStorage"),(0,r.kt)("p",null,"\u0645\u0634\u06a9\u0644\u06cc \u06a9\u0647 \u062f\u0631 \u06a9\u0648\u06a9\u06cc\u200c\u0647\u0627 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u060c \u0645\u0642\u062f\u0627\u0631 \u062d\u0627\u0641\u0638\u0647\u200c\u06cc \u06a9\u0645 \u0622\u0646\u200c\u0647\u0627 (\u062d\u062f\u0627\u06a9\u062b\u0631 4 \u06a9\u06cc\u0644\u0648\u0628\u0627\u06cc\u062a) \u0628\u0648\u062f\u061b\n\u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 ",(0,r.kt)("inlineCode",{parentName:"p"},"sessionStorage")," \u0648 ",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage")," \u0645\u0639\u0631\u0641\u06cc \u0634\u062f\u0646\u062f.\n\u0628\u0631\u200c\u062e\u0644\u0627\u0641 \u06a9\u0648\u06a9\u06cc\u200c\u0647\u0627\u060c \u062f\u0631 \u0627\u06cc\u0646 \u062d\u0627\u0641\u0638\u0647\u200c\u0647\u0627\u060c \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0628\u0647 \u0634\u06a9\u0644 Map \u0630\u062e\u06cc\u0631\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f."),(0,r.kt)("p",null,"sessionStorage\n\u0646\u0648\u0639 \u062f\u06cc\u06af\u0631\u06cc \u0627\u0632 \u062d\u0627\u0641\u0638\u0647 \u062f\u0631 \u0648\u0628 \u0627\u0633\u062a.\n\u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u067e\u0646\u062c\u0631\u0647/\u0632\u0628\u0627\u0646\u0647 \u0628\u0633\u062a\u0647 \u0634\u0648\u062f\u060c \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u06cc \u06a9\u0647 \u062a\u0648\u0633\u0637 sessionStorage \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f\u0647\u200c\u0627\u0646\u062f \u0647\u0645 \u067e\u0627\u06a9 \u0645\u06cc \u0634\u0648\u0646\u062f.\n\u0647\u0645\u0686\u0646\u06cc\u0646 \u062a\u0648\u062c\u0647 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f \u06a9\u0647 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0632\u0628\u0627\u0646\u0647\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u062f\u0631 sessionStorage \u0642\u0627\u0628\u0644 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0646\u06cc\u0633\u062a\u0646\u062f."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9 \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"MDN - Window.sessionStorage"))),(0,r.kt)("h4",{id:"windowlocalstorage"},"Window.localStorage"),(0,r.kt)("p",null,"\u0627\u06cc\u0646 \u062d\u0627\u0641\u0638\u0647 \u062f\u0631 \u0628\u0633\u06cc\u0627\u0631\u06cc \u0627\u0632 \u062c\u0647\u0627\u062a \u0634\u0628\u06cc\u0647 ",(0,r.kt)("inlineCode",{parentName:"p"},"sessionStorage")," \u0627\u0633\u062a \u0628\u0627 \u0627\u06cc\u0646 \u062a\u0641\u0627\u0648\u062a \u06a9\u0647 \u0628\u0631\u200c\u062e\u0644\u0627\u0641 ",(0,r.kt)("inlineCode",{parentName:"p"},"sessionStorage"),"\u060c \u0628\u0627 \u0628\u0633\u062a\u0646 \u067e\u0646\u062c\u0631\u0647/\u0632\u0628\u0627\u0646\u0647\u060c \u0627\u0632 \u0628\u06cc\u0646 \u0646\u0645\u06cc\u200c\u0631\u0648\u062f \u0648 \u062a\u0627\u0631\u06cc\u062e \u0627\u0646\u0642\u0636\u0627\u06cc\u06cc \u0646\u062f\u0627\u0631\u062f."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"MDN - Window.localStorage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API"},"MDN - Using the Web Storage API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/swlh/cookies-vs-localstorage-whats-the-difference-d99f0eb09b44"},"Medium - Cookies vs. LocalStorage: What's the difference?"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("p",null,"JSON\n\u06cc\u06a9 \u0641\u0631\u0645\u062a \u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u0642\u0627\u0644 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0627\u0633\u062a.\n\u0645\u0639\u0645\u0648\u0644\u0627\u064b \u0627\u0632 JSON \u0628\u0631\u0627\u06cc \u062a\u0628\u0627\u062f\u0644 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0646 \u0633\u0631\u0648\u0631 \u0648 \u06a9\u0644\u0627\u06cc\u0646\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,r.kt)("p",null,"\u062f\u0631 JavaScript \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u0645 \u0628\u0631\u0627\u06cc \u062a\u0628\u062f\u06cc\u0644 \u06cc\u06a9 \u0634\u06cc\u0621 \u0628\u0647 \u0641\u0631\u0645\u062a JSON \u0627\u0632 \u062a\u0627\u0628\u0639\n",(0,r.kt)("inlineCode",{parentName:"p"},"()JSON.stringify"),"\n\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\u061b\n\u0647\u0645\u0686\u0646\u06cc\u0646 \u0639\u06a9\u0633 \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0631\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u0645 \u0628\u0627 \u062a\u0627\u0628\u0639\n",(0,r.kt)("inlineCode",{parentName:"p"},"()JSON.parse"),"\n\u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u0645."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3schools.com/js/js_json_syntax.asp"},"W3Schools - JSON Syntax")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3schools.com/js/js_json_parse.asp"},"W3Schools - JSON.parse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3schools.com/js/js_json_stringify.asp"},"W3Schools - JSON.stringify")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=iiADhChRriM"},"Web Dev Simplified - JSON in 10 Minutes"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"http"},"HTTP"),(0,r.kt)("p",null,"\u067e\u0631\u0648\u062a\u06a9\u0644 HTTP \u0645\u062e\u0641\u0641 \u0639\u0628\u0627\u0631\u062a\n",(0,r.kt)("em",{parentName:"p"},"Hyper Text Transfer Protocol"),"\n\u0627\u0633\u062a \u0648 \u0642\u0648\u0627\u0646\u06cc\u0646\u06cc \u0628\u0631\u0627\u06cc \u0627\u0631\u062a\u0628\u0627\u0637 \u0645\u06cc\u0627\u0646 \u0633\u0631\u0648\u0631 \u0648 \u06a9\u0644\u0627\u06cc\u0646\u062a \u062a\u0639\u06cc\u06cc\u0646 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"},"MDN - An overview of HTTP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/"},"freeCodeCamp - An introduction to HTTP: everything you need to know"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"http-vs-https"},"HTTP vs HTTPS"),(0,r.kt)("p",null,"HTTPS\n\u0646\u0633\u062e\u0647\u200c\u0627\u06cc \u0627\u0632 HTTP \u0627\u0633\u062a \u06a9\u0647 \u0628\u0633\u06cc\u0627\u0631\u06cc \u0627\u0632 \u0645\u0648\u0627\u0631\u062f \u0627\u0645\u0646\u06cc\u062a\u06cc \u062f\u0631 \u0622\u0646 \u0631\u0639\u0627\u06cc\u062a \u0634\u062f\u0647 \u0627\u0633\u062a.\n\u0645\u0647\u0645 \u062a\u0631\u06cc\u0646 \u062a\u0641\u0627\u0648\u062a HTTP \u0648 HTTPS \u062f\u0631 \u06af\u0648\u0627\u0647\u06cc\u200c\u0646\u0627\u0645\u0647 SSL \u0627\u0633\u062a.\n\u0627\u0632 \u0645\u0632\u0627\u06cc\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u067e\u0631\u0648\u062a\u06a9\u0644 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0628\u0647 \u0627\u0641\u0632\u0627\u06cc\u0634 \u0627\u0645\u062a\u06cc\u0627\u0632 \u0633\u0627\u06cc\u062a \u0634\u0645\u0627 \u062f\u0631 \u0627\u0644\u06af\u0648\u0631\u06cc\u062a\u0645\u200c\u0647\u0627\u06cc \u0631\u062a\u0628\u0647\u200c\u0628\u0646\u062f\u06cc \u0645\u0648\u062a\u0648\u0631\u200c\u200c\u0647\u0627\u06cc \u062c\u0633\u062a\u200c\u0648\u062c\u0648\n\u0648 \u062c\u0644\u0628 \u0627\u0639\u062a\u0645\u0627\u062f \u0628\u0627\u0632\u062f\u06cc\u062f\u06a9\u0646\u0646\u062f\u06af\u0627\u0646 \u0627\u0634\u0627\u0631\u0647 \u06a9\u0631\u062f."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@pallavimodi/http-https-what-is-the-difference-3a97fe2f7fd8#:~:text=As%20we%20learnt%20earlier%2C%20S,are%20encrypted%20or%20%E2%80%9CSecure%E2%80%9D."},"Medium - HTTP & HTTPS : What is the difference?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.irandnn.ir/mag/http-vs-https/"},"\u062a\u0641\u0627\u0648\u062a HTTP \u0648 HTTPS \u0686\u06cc\u0633\u062a\u061f"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"restful-api"},"RESTful API"),(0,r.kt)("p",null,"Application Programming Interface\n\u0645\u062c\u0645\u0648\u0639\u0647\u200c\u0627\u06cc \u0627\u0632 \u0642\u0648\u0627\u0639\u062f \u0648 \u0645\u06a9\u0627\u0646\u06cc\u0633\u0645\u200c\u0647\u0627\u06cc\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0622\u0646\u060c \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0647\u0627 \u0648 \u06cc\u0627 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u06cc\u06a9 \u0628\u0631\u0646\u0627\u0645\u0647 \u0628\u0627 \u0647\u0645\u062f\u06cc\u06af\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0631\u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f.\n\u0645\u0646\u0638\u0648\u0631 \u0627\u0632 \u0631\u0627\u0628\u0637 \u0686\u06cc\u0632\u06cc\u200c\u0633\u062a \u06a9\u0647 \u062f\u0648 \u0634\u06cc\u0621 \u06cc\u0627 \u062f\u0648 \u0645\u0648\u062c\u0648\u062f\u06cc\u062a \u0645\u062e\u062a\u0644\u0641 \u0631\u0627 \u0628\u0647 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0631\u0628\u0637 \u0645\u06cc\u200c\u062f\u0647\u062f.\nAPI\n\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0628\u0631\u0646\u0627\u0645\u06c0 \u0634\u0645\u0627 \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u0641\u0631\u0645\u062a \u0645\u0646\u0627\u0633\u0628\u060c\n\u0645\u062b\u0644\u0627\u064b JSON \u06cc\u0627 XML\u060c\n\u0628\u0647 \u0645\u0642\u0635\u062f \u0628\u0641\u0631\u0633\u062a\u062f \u0648 \u06cc\u0627 \u0622\u0646\u200c\u200c\u0647\u0627 \u0631\u0627 \u0627\u0632 \u0622\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u062f\u061b"),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sitepoint.com/rest-api/"},"What Is a REST API?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://roocket.ir/articles/a-beginners-tutorial-for-understanding-restful-API"},"RESTful API \u0628\u0647 \u0632\u0628\u0627\u0646 \u0633\u0627\u062f\u0647 \u0686\u06cc\u0633\u062a\u061f"))),(0,r.kt)("h3",{id:"fetch-api"},"Fetch API"),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0647 \u0633\u0631\u0648\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 Fetch API \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const getData = async () => {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users');\n\n    if (response.ok) return await response.json();\n\n    console.log('Request Failed!', response);\n    return;\n};\n")),(0,r.kt)("p",null,"\u062a\u0627\u0628\u0639 ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," \u062f\u0648 \u0648\u0631\u0648\u062f\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f \u06a9\u0647 \u0628\u0647 \u062a\u0631\u062a\u06cc\u0628 ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," \u0648 ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," \u0647\u0633\u062a\u0646\u062f\n\u0648 \u06cc\u06a9 Promise \u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646 \u062e\u0631\u0648\u062c\u06cc \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0627\u0646\u062f.\n\u067e\u0627\u0631\u0627\u0645\u062a\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," \u0627\u062e\u062a\u06cc\u0627\u0631\u06cc \u0627\u0633\u062a \u0648 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u0645 \u0627\u0632 \u0622\u0646 \u0628\u0631\u0627\u06cc \u062a\u0646\u0638\u06cc\u0645 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062e\u0627\u0635\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645\n\u06a9\u0647 \u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646 \u0645\u062b\u0627\u0644 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0628\u0647 ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," \u0648 ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," \u0627\u0634\u0627\u0631\u0647 \u06a9\u0631\u062f."),(0,r.kt)("p",null,"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0646\u062a\u06cc\u062c\u0647\u200c\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0631\u062f.\n\u0627\u06af\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"response.ok")," \u0645\u0642\u062f\u0627\u0631 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f \u06cc\u0639\u0646\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647\u061b\n\u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 ",(0,r.kt)("inlineCode",{parentName:"p"},"response.status")," \u0628\u0631\u0627\u06cc \u0641\u0647\u0645\u06cc\u062f\u0646 \u062c\u0632\u0626\u06cc\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u060c \u062a\u0648\u0627\u0628\u0639\u06cc \u0628\u0631 \u0631\u0648\u06cc \u0634\u06cc\u0621 ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f\u061b\n\u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646 \u0645\u062b\u0627\u0644 \u062f\u0631 \u06a9\u062f \u0628\u0627\u0644\u0627\u060c ",(0,r.kt)("inlineCode",{parentName:"p"},"()response.json")," \u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc JSON \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://javascript.info/fetch"},"JavaScript.info - Fetch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=PoRJizFvM7s"},"Traversy Media - Async JS Crash Course - Callbacks, Promises, Async Await")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.webfx.com/web-development/glossary/http-status-codes/"},"HTTP Status Codes Glossary"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"jwt"},"JWT"),(0,r.kt)("p",null,"\u0645\u0639\u0645\u0648\u0644\u0627\u064b \u062a\u0639\u062f\u0627\u062f\u06cc \u0627\u0632 API\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u0645\u0648\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06af\u06cc\u0631\u0646\u062f\u060c \u0639\u0645\u0648\u0645\u06cc \u0627\u0633\u062a \u0648 \u0647\u0631 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0627\u062c\u0627\u0632\u06c0 \u0641\u0631\u0633\u062a\u0627\u062f\u0646 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0631\u0627\u06cc \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u062f\u0627\u0631\u062f\n\u0648 \u062a\u0639\u062f\u0627\u062f\u06cc \u0646\u06cc\u0632 \u062e\u0635\u0648\u0635\u06cc \u06cc\u0627 \u0645\u062d\u0627\u0641\u0637\u062a\u200c\u0634\u062f\u0647 \u0647\u0633\u062a\u0646\u062f\u060c \u06cc\u0639\u0646\u06cc \u0641\u0642\u0637 \u06a9\u0627\u0631\u0628\u0631\u200c\u0647\u0627\u06cc \u0645\u0634\u062e\u0635 \u06a9\u0647 \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0622\u0646\u200c\u0647\u0627 \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u062a\u0648\u0627\u0646\u0627\u06cc\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u062f\u0627\u0631\u0646\u062f."),(0,r.kt)("p",null,"JWT\n\u06cc\u0627\nJSON Web Token\n\u06cc\u06a9\u06cc \u0627\u0632 \u062a\u06a9\u0646\u0648\u0644\u0648\u0698\u06cc\u200c\u0647\u0627\u06cc \u0645\u0639\u0631\u0648\u0641 \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0627\u0633\u062a.\n\u062f\u0631 \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0648\u0642\u062a\u06cc \u06a9\u0627\u0631\u0628\u0631 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0648\u0631\u0648\u062f \u06cc\u0627 \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0631\u0627 \u0645\u06cc\u200c\u0641\u0631\u0633\u062a\u062f\u060c \u062f\u0631 \u0635\u0648\u0631\u062a \u0645\u0639\u062a\u0628\u0631 \u0628\u0648\u062f\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u060c \u062f\u0631 \u067e\u0627\u0633\u062e \u06cc\u06a9 JWT \u062a\u0648\u0644\u06cc\u062f \u0648 \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.\n\u0627\u06cc\u0646 \u062a\u0648\u06a9\u0646 \u0628\u0627\u06cc\u062f \u062f\u0631 \u0633\u0645\u062a \u06a9\u0644\u0627\u06cc\u0646\u062a \u0648 \u062f\u0631 \u062d\u0627\u0641\u0638\u06c0 \u0645\u062d\u0644\u06cc \u0630\u062e\u06cc\u0631\u0647 \u0634\u0648\u062f \u0648 \u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u06a9\u0627\u0631\u0628\u0631 \u0642\u0635\u062f \u062f\u0627\u0634\u062a \u0628\u0647 \u06cc\u06a9 \u0635\u0641\u062d\u0647 \u06cc\u0627 \u0645\u062d\u062a\u0648\u0627\u06cc \u062e\u0635\u0648\u0635\u06cc \u062f\u0633\u062a\u0631\u0633\u06cc \u067e\u06cc\u062f\u0627 \u06a9\u0646\u062f\u060c\n\u0628\u0627\u06cc\u062f \u062a\u0648\u06a9\u0646 \u062e\u0648\u062f \u0631\u0627 \u0628\u0647\u200c\u0647\u0645\u0631\u0627\u0647 \u0622\u0646 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0647 \u0633\u0645\u062a \u0633\u0631\u0648\u0631 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u062f."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jwt.io/introduction"},"What is JWT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://virgool.io/@erfun/%D9%87%D9%88%DB%8C%D8%AA-%D8%B3%D9%86%D8%AC%DB%8C-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%A7%D9%86-jwt-jws-jwe-pedif3sejkol"},"\u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a (JWT, JWS, JWE)"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u067e\u0631\u0648\u0698\u0647"},"\u067e\u0631\u0648\u0698\u0647"),(0,r.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0634\u0645\u0627 \u0628\u0627\u06cc\u062f \u0635\u0641\u062d\u0627\u062a \u0648\u0631\u0648\u062f \u0648 \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0631\u0627 \u0628\u0647 \u067e\u0631\u0648\u0698\u0647 \u062e\u0648\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f.\n\u0627\u06af\u0631 \u0647\u0631 \u06cc\u06a9 \u0627\u0632 \u0627\u06cc\u0646 \u0639\u0645\u0644\u06cc\u0627\u062a \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u0648\u062f\u060c \u06a9\u0627\u0631\u0628\u0631 \u0628\u0627\u06cc\u062f \u0628\u0647 \u0635\u0641\u062d\u06c0 \u0627\u0635\u0644\u06cc \u0633\u0627\u06cc\u062a \u0645\u0646\u062a\u0642\u0644 \u0634\u0648\u062f.\n\u0647\u0645\u0686\u0646\u06cc\u0646 \u0627\u0632 Guard \u0628\u0631\u0627\u06cc \u0645\u062d\u0627\u0641\u0638\u062a \u0627\u0632 \u0635\u0641\u062d\u0627\u062a \u062e\u0635\u0648\u0635\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.\n\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0627\u062d\u062a\u06cc\u0627\u062c \u0628\u0647 \u06cc\u06a9 \u0635\u0641\u062d\u0647 \u0645\u0627\u0646\u0646\u062f Profile \u062f\u0627\u0631\u06cc\u062f \u06a9\u0647 \u062f\u0631 \u062d\u0627\u0644 \u062d\u0627\u0636\u0631 \u0635\u0631\u0641\u0627\u064b \u06a9\u0627\u0641\u06cc \u0627\u0633\u062a \u062d\u0627\u0648\u06cc \u06cc\u06a9 \u0645\u062a\u0646 \u0633\u0627\u062f\u0647 \u0628\u0627\u0634\u062f."))}c.isMDXComponent=!0}}]);