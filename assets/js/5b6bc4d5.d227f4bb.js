"use strict";(self.webpackChunkcodestar_documents=self.webpackChunkcodestar_documents||[]).push([[4007],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},l=Object.keys(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),u=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||l;return n?i.createElement(m,a(a({ref:e},c),{},{components:n})):i.createElement(m,a({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},411:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const l={title:"Unit Testing",description:"No! Half of the taste is in the smell! You're sucking up all the taste units!"},a=void 0,o={unversionedId:"frontend/unit-testing",id:"frontend/unit-testing",title:"Unit Testing",description:"No! Half of the taste is in the smell! You're sucking up all the taste units!",source:"@site/docs/frontend/10-unit-testing.md",sourceDirName:"frontend",slug:"/frontend/unit-testing",permalink:"/Documents/docs/frontend/unit-testing",draft:!1,editUrl:"https://github.com/Mohaymen-Academy/Documents/tree/main/docs/frontend/10-unit-testing.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Unit Testing",description:"No! Half of the taste is in the smell! You're sucking up all the taste units!"},sidebar:"tutorialSidebar",previous:{title:"CI/CD",permalink:"/Documents/docs/frontend/ci-cd"},next:{title:"Containerized Applications",permalink:"/Documents/docs/frontend/containerized-application"}},s={},u=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc",id:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc",level:2},{value:"\u0631\u0627\u0647\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u062a\u0633\u062a\u200c\u06a9\u0631\u062f\u0646 \u0633\u0627\u0645\u0627\u0646\u0647",id:"\u0631\u0627\u0647\u0647\u0627\u06cc-\u0645\u062e\u062a\u0644\u0641-\u062a\u0633\u062a\u06a9\u0631\u062f\u0646-\u0633\u0627\u0645\u0627\u0646\u0647",level:3},{value:"Manual Testing",id:"manual-testing",level:4},{value:"End-to-End Testing",id:"end-to-end-testing",level:4},{value:"Integration Testing",id:"integration-testing",level:4},{value:"Unit Testing",id:"unit-testing",level:4},{value:"Unit Testing in React",id:"unit-testing-in-react",level:3},{value:"\u067e\u0631\u0648\u0698\u0647",id:"\u067e\u0631\u0648\u0698\u0647",level:2}],c={toc:u};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,r.kt)("p",null,"\u067e\u0631\u0648\u0698\u0647\u200c\u0647\u0627\u06cc \u0628\u0632\u0631\u06af \u0627\u0632 \u0642\u0633\u0645\u062a\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641\u06cc \u062a\u0634\u06a9\u06cc\u0644 \u0634\u062f\u0647\u200c\u0627\u0646\u062f \u06a9\u0647 \u06af\u0627\u0647\u06cc \u0627\u0648\u0642\u0627\u062a \u0628\u0647 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0648\u0627\u0628\u0633\u062a\u0647\u200c\u0627\u0646\u062f\n\u0648 \u0628\u0631 \u062d\u0633\u0628 \u0646\u06cc\u0627\u0632 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0628\u062e\u0648\u0627\u0647\u06cc\u062f \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u0628\u062e\u0634\u200c\u0647\u0627 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u062f\u061b\n\u0686\u06af\u0648\u0646\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0635\u062d\u062a \u06a9\u0627\u0631\u06a9\u0631\u062f \u0642\u0633\u0645\u062a\u200c\u0647\u0627\u06cc \u0648\u0627\u0628\u0633\u062a\u0647 \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u062d\u0627\u0635\u0644 \u06a9\u0646\u06cc\u062f\u061f\n\u0628\u0631\u0627\u06cc \u067e\u0627\u0633\u062e \u0628\u0647 \u0627\u06cc\u0646 \u0633\u0648\u0627\u0644\u060c \u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u0628\u0647 \u0628\u0631\u0631\u0633\u06cc \u0631\u0627\u0647\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u062a\u0633\u062a\u200c\u06a9\u0631\u062f\u0646 \u0633\u0627\u0645\u0627\u0646\u0647 \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u06cc\u0645."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0686\u0647 \u0631\u0627\u0647\u200c\u0647\u0627\u06cc\u06cc \u0628\u0631\u0627\u06cc \u062a\u0633\u062a\u200c\u06a9\u0631\u062f\u0646 \u0633\u0627\u0645\u0627\u0646\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f\u061f"),(0,r.kt)("li",{parentName:"ul"},"\u0645\u0632\u0627\u06cc\u0627 \u0648 \u0645\u0639\u0627\u06cc\u0628 \u0627\u06cc\u0646 \u0631\u0648\u0634\u200c\u0647\u0627 \u0646\u0633\u0628\u062a \u0628\u0647 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0686\u06cc\u0633\u062a\u061f"),(0,r.kt)("li",{parentName:"ul"},"\u062f\u0631 React \u0686\u06af\u0648\u0646\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u062a\u0633\u062a \u0646\u0648\u0634\u062a\u061f"),(0,r.kt)("li",{parentName:"ul"},"\u0686\u06af\u0648\u0646\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0641\u0647\u0645\u06cc\u062f \u0686\u0646\u062f \u062f\u0631\u0635\u062f \u0627\u0632 \u06a9\u062f\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u062a\u0633\u062a \u0634\u062f\u0647\u200c\u0627\u0646\u062f\u061f")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc"},"\u06cc\u0627\u062f\u06af\u06cc\u0631\u06cc"),(0,r.kt)("h3",{id:"\u0631\u0627\u0647\u0647\u0627\u06cc-\u0645\u062e\u062a\u0644\u0641-\u062a\u0633\u062a\u06a9\u0631\u062f\u0646-\u0633\u0627\u0645\u0627\u0646\u0647"},"\u0631\u0627\u0647\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u062a\u0633\u062a\u200c\u06a9\u0631\u062f\u0646 \u0633\u0627\u0645\u0627\u0646\u0647"),(0,r.kt)("h4",{id:"manual-testing"},"Manual Testing"),(0,r.kt)("p",null,"\u06cc\u06a9\u06cc \u0627\u0632 \u0631\u0627\u0647\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0627\u062d\u062a\u0645\u0627\u0644\u0627\u064b \u062a\u0627 \u06a9\u0646\u0648\u0646 \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0631\u062f\u06cc\u062f\u060c \u062a\u0633\u062a\u200c\u06a9\u0631\u062f\u0646 \u062f\u0633\u062a\u06cc \u0633\u0627\u0645\u0627\u0646\u0647 \u0627\u0633\u062a.\n\u0647\u0631\u0686\u0646\u062f \u06a9\u0647 \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0628\u0633\u06cc\u0627\u0631 \u0633\u0627\u062f\u0647 \u0648 \u0642\u0627\u0628\u0644\u200c\u0641\u0647\u0645 \u0627\u0633\u062a \u0627\u0645\u0627 \u0645\u0639\u0627\u06cc\u0628\u06cc \u062f\u0627\u0631\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0628\u0633\u06cc\u0627\u0631 \u0648\u0642\u062a\u200c\u06af\u06cc\u0631 \u0627\u0633\u062a."),(0,r.kt)("li",{parentName:"ul"},"\u067e\u0633 \u0627\u0632 \u0645\u062f\u062a\u06cc \u0628\u0647 \u06a9\u0627\u0631\u06cc \u062a\u06a9\u0631\u0627\u0631\u06cc \u0648 \u062e\u0633\u062a\u0647\u200c\u06a9\u0646\u0646\u062f\u0647 \u062a\u0628\u062f\u06cc\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,r.kt)("li",{parentName:"ul"},"\u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0627\u0646\u0633\u0627\u0646 \u0627\u0634\u062a\u0628\u0627\u0647 \u06a9\u0646\u062f \u0648 \u0645\u062a\u0648\u062c\u0647 \u0639\u0645\u0644\u06a9\u0631\u062f \u0627\u0634\u062a\u0628\u0627\u0647 \u0633\u0627\u0645\u0627\u0646\u0647 \u0646\u0634\u0648\u062f."),(0,r.kt)("li",{parentName:"ul"},"\u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0627\u0646\u0633\u0627\u0646 \u0641\u0631\u0627\u0645\u0648\u0634 \u06a9\u0646\u062f \u0648 \u0628\u062e\u0634\u06cc \u0627\u0632 \u0633\u0627\u0645\u0627\u0646\u0647 \u0631\u0627 \u062a\u0633\u062a \u0646\u06a9\u0646\u062f.")),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062d\u0644 \u0645\u0634\u06a9\u0644\u0627\u062a \u0628\u0627\u0644\u0627\u060c \u0627\u0632 \u0631\u0648\u0634\u200c\u0647\u0627\u06cc \u062a\u0633\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u06a9\u0647 \u062f\u0631 \u0627\u062f\u0627\u0645\u0647 \u0628\u0647 \u062a\u0648\u0636\u06cc\u062d \u0622\u0646\u200c\u0647\u0627 \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u06cc\u0645."),(0,r.kt)("h4",{id:"end-to-end-testing"},"End-to-End Testing"),(0,r.kt)("p",null,"\u062f\u0631 \u0631\u0648\u0634 e2e \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0627\u06cc \u0645\u06cc\u200c\u0646\u0648\u06cc\u0633\u06cc\u0645 \u06a9\u0647 \u062a\u0645\u0627\u0645 \u0639\u0645\u0644\u06cc\u0627\u062a\u06cc \u06a9\u0647 \u062a\u0648\u0633\u0637 \u06a9\u0627\u0631\u0628\u0631 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f \u0631\u0627 \u0628\u0647 \u062a\u0631\u062a\u06cc\u0628 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u062f.\n\u0627\u06cc\u0646 \u0628\u0631\u0646\u0627\u0645\u0647 \u062e\u0648\u062f \u0631\u0627 \u062c\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u062c\u0627 \u0645\u06cc\u200c\u0632\u0646\u062f \u0648 \u06a9\u0648\u0686\u06a9\u200c\u062a\u0631\u06cc\u0646 \u0627\u0639\u0645\u0627\u0644 \u0627\u0646\u0633\u0627\u0646 \u0631\u0627 \u0646\u06cc\u0632 \u0637\u0628\u0642 \u06cc\u06a9 \u0627\u0644\u06af\u0648\u0631\u06cc\u062a\u0645\u060c \u062e\u0637 \u0628\u0647 \u062e\u0637 \u0627\u062c\u0631\u0627 \u0645\u06cc\u200c\u06a9\u0646\u062f.\n\u0627\u06cc\u0646 \u0631\u0648\u0634 \u0646\u0632\u062f\u06cc\u06a9\u200c\u062a\u0631\u06cc\u0646 \u0631\u0648\u0634 \u0628\u0647 \u062a\u0633\u062a \u062f\u0633\u062a\u06cc \u0627\u0633\u062a \u0627\u0645\u0627 \u0645\u062a\u0627\u0633\u0641\u0627\u0646\u0647 \u0627\u062d\u062a\u06cc\u0627\u062c \u0628\u0647 \u0645\u0646\u0627\u0628\u0639 \u0632\u06cc\u0627\u062f\u06cc \u0627\u0632 \u062c\u0645\u0644\u0647 \u0632\u0645\u0627\u0646 \u062f\u0627\u0631\u062f."),(0,r.kt)("h4",{id:"integration-testing"},"Integration Testing"),(0,r.kt)("p",null,"\u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0628\u0631\u0646\u0627\u0645\u06c0 \u0634\u0645\u0627 \u0628\u0627 \u0686\u0646\u062f \u0628\u0631\u0646\u0627\u0645\u06c0 \u062f\u06cc\u06af\u0631 \u062f\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627\u0634\u062f.\n\u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646 \u0645\u062b\u0627\u0644 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0634\u0645\u0627 \u0642\u0633\u0645\u062a \u0641\u0631\u0627\u0646\u062a\u200c\u0627\u0646\u062f \u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 \u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u06cc\u062f \u0648 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0646\u0648\u06cc\u0633 \u062f\u06cc\u06af\u0631\u06cc \u0642\u0633\u0645\u062a \u0628\u06a9\u200c\u0627\u0646\u062f \u0622\u0646 \u0631\u0627 \u0646\u0648\u0634\u062a\u0647 \u0628\u0627\u0634\u062f.\n\u0628\u0631\u0627\u06cc \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u0627\u0632 \u06cc\u06a9\u067e\u0627\u0631\u0686\u06af\u06cc \u0642\u0633\u0645\u062a\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0648 \u062a\u0639\u0627\u0645\u0644 \u0645\u0646\u0627\u0633\u0628 \u0622\u0646\u200c\u0647\u0627 \u0628\u0627 \u06cc\u06a9\u062f\u06cc\u06af\u0631 \u0627\u0632 Integration Testing \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645."),(0,r.kt)("h4",{id:"unit-testing"},"Unit Testing"),(0,r.kt)("p",null,"\u0647\u0645\u0627\u0646\u200c\u0637\u0648\u0631 \u06a9\u0647 \u0627\u0632 \u0627\u0633\u0645 \u0622\u0646 \u0645\u0634\u062e\u0635 \u0627\u0633\u062a\u060c \u062f\u0631 Unit Testing \u0628\u0647 \u062a\u0633\u062a\u200c\u06a9\u0631\u062f\u0646 \u06a9\u0648\u0686\u06a9\u200c\u062a\u0631\u06cc\u0646 \u0627\u062c\u0632\u0627\u0621 \u06cc\u06a9 \u0628\u0631\u0646\u0627\u0645\u0647 \u06cc\u0639\u0646\u06cc \u062a\u0648\u0627\u0628\u0639\u060c \u06a9\u0644\u0627\u0633\u200c\u0647\u0627 \u0648 \u0645\u062a\u063a\u06cc\u0631\u0647\u0627 \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u06cc\u0645.\n\u062f\u0631 \u0627\u06cc\u0646 \u0631\u0648\u0634 \u0645\u0639\u0645\u0648\u0644\u0627\u064b \u0628\u0647 \u0638\u0627\u0647\u0631 \u0633\u0627\u06cc\u062a \u06cc\u0627 \u062a\u062c\u0631\u0628\u06c0 \u06a9\u0627\u0631\u0628\u0631 \u062a\u0648\u062c\u0647 \u0646\u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u0648 \u0635\u0631\u0641\u0627\u064b \u06a9\u0627\u0631\u06a9\u0631\u062f \u0635\u062d\u06cc\u062d Unit\u0647\u0627 \u0631\u0627 \u0645\u0648\u0631\u062f \u0628\u0631\u0631\u0633\u06cc \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u062f\u0647\u06cc\u0645.\n\u062f\u0631 \u0627\u062f\u0627\u0645\u0647 \u0628\u0647 \u0646\u062d\u0648\u06c0 \u0646\u0648\u0634\u062a\u0646 Unit Test \u062f\u0631 React \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u06cc\u0645."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unit-testing-in-react"},"Unit Testing in React"),(0,r.kt)("p",null,"\u062e\u0648\u0634\u0628\u062e\u062a\u0627\u0646\u0647 React \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u067e\u06cc\u0634\u200c\u0641\u0631\u0636 \u0627\u0632 Unit Testing \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f.\n\u062f\u0631 React \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," \u0628\u0647 \u0646\u0648\u0634\u062a\u0646 \u062a\u0633\u062a \u0628\u067e\u0631\u062f\u0627\u0632\u06cc\u062f.\n\u0627\u06cc\u0646 \u062a\u0633\u062a\u200c\u0647\u0627 \u0628\u0631\u0627\u06cc \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u0627\u0632 \u0639\u0645\u0644\u06a9\u0631\u062f \u0635\u062d\u06cc\u062d \u062a\u0645\u0627\u0645 \u0642\u0633\u0645\u062a\u200c\u0647\u0627\u06cc \u0633\u0627\u0645\u0627\u0646\u0647\u060c\n\u0627\u0639\u0645 \u0627\u0632 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u060c \u0633\u0631\u0648\u06cc\u0633\u200c\u0647\u0627\u060c \u062a\u0648\u0627\u0628\u0639 \u0648 ... \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u0645\u0648\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0642\u0631\u0627\u0631 \u0628\u06af\u06cc\u0631\u0646\u062f."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646\u060c \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0627\u0646\u062c\u0627\u0645 \u06a9\u0627\u0631 \u062e\u0627\u0635\u06cc \u0646\u06cc\u0633\u062a\u061b\n\u0635\u0631\u0641\u0627\u064b \u06a9\u0627\u0641\u06cc \u0627\u0633\u062a \u0628\u0627 \u0627\u062c\u0631\u0627\u06cc \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u062f\u0631 Terminal\u060c \u062a\u0633\u062a\u200c\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u0631\u0627 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm test\n")),(0,r.kt)("p",null,"\u0628\u0627 \u0627\u062c\u0631\u0627\u06cc \u062f\u0633\u062a\u0648\u0631 \u0628\u0627\u0644\u0627 \u06cc\u06a9 \u0645\u0631\u0648\u0631\u06af\u0631 \u0628\u0627\u0632 \u062e\u0648\u0627\u0647\u062f \u0634\u062f \u06a9\u0647 \u0644\u06cc\u0633\u062a\u06cc \u0627\u0632 \u062a\u0633\u062a\u200c\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0634\u0645\u0627 \u0646\u0634\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f\u061b\n\u0647\u0645\u0686\u0646\u06cc\u0646 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f \u06a9\u062f\u0627\u0645\u200c\u06cc\u06a9 \u0627\u0632 \u0622\u0646\u200c\u0647\u0627 \u0645\u0648\u0641\u0642 \u0648 \u06a9\u062f\u0627\u0645\u200c\u06cc\u06a9 \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062f\u0647\u200c\u0627\u0646\u062f."),(0,r.kt)("p",null,"\u0627\u0632 \u0622\u0646\u062c\u0627\u06cc\u06cc \u06a9\u0647 \u0633\u0627\u06cc\u062a React \u0628\u0647\u200c\u0637\u0648\u0631 \u06a9\u0627\u0645\u0644 \u062f\u0631 \u0645\u0648\u0631\u062f \u062a\u0633\u062a\u200c\u0646\u0648\u06cc\u0633\u06cc \u062a\u0648\u0636\u06cc\u062d \u062f\u0627\u062f\u0647 \u0627\u0633\u062a\u060c\n\u0634\u0645\u0627 \u0631\u0627 \u0628\u0647 \u0645\u0637\u0627\u0644\u0639\u06c0 \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0645\u0631\u0628\u0648\u0637\u0647 \u062f\u0639\u0648\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645\n\u0648 \u0627\u0632 \u0622\u0648\u0631\u062f\u0646 \u0645\u0637\u0627\u0644\u0628 \u062a\u06a9\u0631\u0627\u0631\u06cc \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0633\u062a\u0646\u062f \u0645\u06cc\u200c\u067e\u0631\u0647\u06cc\u0632\u06cc\u0645."),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u06cc\u0646 \u0645\u0641\u0647\u0648\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0644\u06cc\u0646\u06a9\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacy.reactjs.org/docs/testing.html"},"React - Intro to Testing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacy.reactjs.org/docs/testing-recipes.html"},"React Testing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/getting-started"},"Jest"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u067e\u0631\u0648\u0698\u0647"},"\u067e\u0631\u0648\u0698\u0647"),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u062a\u0645\u0627\u0645 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u0648 \u0633\u0631\u0648\u06cc\u0633\u200c\u0647\u0627\u06cc \u067e\u0631\u0648\u0698\u06c0 \u062e\u0648\u062f Unit Test \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f\n\u0648 \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06cc\u062f \u062d\u062f\u0627\u0642\u0644 80\u062f\u0631\u0635\u062f \u06a9\u062f\u0647\u0627 \u062a\u0633\u062a \u0634\u062f\u0647 \u0628\u0627\u0634\u0646\u062f."),(0,r.kt)("p",null,"\u0627\u0632 \u0647\u0631 \u062f\u0648 \u0639\u0636\u0648\u0650 \u06cc\u06a9\u06cc \u0627\u0632 \u062a\u06cc\u0645\u200c\u0647\u0627 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u06a9\u0646\u06cc\u062f \u062a\u0627 \u06a9\u062f \u0634\u0645\u0627 \u0631\u0627 \u062c\u062f\u0627\u06af\u0627\u0646\u0647 Review \u06a9\u0646\u0646\u062f\u061b\n\u0628\u0639\u062f \u0627\u0632 \u0627\u06cc\u0646\u06a9\u0647 Approve \u06a9\u0631\u062f\u0646\u062f\u060c \u0628\u0647 \u0645\u0646\u062a\u0648\u0631 \u0639\u0627\u062f\u06cc \u0645\u0631\u0627\u062c\u0639\u0647 \u06a9\u0646\u06cc\u062f\n\u0648 \u067e\u0633 \u0627\u0632 Approve \u0627\u0648\u060c \u0628\u0647 \u0645\u0646\u062a\u0648\u0631 \u0633\u0646\u06cc\u0648\u0631 \u0628\u06af\u0648\u06cc\u06cc\u062f \u062a\u0627 \u06a9\u062f \u0634\u0645\u0627 \u0631\u0627 \u0628\u0628\u06cc\u0646\u062f."),(0,r.kt)("p",null,"\u0647\u0645\u0686\u0646\u06cc\u0646 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a \u0634\u0645\u0627 \u0647\u0645 \u062d\u062f\u0627\u0642\u0644 \u06a9\u062f \u06cc\u06a9 \u062a\u06cc\u0645 \u062f\u06cc\u06af\u0631 \u0631\u0627 Review \u06a9\u0646\u06cc\u062f.\n\u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f \u062a\u0645\u0627\u0645 \u0645\u0648\u0627\u0631\u062f\u06cc \u06a9\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0641\u0627\u0632 \u06cc\u0627\u062f \u06af\u0631\u0641\u062a\u06cc\u062f \u0631\u0627 \u0647\u0646\u06af\u0627\u0645 Review \u0645\u0648\u0631\u062f \u0628\u0631\u0631\u0633\u06cc \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u062f."))}p.isMDXComponent=!0}}]);